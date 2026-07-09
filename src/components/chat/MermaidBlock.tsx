import React, { memo, useEffect, useId, useState } from 'react';

import { useTheme } from '@/lib/hooks';

type TProps = { code: string };

const MermaidBlock: React.FC<TProps> = memo(({ code }) => {
  const rawId = useId().replace(/:/g, '');
  const theme = useTheme();
  const [svg, setSvg] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    import('mermaid')
      .then(({ default: mermaid }) => {
        mermaid.initialize({ startOnLoad: false, theme: theme === 'dark' ? 'dark' : 'default' });
        return mermaid.render(`mermaid-${rawId}`, code);
      })
      .then(({ svg: rendered }) => {
        if (!cancelled) setSvg(rendered);
      })
      .catch(err => {
        if (!cancelled) setError(String(err));
      });

    return () => {
      cancelled = true;
    };
  }, [code, rawId, theme]);

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
