import { createContext, useCallback, useContext, useRef, useState } from 'react';

import { toBlob } from 'html-to-image';

import type { TScreenshotContext } from '@/lib/types';

const SCREENSHOT_TTL_MS = 3 * 60 * 1000;

export const ScreenshotContext = createContext<TScreenshotContext | null>(null);

export const useScreenshotContext = (): TScreenshotContext | null => useContext(ScreenshotContext);

export const useScreenshot = (): TScreenshotContext => {
  const [screenshot, setScreenshot] = useState<Blob | null>(null);
  const [capturedAt, setCapturedAt] = useState<number | null>(null);
  const capturingRef = useRef(false);

  const captureScreenshot = useCallback(() => {
    if (capturingRef.current) return;

    capturingRef.current = true;

    const capture = () => {
      const node = document.documentElement;

      toBlob(node, {
        filter: (el: Element) => !el.classList?.contains('elitea-assistant-container'),
      })
        .then(blob => {
          setScreenshot(blob);
          setCapturedAt(Date.now());
        })
        .catch(() => {
          setScreenshot(null);
          setCapturedAt(null);
        })
        .finally(() => {
          capturingRef.current = false;
        });
    };

    if (window.requestIdleCallback) window.requestIdleCallback(capture, { timeout: 3000 });
    else setTimeout(capture, 0);
  }, []);

  const clearScreenshot = useCallback(() => {
    setScreenshot(null);
    setCapturedAt(null);
  }, []);

  const getValidScreenshot = useCallback((): Blob | null => {
    if (!screenshot || !capturedAt) return null;
    if (Date.now() - capturedAt > SCREENSHOT_TTL_MS) return null;

    return screenshot;
  }, [screenshot, capturedAt]);

  return { screenshot, capturedAt, captureScreenshot, clearScreenshot, getValidScreenshot };
};
