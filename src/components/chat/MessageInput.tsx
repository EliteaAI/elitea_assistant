import React, { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react';

import { AttachmentIcon, CloseIcon, SendIcon, StopIcon } from '@/components/icons';
import {
  ACCEPTED_FILE_EXTENSIONS,
  MAX_ATTACHMENT_COUNT,
  UploadStatus,
} from '@/lib/constants/attachment.constants';
import type { TAttachment } from '@/lib/types';

import { AttachmentChip } from './attachments';

type TMessageInputProps = {
  placeholder: string;
  text: string;
  onTextChange: (text: string) => void;
  attachments: TAttachment[];
  onAddFiles: (files: File[]) => void;
  onRemoveAttachment: (attachmentId: string) => void;
  onSend: (text: string) => void;
  onStop?: () => void;
  expanded?: boolean;
  disabled?: boolean;
  isUploading?: boolean;
  isStreaming?: boolean;
};

const MessageInput: React.FC<TMessageInputProps> = memo(props => {
  const {
    placeholder,
    text,
    onTextChange,
    attachments,
    onAddFiles,
    onRemoveAttachment,
    onSend,
    onStop,
    expanded,
    disabled,
    isUploading,
    isStreaming,
  } = props;

  const fileInputRef = useRef<HTMLInputElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const overflowWrapperRef = useRef<HTMLDivElement>(null);
  const userHeightRef = useRef<number | null>(null);
  const [fileInputKey, setFileInputKey] = useState(0);
  const [isDragOver, setIsDragOver] = useState(false);
  const [showOverflow, setShowOverflow] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  const dragCounterRef = useRef(0);

  const adjustTextareaHeight = useCallback(() => {
    const textarea = textareaRef.current;
    if (!textarea) return;
    if (userHeightRef.current !== null) return;

    const maxHeight = expanded ? 256 : 160;
    textarea.style.height = 'auto';
    textarea.style.maxHeight = `${maxHeight}px`;
    textarea.style.height = `${Math.min(textarea.scrollHeight, maxHeight)}px`;
  }, [expanded]);

  useEffect(() => {
    adjustTextareaHeight();
  }, [text, adjustTextareaHeight]);

  const handleResizeMouseDown = useCallback(
    (e: React.MouseEvent) => {
      if (!textareaRef.current) return;
      e.preventDefault();
      const startY = e.clientY;
      const startHeight = textareaRef.current.getBoundingClientRect().height;

      setIsResizing(true);

      const handleMouseMove = (moveEvent: MouseEvent) => {
        if (!textareaRef.current) return;
        const delta = startY - moveEvent.clientY;
        const maxHeight = expanded ? 240 : 180;
        const newHeight = Math.min(maxHeight, Math.max(48, startHeight + delta));
        userHeightRef.current = newHeight;
        textareaRef.current.style.height = `${newHeight}px`;
        textareaRef.current.style.maxHeight = `${newHeight}px`;
      };

      const handleMouseUp = () => {
        setIsResizing(false);
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };

      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    },
    [expanded],
  );

  useEffect(() => {
    if (!showOverflow) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (overflowWrapperRef.current && !overflowWrapperRef.current.contains(e.target as Node)) {
        setShowOverflow(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showOverflow]);

  const { visibleAttachments, hiddenAttachments, remainingAttachmentsCount } = useMemo(() => {
    const max = expanded ? 3 : 2;

    return {
      visibleAttachments: attachments.slice(0, max),
      hiddenAttachments: attachments.slice(max),
      remainingAttachmentsCount: attachments.length - max,
    };
  }, [attachments, expanded]);

  const attachmentsValid = useMemo(
    () =>
      !attachments?.length
        ? true
        : attachments.every(a => a.status === UploadStatus.PENDING || a.status === UploadStatus.COMPLETED),
    [attachments],
  );

  const isAtMaxCapacity = useMemo(
    () => attachments.filter(a => a.status !== UploadStatus.ERROR).length >= MAX_ATTACHMENT_COUNT,
    [attachments],
  );

  const isAttachButtonDisabled = useMemo(
    () => Boolean(disabled || isUploading || isAtMaxCapacity),
    [disabled, isUploading, isAtMaxCapacity],
  );

  const isSendDisabled = useMemo(
    () => Boolean(disabled || isUploading || !attachmentsValid || !text.trim()),
    [disabled, isUploading, text, attachmentsValid],
  );

  const toggleOverflow = useCallback(() => {
    setShowOverflow(prev => !prev);
  }, []);

  const handleSend = () => {
    const trimmed = text.trim();

    const completedAttachments = attachments.filter(a => a.status === UploadStatus.COMPLETED && a.filepath);
    if (!trimmed && completedAttachments.length === 0) return;

    if (isUploading) return;

    onSend(trimmed);
    onTextChange('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey && !e.ctrlKey && !e.metaKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleAttachClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.target.files;

    if (selectedFiles) onAddFiles(Array.from(selectedFiles));

    // Force a fresh input element so the next click always works
    setFileInputKey(prev => prev + 1);
  };

  const handleDragEnter = (e: React.DragEvent) => {
    e.preventDefault();
    dragCounterRef.current += 1;
    if (e.dataTransfer.types.includes('Files')) setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    dragCounterRef.current -= 1;
    if (dragCounterRef.current === 0) setIsDragOver(false);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    dragCounterRef.current = 0;
    setIsDragOver(false);

    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) onAddFiles(files);
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLTextAreaElement>) => {
    const files = Array.from(e.clipboardData.items)
      .filter(item => item.kind === 'file')
      .map(item => item.getAsFile())
      .filter((file): file is File => file !== null)
      .map(file => {
        const isGenericName = /^image\.\w+$/.test(file.name);
        if (!isGenericName) return file;

        const ext = file.name.split('.').pop() || 'png';
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
        return new File([file], `screenshot-${timestamp}.${ext}`, { type: file.type });
      });

    if (files.length === 0) return;

    e.preventDefault();
    onAddFiles(files);
  };

  return (
    <div
      className={[
        'elitea-assistant-input-area',
        isDragOver ? 'elitea-assistant-input-area--drag-over' : '',
        'elitea-assistant-input-area--resizable',
        isResizing ? 'elitea-assistant-input-area--resizing' : '',
      ]
        .filter(Boolean)
        .join(' ')}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      {isDragOver && <div className="elitea-assistant-drop-overlay">Drop files here</div>}
      <div
        className="elitea-assistant-resize-handle"
        onMouseDown={handleResizeMouseDown}
        aria-hidden="true"
      />
      {attachments.length > 0 && (
        <div className="elitea-assistant-file-list">
          {visibleAttachments.map(attachment => (
            <AttachmentChip
              key={attachment.id}
              attachment={attachment}
              onRemove={onRemoveAttachment}
            />
          ))}
          {remainingAttachmentsCount > 0 && (
            <div
              ref={overflowWrapperRef}
              className="elitea-assistant-overflow-wrapper"
            >
              <button
                className="elitea-assistant-file-chip elitea-assistant-file-chip--count"
                onClick={toggleOverflow}
                aria-label={`Show ${remainingAttachmentsCount} more files`}
                aria-haspopup="true"
                aria-expanded={showOverflow}
                type="button"
              >
                +{remainingAttachmentsCount}
              </button>
              {showOverflow && (
                <div
                  className="elitea-assistant-dropdown elitea-assistant-overflow-dropdown"
                  role="menu"
                >
                  {hiddenAttachments.map(attachment => (
                    <div
                      key={attachment.id}
                      className="elitea-assistant-overflow-item"
                      role="menuitem"
                    >
                      <span className="elitea-assistant-overflow-item-name">{attachment.name}</span>
                      <button
                        className="elitea-assistant-file-chip-remove"
                        onClick={() => {
                          if (hiddenAttachments.length === 1) setShowOverflow(false);
                          onRemoveAttachment(attachment.id);
                        }}
                        aria-label={`Remove ${attachment.name}`}
                        type="button"
                        disabled={attachment.status === UploadStatus.UPLOADING}
                      >
                        <CloseIcon />
                      </button>
                    </div>
                  ))}
                </div>
              )}
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
          accept={ACCEPTED_FILE_EXTENSIONS}
          onChange={handleFileChange}
          style={{ display: 'none' }}
        />
        <button
          className="elitea-assistant-attach-button"
          onClick={handleAttachClick}
          aria-label="Attach file"
          type="button"
          disabled={isAttachButtonDisabled}
        >
          <AttachmentIcon />
        </button>
        <textarea
          ref={textareaRef}
          id="elitea-assistant-message-input"
          className={`elitea-assistant-input${expanded ? ' elitea-assistant-input--expanded' : ''}`}
          value={text}
          onChange={e => onTextChange(e.target.value)}
          onKeyDown={handleKeyDown}
          onPaste={handlePaste}
          placeholder={placeholder}
          rows={1}
          autoFocus
          disabled={disabled}
        />
        {isStreaming ? (
          <button
            className="elitea-assistant-stop-button"
            onClick={onStop}
            aria-label="Stop generation"
            type="button"
          >
            <StopIcon />
          </button>
        ) : (
          <button
            className="elitea-assistant-send-button"
            onClick={handleSend}
            disabled={isSendDisabled}
            aria-label="Send message"
            type="button"
          >
            <SendIcon />
          </button>
        )}
      </div>
    </div>
  );
});

MessageInput.displayName = 'MessageInput';

export default MessageInput;
