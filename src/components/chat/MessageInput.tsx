import React, { useState } from 'react';

import { AttachmentIcon, SendIcon } from '@/components/icons';

interface MessageInputProps {
  placeholder: string;
  onSend: (text: string) => void;
  onAttach?: () => void;
}

export const MessageInput: React.FC<MessageInputProps> = props => {
  const { placeholder, onSend, onAttach } = props;
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
      <button
        className="elitea-assistant-attach-button"
        onClick={onAttach}
        aria-label="Attach file"
        type="button"
      >
        <AttachmentIcon />
      </button>
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
