/**
 * @fileoverview added by tsickle
 * Generated from: lib/helpers/must.match.validator.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// custom validator to check that two fields match
/**
 * @param {?} controlName
 * @param {?} matchingControlName
 * @return {?}
 */
export function MustMatch(controlName, matchingControlName) {
    return (/**
     * @param {?} formGroup
     * @return {?}
     */
    function (formGroup) {
        /** @type {?} */
        var control = formGroup.controls[controlName];
        /** @type {?} */
        var matchingControl = formGroup.controls[matchingControlName];
        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // return if another validator has already found an error on the matchingControl
            return;
        }
        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        }
        else {
            matchingControl.setErrors(null);
        }
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVzdC5tYXRjaC52YWxpZGF0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jb21tb24vIiwic291cmNlcyI6WyJsaWIvaGVscGVycy9tdXN0Lm1hdGNoLnZhbGlkYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUdBLE1BQU0sVUFBVSxTQUFTLENBQUMsV0FBbUIsRUFBRSxtQkFBMkI7SUFDdEU7Ozs7SUFBTyxVQUFDLFNBQW9COztZQUNsQixPQUFPLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUM7O1lBQ3pDLGVBQWUsR0FBRyxTQUFTLENBQUMsUUFBUSxDQUFDLG1CQUFtQixDQUFDO1FBRS9ELElBQUksZUFBZSxDQUFDLE1BQU0sSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFO1lBQzdELGdGQUFnRjtZQUNoRixPQUFPO1NBQ1Y7UUFFRCxtREFBbUQ7UUFDbkQsSUFBSSxPQUFPLENBQUMsS0FBSyxLQUFLLGVBQWUsQ0FBQyxLQUFLLEVBQUU7WUFDekMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1NBQ2xEO2FBQU07WUFDSCxlQUFlLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ25DO0lBQ0wsQ0FBQyxFQUFBO0FBQ0wsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuLy8gY3VzdG9tIHZhbGlkYXRvciB0byBjaGVjayB0aGF0IHR3byBmaWVsZHMgbWF0Y2hcbmV4cG9ydCBmdW5jdGlvbiBNdXN0TWF0Y2goY29udHJvbE5hbWU6IHN0cmluZywgbWF0Y2hpbmdDb250cm9sTmFtZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIChmb3JtR3JvdXA6IEZvcm1Hcm91cCkgPT4ge1xuICAgICAgICBjb25zdCBjb250cm9sID0gZm9ybUdyb3VwLmNvbnRyb2xzW2NvbnRyb2xOYW1lXTtcbiAgICAgICAgY29uc3QgbWF0Y2hpbmdDb250cm9sID0gZm9ybUdyb3VwLmNvbnRyb2xzW21hdGNoaW5nQ29udHJvbE5hbWVdO1xuXG4gICAgICAgIGlmIChtYXRjaGluZ0NvbnRyb2wuZXJyb3JzICYmICFtYXRjaGluZ0NvbnRyb2wuZXJyb3JzLm11c3RNYXRjaCkge1xuICAgICAgICAgICAgLy8gcmV0dXJuIGlmIGFub3RoZXIgdmFsaWRhdG9yIGhhcyBhbHJlYWR5IGZvdW5kIGFuIGVycm9yIG9uIHRoZSBtYXRjaGluZ0NvbnRyb2xcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHNldCBlcnJvciBvbiBtYXRjaGluZ0NvbnRyb2wgaWYgdmFsaWRhdGlvbiBmYWlsc1xuICAgICAgICBpZiAoY29udHJvbC52YWx1ZSAhPT0gbWF0Y2hpbmdDb250cm9sLnZhbHVlKSB7XG4gICAgICAgICAgICBtYXRjaGluZ0NvbnRyb2wuc2V0RXJyb3JzKHsgbXVzdE1hdGNoOiB0cnVlIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWF0Y2hpbmdDb250cm9sLnNldEVycm9ycyhudWxsKTtcbiAgICAgICAgfVxuICAgIH1cbn0iXX0=