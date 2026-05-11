import { useCallback, useState } from 'react';

import { CHUNK_SIZE, MAX_FILE_SIZE } from '@/lib/constants';
import { useApi } from '@/lib/hooks';
import type { TAttachment, TChunkUploadResponse, TUploadResponse } from '@/lib/types';
import { generateUUID } from '@/lib/utils';

type TUploadParams = {
  conversationId: string;
  attachments: TAttachment[];
  onProgress: (attachmentId: string, progress: number) => void;
  onComplete: (attachmentId: string, filepath: string) => void;
  onError: (attachmentId: string, error: string) => void;
};

export const useAttachmentUpload = () => {
  const api = useApi();

  const [isUploading, setIsUploading] = useState(false);

  const uploadSmallFile = useCallback(
    async (
      file: File,
      conversationId: string,
      onProgress: (loaded: number, total: number) => void,
    ): Promise<TUploadResponse> => {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('overwrite', '1');

      const response = await api.uploadFile(conversationId, formData, onProgress);
      // Response is an array, get first item
      return (response as TUploadResponse[])[0];
    },
    [api],
  );

  const uploadChunk = useCallback(
    async (params: {
      chunk: Blob;
      chunkIndex: number;
      totalChunks: number;
      fileId: string;
      fileName: string;
      conversationId: string;
      onProgress: (loaded: number, total: number) => void;
    }): Promise<TChunkUploadResponse> => {
      const { chunk, chunkIndex, totalChunks, fileId, fileName, conversationId, onProgress } = params;

      const formData = new FormData();
      formData.append('file', chunk);
      formData.append('chunk_index', String(chunkIndex));
      formData.append('total_chunks', String(totalChunks));
      formData.append('file_id', fileId);
      formData.append('file_name', fileName);
      formData.append('overwrite', '1');

      const response = await api.uploadFile(conversationId, formData, onProgress);

      if (Array.isArray(response)) return response[0] as TChunkUploadResponse;

      return (response ?? { status: 'chunk_received' }) as TChunkUploadResponse;
    },
    [api],
  );

  const createFileChunks = useCallback((file: File): Blob[] => {
    const chunks: Blob[] = [];
    let start = 0;

    while (start < file.size) {
      const end = Math.min(start + CHUNK_SIZE, file.size);
      chunks.push(file.slice(start, end));
      start = end;
    }

    return chunks;
  }, []);

  const uploadSingleAttachment = useCallback(
    async (
      attachment: TAttachment,
      conversationId: string,
      onProgress: (progress: number) => void,
    ): Promise<string> => {
      const { file } = attachment;

      if (file.size > MAX_FILE_SIZE)
        throw new Error(`File "${file.name}" exceeds maximum size limit of 300MB`);

      // Small file - direct upload
      if (file.size <= CHUNK_SIZE) {
        const result = await uploadSmallFile(file, conversationId, (loaded, total) => {
          const progress = Math.round((loaded / total) * 100);
          onProgress(progress);
        });
        return result.filepath;
      }

      // Large file - chunked upload
      const chunks = createFileChunks(file);
      const fileId = generateUUID();
      const totalChunks = chunks.length;
      let uploadedBytes = 0;
      let finalFilepath = '';

      for (let chunkIndex = 0; chunkIndex < totalChunks; chunkIndex++) {
        const chunk = chunks[chunkIndex];
        const chunkStartBytes = uploadedBytes;

        const result = await uploadChunk({
          chunk,
          chunkIndex,
          totalChunks,
          fileId,
          fileName: file.name,
          conversationId,
          onProgress: (loaded, _total) => {
            const totalUploaded = chunkStartBytes + loaded;
            const progress = Math.round((totalUploaded / file.size) * 100);
            onProgress(Math.min(progress, 99)); // Don't show 100 until complete
          },
        });

        uploadedBytes += chunk.size;

        // Last chunk returns the final filepath
        if (result.filepath) finalFilepath = result.filepath;
      }

      onProgress(100);
      return finalFilepath;
    },
    [uploadSmallFile, uploadChunk, createFileChunks],
  );

  const uploadAttachments = useCallback(
    async (params: TUploadParams): Promise<void> => {
      const { conversationId, attachments, onProgress, onComplete, onError } = params;

      if (!attachments.length) return;

      setIsUploading(true);

      try {
        // Upload all attachments in parallel
        await Promise.all(
          attachments.map(async attachment => {
            try {
              const filepath = await uploadSingleAttachment(attachment, conversationId, progress => {
                onProgress(attachment.id, progress);
              });
              onComplete(attachment.id, filepath);
            } catch (err) {
              const errorMessage = err instanceof Error ? err.message : 'Upload failed';
              onError(attachment.id, errorMessage);
            }
          }),
        );
      } finally {
        setIsUploading(false);
      }
    },
    [uploadSingleAttachment],
  );

  return {
    uploadAttachments,
    isUploading,
    maxFileSize: MAX_FILE_SIZE,
    chunkSize: CHUNK_SIZE,
  };
};
