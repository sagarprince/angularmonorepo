import { OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ConfirmationDialogConfig } from './confirmation-dialog.model';
export declare class ConfirmationDialogComponent implements OnInit {
    private ref;
    config: ConfirmationDialogConfig;
    constructor(ref: MatDialogRef<ConfirmationDialogComponent>, config: ConfirmationDialogConfig);
    /**
     * ngOnInit
     * @return void
     */
    ngOnInit(): void;
    /**
     * On Dialog Close
     * @param result
     * @return void
     */
    close(result?: boolean): void;
}
