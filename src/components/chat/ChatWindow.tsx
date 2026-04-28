import React, { memo, useCallback, useEffect, useRef, useState } from 'react';

import { CloseIcon, ExpandIcon, HistoryIcon, PlusIcon } from '@/components/icons';
import { Tooltip } from '@/components/shared';
import type { TConversation, TMessage } from '@/types';

import { MessageInput, MessageList } from './';

type TChatWindowProps = {
  title: string;
  placeholder: string;
  messages: TMessage[];
  text: string;
  onTextChange: (text: string) => void;
  files: File[];
  onFilesChange: (files: File[]) => void;
  onSend: (text: string, files?: File[]) => void;
  onClose: () => void;
  onNewChat?: () => void;
  onExpand?: () => void;
  expanded?: boolean;
  // TODO: Mock history props — will be replaced with BE-driven history when API is ready
  history?: TConversation[];
  currentConversationId?: string;
  onSelectConversation?: (conversationId: string) => void;
};

const ChatWindow: React.FC<TChatWindowProps> = memo(props => {
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
    onExpand,
    expanded,
    history = [],
    currentConversationId,
    onSelectConversation,
  } = props;

  const historyDropdownRef = useRef<HTMLDivElement>(null);

  const [showHistory, setShowHistory] = useState(false);

  useEffect(() => {
    if (!showHistory) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (historyDropdownRef.current && !historyDropdownRef.current.contains(e.target as Node)) {
        setShowHistory(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showHistory]);

  const toggleHistory = useCallback(() => {
    if (history.length > 0) setShowHistory(prev => !prev);
  }, [history.length]);

  const handleSelectConversation = useCallback(
    (conversationId: string) => {
      onSelectConversation?.(conversationId);
      setShowHistory(false);
    },
    [onSelectConversation],
  );

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
          <Tooltip content="New conversation">
            <button
              className="elitea-assistant-header-action"
              onClick={onNewChat}
              aria-label="New chat"
              type="button"
            >
              <PlusIcon />
            </button>
          </Tooltip>
          <Tooltip content="Conversations history">
            <div
              ref={historyDropdownRef}
              className="elitea-assistant-history-wrapper"
            >
              <button
                className="elitea-assistant-header-action"
                onClick={toggleHistory}
                aria-label="Chat history"
                type="button"
                disabled={history.length === 0}
              >
                <HistoryIcon />
              </button>
              {showHistory && history.length > 0 && (
                <div className="elitea-assistant-history-dropdown">
                  {history.map(conversation => (
                    <button
                      key={conversation.id}
                      className="elitea-assistant-history-item"
                      onClick={() => handleSelectConversation(conversation.id)}
                      type="button"
                      disabled={conversation.id === currentConversationId}
                    >
                      {conversation.title}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </Tooltip>
          <Tooltip content={expanded ? 'Collapse' : 'Expand'}>
            <button
              className="elitea-assistant-header-action"
              onClick={onExpand}
              aria-label="Expand chat"
              type="button"
            >
              <ExpandIcon />
            </button>
          </Tooltip>
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
});

ChatWindow.displayName = 'ChatWindow';

export default ChatWindow;
