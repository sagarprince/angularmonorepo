// Core
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Auth Guards
import { AuthGuard, RegistrationGuard, VerifyOtpGuard } from '../shared/guards/auth.guard';

// Menu Routes
import { MENU_ROUTES } from './menu-routes';

// Components
import { LayoutComponent } from './layout/layout.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/auth/login',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () => import('../modules/authentication/authentication.module').then(m => m.AuthenticationModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('../modules/forgot-password/forgot-password.module').then(m => m.ForgotPasswordModule),
  },
  {
    path: 'registration',
    loadChildren: () => import('../modules/registration/registration.module').then(m => m.RegistrationModule),
    canLoad: [RegistrationGuard],
    canActivate: [RegistrationGuard]
  },
  {
    path: 'verify-otp',
    loadChildren: () => import('../modules/otp/otp.module').then(m => m.OtpModule),
    canLoad: [VerifyOtpGuard],
    canActivate: [VerifyOtpGuard]
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      ...MENU_ROUTES
    ]
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      useHash: true
    })
  ],
  exports: [RouterModule]
})
export class RootRoutingModule { }
