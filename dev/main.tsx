import React from 'react';

import { createRoot } from 'react-dom/client';

import { EliteaAssistant } from '../src';

const root = createRoot(document.getElementById('elitea-assistant-root')!);

root.render(
  <React.StrictMode>
    <EliteaAssistant
      apiUrl="https://dev.elitea.ai/api/assistant"
      token="dev-token-placeholder"
      title="ELITEA Support Assistant"
      placeholder="Type your message."
      position="bottom-left"
      theme="light"
    />
    <EliteaAssistant
      apiUrl="https://dev.elitea.ai/api/assistant"
      token="dev-token-placeholder"
      title="ELITEA Support Assistant"
      placeholder="Type your message."
      position="bottom-right"
      theme="dark"
    />
  </React.StrictMode>,
);
