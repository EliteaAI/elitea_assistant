import React, { memo, useEffect, useState } from 'react';

import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import MermaidBlock from './MermaidBlock';

type TMarkdownContentProps = {
  content: string;
  isAnimating?: boolean;
};

type TPlugin = (typeof import('rehype-raw'))['default'];

let cachedRehypeRaw: TPlugin | null = null;

// Kick off the load immediately when this module is first imported so the
// plugin is ready before any message component mounts, eliminating the flash
// of raw HTML on the first render.
const rehypeRawReady = import('rehype-raw').then(({ default: plugin }) => {
  cachedRehypeRaw = plugin;
  return plugin;
});

const MarkdownContent: React.FC<TMarkdownContentProps> = memo(({ content, isAnimating = false }) => {
  const [rehypeRaw, setRehypeRaw] = useState<TPlugin | null>(() => cachedRehypeRaw);

  useEffect(() => {
    if (cachedRehypeRaw) {
      setRehypeRaw(() => cachedRehypeRaw);
      return;
    }
    rehypeRawReady.then(plugin => setRehypeRaw(() => plugin));
  }, []);

  const components = {
    code({ className, children }: { className?: string; children?: React.ReactNode }) {
      const lang = /language-(\w+)/.exec(className ?? '')?.[1];
      const code = String(children ?? '').replace(/\n$/, '');
      if (lang === 'mermaid' && !isAnimating) return <MermaidBlock code={code} />;
      return <code className={className}>{children}</code>;
    },
  };

  return (
    <div className="elitea-assistant-markdown">
      <Markdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={!isAnimating && rehypeRaw ? [rehypeRaw] : []}
        components={components}
      >
        {content}
      </Markdown>
    </div>
  );
});

MarkdownContent.displayName = 'MarkdownContent';

export default MarkdownContent;
