// Core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Routing Module
import { ProfileRoutingModule } from './profie-routing.module';

// Modules
import { FormFieldsModule } from '@lms/common';

// Components
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ProfileRoutingModule,
    FormFieldsModule
  ],
  declarations: [
    EditProfileComponent,
    ChangePasswordComponent
  ],
  entryComponents: [],
  providers: []
})
export class ProfileModule { }
