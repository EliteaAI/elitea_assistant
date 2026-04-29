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
import type { TConversation, TEliteaAssistantProps, TEliteaAssistantRef, TMessage } from '@/types';

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

  const createWelcomeMessages = useCallback(
    (): TMessage[] =>
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
    [welcomeMessage],
  );

  const [messages, setMessages] = useState<TMessage[]>(createWelcomeMessages);

  // TODO: Mock conversation history — will be replaced with BE API calls when ready
  const [currentConversationId, setCurrentConversationId] = useState<string>(() => crypto.randomUUID());
  const [history, setHistory] = useState<TConversation[]>([]);

  // Refs to avoid stale closures in callbacks - will be replaced with BE API calls when ready
  const messagesRef = useRef(messages);
  messagesRef.current = messages;
  const currentConversationIdRef = useRef(currentConversationId);
  currentConversationIdRef.current = currentConversationId;

  const getConversationTitle = useCallback((msgs: TMessage[]): string => {
    const firstUserMsg = msgs.find(m => m.role === 'user');

    if (firstUserMsg) {
      return firstUserMsg.content.length > 40
        ? firstUserMsg.content.slice(0, 40) + '…'
        : firstUserMsg.content;
    }
    return 'New conversation';
  }, []);

  const saveCurrentConversation = useCallback((): TConversation | null => {
    const currentMessages = messagesRef.current;
    const currentId = currentConversationIdRef.current;
    const hasUserMessages = currentMessages.some(m => m.role === 'user');
    if (!hasUserMessages) return null;

    return {
      id: currentId,
      title: getConversationTitle(currentMessages),
      messages: currentMessages,
      createdAt: Date.now(),
    };
  }, [getConversationTitle]);

  const upsertConversation = useCallback((conversation: TConversation) => {
    setHistory(prev => {
      const exists = prev.some(c => c.id === conversation.id);

      if (exists) return prev.map(c => (c.id === conversation.id ? conversation : c));

      return [conversation, ...prev];
    });
  }, []);

  // TODO: Mock implementation — real new chat will call BE to create a conversation
  const handleNewChat = useCallback(() => {
    const conversation = saveCurrentConversation();

    if (conversation) upsertConversation(conversation);

    setMessages(createWelcomeMessages());
    setInputText('');
    setFiles([]);
    setCurrentConversationId(crypto.randomUUID());
  }, [saveCurrentConversation, upsertConversation, createWelcomeMessages]);

  // TODO: Mock implementation — real history switch will call BE to load conversation
  const handleSelectConversation = useCallback(
    (conversationId: string) => {
      const selected = history.find(c => c.id === conversationId);

      if (!selected) return;

      const conversation = saveCurrentConversation();

      if (conversation) upsertConversation(conversation);

      setMessages(selected.messages);
      setInputText('');
      setFiles([]);
      setCurrentConversationId(selected.id);
    },
    [history, saveCurrentConversation, upsertConversation],
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
    }, 12000);

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
          onNewChat={handleNewChat}
          history={history}
          currentConversationId={currentConversationId}
          onSelectConversation={handleSelectConversation}
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
