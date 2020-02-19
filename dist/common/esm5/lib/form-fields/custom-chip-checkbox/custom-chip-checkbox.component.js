/**
 * @fileoverview added by tsickle
 * Generated from: lib/form-fields/custom-chip-checkbox/custom-chip-checkbox.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Core
import { Component, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS } from '@angular/forms';
var CustomChipCheckboxComponent = /** @class */ (function () {
    function CustomChipCheckboxComponent() {
        this.key = "id";
        this.text = "name";
        this.selected = "selected";
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
    }
    /**
     * ngOnInit
     * @return void
     */
    /**
     * ngOnInit
     * @return {?} void
     */
    CustomChipCheckboxComponent.prototype.ngOnInit = /**
     * ngOnInit
     * @return {?} void
     */
    function () {
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
    CustomChipCheckboxComponent.prototype.writeValue = /**
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
    CustomChipCheckboxComponent.prototype.registerOnChange = /**
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
    CustomChipCheckboxComponent.prototype.registerOnTouched = /**
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
     * @param {?} value
     * @return {?} void
     */
    CustomChipCheckboxComponent.prototype.onChange = /**
     * On Change
     * @param {?} value
     * @return {?} void
     */
    function (value) {
        this.value[this.selected] = !value[this.selected];
        this.onTouched();
        this.propagateChange(this.value);
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
    CustomChipCheckboxComponent.prototype.validate = /**
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
    CustomChipCheckboxComponent.prototype.setDisabledState = /**
     * Set Disabled State
     * @param {?} isDisabled
     * @return {?} void
     */
    function (isDisabled) {
        this.disabled = isDisabled;
    };
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
                            function () { return CustomChipCheckboxComponent; })),
                            multi: true
                        },
                        {
                            provide: NG_VALIDATORS,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return CustomChipCheckboxComponent; })),
                            multi: true
                        }
                    ],
                    styles: [".custom-chip-checkbox{border:1px solid #ced0d5;height:100px;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;position:relative;padding:0 25px;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.custom-chip-checkbox--selected{background-color:#4540de}.custom-chip-checkbox__icon{position:absolute;top:5px;left:10px}.custom-chip-checkbox__name{font-size:17px;color:#1f2430;text-align:center}.custom-chip-checkbox__name--selected{color:#fff}"]
                }] }
    ];
    /** @nocollapse */
    CustomChipCheckboxComponent.ctorParameters = function () { return []; };
    CustomChipCheckboxComponent.propDecorators = {
        key: [{ type: Input }],
        text: [{ type: Input }],
        selected: [{ type: Input }]
    };
    return CustomChipCheckboxComponent;
}());
export { CustomChipCheckboxComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLWNoaXAtY2hlY2tib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY29tbW9uLyIsInNvdXJjZXMiOlsibGliL2Zvcm0tZmllbGRzL2N1c3RvbS1jaGlwLWNoZWNrYm94L2N1c3RvbS1jaGlwLWNoZWNrYm94LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckUsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxhQUFhLEVBQTBCLE1BQU0sZ0JBQWdCLENBQUM7QUFFaEg7SUE0QkU7UUFWUyxRQUFHLEdBQVcsSUFBSSxDQUFDO1FBQ25CLFNBQUksR0FBVyxNQUFNLENBQUM7UUFDdEIsYUFBUSxHQUFXLFVBQVUsQ0FBQztRQVNyQyxJQUFJLENBQUMsZUFBZTs7OztRQUFHLFVBQUMsQ0FBTSxJQUFPLENBQUMsQ0FBQSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxTQUFTOzs7UUFBRyxjQUFRLENBQUMsQ0FBQSxDQUFDO1FBQzNCLElBQUksQ0FBQyxVQUFVOzs7UUFBRyxjQUFRLENBQUMsQ0FBQSxDQUFDO0lBQzlCLENBQUM7SUFFRDs7O09BR0c7Ozs7O0lBQ0ksOENBQVE7Ozs7SUFBZjtJQUNBLENBQUM7SUFFRDs7OztPQUlHOzs7Ozs7SUFDSSxnREFBVTs7Ozs7SUFBakIsVUFBa0IsS0FBVTtRQUMxQixJQUFJLEtBQUssRUFBRTtZQUNULElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1NBQ3BCO0lBQ0gsQ0FBQztJQUVEOzs7O09BSUc7Ozs7OztJQUNJLHNEQUFnQjs7Ozs7SUFBdkIsVUFBd0IsRUFBa0I7UUFDeEMsSUFBSSxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVEOzs7O09BSUc7Ozs7OztJQUNJLHVEQUFpQjs7Ozs7SUFBeEIsVUFBeUIsRUFBWTtRQUNuQyxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUQ7Ozs7T0FJRzs7Ozs7O0lBQ0ksOENBQVE7Ozs7O0lBQWYsVUFBZ0IsS0FBSztRQUNuQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFRDs7OztPQUlHOzs7Ozs7SUFDSSw4Q0FBUTs7Ozs7SUFBZixVQUFnQixDQUFjO1FBQzVCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBRUQ7Ozs7T0FJRzs7Ozs7O0lBQ0ksc0RBQWdCOzs7OztJQUF2QixVQUF3QixVQUFtQjtRQUN6QyxJQUFJLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQztJQUM3QixDQUFDOztnQkFqR0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSwwQkFBMEI7b0JBQ3BDLHcyR0FBb0Q7b0JBRXBELFNBQVMsRUFBRTt3QkFDVDs0QkFDRSxPQUFPLEVBQUUsaUJBQWlCOzRCQUMxQixXQUFXLEVBQUUsVUFBVTs7OzRCQUFDLGNBQU0sT0FBQSwyQkFBMkIsRUFBM0IsQ0FBMkIsRUFBQzs0QkFDMUQsS0FBSyxFQUFFLElBQUk7eUJBQ1o7d0JBQ0Q7NEJBQ0UsT0FBTyxFQUFFLGFBQWE7NEJBQ3RCLFdBQVcsRUFBRSxVQUFVOzs7NEJBQUMsY0FBTSxPQUFBLDJCQUEyQixFQUEzQixDQUEyQixFQUFDOzRCQUMxRCxLQUFLLEVBQUUsSUFBSTt5QkFDWjtxQkFDRjs7aUJBQ0Y7Ozs7O3NCQUVFLEtBQUs7dUJBQ0wsS0FBSzsyQkFDTCxLQUFLOztJQThFUixrQ0FBQztDQUFBLEFBbEdELElBa0dDO1NBakZZLDJCQUEyQjs7O0lBQ3RDLDBDQUE0Qjs7SUFDNUIsMkNBQStCOztJQUMvQiwrQ0FBdUM7O0lBRXZDLDRDQUFrQjs7SUFDbEIsK0NBQXlCOzs7OztJQUN6QixzREFBa0M7Ozs7O0lBQ2xDLGdEQUE0Qjs7Ozs7SUFDNUIsaURBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29yZVxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBmb3J3YXJkUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IsIE5HX1ZBTElEQVRPUlMsIEZvcm1Db250cm9sLCBWYWxpZGF0b3IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1jdXN0b20tY2hpcC1jaGVja2JveCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9jdXN0b20tY2hpcC1jaGVja2JveC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2N1c3RvbS1jaGlwLWNoZWNrYm94LmNvbXBvbmVudC5zY3NzJ10sXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gQ3VzdG9tQ2hpcENoZWNrYm94Q29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gQ3VzdG9tQ2hpcENoZWNrYm94Q29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlXG4gICAgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEN1c3RvbUNoaXBDaGVja2JveENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQ29udHJvbFZhbHVlQWNjZXNzb3IsIFZhbGlkYXRvciB7XG4gIEBJbnB1dCgpIGtleTogc3RyaW5nID0gXCJpZFwiO1xuICBASW5wdXQoKSB0ZXh0OiBzdHJpbmcgPSBcIm5hbWVcIjtcbiAgQElucHV0KCkgc2VsZWN0ZWQ6IHN0cmluZyA9IFwic2VsZWN0ZWRcIjtcblxuICBwdWJsaWMgdmFsdWU6IGFueTtcbiAgcHVibGljIGRpc2FibGVkOiBib29sZWFuO1xuICBwcml2YXRlIHByb3BhZ2F0ZUNoYW5nZTogRnVuY3Rpb247XG4gIHByaXZhdGUgb25Ub3VjaGVkOiBGdW5jdGlvbjtcbiAgcHJpdmF0ZSB2YWxpZGF0ZUZuOiBGdW5jdGlvbjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnByb3BhZ2F0ZUNoYW5nZSA9IChfOiBhbnkpID0+IHsgfTtcbiAgICB0aGlzLm9uVG91Y2hlZCA9ICgpID0+IHsgfTtcbiAgICB0aGlzLnZhbGlkYXRlRm4gPSAoKSA9PiB7IH07XG4gIH1cblxuICAvKipcbiAgICogbmdPbkluaXRcbiAgICogQHJldHVybiB2b2lkXG4gICAqL1xuICBwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogV3JpdGUgYSB2YWx1ZSB0byB0aGUgY29udHJvbFxuICAgKiBAcGFyYW0gdmFsdWVcbiAgICogQHJldHVybiB2b2lkXG4gICAqL1xuICBwdWJsaWMgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVyIGEgZnVuY3Rpb24gdG8gdGVsbCBBbmd1bGFyIHdoZW4gdGhlIHZhbHVlIG9mIHRoZSBpbnB1dCBjaGFuZ2VzXG4gICAqIEBwYXJhbSBmbiBcbiAgICogQHJldHVybiB2b2lkXG4gICAqL1xuICBwdWJsaWMgcmVnaXN0ZXJPbkNoYW5nZShmbjogKF86IGFueSkgPT4ge30pOiB2b2lkIHtcbiAgICB0aGlzLnByb3BhZ2F0ZUNoYW5nZSA9IGZuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVyIGEgZnVuY3Rpb24gdG8gdGVsbCBBbmd1bGFyIHdoZW4gdGhlIGlucHV0IGhhcyBiZWVuIHRvdWNoZWRcbiAgICogQHBhcmFtIGZuIFxuICAgKiBAcmV0dXJuIHZvaWRcbiAgICovXG4gIHB1YmxpYyByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4ge30pOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgLyoqXG4gICAqIE9uIENoYW5nZVxuICAgKiBAcGFyYW0gZXZlbnQgXG4gICAqIEByZXR1cm4gdm9pZFxuICAgKi9cbiAgcHVibGljIG9uQ2hhbmdlKHZhbHVlKSB7XG4gICAgdGhpcy52YWx1ZVt0aGlzLnNlbGVjdGVkXSA9ICF2YWx1ZVt0aGlzLnNlbGVjdGVkXTtcbiAgICB0aGlzLm9uVG91Y2hlZCgpO1xuICAgIHRoaXMucHJvcGFnYXRlQ2hhbmdlKHRoaXMudmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFZhbGlkYXRlXG4gICAqIEBwYXJhbSBjXG4gICAqIEByZXR1cm4gYW55IFxuICAgKi9cbiAgcHVibGljIHZhbGlkYXRlKGM6IEZvcm1Db250cm9sKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy52YWxpZGF0ZUZuKGMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBEaXNhYmxlZCBTdGF0ZVxuICAgKiBAcGFyYW0gaXNEaXNhYmxlZCBcbiAgICogQHJldHVybiB2b2lkXG4gICAqL1xuICBwdWJsaWMgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XG4gIH1cbn1cbiJdfQ==