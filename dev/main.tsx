import React, { useRef } from 'react';

import { createRoot } from 'react-dom/client';

import type { TEliteaAssistantRef, TSupportAssistantContext } from '../src';
import { EliteaAssistant } from '../src';

const mockContext: TSupportAssistantContext = {
  assistant_name: 'Test Agent',
  assistant_version: '1.0.0',
  project_name: 'Test Project',
  current_page: window.location.pathname,
  current_entity_type: 'agent',
  current_entity_id: 1,
  current_entity_name: 'Test Agent',
  selected_provider: 'openai',
  selected_model: 'gpt-4',
  meta: { browser: navigator.userAgent.split(' ').pop() },
};

const App = () => {
  const assistantRef = useRef<TEliteaAssistantRef>(null);

  return (
    <>
      <div
        style={{
          maxWidth: 600,
          margin: '80px auto',
          padding: 24,
          background: '#fff1f0',
          border: '1px solid #ffa39e',
          borderRadius: 8,
          display: 'flex',
          alignItems: 'center',
          gap: 16,
        }}
      >
        <div style={{ flex: 1 }}>
          <div style={{ fontWeight: 600, fontSize: 16, color: '#cf1322', marginBottom: 4 }}>
            Error: Agent execution failed
          </div>
          <div style={{ color: '#595959', fontSize: 14 }}>
            The agent &quot;Test Agent&quot; encountered an unexpected error during tool execution. Model
            returned an invalid response. Please check your configuration and try again.
          </div>
        </div>
        <button
          onClick={() => assistantRef.current?.showPopup()}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 8,
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
          title="Report to support"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#cf1322"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle
              cx="12"
              cy="12"
              r="10"
            />
            <line
              x1="12"
              y1="16"
              x2="12"
              y2="12"
            />
            <line
              x1="12"
              y1="8"
              x2="12.01"
              y2="8"
            />
          </svg>
        </button>
      </div>

      <EliteaAssistant
        ref={assistantRef}
        apiUrl="/api/v2/support_assistant"
        token="user-token"
        title="ELITEA Support Assistant"
        placeholder="Type your message."
        position="bottom-left"
        theme="light"
        supportAssistantContext={mockContext}
      />
    </>
  );
};

const root = createRoot(document.getElementById('elitea-assistant-root')!);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
