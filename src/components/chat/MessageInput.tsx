import React, { useRef, useState } from 'react';

import { Tooltip } from '@/components/Tooltip';
import { AttachmentIcon, CloseIcon, FileIcon, SendIcon } from '@/components/icons';

interface MessageInputProps {
  placeholder: string;
  text: string;
  onTextChange: (text: string) => void;
  files: File[];
  onFilesChange: (files: File[]) => void;
  onSend: (text: string, files?: File[]) => void;
  expanded?: boolean;
}

export const MessageInput: React.FC<MessageInputProps> = props => {
  const { placeholder, text, onTextChange, files, onFilesChange, onSend, expanded } = props;

  const fileInputRef = useRef<HTMLInputElement>(null);

  const [fileInputKey, setFileInputKey] = useState(0);

  const handleSend = () => {
    const trimmed = text.trim();

    if (!trimmed && files.length === 0) return;

    onSend(trimmed, files.length > 0 ? files : undefined);
    onTextChange('');
    onFilesChange([]);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleAttachClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.target.files;

    if (selectedFiles) onFilesChange([...files, ...Array.from(selectedFiles)]);

    // Force a fresh input element so the next click always works
    setFileInputKey(prev => prev + 1);
  };

  const handleRemoveFile = (index: number) => {
    onFilesChange(files.filter((_, i) => i !== index));
  };

  const maxVisible = expanded ? 3 : 2;
  const visibleFiles = files.slice(0, maxVisible);
  const remainingCount = files.length - maxVisible;

  return (
    <div className="elitea-assistant-input-area">
      {files.length > 0 && (
        <div className="elitea-assistant-file-list">
          {visibleFiles.map((file, index) => (
            <Tooltip
              key={index}
              content={file.name}
            >
              <div className="elitea-assistant-file-chip">
                <span className="elitea-assistant-file-chip-icon">
                  <FileIcon />
                </span>
                <span className="elitea-assistant-file-chip-name">{file.name}</span>
                <button
                  className="elitea-assistant-file-chip-remove"
                  onClick={() => handleRemoveFile(index)}
                  aria-label={`Remove ${file.name}`}
                  type="button"
                >
                  <CloseIcon />
                </button>
              </div>
            </Tooltip>
          ))}
          {remainingCount > 0 && (
            <div className="elitea-assistant-file-chip elitea-assistant-file-chip--count">
              +{remainingCount}
            </div>
          )}
        </div>
      )}
      <div className="elitea-assistant-input-row">
        <input
          key={fileInputKey}
          ref={fileInputRef}
          type="file"
          multiple
          onChange={handleFileChange}
          style={{ display: 'none' }}
        />
        <button
          className="elitea-assistant-attach-button"
          onClick={handleAttachClick}
          aria-label="Attach file"
          type="button"
        >
          <AttachmentIcon />
        </button>
        <textarea
          className="elitea-assistant-input"
          value={text}
          onChange={e => onTextChange(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          rows={1}
        />
        <button
          className="elitea-assistant-send-button"
          onClick={handleSend}
          disabled={!text.trim() && files.length === 0}
          aria-label="Send message"
          type="button"
        >
          <SendIcon />
        </button>
      </div>
    </div>
  );
};
