import { configureAxiosInstance } from 'config/axios.config';
import { CustomerModel } from 'models/customer.model';
import { InvoiceModel } from 'models/invoice.model';
import { ProductModel } from 'models/product.model';
import { RevenueModel } from 'models/revenue.model';

export default function useGeneralService() {
  const axiosInstance = configureAxiosInstance();

  function getProducts(productId?: number) {
    return axiosInstance.get<ProductModel[]>(`products/${productId}`);
  }

  function getCustomers(customerId?: number) {
    return axiosInstance.get<CustomerModel[]>(`customers/${customerId}`);
  }

  function getInvoices(invoiceId?: number) {
    return axiosInstance.get<InvoiceModel[]>(`invoices/${invoiceId}`);
  }

  function getRevenues(period: 'weekly' | 'monthly') {
    return axiosInstance.get<RevenueModel[]>(`revenues/${period}`);
  }

  return { getProducts, getCustomers, getInvoices, getRevenues };
}
