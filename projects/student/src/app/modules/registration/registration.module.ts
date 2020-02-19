// Core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Routing Module
import { RegistrationRoutingModule } from './registration-routing.module';

// Modules
import { SharedModule } from '../../shared/shared.module';
import { FormFieldsModule } from '@lms/common';

// Components
import { RegisterComponent } from './components/register/register.component';


@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FormFieldsModule,
    SharedModule,
    RegistrationRoutingModule,
  ]
})
export class RegistrationModule { }
