import React, { memo } from 'react';

import { CheckIcon, FileIcon } from '@/components/icons';
import { UploadStatus } from '@/lib/constants/attachment.constants';

type TAttachmentIconProps = {
  status: UploadStatus;
  progress?: number;
};

const RADIUS = 7;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

const AttachmentIcon: React.FC<TAttachmentIconProps> = memo(props => {
  const { status, progress = 0 } = props;

  if (status === UploadStatus.UPLOADING) {
    const offset = CIRCUMFERENCE - (progress / 100) * CIRCUMFERENCE;

    return (
      <svg
        className="elitea-assistant-file-chip-spinner"
        viewBox="0 0 18 18"
      >
        <circle
          cx="9"
          cy="9"
          r={RADIUS}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          opacity="0.25"
        />
        <circle
          cx="9"
          cy="9"
          r={RADIUS}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={offset}
          transform="rotate(-90 9 9)"
          className="elitea-assistant-file-chip-spinner-progress"
        />
      </svg>
    );
  }

  if (status === UploadStatus.COMPLETED) return <CheckIcon />;

  return <FileIcon />;
});

AttachmentIcon.displayName = 'AttachmentIcon';

export default AttachmentIcon;
