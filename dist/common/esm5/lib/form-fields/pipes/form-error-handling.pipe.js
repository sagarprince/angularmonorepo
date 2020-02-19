/**
 * @fileoverview added by tsickle
 * Generated from: lib/form-fields/pipes/form-error-handling.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
var FormErrorHandlingPipe = /** @class */ (function () {
    function FormErrorHandlingPipe() {
    }
    /**
     * @param {?} value
     * @param {?} controlErrors
     * @return {?}
     */
    FormErrorHandlingPipe.prototype.transform = /**
     * @param {?} value
     * @param {?} controlErrors
     * @return {?}
     */
    function (value, controlErrors) {
        /** @type {?} */
        var error = '';
        /** @type {?} */
        var i = 0;
        while (i < value.length) {
            /** @type {?} */
            var x = value[i];
            if (controlErrors && controlErrors.hasOwnProperty(x.key) && controlErrors[x.key]) {
                error = x.message;
                break;
            }
            i++;
        }
        return error;
    };
    FormErrorHandlingPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'getErrorMessages'
                },] }
    ];
    return FormErrorHandlingPipe;
}());
export { FormErrorHandlingPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1lcnJvci1oYW5kbGluZy5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY29tbW9uLyIsInNvdXJjZXMiOlsibGliL2Zvcm0tZmllbGRzL3BpcGVzL2Zvcm0tZXJyb3ItaGFuZGxpbmcucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBRXBEO0lBQUE7SUFpQkEsQ0FBQzs7Ozs7O0lBYkMseUNBQVM7Ozs7O0lBQVQsVUFBVSxLQUFpQixFQUFFLGFBQWtCOztZQUN6QyxLQUFLLEdBQUcsRUFBRTs7WUFDVixDQUFDLEdBQUcsQ0FBQztRQUNULE9BQU8sQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUU7O2dCQUNuQixDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNoQixJQUFJLGFBQWEsSUFBSSxhQUFhLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxhQUFhLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUNoRixLQUFLLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQztnQkFDbEIsTUFBTTthQUNQO1lBQ0QsQ0FBQyxFQUFFLENBQUM7U0FDTDtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7Z0JBaEJGLElBQUksU0FBQztvQkFDSixJQUFJLEVBQUUsa0JBQWtCO2lCQUN6Qjs7SUFlRCw0QkFBQztDQUFBLEFBakJELElBaUJDO1NBZFkscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AUGlwZSh7XG4gIG5hbWU6ICdnZXRFcnJvck1lc3NhZ2VzJ1xufSlcbmV4cG9ydCBjbGFzcyBGb3JtRXJyb3JIYW5kbGluZ1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKHZhbHVlOiBBcnJheTxhbnk+LCBjb250cm9sRXJyb3JzOiBhbnkpOiBhbnkge1xuICAgIGxldCBlcnJvciA9ICcnO1xuICAgIGxldCBpID0gMDtcbiAgICB3aGlsZSAoaSA8IHZhbHVlLmxlbmd0aCkge1xuICAgICAgbGV0IHggPSB2YWx1ZVtpXTtcbiAgICAgIGlmIChjb250cm9sRXJyb3JzICYmIGNvbnRyb2xFcnJvcnMuaGFzT3duUHJvcGVydHkoeC5rZXkpICYmIGNvbnRyb2xFcnJvcnNbeC5rZXldKSB7XG4gICAgICAgIGVycm9yID0geC5tZXNzYWdlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGkrKztcbiAgICB9XG4gICAgcmV0dXJuIGVycm9yO1xuICB9XG59XG4iXX0=