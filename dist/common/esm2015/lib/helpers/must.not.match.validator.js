/**
 * @fileoverview added by tsickle
 * Generated from: lib/helpers/must.not.match.validator.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// custom validator to check that two fields not match
/**
 * @param {?} controlName
 * @param {?} matchingControlName
 * @return {?}
 */
export function MustNotMatch(controlName, matchingControlName) {
    return (/**
     * @param {?} formGroup
     * @return {?}
     */
    (formGroup) => {
        /** @type {?} */
        const control = formGroup.controls[controlName];
        /** @type {?} */
        const matchingControl = formGroup.controls[matchingControlName];
        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // return if another validator has already found an error on the matchingControl
            return;
        }
        // set error on matchingControl if validation fails
        if (control.value === matchingControl.value) {
            matchingControl.setErrors({ mustNotMatch: true });
        }
        else {
            matchingControl.setErrors(null);
        }
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVzdC5ub3QubWF0Y2gudmFsaWRhdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY29tbW9uLyIsInNvdXJjZXMiOlsibGliL2hlbHBlcnMvbXVzdC5ub3QubWF0Y2gudmFsaWRhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBR0EsTUFBTSxVQUFVLFlBQVksQ0FBQyxXQUFtQixFQUFFLG1CQUEyQjtJQUN6RTs7OztJQUFPLENBQUMsU0FBb0IsRUFBRSxFQUFFOztjQUN0QixPQUFPLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUM7O2NBQ3pDLGVBQWUsR0FBRyxTQUFTLENBQUMsUUFBUSxDQUFDLG1CQUFtQixDQUFDO1FBRS9ELElBQUksZUFBZSxDQUFDLE1BQU0sSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFO1lBQzdELGdGQUFnRjtZQUNoRixPQUFPO1NBQ1Y7UUFFRCxtREFBbUQ7UUFDbkQsSUFBSSxPQUFPLENBQUMsS0FBSyxLQUFLLGVBQWUsQ0FBQyxLQUFLLEVBQUU7WUFDekMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1NBQ3JEO2FBQU07WUFDSCxlQUFlLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ25DO0lBQ0wsQ0FBQyxFQUFBO0FBQ0wsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuLy8gY3VzdG9tIHZhbGlkYXRvciB0byBjaGVjayB0aGF0IHR3byBmaWVsZHMgbm90IG1hdGNoXG5leHBvcnQgZnVuY3Rpb24gTXVzdE5vdE1hdGNoKGNvbnRyb2xOYW1lOiBzdHJpbmcsIG1hdGNoaW5nQ29udHJvbE5hbWU6IHN0cmluZykge1xuICAgIHJldHVybiAoZm9ybUdyb3VwOiBGb3JtR3JvdXApID0+IHtcbiAgICAgICAgY29uc3QgY29udHJvbCA9IGZvcm1Hcm91cC5jb250cm9sc1tjb250cm9sTmFtZV07XG4gICAgICAgIGNvbnN0IG1hdGNoaW5nQ29udHJvbCA9IGZvcm1Hcm91cC5jb250cm9sc1ttYXRjaGluZ0NvbnRyb2xOYW1lXTtcblxuICAgICAgICBpZiAobWF0Y2hpbmdDb250cm9sLmVycm9ycyAmJiAhbWF0Y2hpbmdDb250cm9sLmVycm9ycy5tdXN0TWF0Y2gpIHtcbiAgICAgICAgICAgIC8vIHJldHVybiBpZiBhbm90aGVyIHZhbGlkYXRvciBoYXMgYWxyZWFkeSBmb3VuZCBhbiBlcnJvciBvbiB0aGUgbWF0Y2hpbmdDb250cm9sXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBzZXQgZXJyb3Igb24gbWF0Y2hpbmdDb250cm9sIGlmIHZhbGlkYXRpb24gZmFpbHNcbiAgICAgICAgaWYgKGNvbnRyb2wudmFsdWUgPT09IG1hdGNoaW5nQ29udHJvbC52YWx1ZSkge1xuICAgICAgICAgICAgbWF0Y2hpbmdDb250cm9sLnNldEVycm9ycyh7IG11c3ROb3RNYXRjaDogdHJ1ZSB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1hdGNoaW5nQ29udHJvbC5zZXRFcnJvcnMobnVsbCk7XG4gICAgICAgIH1cbiAgICB9XG59Il19