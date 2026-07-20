import { useEffect, useState } from 'react';

import type { TRehypePlugin } from '@/lib/types';
import { getCachedRehypeRaw, rehypeRawReady } from '@/lib/utils';

export const useRehypeRaw = (): TRehypePlugin | null => {
  const [plugin, setPlugin] = useState<TRehypePlugin | null>(getCachedRehypeRaw);

  useEffect(() => {
    const cached = getCachedRehypeRaw();

    if (cached) {
      setPlugin(() => cached);
      return;
    }

    rehypeRawReady.then(p => setPlugin(() => p));
  }, []);

  return plugin;
};
