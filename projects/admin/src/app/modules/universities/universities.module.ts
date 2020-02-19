// Core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Routing Module
import { UniversitiesRoutingModule } from './universities-routing.module';

// Modules
import { MatProgressSpinnerModule, MatTableModule, MatPaginatorModule, MatDialogModule } from '@angular/material';
import { FormFieldsModule, ConfirmationDialogModule } from '@lms/common';
import { SharedModule } from '../../shared/shared.module';

// Shared Services
import { DialogService } from '../../shared/services/dialog.service';

// Components
import { UniversitiesComponent } from './components/universities/universities.component';
import { UniversitiesListingComponent } from './components/universities-listing/universities-listing.component';
import { AddEditUniversityComponent } from './components/add-edit-university/add-edit-university.component';
import { UniversitiesFiltersComponent } from './components/universities-filters/universities-filters.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UniversitiesRoutingModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    FormFieldsModule,
    ConfirmationDialogModule,
    SharedModule
  ],
  declarations: [
    UniversitiesComponent,
    UniversitiesListingComponent,
    AddEditUniversityComponent,
    UniversitiesFiltersComponent
  ],
  entryComponents: [
    AddEditUniversityComponent
  ],
  providers: [
    DialogService
  ]
})
export class UniversitiesModule { }
