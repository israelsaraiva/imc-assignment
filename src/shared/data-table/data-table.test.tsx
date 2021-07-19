import { render, screen } from '@testing-library/react';
import React from 'react';

import DataTable, { DataTableStructure } from './data-table';

describe('Test Data Table component', () => {
  test('should present loading spinner', () => {
    render(<DataTable data={[]} structure={[]} loading={true} />);
    const linkElement = screen.getByText(/Loading.../i);
    expect(linkElement).toBeInTheDocument();
  });

  test('should place the correct structure for the table', async () => {
    const structure: DataTableStructure[] = [{ header: 'header one' }, { header: 'header two' }];
    render(<DataTable data={[]} structure={structure} loading={true} />);
    const headersAmount = await screen.findAllByTestId('header-element');
    expect(headersAmount).toHaveLength(structure.length);
  });

  test('should have the correct number of pages', () => {});

  test('should have the correct number of elements in a page', () => {});
});
