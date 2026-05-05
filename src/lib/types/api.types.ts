import type { TAssistantConfig } from './assistant.types';
import type { TConversationListItem, TMessage } from './chat.types';

export type TChatAPI = {
  getConfig: () => Promise<TAssistantConfig>;
  getConversations: () => Promise<TConversationListItem[]>;
  createConversation: () => Promise<{ id: string }>;
  getMessages: (conversationId: string) => Promise<TMessage[]>;
  sendMessage: (conversationId: string, message: string) => Promise<TMessage>;
  deleteConversation: (conversationId: string) => Promise<void>;
};
