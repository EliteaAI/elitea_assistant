export type TMessage = {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: number;
};

export type TConversation = {
  id: string;
  title: string;
  messages: TMessage[];
  createdAt: number;
};

export type TConversationListItem = {
  id: string;
  title: string;
  createdAt: number;
};
