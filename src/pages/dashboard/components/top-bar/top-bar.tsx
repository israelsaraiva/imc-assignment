import './top-bar.scss';

import React from 'react';
import { useApp } from 'providers/app.provider';

const userAvatar =
  'https://media-exp1.licdn.com/dms/image/C4E03AQGNbnck8RgC1A/profile-displayphoto-shrink_400_400/0/1593830255651?e=1631750400&v=beta&t=CweCRdPJapZyhTUozDJRbv1JzBouwLMD0Md8hv7_FZM';

export default function TopBar() {
  const { toggleSidebar } = useApp();

  return (
    <div className="dashboard-page-topBar">
      <div className="dashboard-page-topBar-container">
        <div className="avatar-container me-3">
          <div className="user-avatar">
            <img src={userAvatar} alt="user" />
          </div>
        </div>
        <div className="me-2 welcome-message">
          <div>Welcome Back,</div>
          <div className="user-name-mobile">Israel Saraiva</div>
        </div>
        <div className="user-name">Israel Saraiva</div>
      </div>

      <button
        type="button"
        className="btn btn-outline-primary toggle-menu-button"
        onClick={() => toggleSidebar?.()}>
        <i className="fas fa-bars"></i>
      </button>
    </div>
  );
}
