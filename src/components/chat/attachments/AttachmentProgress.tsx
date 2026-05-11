import React, { memo } from 'react';

import { UploadStatus } from '@/lib/constants/attachment.constants';

type TAttachmentProgressProps = {
  status: UploadStatus;
  progress: number;
};

const AttachmentProgress: React.FC<TAttachmentProgressProps> = memo(props => {
  const { status, progress } = props;

  if (status === UploadStatus.UPLOADING)
    return <span className="elitea-assistant-file-chip-progress-text">{progress}%</span>;

  return null;
});

AttachmentProgress.displayName = 'AttachmentProgress';

export default AttachmentProgress;
