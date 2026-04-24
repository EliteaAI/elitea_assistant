import React, { useMemo, useState } from 'react';

import { ChatButton } from '@/components/chat/ChatButton';
import { ChatWindow } from '@/components/chat/ChatWindow';
import '@/styles/index.css';
import { colorsToCSSProperties, resolveColors } from '@/theme/colors';
import type { EliteaAssistantProps, Message } from '@/types';

export const EliteaAssistant: React.FC<EliteaAssistantProps> = props => {
  const {
    apiUrl: _apiUrl,
    token: _token,
    title = 'Elitea Assistant',
    placeholder = 'Type a message...',
    welcomeMessage = "Hi! I'm your ELITEA Support Assistant.\nAsk me anything about ELITEA or report any issues you're experiencing. I have context about your current screen and settings.",
    position = 'bottom-right',
    theme = 'light',
    colors,
  } = props;

  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [inputText, setInputText] = useState('');
  const [files, setFiles] = useState<File[]>([]);
  const [messages, setMessages] = useState<Message[]>(() =>
    welcomeMessage
      ? [
          {
            id: 'welcome',
            role: 'assistant' as const,
            content: welcomeMessage,
            timestamp: Date.now(),
          },
        ]
      : [],
  );

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
          text={inputText}
          onTextChange={setInputText}
          files={files}
          onFilesChange={setFiles}
          onSend={handleSend}
          onClose={() => setIsOpen(false)}
          expanded={isExpanded}
          onExpand={() => setIsExpanded(prev => !prev)}
        />
      )}
      <ChatButton onClick={() => setIsOpen(prev => !prev)} />
    </div>
  );
};
