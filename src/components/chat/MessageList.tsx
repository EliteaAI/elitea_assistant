import React, { useEffect, useRef } from 'react';

import { AssistantIcon, UserIcon } from '@/components/icons';
import { formatTime } from '@/lib/utils';
import type { Message } from '@/types';

interface MessageListProps {
  messages: Message[];
}

export const MessageList: React.FC<MessageListProps> = props => {
  const { messages } = props;
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

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
                <UserIcon />
              </span>
            )}
          </div>
          <div className={`elitea-assistant-message elitea-assistant-message--${msg.role}`}>
            {msg.content}
          </div>
        </div>
      ))}
      <div ref={bottomRef} />
    </div>
  );
};
