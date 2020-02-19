import { MatDialog } from '@angular/material';
import { ConfirmationDialogConfig } from './confirmation-dialog.model';
export declare class ConfirmationDialogService {
    private dialog;
    constructor(dialog: MatDialog);
    open(data: ConfirmationDialogConfig, callback: Function): void;
}
