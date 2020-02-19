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
    (control) => {
        if (control.value !== null && control.value instanceof File) {
            /** @type {?} */
            const file = (/** @type {?} */ (control.value));
            /** @type {?} */
            const fileSize = Math.round((file.size / 1000));
            if (fileSize > size) {
                return { InvalidFileSize: true };
            }
        }
        return null;
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS5zaXplLnZhbGlkYXRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NvbW1vbi8iLCJzb3VyY2VzIjpbImxpYi9oZWxwZXJzL2ZpbGUuc2l6ZS52YWxpZGF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQU9BLE1BQU0sVUFBVSxnQkFBZ0IsQ0FBQyxJQUFZO0lBQ3pDOzs7O0lBQU8sQ0FBQyxPQUF3QixFQUFxQyxFQUFFO1FBQ25FLElBQUksT0FBTyxDQUFDLEtBQUssS0FBSyxJQUFJLElBQUksT0FBTyxDQUFDLEtBQUssWUFBWSxJQUFJLEVBQUU7O2tCQUNuRCxJQUFJLEdBQUcsbUJBQUEsT0FBTyxDQUFDLEtBQUssRUFBUTs7a0JBQzVCLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQztZQUMvQyxJQUFJLFFBQVEsR0FBRyxJQUFJLEVBQUU7Z0JBQ2pCLE9BQU8sRUFBRSxlQUFlLEVBQUUsSUFBSSxFQUFFLENBQUM7YUFDcEM7U0FDSjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUMsRUFBQztBQUNOLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBYnN0cmFjdENvbnRyb2wsIFZhbGlkYXRvckZuIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG4vKipcbiAqIFZhbGlkYXRlIEZpbGUgU2l6ZVxuICogQHBhcmFtIHNpemUgaW4gS0JcbiAqIEByZXR1cm4gVmFsaWRhdG9yRm5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIFZhbGlkYXRlRmlsZVNpemUoc2l6ZTogbnVtYmVyKTogVmFsaWRhdG9yRm4ge1xuICAgIHJldHVybiAoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogeyBba2V5OiBzdHJpbmddOiBib29sZWFuIH0gfCBudWxsID0+IHtcbiAgICAgICAgaWYgKGNvbnRyb2wudmFsdWUgIT09IG51bGwgJiYgY29udHJvbC52YWx1ZSBpbnN0YW5jZW9mIEZpbGUpIHtcbiAgICAgICAgICAgIGNvbnN0IGZpbGUgPSBjb250cm9sLnZhbHVlIGFzIEZpbGU7XG4gICAgICAgICAgICBjb25zdCBmaWxlU2l6ZSA9IE1hdGgucm91bmQoKGZpbGUuc2l6ZSAvIDEwMDApKTsgLy8gY29udmVydCBieXRlcyBpbnRvIEtCXG4gICAgICAgICAgICBpZiAoZmlsZVNpemUgPiBzaXplKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgSW52YWxpZEZpbGVTaXplOiB0cnVlIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfTtcbn0iXX0=