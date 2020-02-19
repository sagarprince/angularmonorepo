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
        if (control.value === matchingControl.value) {
            matchingControl.setErrors({ mustNotMatch: true });
        }
        else {
            matchingControl.setErrors(null);
        }
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVzdC5ub3QubWF0Y2gudmFsaWRhdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY29tbW9uLyIsInNvdXJjZXMiOlsibGliL2hlbHBlcnMvbXVzdC5ub3QubWF0Y2gudmFsaWRhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBR0EsTUFBTSxVQUFVLFlBQVksQ0FBQyxXQUFtQixFQUFFLG1CQUEyQjtJQUN6RTs7OztJQUFPLFVBQUMsU0FBb0I7O1lBQ2xCLE9BQU8sR0FBRyxTQUFTLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQzs7WUFDekMsZUFBZSxHQUFHLFNBQVMsQ0FBQyxRQUFRLENBQUMsbUJBQW1CLENBQUM7UUFFL0QsSUFBSSxlQUFlLENBQUMsTUFBTSxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUU7WUFDN0QsZ0ZBQWdGO1lBQ2hGLE9BQU87U0FDVjtRQUVELG1EQUFtRDtRQUNuRCxJQUFJLE9BQU8sQ0FBQyxLQUFLLEtBQUssZUFBZSxDQUFDLEtBQUssRUFBRTtZQUN6QyxlQUFlLENBQUMsU0FBUyxDQUFDLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7U0FDckQ7YUFBTTtZQUNILGVBQWUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDbkM7SUFDTCxDQUFDLEVBQUE7QUFDTCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG4vLyBjdXN0b20gdmFsaWRhdG9yIHRvIGNoZWNrIHRoYXQgdHdvIGZpZWxkcyBub3QgbWF0Y2hcbmV4cG9ydCBmdW5jdGlvbiBNdXN0Tm90TWF0Y2goY29udHJvbE5hbWU6IHN0cmluZywgbWF0Y2hpbmdDb250cm9sTmFtZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIChmb3JtR3JvdXA6IEZvcm1Hcm91cCkgPT4ge1xuICAgICAgICBjb25zdCBjb250cm9sID0gZm9ybUdyb3VwLmNvbnRyb2xzW2NvbnRyb2xOYW1lXTtcbiAgICAgICAgY29uc3QgbWF0Y2hpbmdDb250cm9sID0gZm9ybUdyb3VwLmNvbnRyb2xzW21hdGNoaW5nQ29udHJvbE5hbWVdO1xuXG4gICAgICAgIGlmIChtYXRjaGluZ0NvbnRyb2wuZXJyb3JzICYmICFtYXRjaGluZ0NvbnRyb2wuZXJyb3JzLm11c3RNYXRjaCkge1xuICAgICAgICAgICAgLy8gcmV0dXJuIGlmIGFub3RoZXIgdmFsaWRhdG9yIGhhcyBhbHJlYWR5IGZvdW5kIGFuIGVycm9yIG9uIHRoZSBtYXRjaGluZ0NvbnRyb2xcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHNldCBlcnJvciBvbiBtYXRjaGluZ0NvbnRyb2wgaWYgdmFsaWRhdGlvbiBmYWlsc1xuICAgICAgICBpZiAoY29udHJvbC52YWx1ZSA9PT0gbWF0Y2hpbmdDb250cm9sLnZhbHVlKSB7XG4gICAgICAgICAgICBtYXRjaGluZ0NvbnRyb2wuc2V0RXJyb3JzKHsgbXVzdE5vdE1hdGNoOiB0cnVlIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWF0Y2hpbmdDb250cm9sLnNldEVycm9ycyhudWxsKTtcbiAgICAgICAgfVxuICAgIH1cbn0iXX0=