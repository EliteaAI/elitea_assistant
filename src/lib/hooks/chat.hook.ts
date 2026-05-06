import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import type { TConversationListItem, TMessage, TRawConversation, TSocketMessage } from '@/lib/types';
import { parseConversationMessages } from '@/lib/utils';

import { MESSAGE_TYPES, SOCKET_EVENTS } from '../constants/chat.constants';
import { useApi } from './api.hook';
import { useSocketContext } from './socket.hook';

type TUseChatProps = {
  welcomeMessage: string;
  supportProjectId: number | null;
  initialHistory: TConversationListItem[];
  initialConversation: TRawConversation | null;
  isInitLoading: boolean;
};

export const useChat = (props: TUseChatProps) => {
  const { welcomeMessage, supportProjectId, initialHistory, initialConversation, isInitLoading } = props;

  const hasInitializedRef = useRef(false);

  const api = useApi();
  const socket = useSocketContext();

  const createWelcomeMessages = useCallback(
    (): TMessage[] =>
      welcomeMessage
        ? [{ id: 'welcome', role: 'assistant' as const, content: welcomeMessage, timestamp: Date.now() }]
        : [],
    [welcomeMessage],
  );

  const [messages, setMessages] = useState<TMessage[]>([]);
  const [inputText, setInputText] = useState('');
  const [files, setFiles] = useState<File[]>([]);
  const [currentConversationId, setCurrentConversationId] = useState<string | null>(null);
  const [history, setHistory] = useState<TConversationListItem[]>([]);
  const [isSwitchingConversation, setIsSwitchingConversation] = useState(false);

  const isLoading = useMemo(
    () => isInitLoading || isSwitchingConversation,
    [isInitLoading, isSwitchingConversation],
  );

  const enterRoom = useCallback(
    (conversationId: string) => {
      socket?.emit(SOCKET_EVENTS.ENTER_ROOM, {
        project_id: supportProjectId,
        conversation_id: conversationId,
      });
    },
    [socket, supportProjectId],
  );

  const leaveRoom = useCallback(
    (conversationId: string) => {
      socket?.emit(SOCKET_EVENTS.LEAVE_ROOM, {
        project_id: supportProjectId,
        conversation_id: conversationId,
      });
    },
    [socket, supportProjectId],
  );

  const emitPredict = useCallback(
    (params: { conversation_uuid: string; content: string; attachments?: unknown[] }) => {
      socket?.emit(SOCKET_EVENTS.PREDICT, params);
    },
    [socket],
  );

  const handlePredict = useCallback((message: TSocketMessage) => {
    const { message_id, type, content, response_metadata } = message;

    switch (type) {
      case MESSAGE_TYPES.START_TASK:
        setMessages(prev => [
          ...prev,
          {
            id: message_id,
            role: 'assistant',
            content: '',
            timestamp: Date.now(),
            isStreaming: true,
          },
        ]);
        break;

      case MESSAGE_TYPES.CHUNK:
      case MESSAGE_TYPES.AI_MESSAGE_CHUNK:
      case MESSAGE_TYPES.AGENT_LLM_CHUNK:
      case MESSAGE_TYPES.AGENT_RESPONSE: {
        const chunk = typeof content === 'string' ? content : JSON.stringify(content);
        const finished = !!response_metadata?.finish_reason;

        setMessages(prev =>
          prev.map(m =>
            m.id === message_id
              ? { ...m, content: m.content + chunk, ...(finished && { isStreaming: false }) }
              : m,
          ),
        );
        break;
      }

      case MESSAGE_TYPES.PIPELINE_FINISH:
        setMessages(prev =>
          prev.map(m => (m.id === message_id && m.isStreaming ? { ...m, isStreaming: false } : m)),
        );
        break;

      case MESSAGE_TYPES.ERROR:
      case MESSAGE_TYPES.AGENT_EXCEPTION:
        setMessages(prev =>
          prev.map(m =>
            m.id === message_id
              ? {
                  ...m,
                  content: typeof content === 'string' ? content : 'An error occurred',
                  isStreaming: false,
                  isError: true,
                }
              : m,
          ),
        );
        break;
    }
  }, []);

  const handleError = useCallback((data: { error: string; code: string }) => {
    setMessages(prev => [
      ...prev,
      {
        id: crypto.randomUUID(),
        role: 'assistant' as const,
        content: data.error || 'An error occurred',
        timestamp: Date.now(),
        isError: true,
      },
    ]);
  }, []);

  const handleConversationNameUpdated = useCallback((data: { conversation_uuid: string; name: string }) => {
    setHistory(prev =>
      prev.map(item => (item.uuid === data.conversation_uuid ? { ...item, name: data.name } : item)),
    );
  }, []);

  useEffect(() => {
    if (isInitLoading || hasInitializedRef.current) return;
    hasInitializedRef.current = true;

    setHistory(initialHistory);

    if (initialHistory.length > 0 && initialConversation) {
      const parsed = parseConversationMessages(initialConversation);
      setMessages(parsed.length > 0 ? parsed : createWelcomeMessages());
      setCurrentConversationId(initialHistory[0].uuid);
      enterRoom(initialHistory[0].uuid);
    } else {
      setMessages(createWelcomeMessages());
    }
  }, [isInitLoading, initialHistory, initialConversation, createWelcomeMessages, enterRoom]);

  useEffect(() => {
    if (!socket) return;

    socket.on(SOCKET_EVENTS.PREDICT_RESPONSE, handlePredict);
    socket.on(SOCKET_EVENTS.ERROR, handleError);
    socket.on(SOCKET_EVENTS.CONVERSATION_NAME_UPDATED, handleConversationNameUpdated);

    return () => {
      socket.off(SOCKET_EVENTS.PREDICT_RESPONSE, handlePredict);
      socket.off(SOCKET_EVENTS.ERROR, handleError);
      socket.off(SOCKET_EVENTS.CONVERSATION_NAME_UPDATED, handleConversationNameUpdated);
    };
  }, [socket, handlePredict, handleError, handleConversationNameUpdated]);

  const handleSend = useCallback(
    async (text: string) => {
      const userMessage: TMessage = {
        id: crypto.randomUUID(),
        role: 'user',
        content: text,
        timestamp: Date.now(),
      };
      setMessages(prev => [...prev, userMessage]);

      let activeConversationId = currentConversationId;

      if (!activeConversationId) {
        try {
          const created = await api.createConversation();
          activeConversationId = created.uuid;
          setCurrentConversationId(activeConversationId);
          setHistory(prev => [created, ...prev]);
          enterRoom(activeConversationId);
        } catch {
          setMessages(prev => [
            ...prev,
            {
              id: crypto.randomUUID(),
              role: 'assistant',
              content: 'Failed to create conversation. Please try again.',
              timestamp: Date.now(),
              isError: true,
            },
          ]);
          return;
        }
      }

      if (activeConversationId) {
        emitPredict({ conversation_uuid: activeConversationId, content: text });
      }
    },
    [currentConversationId, api, enterRoom, emitPredict],
  );

  const handleNewChat = useCallback(() => {
    if (currentConversationId) leaveRoom(currentConversationId);

    setCurrentConversationId(null);
    setMessages(createWelcomeMessages());
    setInputText('');
    setFiles([]);
  }, [currentConversationId, leaveRoom, createWelcomeMessages]);

  const handleSelectConversation = useCallback(
    async (conversationId: string) => {
      if (currentConversationId === conversationId) return;
      if (currentConversationId) leaveRoom(currentConversationId);

      setCurrentConversationId(conversationId);
      enterRoom(conversationId);
      setInputText('');
      setFiles([]);
      setMessages([]);
      setIsSwitchingConversation(true);

      try {
        const conversation = await api.getConversation(conversationId);
        const parsed = parseConversationMessages(conversation);
        setMessages(parsed.length > 0 ? parsed : createWelcomeMessages());
      } catch {
        setMessages(createWelcomeMessages());
      } finally {
        setIsSwitchingConversation(false);
      }
    },
    [currentConversationId, leaveRoom, enterRoom, createWelcomeMessages, api],
  );

  return {
    messages,
    inputText,
    setInputText,
    files,
    setFiles,
    history,
    currentConversationId: currentConversationId ?? '',
    isLoading,
    handleNewChat,
    handleSelectConversation,
    handleSend,
  };
};
