import { useEffect, useState } from 'react';

import type { TAssistantConfig, TChatAPI, TConversationListItem, TRawConversation } from '@/lib/types';

type TInitAssistantProps = {
  api: TChatAPI;
  title: string;
  welcomeMessage: string;
  placeholder: string;
};

type TInitAssistantResult = {
  title: string;
  welcomeMessage: string;
  placeholder: string;
  supportProjectId: number | null;
  history: TConversationListItem[];
  lastConversation: TRawConversation | null;
  isLoading: boolean;
};

export const useInitAssistant = (props: TInitAssistantProps): TInitAssistantResult => {
  const { api, title, welcomeMessage, placeholder } = props;

  const [config, setConfig] = useState<TAssistantConfig | null>(null);
  const [history, setHistory] = useState<TConversationListItem[]>([]);
  const [lastConversation, setLastConversation] = useState<TRawConversation | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    const configPromise = api
      .getConfig()
      .then(data => {
        if (!cancelled) setConfig(data);
      })
      .catch(() => {});

    const conversationsPromise = api
      .getConversations()
      .then(async data => {
        if (cancelled) return;

        const items = data.items || [];
        setHistory(items);

        if (items.length > 0) {
          try {
            const conversation = await api.getConversation(items[0].uuid);
            if (!cancelled) setLastConversation(conversation);
          } catch {
            // last conversation details unavailable — chat will show welcome messages
          }
        }
      })
      .catch(() => {});

    Promise.all([configPromise, conversationsPromise]).finally(() => {
      if (!cancelled) setIsLoading(false);
    });

    return () => {
      cancelled = true;
    };
  }, [api]);

  return {
    title: config?.title || title,
    welcomeMessage: config?.welcomeMessage || welcomeMessage,
    placeholder: config?.placeholder || placeholder,
    supportProjectId: config?.support_project_id ?? null,
    history,
    lastConversation,
    isLoading,
  };
};
