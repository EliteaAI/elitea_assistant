import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import { MESSAGE_TYPES, SOCKET_EVENTS, UploadStatus } from '@/lib/constants';
import {
  useApi,
  useAttachmentUpload,
  useScreenshotContext,
  useSocketContext,
  useSupportAssistantContext,
} from '@/lib/hooks';
import type {
  TAttachment,
  TConversationListItem,
  TMessage,
  TRawConversation,
  TSocketMessage,
  TSupportAssistantContext,
} from '@/lib/types';
import { buildValidatedAttachments, generateUUID, parseConversationMessages } from '@/lib/utils';

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
  const supportAssistantContext = useSupportAssistantContext();
  const screenshotContext = useScreenshotContext();

  const { uploadAttachments, isUploading } = useAttachmentUpload();

  const createWelcomeMessages = useCallback(
    (): TMessage[] =>
      welcomeMessage
        ? [{ id: 'welcome', role: 'assistant' as const, content: welcomeMessage, timestamp: Date.now() }]
        : [],
    [welcomeMessage],
  );

  const [messages, setMessages] = useState<TMessage[]>([]);
  const [inputText, setInputText] = useState('');
  const [attachments, setAttachments] = useState<TAttachment[]>([]);
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
    (params: {
      conversation_uuid: string;
      content: string;
      attachments?: string[];
      support_assistant_context?: TSupportAssistantContext;
    }) => {
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
      case MESSAGE_TYPES.AGENT_LLM_CHUNK: {
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

      case MESSAGE_TYPES.AGENT_RESPONSE: {
        const responseContent = typeof content === 'string' ? content : JSON.stringify(content);
        setMessages(prev =>
          prev.map(m => (m.id === message_id ? { ...m, content: responseContent, isStreaming: false } : m)),
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
        id: generateUUID(),
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

  const addFiles = useCallback((files: File[]) => {
    setAttachments(prev => buildValidatedAttachments(files, prev));
  }, []);

  const removeAttachment = useCallback((attachmentId: string) => {
    setAttachments(prev => prev.filter(a => a.id !== attachmentId));
  }, []);

  const updateAttachmentProgress = useCallback((attachmentId: string, progress: number) => {
    setAttachments(prev =>
      prev.map(a => (a.id === attachmentId ? { ...a, status: UploadStatus.UPLOADING, progress } : a)),
    );
  }, []);

  const markAttachmentCompleted = useCallback((attachmentId: string, filepath: string) => {
    setAttachments(prev =>
      prev.map(a =>
        a.id === attachmentId ? { ...a, status: UploadStatus.COMPLETED, progress: 100, filepath } : a,
      ),
    );
  }, []);

  const markAttachmentError = useCallback((attachmentId: string, error: string) => {
    setAttachments(prev =>
      prev.map(a => (a.id === attachmentId ? { ...a, status: UploadStatus.ERROR, error } : a)),
    );
  }, []);

  const clearAttachments = useCallback(() => {
    setAttachments([]);
  }, []);

  const startUpload = useCallback(
    async (conversationUuid: string): Promise<string[]> => {
      const pendingAttachments = attachments.filter(a => a.status === UploadStatus.PENDING);

      if (pendingAttachments.length === 0) return [];

      setAttachments(prev =>
        prev.map(a => (a.status === UploadStatus.PENDING ? { ...a, status: UploadStatus.UPLOADING } : a)),
      );

      const uploadedFilepaths: string[] = [];

      await uploadAttachments({
        conversationId: conversationUuid,
        attachments: pendingAttachments,
        onProgress: updateAttachmentProgress,
        onComplete: (attachmentId, filepath) => {
          markAttachmentCompleted(attachmentId, filepath);
          uploadedFilepaths.push(filepath);
        },
        onError: markAttachmentError,
      });

      return uploadedFilepaths;
    },
    [attachments, uploadAttachments, updateAttachmentProgress, markAttachmentCompleted, markAttachmentError],
  );

  const handleSend = useCallback(
    async (text: string) => {
      let activeConversationId = currentConversationId;

      // Create conversation if needed
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
              id: generateUUID(),
              role: 'assistant',
              content: 'Failed to create conversation. Please try again.',
              timestamp: Date.now(),
              isError: true,
            },
          ]);
          return;
        }
      }

      const pendingAttachments = attachments.filter(a => a.status === UploadStatus.PENDING);
      const alreadyCompletedFilepaths = attachments
        .filter(a => a.status === UploadStatus.COMPLETED && a.filepath)
        .map(a => a.filepath as string);

      const uploadedFilepaths =
        pendingAttachments.length > 0 && activeConversationId ? await startUpload(activeConversationId) : [];

      if (pendingAttachments.length > 0 && uploadedFilepaths.length < pendingAttachments.length) return;

      setMessages(prev => [
        ...prev,
        { id: generateUUID(), role: 'user', content: text, timestamp: Date.now() },
      ]);

      const allFilepaths = [...alreadyCompletedFilepaths, ...uploadedFilepaths];

      const validScreenshot = screenshotContext?.getValidScreenshot();

      if (activeConversationId && validScreenshot) {
        try {
          const file = new File([validScreenshot], `screenshot-${Date.now()}.png`, {
            type: 'image/png',
          });
          const formData = new FormData();

          formData.append('file', file);
          formData.append('overwrite', '1');

          const response = await api.uploadFile(activeConversationId, formData);
          const result = (response as { filepath: string }[])[0];

          if (result?.filepath) allFilepaths.push(result.filepath);
        } catch {
          // screenshot upload is best-effort
        }
        screenshotContext?.clearScreenshot();
      }

      if (activeConversationId)
        emitPredict({
          conversation_uuid: activeConversationId,
          content: text,
          attachments: allFilepaths.length > 0 ? allFilepaths : undefined,
          support_assistant_context: supportAssistantContext ?? undefined,
        });

      clearAttachments();
    },
    [
      currentConversationId,
      api,
      enterRoom,
      emitPredict,
      attachments,
      startUpload,
      clearAttachments,
      supportAssistantContext,
      screenshotContext,
    ],
  );

  const handleNewChat = useCallback(() => {
    if (currentConversationId) leaveRoom(currentConversationId);

    setCurrentConversationId(null);
    setMessages(createWelcomeMessages());
    setInputText('');
    clearAttachments();
  }, [currentConversationId, leaveRoom, createWelcomeMessages, clearAttachments]);

  const handleSelectConversation = useCallback(
    async (conversationId: string) => {
      if (currentConversationId === conversationId) return;
      if (currentConversationId) leaveRoom(currentConversationId);

      setCurrentConversationId(conversationId);
      enterRoom(conversationId);
      setInputText('');
      clearAttachments();
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
    [currentConversationId, leaveRoom, enterRoom, createWelcomeMessages, api, clearAttachments],
  );

  return {
    messages,
    inputText,
    setInputText,
    attachments,
    addFiles,
    removeAttachment,
    history,
    currentConversationId: currentConversationId ?? '',
    isLoading,
    isUploading,
    handleNewChat,
    handleSelectConversation,
    handleSend,
  };
};
