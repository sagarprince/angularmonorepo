// Core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// UI Material Modules
import { MatDialogModule, MatIconModule, MatButtonModule } from '@angular/material';

// Services
import { ConfirmationDialogService } from '../confirmation-dialog/confirmation-dialog.service';

// Components
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule
  ],
  declarations: [
    ConfirmationDialogComponent
  ],
  exports: [],
  entryComponents: [
    ConfirmationDialogComponent
  ],
  providers: [
    ConfirmationDialogService
  ]
})
export class ConfirmationDialogModule { }
