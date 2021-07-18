import './top-bar.scss';

import React from 'react';

const userAvatar =
  'https://media-exp1.licdn.com/dms/image/C4E03AQGNbnck8RgC1A/profile-displayphoto-shrink_400_400/0/1593830255651?e=1631750400&v=beta&t=CweCRdPJapZyhTUozDJRbv1JzBouwLMD0Md8hv7_FZM';

export default function TopBar() {
  return (
    <div className="dashboard-page-topBar">
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
  );
}
