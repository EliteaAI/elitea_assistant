import React, { memo, useCallback, useState } from 'react';

import { createPortal } from 'react-dom';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import { useRehypeRaw } from '@/lib/hooks';

import ImageLightbox from './ImageLightbox';
import MermaidBlock from './MermaidBlock';

type TMarkdownContentProps = {
  content: string;
  isAnimating?: boolean;
};

type TCodeProps = { className?: string; children?: React.ReactNode };
type TImgProps = { src?: string; alt?: string };

const MarkdownContent: React.FC<TMarkdownContentProps> = memo(props => {
  const { content, isAnimating = false } = props;

  const rehypeRaw = useRehypeRaw();

  const [lightboxImage, setLightboxImage] = useState<{ src: string; alt: string } | null>(null);

  const closeLightbox = useCallback(() => setLightboxImage(null), []);

  const components = {
    code(codeProps: TCodeProps) {
      const { className, children } = codeProps;

      const lang = /language-(\w+)/.exec(className ?? '')?.[1];
      const code = String(children ?? '').replace(/\n$/, '');

      if (lang === 'mermaid' && !isAnimating) return <MermaidBlock code={code} />;

      return <code className={className}>{children}</code>;
    },

    img(imgProps: TImgProps) {
      const { src, alt } = imgProps;

      const label = alt || 'Image';

      return (
        <button
          type="button"
          className="elitea-assistant-img-btn"
          onClick={() => src && setLightboxImage({ src, alt: alt ?? '' })}
          aria-label={`${label} — click to expand`}
        >
          <img
            src={src}
            alt={alt ?? ''}
          />
        </button>
      );
    },
  };

  return (
    <>
      <div className="elitea-assistant-markdown">
        <Markdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={!isAnimating && rehypeRaw ? [rehypeRaw] : []}
          components={components}
        >
          {content}
        </Markdown>
      </div>
      {lightboxImage &&
        createPortal(
          <ImageLightbox
            src={lightboxImage.src}
            alt={lightboxImage.alt}
            onClose={closeLightbox}
          />,
          document.body,
        )}
    </>
  );
});

MarkdownContent.displayName = 'MarkdownContent';

export default MarkdownContent;
