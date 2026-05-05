import type { TAssistantConfig, TChatAPI, TConversationListItem, TMessage } from '@/lib/types';

const createHeaders = (token: string, json = false): HeadersInit => ({
  Authorization: `Bearer ${token}`,
  ...(json && { 'Content-Type': 'application/json' }),
});

export const createDefaultAdapter = (baseURL: string, token: string): TChatAPI => ({
  getConfig: () =>
    fetch(`${baseURL}/config`, {
      headers: createHeaders(token),
    }).then(r => r.json() as Promise<TAssistantConfig>),

  getConversations: () =>
    fetch(`${baseURL}/conversations`, {
      headers: createHeaders(token),
    }).then(r => r.json() as Promise<TConversationListItem[]>),

  createConversation: () =>
    fetch(`${baseURL}/conversations`, {
      method: 'POST',
      headers: createHeaders(token, true),
    }).then(r => r.json() as Promise<{ id: string }>),

  getMessages: (conversationId: string) =>
    fetch(`${baseURL}/conversations/${conversationId}/messages`, {
      headers: createHeaders(token),
    }).then(r => r.json() as Promise<TMessage[]>),

  sendMessage: (conversationId: string, message: string) =>
    fetch(`${baseURL}/conversations/${conversationId}/messages`, {
      method: 'POST',
      headers: createHeaders(token, true),
      body: JSON.stringify({ content: message }),
    }).then(r => r.json() as Promise<TMessage>),

  deleteConversation: (conversationId: string) =>
    fetch(`${baseURL}/conversations/${conversationId}`, {
      method: 'DELETE',
      headers: createHeaders(token),
    }).then(() => undefined),
});
