/**
 * @fileoverview added by tsickle
 * Generated from: lib/directives/disable.link.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Core
import { Directive, Input, Optional } from '@angular/core';
import { RouterLink, RouterLinkWithHref } from '@angular/router';
var DisableLinkDirective = /** @class */ (function () {
    function DisableLinkDirective(
    // Inject routerLink
    routerLink, routerLinkWithHref) {
        var _this = this;
        /** @type {?} */
        var link = routerLink || routerLinkWithHref;
        // Save original method
        /** @type {?} */
        var onClick = link.onClick;
        // Replace method
        link.onClick = (/**
         * @param {...?} args
         * @return {?}
         */
        function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (_this.disableLink) {
                return routerLinkWithHref ? false : true;
            }
            else {
                return onClick.apply(link, args);
            }
        });
    }
    DisableLinkDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[routerLink][disableLink]'
                },] }
    ];
    /** @nocollapse */
    DisableLinkDirective.ctorParameters = function () { return [
        { type: RouterLink, decorators: [{ type: Optional }] },
        { type: RouterLinkWithHref, decorators: [{ type: Optional }] }
    ]; };
    DisableLinkDirective.propDecorators = {
        disableLink: [{ type: Input }]
    };
    return DisableLinkDirective;
}());
export { DisableLinkDirective };
if (false) {
    /** @type {?} */
    DisableLinkDirective.prototype.disableLink;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzYWJsZS5saW5rLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NvbW1vbi8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmVzL2Rpc2FibGUubGluay5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNELE9BQU8sRUFBRSxVQUFVLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVqRTtJQU9JO0lBQ0ksb0JBQW9CO0lBQ1IsVUFBc0IsRUFDdEIsa0JBQXNDO1FBSHRELGlCQW1CQzs7WUFiUyxJQUFJLEdBQUcsVUFBVSxJQUFJLGtCQUFrQjs7O1lBR3ZDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTztRQUU1QixpQkFBaUI7UUFDakIsSUFBSSxDQUFDLE9BQU87Ozs7UUFBRztZQUFDLGNBQU87aUJBQVAsVUFBTyxFQUFQLHFCQUFPLEVBQVAsSUFBTztnQkFBUCx5QkFBTzs7WUFDbkIsSUFBSSxLQUFJLENBQUMsV0FBVyxFQUFFO2dCQUNsQixPQUFPLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQzthQUM1QztpQkFBTTtnQkFDSCxPQUFPLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO2FBQ3BDO1FBQ0wsQ0FBQyxDQUFBLENBQUM7SUFDTixDQUFDOztnQkExQkosU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSwyQkFBMkI7aUJBQ3hDOzs7O2dCQUpRLFVBQVUsdUJBV1YsUUFBUTtnQkFYSSxrQkFBa0IsdUJBWTlCLFFBQVE7Ozs4QkFMWixLQUFLOztJQXNCViwyQkFBQztDQUFBLEFBM0JELElBMkJDO1NBeEJZLG9CQUFvQjs7O0lBRTdCLDJDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcmVcbmltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJMaW5rLCBSb3V0ZXJMaW5rV2l0aEhyZWYgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1tyb3V0ZXJMaW5rXVtkaXNhYmxlTGlua10nXG59KVxuZXhwb3J0IGNsYXNzIERpc2FibGVMaW5rRGlyZWN0aXZlIHtcblxuICAgIEBJbnB1dCgpIGRpc2FibGVMaW5rOiBib29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIC8vIEluamVjdCByb3V0ZXJMaW5rXG4gICAgICAgIEBPcHRpb25hbCgpIHJvdXRlckxpbms6IFJvdXRlckxpbmssXG4gICAgICAgIEBPcHRpb25hbCgpIHJvdXRlckxpbmtXaXRoSHJlZjogUm91dGVyTGlua1dpdGhIcmVmXG4gICAgKSB7XG5cbiAgICAgICAgY29uc3QgbGluayA9IHJvdXRlckxpbmsgfHwgcm91dGVyTGlua1dpdGhIcmVmO1xuXG4gICAgICAgIC8vIFNhdmUgb3JpZ2luYWwgbWV0aG9kXG4gICAgICAgIGNvbnN0IG9uQ2xpY2sgPSBsaW5rLm9uQ2xpY2s7XG5cbiAgICAgICAgLy8gUmVwbGFjZSBtZXRob2RcbiAgICAgICAgbGluay5vbkNsaWNrID0gKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmRpc2FibGVMaW5rKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJvdXRlckxpbmtXaXRoSHJlZiA/IGZhbHNlIDogdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9uQ2xpY2suYXBwbHkobGluaywgYXJncyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxufSJdfQ==