import type {
  TAssistantConfig,
  TChatAPI,
  TConversationListItem,
  TConversationsResponse,
  TRawConversation,
} from '@/lib/types';

const createHeaders = (token: string, json = false): HeadersInit => ({
  Authorization: `Bearer ${token}`,
  ...(json && { 'Content-Type': 'application/json' }),
});

const assertOk = async (r: Response): Promise<Response> => {
  if (!r.ok) throw new Error(`${r.status} ${r.statusText}`);
  return r;
};

export const createDefaultAdapter = (baseURL: string, token: string): TChatAPI => ({
  getConfig: () =>
    fetch(`${baseURL}/config/`, {
      headers: createHeaders(token),
    })
      .then(assertOk)
      .then(r => r.json() as Promise<TAssistantConfig>),

  getConversations: () =>
    fetch(`${baseURL}/conversations/`, {
      headers: createHeaders(token),
    })
      .then(assertOk)
      .then(r => r.json() as Promise<TConversationsResponse>),

  getConversation: (conversationId: string) =>
    fetch(`${baseURL}/conversation/${conversationId}`, {
      headers: createHeaders(token),
    })
      .then(assertOk)
      .then(r => r.json() as Promise<TRawConversation>),

  createConversation: () =>
    fetch(`${baseURL}/conversations/`, {
      method: 'POST',
      headers: createHeaders(token, true),
      body: JSON.stringify({}),
    })
      .then(assertOk)
      .then(r => r.json() as Promise<TConversationListItem>),

  deleteConversation: (conversationId: string) =>
    fetch(`${baseURL}/conversation/${conversationId}`, {
      method: 'DELETE',
      headers: createHeaders(token),
    })
      .then(assertOk)
      .then(() => undefined),
});
