import React, { memo, useEffect, useRef } from 'react';

import { AssistantIcon, UserIcon } from '@/components/icons';
import { CopyButton } from '@/components/shared';
import type { TMessage } from '@/lib/types';
import { formatTime } from '@/lib/utils';

type TMessageListProps = {
  avatar: string;
  messages: TMessage[];
  isLoading?: boolean;
};

const MessageList: React.FC<TMessageListProps> = memo(props => {
  const { avatar, messages, isLoading } = props;
  const bottomRef = useRef<HTMLDivElement>(null);
  const hasScrolledRef = useRef(false);

  useEffect(() => {
    if (messages.length === 0) {
      hasScrolledRef.current = false;
      return;
    }

    const behavior = hasScrolledRef.current ? 'smooth' : 'instant';
    hasScrolledRef.current = true;

    bottomRef.current?.scrollIntoView({ behavior });
  }, [messages]);

  if (isLoading) {
    return (
      <div className="elitea-assistant-messages">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className={`elitea-assistant-skeleton-row ${i % 2 === 0 ? 'elitea-assistant-skeleton-row--left' : 'elitea-assistant-skeleton-row--right'}`}
          >
            <div className="elitea-assistant-skeleton-meta">
              <div className="elitea-assistant-skeleton elitea-assistant-skeleton--avatar" />
              <div className="elitea-assistant-skeleton elitea-assistant-skeleton--time" />
            </div>
            <div className="elitea-assistant-skeleton elitea-assistant-skeleton--bubble" />
          </div>
        ))}
      </div>
    );
  }

  if (messages.length === 0) {
    return <div className="elitea-assistant-empty">Send a message to start a conversation</div>;
  }

  return (
    <div className="elitea-assistant-messages">
      {messages.map(msg => (
        <div
          key={msg.id}
          className={`elitea-assistant-message-wrapper elitea-assistant-message-wrapper--${msg.role}`}
        >
          <div className={`elitea-assistant-message-meta elitea-assistant-message-meta--${msg.role}`}>
            {msg.role === 'assistant' && (
              <span className="elitea-assistant-message-avatar elitea-assistant-message-avatar--assistant">
                <AssistantIcon />
              </span>
            )}
            <span className="elitea-assistant-message-time">{formatTime(msg.timestamp)}</span>
            {msg.role === 'user' && (
              <span className="elitea-assistant-message-avatar elitea-assistant-message-avatar--user">
                {avatar ? (
                  <img
                    src={avatar}
                    alt="User avatar"
                    className="elitea-assistant-avatar-img"
                  />
                ) : (
                  <UserIcon />
                )}
              </span>
            )}
          </div>
          <div
            className={`elitea-assistant-message elitea-assistant-message--${msg.role}${msg.isError ? ' elitea-assistant-message--error' : ''}`}
          >
            {msg.content ||
              (msg.isStreaming ? (
                <span className="elitea-assistant-typing-indicator">
                  <span className="elitea-assistant-typing-dot" />
                  <span className="elitea-assistant-typing-dot" />
                  <span className="elitea-assistant-typing-dot" />
                </span>
              ) : (
                ''
              ))}
            {msg.role === 'assistant' && msg.content && !msg.isStreaming && <CopyButton text={msg.content} />}
          </div>
        </div>
      ))}
      <div ref={bottomRef} />
    </div>
  );
});

MessageList.displayName = 'MessageList';

export default MessageList;
