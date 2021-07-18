import './product-category-section.scss';

import { BestProductsCategoriesModel } from 'models/best-products-categories.model';
import BarChart from 'pages/dashboard/components/charts/bar-chart';
import React, { useEffect, useState } from 'react';
import useGeneralService from 'services/general.service';
import ToggleSelector, { ToggleOption } from 'shared/toggle-selector/toggle-selector';
import Spinner from 'shared/spinner/spinner';

const toggleOptions = [
  { key: 'total_revenue', label: 'Total revenue' },
  { key: 'total_margin', label: 'Total margin' }
];

export default function ProductCategorySection() {
  const generalService = useGeneralService();

  const [productsCategories, setProductsCategories] = useState<BestProductsCategoriesModel[]>([]);
  const [productCategoryOption, setProductCategoryOption] = useState<ToggleOption>(
    toggleOptions[0]
  );
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    generalService
      .getBestProductsCategories()
      .then((res) => {
        setProductsCategories(formatBarChartData(res.data));
      })
      .finally(() => setLoading(false));
  }, []);

  function formatBarChartData(data: BestProductsCategoriesModel[]) {
    data.forEach((item) => {
      item['Total revenue'] = Math.round(item.total_revenue);
      item['Total margin'] = Math.round(item.total_margin);
    });
    return data;
  }

  return (
    <div className="product-category-section">
      <div className="product-category-section-title">
        <div className="subtitle">{productCategoryOption.label} Per Products Categories</div>
        <ToggleSelector options={toggleOptions} onToggle={setProductCategoryOption} />
      </div>

      <div className="product-category-section-container">
        <Spinner active={loading} />

        <BarChart
          data={productsCategories}
          indexBy="category_name"
          keys={[productCategoryOption.label]}
        />
      </div>
    </div>
  );
}
