import React, { memo } from 'react';

import type { TStatusChip } from '@/lib/types';

type TStatusChipsProps = {
  chips: TStatusChip[];
};

const StatusChips: React.FC<TStatusChipsProps> = memo(props => {
  const { chips } = props;

  if (!chips || chips.length === 0) return null;

  return (
    <div className="elitea-assistant-status-chips">
      {chips.map(chip => (
        <span
          key={chip.id}
          className={`elitea-assistant-status-chip elitea-assistant-status-chip--${chip.status}`}
        >
          {chip.status === 'active' && <span className="elitea-assistant-chip-spinner" />}
          {chip.status === 'done' && <span className="elitea-assistant-chip-check">✓</span>}
          {chip.label}
        </span>
      ))}
    </div>
  );
});

StatusChips.displayName = 'StatusChips';

export default StatusChips;
