/**
 * @fileoverview added by tsickle
 * Generated from: lib/form-fields/select/select.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Core
import { Component, Input, forwardRef, Output, EventEmitter } from "@angular/core";
import { NG_VALUE_ACCESSOR, NG_VALIDATORS, FormControl } from "@angular/forms";
export class SelectComponent {
    constructor() {
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
            }
        ];
    }
    /**
     * ngOnInit
     * @return {?} void
     */
    ngOnInit() { }
    /**
     * ngOnChanges
     * @param {?} changes
     * @return {?} void
     */
    ngOnChanges(changes) {
        if (changes) {
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
    onSelectionChange(event) {
        /** @type {?} */
        let _value = event.value;
        this.value = _value;
        this.propagateChange(this.value);
        this.onChange.emit(this.value);
    }
    /**
     * Compare Items
     * @param {?} option
     * @param {?} selected
     * @return {?} boolean
     */
    compareItems(option, selected) {
        if (typeof option !== 'undefined' && typeof selected !== 'undefined') {
            if (typeof option.id !== 'undefined' && typeof selected.id !== 'undefined') {
                return option.id === selected.id;
            }
            else {
                return option === selected;
            }
        }
        return false;
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
     * Set Disabled State
     * @param {?} isDisabled
     * @return {?} void
     */
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
}
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
                        () => SelectComponent)),
                        multi: true
                    },
                    {
                        provide: NG_VALIDATORS,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => SelectComponent)),
                        multi: true
                    }
                ],
                styles: [".control-loading{font-size:26px;color:#22a471;position:absolute;right:-2px;top:-12px;background-color:#fff}"]
            }] }
];
/** @nocollapse */
SelectComponent.ctorParameters = () => [];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NvbW1vbi8iLCJzb3VyY2VzIjpbImxpYi9mb3JtLWZpZWxkcy9zZWxlY3Qvc2VsZWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFxQixLQUFLLEVBQWlCLFVBQVUsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JILE9BQU8sRUFFTCxpQkFBaUIsRUFDakIsYUFBYSxFQUNiLFdBQVcsRUFFWixNQUFNLGdCQUFnQixDQUFDO0FBc0J4QixNQUFNLE9BQU8sZUFBZTtJQXFCMUI7UUFwQlMsZUFBVSxHQUFXLE1BQU0sQ0FBQyxDQUFDLDRCQUE0Qjs7UUFDekQsVUFBSyxHQUFXLEVBQUUsQ0FBQztRQUNuQixnQkFBVyxHQUFXLEVBQUUsQ0FBQztRQUN6QixVQUFLLEdBQVcsUUFBUSxDQUFDLENBQUMsaURBQWlEOztRQUMzRSxRQUFHLEdBQVcsSUFBSSxDQUFDO1FBQ25CLFNBQUksR0FBVyxNQUFNLENBQUM7UUFDdEIsWUFBTyxHQUFlLEVBQUUsQ0FBQztRQUN6QixhQUFRLEdBQVksS0FBSyxDQUFDO1FBQzFCLFlBQU8sR0FBZ0IsSUFBSSxXQUFXLEVBQUUsQ0FBQztRQUN6Qyx1QkFBa0IsR0FBVyxpQkFBaUIsQ0FBQztRQUMvQyxjQUFTLEdBQVksS0FBSyxDQUFDO1FBQzFCLGFBQVEsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQU96RCxZQUFPLEdBQWUsRUFBRSxDQUFDO1FBRzlCLElBQUksQ0FBQyxlQUFlOzs7O1FBQUcsQ0FBQyxDQUFNLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxTQUFTOzs7UUFBRyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUEsQ0FBQztRQUMzQixJQUFJLENBQUMsVUFBVTs7O1FBQUcsR0FBRyxFQUFFLEdBQUcsQ0FBQyxD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QUNMLEtBQUs7bUJBQ0wsS0FBSztzQkFDTCxLQUFLO3VCQUNMLEtBQUs7c0JBQ0wsS0FBSztpQ0FDTCxLQUFLO3dCQUNMLEtBQUs7dUJBQ0wsTUFBTTs7OztJQVhQLHFDQUFxQzs7SUFDckMsZ0NBQTRCOztJQUM1QixzQ0FBa0M7O0lBQ2xDLGdDQUFrQzs7SUFDbEMsOEJBQTRCOztJQUM1QiwrQkFBK0I7O0lBQy9CLGtDQUFrQzs7SUFDbEMsbUNBQW1DOztJQUNuQyxrQ0FBa0Q7O0lBQ2xELDZDQUF3RDs7SUFDeEQsb0NBQW9DOztJQUNwQyxtQ0FBZ0U7O0lBRWhFLGdDQUFrQjs7SUFDbEIsbUNBQXlCOzs7OztJQUN6QiwwQ0FBa0M7Ozs7O0lBQ2xDLG9DQUE0Qjs7Ozs7SUFDNUIscUNBQTZCOztJQUM3QixrQ0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3JlXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25DaGFuZ2VzLCBJbnB1dCwgU2ltcGxlQ2hhbmdlcywgZm9yd2FyZFJlZiwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtcbiAgQ29udHJvbFZhbHVlQWNjZXNzb3IsXG4gIE5HX1ZBTFVFX0FDQ0VTU09SLFxuICBOR19WQUxJREFUT1JTLFxuICBGb3JtQ29udHJvbCxcbiAgVmFsaWRhdG9yXG59IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuXG4vLyBNYXRlcmlhbCBTZWxlY3RcbmltcG9ydCB7IE1hdFNlbGVjdENoYW5nZSB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9zZWxlY3RcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcImFwcC1zZWxlY3RcIixcbiAgdGVtcGxhdGVVcmw6IFwiLi9zZWxlY3QuY29tcG9uZW50Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCIuL3NlbGVjdC5jb21wb25lbnQuc2Nzc1wiXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBTZWxlY3RDb21wb25lbnQpLFxuICAgICAgbXVsdGk6IHRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBTZWxlY3RDb21wb25lbnQpLFxuICAgICAgbXVsdGk6IHRydWVcbiAgICB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgU2VsZWN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBWYWxpZGF0b3Ige1xuICBASW5wdXQoKSBhcHBlYXJhbmNlOiBzdHJpbmcgPSBcImZpbGxcIjsgLy8gc3RhbmRhcmQgfCBvdXRsaW5lIHwgZmlsbFxuICBASW5wdXQoKSBsYWJlbDogc3RyaW5nID0gXCJcIjtcbiAgQElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZyA9IFwiXCI7XG4gIEBJbnB1dCgpIGtleUFzOiBzdHJpbmcgPSBcInNpbmdsZVwiOyAvLyBrZXkgYXMgc2luZ2xlIHZhbHVlIG9yIG9iamVjdCwgc2luZ2xlIHwgb2JqZWN0XG4gIEBJbnB1dCgpIGtleTogc3RyaW5nID0gXCJpZFwiO1xuICBASW5wdXQoKSB0ZXh0OiBzdHJpbmcgPSBcInRleHRcIjtcbiAgQElucHV0KCkgb3B0aW9uczogQXJyYXk8YW55PiA9IFtdO1xuICBASW5wdXQoKSBtdWx0aXBsZTogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBjb250cm9sOiBGb3JtQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgpO1xuICBASW5wdXQoKSByZXF1aXJlZEVyck1lc3NhZ2U6IHN0cmluZyA9IFwiUmVxdWlyZWQgRmllbGQuXCI7XG4gIEBJbnB1dCgpIGlzTG9hZGluZzogYm9vbGVhbiA9IGZhbHNlO1xuICBAT3V0cHV0KCkgb25DaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgcHVibGljIHZhbHVlOiBhbnk7XG4gIHB1YmxpYyBkaXNhYmxlZDogYm9vbGVhbjtcbiAgcHJpdmF0ZSBwcm9wYWdhdGVDaGFuZ2U6IEZ1bmN0aW9uO1xuICBwcml2YXRlIG9uVG91Y2hlZDogRnVuY3Rpb247XG4gIHByaXZhdGUgdmFsaWRhdGVGbjogRnVuY3Rpb247XG4gIHB1YmxpYyBfZXJyb3JzOiBBcnJheTxhbnk+ID0gW107XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5wcm9wYWdhdGVDaGFuZ2UgPSAoXzogYW55KSA9PiB7IH07XG4gICAgdGhpcy5vblRvdWNoZWQgPSAoKSA9PiB7IH07XG4gICAgdGhpcy52YWxpZGF0ZUZuID0gKCkgPT4geyB9O1xuICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9lcnJvcnMgPSBbXG4gICAgICB7XG4gICAgICAgIGtleTogJ3JlcXVpcmVkJyxcbiAgICAgICAgbWVzc2FnZTogdGhpcy5yZXF1aXJlZEVyck1lc3NhZ2VcbiAgICAgIH1cbiAgICBdO1xuICB9XG5cbiAgLyoqXG4gICAqIG5nT25Jbml0XG4gICAqIEByZXR1cm4gdm9pZFxuICAgKi9cbiAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQgeyB9XG5cbiAgLyoqXG4gICAqIG5nT25DaGFuZ2VzXG4gICAqIEBwYXJhbSBjaGFuZ2VzXG4gICAqIEByZXR1cm4gdm9pZFxuICAgKi9cbiAgcHVibGljIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlcykge1xuICAgICAgaWYgKHR5cGVvZiBjaGFuZ2VzLnJlcXVpcmVkRXJyTWVzc2FnZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5fZXJyb3JzLmZpbmRJbmRleCgoeDogYW55KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHgua2V5ID09PSAncmVxdWlyZWQnO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fZXJyb3JzW2luZGV4XS5tZXNzYWdlID0gY2hhbmdlcy5yZXF1aXJlZEVyck1lc3NhZ2UuY3VycmVudFZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBXcml0ZSBhIHZhbHVlIHRvIHRoZSBjb250cm9sXG4gICAqIEBwYXJhbSB2YWx1ZVxuICAgKiBAcmV0dXJuIHZvaWRcbiAgICovXG4gIHB1YmxpYyB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXIgYSBmdW5jdGlvbiB0byB0ZWxsIEFuZ3VsYXIgd2hlbiB0aGUgdmFsdWUgb2YgdGhlIGlucHV0IGNoYW5nZXNcbiAgICogQHBhcmFtIGZuIFxuICAgKiBAcmV0dXJuIHZvaWRcbiAgICovXG4gIHB1YmxpYyByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLnByb3BhZ2F0ZUNoYW5nZSA9IGZuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVyIGEgZnVuY3Rpb24gdG8gdGVsbCBBbmd1bGFyIHdoZW4gdGhlIGlucHV0IGhhcyBiZWVuIHRvdWNoZWRcbiAgICogQHBhcmFtIGZuIFxuICAgKiBAcmV0dXJuIHZvaWRcbiAgICovXG4gIHB1YmxpYyByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBPbiBDaGFuZ2VcbiAgICogQHBhcmFtIGV2ZW50IFxuICAgKiBAcmV0dXJuIHZvaWRcbiAgICovXG4gIHB1YmxpYyBvblNlbGVjdGlvbkNoYW5nZShldmVudDogTWF0U2VsZWN0Q2hhbmdlKSB7XG4gICAgbGV0IF92YWx1ZSA9IGV2ZW50LnZhbHVlO1xuICAgIHRoaXMudmFsdWUgPSBfdmFsdWU7XG4gICAgdGhpcy5wcm9wYWdhdGVDaGFuZ2UodGhpcy52YWx1ZSk7XG4gICAgdGhpcy5vbkNoYW5nZS5lbWl0KHRoaXMudmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbXBhcmUgSXRlbXNcbiAgICogQHBhcmFtIG9wdGlvblxuICAgKiBAcGFyYW0gc2VsZWN0ZWRcbiAgICogQHJldHVybiBib29sZWFuIFxuICAgKi9cbiAgcHVibGljIGNvbXBhcmVJdGVtcyhvcHRpb246IGFueSwgc2VsZWN0ZWQ6IGFueSk6IGJvb2xlYW4ge1xuICAgIGlmICh0eXBlb2Ygb3B0aW9uICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygc2VsZWN0ZWQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBpZiAodHlwZW9mIG9wdGlvbi5pZCAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHNlbGVjdGVkLmlkICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm4gb3B0aW9uLmlkID09PSBzZWxlY3RlZC5pZDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBvcHRpb24gPT09IHNlbGVjdGVkO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogVmFsaWRhdGVcbiAgICogQHBhcmFtIGNcbiAgICogQHJldHVybiBhbnlcbiAgICovXG4gIHB1YmxpYyB2YWxpZGF0ZShjOiBGb3JtQ29udHJvbCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMudmFsaWRhdGVGbihjKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgRGlzYWJsZWQgU3RhdGVcbiAgICogQHBhcmFtIGlzRGlzYWJsZWQgXG4gICAqIEByZXR1cm4gdm9pZFxuICAgKi9cbiAgcHVibGljIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xuICB9XG59XG4iXX0=