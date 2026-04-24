import React from 'react';

import { AssistantIcon } from '@/components/icons';

interface ChatButtonProps {
  onClick: () => void;
}

export const ChatButton: React.FC<ChatButtonProps> = props => {
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
};
