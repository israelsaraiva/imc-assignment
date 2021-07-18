import './dashboard.page.scss';

import CustomersPage from 'pages/customers/customers.page';
import React from 'react';

import InsightBlock from './components/insight-block/insight-block';
import TopBar from './components/top-bar/top-bar';
import MonthlyCumulativeSection from './sections/monthly-cumulative-section/monthly-cumulative-section';
import ProductCategorySection from './sections/product-category-section/product-category-section';

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
        <div className="row">
          <div className="col-md-7">
            <ProductCategorySection />
          </div>
          <div className="col-md-1" />
          <div className="col-md-4">
            <CustomersPage />
          </div>
        </div>

        <MonthlyCumulativeSection />
      </div>
    </div>
  );
}
