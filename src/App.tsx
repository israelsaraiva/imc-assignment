import './App.scss';

import React from 'react';

import Sidebar from './shared/sidebar/sidebar';
import DashboardPage from './pages/dashboard/dashboard';

function App() {
  return (
    <div className="app-container">
      <Sidebar />

      <div className="app-container-body flex-fill">
        <DashboardPage />
      </div>
    </div>
  );
}

export default App;
