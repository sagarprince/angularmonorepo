/**
 * @fileoverview added by tsickle
 * Generated from: lib/form-fields/custom-chip-checkbox/custom-chip-checkbox.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Core
import { Component, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS } from '@angular/forms';
export class CustomChipCheckboxComponent {
    constructor() {
        this.key = "id";
        this.text = "name";
        this.selected = "selected";
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
    }
    /**
     * ngOnInit
     * @return {?} void
     */
    ngOnInit() {
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
     * @param {?} value
     * @return {?} void
     */
    onChange(value) {
        this.value[this.selected] = !value[this.selected];
        this.onTouched();
        this.propagateChange(this.value);
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
CustomChipCheckboxComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-custom-chip-checkbox',
                template: "<div class=\"custom-chip-checkbox\" [class.custom-chip-checkbox--selected]=\"value[selected]\" (click)=\"onChange(value)\">\n    <div class=\"custom-chip-checkbox__icon\" *ngIf=\"value[selected]\">\n        <img\n            src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMThweCIgaGVpZ2h0PSIxOHB4IiB2aWV3Qm94PSIwIDAgMTggMTgiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDYwLjEgKDg4MTMzKSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT50aWNrPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9IldlbGNvbWUiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJEZXNpcmVkLVJvbGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yNjguMDAwMDAwLCAtNDk5LjAwMDAwMCkiIGZpbGw9IiNGRkZGRkYiIGZpbGwtcnVsZT0ibm9uemVybyI+CiAgICAgICAgICAgIDxnIGlkPSJ0aWNrIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNjguMDAwMDAwLCA0OTkuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTcuNTY2LDIuMDU2ODUzOTMgQzE3LjQxNTk0NTQsMS45MDQ5NDQ0MSAxNy4yMTIzMjc0LDEuODE5NTg4MzIgMTcsMS44MTk1ODgzMiBDMTYuNzg3NjcyNiwxLjgxOTU4ODMyIDE2LjU4NDA1NDYsMS45MDQ5NDQ0MSAxNi40MzQsMi4wNTY4NTM5MyBMOSw5LjU3NDM4MjAyIEw2LjM2Niw2LjkxMDc4NjUyIEM2LjA1MzQwNjgzLDYuNTk0NjgxMDcgNS41NDY1OTMxNyw2LjU5NDY4MTA4IDUuMjM0MDAwMDEsNi45MTA3ODY1MyBDNC45MjE0MDY4NCw3LjIyNjg5MTk3IDQuOTIxNDA2ODQsNy43Mzk0MDAxNyA1LjIzNCw4LjA1NTUwNTYyIEw4LjQzNCwxMS4yOTE0NjA3IEM4LjU4NDA1NDYxLDExLjQ0MzM3MDIgOC43ODc2NzI2LDExLjUyODcyNjMgOSwxMS41Mjg3MjYzIEM5LjIxMjMyNzQsMTEuNTI4NzI2MyA5LjQxNTk0NTM5LDExLjQ0MzM3MDIgOS41NjYsMTEuMjkxNDYwNyBMMTcuNTY2LDMuMjAxNTczMDMgQzE3LjcxNjIyMTYsMy4wNDk4MzI0MiAxNy44MDA2MjkzLDIuODQzOTI2NTggMTcuODAwNjI5MywyLjYyOTIxMzQ4IEMxNy44MDA2MjkzLDIuNDE0NTAwMzggMTcuNzE2MjIxNiwyLjIwODU5NDU1IDE3LjU2NiwyLjA1Njg1MzkzIFoiIGlkPSJQYXRoIj48L3BhdGg+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTcuNjI0LDcuMzE3MzAzMzcgQzE3LjU2NjgzNzUsNy4wMzQwNTk5OSAxNy4zNjQ1ODc2LDYuODAzMTcwNzkgMTcuMDkzNDM1OSw2LjcxMTYwOTQ5IEMxNi44MjIyODQyLDYuNjIwMDQ4MiAxNi41MjM0MjUxLDYuNjgxNzI1MTYgMTYuMzA5NDM1OSw2Ljg3MzQwNzI1IEMxNi4wOTU0NDY3LDcuMDY1MDg5MzQgMTUuOTk4ODM3NSw3LjM1NzY1NTUgMTYuMDU2LDcuNjQwODk4ODggQzE2LjczNTEzODUsMTAuOTk0NTM1MiAxNS4wMTIyOTE2LDE0LjM3MzY2ODggMTEuOTE2ODI0NiwxNS43NTkzMzc4IEM4LjgyMTM1NzU5LDE3LjE0NTAwNjkgNS4xODkzODE2MSwxNi4xNjI5MzA2IDMuMTkwOTI2NjUsMTMuMzk5ODc5MiBDMS4xOTI0NzE2OSwxMC42MzY4Mjc4IDEuMzY3MzM2OTYsNi44MzkxMjQyMyAzLjYxMTA0NDExLDQuMjc1ODE3MjkgQzUuODU0NzUxMjYsMS43MTI1MTAzNCA5LjU2MTI1NjQzLDEuMDc1OTcwNDIgMTIuNTE2LDIuNzQ2NTE2ODUgQzEyLjkwMjU5OTMsMi45NjU0NDUwMSAxMy4zOTE1MDQ0LDIuODI1OTk5MzIgMTMuNjA4LDIuNDM1MDU2MTggQzEzLjgyNDQ5NTYsMi4wNDQxMTMwNCAxMy42ODY1OTkzLDEuNTQ5NzE0NjcgMTMuMywxLjMzMDc4NjUyIEM5LjgzNDc2MzMzLC0wLjYzMTcyMjU2MSA1LjQ5OTA0MTUxLC0wLjAwMzc4NzQ1ODY4IDIuNzE3ODIxNzYsMi44NjMzODUxMSBDLTAuMDYzMzk3OTgwNSw1LjczMDU1NzY4IC0wLjYwMDczMDAzMiwxMC4xMjYyNzY4IDEuNDA2MzU3NjYsMTMuNTkxOTk4NiBDMy40MTM0NDUzNSwxNy4wNTc3MjAzIDcuNDY3NDUyNTcsMTguNzM0MzkwNCAxMS4zMDA5NTYzLDE3LjY4NDI0MDMgQzE1LjEzNDQ1OTksMTYuNjM0MDkwMSAxNy43OTcyNDMxLDEzLjExNzQyMjMgMTcuOCw5LjEwMTEyMzYgQzE3Ljc5OTY5NzQsOC41MDIxMDAxMSAxNy43NDA3NDMxLDcuOTA0NTc4NjggMTcuNjI0LDcuMzE3MzAzMzcgWiIgaWQ9IlBhdGgiPjwvcGF0aD4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+\" />\n    </div>\n    <div class=\"custom-chip-checkbox__name\" [class.custom-chip-checkbox__name--selected]=\"value[selected]\">\n        {{value[text]}}\n    </div>\n</div>",
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => CustomChipCheckboxComponent)),
                        multi: true
                    },
                    {
                        provide: NG_VALIDATORS,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => CustomChipCheckboxComponent)),
                        multi: true
                    }
                ],
                styles: [".custom-chip-checkbox{border:1px solid #ced0d5;height:100px;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;position:relative;padding:0 25px;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.custom-chip-checkbox--selected{background-color:#4540de}.custom-chip-checkbox__icon{position:absolute;top:5px;left:10px}.custom-chip-checkbox__name{font-size:17px;color:#1f2430;text-align:center}.custom-chip-checkbox__name--selected{color:#fff}"]
            }] }
];
/** @nocollapse */
CustomChipCheckboxComponent.ctorParameters = () => [];
CustomChipCheckboxComponent.propDecorators = {
    key: [{ type: Input }],
    text: [{ type: Input }],
    selected: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    CustomChipCheckboxComponent.prototype.key;
    /** @type {?} */
    CustomChipCheckboxComponent.prototype.text;
    /** @type {?} */
    CustomChipCheckboxComponent.prototype.selected;
    /** @type {?} */
    CustomChipCheckboxComponent.prototype.value;
    /** @type {?} */
    CustomChipCheckboxComponent.prototype.disabled;
    /**
     * @type {?}
     * @private
     */
    CustomChipCheckboxComponent.prototype.propagateChange;
    /**
     * @type {?}
     * @private
     */
    CustomChipCheckboxComponent.prototype.onTouched;
    /**
     * @type {?}
     * @private
     */
    CustomChipCheckboxComponent.prototype.validateFn;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLWNoaXAtY2hlY2tib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY29tbW9uLyIsInNvdXJjZXMiOlsibGliL2Zvcm0tZmllbGRzL2N1c3RvbS1jaGlwLWNoZWNrYm94L2N1c3RvbS1jaGlwLWNoZWNrYm94LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckUsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxhQUFhLEVBQTBCLE1BQU0sZ0JBQWdCLENBQUM7QUFtQmhILE1BQU0sT0FBTywyQkFBMkI7SUFXdEM7UUFWUyxRQUFHLEdBQVcsSUFBSSxDQUFDO1FBQ25CLFNBQUksR0FBVyxNQUFNLENBQUM7UUFDdEIsYUFBUSxHQUFXLFVBQVUsQ0FBQztRQVNyQyxJQUFJLENBQUMsZUFBZTs7OztRQUFHLENBQUMsQ0FBTSxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUEsQ0FBQztRQUN2QyxJQUFJLENBQUMsU0FBUzs7O1FBQUcsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFBLENBQUM7UUFDM0IsSUFBSSxDQUFDLFVBQVU7OztRQUFHLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQSxDQUFDO0lBQzlCLENBQUM7Ozs7O0lBTU0sUUFBUTtJQUNmLENBQUM7Ozs7OztJQU9NLFVBQVUsQ0FBQyxLQUFVO1FBQzFCLElBQUksS0FBSyxFQUFFO1lBQ1QsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7U0FDcEI7SUFDSCxDQUFDOzs7Ozs7SUFPTSxnQkFBZ0IsQ0FBQyxFQUFrQjtRQUN4QyxJQUFJLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQztJQUM1QixDQUFDOzs7Ozs7SUFPTSxpQkFBaUIsQ0FBQyxFQUFZO1FBQ25DLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBQ3RCLENBQUM7Ozs7OztJQU9NLFFBQVEsQ0FBQyxLQUFLO1FBQ25CLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbkMsQ0FBQzs7Ozs7O0lBT00sUUFBUSxDQUFDLENBQWM7UUFDNUIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzVCLENBQUM7Ozs7OztJQU9NLGdCQUFnQixDQUFDLFVBQW1CO1FBQ3pDLElBQUksQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDO0lBQzdCLENBQUM7OztZQWpHRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtnQkFDcEMsdzJHQUFvRDtnQkFFcEQsU0FBUyxFQUFFO29CQUNUO3dCQUNFLE9BQU8sRUFBRSxpQkFBaUI7d0JBQzFCLFdBQVcsRUFBRSxVQUFVOzs7d0JBQUMsR0FBRyxFQUFFLENBQUMsMkJBQTJCLEVBQUM7d0JBQzFELEtBQUssRUFBRSxJQUFJO3FCQUNaO29CQUNEO3dCQUNFLE9BQU8sRUFBRSxhQUFhO3dCQUN0QixXQUFXLEVBQUUsVUFBVTs7O3dCQUFDLEdBQUcsRUFBRSxDQUFDLDJCQUEyQixFQUFDO3dCQUMxRCxLQUFLLEVBQUUsSUFBSTtxQkFDWjtpQkFDRjs7YUFDRjs7Ozs7a0JBRUUsS0FBSzttQkFDTCxLQUFLO3VCQUNMLEtBQUs7Ozs7SUFGTiwwQ0FBNEI7O0lBQzVCLDJDQUErQjs7SUFDL0IsK0NBQXVDOztJQUV2Qyw0Q0FBa0I7O0lBQ2xCLCtDQUF5Qjs7Ozs7SUFDekIsc0RBQWtDOzs7OztJQUNsQyxnREFBNEI7Ozs7O0lBQzVCLGlEQUE2QiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcmVcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgZm9yd2FyZFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SLCBOR19WQUxJREFUT1JTLCBGb3JtQ29udHJvbCwgVmFsaWRhdG9yIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtY3VzdG9tLWNoaXAtY2hlY2tib3gnLFxuICB0ZW1wbGF0ZVVybDogJy4vY3VzdG9tLWNoaXAtY2hlY2tib3guY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jdXN0b20tY2hpcC1jaGVja2JveC5jb21wb25lbnQuc2NzcyddLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEN1c3RvbUNoaXBDaGVja2JveENvbXBvbmVudCksXG4gICAgICBtdWx0aTogdHJ1ZVxuICAgIH0sXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEN1c3RvbUNoaXBDaGVja2JveENvbXBvbmVudCksXG4gICAgICBtdWx0aTogdHJ1ZVxuICAgIH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBDdXN0b21DaGlwQ2hlY2tib3hDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBWYWxpZGF0b3Ige1xuICBASW5wdXQoKSBrZXk6IHN0cmluZyA9IFwiaWRcIjtcbiAgQElucHV0KCkgdGV4dDogc3RyaW5nID0gXCJuYW1lXCI7XG4gIEBJbnB1dCgpIHNlbGVjdGVkOiBzdHJpbmcgPSBcInNlbGVjdGVkXCI7XG5cbiAgcHVibGljIHZhbHVlOiBhbnk7XG4gIHB1YmxpYyBkaXNhYmxlZDogYm9vbGVhbjtcbiAgcHJpdmF0ZSBwcm9wYWdhdGVDaGFuZ2U6IEZ1bmN0aW9uO1xuICBwcml2YXRlIG9uVG91Y2hlZDogRnVuY3Rpb247XG4gIHByaXZhdGUgdmFsaWRhdGVGbjogRnVuY3Rpb247XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5wcm9wYWdhdGVDaGFuZ2UgPSAoXzogYW55KSA9PiB7IH07XG4gICAgdGhpcy5vblRvdWNoZWQgPSAoKSA9PiB7IH07XG4gICAgdGhpcy52YWxpZGF0ZUZuID0gKCkgPT4geyB9O1xuICB9XG5cbiAgLyoqXG4gICAqIG5nT25Jbml0XG4gICAqIEByZXR1cm4gdm9pZFxuICAgKi9cbiAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIFdyaXRlIGEgdmFsdWUgdG8gdGhlIGNvbnRyb2xcbiAgICogQHBhcmFtIHZhbHVlXG4gICAqIEByZXR1cm4gdm9pZFxuICAgKi9cbiAgcHVibGljIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlciBhIGZ1bmN0aW9uIHRvIHRlbGwgQW5ndWxhciB3aGVuIHRoZSB2YWx1ZSBvZiB0aGUgaW5wdXQgY2hhbmdlc1xuICAgKiBAcGFyYW0gZm4gXG4gICAqIEByZXR1cm4gdm9pZFxuICAgKi9cbiAgcHVibGljIHJlZ2lzdGVyT25DaGFuZ2UoZm46IChfOiBhbnkpID0+IHt9KTogdm9pZCB7XG4gICAgdGhpcy5wcm9wYWdhdGVDaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlciBhIGZ1bmN0aW9uIHRvIHRlbGwgQW5ndWxhciB3aGVuIHRoZSBpbnB1dCBoYXMgYmVlbiB0b3VjaGVkXG4gICAqIEBwYXJhbSBmbiBcbiAgICogQHJldHVybiB2b2lkXG4gICAqL1xuICBwdWJsaWMgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHt9KTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBPbiBDaGFuZ2VcbiAgICogQHBhcmFtIGV2ZW50IFxuICAgKiBAcmV0dXJuIHZvaWRcbiAgICovXG4gIHB1YmxpYyBvbkNoYW5nZSh2YWx1ZSkge1xuICAgIHRoaXMudmFsdWVbdGhpcy5zZWxlY3RlZF0gPSAhdmFsdWVbdGhpcy5zZWxlY3RlZF07XG4gICAgdGhpcy5vblRvdWNoZWQoKTtcbiAgICB0aGlzLnByb3BhZ2F0ZUNoYW5nZSh0aGlzLnZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBWYWxpZGF0ZVxuICAgKiBAcGFyYW0gY1xuICAgKiBAcmV0dXJuIGFueSBcbiAgICovXG4gIHB1YmxpYyB2YWxpZGF0ZShjOiBGb3JtQ29udHJvbCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMudmFsaWRhdGVGbihjKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgRGlzYWJsZWQgU3RhdGVcbiAgICogQHBhcmFtIGlzRGlzYWJsZWQgXG4gICAqIEByZXR1cm4gdm9pZFxuICAgKi9cbiAgcHVibGljIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xuICB9XG59XG4iXX0=