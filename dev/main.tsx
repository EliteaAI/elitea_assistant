import React from 'react';

import { createRoot } from 'react-dom/client';

import { EliteaAssistant } from '../src';

const root = createRoot(document.getElementById('elitea-assistant-root')!);

root.render(
  <React.StrictMode>
    <EliteaAssistant
      apiUrl="/api/v2/support_assistant"
      token="dev-token-placeholder"
      title="ELITEA Support Assistant"
      placeholder="Type your message."
      position="bottom-left"
      theme="light"
    />
  </React.StrictMode>,
);
