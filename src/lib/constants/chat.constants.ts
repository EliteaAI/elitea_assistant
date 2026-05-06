export const SOCKET_EVENTS = {
  ENTER_ROOM: 'chat_enter_room',
  LEAVE_ROOM: 'chat_leave_room',
  PREDICT: 'support_predict',
  PREDICT_RESPONSE: 'chat_predict',
  CONVERSATION_NAME_UPDATED: 'chat_conversation_name_updated',
  ERROR: 'support_error',
} as const;

export const MESSAGE_TYPES = {
  START_TASK: 'start_task',
  CHUNK: 'chunk',
  AI_MESSAGE_CHUNK: 'AIMessageChunk',
  AGENT_LLM_CHUNK: 'agent_llm_chunk',
  AGENT_RESPONSE: 'agent_response',
  PIPELINE_FINISH: 'pipeline_finish',
  ERROR: 'error',
  AGENT_EXCEPTION: 'agent_exception',
} as const;
