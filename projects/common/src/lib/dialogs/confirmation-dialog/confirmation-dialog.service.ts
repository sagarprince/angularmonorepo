// Core
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';

// Model
import { ConfirmationDialogConfig } from './confirmation-dialog.model';

// Component
import { ConfirmationDialogComponent } from './confirmation-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class ConfirmationDialogService {
  constructor(
    private dialog: MatDialog
  ) { }

  public open(data: ConfirmationDialogConfig, callback: Function): void {
    const ref = this.dialog.open(ConfirmationDialogComponent, {
      data: data,
      autoFocus: false
    });
    ref.afterClosed().subscribe(result => {
      if (callback) {
        callback(result);
      }
    });
  }
}
