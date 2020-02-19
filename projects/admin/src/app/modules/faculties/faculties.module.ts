// Core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Routing Module
import { FacultiesRoutingModule } from './faculties-routing.module';

// Modules
import { MatProgressSpinnerModule, MatTableModule, MatPaginatorModule, MatDialogModule } from '@angular/material';
import { FormFieldsModule, ConfirmationDialogModule } from '@lms/common';
import { SharedModule } from '../../shared/shared.module';

// Shared Services
import { DialogService } from '../../shared/services/dialog.service';

import { FacultiesComponent } from './components/faculties/faculties.component';
import { FacultiesListingComponent } from './components/faculties-listing/faculties-listing.component';
import { AddEditFacultyComponent } from './components/add-edit-faculty/add-edit-faculty.component';
import { FacultiesFiltersComponent } from './components/faculties-filters/faculties-filters.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FacultiesRoutingModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    FormFieldsModule,
    ConfirmationDialogModule,
    SharedModule
  ],
  declarations: [
    FacultiesComponent,
    FacultiesListingComponent,
    AddEditFacultyComponent,
    FacultiesFiltersComponent
  ],
  entryComponents: [
    AddEditFacultyComponent
  ],
  providers: [
    DialogService
  ]
})
export class FacultiesModule { }
