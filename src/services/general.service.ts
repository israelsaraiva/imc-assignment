import { configureAxiosInstance } from 'config/axios.config';
import { BestCustomerModel } from 'models/best-customer.model';
import { BestProductsCategoriesModel } from 'models/best-products-categories.model';
import { CustomerModel } from 'models/customer.model';
import { InvoiceModel } from 'models/invoice.model';
import { ProductModel } from 'models/product.model';
import { RevenueModel } from 'models/revenue.model';

export default function useGeneralService() {
  const axiosInstance = configureAxiosInstance();

  function getProducts(productId: number | string = '') {
    return axiosInstance.get<ProductModel[]>(`products/${productId}`);
  }

  function getCustomers(customerId: number | string = '') {
    return axiosInstance.get<CustomerModel[]>(`customers/${customerId}`);
  }

  function getInvoices(invoiceId: number | string = '') {
    return axiosInstance.get<InvoiceModel[]>(`invoices/${invoiceId}`);
  }

  function getRevenues(period: string) {
    return axiosInstance.get<RevenueModel[]>(`revenues/${period}`);
  }

  function getBestProductsCategories() {
    return axiosInstance.get<BestProductsCategoriesModel[]>('categories/revenues');
  }

  function getBestCustomersRevenues() {
    return axiosInstance.get<BestCustomerModel[]>('customers/revenues');
  }

  return {
    getProducts,
    getCustomers,
    getInvoices,
    getRevenues,
    getBestProductsCategories,
    getBestCustomersRevenues
  };
}
