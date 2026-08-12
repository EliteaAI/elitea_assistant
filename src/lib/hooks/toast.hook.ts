import { useCallback, useEffect, useRef, useState } from 'react';

const TOAST_DURATION_MS = 4000;

export const useToast = () => {
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const dismissToast = useCallback(() => {
    setToastMessage(null);
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const showToast = useCallback(
    (message: string) => {
      setToastMessage(message);
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(dismissToast, TOAST_DURATION_MS);
    },
    [dismissToast],
  );

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  return { toastMessage, showToast, dismissToast };
};
