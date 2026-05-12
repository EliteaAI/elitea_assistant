import type { TChatAPI } from './api.types';
import type { TEliteaAssistantColors } from './theme.types';

export type TSupportAssistantContext = {
  assistant_name?: string;
  assistant_version?: string;
  project_id?: number;
  project_name?: string;
  current_page?: string;
  current_entity_type?: string;
  current_entity_id?: number;
  current_entity_name?: string;
  selected_provider?: string;
  selected_model?: string;
  meta?: Record<string, unknown>;
};

export type TAssistantConfig = {
  enabled: boolean;
  title: string;
  welcomeMessage: string;
  placeholder: string;
  support_project_id: number;
  user: {
    id: number;
    name: string;
    avatar: string;
  };
};

export type TEliteaAssistantPosition = 'bottom-right' | 'bottom-left';

export type TEliteaAssistantProps = {
  apiUrl?: string;
  token?: string;
  withCredentials?: boolean;
  socketPath?: string;
  apiAdapter?: TChatAPI;
  title?: string;
  placeholder?: string;
  welcomeMessage?: string;
  position?: TEliteaAssistantPosition;
  theme?: 'light' | 'dark';
  colors?: TEliteaAssistantColors;
  supportAssistantContext?: TSupportAssistantContext;
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
