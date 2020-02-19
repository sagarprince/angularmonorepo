/**
 * @fileoverview added by tsickle
 * Generated from: lib/form-fields/button/button.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
var ButtonComponent = /** @class */ (function () {
    function ButtonComponent() {
        this.variant = 'raised'; // raised | stroked | icon | icon-non-fab
        // raised | stroked | icon | icon-non-fab
        this.type = 'submit'; // submit | button
        // submit | button
        this.name = '';
        this.iconType = 'fa'; // fa | material
        // fa | material
        this.icon = '';
        this.disabled = false;
        this.isLoading = false;
        this.color = 'primary';
        this.onClick = new EventEmitter();
    }
    /**
     * ngOnInit
     * @return void
     */
    /**
     * ngOnInit
     * @return {?} void
     */
    ButtonComponent.prototype.ngOnInit = /**
     * ngOnInit
     * @return {?} void
     */
    function () { };
    /**
     * OnClick
     * @return void
     */
    /**
     * OnClick
     * @return {?} void
     */
    ButtonComponent.prototype._onClick = /**
     * OnClick
     * @return {?} void
     */
    function () {
        this.onClick.emit();
    };
    ButtonComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-button',
                    template: "<ng-container [ngSwitch]=\"variant\">\n    <ng-container *ngSwitchCase=\"'raised'\">\n        <button [type]=\"type\" mat-raised-button [color]=\"color\" [disabled]=\"disabled\" (click)=\"_onClick()\">\n            <ng-container *ngIf=\"isLoading\">\n                <mat-icon class=\"spinner\">\n                    <mat-spinner [color]=\"color\" diameter=\"22\">\n                    </mat-spinner>\n                </mat-icon>\n            </ng-container>\n            <ng-container *ngIf=\"!isLoading && icon != '' && iconType == 'fa'\">\n                <mat-icon [fontSet]=\"iconType\" [fontIcon]=\"icon\"></mat-icon>\n            </ng-container>\n            <ng-container *ngIf=\"!isLoading && icon != '' && iconType == 'material'\">\n                <mat-icon>{{icon}}</mat-icon>\n            </ng-container>\n            {{name}}\n        </button>\n    </ng-container>\n    <ng-container *ngSwitchCase=\"'stroked'\">\n        <button [type]=\"type\" mat-stroked-button [disabled]=\"disabled\" (click)=\"_onClick()\">\n            <ng-container *ngIf=\"isLoading\">\n                <mat-icon class=\"spinner\">\n                    <mat-spinner [color]=\"color\" diameter=\"22\">\n                    </mat-spinner>\n                </mat-icon>\n            </ng-container>\n            <ng-container *ngIf=\"!isLoading && icon != '' && iconType == 'fa'\">\n                <mat-icon [fontSet]=\"iconType\" [fontIcon]=\"icon\"></mat-icon>\n            </ng-container>\n            <ng-container *ngIf=\"!isLoading && icon != '' && iconType == 'material'\">\n                <mat-icon>{{icon}}</mat-icon>\n            </ng-container>\n            {{name}}\n        </button>\n    </ng-container>\n    <ng-container *ngSwitchCase=\"'icon'\">\n        <button [type]=\"type\" mat-icon-button mat-mini-fab [color]=\"color\" [disabled]=\"disabled\" (click)=\"_onClick()\">\n            <ng-container *ngIf=\"iconType == 'fa'; else materialIcon\">\n                <mat-icon [fontSet]=\"iconType\" [fontIcon]=\"icon\"></mat-icon>\n            </ng-container>\n            <ng-template #materialIcon>\n                <mat-icon>{{icon}}</mat-icon>\n            </ng-template>\n        </button>\n    </ng-container>\n    <ng-container *ngSwitchCase=\"'icon-non-fab'\">\n        <button [type]=\"type\" mat-icon-button [color]=\"color\" [disabled]=\"disabled\" (click)=\"_onClick()\">\n            <ng-container *ngIf=\"iconType == 'fa'; else materialIcon\">\n                <mat-icon [fontSet]=\"iconType\" [fontIcon]=\"icon\"></mat-icon>\n            </ng-container>\n            <ng-template #materialIcon>\n                <mat-icon>{{icon}}</mat-icon>\n            </ng-template>\n        </button>\n    </ng-container>\n</ng-container>",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    ButtonComponent.ctorParameters = function () { return []; };
    ButtonComponent.propDecorators = {
        variant: [{ type: Input }],
        type: [{ type: Input }],
        name: [{ type: Input }],
        iconType: [{ type: Input }],
        icon: [{ type: Input }],
        disabled: [{ type: Input }],
        isLoading: [{ type: Input }],
        color: [{ type: Input }],
        onClick: [{ type: Output }]
    };
    return ButtonComponent;
}());
export { ButtonComponent };
if (false) {
    /** @type {?} */
    ButtonComponent.prototype.variant;
    /** @type {?} */
    ButtonComponent.prototype.type;
    /** @type {?} */
    ButtonComponent.prototype.name;
    /** @type {?} */
    ButtonComponent.prototype.iconType;
    /** @type {?} */
    ButtonComponent.prototype.icon;
    /** @type {?} */
    ButtonComponent.prototype.disabled;
    /** @type {?} */
    ButtonComponent.prototype.isLoading;
    /** @type {?} */
    ButtonComponent.prototype.color;
    /** @type {?} */
    ButtonComponent.prototype.onClick;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NvbW1vbi8iLCJzb3VyY2VzIjpbImxpYi9mb3JtLWZpZWxkcy9idXR0b24vYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFeEc7SUFpQkU7UUFWUyxZQUFPLEdBQVcsUUFBUSxDQUFDLENBQUMseUNBQXlDOztRQUNyRSxTQUFJLEdBQVcsUUFBUSxDQUFBLENBQUMsa0JBQWtCOztRQUMxQyxTQUFJLEdBQVcsRUFBRSxDQUFDO1FBQ2xCLGFBQVEsR0FBVyxJQUFJLENBQUMsQ0FBQyxnQkFBZ0I7O1FBQ3pDLFNBQUksR0FBVyxFQUFFLENBQUM7UUFDbEIsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUMxQixjQUFTLEdBQVksS0FBSyxDQUFDO1FBQzNCLFVBQUssR0FBVyxTQUFTLENBQUM7UUFDekIsWUFBTyxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO0lBRS9DLENBQUM7SUFFakI7OztPQUdHOzs7OztJQUNJLGtDQUFROzs7O0lBQWYsY0FBMEIsQ0FBQztJQUUzQjs7O09BR0c7Ozs7O0lBQ0ksa0NBQVE7Ozs7SUFBZjtRQUNFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDdEIsQ0FBQzs7Z0JBL0JGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsWUFBWTtvQkFDdEIscXNGQUFzQztvQkFFdEMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O2lCQUNoRDs7Ozs7MEJBRUUsS0FBSzt1QkFDTCxLQUFLO3VCQUNMLEtBQUs7MkJBQ0wsS0FBSzt1QkFDTCxLQUFLOzJCQUNMLEtBQUs7NEJBQ0wsS0FBSzt3QkFDTCxLQUFLOzBCQUNMLE1BQU07O0lBaUJULHNCQUFDO0NBQUEsQUFoQ0QsSUFnQ0M7U0ExQlksZUFBZTs7O0lBQzFCLGtDQUFvQzs7SUFDcEMsK0JBQWdDOztJQUNoQywrQkFBMkI7O0lBQzNCLG1DQUFpQzs7SUFDakMsK0JBQTJCOztJQUMzQixtQ0FBbUM7O0lBQ25DLG9DQUFvQzs7SUFDcEMsZ0NBQW1DOztJQUNuQyxrQ0FBK0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtYnV0dG9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2J1dHRvbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2J1dHRvbi5jb21wb25lbnQuc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBCdXR0b25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSB2YXJpYW50OiBzdHJpbmcgPSAncmFpc2VkJzsgLy8gcmFpc2VkIHwgc3Ryb2tlZCB8IGljb24gfCBpY29uLW5vbi1mYWJcbiAgQElucHV0KCkgdHlwZTogc3RyaW5nID0gJ3N1Ym1pdCcgLy8gc3VibWl0IHwgYnV0dG9uXG4gIEBJbnB1dCgpIG5hbWU6IHN0cmluZyA9ICcnO1xuICBASW5wdXQoKSBpY29uVHlwZTogc3RyaW5nID0gJ2ZhJzsgLy8gZmEgfCBtYXRlcmlhbFxuICBASW5wdXQoKSBpY29uOiBzdHJpbmcgPSAnJztcbiAgQElucHV0KCkgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgaXNMb2FkaW5nOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGNvbG9yOiBzdHJpbmcgPSAncHJpbWFyeSc7XG4gIEBPdXRwdXQoKSBvbkNsaWNrOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgLyoqXG4gICAqIG5nT25Jbml0XG4gICAqIEByZXR1cm4gdm9pZFxuICAgKi9cbiAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQgeyB9XG5cbiAgLyoqXG4gICAqIE9uQ2xpY2tcbiAgICogQHJldHVybiB2b2lkXG4gICAqL1xuICBwdWJsaWMgX29uQ2xpY2soKTogdm9pZCB7XG4gICAgdGhpcy5vbkNsaWNrLmVtaXQoKTtcbiAgfVxufVxuIl19