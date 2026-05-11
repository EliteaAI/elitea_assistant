import { UploadStatus } from '@/lib/constants/attachment.constants';

export type TAttachment = {
  id: string;
  file: File;
  name: string;
  size: number;
  type: string;
  status: UploadStatus;
  progress: number;
  filepath?: string;
  error?: string;
};

export type TUploadResponse = {
  filepath: string;
  file_size: number;
};

export type TChunkUploadResponse = {
  status?: string;
  file_id?: string;
  chunk_index?: number;
  total_chunks?: number;
  message?: string;
  filepath?: string;
  file_size?: number;
};
