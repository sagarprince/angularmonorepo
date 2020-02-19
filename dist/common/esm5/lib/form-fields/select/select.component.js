/**
 * @fileoverview added by tsickle
 * Generated from: lib/form-fields/select/select.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Core
import { Component, Input, forwardRef, Output, EventEmitter } from "@angular/core";
import { NG_VALUE_ACCESSOR, NG_VALIDATORS, FormControl } from "@angular/forms";
var SelectComponent = /** @class */ (function () {
    function SelectComponent() {
        this.appearance = "fill"; // standard | outline | fill
        // standard | outline | fill
        this.label = "";
        this.placeholder = "";
        this.keyAs = "single"; // key as single value or object, single | object
        // key as single value or object, single | object
        this.key = "id";
        this.text = "text";
        this.options = [];
        this.multiple = false;
        this.control = new FormControl();
        this.requiredErrMessage = "Required Field.";
        this.isLoading = false;
        this.onChange = new EventEmitter();
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
    SelectComponent.prototype.ngOnInit = /**
     * ngOnInit
     * @return {?} void
     */
    function () { };
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
    SelectComponent.prototype.ngOnChanges = /**
     * ngOnChanges
     * @param {?} changes
     * @return {?} void
     */
    function (changes) {
        if (changes) {
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
    SelectComponent.prototype.writeValue = /**
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
    SelectComponent.prototype.registerOnChange = /**
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
    SelectComponent.prototype.registerOnTouched = /**
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
    SelectComponent.prototype.onSelectionChange = /**
     * On Change
     * @param {?} event
     * @return {?} void
     */
    function (event) {
        /** @type {?} */
        var _value = event.value;
        this.value = _value;
        this.propagateChange(this.value);
        this.onChange.emit(this.value);
    };
    /**
     * Compare Items
     * @param option
     * @param selected
     * @return boolean
     */
    /**
     * Compare Items
     * @param {?} option
     * @param {?} selected
     * @return {?} boolean
     */
    SelectComponent.prototype.compareItems = /**
     * Compare Items
     * @param {?} option
     * @param {?} selected
     * @return {?} boolean
     */
    function (option, selected) {
        if (typeof option !== 'undefined' && typeof selected !== 'undefined') {
            if (typeof option.id !== 'undefined' && typeof selected.id !== 'undefined') {
                return option.id === selected.id;
            }
            else {
                return option === selected;
            }
        }
        return false;
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
    SelectComponent.prototype.validate = /**
     * Validate
     * @param {?} c
     * @return {?} any
     */
    function (c) {
        return this.validateFn(c);
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
    SelectComponent.prototype.setDisabledState = /**
     * Set Disabled State
     * @param {?} isDisabled
     * @return {?} void
     */
    function (isDisabled) {
        this.disabled = isDisabled;
    };
    SelectComponent.decorators = [
        { type: Component, args: [{
                    selector: "app-select",
                    template: "<mat-form-field [appearance]=\"appearance\">\n  <mat-label>{{label}}</mat-label>\n  <mat-select [placeholder]=\"placeholder\" [value]=\"value\" [compareWith]=\"compareItems\" [formControl]=\"control\"\n    (selectionChange)=\"onSelectionChange($event)\" [multiple]=\"multiple ? true : null\">\n    <mat-option *ngFor=\"let option of options\" [value]=\"keyAs == 'object' ? option : option[key]\">\n      {{ option[text] }}\n    </mat-option>\n  </mat-select>\n  <mat-error>{{_errors | getErrorMessages: control.errors}}</mat-error>\n  <div class=\"control-loading\" *ngIf=\"isLoading\">\n    <i class=\"fa fa-spin fa-circle-o-notch\"></i>\n  </div>\n</mat-form-field>",
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return SelectComponent; })),
                            multi: true
                        },
                        {
                            provide: NG_VALIDATORS,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return SelectComponent; })),
                            multi: true
                        }
                    ],
                    styles: [".control-loading{font-size:26px;color:#22a471;position:absolute;right:-2px;top:-12px;background-color:#fff}"]
                }] }
    ];
    /** @nocollapse */
    SelectComponent.ctorParameters = function () { return []; };
    SelectComponent.propDecorators = {
        appearance: [{ type: Input }],
        label: [{ type: Input }],
        placeholder: [{ type: Input }],
        keyAs: [{ type: Input }],
        key: [{ type: Input }],
        text: [{ type: Input }],
        options: [{ type: Input }],
        multiple: [{ type: Input }],
        control: [{ type: Input }],
        requiredErrMessage: [{ type: Input }],
        isLoading: [{ type: Input }],
        onChange: [{ type: Output }]
    };
    return SelectComponent;
}());
export { SelectComponent };
if (false) {
    /** @type {?} */
    SelectComponent.prototype.appearance;
    /** @type {?} */
    SelectComponent.prototype.label;
    /** @type {?} */
    SelectComponent.prototype.placeholder;
    /** @type {?} */
    SelectComponent.prototype.keyAs;
    /** @type {?} */
    SelectComponent.prototype.key;
    /** @type {?} */
    SelectComponent.prototype.text;
    /** @type {?} */
    SelectComponent.prototype.options;
    /** @type {?} */
    SelectComponent.prototype.multiple;
    /** @type {?} */
    SelectComponent.prototype.control;
    /** @type {?} */
    SelectComponent.prototype.requiredErrMessage;
    /** @type {?} */
    SelectComponent.prototype.isLoading;
    /** @type {?} */
    SelectComponent.prototype.onChange;
    /** @type {?} */
    SelectComponent.prototype.value;
    /** @type {?} */
    SelectComponent.prototype.disabled;
    /**
     * @type {?}
     * @private
     */
    SelectComponent.prototype.propagateChange;
    /**
     * @type {?}
     * @private
     */
    SelectComponent.prototype.onTouched;
    /**
     * @type {?}
     * @private
     */
    SelectComponent.prototype.validateFn;
    /** @type {?} */
    SelectComponent.prototype._errors;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NvbW1vbi8iLCJzb3VyY2VzIjpbImxpYi9mb3JtLWZpZWxkcy9zZWxlY3Qvc2VsZWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFxQixLQUFLLEVBQWlCLFVBQVUsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JILE9BQU8sRUFFTCxpQkFBaUIsRUFDakIsYUFBYSxFQUNiLFdBQVcsRUFFWixNQUFNLGdCQUFnQixDQUFDO0FBS3hCO0lBc0NFO1FBcEJTLGVBQVUsR0FBVyxNQUFNLENBQUMsQ0FBQyw0QkFBNEI7O1FBQ3pELFVBQUssR0FBVyxFQUFFLENBQUM7UUFDbkIsZ0JBQVcsR0FBVyxFQUFFLENBQUM7UUFDekIsVUFBSyxHQUFXLFFBQVEsQ0FBQyxDQUFDLGlEQUFpRDs7UUFDM0UsUUFBRyxHQUFXLElBQUksQ0FBQztRQUNuQixTQUFJLEdBQVcsTUFBTSxDQUFDO1FBQ3RCLFlBQU8sR0FBZSxFQUFFLENBQUM7UUFDekIsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUMxQixZQUFPLEdBQWdCLElBQUksV0FBVyxFQUFFLENBQUM7UUFDekMsdUJBQWtCLEdBQVcsaUJBQWlCLENBQUM7UUFDL0MsY0FBUyxHQUFZLEtBQUssQ0FBQztRQUMxQixhQUFRLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUFPekQsWUFBTyxHQUFlLEVBQUUsQ0FBQztRQUc5QixJQUFJLENBQUMsZUFBZTs7OztRQUFHLFVBQUMsQ0FBTSxJQUFPLENBQUMsQ0FBQSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxTQUFTOzs7UUFBRyxjQUFRLENBQUMsQ0FBQSxDQUFDO1FBQzNCLElBQUksQ0FBQyxVQUFVOzs7UUFBRyxjQUFRLENBQUMsQ0FBQSxDQUFDO1FBQzVCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FB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OzRCQUNFLE9BQU8sRUFBRSxhQUFhOzRCQUN0QixXQUFXLEVBQUUsVUFBVTs7OzRCQUFDLGNBQU0sT0FBQSxlQUFlLEVBQWYsQ0FBZSxFQUFDOzRCQUM5QyxLQUFLLEVBQUUsSUFBSTt5QkFDWjtxQkFDRjs7aUJBQ0Y7Ozs7OzZCQUVFLEtBQUs7d0JBQ0wsS0FBSzs4QkFDTCxLQUFLO3dCQUNMLEtBQUs7c0JBQ0wsS0FBSzt1QkFDTCxLQUFLOzBCQUNMLEtBQUs7MkJBQ0wsS0FBSzswQkFDTCxLQUFLO3FDQUNMLEtBQUs7NEJBQ0wsS0FBSzsyQkFDTCxNQUFNOztJQXVIVCxzQkFBQztDQUFBLEFBcEpELElBb0pDO1NBbklZLGVBQWU7OztJQUMxQixxQ0FBcUM7O0lBQ3JDLGdDQUE0Qjs7SUFDNUIsc0NBQWtDOztJQUNsQyxnQ0FBa0M7O0lBQ2xDLDhCQUE0Qjs7SUFDNUIsK0JBQStCOztJQUMvQixrQ0FBa0M7O0lBQ2xDLG1DQUFtQzs7SUFDbkMsa0NBQWtEOztJQUNsRCw2Q0FBd0Q7O0lBQ3hELG9DQUFvQzs7SUFDcEMsbUNBQWdFOztJQUVoRSxnQ0FBa0I7O0lBQ2xCLG1DQUF5Qjs7Ozs7SUFDekIsMENBQWtDOzs7OztJQUNsQyxvQ0FBNEI7Ozs7O0lBQzVCLHFDQUE2Qjs7SUFDN0Isa0NBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29yZVxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uQ2hhbmdlcywgSW5wdXQsIFNpbXBsZUNoYW5nZXMsIGZvcndhcmRSZWYsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7XG4gIENvbnRyb2xWYWx1ZUFjY2Vzc29yLFxuICBOR19WQUxVRV9BQ0NFU1NPUixcbiAgTkdfVkFMSURBVE9SUyxcbiAgRm9ybUNvbnRyb2wsXG4gIFZhbGlkYXRvclxufSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcblxuLy8gTWF0ZXJpYWwgU2VsZWN0XG5pbXBvcnQgeyBNYXRTZWxlY3RDaGFuZ2UgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvc2VsZWN0XCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJhcHAtc2VsZWN0XCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vc2VsZWN0LmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wiLi9zZWxlY3QuY29tcG9uZW50LnNjc3NcIl0sXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gU2VsZWN0Q29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gU2VsZWN0Q29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlXG4gICAgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFNlbGVjdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBDb250cm9sVmFsdWVBY2Nlc3NvciwgVmFsaWRhdG9yIHtcbiAgQElucHV0KCkgYXBwZWFyYW5jZTogc3RyaW5nID0gXCJmaWxsXCI7IC8vIHN0YW5kYXJkIHwgb3V0bGluZSB8IGZpbGxcbiAgQElucHV0KCkgbGFiZWw6IHN0cmluZyA9IFwiXCI7XG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmcgPSBcIlwiO1xuICBASW5wdXQoKSBrZXlBczogc3RyaW5nID0gXCJzaW5nbGVcIjsgLy8ga2V5IGFzIHNpbmdsZSB2YWx1ZSBvciBvYmplY3QsIHNpbmdsZSB8IG9iamVjdFxuICBASW5wdXQoKSBrZXk6IHN0cmluZyA9IFwiaWRcIjtcbiAgQElucHV0KCkgdGV4dDogc3RyaW5nID0gXCJ0ZXh0XCI7XG4gIEBJbnB1dCgpIG9wdGlvbnM6IEFycmF5PGFueT4gPSBbXTtcbiAgQElucHV0KCkgbXVsdGlwbGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgY29udHJvbDogRm9ybUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woKTtcbiAgQElucHV0KCkgcmVxdWlyZWRFcnJNZXNzYWdlOiBzdHJpbmcgPSBcIlJlcXVpcmVkIEZpZWxkLlwiO1xuICBASW5wdXQoKSBpc0xvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQE91dHB1dCgpIG9uQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIHB1YmxpYyB2YWx1ZTogYW55O1xuICBwdWJsaWMgZGlzYWJsZWQ6IGJvb2xlYW47XG4gIHByaXZhdGUgcHJvcGFnYXRlQ2hhbmdlOiBGdW5jdGlvbjtcbiAgcHJpdmF0ZSBvblRvdWNoZWQ6IEZ1bmN0aW9uO1xuICBwcml2YXRlIHZhbGlkYXRlRm46IEZ1bmN0aW9uO1xuICBwdWJsaWMgX2Vycm9yczogQXJyYXk8YW55PiA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMucHJvcGFnYXRlQ2hhbmdlID0gKF86IGFueSkgPT4geyB9O1xuICAgIHRoaXMub25Ub3VjaGVkID0gKCkgPT4geyB9O1xuICAgIHRoaXMudmFsaWRhdGVGbiA9ICgpID0+IHsgfTtcbiAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgdGhpcy5fZXJyb3JzID0gW1xuICAgICAge1xuICAgICAgICBrZXk6ICdyZXF1aXJlZCcsXG4gICAgICAgIG1lc3NhZ2U6IHRoaXMucmVxdWlyZWRFcnJNZXNzYWdlXG4gICAgICB9XG4gICAgXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBuZ09uSW5pdFxuICAgKiBAcmV0dXJuIHZvaWRcbiAgICovXG4gIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHsgfVxuXG4gIC8qKlxuICAgKiBuZ09uQ2hhbmdlc1xuICAgKiBAcGFyYW0gY2hhbmdlc1xuICAgKiBAcmV0dXJuIHZvaWRcbiAgICovXG4gIHB1YmxpYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZXMpIHtcbiAgICAgIGlmICh0eXBlb2YgY2hhbmdlcy5yZXF1aXJlZEVyck1lc3NhZ2UgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMuX2Vycm9ycy5maW5kSW5kZXgoKHg6IGFueSkgPT4ge1xuICAgICAgICAgIHJldHVybiB4LmtleSA9PT0gJ3JlcXVpcmVkJztcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuX2Vycm9yc1tpbmRleF0ubWVzc2FnZSA9IGNoYW5nZXMucmVxdWlyZWRFcnJNZXNzYWdlLmN1cnJlbnRWYWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogV3JpdGUgYSB2YWx1ZSB0byB0aGUgY29udHJvbFxuICAgKiBAcGFyYW0gdmFsdWVcbiAgICogQHJldHVybiB2b2lkXG4gICAqL1xuICBwdWJsaWMgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVyIGEgZnVuY3Rpb24gdG8gdGVsbCBBbmd1bGFyIHdoZW4gdGhlIHZhbHVlIG9mIHRoZSBpbnB1dCBjaGFuZ2VzXG4gICAqIEBwYXJhbSBmbiBcbiAgICogQHJldHVybiB2b2lkXG4gICAqL1xuICBwdWJsaWMgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5wcm9wYWdhdGVDaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlciBhIGZ1bmN0aW9uIHRvIHRlbGwgQW5ndWxhciB3aGVuIHRoZSBpbnB1dCBoYXMgYmVlbiB0b3VjaGVkXG4gICAqIEBwYXJhbSBmbiBcbiAgICogQHJldHVybiB2b2lkXG4gICAqL1xuICBwdWJsaWMgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gIH1cblxuICAvKipcbiAgICogT24gQ2hhbmdlXG4gICAqIEBwYXJhbSBldmVudCBcbiAgICogQHJldHVybiB2b2lkXG4gICAqL1xuICBwdWJsaWMgb25TZWxlY3Rpb25DaGFuZ2UoZXZlbnQ6IE1hdFNlbGVjdENoYW5nZSkge1xuICAgIGxldCBfdmFsdWUgPSBldmVudC52YWx1ZTtcbiAgICB0aGlzLnZhbHVlID0gX3ZhbHVlO1xuICAgIHRoaXMucHJvcGFnYXRlQ2hhbmdlKHRoaXMudmFsdWUpO1xuICAgIHRoaXMub25DaGFuZ2UuZW1pdCh0aGlzLnZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb21wYXJlIEl0ZW1zXG4gICAqIEBwYXJhbSBvcHRpb25cbiAgICogQHBhcmFtIHNlbGVjdGVkXG4gICAqIEByZXR1cm4gYm9vbGVhbiBcbiAgICovXG4gIHB1YmxpYyBjb21wYXJlSXRlbXMob3B0aW9uOiBhbnksIHNlbGVjdGVkOiBhbnkpOiBib29sZWFuIHtcbiAgICBpZiAodHlwZW9mIG9wdGlvbiAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHNlbGVjdGVkICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgaWYgKHR5cGVvZiBvcHRpb24uaWQgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBzZWxlY3RlZC5pZCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuIG9wdGlvbi5pZCA9PT0gc2VsZWN0ZWQuaWQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gb3B0aW9uID09PSBzZWxlY3RlZDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIFZhbGlkYXRlXG4gICAqIEBwYXJhbSBjXG4gICAqIEByZXR1cm4gYW55XG4gICAqL1xuICBwdWJsaWMgdmFsaWRhdGUoYzogRm9ybUNvbnRyb2wpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLnZhbGlkYXRlRm4oYyk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IERpc2FibGVkIFN0YXRlXG4gICAqIEBwYXJhbSBpc0Rpc2FibGVkIFxuICAgKiBAcmV0dXJuIHZvaWRcbiAgICovXG4gIHB1YmxpYyBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmRpc2FibGVkID0gaXNEaXNhYmxlZDtcbiAgfVxufVxuIl19