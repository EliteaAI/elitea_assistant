import React, { memo, useCallback, useEffect, useRef, useState } from 'react';

import { CloseIcon, ExpandIcon, HistoryIcon, PlusIcon } from '@/components/icons';
import { Tooltip } from '@/components/shared';
import type { TConversation } from '@/lib/types';

type TChatHeaderProps = {
  title: string;
  expanded?: boolean;
  history: TConversation[];
  currentConversationId: string;
  onClose: () => void;
  onExpand?: () => void;
  onNewChat: () => void;
  onSelectConversation: (conversationId: string) => void;
};

const ChatHeader: React.FC<TChatHeaderProps> = memo(props => {
  const {
    title,
    expanded,
    history,
    currentConversationId,
    onClose,
    onExpand,
    onNewChat,
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
      onSelectConversation(conversationId);
      setShowHistory(false);
    },
    [onSelectConversation],
  );

  return (
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
  );
});

ChatHeader.displayName = 'ChatHeader';

export default ChatHeader;
