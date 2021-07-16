import './sidebar.scss';

import React from 'react';

export default function Sidebar() {
  const menuOptions = [
    {
      active: true,
      label: 'Dashboard',
      fortAwesomeIconClass: 'fa-tachometer-alt',
    },
    {
      label: 'Products',
      fortAwesomeIconClass: 'fa-box',
    },
    {
      label: 'Customers',
      fortAwesomeIconClass: 'fa-users',
    },
  ];

  return (
    <aside className="app-sidebar">
      <div>MENU</div>

      <br />

      <ul>
        {menuOptions.map((option, index) => (
          <li key="index" className={option.active ? 'option-active' : ''}>
            <i className={`fas ${option.fortAwesomeIconClass}`} />
            <div className="option-label flex-fill">{option.label}</div>
          </li>
        ))}
      </ul>
    </aside>
  );
}
