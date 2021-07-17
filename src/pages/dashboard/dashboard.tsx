import './dashboard.scss';

import React, { useEffect, useState } from 'react';
import useGeneralService from 'services/general.service';

import BarChart from './charts/bar-chart';
import InsightBlock from './insight-block/insight-block';
import TopBar from './top-bar/top-bar';
import { RevenueModel } from 'models/revenue.model';

export default function DashboardPage() {
  const insights = [1, 2, 3, 4];

  const generalService = useGeneralService();

  const [revenues, setRevenues] = useState<RevenueModel[]>([]);

  useEffect(() => {
    generalService?.getRevenues('weekly').then((res) => {
      setRevenues(res.data);
    });
  }, [generalService]);

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
            <BarChart data={revenues} indexBy="week" keys={['invoices_count']} />
          </div>
        </div>
      </div>
    </div>
  );
}
