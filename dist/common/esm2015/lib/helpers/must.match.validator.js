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
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        }
        else {
            matchingControl.setErrors(null);
        }
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVzdC5tYXRjaC52YWxpZGF0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jb21tb24vIiwic291cmNlcyI6WyJsaWIvaGVscGVycy9tdXN0Lm1hdGNoLnZhbGlkYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUdBLE1BQU0sVUFBVSxTQUFTLENBQUMsV0FBbUIsRUFBRSxtQkFBMkI7SUFDdEU7Ozs7SUFBTyxDQUFDLFNBQW9CLEVBQUUsRUFBRTs7Y0FDdEIsT0FBTyxHQUFHLFNBQVMsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDOztjQUN6QyxlQUFlLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQztRQUUvRCxJQUFJLGVBQWUsQ0FBQyxNQUFNLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRTtZQUM3RCxnRkFBZ0Y7WUFDaEYsT0FBTztTQUNWO1FBRUQsbURBQW1EO1FBQ25ELElBQUksT0FBTyxDQUFDLEtBQUssS0FBSyxlQUFlLENBQUMsS0FBSyxFQUFFO1lBQ3pDLGVBQWUsQ0FBQyxTQUFTLENBQUMsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztTQUNsRDthQUFNO1lBQ0gsZUFBZSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNuQztJQUNMLENBQUMsRUFBQTtBQUNMLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbi8vIGN1c3RvbSB2YWxpZGF0b3IgdG8gY2hlY2sgdGhhdCB0d28gZmllbGRzIG1hdGNoXG5leHBvcnQgZnVuY3Rpb24gTXVzdE1hdGNoKGNvbnRyb2xOYW1lOiBzdHJpbmcsIG1hdGNoaW5nQ29udHJvbE5hbWU6IHN0cmluZykge1xuICAgIHJldHVybiAoZm9ybUdyb3VwOiBGb3JtR3JvdXApID0+IHtcbiAgICAgICAgY29uc3QgY29udHJvbCA9IGZvcm1Hcm91cC5jb250cm9sc1tjb250cm9sTmFtZV07XG4gICAgICAgIGNvbnN0IG1hdGNoaW5nQ29udHJvbCA9IGZvcm1Hcm91cC5jb250cm9sc1ttYXRjaGluZ0NvbnRyb2xOYW1lXTtcblxuICAgICAgICBpZiAobWF0Y2hpbmdDb250cm9sLmVycm9ycyAmJiAhbWF0Y2hpbmdDb250cm9sLmVycm9ycy5tdXN0TWF0Y2gpIHtcbiAgICAgICAgICAgIC8vIHJldHVybiBpZiBhbm90aGVyIHZhbGlkYXRvciBoYXMgYWxyZWFkeSBmb3VuZCBhbiBlcnJvciBvbiB0aGUgbWF0Y2hpbmdDb250cm9sXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBzZXQgZXJyb3Igb24gbWF0Y2hpbmdDb250cm9sIGlmIHZhbGlkYXRpb24gZmFpbHNcbiAgICAgICAgaWYgKGNvbnRyb2wudmFsdWUgIT09IG1hdGNoaW5nQ29udHJvbC52YWx1ZSkge1xuICAgICAgICAgICAgbWF0Y2hpbmdDb250cm9sLnNldEVycm9ycyh7IG11c3RNYXRjaDogdHJ1ZSB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1hdGNoaW5nQ29udHJvbC5zZXRFcnJvcnMobnVsbCk7XG4gICAgICAgIH1cbiAgICB9XG59Il19