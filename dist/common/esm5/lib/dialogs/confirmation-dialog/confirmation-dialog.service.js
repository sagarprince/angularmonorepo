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
var ConfirmationDialogService = /** @class */ (function () {
    function ConfirmationDialogService(dialog) {
        this.dialog = dialog;
    }
    /**
     * @param {?} data
     * @param {?} callback
     * @return {?}
     */
    ConfirmationDialogService.prototype.open = /**
     * @param {?} data
     * @param {?} callback
     * @return {?}
     */
    function (data, callback) {
        /** @type {?} */
        var ref = this.dialog.open(ConfirmationDialogComponent, {
            data: data,
            autoFocus: false
        });
        ref.afterClosed().subscribe((/**
         * @param {?} result
         * @return {?}
         */
        function (result) {
            if (callback) {
                callback(result);
            }
        }));
    };
    ConfirmationDialogService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    ConfirmationDialogService.ctorParameters = function () { return [
        { type: MatDialog }
    ]; };
    /** @nocollapse */ ConfirmationDialogService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ConfirmationDialogService_Factory() { return new ConfirmationDialogService(i0.ɵɵinject(i1.MatDialog)); }, token: ConfirmationDialogService, providedIn: "root" });
    return ConfirmationDialogService;
}());
export { ConfirmationDialogService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ConfirmationDialogService.prototype.dialog;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlybWF0aW9uLWRpYWxvZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY29tbW9uLyIsInNvdXJjZXMiOlsibGliL2RpYWxvZ3MvY29uZmlybWF0aW9uLWRpYWxvZy9jb25maXJtYXRpb24tZGlhbG9nLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7O0FBTTlDLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDOzs7QUFFOUU7SUFJRSxtQ0FDVSxNQUFpQjtRQUFqQixXQUFNLEdBQU4sTUFBTSxDQUFXO0lBQ3ZCLENBQUM7Ozs7OztJQUVFLHdDQUFJOzs7OztJQUFYLFVBQVksSUFBOEIsRUFBRSxRQUFrQjs7WUFDdEQsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLDJCQUEyQixFQUFFO1lBQ3hELElBQUksRUFBRSxJQUFJO1lBQ1YsU0FBUyxFQUFFLEtBQUs7U0FDakIsQ0FBQztRQUNGLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQSxNQUFNO1lBQ2hDLElBQUksUUFBUSxFQUFFO2dCQUNaLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUNsQjtRQUNILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Z0JBbEJGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBVlEsU0FBUzs7O29DQUZsQjtDQTZCQyxBQW5CRCxJQW1CQztTQWhCWSx5QkFBeUI7Ozs7OztJQUVsQywyQ0FBeUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3JlXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXREaWFsb2cgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5cbi8vIE1vZGVsXG5pbXBvcnQgeyBDb25maXJtYXRpb25EaWFsb2dDb25maWcgfSBmcm9tICcuL2NvbmZpcm1hdGlvbi1kaWFsb2cubW9kZWwnO1xuXG4vLyBDb21wb25lbnRcbmltcG9ydCB7IENvbmZpcm1hdGlvbkRpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4vY29uZmlybWF0aW9uLWRpYWxvZy5jb21wb25lbnQnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBDb25maXJtYXRpb25EaWFsb2dTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBkaWFsb2c6IE1hdERpYWxvZ1xuICApIHsgfVxuXG4gIHB1YmxpYyBvcGVuKGRhdGE6IENvbmZpcm1hdGlvbkRpYWxvZ0NvbmZpZywgY2FsbGJhY2s6IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgY29uc3QgcmVmID0gdGhpcy5kaWFsb2cub3BlbihDb25maXJtYXRpb25EaWFsb2dDb21wb25lbnQsIHtcbiAgICAgIGRhdGE6IGRhdGEsXG4gICAgICBhdXRvRm9jdXM6IGZhbHNlXG4gICAgfSk7XG4gICAgcmVmLmFmdGVyQ2xvc2VkKCkuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XG4gICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgY2FsbGJhY2socmVzdWx0KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIl19