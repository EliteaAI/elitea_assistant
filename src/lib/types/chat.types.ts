export type TStatusChip = {
  id: string;
  label: string;
  status: 'active' | 'done';
};

export type TMessage = {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: number;
  isStreaming?: boolean;
  isAnimating?: boolean;
  isError?: boolean;
  statusChips?: TStatusChip[];
};

export type TConversationListItem = {
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

export type TConversationsResponse = {
  items: TConversationListItem[];
  total: number;
};

export type TRawMessageItem = {
  item_type?: string;
  type?: string;
  item_details?: { content?: string };
  content?: string;
};

export type TRawMessageGroup = {
  uuid?: string;
  id?: string;
  sent_to?: unknown;
  message_items?: TRawMessageItem[];
  created_at_ts?: number;
  created_at?: string;
};

export type TRawConversation = {
  uuid?: string;
  id?: string;
  name?: string;
  message_groups?: TRawMessageGroup[];
};

export type TSocketMessage = {
  message_id: string;
  type: string;
  content: unknown;
  response_metadata?: {
    finish_reason?: string;
    task_id?: string;
    participant_id?: string;
    [key: string]: unknown;
  };
  sio_event?: string;
};
