import { createContext, useContext } from 'react';

import type { TChatAPI } from '@/lib/types';

export const ApiContext = createContext<TChatAPI | null>(null);

export const useApi = (): TChatAPI => {
  const api = useContext(ApiContext);

  if (!api) throw new Error('useApi must be used within EliteaAssistant');

  return api;
};
