import React, { forwardRef, useCallback, useImperativeHandle, useMemo } from 'react';

import { createDefaultAdapter } from '@/api';
import { ChatButton, ChatWindow, PopupMessage } from '@/components/chat';
import {
  ApiContext,
  ScreenshotContext,
  SocketContext,
  SupportAssistantContextValue,
  useAssistantState,
  useInitAssistant,
  usePopup,
  useScreenshot,
  useSocketConnection,
} from '@/lib/hooks';
import type { TChatAPI, TEliteaAssistantProps, TEliteaAssistantRef } from '@/lib/types';
import { deriveSocketUrl } from '@/lib/utils';
import { colorsToCSSProperties, resolveColors } from '@/theme/colors.theme';
import '@/theme/styles/index.css';

const EliteaAssistant = forwardRef<TEliteaAssistantRef, TEliteaAssistantProps>((props, ref) => {
  const {
    apiUrl,
    token,
    withCredentials = false,
    socketPath = '/socket.io/',
    apiAdapter,
    title: titleProp = 'Elitea Assistant',
    placeholder: placeholderProp = 'Type a message...',
    welcomeMessage:
      welcomeMessageProp = "Hi! I'm your ELITEA Support Assistant.\nAsk me anything about ELITEA or report any issues you're experiencing. I have context about your current screen and settings.",
    position = 'bottom-right',
    theme = 'light',
    colors,
    supportAssistantContext,
  } = props;

  const cssVars = useMemo(() => colorsToCSSProperties(resolveColors(theme, colors)), [theme, colors]);

  const api: TChatAPI = useMemo(() => {
    if (apiAdapter) return apiAdapter;
    if (apiUrl && (token || withCredentials)) return createDefaultAdapter(apiUrl, { token, withCredentials });

    throw new Error(
      'EliteaAssistant: provide either apiAdapter, or apiUrl with token, or apiUrl with withCredentials',
    );
  }, [apiAdapter, apiUrl, token, withCredentials]);

  const socketConfig = useMemo(
    () => ({
      url: apiUrl ? deriveSocketUrl(apiUrl) : '',
      path: socketPath,
      token,
      withCredentials,
    }),
    [apiUrl, socketPath, token, withCredentials],
  );

  const socket = useSocketConnection(socketConfig);

  const {
    title,
    welcomeMessage,
    placeholder,
    supportProjectId,
    user,
    history: initialHistory,
    lastConversation,
    isLoading: isInitLoading,
  } = useInitAssistant({
    api,
    title: titleProp,
    welcomeMessage: welcomeMessageProp,
    placeholder: placeholderProp,
  });

  const { isOpen, isExpanded, open, close, toggle, expandFullscreen, collapseFullscreen, toggleFullscreen } =
    useAssistantState();

  const screenshotState = useScreenshot();

  const { popupVissible, showPopup: showPopupBase, hidePopup: hidePopupBase, popupText } = usePopup(isOpen);

  const showPopupWithScreenshot = useCallback(() => {
    screenshotState.captureScreenshot();
    showPopupBase();
  }, [screenshotState, showPopupBase]);

  const hidePopupWithClear = useCallback(() => {
    screenshotState.clearScreenshot();
    hidePopupBase();
  }, [screenshotState, hidePopupBase]);

  useImperativeHandle(
    ref,
    () => ({
      open,
      close,
      toggle,
      expandFullscreen,
      collapseFullscreen,
      toggleFullscreen,
      showPopup: showPopupWithScreenshot,
      hidePopup: hidePopupWithClear,
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
      showPopupWithScreenshot,
      hidePopupWithClear,
    ],
  );

  return (
    <ApiContext.Provider value={api}>
      <SocketContext.Provider value={socket}>
        <SupportAssistantContextValue.Provider value={supportAssistantContext ?? null}>
          <ScreenshotContext.Provider value={screenshotState}>
            <div
              className={`elitea-assistant-container elitea-assistant-container--${position}`}
              style={cssVars as React.CSSProperties}
            >
              {isOpen && (
                <ChatWindow
                  title={title}
                  placeholder={placeholder}
                  welcomeMessage={welcomeMessage}
                  avatar={user.avatar}
                  supportProjectId={supportProjectId}
                  initialHistory={initialHistory}
                  lastConversation={lastConversation}
                  isInitLoading={isInitLoading}
                  onClose={close}
                  expanded={isExpanded}
                  onExpand={toggleFullscreen}
                />
              )}
              {popupVissible && !isOpen && (
                <PopupMessage
                  message={popupText}
                  onClose={hidePopupWithClear}
                />
              )}
              <ChatButton onClick={toggle} />
            </div>
          </ScreenshotContext.Provider>
        </SupportAssistantContextValue.Provider>
      </SocketContext.Provider>
    </ApiContext.Provider>
  );
});

EliteaAssistant.displayName = 'EliteaAssistant';

export { EliteaAssistant };
