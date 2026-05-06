import { useCallback, useEffect, useState } from 'react';

import type { TConversationListItem, TMessage, TSocketMessage } from '@/lib/types';
import { parseConversationMessages } from '@/lib/utils';

import { MESSAGE_TYPES, SOCKET_EVENTS } from '../constants/chat.constants';
import { useApi } from './api.hook';
import { useSocketContext } from './socket.hook';

export const useChat = (welcomeMessage: string, supportProjectId: number | null) => {
  const api = useApi();
  const socket = useSocketContext();

  const createWelcomeMessages = useCallback(
    (): TMessage[] =>
      welcomeMessage
        ? [{ id: 'welcome', role: 'assistant' as const, content: welcomeMessage, timestamp: Date.now() }]
        : [],
    [welcomeMessage],
  );

  const [messages, setMessages] = useState<TMessage[]>(createWelcomeMessages);
  const [inputText, setInputText] = useState('');
  const [files, setFiles] = useState<File[]>([]);
  const [currentConversationId, setCurrentConversationId] = useState<string | null>(null);
  const [history, setHistory] = useState<TConversationListItem[]>([]);

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

  useEffect(() => {
    let cancelled = false;

    if (socket) {
      socket.on(SOCKET_EVENTS.PREDICT_RESPONSE, handlePredict);
      socket.on(SOCKET_EVENTS.ERROR, handleError);
    }

    api
      .getConversations()
      .then(data => {
        if (cancelled) return;

        const items = data.items || [];

        setHistory(items);

        if (items.length > 0) {
          const lastConversation = items[0];
          setCurrentConversationId(lastConversation.uuid);
          enterRoom(lastConversation.uuid);

          api
            .getConversation(lastConversation.uuid)
            .then(conversation => {
              if (cancelled) return;
              const parsed = parseConversationMessages(conversation);
              setMessages(parsed.length > 0 ? parsed : createWelcomeMessages());
            })
            .catch(() => {
              if (!cancelled) setMessages(createWelcomeMessages());
            });
        }
      })
      .catch(() => {});

    return () => {
      cancelled = true;

      if (socket) {
        socket.off(SOCKET_EVENTS.PREDICT_RESPONSE, handlePredict);
        socket.off(SOCKET_EVENTS.ERROR, handleError);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

      try {
        const conversation = await api.getConversation(conversationId);
        const parsed = parseConversationMessages(conversation);
        setMessages(parsed.length > 0 ? parsed : createWelcomeMessages());
      } catch {
        setMessages(createWelcomeMessages());
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
    handleNewChat,
    handleSelectConversation,
    handleSend,
  };
};
