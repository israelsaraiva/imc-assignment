import CustomersPage from 'pages/customers/customers.page';
import DashboardPage from 'pages/dashboard/dashboard.page';
import InvoicesPage from 'pages/invoices/invoices.page';
import AppPages from 'pages/pages.enum';
import { configRoutes, RouteConfig } from 'util/config.routes';

const routes: RouteConfig[] = [
  { path: AppPages.Dashboard, component: DashboardPage },
  { path: AppPages.Invoices, component: InvoicesPage },
  { path: AppPages.Customers, component: CustomersPage },
];

const AppRoutes = () => configRoutes(routes, false);

export default AppRoutes;
