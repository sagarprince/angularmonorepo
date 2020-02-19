/**
 * @fileoverview added by tsickle
 * Generated from: lib/form-fields/input/input.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Core
import { Component, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS, FormControl } from '@angular/forms';
export class InputComponent {
    constructor() {
        this.mode = 'input'; // input | datepicker | textarea
        // input | datepicker | textarea
        this.type = 'text';
        this.appearance = 'fill'; // standard | outline | fill
        // standard | outline | fill
        this.label = '';
        this.placeholder = '';
        this.icon = '';
        this.autocomplete = 'off';
        this.control = new FormControl();
        this.readonly = false;
        this.errors = [];
        this.requiredErrMessage = 'Required Field.';
        this.emailErrMessage = 'Please enter a valid email.';
        this.minLengthErrMessage = '';
        this.maxLengthErrMessage = '';
        this.patternErrMessage = '';
        this.mustMatchErrMessage = '';
        this.mustNotMatchErrMessage = '';
        this.invalidErrMessage = '';
        this.isLoading = false;
        this.showControlStatusIcon = true;
        this.isPasswordVisible = false;
        this.inputType = '';
        this.value = '';
        this._icon = '';
        this._errors = [];
        this.propagateChange = (/**
         * @param {?} _
         * @return {?}
         */
        (_) => { });
        this.onTouched = (/**
         * @return {?}
         */
        () => { });
        this.validateFn = (/**
         * @return {?}
         */
        () => { });
        this.disabled = false;
        this._errors = [
            {
                key: 'required',
                message: this.requiredErrMessage
            },
            {
                key: 'email',
                message: this.emailErrMessage
            },
            {
                key: 'pattern',
                message: this.patternErrMessage
            },
            {
                key: 'minlength',
                message: this.minLengthErrMessage
            },
            {
                key: 'maxlength',
                message: this.maxLengthErrMessage
            },
            {
                key: 'invalid',
                message: this.invalidErrMessage
            },
            {
                key: 'mustMatch',
                message: this.mustMatchErrMessage
            },
            {
                key: 'mustNotMatch',
                message: this.mustNotMatchErrMessage
            }
        ];
    }
    /**
     * ngOnInit
     * @return {?} void
     */
    ngOnInit() {
        this.inputType = this.type === 'password' ? 'text' : this.type;
    }
    /**
     * ngOnChanges
     * @param {?} changes
     * @return {?} void
     */
    ngOnChanges(changes) {
        if (changes) {
            if (typeof changes.errors !== 'undefined') {
                if (changes.errors.firstChange) {
                    this._errors.push(...changes.errors.currentValue);
                }
            }
            if (typeof changes.errors !== 'undefined') {
                if (changes.errors.firstChange) {
                    this._errors.push(...changes.errors.currentValue);
                }
            }
            if (typeof changes.requiredErrMessage !== 'undefined') {
                /** @type {?} */
                let index = this._errors.findIndex((/**
                 * @param {?} x
                 * @return {?}
                 */
                (x) => {
                    return x.key === 'required';
                }));
                this._errors[index].message = changes.requiredErrMessage.currentValue;
            }
            if (typeof changes.patternErrMessage !== 'undefined') {
                /** @type {?} */
                let index = this._errors.findIndex((/**
                 * @param {?} x
                 * @return {?}
                 */
                (x) => {
                    return x.key === 'pattern';
                }));
                this._errors[index].message = changes.patternErrMessage.currentValue;
            }
            if (typeof changes.emailErrMessage !== 'undefined') {
                /** @type {?} */
                let index = this._errors.findIndex((/**
                 * @param {?} x
                 * @return {?}
                 */
                (x) => {
                    return x.key === 'email';
                }));
                this._errors[index].message = changes.emailErrMessage.currentValue;
            }
            if (typeof changes.minLengthErrMessage !== 'undefined') {
                /** @type {?} */
                let index = this._errors.findIndex((/**
                 * @param {?} x
                 * @return {?}
                 */
                (x) => {
                    return x.key === 'minlength';
                }));
                this._errors[index].message = changes.minLengthErrMessage.currentValue;
            }
            if (typeof changes.maxLengthErrMessage !== 'undefined') {
                /** @type {?} */
                let index = this._errors.findIndex((/**
                 * @param {?} x
                 * @return {?}
                 */
                (x) => {
                    return x.key === 'maxlength';
                }));
                this._errors[index].message = changes.maxLengthErrMessage.currentValue;
            }
            if (typeof changes.invalidErrMessage !== 'undefined') {
                /** @type {?} */
                let index = this._errors.findIndex((/**
                 * @param {?} x
                 * @return {?}
                 */
                (x) => {
                    return x.key === 'invalid';
                }));
                this._errors[index].message = changes.invalidErrMessage.currentValue;
            }
            if (typeof changes.mustMatchErrMessage !== 'undefined') {
                /** @type {?} */
                let index = this._errors.findIndex((/**
                 * @param {?} x
                 * @return {?}
                 */
                (x) => {
                    return x.key === 'mustMatch';
                }));
                this._errors[index].message = changes.mustMatchErrMessage.currentValue;
            }
            if (typeof changes.mustNotMatchErrMessage !== 'undefined') {
                /** @type {?} */
                let index = this._errors.findIndex((/**
                 * @param {?} x
                 * @return {?}
                 */
                (x) => {
                    return x.key === 'mustNotMatch';
                }));
                this._errors[index].message = changes.mustNotMatchErrMessage.currentValue;
            }
        }
    }
    /**
     * Write a value to the control
     * @param {?} value
     * @return {?} void
     */
    writeValue(value) {
        if (value) {
            this.value = value;
        }
    }
    /**
     * Register a function to tell Angular when the value of the input changes
     * @param {?} fn
     * @return {?} void
     */
    registerOnChange(fn) {
        this.propagateChange = fn;
    }
    /**
     * Register a function to tell Angular when the input has been touched
     * @param {?} fn
     * @return {?} void
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * On Change
     * @param {?} event
     * @return {?} void
     */
    onChange(event) {
        /** @type {?} */
        let _value = event.target.value;
        this.value = _value;
        this.propagateChange(this.value);
        if (!this.control.pending) {
            this.onTouched();
        }
    }
    /**
     * Validate
     * @param {?} c
     * @return {?} any
     */
    validate(c) {
        return this.validateFn(c);
    }
    /**
     * Clear Date
     * @return {?} void
     */
    clearDate() {
        this.value = '';
        this.propagateChange(this.value);
    }
    /**
     * Set Disabled State
     * @param {?} isDisabled
     * @return {?} void
     */
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
}
InputComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-input',
                template: "<mat-form-field [appearance]=\"appearance\" [class.non-label-field]=\"label === ''\">\n    <mat-label *ngIf=\"label\">{{label}}</mat-label>\n    <ng-container [ngSwitch]=\"mode\">\n        <ng-container *ngSwitchCase=\"'input'\">\n            <input matInput [type]=\"!isPasswordVisible && type == 'password' ? type : inputType\"\n                [placeholder]=\"placeholder\" [value]=\"value\" [formControl]=\"control\" (input)=\"onChange($event)\"\n                [readonly]=\"readonly\" [attr.autocomplete]=\"autocomplete\">\n            <div *ngIf=\"type == 'password'\" class=\"password-visibility-icon\"\n                [class.password-visible]=\"isPasswordVisible\" matSuffix>\n                <mat-icon (click)=\"isPasswordVisible = !isPasswordVisible\">\n                    {{!isPasswordVisible ? 'visibility_off' : 'visibility'}}</mat-icon>\n            </div>\n        </ng-container>\n        <ng-container *ngSwitchCase=\"'textarea'\">\n            <textarea matInput [placeholder]=\"placeholder\" [formControl]=\"control\" (input)=\"onChange($event)\"\n                [readonly]=\"readonly\" [attr.autocomplete]=\"autocomplete\">{{value}}</textarea>\n        </ng-container>\n        <ng-container *ngSwitchCase=\"'datepicker'\">\n            <input matInput [type]=\"type\" [matDatepicker]=\"picker\" [placeholder]=\"placeholder\" [value]=\"value\"\n                [formControl]=\"control\" (dateChange)=\"onChange($event)\" (focus)=\"picker.open()\" (click)=\"picker.open()\"\n                [attr.autocomplete]=\"autocomplete\">\n            <button *ngIf=\"value\" type=\"button\" matSuffix mat-icon-button class=\"clear-date-btn\" (click)=\"clearDate()\"\n                title=\"Clear Date\">\n                <mat-icon>close</mat-icon>\n            </button>\n            <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n            <mat-datepicker #picker></mat-datepicker>\n        </ng-container>\n    </ng-container>\n    <mat-icon matSuffix *ngIf=\"icon\"><i [class]=\"icon\"></i></mat-icon>\n    <mat-error>{{_errors | getErrorMessages: control.errors}}</mat-error>\n    <div class=\"control-status control-loading-status\" *ngIf=\"isLoading\">\n        <i class=\"fa fa-spin fa-circle-o-notch\"></i>\n    </div>\n</mat-form-field>",
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => InputComponent)),
                        multi: true
                    },
                    {
                        provide: NG_VALIDATORS,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => InputComponent)),
                        multi: true
                    }
                ],
                styles: ["textarea.mat-input-element{resize:none;min-height:90px}.mat-datepicker-toggle{position:absolute;right:-10px;top:-18px}.mat-form-field-should-float .mat-datepicker-toggle{top:-14px}.clear-date-btn{position:absolute;right:25px;top:-14px}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.control-status{position:absolute;top:-24px;right:-14px}.control-loading-status{font-size:20px;color:#22a471;right:-14px}.non-label-field ::ng-deep .mat-form-field-infix{padding:0;border:0}.non-label-field ::ng-deep .mat-form-field-flex{padding-top:1.4em;padding-bottom:1.3em}.non-label-field ::ng-deep .mat-form-field-flex,.non-label-field ::ng-deep input{font-size:16px!important}.non-label-field ::ng-deep .control-status{top:-16px}.password-visibility-icon{position:absolute;top:-6px;right:-20px;left:auto;color:#597084;background-color:#fff;width:60px;height:40px;text-align:center}.password-visibility-icon.password-visible{color:#1f2430}.password-visibility-icon .mat-icon{cursor:pointer}"]
            }] }
];
/** @nocollapse */
InputComponent.ctorParameters = () => [];
InputComponent.propDecorators = {
    mode: [{ type: Input }],
    type: [{ type: Input }],
    appearance: [{ type: Input }],
    label: [{ type: Input }],
    placeholder: [{ type: Input }],
    icon: [{ type: Input }],
    autocomplete: [{ type: Input }],
    control: [{ type: Input }],
    readonly: [{ type: Input }],
    errors: [{ type: Input }],
    requiredErrMessage: [{ type: Input }],
    emailErrMessage: [{ type: Input }],
    minLengthErrMessage: [{ type: Input }],
    maxLengthErrMessage: [{ type: Input }],
    patternErrMessage: [{ type: Input }],
    mustMatchErrMessage: [{ type: Input }],
    mustNotMatchErrMessage: [{ type: Input }],
    invalidErrMessage: [{ type: Input }],
    isLoading: [{ type: Input }],
    showControlStatusIcon: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    InputComponent.prototype.mode;
    /** @type {?} */
    InputComponent.prototype.type;
    /** @type {?} */
    InputComponent.prototype.appearance;
    /** @type {?} */
    InputComponent.prototype.label;
    /** @type {?} */
    InputComponent.prototype.placeholder;
    /** @type {?} */
    InputComponent.prototype.icon;
    /** @type {?} */
    InputComponent.prototype.autocomplete;
    /** @type {?} */
    InputComponent.prototype.control;
    /** @type {?} */
    InputComponent.prototype.readonly;
    /** @type {?} */
    InputComponent.prototype.errors;
    /** @type {?} */
    InputComponent.prototype.requiredErrMessage;
    /** @type {?} */
    InputComponent.prototype.emailErrMessage;
    /** @type {?} */
    InputComponent.prototype.minLengthErrMessage;
    /** @type {?} */
    InputComponent.prototype.maxLengthErrMessage;
    /** @type {?} */
    InputComponent.prototype.patternErrMessage;
    /** @type {?} */
    InputComponent.prototype.mustMatchErrMessage;
    /** @type {?} */
    InputComponent.prototype.mustNotMatchErrMessage;
    /** @type {?} */
    InputComponent.prototype.invalidErrMessage;
    /** @type {?} */
    InputComponent.prototype.isLoading;
    /** @type {?} */
    InputComponent.prototype.showControlStatusIcon;
    /** @type {?} */
    InputComponent.prototype.isPasswordVisible;
    /** @type {?} */
    InputComponent.prototype.inputType;
    /** @type {?} */
    InputComponent.prototype.value;
    /** @type {?} */
    InputComponent.prototype.disabled;
    /**
     * @type {?}
     * @private
     */
    InputComponent.prototype.propagateChange;
    /**
     * @type {?}
     * @private
     */
    InputComponent.prototype.onTouched;
    /**
     * @type {?}
     * @private
     */
    InputComponent.prototype.validateFn;
    /** @type {?} */
    InputComponent.prototype._icon;
    /** @type {?} */
    InputComponent.prototype._errors;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY29tbW9uLyIsInNvdXJjZXMiOlsibGliL2Zvcm0tZmllbGRzL2lucHV0L2lucHV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFxQixLQUFLLEVBQUUsVUFBVSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUMvRixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLGFBQWEsRUFBRSxXQUFXLEVBQWEsTUFBTSxnQkFBZ0IsQ0FBQztBQW1CaEgsTUFBTSxPQUFPLGNBQWM7SUFpQ3pCO1FBaENTLFNBQUksR0FBVyxPQUFPLENBQUMsQ0FBQyxnQ0FBZ0M7O1FBQ3hELFNBQUksR0FBVyxNQUFNLENBQUM7UUFDdEIsZUFBVSxHQUFXLE1BQU0sQ0FBQyxDQUFDLDRCQUE0Qjs7UUFDekQsVUFBSyxHQUFXLEVBQUUsQ0FBQztRQUNuQixnQkFBVyxHQUFXLEVBQUUsQ0FBQztRQUN6QixTQUFJLEdBQVcsRUFBRSxDQUFDO1FBQ2xCLGlCQUFZLEdBQVcsS0FBSyxDQUFDO1FBQzdCLFlBQU8sR0FBZ0IsSUFBSSxXQUFXLEVBQUUsQ0FBQztRQUN6QyxhQUFRLEdBQVksS0FBSyxDQUFDO1FBQzFCLFdBQU0sR0FBZSxFQUFFLENBQUM7UUFDeEIsdUJBQWtCLEdBQVcsaUJBQWlCLENBQUM7UUFDL0Msb0JBQWUsR0FBVyw2QkFBNkIsQ0FBQztRQUN4RCx3QkFBbUIsR0FBVyxFQUFFLENBQUM7UUFDakMsd0JBQW1CLEdBQVcsRUFBRSxDQUFDO1FBQ2pDLHNCQUFpQixHQUFXLEVBQUUsQ0FBQztRQUMvQix3QkFBbUIsR0FBVyxFQUFFLENBQUM7UUFDakMsMkJBQXNCLEdBQVcsRUFBRSxDQUFDO1FBQ3BDLHNCQUFpQixHQUFXLEVBQUUsQ0FBQztRQUMvQixjQUFTLEdBQVksS0FBSyxDQUFDO1FBQzNCLDBCQUFxQixHQUFZLElBQUksQ0FBQztRQUV4QyxzQkFB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O3dCQUM3QyxLQUFLLEVBQUUsSUFBSTtxQkFDWjtvQkFDRDt3QkFDRSxPQUFPLEVBQUUsYUFBYTt3QkFDdEIsV0FBVyxFQUFFLFVBQVU7Ozt3QkFBQyxHQUFHLEVBQUUsQ0FBQyxjQUFjLEVBQUM7d0JBQzdDLEtBQUssRUFBRSxJQUFJO3FCQUNaO2lCQUNGOzthQUNGOzs7OzttQkFFRSxLQUFLO21CQUNMLEtBQUs7eUJBQ0wsS0FBSztvQkFDTCxLQUFLOzBCQUNMLEtBQUs7bUJBQ0wsS0FBSzsyQkFDTCxLQUFLO3NCQUNMLEtBQUs7dUJBQ0wsS0FBSztxQkFDTCxLQUFLO2lDQUNMLEtBQUs7OEJBQ0wsS0FBSztrQ0FDTCxLQUFLO2tDQUNMLEtBQUs7Z0NBQ0wsS0FBSztrQ0FDTCxLQUFLO3FDQUNMLEtBQUs7Z0NBQ0wsS0FBSzt3QkFDTCxLQUFLO29DQUNMLEtBQUs7Ozs7SUFuQk4sOEJBQWdDOztJQUNoQyw4QkFBK0I7O0lBQy9CLG9DQUFxQzs7SUFDckMsK0JBQTRCOztJQUM1QixxQ0FBa0M7O0lBQ2xDLDhCQUEyQjs7SUFDM0Isc0NBQXNDOztJQUN0QyxpQ0FBa0Q7O0lBQ2xELGtDQUFtQzs7SUFDbkMsZ0NBQWlDOztJQUNqQyw0Q0FBd0Q7O0lBQ3hELHlDQUFpRTs7SUFDakUsNkNBQTBDOztJQUMxQyw2Q0FBMEM7O0lBQzFDLDJDQUF3Qzs7SUFDeEMsNkNBQTBDOztJQUMxQyxnREFBNkM7O0lBQzdDLDJDQUF3Qzs7SUFDeEMsbUNBQW9DOztJQUNwQywrQ0FBK0M7O0lBRS9DLDJDQUEwQzs7SUFDMUMsbUNBQThCOztJQUU5QiwrQkFBMEI7O0lBQzFCLGtDQUF5Qjs7Ozs7SUFDekIseUNBQWtDOzs7OztJQUNsQyxtQ0FBNEI7Ozs7O0lBQzVCLG9DQUE2Qjs7SUFDN0IsK0JBQTBCOztJQUMxQixpQ0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3JlXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25DaGFuZ2VzLCBJbnB1dCwgZm9yd2FyZFJlZiwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SLCBOR19WQUxJREFUT1JTLCBGb3JtQ29udHJvbCwgVmFsaWRhdG9yIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtaW5wdXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vaW5wdXQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9pbnB1dC5jb21wb25lbnQuc2NzcyddLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IElucHV0Q29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gSW5wdXRDb21wb25lbnQpLFxuICAgICAgbXVsdGk6IHRydWVcbiAgICB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgSW5wdXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgQ29udHJvbFZhbHVlQWNjZXNzb3IsIFZhbGlkYXRvciB7XG4gIEBJbnB1dCgpIG1vZGU6IHN0cmluZyA9ICdpbnB1dCc7IC8vIGlucHV0IHwgZGF0ZXBpY2tlciB8IHRleHRhcmVhXG4gIEBJbnB1dCgpIHR5cGU6IHN0cmluZyA9ICd0ZXh0JztcbiAgQElucHV0KCkgYXBwZWFyYW5jZTogc3RyaW5nID0gJ2ZpbGwnOyAvLyBzdGFuZGFyZCB8IG91dGxpbmUgfCBmaWxsXG4gIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmcgPSAnJztcbiAgQElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZyA9ICcnO1xuICBASW5wdXQoKSBpY29uOiBzdHJpbmcgPSAnJztcbiAgQElucHV0KCkgYXV0b2NvbXBsZXRlOiBzdHJpbmcgPSAnb2ZmJztcbiAgQElucHV0KCkgY29udHJvbDogRm9ybUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woKTtcbiAgQElucHV0KCkgcmVhZG9ubHk6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgZXJyb3JzOiBBcnJheTxhbnk+ID0gW107XG4gIEBJbnB1dCgpIHJlcXVpcmVkRXJyTWVzc2FnZTogc3RyaW5nID0gJ1JlcXVpcmVkIEZpZWxkLic7XG4gIEBJbnB1dCgpIGVtYWlsRXJyTWVzc2FnZTogc3RyaW5nID0gJ1BsZWFzZSBlbnRlciBhIHZhbGlkIGVtYWlsLic7XG4gIEBJbnB1dCgpIG1pbkxlbmd0aEVyck1lc3NhZ2U6IHN0cmluZyA9ICcnO1xuICBASW5wdXQoKSBtYXhMZW5ndGhFcnJNZXNzYWdlOiBzdHJpbmcgPSAnJztcbiAgQElucHV0KCkgcGF0dGVybkVyck1lc3NhZ2U6IHN0cmluZyA9ICcnO1xuICBASW5wdXQoKSBtdXN0TWF0Y2hFcnJNZXNzYWdlOiBTdHJpbmcgPSAnJztcbiAgQElucHV0KCkgbXVzdE5vdE1hdGNoRXJyTWVzc2FnZTogU3RyaW5nID0gJyc7XG4gIEBJbnB1dCgpIGludmFsaWRFcnJNZXNzYWdlOiBTdHJpbmcgPSAnJztcbiAgQElucHV0KCkgaXNMb2FkaW5nOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIHNob3dDb250cm9sU3RhdHVzSWNvbjogYm9vbGVhbiA9IHRydWU7XG5cbiAgcHVibGljIGlzUGFzc3dvcmRWaXNpYmxlOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBpbnB1dFR5cGU6IHN0cmluZyA9ICcnO1xuXG4gIHB1YmxpYyB2YWx1ZTogc3RyaW5nID0gJyc7XG4gIHB1YmxpYyBkaXNhYmxlZDogYm9vbGVhbjtcbiAgcHJpdmF0ZSBwcm9wYWdhdGVDaGFuZ2U6IEZ1bmN0aW9uO1xuICBwcml2YXRlIG9uVG91Y2hlZDogRnVuY3Rpb247XG4gIHByaXZhdGUgdmFsaWRhdGVGbjogRnVuY3Rpb247XG4gIHB1YmxpYyBfaWNvbjogc3RyaW5nID0gJyc7XG4gIHB1YmxpYyBfZXJyb3JzOiBBcnJheTxhbnk+ID0gW107XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5wcm9wYWdhdGVDaGFuZ2UgPSAoXzogYW55KSA9PiB7IH07XG4gICAgdGhpcy5vblRvdWNoZWQgPSAoKSA9PiB7IH07XG4gICAgdGhpcy52YWxpZGF0ZUZuID0gKCkgPT4geyB9O1xuICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9lcnJvcnMgPSBbXG4gICAgICB7XG4gICAgICAgIGtleTogJ3JlcXVpcmVkJyxcbiAgICAgICAgbWVzc2FnZTogdGhpcy5yZXF1aXJlZEVyck1lc3NhZ2VcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGtleTogJ2VtYWlsJyxcbiAgICAgICAgbWVzc2FnZTogdGhpcy5lbWFpbEVyck1lc3NhZ2VcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGtleTogJ3BhdHRlcm4nLFxuICAgICAgICBtZXNzYWdlOiB0aGlzLnBhdHRlcm5FcnJNZXNzYWdlXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBrZXk6ICdtaW5sZW5ndGgnLFxuICAgICAgICBtZXNzYWdlOiB0aGlzLm1pbkxlbmd0aEVyck1lc3NhZ2VcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGtleTogJ21heGxlbmd0aCcsXG4gICAgICAgIG1lc3NhZ2U6IHRoaXMubWF4TGVuZ3RoRXJyTWVzc2FnZVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAga2V5OiAnaW52YWxpZCcsXG4gICAgICAgIG1lc3NhZ2U6IHRoaXMuaW52YWxpZEVyck1lc3NhZ2VcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGtleTogJ211c3RNYXRjaCcsXG4gICAgICAgIG1lc3NhZ2U6IHRoaXMubXVzdE1hdGNoRXJyTWVzc2FnZVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAga2V5OiAnbXVzdE5vdE1hdGNoJyxcbiAgICAgICAgbWVzc2FnZTogdGhpcy5tdXN0Tm90TWF0Y2hFcnJNZXNzYWdlXG4gICAgICB9XG4gICAgXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBuZ09uSW5pdFxuICAgKiBAcmV0dXJuIHZvaWRcbiAgICovXG4gIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmlucHV0VHlwZSA9IHRoaXMudHlwZSA9PT0gJ3Bhc3N3b3JkJyA/ICd0ZXh0JyA6IHRoaXMudHlwZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBuZ09uQ2hhbmdlc1xuICAgKiBAcGFyYW0gY2hhbmdlc1xuICAgKiBAcmV0dXJuIHZvaWRcbiAgICovXG4gIHB1YmxpYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZXMpIHtcbiAgICAgIGlmICh0eXBlb2YgY2hhbmdlcy5lcnJvcnMgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGlmIChjaGFuZ2VzLmVycm9ycy5maXJzdENoYW5nZSkge1xuICAgICAgICAgIHRoaXMuX2Vycm9ycy5wdXNoKC4uLmNoYW5nZXMuZXJyb3JzLmN1cnJlbnRWYWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgY2hhbmdlcy5lcnJvcnMgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGlmIChjaGFuZ2VzLmVycm9ycy5maXJzdENoYW5nZSkge1xuICAgICAgICAgIHRoaXMuX2Vycm9ycy5wdXNoKC4uLmNoYW5nZXMuZXJyb3JzLmN1cnJlbnRWYWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgY2hhbmdlcy5yZXF1aXJlZEVyck1lc3NhZ2UgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMuX2Vycm9ycy5maW5kSW5kZXgoKHg6IGFueSkgPT4ge1xuICAgICAgICAgIHJldHVybiB4LmtleSA9PT0gJ3JlcXVpcmVkJztcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuX2Vycm9yc1tpbmRleF0ubWVzc2FnZSA9IGNoYW5nZXMucmVxdWlyZWRFcnJNZXNzYWdlLmN1cnJlbnRWYWx1ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgY2hhbmdlcy5wYXR0ZXJuRXJyTWVzc2FnZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5fZXJyb3JzLmZpbmRJbmRleCgoeDogYW55KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHgua2V5ID09PSAncGF0dGVybic7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9lcnJvcnNbaW5kZXhdLm1lc3NhZ2UgPSBjaGFuZ2VzLnBhdHRlcm5FcnJNZXNzYWdlLmN1cnJlbnRWYWx1ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgY2hhbmdlcy5lbWFpbEVyck1lc3NhZ2UgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMuX2Vycm9ycy5maW5kSW5kZXgoKHg6IGFueSkgPT4ge1xuICAgICAgICAgIHJldHVybiB4LmtleSA9PT0gJ2VtYWlsJztcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuX2Vycm9yc1tpbmRleF0ubWVzc2FnZSA9IGNoYW5nZXMuZW1haWxFcnJNZXNzYWdlLmN1cnJlbnRWYWx1ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgY2hhbmdlcy5taW5MZW5ndGhFcnJNZXNzYWdlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLl9lcnJvcnMuZmluZEluZGV4KCh4OiBhbnkpID0+IHtcbiAgICAgICAgICByZXR1cm4geC5rZXkgPT09ICdtaW5sZW5ndGgnO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fZXJyb3JzW2luZGV4XS5tZXNzYWdlID0gY2hhbmdlcy5taW5MZW5ndGhFcnJNZXNzYWdlLmN1cnJlbnRWYWx1ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgY2hhbmdlcy5tYXhMZW5ndGhFcnJNZXNzYWdlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLl9lcnJvcnMuZmluZEluZGV4KCh4OiBhbnkpID0+IHtcbiAgICAgICAgICByZXR1cm4geC5rZXkgPT09ICdtYXhsZW5ndGgnO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fZXJyb3JzW2luZGV4XS5tZXNzYWdlID0gY2hhbmdlcy5tYXhMZW5ndGhFcnJNZXNzYWdlLmN1cnJlbnRWYWx1ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgY2hhbmdlcy5pbnZhbGlkRXJyTWVzc2FnZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5fZXJyb3JzLmZpbmRJbmRleCgoeDogYW55KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHgua2V5ID09PSAnaW52YWxpZCc7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9lcnJvcnNbaW5kZXhdLm1lc3NhZ2UgPSBjaGFuZ2VzLmludmFsaWRFcnJNZXNzYWdlLmN1cnJlbnRWYWx1ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgY2hhbmdlcy5tdXN0TWF0Y2hFcnJNZXNzYWdlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLl9lcnJvcnMuZmluZEluZGV4KCh4OiBhbnkpID0+IHtcbiAgICAgICAgICByZXR1cm4geC5rZXkgPT09ICdtdXN0TWF0Y2gnO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fZXJyb3JzW2luZGV4XS5tZXNzYWdlID0gY2hhbmdlcy5tdXN0TWF0Y2hFcnJNZXNzYWdlLmN1cnJlbnRWYWx1ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgY2hhbmdlcy5tdXN0Tm90TWF0Y2hFcnJNZXNzYWdlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLl9lcnJvcnMuZmluZEluZGV4KCh4OiBhbnkpID0+IHtcbiAgICAgICAgICByZXR1cm4geC5rZXkgPT09ICdtdXN0Tm90TWF0Y2gnO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fZXJyb3JzW2luZGV4XS5tZXNzYWdlID0gY2hhbmdlcy5tdXN0Tm90TWF0Y2hFcnJNZXNzYWdlLmN1cnJlbnRWYWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogV3JpdGUgYSB2YWx1ZSB0byB0aGUgY29udHJvbFxuICAgKiBAcGFyYW0gdmFsdWVcbiAgICogQHJldHVybiB2b2lkXG4gICAqL1xuICBwdWJsaWMgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVyIGEgZnVuY3Rpb24gdG8gdGVsbCBBbmd1bGFyIHdoZW4gdGhlIHZhbHVlIG9mIHRoZSBpbnB1dCBjaGFuZ2VzXG4gICAqIEBwYXJhbSBmbiBcbiAgICogQHJldHVybiB2b2lkXG4gICAqL1xuICBwdWJsaWMgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5wcm9wYWdhdGVDaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlciBhIGZ1bmN0aW9uIHRvIHRlbGwgQW5ndWxhciB3aGVuIHRoZSBpbnB1dCBoYXMgYmVlbiB0b3VjaGVkXG4gICAqIEBwYXJhbSBmbiBcbiAgICogQHJldHVybiB2b2lkXG4gICAqL1xuICBwdWJsaWMgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gIH1cblxuICAvKipcbiAgICogT24gQ2hhbmdlXG4gICAqIEBwYXJhbSBldmVudCBcbiAgICogQHJldHVybiB2b2lkXG4gICAqL1xuICBwdWJsaWMgb25DaGFuZ2UoZXZlbnQpOiB2b2lkIHtcbiAgICBsZXQgX3ZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgIHRoaXMudmFsdWUgPSBfdmFsdWU7XG4gICAgdGhpcy5wcm9wYWdhdGVDaGFuZ2UodGhpcy52YWx1ZSk7XG4gICAgaWYgKCF0aGlzLmNvbnRyb2wucGVuZGluZykge1xuICAgICAgdGhpcy5vblRvdWNoZWQoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVmFsaWRhdGVcbiAgICogQHBhcmFtIGNcbiAgICogQHJldHVybiBhbnkgXG4gICAqL1xuICBwdWJsaWMgdmFsaWRhdGUoYzogRm9ybUNvbnRyb2wpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLnZhbGlkYXRlRm4oYyk7XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXIgRGF0ZVxuICAgKiBAcmV0dXJuIHZvaWRcbiAgICovXG4gIHB1YmxpYyBjbGVhckRhdGUoKTogdm9pZCB7XG4gICAgdGhpcy52YWx1ZSA9ICcnO1xuICAgIHRoaXMucHJvcGFnYXRlQ2hhbmdlKHRoaXMudmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBEaXNhYmxlZCBTdGF0ZVxuICAgKiBAcGFyYW0gaXNEaXNhYmxlZCBcbiAgICogQHJldHVybiB2b2lkXG4gICAqL1xuICBwdWJsaWMgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XG4gIH1cbn1cbiJdfQ==