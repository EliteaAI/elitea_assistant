import React, { memo } from 'react';

import { CloseIcon, WarningIcon } from '@/components/icons';

type TToastProps = {
  message: string;
  onDismiss: () => void;
};

const Toast: React.FC<TToastProps> = memo(props => {
  const { message, onDismiss } = props;

  return (
    <div
      className="elitea-assistant-toast"
      role="alert"
    >
      <span className="elitea-assistant-toast-icon">
        <WarningIcon />
      </span>
      <span className="elitea-assistant-toast-text">{message}</span>
      <button
        className="elitea-assistant-toast-close"
        onClick={onDismiss}
        aria-label="Dismiss"
        type="button"
      >
        <CloseIcon />
      </button>
    </div>
  );
});

Toast.displayName = 'Toast';

export default Toast;
