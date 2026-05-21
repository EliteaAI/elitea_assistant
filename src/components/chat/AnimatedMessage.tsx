import React, { memo } from 'react';

import { MarkdownContent } from '@/components/chat';
import { useTypewriter } from '@/lib/hooks';
import type { TMessage } from '@/lib/types';

type TAnimatedMessageProps = {
  message: TMessage;
  onComplete: () => void;
};

const AnimatedMessage: React.FC<TAnimatedMessageProps> = memo(props => {
  const { message, onComplete } = props;

  const { displayedText, skipAnimation } = useTypewriter(message.content, !!message.isAnimating, onComplete);

  return (
    <div
      onClick={skipAnimation}
      style={{ cursor: message.isAnimating ? 'pointer' : undefined }}
    >
      <MarkdownContent content={displayedText} />
    </div>
  );
});

AnimatedMessage.displayName = 'AnimatedMessage';

export default AnimatedMessage;
