import React from 'react';

import type { Message } from '../../types';
import { CloseIcon } from '../shared/icons';
import { MessageInput } from './MessageInput';
import { MessageList } from './MessageList';

interface ChatWindowProps {
  title: string;
  placeholder: string;
  messages: Message[];
  onSend: (text: string) => void;
  onClose: () => void;
}

export const ChatWindow: React.FC<ChatWindowProps> = props => {
  const { title, placeholder, messages, onSend, onClose } = props;

  return (
    <div className="elitea-assistant-window">
      <div className="elitea-assistant-header">
        <h2 className="elitea-assistant-header-title">{title}</h2>
        <button
          className="elitea-assistant-header-close"
          onClick={onClose}
          aria-label="Close chat"
          type="button"
        >
          <CloseIcon />
        </button>
      </div>
      <MessageList messages={messages} />
      <MessageInput
        placeholder={placeholder}
        onSend={onSend}
      />
    </div>
  );
};
