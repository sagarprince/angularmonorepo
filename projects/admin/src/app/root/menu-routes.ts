// Guards
import { AuthGuard } from '../shared/guards/auth.guard';
import { RoleGuard } from '../shared/guards/role.guard';

export const MENU_ROUTES = [
    {
        title: 'Profile',
        iconType: '',
        icon: '',
        path: 'profile',
        loadChildren: () => import('../modules/profile/profile.module').then(m => m.ProfileModule),
        canLoad: [AuthGuard],
        canActivate: [AuthGuard, RoleGuard],
        data: {
            roles: ['superadmin', 'admin']
        },
        isSideMenu: false
    },
    {
        title: 'Dashboard',
        iconType: 'material-icons',
        icon: 'dashboard',
        path: 'dashboard',
        loadChildren: () => import('../modules/dashboard/dashboard.module').then(m => m.DashboardModule),
        canLoad: [AuthGuard],
        canActivate: [AuthGuard, RoleGuard],
        data: {
            roles: ['superadmin', 'admin']
        },
        isSideMenu: true
    },
    {
        title: 'Tutors',
        iconType: 'material-icons',
        icon: 'supervised_user_circle',
        path: 'tutors',
        loadChildren: () => import('../modules/tutors/tutors.module').then(m => m.TutorsModule),
        canLoad: [AuthGuard],
        canActivate: [AuthGuard, RoleGuard],
        data: {
            roles: ['superadmin', 'admin']
        },
        isSideMenu: true
    },
    {
        title: 'RC',
        iconType: 'material-icons',
        icon: 'school',
        path: 'rc',
        loadChildren: () => import('../modules/schools/schools.module').then(m => m.SchoolsModule),
        canLoad: [AuthGuard],
        canActivate: [AuthGuard, RoleGuard],
        data: {
            roles: ['superadmin', 'admin']
        },
        isSideMenu: true
    },
    {
        title: 'Students',
        iconType: 'material-icons',
        icon: 'people_alt',
        path: 'students',
        loadChildren: () => import('../modules/students/students.module').then(m => m.StudentsModule),
        canLoad: [AuthGuard],
        canActivate: [AuthGuard, RoleGuard],
        data: {
            roles: ['superadmin', 'admin']
        },
        isSideMenu: true
    },
    {
        title: 'Universities',
        iconType: 'material-icons',
        icon: 'school',
        path: 'universities',
        loadChildren: () => import('../modules/universities/universities.module').then(m => m.UniversitiesModule),
        canLoad: [AuthGuard],
        canActivate: [AuthGuard, RoleGuard],
        data: {
            roles: ['superadmin', 'admin']
        },
        isSideMenu: true
    },
    {
        title: 'Faculties',
        iconType: 'material-icons',
        icon: 'apartment',
        path: 'faculties',
        loadChildren: () => import('../modules/faculties/faculties.module').then(m => m.FacultiesModule),
        canLoad: [AuthGuard],
        canActivate: [AuthGuard, RoleGuard],
        data: {
            roles: ['superadmin', 'admin']
        },
        isSideMenu: true
    }
];