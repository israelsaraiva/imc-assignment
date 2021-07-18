import './dashboard.page.scss';

import CustomersPage from 'pages/customers/customers.page';
import React from 'react';

import InsightBlock from './components/insight-block/insight-block';
import TopBar from './components/top-bar/top-bar';
import MonthlyCumulativeSection from './sections/monthly-cumulative-section/monthly-cumulative-section';
import ProductCategorySection from './sections/product-category-section/product-category-section';

export default function DashboardPage() {
  const insights = [
    { title: 'Revenue', value: 1240, label: 'Last Month' },
    { title: 'Margin', value: 1240, label: 'Last Month' },
    { title: 'New Customers', value: 1240, label: 'Last (7 Days)' },
    { title: 'New Invoices', value: 1240, label: 'Last (7 Days)' }
  ];

  return (
    <div className="dashboard-page">
      <TopBar />

      <div className="dashboard-page-insights">
        {insights.map((insight, index) => (
          <InsightBlock key={index} {...insight} />
        ))}
      </div>

      <div className="dashboard-page-charts">
        <div className="row">
          <div className="col-lg-7">
            <ProductCategorySection />
          </div>
          <div className="col-lg-1" />
          <div className="col-lg-4">
            <CustomersPage />
          </div>
        </div>

        <MonthlyCumulativeSection />
      </div>
    </div>
  );
}
