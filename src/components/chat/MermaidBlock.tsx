import { FC, memo } from 'react';

import { useMermaid } from '@/lib/hooks';

type TMermaidBlockProps = { code: string };

const MermaidBlock: FC<TMermaidBlockProps> = memo(props => {
  const { code } = props;

  const { svg, error } = useMermaid(code);

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
