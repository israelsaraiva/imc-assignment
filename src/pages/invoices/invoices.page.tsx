import './invoices.page.scss';

import React from 'react';

export default function InvoicesPage() {
  return (
    <div className="invoices-page">
      <div className="invoices-page-title">Last Invoices</div>

      <table id="invoices-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>DATE</th>
            <th>CUSTOMER NAME</th>
            <th>REGION</th>
            <th>INVOICE TOTAL</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#01</td>
            <td>2020-11-25</td>
            <td>Carla Doe</td>
            <td>Brazil</td>
            <td>$8654.55</td>
          </tr>
          <tr>
            <td>#01</td>
            <td>2020-11-25</td>
            <td>Carla Doe</td>
            <td>Brazil</td>
            <td>$8654.55</td>
          </tr>
          <tr>
            <td>#01</td>
            <td>2020-11-25</td>
            <td>Carla Doe</td>
            <td>Brazil</td>
            <td>$8654.55</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
