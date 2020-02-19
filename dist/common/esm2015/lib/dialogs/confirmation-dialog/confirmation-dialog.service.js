/**
 * @fileoverview added by tsickle
 * Generated from: lib/dialogs/confirmation-dialog/confirmation-dialog.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Core
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
// Component
import { ConfirmationDialogComponent } from './confirmation-dialog.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
export class ConfirmationDialogService {
    /**
     * @param {?} dialog
     */
    constructor(dialog) {
        this.dialog = dialog;
    }
    /**
     * @param {?} data
     * @param {?} callback
     * @return {?}
     */
    open(data, callback) {
        /** @type {?} */
        const ref = this.dialog.open(ConfirmationDialogComponent, {
            data: data,
            autoFocus: false
        });
        ref.afterClosed().subscribe((/**
         * @param {?} result
         * @return {?}
         */
        result => {
            if (callback) {
                callback(result);
            }
        }));
    }
}
ConfirmationDialogService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
ConfirmationDialogService.ctorParameters = () => [
    { type: MatDialog }
];
/** @nocollapse */ ConfirmationDialogService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ConfirmationDialogService_Factory() { return new ConfirmationDialogService(i0.ɵɵinject(i1.MatDialog)); }, token: ConfirmationDialogService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    ConfirmationDialogService.prototype.dialog;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlybWF0aW9uLWRpYWxvZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY29tbW9uLyIsInNvdXJjZXMiOlsibGliL2RpYWxvZ3MvY29uZmlybWF0aW9uLWRpYWxvZy9jb25maXJtYXRpb24tZGlhbG9nLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7O0FBTTlDLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDOzs7QUFLOUUsTUFBTSxPQUFPLHlCQUF5Qjs7OztJQUNwQyxZQUNVLE1BQWlCO1FBQWpCLFdBQU0sR0FBTixNQUFNLENBQVc7SUFDdkIsQ0FBQzs7Ozs7O0lBRUUsSUFBSSxDQUFDLElBQThCLEVBQUUsUUFBa0I7O2NBQ3RELEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQywyQkFBMkIsRUFBRTtZQUN4RCxJQUFJLEVBQUUsSUFBSTtZQUNWLFNBQVMsRUFBRSxLQUFLO1NBQ2pCLENBQUM7UUFDRixHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsU0FBUzs7OztRQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ25DLElBQUksUUFBUSxFQUFFO2dCQUNaLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUNsQjtRQUNILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7O1lBbEJGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQVZRLFNBQVM7Ozs7Ozs7O0lBYWQsMkNBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29yZVxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0RGlhbG9nIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuXG4vLyBNb2RlbFxuaW1wb3J0IHsgQ29uZmlybWF0aW9uRGlhbG9nQ29uZmlnIH0gZnJvbSAnLi9jb25maXJtYXRpb24tZGlhbG9nLm1vZGVsJztcblxuLy8gQ29tcG9uZW50XG5pbXBvcnQgeyBDb25maXJtYXRpb25EaWFsb2dDb21wb25lbnQgfSBmcm9tICcuL2NvbmZpcm1hdGlvbi1kaWFsb2cuY29tcG9uZW50JztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQ29uZmlybWF0aW9uRGlhbG9nU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZGlhbG9nOiBNYXREaWFsb2dcbiAgKSB7IH1cblxuICBwdWJsaWMgb3BlbihkYXRhOiBDb25maXJtYXRpb25EaWFsb2dDb25maWcsIGNhbGxiYWNrOiBGdW5jdGlvbik6IHZvaWQge1xuICAgIGNvbnN0IHJlZiA9IHRoaXMuZGlhbG9nLm9wZW4oQ29uZmlybWF0aW9uRGlhbG9nQ29tcG9uZW50LCB7XG4gICAgICBkYXRhOiBkYXRhLFxuICAgICAgYXV0b0ZvY3VzOiBmYWxzZVxuICAgIH0pO1xuICAgIHJlZi5hZnRlckNsb3NlZCgpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xuICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgIGNhbGxiYWNrKHJlc3VsdCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==