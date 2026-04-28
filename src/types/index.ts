export type TEliteaAssistantColors = {
  buttonBackground?: string;
  buttonIcon?: string;
  headerBackground?: string;
  headerText?: string;
  headerActionBackground?: string;
  headerCloseIcon?: string;
  chatBackground?: string;
  userMessageBackground?: string;
  userMessageText?: string;
  assistantMessageBackground?: string;
  assistantMessageText?: string;
  inputBackground?: string;
  inputText?: string;
  inputBorder?: string;
  userAvatarBackground?: string;
  userAvatarIcon?: string;
  sendButtonBackground?: string;
  sendButtonDisabledBackground?: string;
  sendButtonIcon?: string;
  chatWindowBorder?: string;
  chatWindowShadow?: string;
  popupBackground?: string;
  popupBorder?: string;
  popupText?: string;
  popupCloseBackground?: string;
  popupCloseHoverBackground?: string;
  historyDropdownBorder?: string;
  historyDropdownShadow?: string;
  historyDropdownHoverBackground?: string;
};

export type TEliteaAssistantPosition = 'bottom-right' | 'bottom-left';

export type TEliteaAssistantProps = {
  apiUrl: string;
  token: string;
  title?: string;
  placeholder?: string;
  welcomeMessage?: string;
  position?: TEliteaAssistantPosition;
  theme?: 'light' | 'dark';
  colors?: TEliteaAssistantColors;
};

export type TMessage = {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: number;
};

// TODO: Mock type — will be replaced with BE conversation model when API is ready
export type TConversation = {
  id: string;
  title: string;
  messages: TMessage[];
  createdAt: number;
};

export type TEliteaAssistantRef = {
  open: () => void;
  close: () => void;
  toggle: () => void;
  expandFullscreen: () => void;
  collapseFullscreen: () => void;
  toggleFullscreen: () => void;
  showPopup: () => void;
  hidePopup: () => void;
  isOpen: () => boolean;
  isExpanded: () => boolean;
};
