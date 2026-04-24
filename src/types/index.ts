export interface EliteaAssistantColors {
  buttonBackground?: string;
  buttonIcon?: string;
  headerBackground?: string;
  headerText?: string;
  chatBackground?: string;
  userMessageBackground?: string;
  userMessageText?: string;
  assistantMessageBackground?: string;
  assistantMessageText?: string;
  inputBackground?: string;
  inputText?: string;
  inputBorder?: string;
  sendButtonBackground?: string;
  sendButtonIcon?: string;
}

export type EliteaAssistantPosition = 'bottom-right' | 'bottom-left';

export interface EliteaAssistantProps {
  apiUrl: string;
  token: string;
  title?: string;
  placeholder?: string;
  position?: EliteaAssistantPosition;
  theme?: 'light' | 'dark';
  colors?: EliteaAssistantColors;
}

export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: number;
}
