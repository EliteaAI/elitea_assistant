import React, { forwardRef, useImperativeHandle, useMemo } from 'react';

import { createDefaultAdapter } from '@/api';
import { ChatButton, ChatWindow, PopupMessage } from '@/components/chat';
import { ApiContext, useAssistantState, usePopup } from '@/lib/hooks';
import type { TChatAPI, TEliteaAssistantProps, TEliteaAssistantRef } from '@/lib/types';
import { colorsToCSSProperties, resolveColors } from '@/theme/colors.theme';
import '@/theme/styles/index.css';

const EliteaAssistant = forwardRef<TEliteaAssistantRef, TEliteaAssistantProps>((props, ref) => {
  const {
    apiUrl,
    token,
    apiAdapter,
    title = 'Elitea Assistant',
    placeholder = 'Type a message...',
    welcomeMessage = "Hi! I'm your ELITEA Support Assistant.\nAsk me anything about ELITEA or report any issues you're experiencing. I have context about your current screen and settings.",
    position = 'bottom-right',
    theme = 'light',
    colors,
  } = props;

  const cssVars = useMemo(() => colorsToCSSProperties(resolveColors(theme, colors)), [theme, colors]);

  const api: TChatAPI = useMemo(() => {
    if (apiAdapter) return apiAdapter;
    if (apiUrl && token) return createDefaultAdapter(apiUrl, token);

    throw new Error('EliteaAssistant: provide either apiAdapter or both apiUrl and token');
  }, [apiAdapter, apiUrl, token]);

  const { isOpen, isExpanded, open, close, toggle, expandFullscreen, collapseFullscreen, toggleFullscreen } =
    useAssistantState();

  const { showPopup, displayPopup, hidePopup, popupText } = usePopup(isOpen);

  useImperativeHandle(
    ref,
    () => ({
      open,
      close,
      toggle,
      expandFullscreen,
      collapseFullscreen,
      toggleFullscreen,
      showPopup: displayPopup,
      hidePopup,
      isOpen: () => isOpen,
      isExpanded: () => isExpanded,
    }),
    [
      isOpen,
      isExpanded,
      open,
      close,
      toggle,
      expandFullscreen,
      collapseFullscreen,
      toggleFullscreen,
      displayPopup,
      hidePopup,
    ],
  );

  return (
    <ApiContext.Provider value={api}>
      <div
        className={`elitea-assistant-container elitea-assistant-container--${position}`}
        style={cssVars as React.CSSProperties}
      >
        {isOpen && (
          <ChatWindow
            title={title}
            placeholder={placeholder}
            welcomeMessage={welcomeMessage}
            onClose={close}
            expanded={isExpanded}
            onExpand={toggleFullscreen}
          />
        )}
        {showPopup && !isOpen && (
          <PopupMessage
            message={popupText}
            onClose={hidePopup}
          />
        )}
        <ChatButton onClick={toggle} />
      </div>
    </ApiContext.Provider>
  );
});

EliteaAssistant.displayName = 'EliteaAssistant';

export { EliteaAssistant };
