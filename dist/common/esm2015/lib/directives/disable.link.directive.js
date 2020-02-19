/**
 * @fileoverview added by tsickle
 * Generated from: lib/directives/disable.link.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Core
import { Directive, Input, Optional } from '@angular/core';
import { RouterLink, RouterLinkWithHref } from '@angular/router';
export class DisableLinkDirective {
    /**
     * @param {?} routerLink
     * @param {?} routerLinkWithHref
     */
    constructor(
    // Inject routerLink
    routerLink, routerLinkWithHref) {
        /** @type {?} */
        const link = routerLink || routerLinkWithHref;
        // Save original method
        /** @type {?} */
        const onClick = link.onClick;
        // Replace method
        link.onClick = (/**
         * @param {...?} args
         * @return {?}
         */
        (...args) => {
            if (this.disableLink) {
                return routerLinkWithHref ? false : true;
            }
            else {
                return onClick.apply(link, args);
            }
        });
    }
}
DisableLinkDirective.decorators = [
    { type: Directive, args: [{
                selector: '[routerLink][disableLink]'
            },] }
];
/** @nocollapse */
DisableLinkDirective.ctorParameters = () => [
    { type: RouterLink, decorators: [{ type: Optional }] },
    { type: RouterLinkWithHref, decorators: [{ type: Optional }] }
];
DisableLinkDirective.propDecorators = {
    disableLink: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    DisableLinkDirective.prototype.disableLink;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzYWJsZS5saW5rLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NvbW1vbi8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmVzL2Rpc2FibGUubGluay5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNELE9BQU8sRUFBRSxVQUFVLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUtqRSxNQUFNLE9BQU8sb0JBQW9COzs7OztJQUk3QjtJQUNJLG9CQUFvQjtJQUNSLFVBQXNCLEVBQ3RCLGtCQUFzQzs7Y0FHNUMsSUFBSSxHQUFHLFVBQVUsSUFBSSxrQkFBa0I7OztjQUd2QyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU87UUFFNUIsaUJBQWlCO1FBQ2pCLElBQUksQ0FBQyxPQUFPOzs7O1FBQUcsQ0FBQyxHQUFHLElBQUksRUFBRSxFQUFFO1lBQ3ZCLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtnQkFDbEIsT0FBTyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7YUFDNUM7aUJBQU07Z0JBQ0gsT0FBTyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQzthQUNwQztRQUNMLENBQUMsQ0FBQSxDQUFDO0lBQ04sQ0FBQzs7O1lBMUJKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsMkJBQTJCO2FBQ3hDOzs7O1lBSlEsVUFBVSx1QkFXVixRQUFRO1lBWEksa0JBQWtCLHVCQVk5QixRQUFROzs7MEJBTFosS0FBSzs7OztJQUFOLDJDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcmVcbmltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJMaW5rLCBSb3V0ZXJMaW5rV2l0aEhyZWYgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1tyb3V0ZXJMaW5rXVtkaXNhYmxlTGlua10nXG59KVxuZXhwb3J0IGNsYXNzIERpc2FibGVMaW5rRGlyZWN0aXZlIHtcblxuICAgIEBJbnB1dCgpIGRpc2FibGVMaW5rOiBib29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIC8vIEluamVjdCByb3V0ZXJMaW5rXG4gICAgICAgIEBPcHRpb25hbCgpIHJvdXRlckxpbms6IFJvdXRlckxpbmssXG4gICAgICAgIEBPcHRpb25hbCgpIHJvdXRlckxpbmtXaXRoSHJlZjogUm91dGVyTGlua1dpdGhIcmVmXG4gICAgKSB7XG5cbiAgICAgICAgY29uc3QgbGluayA9IHJvdXRlckxpbmsgfHwgcm91dGVyTGlua1dpdGhIcmVmO1xuXG4gICAgICAgIC8vIFNhdmUgb3JpZ2luYWwgbWV0aG9kXG4gICAgICAgIGNvbnN0IG9uQ2xpY2sgPSBsaW5rLm9uQ2xpY2s7XG5cbiAgICAgICAgLy8gUmVwbGFjZSBtZXRob2RcbiAgICAgICAgbGluay5vbkNsaWNrID0gKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmRpc2FibGVMaW5rKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJvdXRlckxpbmtXaXRoSHJlZiA/IGZhbHNlIDogdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9uQ2xpY2suYXBwbHkobGluaywgYXJncyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxufSJdfQ==