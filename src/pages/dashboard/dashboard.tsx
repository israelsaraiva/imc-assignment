import './dashboard.scss';

import React from 'react';

import InsightBlock from './components/insight-block/insight-block';
import TopBar from './components/top-bar/top-bar';
import ProductCategorySection from './sections/product-category-section/product-category-section';
import MonthlyCumulativeSection from './sections/monthly-cumulative-section/monthly-cumulative-section';

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
        <ProductCategorySection />

        <MonthlyCumulativeSection />
      </div>
    </div>
  );
}
