import './invoices.page.scss';

import { InvoiceModel } from 'models/invoice.model';
import React, { useEffect, useMemo, useState } from 'react';
import useGeneralService from 'services/general.service';
import ToggleSelector, { ToggleOption } from 'shared/toggle-selector/toggle-selector';

const toggleOptions = [
  { key: 'total_invoice', label: 'Total Invoice' },
  { key: 'total_margin', label: 'Total Margin' }
];

export default function InvoicesPage() {
  const generalService = useGeneralService();

  const pageSize = 15;

  const [invoices, setInvoices] = useState<InvoiceModel[]>([]);
  const [filteredData, setFilteredData] = useState<InvoiceModel[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [pagesAmount, setPagesAmount] = useState(0);

  const [toggleSelected, setToggleSelected] = useState<ToggleOption>(toggleOptions[0]);

  useEffect(() => {
    generalService.getInvoices().then((res) => {
      const data = formatData(res.data);
      setInvoices(data);
      setPagesAmount(Math.ceil(data.length / pageSize));
    });
  }, []);

  useEffect(() => {
    setFilteredData(invoices.slice(currentPage * pageSize, (currentPage + 1) * pageSize));
  }, [invoices, currentPage]);

  function formatData(data: InvoiceModel[]) {
    data.forEach((item) => {
      item.total_invoice = Math.round((item.total_invoice + Number.EPSILON) * 100) / 100;
      item.total_margin = Math.round((item.total_margin + Number.EPSILON) * 100) / 100;
    });

    return data.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }

  const pages = useMemo(() => new Array(pagesAmount).fill(''), [pagesAmount]);

  return (
    <div className="invoices-page">
      <div className="invoices-page-top">
        <div className="invoices-page-title">Last Invoices</div>
        <ToggleSelector options={toggleOptions} onToggle={setToggleSelected} />
      </div>

      <table id="invoices-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>DATE</th>
            <th>CUSTOMER NAME</th>
            <th>REGION</th>
            <th>{toggleSelected.label}</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((invoice) => {
            const totalValue = invoice[toggleSelected.key as string];
            return (
              <tr key={invoice.id}>
                <td>#{invoice.id}</td>
                <td>{invoice.date}</td>
                <td>{invoice.customer_name}</td>
                <td>{invoice.region}</td>
                <td>${totalValue}</td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={5}>
              <div id="invoices-table-navigation">
                <nav aria-label="...">
                  <ul className="pagination pagination-sm">
                    {pages.map((page, index) => (
                      <li
                        key={index}
                        className={`page-item ${index === currentPage ? 'active' : ''}`}
                        onClick={() => setCurrentPage(index)}
                        aria-current="page">
                        <span className="page-link">{index + 1}</span>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
