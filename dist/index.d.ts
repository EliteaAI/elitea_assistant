import { default as default_2 } from 'react';

export declare const createDefaultAdapter: (baseURL: string, options?: TAdapterOptions) => TChatAPI;

export declare const EliteaAssistant: default_2.ForwardRefExoticComponent<TEliteaAssistantProps & default_2.RefAttributes<TEliteaAssistantRef>>;

declare type TAdapterOptions = {
    token?: string;
    withCredentials?: boolean;
};

export declare type TAssistantConfig = {
    enabled: boolean;
    title: string;
    welcome_message: string;
    placeholder: string;
    support_project_id: number;
    user: {
        id: number;
        name: string;
        avatar: string;
    };
};

export declare type TChatAPI = {
    getConfig: () => Promise<TAssistantConfig>;
    getConversations: () => Promise<TConversationsResponse>;
    getConversation: (conversationId: string) => Promise<TRawConversation>;
    createConversation: () => Promise<TConversationListItem>;
    deleteConversation: (conversationId: string) => Promise<void>;
    uploadFile: (conversationId: string, formData: FormData, onProgress?: TUploadProgressCallback) => Promise<unknown>;
};

export declare type TConversationListItem = {
    id: number;
    uuid: string;
    name: string;
    is_private: boolean;
    author_id: number;
    created_at: string;
    updated_at: string;
    meta: {
        is_hidden: boolean;
        context_strategy: {
            name: string;
            enabled: boolean;
            created_at: string;
            last_optimized_at: string | null;
            max_context_tokens: number;
            enable_summarization: boolean;
            summary_instructions: string;
            summary_llm_settings: unknown;
            preserve_recent_messages: number;
            preserve_system_messages: boolean;
        };
        conversation_type: string;
    };
    source: string;
    attachment_participant_id: string | null;
    instructions: string | null;
    participants_count: number;
    message_groups_count: number;
    users_count: number;
    duration: number;
};

declare type TConversationsResponse = {
    items: TConversationListItem[];
    total: number;
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
    isStreaming?: boolean;
    isAnimating?: boolean;
    isError?: boolean;
    statusChips?: TStatusChip[];
};

declare type TRawConversation = {
    uuid?: string;
    id?: string;
    name?: string;
    message_groups?: TRawMessageGroup[];
};

declare type TRawMessageGroup = {
    uuid?: string;
    id?: string;
    sent_to?: unknown;
    message_items?: TRawMessageItem[];
    created_at_ts?: number;
    created_at?: string;
};

declare type TRawMessageItem = {
    item_type?: string;
    type?: string;
    item_details?: {
        content?: string;
    };
    content?: string;
};

declare type TStatusChip = {
    id: string;
    label: string;
    status: 'active' | 'done';
};

export declare type TSupportAssistantContext = {
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

declare type TUploadProgressCallback = (loaded: number, total: number) => void;

export { }
