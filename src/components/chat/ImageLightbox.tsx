import React, { useCallback, useEffect } from 'react';

type TImageLightboxProps = {
  src: string;
  alt: string;
  onClose: () => void;
};

const ImageLightbox: React.FC<TImageLightboxProps> = ({ src, alt, onClose }) => {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    },
    [onClose],
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return (
    <div
      className="elitea-assistant-lightbox-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={alt || 'Image preview'}
    >
      <button
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
