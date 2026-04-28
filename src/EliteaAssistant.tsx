import React, {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';

import { ChatButton, ChatWindow, PopupMessage } from '@/components/chat';
import { playPopupSound } from '@/lib/utils';
import '@/styles/index.css';
import { colorsToCSSProperties, resolveColors } from '@/theme/colors';
import type { TEliteaAssistantProps, TEliteaAssistantRef, TMessage } from '@/types';

const POPUP_TEXT = 'Hi! Need help? Ask me!';
const POPUP_DURATION = 12000;

const EliteaAssistant = forwardRef<TEliteaAssistantRef, TEliteaAssistantProps>((props, ref) => {
  const popupTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

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

  const cssVars = useMemo(() => colorsToCSSProperties(resolveColors(theme, colors)), [theme, colors]);

  // UI state
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  // Popup state
  const [showPopup, setShowPopup] = useState(false);

  // Chat state
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

  const hidePopup = useCallback(() => {
    setShowPopup(false);

    if (popupTimerRef.current) {
      clearTimeout(popupTimerRef.current);
      popupTimerRef.current = null;
    }
  }, []);

  const displayPopup = useCallback(() => {
    if (isOpen) return;

    setShowPopup(true);
    playPopupSound();

    popupTimerRef.current = setTimeout(hidePopup, POPUP_DURATION);
  }, [isOpen, hidePopup]);

  useEffect(() => {
    // Mock implementation - in future will be based on actual user activity and context
    const timeout = setTimeout(() => {
      displayPopup();
    }, 3000);

    // Cleanup on unmount
    return () => {
      if (popupTimerRef.current) clearTimeout(popupTimerRef.current);
      clearTimeout(timeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isOpen) hidePopup();
  }, [isOpen, hidePopup]);

  useImperativeHandle(
    ref,
    () => ({
      open: () => setIsOpen(true),
      close: () => setIsOpen(false),
      toggle: () => setIsOpen(prev => !prev),
      expandFullscreen: () => setIsExpanded(true),
      collapseFullscreen: () => setIsExpanded(false),
      toggleFullscreen: () => setIsExpanded(prev => !prev),
      showPopup: displayPopup,
      hidePopup,
      isOpen: () => isOpen,
      isExpanded: () => isExpanded,
    }),
    [isOpen, isExpanded, displayPopup, hidePopup],
  );

  const handleSend = useCallback((text: string) => {
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
  }, []);

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
      {showPopup && !isOpen && (
        <PopupMessage
          message={POPUP_TEXT}
          onClose={hidePopup}
        />
      )}
      <ChatButton onClick={() => setIsOpen(prev => !prev)} />
    </div>
  );
});

EliteaAssistant.displayName = 'EliteaAssistant';

export { EliteaAssistant };
