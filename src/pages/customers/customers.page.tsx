import './customers.page.scss';

import { BestCustomerModel } from 'models/best-customer.model';
import React, { useEffect, useState } from 'react';
import useGeneralService from 'services/general.service';
import DataTable, { DataTableStructure } from 'shared/data-table/data-table';
import ToggleSelector, { ToggleOption } from 'shared/toggle-selector/toggle-selector';

const toggleOptions = [
  { key: 'total_revenue', label: 'Total Invoice' },
  { key: 'total_margin', label: 'Total Margin' }
];

export default function CustomersPage() {
  const generalService = useGeneralService();

  const [customers, setCustomers] = useState<BestCustomerModel[]>([]);

  const [toggleSelected, setToggleSelected] = useState<ToggleOption>(toggleOptions[0]);

  useEffect(() => {
    generalService.getBestCustomersRevenues().then((res) => {
      const data = formatData(res.data);
      setCustomers(data);
    });
  }, []);

  function formatData(data: BestCustomerModel[]) {
    data.forEach((item) => {
      item.total_revenue = Math.round((item.total_revenue + Number.EPSILON) * 100) / 100;
      item.total_margin = Math.round((item.total_margin + Number.EPSILON) * 100) / 100;
    });

    return data;
  }

  const structure: DataTableStructure[] = [
    { header: 'NAME', valueKey: 'customer_name' },
    { header: 'NUMBER OF INVOICES', valueKey: 'invoices_count' },
    {
      header: toggleSelected.label,
      beforeValue: '$',
      valueFunction: (invoice) => invoice[toggleSelected.key]
    }
  ];

  return (
    <div className="customers-page">
      <div className="customers-page-top">
        <div className="customers-page-title">Best Customers</div>
        <ToggleSelector options={toggleOptions} onToggle={setToggleSelected} />
      </div>

      <DataTable data={customers} structure={structure} />
    </div>
  );
}
