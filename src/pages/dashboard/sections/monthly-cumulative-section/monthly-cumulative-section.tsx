import './monthly-cumulative-section.scss';

import { RevenueModel } from 'models/revenue.model';
import BarChart from 'pages/dashboard/components/charts/bar-chart';
import React, { useEffect, useState } from 'react';
import useGeneralService from 'services/general.service';
import ToggleSelector, { ToggleOption } from 'shared/toggle-selector/toggle-selector';
import { Serie } from '@nivo/line';
import LineChart from 'pages/dashboard/components/charts/line-chart';

const toggleOptions = [
  { key: 'total_revenue', label: 'Cumulative revenue' },
  { key: 'total_margin', label: 'Cumulative margin' },
];

export default function MonthlyCumulativeSection() {
  const generalService = useGeneralService();

  const [productCategoryOption, setProductCategoryOption] = useState<ToggleOption>(toggleOptions[0]);
  const [chartData, setChartData] = useState<Serie[]>([]);

  useEffect(() => {
    generalService.getRevenues('monthly').then((res) => {
      formatChartData(res.data);
    });
  }, []);

  function formatChartData(data: RevenueModel[]) {
    let totalRevenueSum = 0;
    let totalMarginSum = 0;

    const cumulativeRevenueData: Serie = {
      id: 'Cumulative revenue',
      color: 'hsl(295, 70%, 50%)',
      data: [],
    };

    const cumulativeMarginData: Serie = {
      id: 'Cumulative margin',
      color: 'hsl(339, 70%, 50%)',
      data: [],
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
    <div className="product-category-section">
      <div className="product-category-section-title">
        <div className="subtitle">Cumulative Margin & Revenue</div>
        <ToggleSelector options={toggleOptions} onToggle={setProductCategoryOption} />
      </div>

      <div className="product-category-section-container">
        <LineChart data={chartData} />
      </div>
    </div>
  );
}
