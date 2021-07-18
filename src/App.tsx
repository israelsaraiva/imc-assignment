import './App.scss';

import AppRoutes from 'config/app.routes';
import AppPages from 'pages/pages.enum';
import React from 'react';
import { Redirect, Switch } from 'react-router-dom';

import Sidebar from './shared/sidebar/sidebar';

function App() {
  return (
    <div className="app-container">
      <Sidebar />

      <div className="app-container-body flex-fill">
        <Switch>
          {AppRoutes()}
          <Redirect path="*" to={AppPages.Dashboard} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
