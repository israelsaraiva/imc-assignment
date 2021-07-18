import React from 'react';

import './spinner.scss';

type SpinnerProps = {
  active: boolean;
};

export default function Spinner({ active }: SpinnerProps) {
  return (
    <div className={`app-spinner ${active ? 'active' : ''}`}>
      <div className="app-spinner-container">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  );
}
