/**
 * @fileoverview added by tsickle
 * Generated from: lib/form-fields/input/input.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// Core
import { Component, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS, FormControl } from '@angular/forms';
var InputComponent = /** @class */ (function () {
    function InputComponent() {
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
        function (_) { });
        this.onTouched = (/**
         * @return {?}
         */
        function () { });
        this.validateFn = (/**
         * @return {?}
         */
        function () { });
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
     * @return void
     */
    /**
     * ngOnInit
     * @return {?} void
     */
    InputComponent.prototype.ngOnInit = /**
     * ngOnInit
     * @return {?} void
     */
    function () {
        this.inputType = this.type === 'password' ? 'text' : this.type;
    };
    /**
     * ngOnChanges
     * @param changes
     * @return void
     */
    /**
     * ngOnChanges
     * @param {?} changes
     * @return {?} void
     */
    InputComponent.prototype.ngOnChanges = /**
     * ngOnChanges
     * @param {?} changes
     * @return {?} void
     */
    function (changes) {
        var _a, _b;
        if (changes) {
            if (typeof changes.errors !== 'undefined') {
                if (changes.errors.firstChange) {
                    (_a = this._errors).push.apply(_a, tslib_1.__spread(changes.errors.currentValue));
                }
            }
            if (typeof changes.errors !== 'undefined') {
                if (changes.errors.firstChange) {
                    (_b = this._errors).push.apply(_b, tslib_1.__spread(changes.errors.currentValue));
                }
            }
            if (typeof changes.requiredErrMessage !== 'undefined') {
                /** @type {?} */
                var index = this._errors.findIndex((/**
                 * @param {?} x
                 * @return {?}
                 */
                function (x) {
                    return x.key === 'required';
                }));
                this._errors[index].message = changes.requiredErrMessage.currentValue;
            }
            if (typeof changes.patternErrMessage !== 'undefined') {
                /** @type {?} */
                var index = this._errors.findIndex((/**
                 * @param {?} x
                 * @return {?}
                 */
                function (x) {
                    return x.key === 'pattern';
                }));
                this._errors[index].message = changes.patternErrMessage.currentValue;
            }
            if (typeof changes.emailErrMessage !== 'undefined') {
                /** @type {?} */
                var index = this._errors.findIndex((/**
                 * @param {?} x
                 * @return {?}
                 */
                function (x) {
                    return x.key === 'email';
                }));
                this._errors[index].message = changes.emailErrMessage.currentValue;
            }
            if (typeof changes.minLengthErrMessage !== 'undefined') {
                /** @type {?} */
                var index = this._errors.findIndex((/**
                 * @param {?} x
                 * @return {?}
                 */
                function (x) {
                    return x.key === 'minlength';
                }));
                this._errors[index].message = changes.minLengthErrMessage.currentValue;
            }
            if (typeof changes.maxLengthErrMessage !== 'undefined') {
                /** @type {?} */
                var index = this._errors.findIndex((/**
                 * @param {?} x
                 * @return {?}
                 */
                function (x) {
                    return x.key === 'maxlength';
                }));
                this._errors[index].message = changes.maxLengthErrMessage.currentValue;
            }
            if (typeof changes.invalidErrMessage !== 'undefined') {
                /** @type {?} */
                var index = this._errors.findIndex((/**
                 * @param {?} x
                 * @return {?}
                 */
                function (x) {
                    return x.key === 'invalid';
                }));
                this._errors[index].message = changes.invalidErrMessage.currentValue;
            }
            if (typeof changes.mustMatchErrMessage !== 'undefined') {
                /** @type {?} */
                var index = this._errors.findIndex((/**
                 * @param {?} x
                 * @return {?}
                 */
                function (x) {
                    return x.key === 'mustMatch';
                }));
                this._errors[index].message = changes.mustMatchErrMessage.currentValue;
            }
            if (typeof changes.mustNotMatchErrMessage !== 'undefined') {
                /** @type {?} */
                var index = this._errors.findIndex((/**
                 * @param {?} x
                 * @return {?}
                 */
                function (x) {
                    return x.key === 'mustNotMatch';
                }));
                this._errors[index].message = changes.mustNotMatchErrMessage.currentValue;
            }
        }
    };
    /**
     * Write a value to the control
     * @param value
     * @return void
     */
    /**
     * Write a value to the control
     * @param {?} value
     * @return {?} void
     */
    InputComponent.prototype.writeValue = /**
     * Write a value to the control
     * @param {?} value
     * @return {?} void
     */
    function (value) {
        if (value) {
            this.value = value;
        }
    };
    /**
     * Register a function to tell Angular when the value of the input changes
     * @param fn
     * @return void
     */
    /**
     * Register a function to tell Angular when the value of the input changes
     * @param {?} fn
     * @return {?} void
     */
    InputComponent.prototype.registerOnChange = /**
     * Register a function to tell Angular when the value of the input changes
     * @param {?} fn
     * @return {?} void
     */
    function (fn) {
        this.propagateChange = fn;
    };
    /**
     * Register a function to tell Angular when the input has been touched
     * @param fn
     * @return void
     */
    /**
     * Register a function to tell Angular when the input has been touched
     * @param {?} fn
     * @return {?} void
     */
    InputComponent.prototype.registerOnTouched = /**
     * Register a function to tell Angular when the input has been touched
     * @param {?} fn
     * @return {?} void
     */
    function (fn) {
        this.onTouched = fn;
    };
    /**
     * On Change
     * @param event
     * @return void
     */
    /**
     * On Change
     * @param {?} event
     * @return {?} void
     */
    InputComponent.prototype.onChange = /**
     * On Change
     * @param {?} event
     * @return {?} void
     */
    function (event) {
        /** @type {?} */
        var _value = event.target.value;
        this.value = _value;
        this.propagateChange(this.value);
        if (!this.control.pending) {
            this.onTouched();
        }
    };
    /**
     * Validate
     * @param c
     * @return any
     */
    /**
     * Validate
     * @param {?} c
     * @return {?} any
     */
    InputComponent.prototype.validate = /**
     * Validate
     * @param {?} c
     * @return {?} any
     */
    function (c) {
        return this.validateFn(c);
    };
    /**
     * Clear Date
     * @return void
     */
    /**
     * Clear Date
     * @return {?} void
     */
    InputComponent.prototype.clearDate = /**
     * Clear Date
     * @return {?} void
     */
    function () {
        this.value = '';
        this.propagateChange(this.value);
    };
    /**
     * Set Disabled State
     * @param isDisabled
     * @return void
     */
    /**
     * Set Disabled State
     * @param {?} isDisabled
     * @return {?} void
     */
    InputComponent.prototype.setDisabledState = /**
     * Set Disabled State
     * @param {?} isDisabled
     * @return {?} void
     */
    function (isDisabled) {
        this.disabled = isDisabled;
    };
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
                            function () { return InputComponent; })),
                            multi: true
                        },
                        {
                            provide: NG_VALIDATORS,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return InputComponent; })),
                            multi: true
                        }
                    ],
                    styles: ["textarea.mat-input-element{resize:none;min-height:90px}.mat-datepicker-toggle{position:absolute;right:-10px;top:-18px}.mat-form-field-should-float .mat-datepicker-toggle{top:-14px}.clear-date-btn{position:absolute;right:25px;top:-14px}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.control-status{position:absolute;top:-24px;right:-14px}.control-loading-status{font-size:20px;color:#22a471;right:-14px}.non-label-field ::ng-deep .mat-form-field-infix{padding:0;border:0}.non-label-field ::ng-deep .mat-form-field-flex{padding-top:1.4em;padding-bottom:1.3em}.non-label-field ::ng-deep .mat-form-field-flex,.non-label-field ::ng-deep input{font-size:16px!important}.non-label-field ::ng-deep .control-status{top:-16px}.password-visibility-icon{position:absolute;top:-6px;right:-20px;left:auto;color:#597084;background-color:#fff;width:60px;height:40px;text-align:center}.password-visibility-icon.password-visible{color:#1f2430}.password-visibility-icon .mat-icon{cursor:pointer}"]
                }] }
    ];
    /** @nocollapse */
    InputComponent.ctorParameters = function () { return []; };
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
    return InputComponent;
}());
export { InputComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY29tbW9uLyIsInNvdXJjZXMiOlsibGliL2Zvcm0tZmllbGRzL2lucHV0L2lucHV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBcUIsS0FBSyxFQUFFLFVBQVUsRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDL0YsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxhQUFhLEVBQUUsV0FBVyxFQUFhLE1BQU0sZ0JBQWdCLENBQUM7QUFFaEg7SUFrREU7UUFoQ1MsU0FBSSxHQUFXLE9BQU8sQ0FBQyxDQUFDLGdDQUFnQzs7UUFDeEQsU0FBSSxHQUFXLE1BQU0sQ0FBQztRQUN0QixlQUFVLEdBQVcsTUFBTSxDQUFDLENBQUMsNEJBQTRCOztRQUN6RCxVQUFLLEdBQVcsRUFBRSxDQUFDO1FBQ25CLGdCQUFXLEdBQVcsRUFBRSxDQUFDO1FBQ3pCLFNBQUksR0FBVyxFQUFFLENBQUM7UUFDbEIsaUJBQVksR0FBVyxLQUFLLENBQUM7UUFDN0IsWUFBTyxHQUFnQixJQUFJLFdBQVcsRUFBRSxDQUFDO1FBQ3pDLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFDMUIsV0FBTSxHQUFlLEVBQUUsQ0FBQztRQUN4Qix1QkFBa0IsR0FBVyxpQkFBaUIsQ0FBQztRQUMvQyxvQkFBZSxHQUFXLDZCQUE2QixDQUFDO1FBQ3hELHdCQUFtQixHQUFXLEVBQUUsQ0FBQztRQUNqQyx3QkFBbUIsR0FBVyxFQUFFLENBQUM7UUFDakMsc0JBQWlCLEdBQVcsRUFBRSxDQUFDO1FBQy9CLHdCQUFtQixHQUFXLEVBQUUsQ0FBQztRQUNqQywyQkFBc0IsR0FBVyxFQUFFLENBQUM7UUFDcEMsc0JBQWlCLEdBQVcsRUFBRSxDQUFDO1FBQy9CLGNBQVMsR0FBWSxLQUFLLENBQUM7UUFDM0IsMEJBQXFCLEdBQVksSUFBSSxDQUFDO1FBRXhDLHNCQUFpQixHQUFZLEtBQUssQ0FB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OztJQUM1QixvQ0FBNkI7O0lBQzdCLCtCQUEwQjs7SUFDMUIsaUNBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29yZVxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uQ2hhbmdlcywgSW5wdXQsIGZvcndhcmRSZWYsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiwgTkdfVkFMSURBVE9SUywgRm9ybUNvbnRyb2wsIFZhbGlkYXRvciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWlucHV0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2lucHV0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vaW5wdXQuY29tcG9uZW50LnNjc3MnXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBJbnB1dENvbXBvbmVudCksXG4gICAgICBtdWx0aTogdHJ1ZVxuICAgIH0sXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IElucHV0Q29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlXG4gICAgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIElucHV0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBWYWxpZGF0b3Ige1xuICBASW5wdXQoKSBtb2RlOiBzdHJpbmcgPSAnaW5wdXQnOyAvLyBpbnB1dCB8IGRhdGVwaWNrZXIgfCB0ZXh0YXJlYVxuICBASW5wdXQoKSB0eXBlOiBzdHJpbmcgPSAndGV4dCc7XG4gIEBJbnB1dCgpIGFwcGVhcmFuY2U6IHN0cmluZyA9ICdmaWxsJzsgLy8gc3RhbmRhcmQgfCBvdXRsaW5lIHwgZmlsbFxuICBASW5wdXQoKSBsYWJlbDogc3RyaW5nID0gJyc7XG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmcgPSAnJztcbiAgQElucHV0KCkgaWNvbjogc3RyaW5nID0gJyc7XG4gIEBJbnB1dCgpIGF1dG9jb21wbGV0ZTogc3RyaW5nID0gJ29mZic7XG4gIEBJbnB1dCgpIGNvbnRyb2w6IEZvcm1Db250cm9sID0gbmV3IEZvcm1Db250cm9sKCk7XG4gIEBJbnB1dCgpIHJlYWRvbmx5OiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGVycm9yczogQXJyYXk8YW55PiA9IFtdO1xuICBASW5wdXQoKSByZXF1aXJlZEVyck1lc3NhZ2U6IHN0cmluZyA9ICdSZXF1aXJlZCBGaWVsZC4nO1xuICBASW5wdXQoKSBlbWFpbEVyck1lc3NhZ2U6IHN0cmluZyA9ICdQbGVhc2UgZW50ZXIgYSB2YWxpZCBlbWFpbC4nO1xuICBASW5wdXQoKSBtaW5MZW5ndGhFcnJNZXNzYWdlOiBzdHJpbmcgPSAnJztcbiAgQElucHV0KCkgbWF4TGVuZ3RoRXJyTWVzc2FnZTogc3RyaW5nID0gJyc7XG4gIEBJbnB1dCgpIHBhdHRlcm5FcnJNZXNzYWdlOiBzdHJpbmcgPSAnJztcbiAgQElucHV0KCkgbXVzdE1hdGNoRXJyTWVzc2FnZTogU3RyaW5nID0gJyc7XG4gIEBJbnB1dCgpIG11c3ROb3RNYXRjaEVyck1lc3NhZ2U6IFN0cmluZyA9ICcnO1xuICBASW5wdXQoKSBpbnZhbGlkRXJyTWVzc2FnZTogU3RyaW5nID0gJyc7XG4gIEBJbnB1dCgpIGlzTG9hZGluZzogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBzaG93Q29udHJvbFN0YXR1c0ljb246IGJvb2xlYW4gPSB0cnVlO1xuXG4gIHB1YmxpYyBpc1Bhc3N3b3JkVmlzaWJsZTogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgaW5wdXRUeXBlOiBzdHJpbmcgPSAnJztcblxuICBwdWJsaWMgdmFsdWU6IHN0cmluZyA9ICcnO1xuICBwdWJsaWMgZGlzYWJsZWQ6IGJvb2xlYW47XG4gIHByaXZhdGUgcHJvcGFnYXRlQ2hhbmdlOiBGdW5jdGlvbjtcbiAgcHJpdmF0ZSBvblRvdWNoZWQ6IEZ1bmN0aW9uO1xuICBwcml2YXRlIHZhbGlkYXRlRm46IEZ1bmN0aW9uO1xuICBwdWJsaWMgX2ljb246IHN0cmluZyA9ICcnO1xuICBwdWJsaWMgX2Vycm9yczogQXJyYXk8YW55PiA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMucHJvcGFnYXRlQ2hhbmdlID0gKF86IGFueSkgPT4geyB9O1xuICAgIHRoaXMub25Ub3VjaGVkID0gKCkgPT4geyB9O1xuICAgIHRoaXMudmFsaWRhdGVGbiA9ICgpID0+IHsgfTtcbiAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgdGhpcy5fZXJyb3JzID0gW1xuICAgICAge1xuICAgICAgICBrZXk6ICdyZXF1aXJlZCcsXG4gICAgICAgIG1lc3NhZ2U6IHRoaXMucmVxdWlyZWRFcnJNZXNzYWdlXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBrZXk6ICdlbWFpbCcsXG4gICAgICAgIG1lc3NhZ2U6IHRoaXMuZW1haWxFcnJNZXNzYWdlXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBrZXk6ICdwYXR0ZXJuJyxcbiAgICAgICAgbWVzc2FnZTogdGhpcy5wYXR0ZXJuRXJyTWVzc2FnZVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAga2V5OiAnbWlubGVuZ3RoJyxcbiAgICAgICAgbWVzc2FnZTogdGhpcy5taW5MZW5ndGhFcnJNZXNzYWdlXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBrZXk6ICdtYXhsZW5ndGgnLFxuICAgICAgICBtZXNzYWdlOiB0aGlzLm1heExlbmd0aEVyck1lc3NhZ2VcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGtleTogJ2ludmFsaWQnLFxuICAgICAgICBtZXNzYWdlOiB0aGlzLmludmFsaWRFcnJNZXNzYWdlXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBrZXk6ICdtdXN0TWF0Y2gnLFxuICAgICAgICBtZXNzYWdlOiB0aGlzLm11c3RNYXRjaEVyck1lc3NhZ2VcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGtleTogJ211c3ROb3RNYXRjaCcsXG4gICAgICAgIG1lc3NhZ2U6IHRoaXMubXVzdE5vdE1hdGNoRXJyTWVzc2FnZVxuICAgICAgfVxuICAgIF07XG4gIH1cblxuICAvKipcbiAgICogbmdPbkluaXRcbiAgICogQHJldHVybiB2b2lkXG4gICAqL1xuICBwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5pbnB1dFR5cGUgPSB0aGlzLnR5cGUgPT09ICdwYXNzd29yZCcgPyAndGV4dCcgOiB0aGlzLnR5cGU7XG4gIH1cblxuICAvKipcbiAgICogbmdPbkNoYW5nZXNcbiAgICogQHBhcmFtIGNoYW5nZXNcbiAgICogQHJldHVybiB2b2lkXG4gICAqL1xuICBwdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzKSB7XG4gICAgICBpZiAodHlwZW9mIGNoYW5nZXMuZXJyb3JzICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBpZiAoY2hhbmdlcy5lcnJvcnMuZmlyc3RDaGFuZ2UpIHtcbiAgICAgICAgICB0aGlzLl9lcnJvcnMucHVzaCguLi5jaGFuZ2VzLmVycm9ycy5jdXJyZW50VmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGNoYW5nZXMuZXJyb3JzICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBpZiAoY2hhbmdlcy5lcnJvcnMuZmlyc3RDaGFuZ2UpIHtcbiAgICAgICAgICB0aGlzLl9lcnJvcnMucHVzaCguLi5jaGFuZ2VzLmVycm9ycy5jdXJyZW50VmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGNoYW5nZXMucmVxdWlyZWRFcnJNZXNzYWdlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLl9lcnJvcnMuZmluZEluZGV4KCh4OiBhbnkpID0+IHtcbiAgICAgICAgICByZXR1cm4geC5rZXkgPT09ICdyZXF1aXJlZCc7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9lcnJvcnNbaW5kZXhdLm1lc3NhZ2UgPSBjaGFuZ2VzLnJlcXVpcmVkRXJyTWVzc2FnZS5jdXJyZW50VmFsdWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGNoYW5nZXMucGF0dGVybkVyck1lc3NhZ2UgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMuX2Vycm9ycy5maW5kSW5kZXgoKHg6IGFueSkgPT4ge1xuICAgICAgICAgIHJldHVybiB4LmtleSA9PT0gJ3BhdHRlcm4nO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fZXJyb3JzW2luZGV4XS5tZXNzYWdlID0gY2hhbmdlcy5wYXR0ZXJuRXJyTWVzc2FnZS5jdXJyZW50VmFsdWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGNoYW5nZXMuZW1haWxFcnJNZXNzYWdlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLl9lcnJvcnMuZmluZEluZGV4KCh4OiBhbnkpID0+IHtcbiAgICAgICAgICByZXR1cm4geC5rZXkgPT09ICdlbWFpbCc7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9lcnJvcnNbaW5kZXhdLm1lc3NhZ2UgPSBjaGFuZ2VzLmVtYWlsRXJyTWVzc2FnZS5jdXJyZW50VmFsdWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGNoYW5nZXMubWluTGVuZ3RoRXJyTWVzc2FnZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5fZXJyb3JzLmZpbmRJbmRleCgoeDogYW55KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHgua2V5ID09PSAnbWlubGVuZ3RoJztcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuX2Vycm9yc1tpbmRleF0ubWVzc2FnZSA9IGNoYW5nZXMubWluTGVuZ3RoRXJyTWVzc2FnZS5jdXJyZW50VmFsdWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGNoYW5nZXMubWF4TGVuZ3RoRXJyTWVzc2FnZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5fZXJyb3JzLmZpbmRJbmRleCgoeDogYW55KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHgua2V5ID09PSAnbWF4bGVuZ3RoJztcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuX2Vycm9yc1tpbmRleF0ubWVzc2FnZSA9IGNoYW5nZXMubWF4TGVuZ3RoRXJyTWVzc2FnZS5jdXJyZW50VmFsdWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGNoYW5nZXMuaW52YWxpZEVyck1lc3NhZ2UgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMuX2Vycm9ycy5maW5kSW5kZXgoKHg6IGFueSkgPT4ge1xuICAgICAgICAgIHJldHVybiB4LmtleSA9PT0gJ2ludmFsaWQnO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fZXJyb3JzW2luZGV4XS5tZXNzYWdlID0gY2hhbmdlcy5pbnZhbGlkRXJyTWVzc2FnZS5jdXJyZW50VmFsdWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGNoYW5nZXMubXVzdE1hdGNoRXJyTWVzc2FnZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5fZXJyb3JzLmZpbmRJbmRleCgoeDogYW55KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHgua2V5ID09PSAnbXVzdE1hdGNoJztcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuX2Vycm9yc1tpbmRleF0ubWVzc2FnZSA9IGNoYW5nZXMubXVzdE1hdGNoRXJyTWVzc2FnZS5jdXJyZW50VmFsdWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGNoYW5nZXMubXVzdE5vdE1hdGNoRXJyTWVzc2FnZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5fZXJyb3JzLmZpbmRJbmRleCgoeDogYW55KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHgua2V5ID09PSAnbXVzdE5vdE1hdGNoJztcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuX2Vycm9yc1tpbmRleF0ubWVzc2FnZSA9IGNoYW5nZXMubXVzdE5vdE1hdGNoRXJyTWVzc2FnZS5jdXJyZW50VmFsdWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFdyaXRlIGEgdmFsdWUgdG8gdGhlIGNvbnRyb2xcbiAgICogQHBhcmFtIHZhbHVlXG4gICAqIEByZXR1cm4gdm9pZFxuICAgKi9cbiAgcHVibGljIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlciBhIGZ1bmN0aW9uIHRvIHRlbGwgQW5ndWxhciB3aGVuIHRoZSB2YWx1ZSBvZiB0aGUgaW5wdXQgY2hhbmdlc1xuICAgKiBAcGFyYW0gZm4gXG4gICAqIEByZXR1cm4gdm9pZFxuICAgKi9cbiAgcHVibGljIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMucHJvcGFnYXRlQ2hhbmdlID0gZm47XG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXIgYSBmdW5jdGlvbiB0byB0ZWxsIEFuZ3VsYXIgd2hlbiB0aGUgaW5wdXQgaGFzIGJlZW4gdG91Y2hlZFxuICAgKiBAcGFyYW0gZm4gXG4gICAqIEByZXR1cm4gdm9pZFxuICAgKi9cbiAgcHVibGljIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgLyoqXG4gICAqIE9uIENoYW5nZVxuICAgKiBAcGFyYW0gZXZlbnQgXG4gICAqIEByZXR1cm4gdm9pZFxuICAgKi9cbiAgcHVibGljIG9uQ2hhbmdlKGV2ZW50KTogdm9pZCB7XG4gICAgbGV0IF92YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICB0aGlzLnZhbHVlID0gX3ZhbHVlO1xuICAgIHRoaXMucHJvcGFnYXRlQ2hhbmdlKHRoaXMudmFsdWUpO1xuICAgIGlmICghdGhpcy5jb250cm9sLnBlbmRpbmcpIHtcbiAgICAgIHRoaXMub25Ub3VjaGVkKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFZhbGlkYXRlXG4gICAqIEBwYXJhbSBjXG4gICAqIEByZXR1cm4gYW55IFxuICAgKi9cbiAgcHVibGljIHZhbGlkYXRlKGM6IEZvcm1Db250cm9sKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy52YWxpZGF0ZUZuKGMpO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFyIERhdGVcbiAgICogQHJldHVybiB2b2lkXG4gICAqL1xuICBwdWJsaWMgY2xlYXJEYXRlKCk6IHZvaWQge1xuICAgIHRoaXMudmFsdWUgPSAnJztcbiAgICB0aGlzLnByb3BhZ2F0ZUNoYW5nZSh0aGlzLnZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgRGlzYWJsZWQgU3RhdGVcbiAgICogQHBhcmFtIGlzRGlzYWJsZWQgXG4gICAqIEByZXR1cm4gdm9pZFxuICAgKi9cbiAgcHVibGljIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xuICB9XG59XG4iXX0=