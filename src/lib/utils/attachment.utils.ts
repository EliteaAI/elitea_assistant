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

export const buildValidatedAttachments = (files: File[], existing: TAttachment[]): TAttachment[] => {
  const newNames = new Set(files.map(f => f.name));
  const kept = existing.filter(a => !newNames.has(a.name));

  let imageCount = kept.filter(a => isImageFile(a.name)).length;
  let totalSize = kept.reduce((sum, a) => sum + a.size, 0);
  const totalCount = kept.length + files.length;

  const validated: TAttachment[] = files.map(file => {
    const id = generateUUID();

    const fileError = validateFile(file);
    if (fileError) return createErrorAttachment(file, id, fileError);

    if (totalCount > MAX_ATTACHMENT_COUNT)
      return createErrorAttachment(file, id, `Max ${MAX_ATTACHMENT_COUNT} attachments allowed`);

    const isImage = isImageFile(file.name);

    if (isImage) imageCount += 1;
    totalSize += file.size;

    if (isImage && imageCount > MAX_IMAGE_ATTACHMENT_COUNT)
      return createErrorAttachment(file, id, `Max ${MAX_IMAGE_ATTACHMENT_COUNT} images allowed`);

    if (totalSize > MAX_TOTAL_UPLOAD_SIZE)
      return createErrorAttachment(
        file,
        id,
        `Total upload size exceeds ${formatFileSize(MAX_TOTAL_UPLOAD_SIZE)}`,
      );

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
