import { render, screen } from '@testing-library/react';
import AppProvider from 'providers/app.provider';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

describe('Test App', () => {
  render(
    <BrowserRouter basename="/">
      <React.StrictMode>
        <AppProvider>
          <App />
        </AppProvider>
      </React.StrictMode>
    </BrowserRouter>
  );

  test('should render App, and present dashboard page title', () => {
    const linkElement = screen.getByText(/Welcome Back/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('should navigate to invoices page', () => {
    // renderHook(() => {
    //   const { push } = useHistory();
    //   push(AppPages.Invoices);
    // });
    // const elements = screen.getByText('Last Invoices');
    // console.log(elements);
    // fireEvent(
    //   screen.getByTestId('sidebar-menu-option'),
    //   new MouseEvent('click', {
    //     bubbles: true,
    //     cancelable: true
    //   })
    // );
  });
});
