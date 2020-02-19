// Core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Routing Module
import { AuthenticationRoutingModule } from './authentication-routing.module';

// Modules
import { SharedModule } from '../../shared/shared.module';
import { FormFieldsModule } from '@lms/common';

// Components
import { LoginComponent } from './components/login/login.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    FormFieldsModule,
    AuthenticationRoutingModule,
  ],
  declarations: [LoginComponent],
  providers: []
})
export class AuthenticationModule {}
