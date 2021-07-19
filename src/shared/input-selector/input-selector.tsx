import React, { useMemo, useState } from 'react';
import $ from 'jquery';

import './input-selector.scss';

export interface InputSelectorOption {
  key: string;
  label: string;
}

type InputSelectorProps = {
  options: InputSelectorOption[];
  selected: InputSelectorOption;
  onSelectOption?: (option: InputSelectorOption) => void;
};

export default function InputSelector({ options, selected, onSelectOption }: InputSelectorProps) {
  const [active, setActive] = useState(false);

  const filteredOptions = useMemo(
    () => options.filter((option) => option.key !== selected.key),
    [options, selected]
  );

  function onClickOption(option: InputSelectorOption) {
    setActive(false);
    onSelectOption?.(option);
  }

  $(document).ready(() => {
    $(document).click((event) => {
      const $target = $(event.target);

      if (!$target.parents('.input-selector').length) {
        setActive(false);
      }
    });
  });

  return (
    <div className="input-selector">
      <div className="d-flex align-items-center" onClick={() => setActive(true)}>
        <div className="input-selector-label">
          <i className="fas fa-calendar"></i>
          <div>{selected.label}</div>
        </div>
        <i className="fas fa-angle-down"></i>
      </div>

      <div className={`input-selector-options ${active ? 'active' : ''}`}>
        <ul>
          {filteredOptions.map((option, index) => {
            return (
              <li key={index} onClick={() => onClickOption(option)}>
                {option.label}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
