// Core
import { Injectable } from '@angular/core';
import { ComponentType } from '@angular/cdk/portal';
import { MatDialog } from '@angular/material';

// Common
import { ConfirmationDialogService } from '@lms/common';

@Injectable({
    providedIn: 'root'
})
export class DialogService {

    constructor(
        private dialog: MatDialog,
        private confirmationDialogService: ConfirmationDialogService
    ) { }

    /**
     * Open Add Edit Form Dialog
     * @param component
     * @param mode 
     * @param entity 
     * @return void
     */
    public openAddEditFormDialog(component: ComponentType<any>, mode: string, entity?: any): void {
        const data: any = { mode: mode };
        if (entity) {
            data.entity = entity;
        }
        this.dialog.open(component, {
            disableClose: true,
            autoFocus: false,
            data: data
        });
    }

    /**
     * Open Delete Confirmation Dialog
     * @param callback 
     * @return void
     */
    public openDeleteConfirmationDialog(callback: Function): void {
        this.confirmationDialogService.open({
            type: 'warn',
            icon: 'remove_circle_outline',
            iconType: 'material',
            title: 'Are you sure?',
            message: 'Do you really want to delete these records? This process cannot be undone.',
            yesBtnText: 'Yes',
            noBtnText: 'No'
        }, (result) => {
            if (result && callback) {
                callback();
            }
        });
    }
}
