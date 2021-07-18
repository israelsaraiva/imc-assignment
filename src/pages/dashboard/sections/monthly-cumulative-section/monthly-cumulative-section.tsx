import './monthly-cumulative-section.scss';

import { Serie } from '@nivo/line';
import { RevenueModel } from 'models/revenue.model';
import LineChart from 'pages/dashboard/components/charts/line-chart';
import React, { useEffect, useState } from 'react';
import useGeneralService from 'services/general.service';
import Spinner from 'shared/spinner/spinner';
import ToggleSelector, { ToggleOption } from 'shared/toggle-selector/toggle-selector';

const toggleOptions = [
  { key: 'monthly', label: 'Monthly' },
  { key: 'weekly', label: 'Weekly' }
];

export default function MonthlyCumulativeSection() {
  const generalService = useGeneralService();

  const [chartData, setChartData] = useState<Serie[]>([]);
  const [loading, setLoading] = useState(false);
  const [period, setPeriod] = useState<ToggleOption>(toggleOptions[0]);

  useEffect(() => {
    setLoading(true);

    generalService
      .getRevenues(period.key)
      .then((res) => {
        const registersAmount = 12;
        formatChartData(res.data.slice(0, registersAmount));
      })
      .finally(() => setLoading(false));
  }, [period]);

  function formatChartData(data: RevenueModel[]) {
    let totalRevenueSum = 0;
    let totalMarginSum = 0;

    const cumulativeRevenueData: Serie = {
      id: 'Cumulative revenue',
      data: []
    };

    const cumulativeMarginData: Serie = {
      id: 'Cumulative margin',
      data: []
    };

    data.forEach((item) => {
      totalRevenueSum += item.total_revenue;
      totalMarginSum += item.total_margin;

      const xAxis = period.key === 'monthly' ? item.month : item.week;

      cumulativeRevenueData.data.push({ x: xAxis, y: Math.round(totalRevenueSum) });
      cumulativeMarginData.data.push({ x: xAxis, y: Math.round(totalMarginSum) });
    });

    setChartData([cumulativeRevenueData, cumulativeMarginData]);
  }

  return (
    <div className="monthly-cumulative-section">
      <div className="monthly-cumulative-section-title">
        <div className="subtitle">Cumulative Margin & Revenue</div>
        <ToggleSelector options={toggleOptions} onToggle={setPeriod} />
      </div>

      <div className="monthly-cumulative-section-container">
        <Spinner active={loading} />
        <LineChart data={chartData} />
      </div>
    </div>
  );
}
