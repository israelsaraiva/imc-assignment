export interface RevenueModel {
  week: string;
  month: string;
  start_date: Date;
  end_date: Date;
  invoices_count: number;
  total_margin: number;
  total_revenue: number;
  [x: string]: number | string | Date;
}
