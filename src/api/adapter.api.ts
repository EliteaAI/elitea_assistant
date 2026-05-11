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

  uploadFile: (conversationId, formData, onProgress) =>
    new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();

      if (onProgress)
        xhr.upload.addEventListener('progress', event => {
          if (event.lengthComputable) onProgress(event.loaded, event.total);
        });

      xhr.addEventListener('load', () => {
        if (xhr.status >= 200 && xhr.status < 300) {
          try {
            resolve(JSON.parse(xhr.responseText));
          } catch {
            reject(new Error('Failed to parse upload response'));
          }
        } else {
          try {
            const body = JSON.parse(xhr.responseText);
            reject(new Error(body.error || `Upload failed with status: ${xhr.status}`));
          } catch {
            reject(new Error(`Upload failed with status: ${xhr.status}`));
          }
        }
      });

      xhr.addEventListener('error', () => reject(new Error('Upload failed due to network error')));
      xhr.addEventListener('abort', () => reject(new Error('Upload was aborted')));

      xhr.open('POST', `${baseURL}/attachments/${conversationId}`);

      if (options.token) xhr.setRequestHeader('Authorization', `Bearer ${options.token}`);
      if (options.withCredentials) xhr.withCredentials = true;

      xhr.send(formData);
    }),
});
