import './monthly-cumulative-section.scss';

import { Serie } from '@nivo/line';
import { RevenueModel } from 'models/revenue.model';
import LineChart from 'pages/dashboard/components/charts/line-chart';
import React, { useEffect, useState } from 'react';
import useGeneralService from 'services/general.service';
import Spinner from 'shared/spinner/spinner';

export default function MonthlyCumulativeSection() {
  const generalService = useGeneralService();

  const [chartData, setChartData] = useState<Serie[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    generalService
      .getRevenues('monthly')
      .then((res) => {
        formatChartData(res.data);
      })
      .finally(() => setLoading(false));
  }, []);

  function formatChartData(data: RevenueModel[]) {
    let totalRevenueSum = 0;
    let totalMarginSum = 0;

    const cumulativeRevenueData: Serie = {
      id: 'Cumulative revenue',
      color: 'hsl(295, 70%, 50%)',
      data: []
    };

    const cumulativeMarginData: Serie = {
      id: 'Cumulative margin',
      color: 'hsl(339, 70%, 50%)',
      data: []
    };

    data.forEach((item) => {
      totalRevenueSum += item.total_revenue;
      totalMarginSum += item.total_margin;

      cumulativeRevenueData.data.push({ x: item.month, y: Math.round(totalRevenueSum) });
      cumulativeMarginData.data.push({ x: item.month, y: Math.round(totalMarginSum) });
    });

    setChartData([cumulativeRevenueData, cumulativeMarginData]);
  }

  return (
    <div className="monthly-cumulative-section">
      <div className="monthly-cumulative-section-title">
        <div className="subtitle">Cumulative Margin & Revenue</div>
      </div>

      <div className="monthly-cumulative-section-container">
        <Spinner active={loading} />
        <LineChart data={chartData} />
      </div>
    </div>
  );
}
