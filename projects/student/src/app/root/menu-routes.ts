// Guards
import { AuthGuard } from '../shared/guards/auth.guard';
import { RoleGuard } from '../shared/guards/role.guard';

export const MENU_ROUTES = [
    {
        title: 'Dashboard',
        iconType: 'material-icons',
        icon: 'dashboard',
        path: 'dashboard',
        loadChildren: () => import('../modules/dashboard/dashboard.module').then(m => m.DashboardModule),
        canLoad: [AuthGuard],
        canActivate: [AuthGuard, RoleGuard],
        isSideMenu: true
    }
];