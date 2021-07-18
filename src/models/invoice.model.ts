export interface InvoiceLineModel {
  product_id: number;
  product_name: string;
  unit_price: number;
  quantity: number;
  total_line: number;
  total_margin: number;
}

export interface InvoiceModel {
  id: number;
  customer_id: number;
  customer_name: string;
  date: Date;
  total_invoice: number;
  total_margin: number;
  region: string;
  invoice_lines: InvoiceLineModel[];
  [key: string]: number | string | Date | InvoiceLineModel[];
}
