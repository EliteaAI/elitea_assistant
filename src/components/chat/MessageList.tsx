import React, { useEffect, useRef } from 'react';

import type { Message } from '../../types';

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
          className={`elitea-assistant-message elitea-assistant-message--${msg.role}`}
        >
          {msg.content}
        </div>
      ))}
      <div ref={bottomRef} />
    </div>
  );
};
