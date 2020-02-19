/**
 * @fileoverview added by tsickle
 * Generated from: lib/helpers/file.size.validator.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Validate File Size
 * @param {?} size in KB
 * @return {?} ValidatorFn
 */
export function ValidateFileSize(size) {
    return (/**
     * @param {?} control
     * @return {?}
     */
    function (control) {
        if (control.value !== null && control.value instanceof File) {
            /** @type {?} */
            var file = (/** @type {?} */ (control.value));
            /** @type {?} */
            var fileSize = Math.round((file.size / 1000));
            if (fileSize > size) {
                return { InvalidFileSize: true };
            }
        }
        return null;
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS5zaXplLnZhbGlkYXRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NvbW1vbi8iLCJzb3VyY2VzIjpbImxpYi9oZWxwZXJzL2ZpbGUuc2l6ZS52YWxpZGF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQU9BLE1BQU0sVUFBVSxnQkFBZ0IsQ0FBQyxJQUFZO0lBQ3pDOzs7O0lBQU8sVUFBQyxPQUF3QjtRQUM1QixJQUFJLE9BQU8sQ0FBQyxLQUFLLEtBQUssSUFBSSxJQUFJLE9BQU8sQ0FBQyxLQUFLLFlBQVksSUFBSSxFQUFFOztnQkFDbkQsSUFBSSxHQUFHLG1CQUFBLE9BQU8sQ0FBQyxLQUFLLEVBQVE7O2dCQUM1QixRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUM7WUFDL0MsSUFBSSxRQUFRLEdBQUcsSUFBSSxFQUFFO2dCQUNqQixPQUFPLEVBQUUsZUFBZSxFQUFFLElBQUksRUFBRSxDQUFDO2FBQ3BDO1NBQ0o7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDLEVBQUM7QUFDTixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sLCBWYWxpZGF0b3JGbiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuLyoqXG4gKiBWYWxpZGF0ZSBGaWxlIFNpemVcbiAqIEBwYXJhbSBzaXplIGluIEtCXG4gKiBAcmV0dXJuIFZhbGlkYXRvckZuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBWYWxpZGF0ZUZpbGVTaXplKHNpemU6IG51bWJlcik6IFZhbGlkYXRvckZuIHtcbiAgICByZXR1cm4gKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IHsgW2tleTogc3RyaW5nXTogYm9vbGVhbiB9IHwgbnVsbCA9PiB7XG4gICAgICAgIGlmIChjb250cm9sLnZhbHVlICE9PSBudWxsICYmIGNvbnRyb2wudmFsdWUgaW5zdGFuY2VvZiBGaWxlKSB7XG4gICAgICAgICAgICBjb25zdCBmaWxlID0gY29udHJvbC52YWx1ZSBhcyBGaWxlO1xuICAgICAgICAgICAgY29uc3QgZmlsZVNpemUgPSBNYXRoLnJvdW5kKChmaWxlLnNpemUgLyAxMDAwKSk7IC8vIGNvbnZlcnQgYnl0ZXMgaW50byBLQlxuICAgICAgICAgICAgaWYgKGZpbGVTaXplID4gc2l6ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7IEludmFsaWRGaWxlU2l6ZTogdHJ1ZSB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH07XG59Il19