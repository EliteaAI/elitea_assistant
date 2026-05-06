import { useEffect, useState } from 'react';

import type { TAssistantConfig, TChatAPI } from '@/lib/types';

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
  isLoading: boolean;
};

export const useInitAssistant = (props: TInitAssistantProps): TInitAssistantResult => {
  const { api, title, welcomeMessage, placeholder } = props;

  const [config, setConfig] = useState<TAssistantConfig | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    api
      .getConfig()
      .then(data => {
        if (!cancelled) setConfig(data);
      })
      .catch(() => {})
      .finally(() => {
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
    isLoading,
  };
};
