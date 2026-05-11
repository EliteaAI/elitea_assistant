import React, { memo } from 'react';

import { CloseIcon } from '@/components/icons';
import { Tooltip } from '@/components/shared';
import { UploadStatus } from '@/lib/constants/attachment.constants';
import type { TAttachment } from '@/lib/types';

import AttachmentIcon from './AttachmentIcon';
import AttachmentProgress from './AttachmentProgress';

type TAttachmentChipProps = {
  attachment: TAttachment;
  onRemove: (attachmentId: string) => void;
};

const AttachmentChip: React.FC<TAttachmentChipProps> = memo(props => {
  const { attachment, onRemove } = props;

  const getChipClassName = (status: UploadStatus): string => {
    const baseClass = 'elitea-assistant-file-chip';

    const statusClasses: Record<string, string> = {
      uploading: `${baseClass} ${baseClass}--uploading`,
      error: `${baseClass} ${baseClass}--error`,
      completed: `${baseClass} ${baseClass}--completed`,
      pending: baseClass,
    };
    return statusClasses[status] || baseClass;
  };

  return (
    <Tooltip content={attachment.error ?? attachment.name}>
      <div className={getChipClassName(attachment.status)}>
        <span className="elitea-assistant-file-chip-icon">
          <AttachmentIcon
            status={attachment.status}
            progress={attachment.progress}
          />
        </span>
        <span className="elitea-assistant-file-chip-name">{attachment.name}</span>
        <AttachmentProgress
          status={attachment.status}
          progress={attachment.progress}
        />
        <button
          className="elitea-assistant-file-chip-remove"
          onClick={() => onRemove(attachment.id)}
          aria-label={`Remove ${attachment.name}`}
          type="button"
          disabled={attachment.status === UploadStatus.UPLOADING}
        >
          <CloseIcon />
        </button>
      </div>
    </Tooltip>
  );
});

AttachmentChip.displayName = 'AttachmentChip';

export default AttachmentChip;
