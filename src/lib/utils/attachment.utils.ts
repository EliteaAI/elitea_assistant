import {
  ALLOWED_EXTENSIONS,
  IMAGE_EXTENSIONS,
  MAX_ATTACHMENT_COUNT,
  MAX_FILE_SIZE,
  MAX_IMAGE_ATTACHMENT_COUNT,
  MAX_IMAGE_SIZE,
  MAX_TOTAL_UPLOAD_SIZE,
  UploadStatus,
} from '@/lib/constants/attachment.constants';
import type { TAttachment } from '@/lib/types';

import { generateUUID } from './conversation.utils';
import { formatFileSize } from './format.utils';

type LimitCounters = { totalCount: number; imageCount: number; totalSize: number };

export const normalizeFileExtension = (name: string): string => {
  const dotIndex = name.lastIndexOf('.');
  if (dotIndex === -1) return name;

  return name.substring(0, dotIndex) + name.substring(dotIndex).toLowerCase();
};

export const getFileExtension = (filename: string): string => (filename.split('.').pop() || '').toLowerCase();

export const isImageFile = (filename: string): boolean => IMAGE_EXTENSIONS.has(getFileExtension(filename));

export const isAllowedFileType = (filename: string): boolean =>
  ALLOWED_EXTENSIONS.has(getFileExtension(filename));

const validateFile = (file: File): string | null => {
  if (!isAllowedFileType(file.name)) return `Unsupported file type: .${getFileExtension(file.name)}`;

  if (isImageFile(file.name) && file.size > MAX_IMAGE_SIZE)
    return `Image exceeds ${formatFileSize(MAX_IMAGE_SIZE)} limit`;

  if (file.size > MAX_FILE_SIZE) return `File exceeds ${formatFileSize(MAX_FILE_SIZE)} limit`;

  return null;
};

const checkLimits = (filename: string, fileSize: number, counters: LimitCounters): string | null => {
  if (counters.totalCount > MAX_ATTACHMENT_COUNT) return `Max ${MAX_ATTACHMENT_COUNT} attachments allowed`;

  const isImage = isImageFile(filename);
  if (isImage) counters.imageCount += 1;
  counters.totalSize += fileSize;

  if (isImage && counters.imageCount > MAX_IMAGE_ATTACHMENT_COUNT)
    return `Max ${MAX_IMAGE_ATTACHMENT_COUNT} images allowed`;

  if (counters.totalSize > MAX_TOTAL_UPLOAD_SIZE)
    return `Total upload size exceeds ${formatFileSize(MAX_TOTAL_UPLOAD_SIZE)}`;

  return null;
};

const createErrorAttachment = (file: File, id: string, error: string): TAttachment => ({
  id,
  file,
  name: file.name,
  size: file.size,
  type: file.type,
  status: UploadStatus.ERROR,
  progress: 0,
  error,
});

const markAllOverLimit = (attachments: TAttachment[]): TAttachment[] => {
  const error = `Max ${MAX_ATTACHMENT_COUNT} attachments allowed`;

  return attachments.map(a =>
    a.status === UploadStatus.UPLOADING || a.status === UploadStatus.COMPLETED
      ? a
      : { ...a, status: UploadStatus.ERROR, error },
  );
};

export const buildValidatedAttachments = (files: File[], existing: TAttachment[]): TAttachment[] => {
  const newNames = new Set(files.map(f => f.name));
  const kept = existing.filter(a => !newNames.has(a.name));
  const totalCount = kept.length + files.length;

  if (totalCount > MAX_ATTACHMENT_COUNT) {
    const newAttachments: TAttachment[] = files.map(file => {
      const id = generateUUID();

      return createErrorAttachment(file, id, `Max ${MAX_ATTACHMENT_COUNT} attachments allowed`);
    });

    return markAllOverLimit([...kept, ...newAttachments]);
  }

  const counters: LimitCounters = {
    totalCount,
    imageCount: kept.filter(a => isImageFile(a.name)).length,
    totalSize: kept.reduce((sum, a) => sum + a.size, 0),
  };

  const validated: TAttachment[] = files.map(file => {
    const id = generateUUID();

    const fileError = validateFile(file);

    if (fileError) return createErrorAttachment(file, id, fileError);

    const limitError = checkLimits(file.name, file.size, counters);

    if (limitError) return createErrorAttachment(file, id, limitError);

    return {
      id,
      file,
      name: file.name,
      size: file.size,
      type: file.type,
      status: UploadStatus.PENDING,
      progress: 0,
    };
  });

  return [...kept, ...validated];
};

export const revalidateAttachments = (attachments: TAttachment[]): TAttachment[] => {
  if (attachments.length > MAX_ATTACHMENT_COUNT) return markAllOverLimit(attachments);

  const counters: LimitCounters = {
    totalCount: attachments.length,
    imageCount: 0,
    totalSize: 0,
  };

  return attachments.map(attachment => {
    if (attachment.status !== UploadStatus.ERROR) {
      if (isImageFile(attachment.name)) counters.imageCount += 1;

      counters.totalSize += attachment.size;
      return attachment;
    }

    const fileError = attachment.file ? validateFile(attachment.file) : null;

    if (fileError) return { ...attachment, error: fileError };

    const limitError = checkLimits(attachment.name, attachment.size, counters);

    if (limitError) return attachment;

    return { ...attachment, status: UploadStatus.PENDING, error: undefined };
  });
};
