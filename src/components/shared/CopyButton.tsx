import React, { memo, useCallback, useState } from 'react';

import { CheckIcon, CopyIcon } from '@/components/icons';
import { Tooltip } from '@/components/shared';

const CopyButton: React.FC<{ text: string; testId?: string }> = memo(props => {
  const { text, testId } = props;

  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [text]);

  return (
    <Tooltip content="Copy to clipboard">
      <button
        className="elitea-assistant-header-action"
        onClick={handleCopy}
        aria-label="Copy to clipboard"
        type="button"
        data-testid={testId}
        data-copied={copied ? 'true' : 'false'}
      >
        {copied ? <CheckIcon /> : <CopyIcon />}
      </button>
    </Tooltip>
  );
});

CopyButton.displayName = 'CopyButton';

export default CopyButton;
