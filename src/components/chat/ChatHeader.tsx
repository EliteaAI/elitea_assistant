import React, { memo, useCallback, useEffect, useRef, useState } from 'react';

import { CloseIcon, CollapseIcon, ExpandIcon, HistoryIcon, PlusIcon } from '@/components/icons';
import { Tooltip } from '@/components/shared';
import type { TConversationListItem } from '@/lib/types';

type TChatHeaderProps = {
  title: string;
  expanded?: boolean;
  history: TConversationListItem[];
  currentConversationId: string;
  disabled?: boolean;
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
    disabled,
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
            disabled={disabled}
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
              disabled={disabled || history.length === 0}
            >
              <HistoryIcon />
            </button>
            {showHistory && history.length > 0 && (
              <div className="elitea-assistant-history-dropdown">
                <div className="elitea-assistant-history-dropdown-scroll">
                  {history.map(conversation => (
                    <button
                      key={conversation.uuid}
                      className="elitea-assistant-history-item"
                      onClick={() => handleSelectConversation(conversation.uuid)}
                      type="button"
                      disabled={conversation.uuid === currentConversationId}
                    >
                      {conversation.name}
                    </button>
                  ))}
                </div>
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
            {expanded ? <CollapseIcon /> : <ExpandIcon />}
          </button>
        </Tooltip>
      </div>
    </div>
  );
});

ChatHeader.displayName = 'ChatHeader';

export default ChatHeader;
