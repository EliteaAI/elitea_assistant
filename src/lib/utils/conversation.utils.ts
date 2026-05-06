import type { TMessage, TRawConversation, TRawMessageGroup } from '@/lib/types';

const toTimestamp = (value: unknown): number => {
  if (typeof value === 'number') return value < 4102444800 ? value * 1000 : value;
  if (typeof value === 'string') {
    const dt = new Date(value);
    return isNaN(dt.getTime()) ? 0 : dt.getTime();
  }
  return 0;
};

const toMessage = (group: TRawMessageGroup): TMessage => {
  const role = group.sent_to != null ? 'user' : 'assistant';

  let content = '';
  for (const item of group.message_items ?? []) {
    const itemType = item.item_type ?? item.type;
    if (itemType === 'text_message' || itemType === 'text') {
      content = item.item_details?.content ?? item.content ?? '';
      break;
    }
  }

  return {
    id: String(group.uuid ?? group.id ?? ''),
    role,
    content,
    timestamp: toTimestamp(group.created_at_ts ?? group.created_at),
  };
};

export const parseConversationMessages = (conversation: TRawConversation): TMessage[] =>
  (conversation.message_groups ?? []).map(toMessage);
