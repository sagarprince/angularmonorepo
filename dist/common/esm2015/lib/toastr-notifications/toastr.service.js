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
export class ToastrManager {
    /**
     * @param {?} _applicationRef
     * @param {?} _componentFactoryResolver
     * @param {?} _injector
     * @param {?} ngZone
     * @param {?} options
     */
    constructor(_applicationRef, _componentFactoryResolver, _injector, ngZone, options) {
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
    /**
     * @private
     * @template T
     * @param {?} type
     * @param {?=} providers
     * @return {?}
     */
    createToastrComponent(type, providers = []) {
        // Resolve a factory for creating components of type `type`.
        /** @type {?} */
        const factory = this._componentFactoryResolver.resolveComponentFactory((/** @type {?} */ (type)));
        // Resolve and create an injector with the specified providers.
        /** @type {?} */
        const _providers = ReflectiveInjector.resolve(providers);
        /** @type {?} */
        const injector = ReflectiveInjector.fromResolvedProviders(_providers, this._injector);
        // Create new node for inserting into document.
        /** @type {?} */
        let newNode = document.createElement("div");
        newNode.id = "toastr-node-" + Math.floor(Math.random() * 200);
        document.querySelector("body").appendChild(newNode);
        // Create a component using the previously resolved factory & injector.
        /** @type {?} */
        const componentRef = factory.create(injector, [], newNode);
        // Insert new component node into document body.
        this.attachToApplication(componentRef);
        return componentRef;
    }
    // Inserts the component in the root application node.
    /**
     * @private
     * @template T
     * @param {?} componentRef
     * @return {?}
     */
    attachToApplication(componentRef) {
        this._applicationRef.attachView(componentRef.hostView);
    }
    // Detaches the component from the root application node.
    /**
     * @private
     * @template T
     * @param {?} componentRef
     * @return {?}
     */
    detachFromApplication(componentRef) {
        this._applicationRef.detachView(componentRef.hostView);
    }
    /**
     * @private
     * @param {?} position
     * @return {?}
     */
    isToastrContainerExist(position) {
        if (this.toastrContainers.length > 0) {
            /** @type {?} */
            const i = this.toastrContainers.findIndex((/**
             * @param {?} x
             * @return {?}
             */
            x => x.position === position));
            if (i > -1) {
                return true;
            }
        }
        return false;
    }
    /**
     * @private
     * @param {?} position
     * @return {?}
     */
    getToastrComponentRef(position) {
        if (this.toastrContainers.length > 0) {
            /** @type {?} */
            const container = this.toastrContainers.find((/**
             * @param {?} x
             * @return {?}
             */
            x => x.position === position));
            return container ? container.ref : null;
        }
        return null;
    }
    /**
     * @param {?} toast
     * @return {?}
     */
    createTimeout(toast) {
        /** @type {?} */
        let task;
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            task = setTimeout((/**
             * @return {?}
             */
            () => this.ngZone.run((/**
             * @return {?}
             */
            () => this.clearToast(toast)))), toast.config.toastTimeout);
        }));
        return task.toString();
    }
    /**
     * @param {?} toast
     * @param {?=} options
     * @return {?}
     */
    setupToast(toast, options) {
        toast.id = ++this.index;
        if (options && options.hasOwnProperty("toastTimeout")) {
            options.dismiss = "auto";
        }
        /** @type {?} */
        const customConfig = Object.assign({}, this.options, options || {});
        Object.keys(toast.config).forEach((/**
         * @param {?} k
         * @return {?}
         */
        k => {
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
        const position = toast.config.position;
        if (this.isToastrContainerExist(position)) {
            this.getToastrComponentRef(position).instance.addToastr(toast);
        }
        return toast;
    }
    /**
     * @private
     * @param {?} toast
     * @return {?}
     */
    clearToast(toast) {
        /** @type {?} */
        const position = toast.config.position;
        if (this.isToastrContainerExist(position)) {
            /** @type {?} */
            let instance = this.getToastrComponentRef(position).instance;
            instance.removeToastr(toast);
        }
    }
    /**
     * @private
     * @return {?}
     */
    clearAllToasts() {
        if (this.toastrContainers.length > 0) {
            this.toastrContainers.forEach((/**
             * @param {?} component
             * @return {?}
             */
            component => {
                console.log(component);
                /** @type {?} */
                const ref = component.ref;
                /** @type {?} */
                const instance = component.ref.instance;
                instance.removeAllToasts();
                this.dispose(ref);
            }));
        }
    }
    /**
     * @private
     * @param {?} toastrComponentRef
     * @return {?}
     */
    dispose(toastrComponentRef) {
        if (toastrComponentRef) {
            /** @type {?} */
            const i = this.toastrContainers.findIndex((/**
             * @param {?} x
             * @return {?}
             */
            x => x.position === toastrComponentRef.instance.position));
            if (i > -1) {
                this.toastrContainers.splice(i, 1);
            }
            this.detachFromApplication(toastrComponentRef);
        }
    }
    /**
     * @private
     * @param {?} toast
     * @return {?}
     */
    _onToastClicked(toast) {
        this.toastClicked.next(toast);
        if (toast.config.dismiss !== "controlled") {
            this.clearToast(toast);
        }
    }
    /**
     * @param {?} toast
     * @return {?}
     */
    dismissToastr(toast) {
        this.clearToast(toast);
    }
    /**
     * @return {?}
     */
    dismissAllToastr() {
        this.clearAllToasts();
    }
    /**
     * @return {?}
     */
    onClickToast() {
        return this.toastClicked.asObservable();
    }
    /**
     * @param {?} toastr
     * @param {?=} options
     * @return {?}
     */
    showToastr(toastr, options) {
        /** @type {?} */
        const opt = Object.assign({}, this.options, options);
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        (resolve, reject) => {
            if (!this.isToastrContainerExist(opt.position)) {
                /** @type {?} */
                const providers = [{ provide: ToastrOptions, useValue: opt }];
                /** @type {?} */
                let toastrComponentRef = this.createToastrComponent(ToastrComponent, providers);
                toastrComponentRef.instance.onToastClicked = (/**
                 * @param {?} toast
                 * @return {?}
                 */
                (toast) => {
                    this._onToastClicked(toast);
                });
                toastrComponentRef.instance.onExit().subscribe((/**
                 * @return {?}
                 */
                () => {
                    this.dispose(toastrComponentRef);
                }));
                this.toastrContainers.push({
                    position: opt.position,
                    ref: toastrComponentRef
                });
            }
            resolve(this.setupToast(toastr, options));
        }));
    }
    /**
     * @param {?} message
     * @param {?=} title
     * @param {?=} options
     * @return {?}
     */
    errorToastr(message, title, options) {
        /** @type {?} */
        const data = options && options.data ? options.data : null;
        /** @type {?} */
        const toast = new Toastr("error", message, title, data);
        this.showToastr(toast, options);
        return toast;
    }
    /**
     * @param {?} message
     * @param {?=} title
     * @param {?=} options
     * @return {?}
     */
    infoToastr(message, title, options) {
        /** @type {?} */
        const data = options && options.data ? options.data : null;
        /** @type {?} */
        const toast = new Toastr("info", message, title, data);
        this.showToastr(toast, options);
        return toast;
    }
    /**
     * @param {?} message
     * @param {?=} title
     * @param {?=} options
     * @return {?}
     */
    successToastr(message, title, options) {
        /** @type {?} */
        const data = options && options.data ? options.data : null;
        /** @type {?} */
        const toast = new Toastr("success", message, title, data);
        this.showToastr(toast, options);
        return toast;
    }
    /**
     * @param {?} message
     * @param {?=} title
     * @param {?=} options
     * @return {?}
     */
    warningToastr(message, title, options) {
        /** @type {?} */
        const data = options && options.data ? options.data : null;
        /** @type {?} */
        const toast = new Toastr("warning", message, title, data);
        this.showToastr(toast, options);
        return toast;
    }
    /**
     * @param {?} message
     * @param {?=} title
     * @param {?=} options
     * @return {?}
     */
    customToastr(message, title, options) {
        /** @type {?} */
        const data = options && options.data ? options.data : null;
        /** @type {?} */
        const toast = new Toastr("custom", message, title, data);
        this.showToastr(toast, options);
        return toast;
    }
    /**
     * @param {?} message
     * @return {?}
     */
    successNotification(message) {
        this.successToastr(message, '', {
            animate: 'slideFromTop',
            position: 'top-full-width',
            maxShown: 1,
            showCloseButton: true
        });
    }
    /**
     * @param {?} message
     * @return {?}
     */
    errorNotification(message) {
        this.errorToastr(message, '', {
            animate: 'slideFromTop',
            position: 'top-full-width',
            maxShown: 1,
            showCloseButton: true
        });
    }
}
ToastrManager.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ToastrManager.ctorParameters = () => [
    { type: ApplicationRef },
    { type: ComponentFactoryResolver },
    { type: Injector },
    { type: NgZone },
    { type: ToastrOptions }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3RyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jb21tb24vIiwic291cmNlcyI6WyJsaWIvdG9hc3RyLW5vdGlmaWNhdGlvbnMvdG9hc3RyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsT0FBTyxFQUNMLFVBQVUsRUFDVixjQUFjLEVBQ2Qsd0JBQXdCLEVBQ3hCLFFBQVEsRUFFUixrQkFBa0IsRUFHbEIsTUFBTSxFQUNQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7O0FBRzNDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sVUFBVSxDQUFDOztBQUdsQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7Ozs7O0FBRXJELHNDQUVDOzs7SUFEQyxxQ0FBYzs7QUFNaEIsTUFBTSxPQUFPLGFBQWE7Ozs7Ozs7O0lBTXhCLFlBQ1UsZUFBK0IsRUFDL0IseUJBQW1ELEVBQ25ELFNBQW1CLEVBQ25CLE1BQWMsRUFDZCxPQUFzQjtRQUp0QixvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7UUFDL0IsOEJBQXlCLEdBQXpCLHlCQUF5QixDQUEwQjtRQUNuRCxjQUFTLEdBQVQsU0FBUyxDQUFVO1FBQ25CLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxZQUFPLEdBQVAsT0FBTyxDQUFlO1FBVmhDLHFCQUFnQixHQUFlLEVBQUUsQ0FBQztRQUUxQixVQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ1YsaUJBQVksR0FBb0IsSUFBSSxPQUFPLEVBQVUsQ0FBQztJQVExRCxDQUFDOzs7Ozs7Ozs7SUFHRyxxQkFBcUIsQ0FBSSxJQUFhLEVBQUUsWUFBaUIsRUFBRTs7O2NBRTNELE9BQU8sR0FBRyxJQUFJLENBQUMseUJBQXlCLENBQUMsdUJBQXVCLENBQUMsbUJBQUEsSUFBSSxFQUFXLENBQUM7OztjQUVqRixVQUFVLEdBQUcsa0JBQWtCLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQzs7Y0FDbEQsUUFBUSxHQUFHLGtCQUFrQixDQUFDLHFCQUFxQixDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDOzs7WUFFakYsT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDO1FBQzNDLE9BQU8sQ0FBQyxFQUFFLEdBQUcsY0FBYyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQzlELFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDOzs7Y0FFOUMsWUFBWSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLEVBQUUsRUFBRSxPQUFPLENBQUM7UUFDMUQsZ0RBQWdEO1FBQ2hELElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUN2QyxPQUFPLFlBQVksQ0FBQztJQUN0QixDQUFDOzs7Ozs7OztJQUdPLG1CQUFtQixDQUFJLFlBQTZCO1FBQzFELElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN6RCxDQUFDOzs7Ozs7OztJQUdPLHFCQUFxQixDQUFJLFlBQTZCO1FBQzVELElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN6RCxDQUFDOzs7Ozs7SUFFTyxzQkFBc0IsQ0FBQyxRQUFhO1FBQzFDLElBQUksSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7O2tCQUM5QixDQUFDLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVM7Ozs7WUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLEtBQUssUUFBUSxFQUFDO1lBQ3ZFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO2dCQUNWLE9BQU8sSUFBSSxDQUFDO2FBQ2I7U0FDRjtRQUVELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7Ozs7O0lBRU8scUJBQXFCLENBQUMsUUFBYTtRQUN6QyxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFOztrQkFDOUIsU0FBUyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJOzs7O1lBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxLQUFLLFFBQVEsRUFBQztZQUMxRSxPQUFPLFNBQVMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1NBQ3pDO1FBRUQsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOzs7OztJQUVELGFBQWEsQ0FBQyxLQUFhOztZQUNyQixJQUFTO1FBQ2IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUI7OztRQUFDLEdBQUcsRUFBRTtZQUNqQyxJQUFJLEdBQUcsVUFBVTs7O1lBQ2YsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHOzs7WUFBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxFQUFDLEdBQ25ELEtBQUssQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUMxQixDQUFDO1FBQ0osQ0FBQyxFQUFDLENBQUM7UUFFSCxPQUFPLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN6QixDQUFDOzs7Ozs7SUFFRCxVQUFVLENBQUMsS0FBYSxFQUFFLE9BQWE7UUFDckMsS0FBSyxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUM7UUFFeEIsSUFBSSxPQUFPLElBQUksT0FBTyxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsRUFBRTtZQUNyRCxPQUFPLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztTQUMxQjs7Y0FFSyxZQUFZLEdBQVEsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLElBQUksRUFBRSxDQUFDO1FBRXhFLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU87Ozs7UUFBQyxDQUFDLENBQUMsRUFBRTtZQUNwQyxJQUFJLFlBQVksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ2xDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ25DO1FBQ0gsQ0FBQyxFQUFDLENBQUM7UUFFSCxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxLQUFLLE1BQU0sRUFBRTtZQUNuQyxLQUFLLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDN0M7UUFFRCxLQUFLLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxDQUFDLHdDQUF3Qzs7O2NBRTlELFFBQVEsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVE7UUFFdEMsSUFBSSxJQUFJLENBQUMsc0JBQXNCLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDekMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDaEU7UUFFRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7Ozs7OztJQUVPLFVBQVUsQ0FBQyxLQUFhOztjQUN4QixRQUFRLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRO1FBQ3RDLElBQUksSUFBSSxDQUFDLHNCQUFzQixDQUFDLFFBQVEsQ0FBQyxFQUFFOztnQkFDckMsUUFBUSxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRO1lBQzVELFFBQVEsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDOUI7SUFDSCxDQUFDOzs7OztJQUVPLGNBQWM7UUFDcEIsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUNwQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTzs7OztZQUFDLFNBQVMsQ0FBQyxFQUFFO2dCQUN4QyxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDOztzQkFDakIsR0FBRyxHQUFHLFNBQVMsQ0FBQyxHQUFHOztzQkFDbkIsUUFBUSxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUMsUUFBUTtnQkFDdkMsUUFBUSxDQUFDLGVBQWUsRUFBRSxDQUFDO2dCQUMzQixJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3BCLENBQUMsRUFBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDOzs7Ozs7SUFFTyxPQUFPLENBQUMsa0JBQWlEO1FBQy9ELElBQUksa0JBQWtCLEVBQUU7O2tCQUNoQixDQUFDLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVM7Ozs7WUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLEtBQUssa0JBQWtCLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBQztZQUNuRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRTtnQkFDVixJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzthQUNwQztZQUNELElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1NBQ2hEO0lBQ0gsQ0FBQzs7Ozs7O0lBRU8sZUFBZSxDQUFDLEtBQWE7UUFDbkMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDOUIsSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sS0FBSyxZQUFZLEVBQUU7WUFDekMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN4QjtJQUNILENBQUM7Ozs7O0lBRU0sYUFBYSxDQUFDLEtBQWE7UUFDaEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6QixDQUFDOzs7O0lBRU0sZ0JBQWdCO1FBQ3JCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN4QixDQUFDOzs7O0lBRU0sWUFBWTtRQUNqQixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDMUMsQ0FBQzs7Ozs7O0lBRU0sVUFBVSxDQUFDLE1BQWMsRUFBRSxPQUFnQjs7Y0FDMUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDO1FBRXBELE9BQU8sSUFBSSxPQUFPOzs7OztRQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO1lBQ3JDLElBQUksQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFOztzQkFDeEMsU0FBUyxHQUFHLENBQUMsRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsQ0FBQzs7b0JBQ3pELGtCQUFrQixHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FDakQsZUFBZSxFQUNmLFNBQVMsQ0FDVjtnQkFFRCxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsY0FBYzs7OztnQkFBRyxDQUFDLEtBQWEsRUFBRSxFQUFFO29CQUM3RCxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUM5QixDQUFDLENBQUEsQ0FBQztnQkFFRixrQkFBa0IsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsU0FBUzs7O2dCQUFDLEdBQUcsRUFBRTtvQkFDbEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO2dCQUNuQyxDQUFDLEVBQUMsQ0FBQztnQkFFSCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDO29CQUN6QixRQUFRLEVBQUUsR0FBRyxDQUFDLFFBQVE7b0JBQ3RCLEdBQUcsRUFBRSxrQkFBa0I7aUJBQ3hCLENBQUMsQ0FBQzthQUNKO1lBRUQsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDNUMsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7Ozs7O0lBRU0sV0FBVyxDQUFDLE9BQWUsRUFBRSxLQUFjLEVBQUUsT0FBYTs7Y0FDekQsSUFBSSxHQUFHLE9BQU8sSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJOztjQUNwRCxLQUFLLEdBQUcsSUFBSSxNQUFNLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDO1FBQ3ZELElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ2hDLE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7Ozs7OztJQUVNLFVBQVUsQ0FBQyxPQUFlLEVBQUUsS0FBYyxFQUFFLE9BQWE7O2NBQ3hELElBQUksR0FBRyxPQUFPLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSTs7Y0FDcEQsS0FBSyxHQUFHLElBQUksTUFBTSxDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQztRQUN0RCxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztRQUNoQyxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7Ozs7Ozs7SUFFTSxhQUFhLENBQUMsT0FBZSxFQUFFLEtBQWMsRUFBRSxPQUFhOztjQUMzRCxJQUFJLEdBQUcsT0FBTyxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUk7O2NBQ3BELEtBQUssR0FBRyxJQUFJLE1BQU0sQ0FBQyxTQUFTLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUM7UUFDekQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDaEMsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOzs7Ozs7O0lBRU0sYUFBYSxDQUFDLE9BQWUsRUFBRSxLQUFjLEVBQUUsT0FBYTs7Y0FDM0QsSUFBSSxHQUFHLE9BQU8sSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJOztjQUNwRCxLQUFLLEdBQUcsSUFBSSxNQUFNLENBQUMsU0FBUyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDO1FBQ3pELElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ2hDLE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7Ozs7OztJQUVNLFlBQVksQ0FBQyxPQUFlLEVBQUUsS0FBYyxFQUFFLE9BQWE7O2NBQzFELElBQUksR0FBRyxPQUFPLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSTs7Y0FDcEQsS0FBSyxHQUFHLElBQUksTUFBTSxDQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQztRQUN4RCxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztRQUNoQyxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7Ozs7O0lBRU0sbUJBQW1CLENBQUMsT0FBZTtRQUN4QyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sRUFBRSxFQUFFLEVBQUU7WUFDOUIsT0FBTyxFQUFFLGNBQWM7WUFDdkIsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixRQUFRLEVBQUUsQ0FBQztZQUNYLGVBQWUsRUFBRSxJQUFJO1NBQ3RCLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRU0saUJBQWlCLENBQUMsT0FBZTtRQUN0QyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxFQUFFLEVBQUU7WUFDNUIsT0FBTyxFQUFFLGNBQWM7WUFDdkIsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixRQUFRLEVBQUUsQ0FBQztZQUNYLGVBQWUsRUFBRSxJQUFJO1NBQ3RCLENBQUMsQ0FBQztJQUNMLENBQUM7OztZQTFPRixVQUFVOzs7O1lBeEJULGNBQWM7WUFDZCx3QkFBd0I7WUFDeEIsUUFBUTtZQUtSLE1BQU07WUFLQyxhQUFhOzs7O0lBY3BCLHlDQUFrQzs7Ozs7SUFFbEMsOEJBQWtCOzs7OztJQUNsQixxQ0FBOEQ7Ozs7O0lBRzVELHdDQUF1Qzs7Ozs7SUFDdkMsa0RBQTJEOzs7OztJQUMzRCxrQ0FBMkI7Ozs7O0lBQzNCLCtCQUFzQjs7Ozs7SUFDdEIsZ0NBQThCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29yZVxuaW1wb3J0IHtcbiAgSW5qZWN0YWJsZSxcbiAgQXBwbGljYXRpb25SZWYsXG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgSW5qZWN0b3IsXG4gIENvbXBvbmVudFJlZixcbiAgUmVmbGVjdGl2ZUluamVjdG9yLFxuICBQcm92aWRlcixcbiAgVHlwZSxcbiAgTmdab25lXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSBcInJ4anNcIjtcblxuLy8gQ29uZmlnXG5pbXBvcnQgeyBUb2FzdHJPcHRpb25zIH0gZnJvbSBcIi4vdG9hc3RyLm9wdGlvbnNcIjtcbmltcG9ydCB7IFRvYXN0ciB9IGZyb20gXCIuL3RvYXN0clwiO1xuXG4vLyBDb21wb25lbnRcbmltcG9ydCB7IFRvYXN0ckNvbXBvbmVudCB9IGZyb20gXCIuL3RvYXN0ci5jb21wb25lbnRcIjtcblxuZXhwb3J0IGludGVyZmFjZSBJSW1wbGljaXRDb250ZXh0PFQ+IHtcbiAgJGltcGxpY2l0PzogVDtcbn1cblxuZGVjbGFyZSB2YXIgZG9jdW1lbnQ7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBUb2FzdHJNYW5hZ2VyIHtcbiAgdG9hc3RyQ29udGFpbmVyczogQXJyYXk8YW55PiA9IFtdO1xuXG4gIHByaXZhdGUgaW5kZXggPSAwO1xuICBwcml2YXRlIHRvYXN0Q2xpY2tlZDogU3ViamVjdDxUb2FzdHI+ID0gbmV3IFN1YmplY3Q8VG9hc3RyPigpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX2FwcGxpY2F0aW9uUmVmOiBBcHBsaWNhdGlvblJlZixcbiAgICBwcml2YXRlIF9jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgICBwcml2YXRlIF9pbmplY3RvcjogSW5qZWN0b3IsXG4gICAgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSxcbiAgICBwcml2YXRlIG9wdGlvbnM6IFRvYXN0ck9wdGlvbnNcbiAgKSB7IH1cblxuICAvLyBDcmVhdGUgVG9hc3RyIENvbXBvbmVudFxuICBwcml2YXRlIGNyZWF0ZVRvYXN0ckNvbXBvbmVudDxUPih0eXBlOiBUeXBlPFQ+LCBwcm92aWRlcnM6IGFueSA9IFtdKTogQ29tcG9uZW50UmVmPFQ+IHtcbiAgICAvLyBSZXNvbHZlIGEgZmFjdG9yeSBmb3IgY3JlYXRpbmcgY29tcG9uZW50cyBvZiB0eXBlIGB0eXBlYC5cbiAgICBjb25zdCBmYWN0b3J5ID0gdGhpcy5fY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KHR5cGUgYXMgVHlwZTxUPik7XG4gICAgLy8gUmVzb2x2ZSBhbmQgY3JlYXRlIGFuIGluamVjdG9yIHdpdGggdGhlIHNwZWNpZmllZCBwcm92aWRlcnMuXG4gICAgY29uc3QgX3Byb3ZpZGVycyA9IFJlZmxlY3RpdmVJbmplY3Rvci5yZXNvbHZlKHByb3ZpZGVycyk7XG4gICAgY29uc3QgaW5qZWN0b3IgPSBSZWZsZWN0aXZlSW5qZWN0b3IuZnJvbVJlc29sdmVkUHJvdmlkZXJzKF9wcm92aWRlcnMsIHRoaXMuX2luamVjdG9yKTtcbiAgICAvLyBDcmVhdGUgbmV3IG5vZGUgZm9yIGluc2VydGluZyBpbnRvIGRvY3VtZW50LlxuICAgIGxldCBuZXdOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBuZXdOb2RlLmlkID0gXCJ0b2FzdHItbm9kZS1cIiArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIwMCk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIikuYXBwZW5kQ2hpbGQobmV3Tm9kZSk7XG4gICAgLy8gQ3JlYXRlIGEgY29tcG9uZW50IHVzaW5nIHRoZSBwcmV2aW91c2x5IHJlc29sdmVkIGZhY3RvcnkgJiBpbmplY3Rvci5cbiAgICBjb25zdCBjb21wb25lbnRSZWYgPSBmYWN0b3J5LmNyZWF0ZShpbmplY3RvciwgW10sIG5ld05vZGUpO1xuICAgIC8vIEluc2VydCBuZXcgY29tcG9uZW50IG5vZGUgaW50byBkb2N1bWVudCBib2R5LlxuICAgIHRoaXMuYXR0YWNoVG9BcHBsaWNhdGlvbihjb21wb25lbnRSZWYpO1xuICAgIHJldHVybiBjb21wb25lbnRSZWY7XG4gIH1cblxuICAvLyBJbnNlcnRzIHRoZSBjb21wb25lbnQgaW4gdGhlIHJvb3QgYXBwbGljYXRpb24gbm9kZS5cbiAgcHJpdmF0ZSBhdHRhY2hUb0FwcGxpY2F0aW9uPFQ+KGNvbXBvbmVudFJlZjogQ29tcG9uZW50UmVmPFQ+KTogdm9pZCB7XG4gICAgdGhpcy5fYXBwbGljYXRpb25SZWYuYXR0YWNoVmlldyhjb21wb25lbnRSZWYuaG9zdFZpZXcpO1xuICB9XG5cbiAgLy8gRGV0YWNoZXMgdGhlIGNvbXBvbmVudCBmcm9tIHRoZSByb290IGFwcGxpY2F0aW9uIG5vZGUuXG4gIHByaXZhdGUgZGV0YWNoRnJvbUFwcGxpY2F0aW9uPFQ+KGNvbXBvbmVudFJlZjogQ29tcG9uZW50UmVmPFQ+KTogdm9pZCB7XG4gICAgdGhpcy5fYXBwbGljYXRpb25SZWYuZGV0YWNoVmlldyhjb21wb25lbnRSZWYuaG9zdFZpZXcpO1xuICB9XG5cbiAgcHJpdmF0ZSBpc1RvYXN0ckNvbnRhaW5lckV4aXN0KHBvc2l0aW9uOiBhbnkpIHtcbiAgICBpZiAodGhpcy50b2FzdHJDb250YWluZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IGkgPSB0aGlzLnRvYXN0ckNvbnRhaW5lcnMuZmluZEluZGV4KHggPT4geC5wb3NpdGlvbiA9PT0gcG9zaXRpb24pO1xuICAgICAgaWYgKGkgPiAtMSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBwcml2YXRlIGdldFRvYXN0ckNvbXBvbmVudFJlZihwb3NpdGlvbjogYW55KSB7XG4gICAgaWYgKHRoaXMudG9hc3RyQ29udGFpbmVycy5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLnRvYXN0ckNvbnRhaW5lcnMuZmluZCh4ID0+IHgucG9zaXRpb24gPT09IHBvc2l0aW9uKTtcbiAgICAgIHJldHVybiBjb250YWluZXIgPyBjb250YWluZXIucmVmIDogbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNyZWF0ZVRpbWVvdXQodG9hc3Q6IFRvYXN0cik6IGFueSB7XG4gICAgbGV0IHRhc2s6IGFueTtcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICB0YXNrID0gc2V0VGltZW91dChcbiAgICAgICAgKCkgPT4gdGhpcy5uZ1pvbmUucnVuKCgpID0+IHRoaXMuY2xlYXJUb2FzdCh0b2FzdCkpLFxuICAgICAgICB0b2FzdC5jb25maWcudG9hc3RUaW1lb3V0XG4gICAgICApO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRhc2sudG9TdHJpbmcoKTtcbiAgfVxuXG4gIHNldHVwVG9hc3QodG9hc3Q6IFRvYXN0ciwgb3B0aW9ucz86IGFueSk6IFRvYXN0ciB7XG4gICAgdG9hc3QuaWQgPSArK3RoaXMuaW5kZXg7XG5cbiAgICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLmhhc093blByb3BlcnR5KFwidG9hc3RUaW1lb3V0XCIpKSB7XG4gICAgICBvcHRpb25zLmRpc21pc3MgPSBcImF1dG9cIjtcbiAgICB9XG5cbiAgICBjb25zdCBjdXN0b21Db25maWc6IGFueSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMub3B0aW9ucywgb3B0aW9ucyB8fCB7fSk7XG5cbiAgICBPYmplY3Qua2V5cyh0b2FzdC5jb25maWcpLmZvckVhY2goayA9PiB7XG4gICAgICBpZiAoY3VzdG9tQ29uZmlnLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICAgIHRvYXN0LmNvbmZpZ1trXSA9IGN1c3RvbUNvbmZpZ1trXTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmICh0b2FzdC5jb25maWcuZGlzbWlzcyA9PT0gXCJhdXRvXCIpIHtcbiAgICAgIHRvYXN0LnRpbWVvdXRJZCA9IHRoaXMuY3JlYXRlVGltZW91dCh0b2FzdCk7XG4gICAgfVxuXG4gICAgdG9hc3QudG9hc3RyTWFuYWdlciA9IHRoaXM7IC8vIGJpbmQgVG9hc3RyTWFuYWdlciBpbnN0YW5jZSB0byBUb2FzdHJcblxuICAgIGNvbnN0IHBvc2l0aW9uID0gdG9hc3QuY29uZmlnLnBvc2l0aW9uO1xuXG4gICAgaWYgKHRoaXMuaXNUb2FzdHJDb250YWluZXJFeGlzdChwb3NpdGlvbikpIHtcbiAgICAgIHRoaXMuZ2V0VG9hc3RyQ29tcG9uZW50UmVmKHBvc2l0aW9uKS5pbnN0YW5jZS5hZGRUb2FzdHIodG9hc3QpO1xuICAgIH1cblxuICAgIHJldHVybiB0b2FzdDtcbiAgfVxuXG4gIHByaXZhdGUgY2xlYXJUb2FzdCh0b2FzdDogVG9hc3RyKSB7XG4gICAgY29uc3QgcG9zaXRpb24gPSB0b2FzdC5jb25maWcucG9zaXRpb247XG4gICAgaWYgKHRoaXMuaXNUb2FzdHJDb250YWluZXJFeGlzdChwb3NpdGlvbikpIHtcbiAgICAgIGxldCBpbnN0YW5jZSA9IHRoaXMuZ2V0VG9hc3RyQ29tcG9uZW50UmVmKHBvc2l0aW9uKS5pbnN0YW5jZTtcbiAgICAgIGluc3RhbmNlLnJlbW92ZVRvYXN0cih0b2FzdCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjbGVhckFsbFRvYXN0cygpIHtcbiAgICBpZiAodGhpcy50b2FzdHJDb250YWluZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMudG9hc3RyQ29udGFpbmVycy5mb3JFYWNoKGNvbXBvbmVudCA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGNvbXBvbmVudCk7XG4gICAgICAgIGNvbnN0IHJlZiA9IGNvbXBvbmVudC5yZWY7XG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0gY29tcG9uZW50LnJlZi5pbnN0YW5jZTtcbiAgICAgICAgaW5zdGFuY2UucmVtb3ZlQWxsVG9hc3RzKCk7XG4gICAgICAgIHRoaXMuZGlzcG9zZShyZWYpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBkaXNwb3NlKHRvYXN0ckNvbXBvbmVudFJlZjogQ29tcG9uZW50UmVmPFRvYXN0ckNvbXBvbmVudD4pIHtcbiAgICBpZiAodG9hc3RyQ29tcG9uZW50UmVmKSB7XG4gICAgICBjb25zdCBpID0gdGhpcy50b2FzdHJDb250YWluZXJzLmZpbmRJbmRleCh4ID0+IHgucG9zaXRpb24gPT09IHRvYXN0ckNvbXBvbmVudFJlZi5pbnN0YW5jZS5wb3NpdGlvbik7XG4gICAgICBpZiAoaSA+IC0xKSB7XG4gICAgICAgIHRoaXMudG9hc3RyQ29udGFpbmVycy5zcGxpY2UoaSwgMSk7XG4gICAgICB9XG4gICAgICB0aGlzLmRldGFjaEZyb21BcHBsaWNhdGlvbih0b2FzdHJDb21wb25lbnRSZWYpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX29uVG9hc3RDbGlja2VkKHRvYXN0OiBUb2FzdHIpIHtcbiAgICB0aGlzLnRvYXN0Q2xpY2tlZC5uZXh0KHRvYXN0KTtcbiAgICBpZiAodG9hc3QuY29uZmlnLmRpc21pc3MgIT09IFwiY29udHJvbGxlZFwiKSB7XG4gICAgICB0aGlzLmNsZWFyVG9hc3QodG9hc3QpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBkaXNtaXNzVG9hc3RyKHRvYXN0OiBUb2FzdHIpIHtcbiAgICB0aGlzLmNsZWFyVG9hc3QodG9hc3QpO1xuICB9XG5cbiAgcHVibGljIGRpc21pc3NBbGxUb2FzdHIoKSB7XG4gICAgdGhpcy5jbGVhckFsbFRvYXN0cygpO1xuICB9XG5cbiAgcHVibGljIG9uQ2xpY2tUb2FzdCgpOiBPYnNlcnZhYmxlPFRvYXN0cj4ge1xuICAgIHJldHVybiB0aGlzLnRvYXN0Q2xpY2tlZC5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIHB1YmxpYyBzaG93VG9hc3RyKHRvYXN0cjogVG9hc3RyLCBvcHRpb25zPzogT2JqZWN0KTogUHJvbWlzZTxUb2FzdHI+IHtcbiAgICBjb25zdCBvcHQgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLm9wdGlvbnMsIG9wdGlvbnMpO1xuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmICghdGhpcy5pc1RvYXN0ckNvbnRhaW5lckV4aXN0KG9wdC5wb3NpdGlvbikpIHtcbiAgICAgICAgY29uc3QgcHJvdmlkZXJzID0gW3sgcHJvdmlkZTogVG9hc3RyT3B0aW9ucywgdXNlVmFsdWU6IG9wdCB9XTtcbiAgICAgICAgbGV0IHRvYXN0ckNvbXBvbmVudFJlZiA9IHRoaXMuY3JlYXRlVG9hc3RyQ29tcG9uZW50PFRvYXN0ckNvbXBvbmVudD4oXG4gICAgICAgICAgVG9hc3RyQ29tcG9uZW50LFxuICAgICAgICAgIHByb3ZpZGVyc1xuICAgICAgICApO1xuXG4gICAgICAgIHRvYXN0ckNvbXBvbmVudFJlZi5pbnN0YW5jZS5vblRvYXN0Q2xpY2tlZCA9ICh0b2FzdDogVG9hc3RyKSA9PiB7XG4gICAgICAgICAgdGhpcy5fb25Ub2FzdENsaWNrZWQodG9hc3QpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRvYXN0ckNvbXBvbmVudFJlZi5pbnN0YW5jZS5vbkV4aXQoKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuZGlzcG9zZSh0b2FzdHJDb21wb25lbnRSZWYpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnRvYXN0ckNvbnRhaW5lcnMucHVzaCh7XG4gICAgICAgICAgcG9zaXRpb246IG9wdC5wb3NpdGlvbixcbiAgICAgICAgICByZWY6IHRvYXN0ckNvbXBvbmVudFJlZlxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmVzb2x2ZSh0aGlzLnNldHVwVG9hc3QodG9hc3RyLCBvcHRpb25zKSk7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgZXJyb3JUb2FzdHIobWVzc2FnZTogc3RyaW5nLCB0aXRsZT86IHN0cmluZywgb3B0aW9ucz86IGFueSk6IFRvYXN0ciB7XG4gICAgY29uc3QgZGF0YSA9IG9wdGlvbnMgJiYgb3B0aW9ucy5kYXRhID8gb3B0aW9ucy5kYXRhIDogbnVsbDtcbiAgICBjb25zdCB0b2FzdCA9IG5ldyBUb2FzdHIoXCJlcnJvclwiLCBtZXNzYWdlLCB0aXRsZSwgZGF0YSk7XG4gICAgdGhpcy5zaG93VG9hc3RyKHRvYXN0LCBvcHRpb25zKTtcbiAgICByZXR1cm4gdG9hc3Q7XG4gIH1cblxuICBwdWJsaWMgaW5mb1RvYXN0cihtZXNzYWdlOiBzdHJpbmcsIHRpdGxlPzogc3RyaW5nLCBvcHRpb25zPzogYW55KTogVG9hc3RyIHtcbiAgICBjb25zdCBkYXRhID0gb3B0aW9ucyAmJiBvcHRpb25zLmRhdGEgPyBvcHRpb25zLmRhdGEgOiBudWxsO1xuICAgIGNvbnN0IHRvYXN0ID0gbmV3IFRvYXN0cihcImluZm9cIiwgbWVzc2FnZSwgdGl0bGUsIGRhdGEpO1xuICAgIHRoaXMuc2hvd1RvYXN0cih0b2FzdCwgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHRvYXN0O1xuICB9XG5cbiAgcHVibGljIHN1Y2Nlc3NUb2FzdHIobWVzc2FnZTogc3RyaW5nLCB0aXRsZT86IHN0cmluZywgb3B0aW9ucz86IGFueSk6IFRvYXN0ciB7XG4gICAgY29uc3QgZGF0YSA9IG9wdGlvbnMgJiYgb3B0aW9ucy5kYXRhID8gb3B0aW9ucy5kYXRhIDogbnVsbDtcbiAgICBjb25zdCB0b2FzdCA9IG5ldyBUb2FzdHIoXCJzdWNjZXNzXCIsIG1lc3NhZ2UsIHRpdGxlLCBkYXRhKTtcbiAgICB0aGlzLnNob3dUb2FzdHIodG9hc3QsIG9wdGlvbnMpO1xuICAgIHJldHVybiB0b2FzdDtcbiAgfVxuXG4gIHB1YmxpYyB3YXJuaW5nVG9hc3RyKG1lc3NhZ2U6IHN0cmluZywgdGl0bGU/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpOiBUb2FzdHIge1xuICAgIGNvbnN0IGRhdGEgPSBvcHRpb25zICYmIG9wdGlvbnMuZGF0YSA/IG9wdGlvbnMuZGF0YSA6IG51bGw7XG4gICAgY29uc3QgdG9hc3QgPSBuZXcgVG9hc3RyKFwid2FybmluZ1wiLCBtZXNzYWdlLCB0aXRsZSwgZGF0YSk7XG4gICAgdGhpcy5zaG93VG9hc3RyKHRvYXN0LCBvcHRpb25zKTtcbiAgICByZXR1cm4gdG9hc3Q7XG4gIH1cblxuICBwdWJsaWMgY3VzdG9tVG9hc3RyKG1lc3NhZ2U6IHN0cmluZywgdGl0bGU/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpOiBUb2FzdHIge1xuICAgIGNvbnN0IGRhdGEgPSBvcHRpb25zICYmIG9wdGlvbnMuZGF0YSA/IG9wdGlvbnMuZGF0YSA6IG51bGw7XG4gICAgY29uc3QgdG9hc3QgPSBuZXcgVG9hc3RyKFwiY3VzdG9tXCIsIG1lc3NhZ2UsIHRpdGxlLCBkYXRhKTtcbiAgICB0aGlzLnNob3dUb2FzdHIodG9hc3QsIG9wdGlvbnMpO1xuICAgIHJldHVybiB0b2FzdDtcbiAgfVxuXG4gIHB1YmxpYyBzdWNjZXNzTm90aWZpY2F0aW9uKG1lc3NhZ2U6IHN0cmluZykge1xuICAgIHRoaXMuc3VjY2Vzc1RvYXN0cihtZXNzYWdlLCAnJywge1xuICAgICAgYW5pbWF0ZTogJ3NsaWRlRnJvbVRvcCcsXG4gICAgICBwb3NpdGlvbjogJ3RvcC1mdWxsLXdpZHRoJyxcbiAgICAgIG1heFNob3duOiAxLFxuICAgICAgc2hvd0Nsb3NlQnV0dG9uOiB0cnVlXG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgZXJyb3JOb3RpZmljYXRpb24obWVzc2FnZTogc3RyaW5nKSB7XG4gICAgdGhpcy5lcnJvclRvYXN0cihtZXNzYWdlLCAnJywge1xuICAgICAgYW5pbWF0ZTogJ3NsaWRlRnJvbVRvcCcsXG4gICAgICBwb3NpdGlvbjogJ3RvcC1mdWxsLXdpZHRoJyxcbiAgICAgIG1heFNob3duOiAxLFxuICAgICAgc2hvd0Nsb3NlQnV0dG9uOiB0cnVlXG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==