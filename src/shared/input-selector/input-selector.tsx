import React from 'react';

import './input-selector.scss';

export default function InputSelector() {
  return (
    <div className="input-selector">
      <div className="input-selector-label">
        <i className="fas fa-calendar"></i>
        <div>Monthly</div>
      </div>
      <i className="fas fa-angle-down"></i>
    </div>
  );
}
