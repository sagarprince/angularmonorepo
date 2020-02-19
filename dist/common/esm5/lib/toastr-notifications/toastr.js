/**
 * @fileoverview added by tsickle
 * Generated from: lib/toastr-notifications/toastr.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Toastr = /** @class */ (function () {
    function Toastr(type, message, title, data) {
        this.type = type;
        this.message = message;
        this.title = title;
        this.data = data;
        this.config = {
            position: '',
            animate: "slideFromLeft",
            dismiss: "auto",
            enableHTML: false,
            titleClass: "",
            messageClass: "",
            toastTimeout: 3000,
            showCloseButton: false
        };
    }
    /**
     * @return {?}
     */
    Toastr.prototype.dismiss = /**
     * @return {?}
     */
    function () {
        this.toastrManager.dismissToastr(this);
    };
    return Toastr;
}());
export { Toastr };
if (false) {
    /** @type {?} */
    Toastr.prototype.id;
    /** @type {?} */
    Toastr.prototype.toastrManager;
    /** @type {?} */
    Toastr.prototype.config;
    /** @type {?} */
    Toastr.prototype.timeoutId;
    /** @type {?} */
    Toastr.prototype.type;
    /** @type {?} */
    Toastr.prototype.message;
    /** @type {?} */
    Toastr.prototype.title;
    /** @type {?} */
    Toastr.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3RyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY29tbW9uLyIsInNvdXJjZXMiOlsibGliL3RvYXN0ci1ub3RpZmljYXRpb25zL3RvYXN0ci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBO0lBZUUsZ0JBQ1MsSUFBWSxFQUNaLE9BQWUsRUFDZixLQUFjLEVBQ2QsSUFBYTtRQUhiLFNBQUksR0FBSixJQUFJLENBQVE7UUFDWixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQ2YsVUFBSyxHQUFMLEtBQUssQ0FBUztRQUNkLFNBQUksR0FBSixJQUFJLENBQVM7UUFoQnRCLFdBQU0sR0FBUTtZQUNaLFFBQVEsRUFBRSxFQUFFO1lBQ1osT0FBTyxFQUFFLGVBQWU7WUFDeEIsT0FBTyxFQUFFLE1BQU07WUFDZixVQUFVLEVBQUUsS0FBSztZQUNqQixVQUFVLEVBQUUsRUFBRTtZQUNkLFlBQVksRUFBRSxFQUFFO1lBQ2hCLFlBQVksRUFBRSxJQUFJO1lBQ2xCLGVBQWUsRUFBRSxLQUFLO1NBQ3ZCLENBQUM7SUFRQyxDQUFDOzs7O0lBRUcsd0JBQU87OztJQUFkO1FBQ0UsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUNILGFBQUM7QUFBRCxDQUFDLEFBekJELElBeUJDOzs7O0lBeEJDLG9CQUFXOztJQUNYLCtCQUE2Qjs7SUFDN0Isd0JBU0U7O0lBQ0YsMkJBQWU7O0lBR2Isc0JBQW1COztJQUNuQix5QkFBc0I7O0lBQ3RCLHVCQUFxQjs7SUFDckIsc0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVG9hc3RyTWFuYWdlciB9IGZyb20gXCIuL3RvYXN0ci5zZXJ2aWNlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVG9hc3RyIHtcclxuICBpZDogbnVtYmVyO1xyXG4gIHRvYXN0ck1hbmFnZXI6IFRvYXN0ck1hbmFnZXI7XHJcbiAgY29uZmlnOiBhbnkgPSB7XHJcbiAgICBwb3NpdGlvbjogJycsXHJcbiAgICBhbmltYXRlOiBcInNsaWRlRnJvbUxlZnRcIixcclxuICAgIGRpc21pc3M6IFwiYXV0b1wiLFxyXG4gICAgZW5hYmxlSFRNTDogZmFsc2UsXHJcbiAgICB0aXRsZUNsYXNzOiBcIlwiLFxyXG4gICAgbWVzc2FnZUNsYXNzOiBcIlwiLFxyXG4gICAgdG9hc3RUaW1lb3V0OiAzMDAwLFxyXG4gICAgc2hvd0Nsb3NlQnV0dG9uOiBmYWxzZVxyXG4gIH07XHJcbiAgdGltZW91dElkOiBhbnk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIHR5cGU6IHN0cmluZyxcclxuICAgIHB1YmxpYyBtZXNzYWdlOiBzdHJpbmcsXHJcbiAgICBwdWJsaWMgdGl0bGU/OiBzdHJpbmcsXHJcbiAgICBwdWJsaWMgZGF0YT86IE9iamVjdFxyXG4gICkge31cclxuXHJcbiAgcHVibGljIGRpc21pc3MoKSB7XHJcbiAgICB0aGlzLnRvYXN0ck1hbmFnZXIuZGlzbWlzc1RvYXN0cih0aGlzKTtcclxuICB9XHJcbn1cclxuIl19