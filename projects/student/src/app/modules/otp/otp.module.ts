// Core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Routing Module
import { OtpRoutingModule } from './otp-routing.module';

// Modules
import { SharedModule } from '../../shared/shared.module';
import { FormFieldsModule } from '@lms/common';

// Components
import { OtpComponent } from './components/otp/otp.component';
import { VerifyOtpFormComponent } from './components/verify-otp-form/verify-otp-form.component';

@NgModule({
  declarations: [OtpComponent, VerifyOtpFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FormFieldsModule,
    SharedModule,
    OtpRoutingModule
  ]
})
export class OtpModule { }
