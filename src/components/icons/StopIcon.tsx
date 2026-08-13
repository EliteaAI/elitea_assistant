import React, { memo } from 'react';

const StopIcon: React.FC = memo(() => (
  <svg
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="5"
      y="5"
      width="10"
      height="10"
      rx="1"
      fill="currentColor"
    />
  </svg>
));

StopIcon.displayName = 'StopIcon';

export default StopIcon;
