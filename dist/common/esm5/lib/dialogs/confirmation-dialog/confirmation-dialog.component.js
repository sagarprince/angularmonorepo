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
var ConfirmationDialogComponent = /** @class */ (function () {
    function ConfirmationDialogComponent(ref, config) {
        this.ref = ref;
        this.config = config;
    }
    /**
     * ngOnInit
     * @return void
     */
    /**
     * ngOnInit
     * @return {?} void
     */
    ConfirmationDialogComponent.prototype.ngOnInit = /**
     * ngOnInit
     * @return {?} void
     */
    function () { };
    /**
     * On Dialog Close
     * @param result
     * @return void
     */
    /**
     * On Dialog Close
     * @param {?=} result
     * @return {?} void
     */
    ConfirmationDialogComponent.prototype.close = /**
     * On Dialog Close
     * @param {?=} result
     * @return {?} void
     */
    function (result) {
        if (result === void 0) { result = false; }
        this.ref.close(result);
    };
    ConfirmationDialogComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-confirmation-dialog',
                    template: "<div class=\"confirmation-dialog \">\n    <div class=\"confirmation-dialog__icon confirmation-dialog__icon--{{config.type}}\">\n        <ng-container *ngIf=\"config.iconType == 'fa'; else materialIcon\">\n            <mat-icon [fontSet]=\"config.iconType\" [fontIcon]=\"config.icon\"></mat-icon>\n        </ng-container>\n        <ng-template #materialIcon>\n            <mat-icon>{{config.icon}}</mat-icon>\n        </ng-template>\n    </div>\n    <div class=\"row mt-4 confirmation-dialog__title\">\n        <h2 class=\"col-12\">{{config.title}}</h2>\n    </div>\n    <div class=\"row mt-2 confirmation-dialog__message\">\n        <p class=\"col-12\">{{config.message}}</p>\n    </div>\n    <div class=\"row mt-4\">\n        <div class=\"col-6 offset-sm-2 col-sm-4\">\n            <button type=\"button\" mat-raised-button [color]=\"config.type\" (click)=\"close(true)\" tabindex=\"1\">\n                {{config.yesBtnText}}\n            </button>\n        </div>\n        <div class=\"col-6 col-sm-4\">\n            <button type=\"button\" mat-stroked-button (click)=\"close(false)\" tabindex=\"2\">\n                {{config.noBtnText}}\n            </button>\n        </div>\n    </div>\n</div>",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [".confirmation-dialog{width:370px;padding:10px 0;text-align:center}@media (max-width:576px){.confirmation-dialog{width:auto}}.confirmation-dialog__icon--warn{color:#f44336}.confirmation-dialog__icon .mat-icon{font-size:60px;width:60px;height:60px}.confirmation-dialog__title h2{font-size:2.1rem}.confirmation-dialog__message p{font-size:1.08rem}"]
                }] }
    ];
    /** @nocollapse */
    ConfirmationDialogComponent.ctorParameters = function () { return [
        { type: MatDialogRef },
        { type: ConfirmationDialogConfig, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
    ]; };
    return ConfirmationDialogComponent;
}());
export { ConfirmationDialogComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ConfirmationDialogComponent.prototype.ref;
    /** @type {?} */
    ConfirmationDialogComponent.prototype.config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlybWF0aW9uLWRpYWxvZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jb21tb24vIiwic291cmNlcyI6WyJsaWIvZGlhbG9ncy9jb25maXJtYXRpb24tZGlhbG9nL2NvbmZpcm1hdGlvbi1kaWFsb2cuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxFQUFFLHVCQUF1QixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25GLE9BQU8sRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7O0FBR3pFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRXZFO0lBT0UscUNBQ1UsR0FBOEMsRUFDdEIsTUFBZ0M7UUFEeEQsUUFBRyxHQUFILEdBQUcsQ0FBMkM7UUFDdEIsV0FBTSxHQUFOLE1BQU0sQ0FBMEI7SUFDOUQsQ0FBQztJQUVMOzs7T0FHRzs7Ozs7SUFDSSw4Q0FBUTs7OztJQUFmLGNBQTBCLENBQUM7SUFFM0I7Ozs7T0FJRzs7Ozs7O0lBQ0ksMkNBQUs7Ozs7O0lBQVosVUFBYSxNQUF1QjtRQUF2Qix1QkFBQSxFQUFBLGNBQXVCO1FBQ2xDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3pCLENBQUM7O2dCQXpCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtvQkFDbkMsNHJDQUFtRDtvQkFFbkQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O2lCQUNoRDs7OztnQkFWUSxZQUFZO2dCQUdaLHdCQUF3Qix1QkFXNUIsTUFBTSxTQUFDLGVBQWU7O0lBa0IzQixrQ0FBQztDQUFBLEFBM0JELElBMkJDO1NBckJZLDJCQUEyQjs7Ozs7O0lBRXBDLDBDQUFzRDs7SUFDdEQsNkNBQWdFIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29yZVxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEluamVjdCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdERpYWxvZ1JlZiwgTUFUX0RJQUxPR19EQVRBIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcblxuLy8gTW9kZWxzXG5pbXBvcnQgeyBDb25maXJtYXRpb25EaWFsb2dDb25maWcgfSBmcm9tICcuL2NvbmZpcm1hdGlvbi1kaWFsb2cubW9kZWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtY29uZmlybWF0aW9uLWRpYWxvZycsXG4gIHRlbXBsYXRlVXJsOiAnLi9jb25maXJtYXRpb24tZGlhbG9nLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY29uZmlybWF0aW9uLWRpYWxvZy5jb21wb25lbnQuc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBDb25maXJtYXRpb25EaWFsb2dDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJlZjogTWF0RGlhbG9nUmVmPENvbmZpcm1hdGlvbkRpYWxvZ0NvbXBvbmVudD4sXG4gICAgQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHB1YmxpYyBjb25maWc6IENvbmZpcm1hdGlvbkRpYWxvZ0NvbmZpZ1xuICApIHsgfVxuXG4gIC8qKlxuICAgKiBuZ09uSW5pdFxuICAgKiBAcmV0dXJuIHZvaWRcbiAgICovXG4gIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHsgfVxuXG4gIC8qKlxuICAgKiBPbiBEaWFsb2cgQ2xvc2VcbiAgICogQHBhcmFtIHJlc3VsdFxuICAgKiBAcmV0dXJuIHZvaWRcbiAgICovXG4gIHB1YmxpYyBjbG9zZShyZXN1bHQ6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xuICAgIHRoaXMucmVmLmNsb3NlKHJlc3VsdCk7XG4gIH1cblxufVxuIl19