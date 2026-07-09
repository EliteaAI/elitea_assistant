import React, { memo, useEffect, useRef, useState } from 'react';

import DOMPurify from 'dompurify';

import { useTheme } from '@/lib/hooks';

type TProps = { code: string };

const MermaidBlock: React.FC<TProps> = memo(({ code }) => {
  const idRef = useRef(`mermaid-${Math.random().toString(36).slice(2)}`);
  const theme = useTheme();
  const [svg, setSvg] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    import('mermaid')
      .then(({ default: mermaid }) => {
        mermaid.initialize({ startOnLoad: false, theme: theme === 'dark' ? 'dark' : 'default' });
        return mermaid.render(idRef.current, code);
      })
      .then(({ svg: rendered }) => {
        if (!cancelled) {
          const sanitized = DOMPurify.sanitize(rendered, {
            ADD_TAGS: ['foreignObject'],
            HTML_INTEGRATION_POINTS: { foreignobject: true },
          });
          setSvg(sanitized);
        }
      })
      .catch(err => {
        if (!cancelled) setError(String(err));
      });

    return () => {
      cancelled = true;
    };
  }, [code, theme]);

  if (error) {
    return (
      <pre className="elitea-assistant-mermaid-error">
        <code>{code}</code>
      </pre>
    );
  }

  if (!svg) return null;

  return (
    <div
      style={{ overflowX: 'auto', maxWidth: '100%' }}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
});

MermaidBlock.displayName = 'MermaidBlock';

export default MermaidBlock;
