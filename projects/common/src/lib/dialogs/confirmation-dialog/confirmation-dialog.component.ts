// Core
import { Component, OnInit, Inject, ChangeDetectionStrategy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

// Models
import { ConfirmationDialogConfig } from './confirmation-dialog.model';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConfirmationDialogComponent implements OnInit {
  constructor(
    private ref: MatDialogRef<ConfirmationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public config: ConfirmationDialogConfig
  ) { }

  /**
   * ngOnInit
   * @return void
   */
  public ngOnInit(): void { }

  /**
   * On Dialog Close
   * @param result
   * @return void
   */
  public close(result: boolean = false): void {
    this.ref.close(result);
  }

}
