export enum UploadStatus {
  PENDING = 'pending',
  UPLOADING = 'uploading',
  COMPLETED = 'completed',
  ERROR = 'error',
}

export const MAX_FILE_SIZE = 150 * 1024 * 1024; // 150MB
export const MAX_IMAGE_SIZE = 3 * 1024 * 1024; // 3MB
export const MAX_TOTAL_UPLOAD_SIZE = 150 * 1024 * 1024; // 150MB
export const MAX_ATTACHMENT_COUNT = 10;
export const MAX_IMAGE_ATTACHMENT_COUNT = 10;
export const CHUNK_SIZE = 5 * 1024 * 1024; // 5MB

export const IMAGE_EXTENSIONS = new Set(['png', 'jpg', 'jpeg', 'gif', 'webp', 'bmp', 'svg']);

const DOCUMENT_EXTENSIONS = new Set([
  'txt',
  'md',
  'pdf',
  'docx',
  'doc',
  'csv',
  'xlsx',
  'xls',
  'json',
  'jsonl',
  'htm',
  'html',
  'xml',
  'ppt',
  'pptx',
  'yml',
  'yaml',
]);

const CODE_EXTENSIONS = new Set([
  'py',
  'js',
  'ts',
  'jsx',
  'tsx',
  'mjs',
  'cjs',
  'java',
  'cpp',
  'c',
  'h',
  'hpp',
  'cs',
  'rb',
  'go',
  'php',
  'swift',
  'kt',
  'rs',
  'm',
  'scala',
  'pl',
  'sh',
  'bat',
  'lua',
  'r',
  'pas',
  'asm',
  'dart',
  'groovy',
  'sql',
  'hs',
  'bash',
  'zsh',
  'pm',
  'toml',
  'ini',
  'cfg',
  'conf',
  'env',
]);

export const ALLOWED_EXTENSIONS = new Set([...IMAGE_EXTENSIONS, ...DOCUMENT_EXTENSIONS, ...CODE_EXTENSIONS]);

export const ACCEPTED_FILE_EXTENSIONS = [...ALLOWED_EXTENSIONS].map(ext => `.${ext}`).join(',');
