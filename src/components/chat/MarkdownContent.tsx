import React, { memo } from 'react';

import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

type TMarkdownContentProps = {
  content: string;
};

const MarkdownContent: React.FC<TMarkdownContentProps> = memo(({ content }) => (
  <div className="elitea-assistant-markdown">
    <Markdown remarkPlugins={[remarkGfm]}>{content}</Markdown>
  </div>
));

MarkdownContent.displayName = 'MarkdownContent';

export default MarkdownContent;
