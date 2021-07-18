export interface BestCustomerModel {
  customer_id: number;
  customer_name: string;
  total_revenue: number;
  total_margin: number;
  invoices_count: number;
  [x: string]: number | string;
}
