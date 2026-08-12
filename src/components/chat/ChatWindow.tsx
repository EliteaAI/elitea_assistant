import React, { memo } from 'react';

import { ChatHeader, MessageInput, MessageList } from '@/components/chat';
import { Toast } from '@/components/shared';
import { useChat, useToast } from '@/lib/hooks';
import type { TConversationListItem, TRawConversation } from '@/lib/types';

type TChatWindowProps = {
  avatar: string;
  title: string;
  placeholder: string;
  welcomeMessage: string;
  supportProjectId: number | null;
  initialHistory: TConversationListItem[];
  lastConversation: TRawConversation | null;
  isInitLoading: boolean;
  isOpen: boolean;
  onClose: () => void;
  onExpand?: () => void;
  expanded?: boolean;
};

const ChatWindow: React.FC<TChatWindowProps> = memo(props => {
  const {
    avatar,
    title,
    placeholder,
    welcomeMessage,
    supportProjectId,
    initialHistory,
    lastConversation,
    isInitLoading,
    isOpen,
    onClose,
    onExpand,
    expanded,
  } = props;

  const { toastMessage, showToast, dismissToast } = useToast();

  const {
    messages,
    inputText,
    setInputText,
    attachments,
    addFiles,
    removeAttachment,
    history,
    currentConversationId,
    isLoading,
    isStreaming,
    isUploading,
    handleNewChat,
    handleSelectConversation,
    handleSend,
    handleAnimationComplete,
  } = useChat({
    welcomeMessage,
    supportProjectId,
    initialHistory,
    initialConversation: lastConversation,
    isInitLoading,
    showToast,
  });

  if (!isOpen) return null;

  const window = (
    <div className={`elitea-assistant-window${expanded ? ' elitea-assistant-window--expanded' : ''}`}>
      {toastMessage && (
        <Toast
          message={toastMessage}
          onDismiss={dismissToast}
        />
      )}
      <ChatHeader
        title={title}
        expanded={expanded}
        history={history}
        currentConversationId={currentConversationId}
        disabled={isLoading}
        onClose={onClose}
        onExpand={onExpand}
        onNewChat={handleNewChat}
        onSelectConversation={handleSelectConversation}
      />
      <MessageList
        avatar={avatar}
        messages={messages}
        isLoading={isLoading}
        onAnimationComplete={handleAnimationComplete}
      />
      <MessageInput
        placeholder={placeholder}
        text={inputText}
        onTextChange={setInputText}
        attachments={attachments}
        onAddFiles={addFiles}
        onRemoveAttachment={removeAttachment}
        onSend={handleSend}
        expanded={expanded}
        disabled={isLoading || isStreaming}
        isUploading={isUploading}
      />
    </div>
  );

  return (
    <>
      {expanded && (
        <div
          className="elitea-assistant-overlay"
          onClick={onExpand}
        />
      )}
      {window}
    </>
  );
});

ChatWindow.displayName = 'ChatWindow';

export default ChatWindow;
