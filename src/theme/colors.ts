import type { EliteaAssistantColors } from '../types';

const lightColors: Required<EliteaAssistantColors> = {
  buttonBackground: '#6C5CE7',
  buttonIcon: '#FFFFFF',
  headerBackground: '#6C5CE7',
  headerText: '#FFFFFF',
  chatBackground: '#FFFFFF',
  userMessageBackground: '#6C5CE7',
  userMessageText: '#FFFFFF',
  assistantMessageBackground: '#F0F0F5',
  assistantMessageText: '#1A1A2E',
  inputBackground: '#FFFFFF',
  inputText: '#1A1A2E',
  inputBorder: '#E0E0E8',
  sendButtonBackground: '#6C5CE7',
  sendButtonIcon: '#FFFFFF',
};

const darkColors: Required<EliteaAssistantColors> = {
  buttonBackground: '#7C6CF7',
  buttonIcon: '#FFFFFF',
  headerBackground: '#1A1A2E',
  headerText: '#FFFFFF',
  chatBackground: '#16162A',
  userMessageBackground: '#7C6CF7',
  userMessageText: '#FFFFFF',
  assistantMessageBackground: '#2A2A40',
  assistantMessageText: '#E0E0E8',
  inputBackground: '#1A1A2E',
  inputText: '#E0E0E8',
  inputBorder: '#2A2A40',
  sendButtonBackground: '#7C6CF7',
  sendButtonIcon: '#FFFFFF',
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
  '--elitea-assistant-header-text': colors.headerText,
  '--elitea-assistant-chat-bg': colors.chatBackground,
  '--elitea-assistant-user-msg-bg': colors.userMessageBackground,
  '--elitea-assistant-user-msg-text': colors.userMessageText,
  '--elitea-assistant-bot-msg-bg': colors.assistantMessageBackground,
  '--elitea-assistant-bot-msg-text': colors.assistantMessageText,
  '--elitea-assistant-input-bg': colors.inputBackground,
  '--elitea-assistant-input-text': colors.inputText,
  '--elitea-assistant-input-border': colors.inputBorder,
  '--elitea-assistant-send-btn-bg': colors.sendButtonBackground,
  '--elitea-assistant-send-btn-icon': colors.sendButtonIcon,
});
