import type { EliteaAssistantColors } from '@/types';

const lightColors: Required<EliteaAssistantColors> = {
  buttonBackground: 'linear-gradient(50.4deg, #435CFF 0%, rgba(135, 151, 255, 0.6) 100%)',
  buttonIcon: '#FFFFFF',
  headerBackground: 'rgba(40, 69, 255, 0.25)',
  headerText: 'rgba(14, 19, 29, 1)',
  headerActionBackground: 'rgba(61, 68, 86, 0.1)',
  headerCloseIcon: 'rgba(119, 122, 131, 1)',
  chatBackground: 'rgba(255, 255, 255, 1)',
  userMessageBackground: 'rgba(141, 156, 255, 0.2)',
  userMessageText: 'rgba(14, 19, 29, 1)',
  userAvatarBackground: 'rgba(61, 68, 86, 0.15)',
  userAvatarIcon: 'rgba(255, 255, 255, 1)',
  assistantMessageBackground: '#F0F0F5',
  assistantMessageText: '#1A1A2E',
  inputBackground: 'rgba(40, 69, 255, 0.15)',
  inputText: '#1A1A2E',
  inputBorder: '#E0E0E8',
  sendButtonBackground: 'rgba(196, 40, 221, 1)',
  sendButtonDisabledBackground: 'rgba(173, 175, 183, 1)',
  sendButtonIcon: 'rgba(255, 255, 255, 1)',
  chatWindowBorder: 'rgba(141, 156, 255, 1)',
  chatWindowShadow: '0 0.5rem 1.875rem rgba(0, 0, 0, 0.12)',
};

const darkColors: Required<EliteaAssistantColors> = {
  buttonBackground: 'linear-gradient(50.4deg, #C428DD 0%, rgba(196, 40, 221, 0.3) 100%)',
  buttonIcon: '#FFFFFF',
  headerBackground: 'rgba(245, 81, 249, 0.3)',
  headerText: 'rgba(255, 255, 255, 1)',
  headerActionBackground: 'rgba(255, 255, 255, 0.1)',
  headerCloseIcon: 'rgba(169, 183, 193, 1)',
  chatBackground: 'rgba(24, 31, 42, 1)',
  userMessageBackground: 'rgba(128, 60, 145, 0.6)',
  userMessageText: 'rgba(255, 255, 255, 1)',
  userAvatarBackground: 'rgba(255, 255, 255, 0.15)',
  userAvatarIcon: 'rgba(255, 255, 255, 1)',
  assistantMessageBackground: '#2A2A40',
  assistantMessageText: '#E0E0E8',
  inputBackground: 'rgba(245, 81, 249, 0.1)',
  inputText: '#E0E0E8',
  inputBorder: '#2A2A40',
  sendButtonBackground: 'rgba(106, 232, 250, 1)',
  sendButtonDisabledBackground: 'rgba(104, 108, 118, 1)',
  sendButtonIcon: 'rgba(14, 19, 29, 1)',
  chatWindowBorder: 'rgba(245, 81, 249, 0.6)',
  chatWindowShadow: '0 0 1.875rem rgba(15, 34, 71, 0.3)',
};

const themeMap = {
  light: lightColors,
  dark: darkColors,
} as const;

export const resolveColors = (
  theme: 'light' | 'dark',
  overrides?: EliteaAssistantColors,
): Required<EliteaAssistantColors> => ({
  ...themeMap[theme],
  ...overrides,
});

export const colorsToCSSProperties = (colors: Required<EliteaAssistantColors>): Record<string, string> => ({
  '--elitea-assistant-button-bg': colors.buttonBackground,
  '--elitea-assistant-button-icon': colors.buttonIcon,
  '--elitea-assistant-header-bg': colors.headerBackground,
  '--elitea-assistant-header-action-bg': colors.headerActionBackground,
  '--elitea-assistant-header-close-icon': colors.headerCloseIcon,
  '--elitea-assistant-header-text': colors.headerText,
  '--elitea-assistant-chat-bg': colors.chatBackground,
  '--elitea-assistant-user-msg-bg': colors.userMessageBackground,
  '--elitea-assistant-user-msg-text': colors.userMessageText,
  '--elitea-assistant-user-avatar-bg': colors.userAvatarBackground,
  '--elitea-assistant-user-avatar-icon': colors.userAvatarIcon,
  '--elitea-assistant-bot-msg-bg': colors.assistantMessageBackground,
  '--elitea-assistant-bot-msg-text': colors.assistantMessageText,
  '--elitea-assistant-input-bg': colors.inputBackground,
  '--elitea-assistant-input-text': colors.inputText,
  '--elitea-assistant-input-border': colors.inputBorder,
  '--elitea-assistant-send-btn-bg': colors.sendButtonBackground,
  '--elitea-assistant-send-btn-disabled-bg': colors.sendButtonDisabledBackground,
  '--elitea-assistant-send-btn-icon': colors.sendButtonIcon,
  '--elitea-assistant-window-border': colors.chatWindowBorder,
  '--elitea-assistant-window-shadow': colors.chatWindowShadow,
});
