import React from 'react';

import { createRoot } from 'react-dom/client';

import { EliteaAssistant } from '../src';

const root = createRoot(document.getElementById('elitea-assistant-root')!);

root.render(
  <React.StrictMode>
    <EliteaAssistant
      apiUrl="https://dev.elitea.ai/api/assistant"
      token="dev-token-placeholder"
      title="Elitea Assistant"
      placeholder="Ask me anything..."
      position="bottom-left"
      theme="dark"
    />
  </React.StrictMode>,
);
