import type { TRehypePlugin } from '@/lib/types';

let cached: TRehypePlugin | null = null;

export const rehypeRawReady = import('rehype-raw').then(({ default: plugin }) => {
  cached = plugin;
  return plugin;
});

export const getCachedRehypeRaw = (): TRehypePlugin | null => cached;
