// Core
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Guards
import { ForgotPasswordGuard } from '../../shared/guards/forgot-password.guard';

// Components
import { ProvideEmailComponent } from './components/provide-email/provide-email.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'email',
        pathMatch: 'full'
    },
    {
        path: 'email',
        component: ProvideEmailComponent
    },
    {
        path: 'reset-password',
        component: ResetPasswordComponent,
        canActivate: [ForgotPasswordGuard]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ForgotPasswordRoutingModule { }