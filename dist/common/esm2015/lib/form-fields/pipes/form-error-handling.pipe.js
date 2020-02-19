/**
 * @fileoverview added by tsickle
 * Generated from: lib/form-fields/pipes/form-error-handling.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
export class FormErrorHandlingPipe {
    /**
     * @param {?} value
     * @param {?} controlErrors
     * @return {?}
     */
    transform(value, controlErrors) {
        /** @type {?} */
        let error = '';
        /** @type {?} */
        let i = 0;
        while (i < value.length) {
            /** @type {?} */
            let x = value[i];
            if (controlErrors && controlErrors.hasOwnProperty(x.key) && controlErrors[x.key]) {
                error = x.message;
                break;
            }
            i++;
        }
        return error;
    }
}
FormErrorHandlingPipe.decorators = [
    { type: Pipe, args: [{
                name: 'getErrorMessages'
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1lcnJvci1oYW5kbGluZy5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY29tbW9uLyIsInNvdXJjZXMiOlsibGliL2Zvcm0tZmllbGRzL3BpcGVzL2Zvcm0tZXJyb3ItaGFuZGxpbmcucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBS3BELE1BQU0sT0FBTyxxQkFBcUI7Ozs7OztJQUNoQyxTQUFTLENBQUMsS0FBaUIsRUFBRSxhQUFrQjs7WUFDekMsS0FBSyxHQUFHLEVBQUU7O1lBQ1YsQ0FBQyxHQUFHLENBQUM7UUFDVCxPQUFPLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFOztnQkFDbkIsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDaEIsSUFBSSxhQUFhLElBQUksYUFBYSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksYUFBYSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDaEYsS0FBSyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUM7Z0JBQ2xCLE1BQU07YUFDUDtZQUNELENBQUMsRUFBRSxDQUFDO1NBQ0w7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7OztZQWhCRixJQUFJLFNBQUM7Z0JBQ0osSUFBSSxFQUFFLGtCQUFrQjthQUN6QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQFBpcGUoe1xuICBuYW1lOiAnZ2V0RXJyb3JNZXNzYWdlcydcbn0pXG5leHBvcnQgY2xhc3MgRm9ybUVycm9ySGFuZGxpbmdQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybSh2YWx1ZTogQXJyYXk8YW55PiwgY29udHJvbEVycm9yczogYW55KTogYW55IHtcbiAgICBsZXQgZXJyb3IgPSAnJztcbiAgICBsZXQgaSA9IDA7XG4gICAgd2hpbGUgKGkgPCB2YWx1ZS5sZW5ndGgpIHtcbiAgICAgIGxldCB4ID0gdmFsdWVbaV07XG4gICAgICBpZiAoY29udHJvbEVycm9ycyAmJiBjb250cm9sRXJyb3JzLmhhc093blByb3BlcnR5KHgua2V5KSAmJiBjb250cm9sRXJyb3JzW3gua2V5XSkge1xuICAgICAgICBlcnJvciA9IHgubWVzc2FnZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBpKys7XG4gICAgfVxuICAgIHJldHVybiBlcnJvcjtcbiAgfVxufVxuIl19