import './invoices.page.scss';

import { InvoiceModel } from 'models/invoice.model';
import React, { useEffect, useMemo, useState } from 'react';
import useGeneralService from 'services/general.service';
import DataTable, { DataTableStructure } from 'shared/data-table/data-table';
import ToggleSelector, { ToggleOption } from 'shared/toggle-selector/toggle-selector';

const toggleOptions = [
  { key: 'total_invoice', label: 'Total Invoice' },
  { key: 'total_margin', label: 'Total Margin' }
];

export default function InvoicesPage() {
  const generalService = useGeneralService();

  const [invoices, setInvoices] = useState<InvoiceModel[]>([]);

  const [toggleSelected, setToggleSelected] = useState<ToggleOption>(toggleOptions[0]);

  useEffect(() => {
    generalService.getInvoices().then((res) => {
      const data = formatData(res.data);
      setInvoices(data);
    });
  }, []);

  function formatData(data: InvoiceModel[]) {
    data.forEach((item) => {
      item.total_invoice = Math.round((item.total_invoice + Number.EPSILON) * 100) / 100;
      item.total_margin = Math.round((item.total_margin + Number.EPSILON) * 100) / 100;
    });

    return data.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }

  const structure: DataTableStructure[] = [
    { header: 'ID', beforeValue: '#', valueKey: 'id' },
    { header: 'DATE', valueKey: 'date' },
    { header: 'CUSTOMER NAME', valueKey: 'customer_name' },
    { header: 'REGION', valueKey: 'region' },
    {
      header: toggleSelected.label,
      beforeValue: '$',
      valueFunction: (invoice) => invoice[toggleSelected.key]
    }
  ];

  return (
    <div className="invoices-page">
      <div className="invoices-page-top">
        <div className="invoices-page-title">Last Invoices</div>
        <ToggleSelector options={toggleOptions} onToggle={setToggleSelected} />
      </div>

      <DataTable data={invoices} structure={structure} />
    </div>
  );
}
