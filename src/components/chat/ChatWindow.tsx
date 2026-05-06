import React, { memo } from 'react';

import { useChat } from '@/lib/hooks';

import { ChatHeader, MessageInput, MessageList } from './';

type TChatWindowProps = {
  title: string;
  placeholder: string;
  welcomeMessage: string;
  supportProjectId: number | null;
  onClose: () => void;
  onExpand?: () => void;
  expanded?: boolean;
};

const ChatWindow: React.FC<TChatWindowProps> = memo(props => {
  const { title, placeholder, welcomeMessage, supportProjectId, onClose, onExpand, expanded } = props;

  const {
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
  } = useChat(welcomeMessage, supportProjectId);

  const window = (
    <div className={`elitea-assistant-window${expanded ? ' elitea-assistant-window--expanded' : ''}`}>
      <ChatHeader
        title={title}
        expanded={expanded}
        history={history}
        currentConversationId={currentConversationId}
        onClose={onClose}
        onExpand={onExpand}
        onNewChat={handleNewChat}
        onSelectConversation={handleSelectConversation}
      />
      <MessageList messages={messages} />
      <MessageInput
        placeholder={placeholder}
        text={inputText}
        onTextChange={setInputText}
        files={files}
        onFilesChange={setFiles}
        onSend={handleSend}
        expanded={expanded}
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
