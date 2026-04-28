import React, { forwardRef, useImperativeHandle, useMemo, useState } from 'react';

import { ChatButton, ChatWindow } from '@/components/chat';
import '@/styles/index.css';
import { colorsToCSSProperties, resolveColors } from '@/theme/colors';
import type { TEliteaAssistantProps, TEliteaAssistantRef, TMessage } from '@/types';

const EliteaAssistant = forwardRef<TEliteaAssistantRef, TEliteaAssistantProps>((props, ref) => {
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
  const [messages, setMessages] = useState<TMessage[]>(() =>
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

  useImperativeHandle(
    ref,
    () => ({
      open: () => setIsOpen(true),
      close: () => setIsOpen(false),
      toggle: () => setIsOpen(prev => !prev),
      expandFullscreen: () => setIsExpanded(true),
      collapseFullscreen: () => setIsExpanded(false),
      toggleFullscreen: () => setIsExpanded(prev => !prev),
      isOpen: () => isOpen,
      isExpanded: () => isExpanded,
    }),
    [isOpen, isExpanded],
  );

  const handleSend = (text: string) => {
    const userMessage: TMessage = {
      id: crypto.randomUUID(),
      role: 'user',
      content: text,
      timestamp: Date.now(),
    };
    setMessages(prev => [...prev, userMessage]);

    // Placeholder echo response — will be replaced with API call in future iteration
    setTimeout(() => {
      const assistantMessage: TMessage = {
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
});

EliteaAssistant.displayName = 'EliteaAssistant';

export { EliteaAssistant };
