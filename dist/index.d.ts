import { default as default_2 } from 'react';

export declare const createDefaultAdapter: (baseURL: string, token: string) => TChatAPI;

export declare const EliteaAssistant: default_2.ForwardRefExoticComponent<TEliteaAssistantProps & default_2.RefAttributes<TEliteaAssistantRef>>;

export declare type TAssistantConfig = {
    enabled: boolean;
    name: string;
    avatar?: string;
};

export declare type TChatAPI = {
    getConfig: () => Promise<TAssistantConfig>;
    getConversations: () => Promise<TConversationListItem[]>;
    createConversation: () => Promise<{
        id: string;
    }>;
    getMessages: (conversationId: string) => Promise<TMessage[]>;
    sendMessage: (conversationId: string, message: string) => Promise<TMessage>;
    deleteConversation: (conversationId: string) => Promise<void>;
};

export declare type TConversationListItem = {
    id: string;
    title: string;
    createdAt: number;
};

export declare type TEliteaAssistantColors = {
    buttonBackground?: string;
    buttonIcon?: string;
    headerBackground?: string;
    headerText?: string;
    headerActionBackground?: string;
    headerActionHoverBackground?: string;
    headerActionActiveBackground?: string;
    headerActionActiveColor?: string;
    headerActionActiveBorder?: string;
    headerActionDisabledBackground?: string;
    headerActionDisabledColor?: string;
    headerCloseBackground?: string;
    headerCloseHoverBackground?: string;
    headerCloseHoverColor?: string;
    headerCloseActiveBackground?: string;
    headerCloseActiveColor?: string;
    headerCloseDisabledBackground?: string;
    headerCloseDisabledColor?: string;
    headerCloseIcon?: string;
    chatBackground?: string;
    userMessageBackground?: string;
    userMessageText?: string;
    assistantMessageBackground?: string;
    assistantMessageText?: string;
    inputBackground?: string;
    inputText?: string;
    inputPlaceholder?: string;
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

export declare type TEliteaAssistantPosition = 'bottom-right' | 'bottom-left';

export declare type TEliteaAssistantProps = {
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

export declare type TEliteaAssistantRef = {
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

export declare type TMessage = {
    id: string;
    role: 'user' | 'assistant';
    content: string;
    timestamp: number;
};

export { }
