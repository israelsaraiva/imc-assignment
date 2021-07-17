import './dashboard.scss';

import React from 'react';

import InsightBlock from './insight-block/insight-block';
import TopBar from './top-bar/top-bar';
import LineChart from './line-chart/line-chart';

export default function DashboardPage() {
  const insights = [1, 2, 3, 4];
  return (
    <div className="dashboard-page">
      <TopBar />

      <div className="dashboard-page-insights row">
        {insights.map((insight) => (
          <InsightBlock key={insight} className="col-sm-3" />
        ))}
      </div>

      <div className="dashboard-page-charts">
        <div>
          <div className="subtitle">Guide Performance</div>
          <div className="dashboard-page-charts-container">
            <LineChart />
          </div>
        </div>
      </div>
    </div>
  );
}
