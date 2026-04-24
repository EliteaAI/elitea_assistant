import React, { useMemo, useState } from 'react';

import { ChatButton } from './components/chat/ChatButton';
import { ChatWindow } from './components/chat/ChatWindow';
import './styles/styles.css';
import { colorsToCSSProperties, resolveColors } from './theme/colors';
import type { EliteaAssistantProps, Message } from './types';

export const EliteaAssistant: React.FC<EliteaAssistantProps> = props => {
  const {
    apiUrl: _apiUrl,
    token: _token,
    title = 'Elitea Assistant',
    placeholder = 'Type a message...',
    position = 'bottom-right',
    theme = 'light',
    colors,
  } = props;

  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);

  const cssVars = useMemo(() => colorsToCSSProperties(resolveColors(theme, colors)), [theme, colors]);

  const handleSend = (text: string) => {
    const userMessage: Message = {
      id: crypto.randomUUID(),
      role: 'user',
      content: text,
      timestamp: Date.now(),
    };
    setMessages(prev => [...prev, userMessage]);

    // Placeholder echo response — will be replaced with API call in future iteration
    setTimeout(() => {
      const assistantMessage: Message = {
        id: crypto.randomUUID(),
        role: 'assistant',
        content: `Echo: ${text}`,
        timestamp: Date.now(),
      };
      setMessages(prev => [...prev, assistantMessage]);
    }, 500);
  };

  return (
    <div
      className={`elitea-assistant-container elitea-assistant-container--${position}`}
      style={cssVars as React.CSSProperties}
    >
      {isOpen && (
        <ChatWindow
          title={title}
          placeholder={placeholder}
          messages={messages}
          onSend={handleSend}
          onClose={() => setIsOpen(false)}
        />
      )}
      <ChatButton
        isOpen={isOpen}
        onClick={() => setIsOpen(prev => !prev)}
      />
    </div>
  );
};
