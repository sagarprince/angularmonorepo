/**
 * @fileoverview added by tsickle
 * Generated from: lib/form-fields/button/button.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
export class ButtonComponent {
    constructor() {
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
     * @return {?} void
     */
    ngOnInit() { }
    /**
     * OnClick
     * @return {?} void
     */
    _onClick() {
        this.onClick.emit();
    }
}
ButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-button',
                template: "<ng-container [ngSwitch]=\"variant\">\n    <ng-container *ngSwitchCase=\"'raised'\">\n        <button [type]=\"type\" mat-raised-button [color]=\"color\" [disabled]=\"disabled\" (click)=\"_onClick()\">\n            <ng-container *ngIf=\"isLoading\">\n                <mat-icon class=\"spinner\">\n                    <mat-spinner [color]=\"color\" diameter=\"22\">\n                    </mat-spinner>\n                </mat-icon>\n            </ng-container>\n            <ng-container *ngIf=\"!isLoading && icon != '' && iconType == 'fa'\">\n                <mat-icon [fontSet]=\"iconType\" [fontIcon]=\"icon\"></mat-icon>\n            </ng-container>\n            <ng-container *ngIf=\"!isLoading && icon != '' && iconType == 'material'\">\n                <mat-icon>{{icon}}</mat-icon>\n            </ng-container>\n            {{name}}\n        </button>\n    </ng-container>\n    <ng-container *ngSwitchCase=\"'stroked'\">\n        <button [type]=\"type\" mat-stroked-button [disabled]=\"disabled\" (click)=\"_onClick()\">\n            <ng-container *ngIf=\"isLoading\">\n                <mat-icon class=\"spinner\">\n                    <mat-spinner [color]=\"color\" diameter=\"22\">\n                    </mat-spinner>\n                </mat-icon>\n            </ng-container>\n            <ng-container *ngIf=\"!isLoading && icon != '' && iconType == 'fa'\">\n                <mat-icon [fontSet]=\"iconType\" [fontIcon]=\"icon\"></mat-icon>\n            </ng-container>\n            <ng-container *ngIf=\"!isLoading && icon != '' && iconType == 'material'\">\n                <mat-icon>{{icon}}</mat-icon>\n            </ng-container>\n            {{name}}\n        </button>\n    </ng-container>\n    <ng-container *ngSwitchCase=\"'icon'\">\n        <button [type]=\"type\" mat-icon-button mat-mini-fab [color]=\"color\" [disabled]=\"disabled\" (click)=\"_onClick()\">\n            <ng-container *ngIf=\"iconType == 'fa'; else materialIcon\">\n                <mat-icon [fontSet]=\"iconType\" [fontIcon]=\"icon\"></mat-icon>\n            </ng-container>\n            <ng-template #materialIcon>\n                <mat-icon>{{icon}}</mat-icon>\n            </ng-template>\n        </button>\n    </ng-container>\n    <ng-container *ngSwitchCase=\"'icon-non-fab'\">\n        <button [type]=\"type\" mat-icon-button [color]=\"color\" [disabled]=\"disabled\" (click)=\"_onClick()\">\n            <ng-container *ngIf=\"iconType == 'fa'; else materialIcon\">\n                <mat-icon [fontSet]=\"iconType\" [fontIcon]=\"icon\"></mat-icon>\n            </ng-container>\n            <ng-template #materialIcon>\n                <mat-icon>{{icon}}</mat-icon>\n            </ng-template>\n        </button>\n    </ng-container>\n</ng-container>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [""]
            }] }
];
/** @nocollapse */
ButtonComponent.ctorParameters = () => [];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NvbW1vbi8iLCJzb3VyY2VzIjpbImxpYi9mb3JtLWZpZWxkcy9idXR0b24vYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFReEcsTUFBTSxPQUFPLGVBQWU7SUFXMUI7UUFWUyxZQUFPLEdBQVcsUUFBUSxDQUFDLENBQUMseUNBQXlDOztRQUNyRSxTQUFJLEdBQVcsUUFBUSxDQUFBLENBQUMsa0JBQWtCOztRQUMxQyxTQUFJLEdBQVcsRUFBRSxDQUFDO1FBQ2xCLGFBQVEsR0FBVyxJQUFJLENBQUMsQ0FBQyxnQkFBZ0I7O1FBQ3pDLFNBQUksR0FBVyxFQUFFLENBQUM7UUFDbEIsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUMxQixjQUFTLEdBQVksS0FBSyxDQUFDO1FBQzNCLFVBQUssR0FBVyxTQUFTLENBQUM7UUFDekIsWUFBTyxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO0lBRS9DLENBQUM7Ozs7O0lBTVYsUUFBUSxLQUFXLENBQUM7Ozs7O0lBTXBCLFFBQVE7UUFDYixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3RCLENBQUM7OztZQS9CRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLHFzRkFBc0M7Z0JBRXRDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOzthQUNoRDs7Ozs7c0JBRUUsS0FBSzttQkFDTCxLQUFLO21CQUNMLEtBQUs7dUJBQ0wsS0FBSzttQkFDTCxLQUFLO3VCQUNMLEtBQUs7d0JBQ0wsS0FBSztvQkFDTCxLQUFLO3NCQUNMLE1BQU07Ozs7SUFSUCxrQ0FBb0M7O0lBQ3BDLCtCQUFnQzs7SUFDaEMsK0JBQTJCOztJQUMzQixtQ0FBaUM7O0lBQ2pDLCtCQUEyQjs7SUFDM0IsbUNBQW1DOztJQUNuQyxvQ0FBb0M7O0lBQ3BDLGdDQUFtQzs7SUFDbkMsa0NBQStEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWJ1dHRvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9idXR0b24uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9idXR0b24uY29tcG9uZW50LnNjc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgQnV0dG9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgdmFyaWFudDogc3RyaW5nID0gJ3JhaXNlZCc7IC8vIHJhaXNlZCB8IHN0cm9rZWQgfCBpY29uIHwgaWNvbi1ub24tZmFiXG4gIEBJbnB1dCgpIHR5cGU6IHN0cmluZyA9ICdzdWJtaXQnIC8vIHN1Ym1pdCB8IGJ1dHRvblxuICBASW5wdXQoKSBuYW1lOiBzdHJpbmcgPSAnJztcbiAgQElucHV0KCkgaWNvblR5cGU6IHN0cmluZyA9ICdmYSc7IC8vIGZhIHwgbWF0ZXJpYWxcbiAgQElucHV0KCkgaWNvbjogc3RyaW5nID0gJyc7XG4gIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGlzTG9hZGluZzogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBjb2xvcjogc3RyaW5nID0gJ3ByaW1hcnknO1xuICBAT3V0cHV0KCkgb25DbGljazogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIC8qKlxuICAgKiBuZ09uSW5pdFxuICAgKiBAcmV0dXJuIHZvaWRcbiAgICovXG4gIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHsgfVxuXG4gIC8qKlxuICAgKiBPbkNsaWNrXG4gICAqIEByZXR1cm4gdm9pZFxuICAgKi9cbiAgcHVibGljIF9vbkNsaWNrKCk6IHZvaWQge1xuICAgIHRoaXMub25DbGljay5lbWl0KCk7XG4gIH1cbn1cbiJdfQ==