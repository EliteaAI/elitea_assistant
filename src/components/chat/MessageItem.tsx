import React, { memo } from 'react';

import { AnimatedMessage, MarkdownContent, StatusChips, TypingIndicator } from '@/components/chat';
import { AssistantIcon, UserIcon } from '@/components/icons';
import { CopyButton } from '@/components/shared';
import type { TMessage } from '@/lib/types';
import { formatTime } from '@/lib/utils';

type TMessageItemProps = {
  message: TMessage;
  avatar: string;
  onAnimationComplete?: (messageId: string) => void;
};

const MessageItem: React.FC<TMessageItemProps> = memo(props => {
  const { message, avatar, onAnimationComplete } = props;

  const hasChips = message.role === 'assistant' && message.statusChips && message.statusChips.length > 0;
  const showBubble = message.role === 'user' || message.content || (!hasChips && message.isStreaming);

  return (
    <div className={`elitea-assistant-message-wrapper elitea-assistant-message-wrapper--${message.role}`}>
      <div className={`elitea-assistant-message-meta elitea-assistant-message-meta--${message.role}`}>
        {message.role === 'assistant' && (
          <span className="elitea-assistant-message-avatar elitea-assistant-message-avatar--assistant">
            <AssistantIcon />
          </span>
        )}
        <span className="elitea-assistant-message-time">{formatTime(message.timestamp)}</span>
        {message.role === 'user' && (
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
      {hasChips && <StatusChips chips={message.statusChips!} />}
      {showBubble && (
        <div
          className={`elitea-assistant-message elitea-assistant-message--${message.role}${message.isError ? ' elitea-assistant-message--error' : ''}`}
        >
          {message.content ? (
            message.role === 'assistant' ? (
              message.isAnimating ? (
                <AnimatedMessage
                  message={message}
                  onComplete={() => onAnimationComplete?.(message.id)}
                />
              ) : (
                <MarkdownContent content={message.content} />
              )
            ) : (
              message.content
            )
          ) : message.isStreaming ? (
            <TypingIndicator />
          ) : (
            ''
          )}
          {message.role === 'assistant' &&
            message.content &&
            !message.isStreaming &&
            !message.isAnimating && <CopyButton text={message.content} />}
        </div>
      )}
    </div>
  );
});

MessageItem.displayName = 'MessageItem';

export default MessageItem;
