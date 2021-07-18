import React, { useEffect, useState } from 'react';

import './toggle-selector.scss';

export interface ToggleOption {
  key: string;
  label: string;
  selected?: boolean;
}

type ToggleSelectorProps = {
  options: ToggleOption[];
  onToggle?: (option: ToggleOption) => void;
};

export default function ToggleSelector({ options, onToggle }: ToggleSelectorProps) {
  const [selected, setSelected] = useState('');

  useEffect(() => {
    setSelected(options[0].key);
  }, [options]);

  function selectOption(option: ToggleOption) {
    setSelected(option.key);

    if (onToggle) {
      onToggle(option);
    }
  }

  return (
    <div className="toggle-selector">
      {options.map((option) => {
        const selectedClass = option.key === selected ? 'selected' : '';
        return (
          <div key={option.key} className={`toggle-selector-option ${selectedClass}`} onClick={() => selectOption(option)}>
            {option.label}
          </div>
        );
      })}
    </div>
  );
}
