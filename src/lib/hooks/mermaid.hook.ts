import { useEffect, useRef, useState } from 'react';

import DOMPurify from 'dompurify';

import { useTheme } from '@/lib/hooks';

export const useMermaid = (code: string) => {
  const idRef = useRef(`mermaid-${Math.random().toString(36).slice(2)}`);

  const [svg, setSvg] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const theme = useTheme();

  useEffect(() => {
    let cancelled = false;

    setSvg(null);
    setError(null);

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
        if (!cancelled) {
          // eslint-disable-next-line no-console
          console.warn('Mermaid rendering failed:', err);
          setError('Unable to render this diagram. Please check the syntax.');
        }
      });

    return () => {
      cancelled = true;
    };
  }, [code, theme]);

  return { svg, error };
};
