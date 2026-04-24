import React from 'react';

import { CloseIcon, ExpandIcon, HistoryIcon, PlusIcon } from '@/components/icons';
import type { Message } from '@/types';

import { MessageInput } from './MessageInput';
import { MessageList } from './MessageList';

interface ChatWindowProps {
  title: string;
  placeholder: string;
  messages: Message[];
  text: string;
  onTextChange: (text: string) => void;
  files: File[];
  onFilesChange: (files: File[]) => void;
  onSend: (text: string, files?: File[]) => void;
  onClose: () => void;
  onNewChat?: () => void;
  onHistory?: () => void;
  onExpand?: () => void;
  expanded?: boolean;
}

export const ChatWindow: React.FC<ChatWindowProps> = props => {
  const {
    title,
    placeholder,
    messages,
    text,
    onTextChange,
    files,
    onFilesChange,
    onSend,
    onClose,
    onNewChat,
    onHistory,
    onExpand,
    expanded,
  } = props;

  const window = (
    <div className={`elitea-assistant-window${expanded ? ' elitea-assistant-window--expanded' : ''}`}>
      <div className="elitea-assistant-header">
        <div className="elitea-assistant-header-left">
          <button
            className="elitea-assistant-header-close-action"
            onClick={onClose}
            aria-label="Close chat"
            type="button"
          >
            <CloseIcon />
          </button>
          <h2 className="elitea-assistant-header-title">{title}</h2>
        </div>
        <div className="elitea-assistant-header-right">
          <button
            className="elitea-assistant-header-action"
            onClick={onNewChat}
            aria-label="New chat"
            type="button"
          >
            <PlusIcon />
          </button>
          <button
            className="elitea-assistant-header-action"
            onClick={onHistory}
            aria-label="Chat history"
            type="button"
          >
            <HistoryIcon />
          </button>
          <button
            className="elitea-assistant-header-action"
            onClick={onExpand}
            aria-label="Expand chat"
            type="button"
          >
            <ExpandIcon />
          </button>
        </div>
      </div>
      <MessageList messages={messages} />
      <MessageInput
        placeholder={placeholder}
        text={text}
        onTextChange={onTextChange}
        files={files}
        onFilesChange={onFilesChange}
        onSend={onSend}
        expanded={expanded}
      />
    </div>
  );

  if (expanded) {
    return (
      <div
        className="elitea-assistant-overlay"
        onClick={onExpand}
      >
        <div onClick={e => e.stopPropagation()}>{window}</div>
      </div>
    );
  }

  return window;
};
