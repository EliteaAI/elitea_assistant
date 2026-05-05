import { useCallback, useRef, useState } from 'react';

import type { TConversation, TMessage } from '@/lib/types';

export const useChat = (welcomeMessage: string) => {
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
  const [inputText, setInputText] = useState('');
  const [files, setFiles] = useState<File[]>([]);

  // TODO: Mock conversation history — will be replaced with BE API calls when ready
  const [currentConversationId, setCurrentConversationId] = useState<string>(() => crypto.randomUUID());
  const [history, setHistory] = useState<TConversation[]>([]);

  // Refs to avoid stale closures in callbacks — will be replaced with BE API calls when ready
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

  return {
    messages,
    inputText,
    setInputText,
    files,
    setFiles,
    history,
    currentConversationId,
    handleNewChat,
    handleSelectConversation,
    handleSend,
  };
};
