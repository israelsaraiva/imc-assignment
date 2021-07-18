import './dashboard.scss';

import { RevenueModel } from 'models/revenue.model';
import React, { useEffect, useState } from 'react';
import useGeneralService from 'services/general.service';
import ToggleSelector from 'shared/toggle-selector/toggle-selector';

import BarChart from './charts/bar-chart';
import InsightBlock from './insight-block/insight-block';
import TopBar from './top-bar/top-bar';
import { BestProductsCategoriesModel } from 'models/best-products-categories.model';
import data from './charts/data';

export default function DashboardPage() {
  const insights = [1, 2, 3, 4];

  const generalService = useGeneralService();

  // const [revenues, setRevenues] = useState<RevenueModel[]>([]);
  const [categoriesRevenues, setCategoriesRevenues] = useState<BestProductsCategoriesModel[]>([]);

  useEffect(() => {
    // generalService?.getRevenues('monthly').then((res) => {
    //   setRevenues(res.data);
    // });

    generalService.getBestProductsCategories().then((res) => {
      setCategoriesRevenues(formatBarChartData(res.data));
    });
  }, []);

  function formatBarChartData(data: BestProductsCategoriesModel[]) {
    data.forEach((item) => {
      item['Total revenue'] = Math.round(item.total_revenue);
      item['Total margin'] = Math.round(item.total_margin);
    });
    return data;
  }

  return (
    <div className="dashboard-page">
      <TopBar />

      <div className="dashboard-page-insights row">
        {insights.map((insight) => (
          <InsightBlock key={insight} className="col-sm-3" />
        ))}
      </div>

      <div className="dashboard-page-charts">
        <div className="dashboard-page-charts-title">
          <div className="subtitle">Total Revenues Per Products Categories</div>
          <ToggleSelector />
        </div>

        <div className="dashboard-page-charts-container">
          <BarChart data={categoriesRevenues} indexBy="category_name" keys={['Total revenue']} />
        </div>
      </div>
    </div>
  );
}
