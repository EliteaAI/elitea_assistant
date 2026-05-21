import React, { memo, useEffect, useRef } from 'react';

import { MessageItem, MessageListSkeleton } from '@/components/chat';
import type { TMessage } from '@/lib/types';

type TMessageListProps = {
  avatar: string;
  messages: TMessage[];
  isLoading?: boolean;
  onAnimationComplete?: (messageId: string) => void;
};

const MessageList: React.FC<TMessageListProps> = memo(props => {
  const { avatar, messages, isLoading, onAnimationComplete } = props;
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
    return <MessageListSkeleton />;
  }

  if (messages.length === 0)
    return <div className="elitea-assistant-empty">Send a message to start a conversation</div>;

  return (
    <div className="elitea-assistant-messages">
      {messages.map(msg => (
        <MessageItem
          key={msg.id}
          message={msg}
          avatar={avatar}
          onAnimationComplete={onAnimationComplete}
        />
      ))}
      <div ref={bottomRef} />
    </div>
  );
});

MessageList.displayName = 'MessageList';

export default MessageList;
