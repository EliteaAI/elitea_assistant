import React from 'react';

import { ChatIcon, CloseIcon } from '../shared/icons';

interface ChatButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export const ChatButton: React.FC<ChatButtonProps> = props => {
  const { isOpen, onClick } = props;

  return (
    <button
      className="elitea-assistant-button"
      onClick={onClick}
      aria-label={isOpen ? 'Close chat' : 'Open chat'}
      type="button"
    >
      {isOpen ? <CloseIcon /> : <ChatIcon />}
    </button>
  );
};
