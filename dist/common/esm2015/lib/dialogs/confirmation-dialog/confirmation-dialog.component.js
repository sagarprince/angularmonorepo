/**
 * @fileoverview added by tsickle
 * Generated from: lib/dialogs/confirmation-dialog/confirmation-dialog.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Core
import { Component, Inject, ChangeDetectionStrategy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
// Models
import { ConfirmationDialogConfig } from './confirmation-dialog.model';
export class ConfirmationDialogComponent {
    /**
     * @param {?} ref
     * @param {?} config
     */
    constructor(ref, config) {
        this.ref = ref;
        this.config = config;
    }
    /**
     * ngOnInit
     * @return {?} void
     */
    ngOnInit() { }
    /**
     * On Dialog Close
     * @param {?=} result
     * @return {?} void
     */
    close(result = false) {
        this.ref.close(result);
    }
}
ConfirmationDialogComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-confirmation-dialog',
                template: "<div class=\"confirmation-dialog \">\n    <div class=\"confirmation-dialog__icon confirmation-dialog__icon--{{config.type}}\">\n        <ng-container *ngIf=\"config.iconType == 'fa'; else materialIcon\">\n            <mat-icon [fontSet]=\"config.iconType\" [fontIcon]=\"config.icon\"></mat-icon>\n        </ng-container>\n        <ng-template #materialIcon>\n            <mat-icon>{{config.icon}}</mat-icon>\n        </ng-template>\n    </div>\n    <div class=\"row mt-4 confirmation-dialog__title\">\n        <h2 class=\"col-12\">{{config.title}}</h2>\n    </div>\n    <div class=\"row mt-2 confirmation-dialog__message\">\n        <p class=\"col-12\">{{config.message}}</p>\n    </div>\n    <div class=\"row mt-4\">\n        <div class=\"col-6 offset-sm-2 col-sm-4\">\n            <button type=\"button\" mat-raised-button [color]=\"config.type\" (click)=\"close(true)\" tabindex=\"1\">\n                {{config.yesBtnText}}\n            </button>\n        </div>\n        <div class=\"col-6 col-sm-4\">\n            <button type=\"button\" mat-stroked-button (click)=\"close(false)\" tabindex=\"2\">\n                {{config.noBtnText}}\n            </button>\n        </div>\n    </div>\n</div>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".confirmation-dialog{width:370px;padding:10px 0;text-align:center}@media (max-width:576px){.confirmation-dialog{width:auto}}.confirmation-dialog__icon--warn{color:#f44336}.confirmation-dialog__icon .mat-icon{font-size:60px;width:60px;height:60px}.confirmation-dialog__title h2{font-size:2.1rem}.confirmation-dialog__message p{font-size:1.08rem}"]
            }] }
];
/** @nocollapse */
ConfirmationDialogComponent.ctorParameters = () => [
    { type: MatDialogRef },
    { type: ConfirmationDialogConfig, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    ConfirmationDialogComponent.prototype.ref;
    /** @type {?} */
    ConfirmationDialogComponent.prototype.config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlybWF0aW9uLWRpYWxvZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jb21tb24vIiwic291cmNlcyI6WyJsaWIvZGlhbG9ncy9jb25maXJtYXRpb24tZGlhbG9nL2NvbmZpcm1hdGlvbi1kaWFsb2cuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxFQUFFLHVCQUF1QixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25GLE9BQU8sRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7O0FBR3pFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBUXZFLE1BQU0sT0FBTywyQkFBMkI7Ozs7O0lBQ3RDLFlBQ1UsR0FBOEMsRUFDdEIsTUFBZ0M7UUFEeEQsUUFBRyxHQUFILEdBQUcsQ0FBMkM7UUFDdEIsV0FBTSxHQUFOLE1BQU0sQ0FBMEI7SUFDOUQsQ0FBQzs7Ozs7SUFNRSxRQUFRLEtBQVcsQ0FBQzs7Ozs7O0lBT3BCLEtBQUssQ0FBQyxTQUFrQixLQUFLO1FBQ2xDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3pCLENBQUM7OztZQXpCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtnQkFDbkMsNHJDQUFtRDtnQkFFbkQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O2FBQ2hEOzs7O1lBVlEsWUFBWTtZQUdaLHdCQUF3Qix1QkFXNUIsTUFBTSxTQUFDLGVBQWU7Ozs7Ozs7SUFEdkIsMENBQXNEOztJQUN0RCw2Q0FBZ0UiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3JlXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5qZWN0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0RGlhbG9nUmVmLCBNQVRfRElBTE9HX0RBVEEgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xuXG4vLyBNb2RlbHNcbmltcG9ydCB7IENvbmZpcm1hdGlvbkRpYWxvZ0NvbmZpZyB9IGZyb20gJy4vY29uZmlybWF0aW9uLWRpYWxvZy5tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1jb25maXJtYXRpb24tZGlhbG9nJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbmZpcm1hdGlvbi1kaWFsb2cuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jb25maXJtYXRpb24tZGlhbG9nLmNvbXBvbmVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIENvbmZpcm1hdGlvbkRpYWxvZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVmOiBNYXREaWFsb2dSZWY8Q29uZmlybWF0aW9uRGlhbG9nQ29tcG9uZW50PixcbiAgICBASW5qZWN0KE1BVF9ESUFMT0dfREFUQSkgcHVibGljIGNvbmZpZzogQ29uZmlybWF0aW9uRGlhbG9nQ29uZmlnXG4gICkgeyB9XG5cbiAgLyoqXG4gICAqIG5nT25Jbml0XG4gICAqIEByZXR1cm4gdm9pZFxuICAgKi9cbiAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQgeyB9XG5cbiAgLyoqXG4gICAqIE9uIERpYWxvZyBDbG9zZVxuICAgKiBAcGFyYW0gcmVzdWx0XG4gICAqIEByZXR1cm4gdm9pZFxuICAgKi9cbiAgcHVibGljIGNsb3NlKHJlc3VsdDogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCB7XG4gICAgdGhpcy5yZWYuY2xvc2UocmVzdWx0KTtcbiAgfVxuXG59XG4iXX0=