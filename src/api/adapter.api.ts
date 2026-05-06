import type {
  TAssistantConfig,
  TChatAPI,
  TConversationListItem,
  TConversationsResponse,
  TRawConversation,
} from '@/lib/types';

type TAdapterOptions = {
  token?: string;
  withCredentials?: boolean;
};

const createHeaders = (options: TAdapterOptions, json = false): HeadersInit => ({
  ...(options.token && { Authorization: `Bearer ${options.token}` }),
  ...(json && { 'Content-Type': 'application/json' }),
});

const getCredentials = (options: TAdapterOptions): RequestCredentials | undefined =>
  options.withCredentials ? 'include' : undefined;

const assertOk = async (r: Response): Promise<Response> => {
  if (!r.ok) throw new Error(`${r.status} ${r.statusText}`);
  return r;
};

export const createDefaultAdapter = (baseURL: string, options: TAdapterOptions = {}): TChatAPI => ({
  getConfig: () =>
    fetch(`${baseURL}/config/`, {
      headers: createHeaders(options),
      credentials: getCredentials(options),
    })
      .then(assertOk)
      .then(r => r.json() as Promise<TAssistantConfig>),

  getConversations: () =>
    fetch(`${baseURL}/conversations/`, {
      headers: createHeaders(options),
      credentials: getCredentials(options),
    })
      .then(assertOk)
      .then(r => r.json() as Promise<TConversationsResponse>),

  getConversation: (conversationId: string) =>
    fetch(`${baseURL}/conversation/${conversationId}`, {
      headers: createHeaders(options),
      credentials: getCredentials(options),
    })
      .then(assertOk)
      .then(r => r.json() as Promise<TRawConversation>),

  createConversation: () =>
    fetch(`${baseURL}/conversations/`, {
      method: 'POST',
      headers: createHeaders(options, true),
      credentials: getCredentials(options),
      body: JSON.stringify({}),
    })
      .then(assertOk)
      .then(r => r.json() as Promise<TConversationListItem>),

  deleteConversation: (conversationId: string) =>
    fetch(`${baseURL}/conversation/${conversationId}`, {
      method: 'DELETE',
      headers: createHeaders(options),
      credentials: getCredentials(options),
    })
      .then(assertOk)
      .then(() => undefined),
});
