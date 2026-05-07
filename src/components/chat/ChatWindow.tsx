import React, { memo } from 'react';

import { useChat } from '@/lib/hooks';
import type { TConversationListItem, TRawConversation } from '@/lib/types';

import { ChatHeader, MessageInput, MessageList } from './';

type TChatWindowProps = {
  avatar: string;
  title: string;
  placeholder: string;
  welcomeMessage: string;
  supportProjectId: number | null;
  initialHistory: TConversationListItem[];
  lastConversation: TRawConversation | null;
  isInitLoading: boolean;
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
    onClose,
    onExpand,
    expanded,
  } = props;

  const {
    messages,
    inputText,
    setInputText,
    files,
    setFiles,
    history,
    currentConversationId,
    isLoading,
    handleNewChat,
    handleSelectConversation,
    handleSend,
  } = useChat({
    welcomeMessage,
    supportProjectId,
    initialHistory,
    initialConversation: lastConversation,
    isInitLoading,
  });

  const window = (
    <div className={`elitea-assistant-window${expanded ? ' elitea-assistant-window--expanded' : ''}`}>
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
      />
      <MessageInput
        placeholder={placeholder}
        text={inputText}
        onTextChange={setInputText}
        files={files}
        onFilesChange={setFiles}
        onSend={handleSend}
        expanded={expanded}
        disabled={isLoading}
      />
    </div>
  );

  if (expanded) {
    return (
      <div
        className="elitea-assistant-overlay"
        onClick={onExpand}
      >
        <div onClick={e => e.stopPropagation()}>{window}</div>
      </div>
    );
  }

  return window;
});

ChatWindow.displayName = 'ChatWindow';

export default ChatWindow;
