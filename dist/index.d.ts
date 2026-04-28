import { default as default_2 } from 'react';

export declare const EliteaAssistant: default_2.ForwardRefExoticComponent<TEliteaAssistantProps & default_2.RefAttributes<TEliteaAssistantRef>>;

export declare type TEliteaAssistantColors = {
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
};

export declare type TEliteaAssistantPosition = 'bottom-right' | 'bottom-left';

export declare type TEliteaAssistantProps = {
    apiUrl: string;
    token: string;
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
