import './sidebar.scss';

import React, { useCallback } from 'react';
import AppPages from 'pages/pages.enum';
import { useHistory, useLocation } from 'react-router-dom';

const menuOptions = [
  {
    active: true,
    label: 'Dashboard',
    fortAwesomeIconClass: 'fa-tachometer-alt',
    page: AppPages.Dashboard
  },
  {
    label: 'Invoices',
    fortAwesomeIconClass: 'fa-file-invoice-dollar',
    page: AppPages.Invoices
  },
  {
    label: 'Customers',
    fortAwesomeIconClass: 'fa-users',
    page: AppPages.Customers
  }
];

export default function Sidebar() {
  const { push } = useHistory();
  const { pathname } = useLocation();

  const menuActive = useCallback((option) => pathname.includes(option.page), [pathname]);

  function navigateTo(page: AppPages) {
    push(page);
  }

  return (
    <aside className="app-sidebar">
      <div className="p-4 fw-bold">MENU</div>

      <ul>
        {menuOptions.map((option, index) => (
          <li
            key={index}
            className={menuActive(option) ? 'option-active' : ''}
            onClick={() => navigateTo(option.page)}>
            <i className={`fas ${option.fortAwesomeIconClass}`} />
            <div className="option-label flex-fill">{option.label}</div>
          </li>
        ))}
      </ul>
    </aside>
  );
}
