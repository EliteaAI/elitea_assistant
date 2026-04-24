import React, { useState } from 'react';

import { SendIcon } from '../shared/icons';

interface MessageInputProps {
  placeholder: string;
  onSend: (text: string) => void;
}

export const MessageInput: React.FC<MessageInputProps> = props => {
  const { placeholder, onSend } = props;
  const [text, setText] = useState('');

  const handleSend = () => {
    const trimmed = text.trim();
    if (!trimmed) return;
    onSend(trimmed);
    setText('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="elitea-assistant-input-area">
      <textarea
        className="elitea-assistant-input"
        value={text}
        onChange={e => setText(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        rows={1}
      />
      <button
        className="elitea-assistant-send-button"
        onClick={handleSend}
        disabled={!text.trim()}
        aria-label="Send message"
        type="button"
      >
        <SendIcon />
      </button>
    </div>
  );
};
