import { useCallback, useEffect, useRef, useState } from 'react';

import { playPopupSound } from '@/lib/utils';

const POPUP_TEXT = 'Hi! Need help? Ask me!';
const POPUP_DURATION = 12000;
const POPUP_DELAY = 12000;

export const usePopup = (isOpen: boolean) => {
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const delayRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [showPopup, setShowPopup] = useState(false);

  const hidePopup = useCallback(() => {
    setShowPopup(false);

    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }

    if (delayRef.current) {
      clearTimeout(delayRef.current);
      delayRef.current = null;
    }
  }, []);

  const displayPopup = useCallback(() => {
    if (isOpen) return;

    setShowPopup(true);
    playPopupSound();

    timerRef.current = setTimeout(hidePopup, POPUP_DURATION);
  }, [isOpen, hidePopup]);

  useEffect(() => {
    delayRef.current = setTimeout(() => {
      displayPopup();
    }, POPUP_DELAY);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      if (delayRef.current) clearTimeout(delayRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isOpen) hidePopup();
  }, [isOpen, hidePopup]);

  return { showPopup, displayPopup, hidePopup, popupText: POPUP_TEXT };
};
