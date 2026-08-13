export const SOCKET_EVENTS = {
  ENTER_ROOM: 'chat_enter_room',
  LEAVE_ROOM: 'chat_leave_room',
  PREDICT: 'support_predict',
  PREDICT_RESPONSE: 'chat_predict',
  CONVERSATION_NAME_UPDATED: 'chat_conversation_name_updated',
  ERROR: 'support_error',
  STOP: 'support_stop',
} as const;

export const MESSAGE_TYPES = {
  START_TASK: 'start_task',
  CHUNK: 'chunk',
  AI_MESSAGE_CHUNK: 'AIMessageChunk',
  AGENT_START: 'agent_start',
  AGENT_LLM_START: 'agent_llm_start',
  AGENT_LLM_CHUNK: 'agent_llm_chunk',
  AGENT_LLM_END: 'agent_llm_end',
  AGENT_TOOL_START: 'agent_tool_start',
  AGENT_TOOL_END: 'agent_tool_end',
  AGENT_ON_TRANSITIONAL_EDGE: 'agent_on_transitional_edge',
  AGENT_ON_FUNCTION_TOOL_NODE: 'agent_on_function_tool_node',
  AGENT_RESPONSE: 'agent_response',
  PIPELINE_FINISH: 'pipeline_finish',
  ERROR: 'error',
  AGENT_EXCEPTION: 'agent_exception',
} as const;
