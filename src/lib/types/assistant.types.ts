import type { TChatAPI } from './api.types';
import type { TEliteaAssistantColors } from './theme.types';

export type TAssistantConfig = {
  enabled: boolean;
  name: string;
  avatar?: string;
};

export type TEliteaAssistantPosition = 'bottom-right' | 'bottom-left';

export type TEliteaAssistantProps = {
  apiUrl?: string;
  token?: string;
  apiAdapter?: TChatAPI;
  title?: string;
  placeholder?: string;
  welcomeMessage?: string;
  position?: TEliteaAssistantPosition;
  theme?: 'light' | 'dark';
  colors?: TEliteaAssistantColors;
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
