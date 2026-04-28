import React, { memo } from 'react';

import { AssistantIcon } from '@/components/icons';

type TChatButtonProps = {
  onClick: () => void;
};

const ChatButton: React.FC<TChatButtonProps> = memo(props => {
  const { onClick } = props;

  return (
    <button
      className="elitea-assistant-button"
      onClick={onClick}
      aria-label="Support Assistant"
      type="button"
    >
      <AssistantIcon />
    </button>
  );
});

ChatButton.displayName = 'ChatButton';

export default ChatButton;
