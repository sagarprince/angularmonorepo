// Core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Routing Module
import { ForgotPasswordRoutingModule } from './forgot-password-routing.module';

// Modules
import { SharedModule } from '../../shared/shared.module';
import { FormFieldsModule } from '@lms/common';

// Components
import { ProvideEmailComponent } from './components/provide-email/provide-email.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    FormFieldsModule,
    ForgotPasswordRoutingModule
  ],
  declarations: [
    ProvideEmailComponent,
    ResetPasswordComponent
  ],
  providers: []
})
export class ForgotPasswordModule { }
