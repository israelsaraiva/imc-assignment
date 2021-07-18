import './data-table.scss';

import { InvoiceModel } from 'models/invoice.model';
import React, { useEffect, useMemo, useState } from 'react';
import Spinner from 'shared/spinner/spinner';

export interface DataTableStructure {
  header: string;
  valueKey?: string;
  beforeValue?: string;
  valueFunction?: (item: any) => string;
}

type DataTableProps = {
  data: any;
  structure: DataTableStructure[];
  loading?: boolean;
};

export default function DataTable({ data, structure, loading }: DataTableProps) {
  const pageSize = 15;

  const [filteredData, setFilteredData] = useState<InvoiceModel[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [pagesAmount, setPagesAmount] = useState(0);

  useEffect(() => {
    setPagesAmount(Math.ceil(data.length / pageSize));
    setFilteredData(data.slice(currentPage * pageSize, (currentPage + 1) * pageSize));
  }, [data, currentPage]);

  const pages = useMemo(() => new Array(pagesAmount).fill(''), [pagesAmount]);

  return (
    <div className="data-table">
      <Spinner active={!!loading} />

      <table>
        <thead>
          <tr>
            {structure.map((column, index) => (
              <th key={index}>{column.header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item, index) => {
            return (
              <tr key={index}>
                {structure.map((column, index) => {
                  if (column?.valueFunction) {
                    const value = `${column.beforeValue} ${column.valueFunction(item)}`;
                    return <td key={index}>{value}</td>;
                  }

                  if (column?.valueKey) {
                    const value = `${column.beforeValue ?? ''} ${item[column.valueKey]}`;
                    return <td key={index}>{value}</td>;
                  }

                  return <td key={index}></td>;
                })}
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
