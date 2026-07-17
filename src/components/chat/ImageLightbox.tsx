import React, { useCallback, useEffect, useRef } from 'react';

type TImageLightboxProps = {
  src: string;
  alt: string;
  onClose: () => void;
};

const FOCUSABLE = 'a[href],button:not([disabled]),input,select,textarea,[tabindex]:not([tabindex="-1"])';

const ImageLightbox: React.FC<TImageLightboxProps> = ({ src, alt, onClose }) => {
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const returnFocusRef = useRef<Element | null>(null);

  // Remember the element that triggered the lightbox so focus can be restored.
  useEffect(() => {
    returnFocusRef.current = document.activeElement;
    closeBtnRef.current?.focus();

    return () => {
      (returnFocusRef.current as HTMLElement | null)?.focus();
    };
  }, []);

  const trapFocus = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }

      if (e.key !== 'Tab') return;

      const dialog = dialogRef.current;
      if (!dialog) return;

      const focusable = Array.from(dialog.querySelectorAll<HTMLElement>(FOCUSABLE)).filter(
        el => !el.closest('[inert]'),
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    },
    [onClose],
  );

  return (
    <div
      ref={dialogRef}
      className="elitea-assistant-lightbox-overlay"
      role="dialog"
      aria-modal="true"
      aria-label={alt || 'Image preview'}
      onClick={onClose}
      onKeyDown={trapFocus}
    >
      <button
        ref={closeBtnRef}
        className="elitea-assistant-lightbox-close"
        onClick={onClose}
        aria-label="Close image preview"
      >
        ✕
      </button>
      <img
        className="elitea-assistant-lightbox-img"
        src={src}
        alt={alt}
        onClick={e => e.stopPropagation()}
      />
    </div>
  );
};

export default ImageLightbox;
