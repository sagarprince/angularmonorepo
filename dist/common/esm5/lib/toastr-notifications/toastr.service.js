/**
 * @fileoverview added by tsickle
 * Generated from: lib/toastr-notifications/toastr.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Core
import { Injectable, ApplicationRef, ComponentFactoryResolver, Injector, ReflectiveInjector, NgZone } from "@angular/core";
import { Subject } from "rxjs";
// Config
import { ToastrOptions } from "./toastr.options";
import { Toastr } from "./toastr";
// Component
import { ToastrComponent } from "./toastr.component";
/**
 * @record
 * @template T
 */
export function IImplicitContext() { }
if (false) {
    /** @type {?|undefined} */
    IImplicitContext.prototype.$implicit;
}
var ToastrManager = /** @class */ (function () {
    function ToastrManager(_applicationRef, _componentFactoryResolver, _injector, ngZone, options) {
        this._applicationRef = _applicationRef;
        this._componentFactoryResolver = _componentFactoryResolver;
        this._injector = _injector;
        this.ngZone = ngZone;
        this.options = options;
        this.toastrContainers = [];
        this.index = 0;
        this.toastClicked = new Subject();
    }
    // Create Toastr Component
    // Create Toastr Component
    /**
     * @private
     * @template T
     * @param {?} type
     * @param {?=} providers
     * @return {?}
     */
    ToastrManager.prototype.createToastrComponent = 
    // Create Toastr Component
    /**
     * @private
     * @template T
     * @param {?} type
     * @param {?=} providers
     * @return {?}
     */
    function (type, providers) {
        if (providers === void 0) { providers = []; }
        // Resolve a factory for creating components of type `type`.
        /** @type {?} */
        var factory = this._componentFactoryResolver.resolveComponentFactory((/** @type {?} */ (type)));
        // Resolve and create an injector with the specified providers.
        /** @type {?} */
        var _providers = ReflectiveInjector.resolve(providers);
        /** @type {?} */
        var injector = ReflectiveInjector.fromResolvedProviders(_providers, this._injector);
        // Create new node for inserting into document.
        /** @type {?} */
        var newNode = document.createElement("div");
        newNode.id = "toastr-node-" + Math.floor(Math.random() * 200);
        document.querySelector("body").appendChild(newNode);
        // Create a component using the previously resolved factory & injector.
        /** @type {?} */
        var componentRef = factory.create(injector, [], newNode);
        // Insert new component node into document body.
        this.attachToApplication(componentRef);
        return componentRef;
    };
    // Inserts the component in the root application node.
    // Inserts the component in the root application node.
    /**
     * @private
     * @template T
     * @param {?} componentRef
     * @return {?}
     */
    ToastrManager.prototype.attachToApplication = 
    // Inserts the component in the root application node.
    /**
     * @private
     * @template T
     * @param {?} componentRef
     * @return {?}
     */
    function (componentRef) {
        this._applicationRef.attachView(componentRef.hostView);
    };
    // Detaches the component from the root application node.
    // Detaches the component from the root application node.
    /**
     * @private
     * @template T
     * @param {?} componentRef
     * @return {?}
     */
    ToastrManager.prototype.detachFromApplication = 
    // Detaches the component from the root application node.
    /**
     * @private
     * @template T
     * @param {?} componentRef
     * @return {?}
     */
    function (componentRef) {
        this._applicationRef.detachView(componentRef.hostView);
    };
    /**
     * @private
     * @param {?} position
     * @return {?}
     */
    ToastrManager.prototype.isToastrContainerExist = /**
     * @private
     * @param {?} position
     * @return {?}
     */
    function (position) {
        if (this.toastrContainers.length > 0) {
            /** @type {?} */
            var i = this.toastrContainers.findIndex((/**
             * @param {?} x
             * @return {?}
             */
            function (x) { return x.position === position; }));
            if (i > -1) {
                return true;
            }
        }
        return false;
    };
    /**
     * @private
     * @param {?} position
     * @return {?}
     */
    ToastrManager.prototype.getToastrComponentRef = /**
     * @private
     * @param {?} position
     * @return {?}
     */
    function (position) {
        if (this.toastrContainers.length > 0) {
            /** @type {?} */
            var container = this.toastrContainers.find((/**
             * @param {?} x
             * @return {?}
             */
            function (x) { return x.position === position; }));
            return container ? container.ref : null;
        }
        return null;
    };
    /**
     * @param {?} toast
     * @return {?}
     */
    ToastrManager.prototype.createTimeout = /**
     * @param {?} toast
     * @return {?}
     */
    function (toast) {
        var _this = this;
        /** @type {?} */
        var task;
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        function () {
            task = setTimeout((/**
             * @return {?}
             */
            function () { return _this.ngZone.run((/**
             * @return {?}
             */
            function () { return _this.clearToast(toast); })); }), toast.config.toastTimeout);
        }));
        return task.toString();
    };
    /**
     * @param {?} toast
     * @param {?=} options
     * @return {?}
     */
    ToastrManager.prototype.setupToast = /**
     * @param {?} toast
     * @param {?=} options
     * @return {?}
     */
    function (toast, options) {
        toast.id = ++this.index;
        if (options && options.hasOwnProperty("toastTimeout")) {
            options.dismiss = "auto";
        }
        /** @type {?} */
        var customConfig = Object.assign({}, this.options, options || {});
        Object.keys(toast.config).forEach((/**
         * @param {?} k
         * @return {?}
         */
        function (k) {
            if (customConfig.hasOwnProperty(k)) {
                toast.config[k] = customConfig[k];
            }
        }));
        if (toast.config.dismiss === "auto") {
            toast.timeoutId = this.createTimeout(toast);
        }
        toast.toastrManager = this; // bind ToastrManager instance to Toastr
        // bind ToastrManager instance to Toastr
        /** @type {?} */
        var position = toast.config.position;
        if (this.isToastrContainerExist(position)) {
            this.getToastrComponentRef(position).instance.addToastr(toast);
        }
        return toast;
    };
    /**
     * @private
     * @param {?} toast
     * @return {?}
     */
    ToastrManager.prototype.clearToast = /**
     * @private
     * @param {?} toast
     * @return {?}
     */
    function (toast) {
        /** @type {?} */
        var position = toast.config.position;
        if (this.isToastrContainerExist(position)) {
            /** @type {?} */
            var instance = this.getToastrComponentRef(position).instance;
            instance.removeToastr(toast);
        }
    };
    /**
     * @private
     * @return {?}
     */
    ToastrManager.prototype.clearAllToasts = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.toastrContainers.length > 0) {
            this.toastrContainers.forEach((/**
             * @param {?} component
             * @return {?}
             */
            function (component) {
                console.log(component);
                /** @type {?} */
                var ref = component.ref;
                /** @type {?} */
                var instance = component.ref.instance;
                instance.removeAllToasts();
                _this.dispose(ref);
            }));
        }
    };
    /**
     * @private
     * @param {?} toastrComponentRef
     * @return {?}
     */
    ToastrManager.prototype.dispose = /**
     * @private
     * @param {?} toastrComponentRef
     * @return {?}
     */
    function (toastrComponentRef) {
        if (toastrComponentRef) {
            /** @type {?} */
            var i = this.toastrContainers.findIndex((/**
             * @param {?} x
             * @return {?}
             */
            function (x) { return x.position === toastrComponentRef.instance.position; }));
            if (i > -1) {
                this.toastrContainers.splice(i, 1);
            }
            this.detachFromApplication(toastrComponentRef);
        }
    };
    /**
     * @private
     * @param {?} toast
     * @return {?}
     */
    ToastrManager.prototype._onToastClicked = /**
     * @private
     * @param {?} toast
     * @return {?}
     */
    function (toast) {
        this.toastClicked.next(toast);
        if (toast.config.dismiss !== "controlled") {
            this.clearToast(toast);
        }
    };
    /**
     * @param {?} toast
     * @return {?}
     */
    ToastrManager.prototype.dismissToastr = /**
     * @param {?} toast
     * @return {?}
     */
    function (toast) {
        this.clearToast(toast);
    };
    /**
     * @return {?}
     */
    ToastrManager.prototype.dismissAllToastr = /**
     * @return {?}
     */
    function () {
        this.clearAllToasts();
    };
    /**
     * @return {?}
     */
    ToastrManager.prototype.onClickToast = /**
     * @return {?}
     */
    function () {
        return this.toastClicked.asObservable();
    };
    /**
     * @param {?} toastr
     * @param {?=} options
     * @return {?}
     */
    ToastrManager.prototype.showToastr = /**
     * @param {?} toastr
     * @param {?=} options
     * @return {?}
     */
    function (toastr, options) {
        var _this = this;
        /** @type {?} */
        var opt = Object.assign({}, this.options, options);
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        function (resolve, reject) {
            if (!_this.isToastrContainerExist(opt.position)) {
                /** @type {?} */
                var providers = [{ provide: ToastrOptions, useValue: opt }];
                /** @type {?} */
                var toastrComponentRef_1 = _this.createToastrComponent(ToastrComponent, providers);
                toastrComponentRef_1.instance.onToastClicked = (/**
                 * @param {?} toast
                 * @return {?}
                 */
                function (toast) {
                    _this._onToastClicked(toast);
                });
                toastrComponentRef_1.instance.onExit().subscribe((/**
                 * @return {?}
                 */
                function () {
                    _this.dispose(toastrComponentRef_1);
                }));
                _this.toastrContainers.push({
                    position: opt.position,
                    ref: toastrComponentRef_1
                });
            }
            resolve(_this.setupToast(toastr, options));
        }));
    };
    /**
     * @param {?} message
     * @param {?=} title
     * @param {?=} options
     * @return {?}
     */
    ToastrManager.prototype.errorToastr = /**
     * @param {?} message
     * @param {?=} title
     * @param {?=} options
     * @return {?}
     */
    function (message, title, options) {
        /** @type {?} */
        var data = options && options.data ? options.data : null;
        /** @type {?} */
        var toast = new Toastr("error", message, title, data);
        this.showToastr(toast, options);
        return toast;
    };
    /**
     * @param {?} message
     * @param {?=} title
     * @param {?=} options
     * @return {?}
     */
    ToastrManager.prototype.infoToastr = /**
     * @param {?} message
     * @param {?=} title
     * @param {?=} options
     * @return {?}
     */
    function (message, title, options) {
        /** @type {?} */
        var data = options && options.data ? options.data : null;
        /** @type {?} */
        var toast = new Toastr("info", message, title, data);
        this.showToastr(toast, options);
        return toast;
    };
    /**
     * @param {?} message
     * @param {?=} title
     * @param {?=} options
     * @return {?}
     */
    ToastrManager.prototype.successToastr = /**
     * @param {?} message
     * @param {?=} title
     * @param {?=} options
     * @return {?}
     */
    function (message, title, options) {
        /** @type {?} */
        var data = options && options.data ? options.data : null;
        /** @type {?} */
        var toast = new Toastr("success", message, title, data);
        this.showToastr(toast, options);
        return toast;
    };
    /**
     * @param {?} message
     * @param {?=} title
     * @param {?=} options
     * @return {?}
     */
    ToastrManager.prototype.warningToastr = /**
     * @param {?} message
     * @param {?=} title
     * @param {?=} options
     * @return {?}
     */
    function (message, title, options) {
        /** @type {?} */
        var data = options && options.data ? options.data : null;
        /** @type {?} */
        var toast = new Toastr("warning", message, title, data);
        this.showToastr(toast, options);
        return toast;
    };
    /**
     * @param {?} message
     * @param {?=} title
     * @param {?=} options
     * @return {?}
     */
    ToastrManager.prototype.customToastr = /**
     * @param {?} message
     * @param {?=} title
     * @param {?=} options
     * @return {?}
     */
    function (message, title, options) {
        /** @type {?} */
        var data = options && options.data ? options.data : null;
        /** @type {?} */
        var toast = new Toastr("custom", message, title, data);
        this.showToastr(toast, options);
        return toast;
    };
    /**
     * @param {?} message
     * @return {?}
     */
    ToastrManager.prototype.successNotification = /**
     * @param {?} message
     * @return {?}
     */
    function (message) {
        this.successToastr(message, '', {
            animate: 'slideFromTop',
            position: 'top-full-width',
            maxShown: 1,
            showCloseButton: true
        });
    };
    /**
     * @param {?} message
     * @return {?}
     */
    ToastrManager.prototype.errorNotification = /**
     * @param {?} message
     * @return {?}
     */
    function (message) {
        this.errorToastr(message, '', {
            animate: 'slideFromTop',
            position: 'top-full-width',
            maxShown: 1,
            showCloseButton: true
        });
    };
    ToastrManager.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ToastrManager.ctorParameters = function () { return [
        { type: ApplicationRef },
        { type: ComponentFactoryResolver },
        { type: Injector },
        { type: NgZone },
        { type: ToastrOptions }
    ]; };
    return ToastrManager;
}());
export { ToastrManager };
if (false) {
    /** @type {?} */
    ToastrManager.prototype.toastrContainers;
    /**
     * @type {?}
     * @private
     */
    ToastrManager.prototype.index;
    /**
     * @type {?}
     * @private
     */
    ToastrManager.prototype.toastClicked;
    /**
     * @type {?}
     * @private
     */
    ToastrManager.prototype._applicationRef;
    /**
     * @type {?}
     * @private
     */
    ToastrManager.prototype._componentFactoryResolver;
    /**
     * @type {?}
     * @private
     */
    ToastrManager.prototype._injector;
    /**
     * @type {?}
     * @private
     */
    ToastrManager.prototype.ngZone;
    /**
     * @type {?}
     * @private
     */
    ToastrManager.prototype.options;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3RyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jb21tb24vIiwic291cmNlcyI6WyJsaWIvdG9hc3RyLW5vdGlmaWNhdGlvbnMvdG9hc3RyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsT0FBTyxFQUNMLFVBQVUsRUFDVixjQUFjLEVBQ2Qsd0JBQXdCLEVBQ3hCLFFBQVEsRUFFUixrQkFBa0IsRUFHbEIsTUFBTSxFQUNQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7O0FBRzNDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sVUFBVSxDQUFDOztBQUdsQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7Ozs7O0FBRXJELHNDQUVDOzs7SUFEQyxxQ0FBYzs7QUFLaEI7SUFPRSx1QkFDVSxlQUErQixFQUMvQix5QkFBbUQsRUFDbkQsU0FBbUIsRUFDbkIsTUFBYyxFQUNkLE9BQXNCO1FBSnRCLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtRQUMvQiw4QkFBeUIsR0FBekIseUJBQXlCLENBQTBCO1FBQ25ELGNBQVMsR0FBVCxTQUFTLENBQVU7UUFDbkIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLFlBQU8sR0FBUCxPQUFPLENBQWU7UUFWaEMscUJBQWdCLEdBQWUsRUFBRSxDQUFDO1FBRTFCLFVBQUssR0FBRyxDQUFDLENBQUM7UUFDVixpQkFBWSxHQUFvQixJQUFJLE9BQU8sRUFBVSxDQUFDO0lBUTFELENBQUM7SUFFTCwwQkFBMEI7Ozs7Ozs7OztJQUNsQiw2Q0FBcUI7Ozs7Ozs7OztJQUE3QixVQUFpQyxJQUFhLEVBQUUsU0FBbUI7UUFBbkIsMEJBQUEsRUFBQSxjQUFtQjs7O1lBRTNELE9BQU8sR0FBRyxJQUFJLENBQUMseUJBQXlCLENBQUMsdUJBQXVCLENB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QUUsT0FBTyxDQUFDLENBQUM7UUFDaEMsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOzs7OztJQUVNLDJDQUFtQjs7OztJQUExQixVQUEyQixPQUFlO1FBQ3hDLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxFQUFFLEVBQUUsRUFBRTtZQUM5QixPQUFPLEVBQUUsY0FBYztZQUN2QixRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLFFBQVEsRUFBRSxDQUFDO1lBQ1gsZUFBZSxFQUFFLElBQUk7U0FDdEIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFTSx5Q0FBaUI7Ozs7SUFBeEIsVUFBeUIsT0FBZTtRQUN0QyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxFQUFFLEVBQUU7WUFDNUIsT0FBTyxFQUFFLGNBQWM7WUFDdkIsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixRQUFRLEVBQUUsQ0FBQztZQUNYLGVBQWUsRUFBRSxJQUFJO1NBQ3RCLENBQUMsQ0FBQztJQUNMLENBQUM7O2dCQTFPRixVQUFVOzs7O2dCQXhCVCxjQUFjO2dCQUNkLHdCQUF3QjtnQkFDeEIsUUFBUTtnQkFLUixNQUFNO2dCQUtDLGFBQWE7O0lBdVB0QixvQkFBQztDQUFBLEFBM09ELElBMk9DO1NBMU9ZLGFBQWE7OztJQUN4Qix5Q0FBa0M7Ozs7O0lBRWxDLDhCQUFrQjs7Ozs7SUFDbEIscUNBQThEOzs7OztJQUc1RCx3Q0FBdUM7Ozs7O0lBQ3ZDLGtEQUEyRDs7Ozs7SUFDM0Qsa0NBQTJCOzs7OztJQUMzQiwrQkFBc0I7Ozs7O0lBQ3RCLGdDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcmVcbmltcG9ydCB7XG4gIEluamVjdGFibGUsXG4gIEFwcGxpY2F0aW9uUmVmLFxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gIEluamVjdG9yLFxuICBDb21wb25lbnRSZWYsXG4gIFJlZmxlY3RpdmVJbmplY3RvcixcbiAgUHJvdmlkZXIsXG4gIFR5cGUsXG4gIE5nWm9uZVxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gXCJyeGpzXCI7XG5cbi8vIENvbmZpZ1xuaW1wb3J0IHsgVG9hc3RyT3B0aW9ucyB9IGZyb20gXCIuL3RvYXN0ci5vcHRpb25zXCI7XG5pbXBvcnQgeyBUb2FzdHIgfSBmcm9tIFwiLi90b2FzdHJcIjtcblxuLy8gQ29tcG9uZW50XG5pbXBvcnQgeyBUb2FzdHJDb21wb25lbnQgfSBmcm9tIFwiLi90b2FzdHIuY29tcG9uZW50XCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUltcGxpY2l0Q29udGV4dDxUPiB7XG4gICRpbXBsaWNpdD86IFQ7XG59XG5cbmRlY2xhcmUgdmFyIGRvY3VtZW50O1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVG9hc3RyTWFuYWdlciB7XG4gIHRvYXN0ckNvbnRhaW5lcnM6IEFycmF5PGFueT4gPSBbXTtcblxuICBwcml2YXRlIGluZGV4ID0gMDtcbiAgcHJpdmF0ZSB0b2FzdENsaWNrZWQ6IFN1YmplY3Q8VG9hc3RyPiA9IG5ldyBTdWJqZWN0PFRvYXN0cj4oKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9hcHBsaWNhdGlvblJlZjogQXBwbGljYXRpb25SZWYsXG4gICAgcHJpdmF0ZSBfY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgcHJpdmF0ZSBfaW5qZWN0b3I6IEluamVjdG9yLFxuICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsXG4gICAgcHJpdmF0ZSBvcHRpb25zOiBUb2FzdHJPcHRpb25zXG4gICkgeyB9XG5cbiAgLy8gQ3JlYXRlIFRvYXN0ciBDb21wb25lbnRcbiAgcHJpdmF0ZSBjcmVhdGVUb2FzdHJDb21wb25lbnQ8VD4odHlwZTogVHlwZTxUPiwgcHJvdmlkZXJzOiBhbnkgPSBbXSk6IENvbXBvbmVudFJlZjxUPiB7XG4gICAgLy8gUmVzb2x2ZSBhIGZhY3RvcnkgZm9yIGNyZWF0aW5nIGNvbXBvbmVudHMgb2YgdHlwZSBgdHlwZWAuXG4gICAgY29uc3QgZmFjdG9yeSA9IHRoaXMuX2NvbXBvbmVudEZhY3RvcnlSZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeSh0eXBlIGFzIFR5cGU8VD4pO1xuICAgIC8vIFJlc29sdmUgYW5kIGNyZWF0ZSBhbiBpbmplY3RvciB3aXRoIHRoZSBzcGVjaWZpZWQgcHJvdmlkZXJzLlxuICAgIGNvbnN0IF9wcm92aWRlcnMgPSBSZWZsZWN0aXZlSW5qZWN0b3IucmVzb2x2ZShwcm92aWRlcnMpO1xuICAgIGNvbnN0IGluamVjdG9yID0gUmVmbGVjdGl2ZUluamVjdG9yLmZyb21SZXNvbHZlZFByb3ZpZGVycyhfcHJvdmlkZXJzLCB0aGlzLl9pbmplY3Rvcik7XG4gICAgLy8gQ3JlYXRlIG5ldyBub2RlIGZvciBpbnNlcnRpbmcgaW50byBkb2N1bWVudC5cbiAgICBsZXQgbmV3Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbmV3Tm9kZS5pZCA9IFwidG9hc3RyLW5vZGUtXCIgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyMDApO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpLmFwcGVuZENoaWxkKG5ld05vZGUpO1xuICAgIC8vIENyZWF0ZSBhIGNvbXBvbmVudCB1c2luZyB0aGUgcHJldmlvdXNseSByZXNvbHZlZCBmYWN0b3J5ICYgaW5qZWN0b3IuXG4gICAgY29uc3QgY29tcG9uZW50UmVmID0gZmFjdG9yeS5jcmVhdGUoaW5qZWN0b3IsIFtdLCBuZXdOb2RlKTtcbiAgICAvLyBJbnNlcnQgbmV3IGNvbXBvbmVudCBub2RlIGludG8gZG9jdW1lbnQgYm9keS5cbiAgICB0aGlzLmF0dGFjaFRvQXBwbGljYXRpb24oY29tcG9uZW50UmVmKTtcbiAgICByZXR1cm4gY29tcG9uZW50UmVmO1xuICB9XG5cbiAgLy8gSW5zZXJ0cyB0aGUgY29tcG9uZW50IGluIHRoZSByb290IGFwcGxpY2F0aW9uIG5vZGUuXG4gIHByaXZhdGUgYXR0YWNoVG9BcHBsaWNhdGlvbjxUPihjb21wb25lbnRSZWY6IENvbXBvbmVudFJlZjxUPik6IHZvaWQge1xuICAgIHRoaXMuX2FwcGxpY2F0aW9uUmVmLmF0dGFjaFZpZXcoY29tcG9uZW50UmVmLmhvc3RWaWV3KTtcbiAgfVxuXG4gIC8vIERldGFjaGVzIHRoZSBjb21wb25lbnQgZnJvbSB0aGUgcm9vdCBhcHBsaWNhdGlvbiBub2RlLlxuICBwcml2YXRlIGRldGFjaEZyb21BcHBsaWNhdGlvbjxUPihjb21wb25lbnRSZWY6IENvbXBvbmVudFJlZjxUPik6IHZvaWQge1xuICAgIHRoaXMuX2FwcGxpY2F0aW9uUmVmLmRldGFjaFZpZXcoY29tcG9uZW50UmVmLmhvc3RWaWV3KTtcbiAgfVxuXG4gIHByaXZhdGUgaXNUb2FzdHJDb250YWluZXJFeGlzdChwb3NpdGlvbjogYW55KSB7XG4gICAgaWYgKHRoaXMudG9hc3RyQ29udGFpbmVycy5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBpID0gdGhpcy50b2FzdHJDb250YWluZXJzLmZpbmRJbmRleCh4ID0+IHgucG9zaXRpb24gPT09IHBvc2l0aW9uKTtcbiAgICAgIGlmIChpID4gLTEpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRUb2FzdHJDb21wb25lbnRSZWYocG9zaXRpb246IGFueSkge1xuICAgIGlmICh0aGlzLnRvYXN0ckNvbnRhaW5lcnMubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgY29udGFpbmVyID0gdGhpcy50b2FzdHJDb250YWluZXJzLmZpbmQoeCA9PiB4LnBvc2l0aW9uID09PSBwb3NpdGlvbik7XG4gICAgICByZXR1cm4gY29udGFpbmVyID8gY29udGFpbmVyLnJlZiA6IG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBjcmVhdGVUaW1lb3V0KHRvYXN0OiBUb2FzdHIpOiBhbnkge1xuICAgIGxldCB0YXNrOiBhbnk7XG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgdGFzayA9IHNldFRpbWVvdXQoXG4gICAgICAgICgpID0+IHRoaXMubmdab25lLnJ1bigoKSA9PiB0aGlzLmNsZWFyVG9hc3QodG9hc3QpKSxcbiAgICAgICAgdG9hc3QuY29uZmlnLnRvYXN0VGltZW91dFxuICAgICAgKTtcbiAgICB9KTtcblxuICAgIHJldHVybiB0YXNrLnRvU3RyaW5nKCk7XG4gIH1cblxuICBzZXR1cFRvYXN0KHRvYXN0OiBUb2FzdHIsIG9wdGlvbnM/OiBhbnkpOiBUb2FzdHIge1xuICAgIHRvYXN0LmlkID0gKyt0aGlzLmluZGV4O1xuXG4gICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5oYXNPd25Qcm9wZXJ0eShcInRvYXN0VGltZW91dFwiKSkge1xuICAgICAgb3B0aW9ucy5kaXNtaXNzID0gXCJhdXRvXCI7XG4gICAgfVxuXG4gICAgY29uc3QgY3VzdG9tQ29uZmlnOiBhbnkgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLm9wdGlvbnMsIG9wdGlvbnMgfHwge30pO1xuXG4gICAgT2JqZWN0LmtleXModG9hc3QuY29uZmlnKS5mb3JFYWNoKGsgPT4ge1xuICAgICAgaWYgKGN1c3RvbUNvbmZpZy5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgICB0b2FzdC5jb25maWdba10gPSBjdXN0b21Db25maWdba107XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAodG9hc3QuY29uZmlnLmRpc21pc3MgPT09IFwiYXV0b1wiKSB7XG4gICAgICB0b2FzdC50aW1lb3V0SWQgPSB0aGlzLmNyZWF0ZVRpbWVvdXQodG9hc3QpO1xuICAgIH1cblxuICAgIHRvYXN0LnRvYXN0ck1hbmFnZXIgPSB0aGlzOyAvLyBiaW5kIFRvYXN0ck1hbmFnZXIgaW5zdGFuY2UgdG8gVG9hc3RyXG5cbiAgICBjb25zdCBwb3NpdGlvbiA9IHRvYXN0LmNvbmZpZy5wb3NpdGlvbjtcblxuICAgIGlmICh0aGlzLmlzVG9hc3RyQ29udGFpbmVyRXhpc3QocG9zaXRpb24pKSB7XG4gICAgICB0aGlzLmdldFRvYXN0ckNvbXBvbmVudFJlZihwb3NpdGlvbikuaW5zdGFuY2UuYWRkVG9hc3RyKHRvYXN0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdG9hc3Q7XG4gIH1cblxuICBwcml2YXRlIGNsZWFyVG9hc3QodG9hc3Q6IFRvYXN0cikge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gdG9hc3QuY29uZmlnLnBvc2l0aW9uO1xuICAgIGlmICh0aGlzLmlzVG9hc3RyQ29udGFpbmVyRXhpc3QocG9zaXRpb24pKSB7XG4gICAgICBsZXQgaW5zdGFuY2UgPSB0aGlzLmdldFRvYXN0ckNvbXBvbmVudFJlZihwb3NpdGlvbikuaW5zdGFuY2U7XG4gICAgICBpbnN0YW5jZS5yZW1vdmVUb2FzdHIodG9hc3QpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY2xlYXJBbGxUb2FzdHMoKSB7XG4gICAgaWYgKHRoaXMudG9hc3RyQ29udGFpbmVycy5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLnRvYXN0ckNvbnRhaW5lcnMuZm9yRWFjaChjb21wb25lbnQgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhjb21wb25lbnQpO1xuICAgICAgICBjb25zdCByZWYgPSBjb21wb25lbnQucmVmO1xuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IGNvbXBvbmVudC5yZWYuaW5zdGFuY2U7XG4gICAgICAgIGluc3RhbmNlLnJlbW92ZUFsbFRvYXN0cygpO1xuICAgICAgICB0aGlzLmRpc3Bvc2UocmVmKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZGlzcG9zZSh0b2FzdHJDb21wb25lbnRSZWY6IENvbXBvbmVudFJlZjxUb2FzdHJDb21wb25lbnQ+KSB7XG4gICAgaWYgKHRvYXN0ckNvbXBvbmVudFJlZikge1xuICAgICAgY29uc3QgaSA9IHRoaXMudG9hc3RyQ29udGFpbmVycy5maW5kSW5kZXgoeCA9PiB4LnBvc2l0aW9uID09PSB0b2FzdHJDb21wb25lbnRSZWYuaW5zdGFuY2UucG9zaXRpb24pO1xuICAgICAgaWYgKGkgPiAtMSkge1xuICAgICAgICB0aGlzLnRvYXN0ckNvbnRhaW5lcnMuc3BsaWNlKGksIDEpO1xuICAgICAgfVxuICAgICAgdGhpcy5kZXRhY2hGcm9tQXBwbGljYXRpb24odG9hc3RyQ29tcG9uZW50UmVmKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9vblRvYXN0Q2xpY2tlZCh0b2FzdDogVG9hc3RyKSB7XG4gICAgdGhpcy50b2FzdENsaWNrZWQubmV4dCh0b2FzdCk7XG4gICAgaWYgKHRvYXN0LmNvbmZpZy5kaXNtaXNzICE9PSBcImNvbnRyb2xsZWRcIikge1xuICAgICAgdGhpcy5jbGVhclRvYXN0KHRvYXN0KTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZGlzbWlzc1RvYXN0cih0b2FzdDogVG9hc3RyKSB7XG4gICAgdGhpcy5jbGVhclRvYXN0KHRvYXN0KTtcbiAgfVxuXG4gIHB1YmxpYyBkaXNtaXNzQWxsVG9hc3RyKCkge1xuICAgIHRoaXMuY2xlYXJBbGxUb2FzdHMoKTtcbiAgfVxuXG4gIHB1YmxpYyBvbkNsaWNrVG9hc3QoKTogT2JzZXJ2YWJsZTxUb2FzdHI+IHtcbiAgICByZXR1cm4gdGhpcy50b2FzdENsaWNrZWQuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICBwdWJsaWMgc2hvd1RvYXN0cih0b2FzdHI6IFRvYXN0ciwgb3B0aW9ucz86IE9iamVjdCk6IFByb21pc2U8VG9hc3RyPiB7XG4gICAgY29uc3Qgb3B0ID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5vcHRpb25zLCBvcHRpb25zKTtcblxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAoIXRoaXMuaXNUb2FzdHJDb250YWluZXJFeGlzdChvcHQucG9zaXRpb24pKSB7XG4gICAgICAgIGNvbnN0IHByb3ZpZGVycyA9IFt7IHByb3ZpZGU6IFRvYXN0ck9wdGlvbnMsIHVzZVZhbHVlOiBvcHQgfV07XG4gICAgICAgIGxldCB0b2FzdHJDb21wb25lbnRSZWYgPSB0aGlzLmNyZWF0ZVRvYXN0ckNvbXBvbmVudDxUb2FzdHJDb21wb25lbnQ+KFxuICAgICAgICAgIFRvYXN0ckNvbXBvbmVudCxcbiAgICAgICAgICBwcm92aWRlcnNcbiAgICAgICAgKTtcblxuICAgICAgICB0b2FzdHJDb21wb25lbnRSZWYuaW5zdGFuY2Uub25Ub2FzdENsaWNrZWQgPSAodG9hc3Q6IFRvYXN0cikgPT4ge1xuICAgICAgICAgIHRoaXMuX29uVG9hc3RDbGlja2VkKHRvYXN0KTtcbiAgICAgICAgfTtcblxuICAgICAgICB0b2FzdHJDb21wb25lbnRSZWYuaW5zdGFuY2Uub25FeGl0KCkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICB0aGlzLmRpc3Bvc2UodG9hc3RyQ29tcG9uZW50UmVmKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy50b2FzdHJDb250YWluZXJzLnB1c2goe1xuICAgICAgICAgIHBvc2l0aW9uOiBvcHQucG9zaXRpb24sXG4gICAgICAgICAgcmVmOiB0b2FzdHJDb21wb25lbnRSZWZcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJlc29sdmUodGhpcy5zZXR1cFRvYXN0KHRvYXN0ciwgb3B0aW9ucykpO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGVycm9yVG9hc3RyKG1lc3NhZ2U6IHN0cmluZywgdGl0bGU/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpOiBUb2FzdHIge1xuICAgIGNvbnN0IGRhdGEgPSBvcHRpb25zICYmIG9wdGlvbnMuZGF0YSA/IG9wdGlvbnMuZGF0YSA6IG51bGw7XG4gICAgY29uc3QgdG9hc3QgPSBuZXcgVG9hc3RyKFwiZXJyb3JcIiwgbWVzc2FnZSwgdGl0bGUsIGRhdGEpO1xuICAgIHRoaXMuc2hvd1RvYXN0cih0b2FzdCwgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHRvYXN0O1xuICB9XG5cbiAgcHVibGljIGluZm9Ub2FzdHIobWVzc2FnZTogc3RyaW5nLCB0aXRsZT86IHN0cmluZywgb3B0aW9ucz86IGFueSk6IFRvYXN0ciB7XG4gICAgY29uc3QgZGF0YSA9IG9wdGlvbnMgJiYgb3B0aW9ucy5kYXRhID8gb3B0aW9ucy5kYXRhIDogbnVsbDtcbiAgICBjb25zdCB0b2FzdCA9IG5ldyBUb2FzdHIoXCJpbmZvXCIsIG1lc3NhZ2UsIHRpdGxlLCBkYXRhKTtcbiAgICB0aGlzLnNob3dUb2FzdHIodG9hc3QsIG9wdGlvbnMpO1xuICAgIHJldHVybiB0b2FzdDtcbiAgfVxuXG4gIHB1YmxpYyBzdWNjZXNzVG9hc3RyKG1lc3NhZ2U6IHN0cmluZywgdGl0bGU/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpOiBUb2FzdHIge1xuICAgIGNvbnN0IGRhdGEgPSBvcHRpb25zICYmIG9wdGlvbnMuZGF0YSA/IG9wdGlvbnMuZGF0YSA6IG51bGw7XG4gICAgY29uc3QgdG9hc3QgPSBuZXcgVG9hc3RyKFwic3VjY2Vzc1wiLCBtZXNzYWdlLCB0aXRsZSwgZGF0YSk7XG4gICAgdGhpcy5zaG93VG9hc3RyKHRvYXN0LCBvcHRpb25zKTtcbiAgICByZXR1cm4gdG9hc3Q7XG4gIH1cblxuICBwdWJsaWMgd2FybmluZ1RvYXN0cihtZXNzYWdlOiBzdHJpbmcsIHRpdGxlPzogc3RyaW5nLCBvcHRpb25zPzogYW55KTogVG9hc3RyIHtcbiAgICBjb25zdCBkYXRhID0gb3B0aW9ucyAmJiBvcHRpb25zLmRhdGEgPyBvcHRpb25zLmRhdGEgOiBudWxsO1xuICAgIGNvbnN0IHRvYXN0ID0gbmV3IFRvYXN0cihcIndhcm5pbmdcIiwgbWVzc2FnZSwgdGl0bGUsIGRhdGEpO1xuICAgIHRoaXMuc2hvd1RvYXN0cih0b2FzdCwgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHRvYXN0O1xuICB9XG5cbiAgcHVibGljIGN1c3RvbVRvYXN0cihtZXNzYWdlOiBzdHJpbmcsIHRpdGxlPzogc3RyaW5nLCBvcHRpb25zPzogYW55KTogVG9hc3RyIHtcbiAgICBjb25zdCBkYXRhID0gb3B0aW9ucyAmJiBvcHRpb25zLmRhdGEgPyBvcHRpb25zLmRhdGEgOiBudWxsO1xuICAgIGNvbnN0IHRvYXN0ID0gbmV3IFRvYXN0cihcImN1c3RvbVwiLCBtZXNzYWdlLCB0aXRsZSwgZGF0YSk7XG4gICAgdGhpcy5zaG93VG9hc3RyKHRvYXN0LCBvcHRpb25zKTtcbiAgICByZXR1cm4gdG9hc3Q7XG4gIH1cblxuICBwdWJsaWMgc3VjY2Vzc05vdGlmaWNhdGlvbihtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICB0aGlzLnN1Y2Nlc3NUb2FzdHIobWVzc2FnZSwgJycsIHtcbiAgICAgIGFuaW1hdGU6ICdzbGlkZUZyb21Ub3AnLFxuICAgICAgcG9zaXRpb246ICd0b3AtZnVsbC13aWR0aCcsXG4gICAgICBtYXhTaG93bjogMSxcbiAgICAgIHNob3dDbG9zZUJ1dHRvbjogdHJ1ZVxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGVycm9yTm90aWZpY2F0aW9uKG1lc3NhZ2U6IHN0cmluZykge1xuICAgIHRoaXMuZXJyb3JUb2FzdHIobWVzc2FnZSwgJycsIHtcbiAgICAgIGFuaW1hdGU6ICdzbGlkZUZyb21Ub3AnLFxuICAgICAgcG9zaXRpb246ICd0b3AtZnVsbC13aWR0aCcsXG4gICAgICBtYXhTaG93bjogMSxcbiAgICAgIHNob3dDbG9zZUJ1dHRvbjogdHJ1ZVxuICAgIH0pO1xuICB9XG59XG4iXX0=