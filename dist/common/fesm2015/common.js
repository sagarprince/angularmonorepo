import { Injectable, Component, ChangeDetectorRef, NgZone, ReflectiveInjector, ApplicationRef, ComponentFactoryResolver, Injector, forwardRef, Input, Pipe, EventEmitter, Output, ChangeDetectionStrategy, ViewChild, ElementRef, NgModule, Inject, ɵɵdefineInjectable, ɵɵinject, Directive, Optional, ErrorHandler } from '@angular/core';
import { Subject } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { FormControl, NG_VALUE_ACCESSOR, NG_VALIDATORS, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatIconModule, MatButtonModule, MatInputModule, MatSelectModule, MatDatepickerModule, MatCheckboxModule, MatProgressSpinnerModule, MatDialog, MatDialogModule } from '@angular/material';
import { MatMomentDateModule, MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_LOCALE, MAT_DATE_FORMATS } from '@angular/material/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog as MatDialog$1 } from '@angular/material/dialog';
import { onError } from 'apollo-link-error';
import { RouterLink, RouterLinkWithHref } from '@angular/router';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/constants.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// @dynamic
class ExceptionCodes {
    /**
     * @return {?}
     */
    static get graphClientError() { return "GRAPHQL_CLIENT_ERROR"; }
    /**
     * @return {?}
     */
    static get validationException() { return "VALIDATION_EXCEPTION"; }
    /**
     * @return {?}
     */
    static get invalidCredentials() { return "INVALID_CREDENTIALS_EXCEPTION"; }
}
// @dynamic
class ExceptionMessages {
    /**
     * @return {?}
     */
    static get somethingWentWrong() { return 'Something went wrong, please try again later.'; }
}
// @dynamic
class RegExpPattern {
    /**
     * @return {?}
     */
    static get validUrl() { return '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?'; }
    /**
     * @return {?}
     */
    static get validPassword() { return '(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=[^0-9]*[0-9]).{8,}'; }
}
// @dynamic
class GenericConstants {
    /**
     * @return {?}
     */
    static get genderOptions() {
        return [
            {
                id: 'male',
                text: 'Male'
            },
            {
                id: 'female',
                text: 'Female'
            }
        ];
    }
    /**
     * @return {?}
     */
    static get statusOptions() {
        return [
            {
                id: true,
                text: 'Active'
            },
            {
                id: false,
                text: 'InActive'
            }
        ];
    }
}
// @dynamic
class ValidationMessages {
    /**
     * @return {?}
     */
    static get password() { return 'Password must be eight characters, at least one uppercase letter, one lowercase letter, one special character and one number.'; }
    /**
     * @return {?}
     */
    static get passwordNotMatch() { return "Password doesn't match."; }
    /**
     * @return {?}
     */
    static get passwordMatch() { return "New password must be different than old password."; }
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/toastr-notifications/toastr.options.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ToastrOptions {
    constructor() {
        this.position = "top-right";
        this.maxShown = 5;
        this.newestOnTop = false;
        this.animate = "slideFromLeft";
        this.toastTimeout = 5000;
        this.enableHTML = false;
        this.dismiss = "auto"; //'auto' | 'click' | 'controlled'
        //'auto' | 'click' | 'controlled'
        this.messageClass = "toastr-message";
        this.titleClass = "toastr-title";
        this.showCloseButton = false;
    }
}
ToastrOptions.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ToastrOptions.ctorParameters = () => [];
if (false) {
    /** @type {?} */
    ToastrOptions.prototype.position;
    /** @type {?} */
    ToastrOptions.prototype.maxShown;
    /** @type {?} */
    ToastrOptions.prototype.newestOnTop;
    /** @type {?} */
    ToastrOptions.prototype.animate;
    /** @type {?} */
    ToastrOptions.prototype.toastTimeout;
    /** @type {?} */
    ToastrOptions.prototype.enableHTML;
    /** @type {?} */
    ToastrOptions.prototype.dismiss;
    /** @type {?} */
    ToastrOptions.prototype.messageClass;
    /** @type {?} */
    ToastrOptions.prototype.titleClass;
    /** @type {?} */
    ToastrOptions.prototype.showCloseButton;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/toastr-notifications/toastr.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Toastr {
    /**
     * @param {?} type
     * @param {?} message
     * @param {?=} title
     * @param {?=} data
     */
    constructor(type, message, title, data) {
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
    dismiss() {
        this.toastrManager.dismissToastr(this);
    }
}
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

/**
 * @fileoverview added by tsickle
 * Generated from: lib/toastr-notifications/toastr.animations.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const ToastrAnimations = trigger("inOut", [
    state("fade", style({ opacity: 1 })),
    transition("void => fade", [
        style({
            opacity: 1
        }),
        animate("0.4s ease-in")
    ]),
    transition("fade => void", [
        animate("0.4s 0.1s ease-out", style({
            opacity: 0
        }))
    ]),
    state("slideFromLeft", style({ opacity: 1, transform: "translateX(0)" })),
    transition("void => slideFromLeft", [
        style({
            opacity: 0,
            transform: "translateX(-100%)"
        }),
        animate("0.4s ease-in")
    ]),
    transition("slideFromLeft => void", [
        animate("0.4s 0.1s ease-out", style({
            opacity: 0,
            transform: "translateX(100%)"
        }))
    ]),
    state("slideFromRight", style({ opacity: 1, transform: "translateX(0)" })),
    transition("void => slideFromRight", [
        style({
            opacity: 0,
            transform: "translateX(100%)"
        }),
        animate("0.4s ease-in")
    ]),
    transition("slideFromRight => void", [
        animate("0.4s 0.1s ease-out", style({
            opacity: 0,
            transform: "translateX(-100%)"
        }))
    ]),
    state("slideFromTop", style({ opacity: 1, transform: "translateY(0)" })),
    transition("void => slideFromTop", [
        style({
            opacity: 0,
            transform: "translateY(-100%)"
        }),
        animate("0.4s ease-in")
    ]),
    transition("slideFromTop => void", [
        animate("0.4s 0.1s ease-out", style({
            opacity: 0,
            transform: "translateY(-100%)"
        }))
    ]),
    state("slideFromBottom", style({ opacity: 1, transform: "translateY(0)" })),
    transition("void => slideFromBottom", [
        style({
            opacity: 0,
            transform: "translateY(100%)"
        }),
        animate("0.4s ease-in")
    ]),
    transition("slideFromBottom => void", [
        animate("0.4s 0.1s ease-out", style({
            opacity: 0,
            transform: "translateY(-100%)"
        }))
    ])
]);

/**
 * @fileoverview added by tsickle
 * Generated from: lib/toastr-notifications/toastr.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ToastrComponent {
    /**
     * @param {?} sanitizer
     * @param {?} cdr
     * @param {?} _zone
     * @param {?} options
     */
    constructor(sanitizer, cdr, _zone, options) {
        this.sanitizer = sanitizer;
        this.cdr = cdr;
        this._zone = _zone;
        this.toastrs = [];
        this._fresh = true;
        this._onEnter = new Subject();
        this._onExit = new Subject();
        Object.assign(this, options);
    }
    /**
     * @return {?}
     */
    onEnter() {
        return this._onEnter.asObservable();
    }
    /**
     * @return {?}
     */
    onExit() {
        return this._onExit.asObservable();
    }
    /**
     * @param {?} toast
     * @return {?}
     */
    addToastr(toast) {
        if (this.position.indexOf("top") > 0) {
            if (this.newestOnTop) {
                this.toastrs.unshift(toast);
            }
            else {
                this.toastrs.push(toast);
            }
            if (this.toastrs.length > this.maxShown) {
                /** @type {?} */
                const diff = this.toastrs.length - this.maxShown;
                if (this.newestOnTop) {
                    this.toastrs.splice(this.maxShown);
                }
                else {
                    this.toastrs.splice(0, diff);
                }
            }
        }
        else {
            this.toastrs.unshift(toast);
            if (this.toastrs.length > this.maxShown) {
                this.toastrs.splice(this.maxShown);
            }
        }
        if (this.animate === null && this._fresh) {
            this._fresh = false;
            this._onEnter.next();
            this._onEnter.complete();
        }
        this.cdr.detectChanges();
    }
    /**
     * @param {?} toast
     * @return {?}
     */
    removeToastr(toast) {
        if (toast.timeoutId) {
            clearTimeout(toast.timeoutId);
            toast.timeoutId = null;
        }
        this.toastrs = this.toastrs.filter((/**
         * @param {?} t
         * @return {?}
         */
        t => {
            return t.id !== toast.id;
        }));
    }
    /**
     * @return {?}
     */
    removeAllToasts() {
        this.toastrs.forEach((/**
         * @param {?} toast
         * @return {?}
         */
        (toast) => {
            clearTimeout(toast.timeoutId);
            toast.timeoutId = null;
        }));
        this.toastrs = [];
    }
    /**
     * @param {?} toast
     * @return {?}
     */
    clicked(toast) {
        if (this.onToastClicked) {
            this.onToastClicked(toast);
        }
    }
    /**
     * @return {?}
     */
    anyToast() {
        return this.toastrs.length > 0;
    }
    /**
     * @param {?} toastId
     * @return {?}
     */
    findToast(toastId) {
        for (let toast of this.toastrs) {
            if (toast.id === toastId) {
                return toast;
            }
        }
        return null;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onAnimationEnd(event) {
        if (event.toState === "void" && !this.anyToast()) {
            this._ngExit();
        }
        else if (this._fresh && event.fromState === "void") {
            // notify when first animation is done
            this._fresh = false;
            this._zone.run((/**
             * @return {?}
             */
            () => {
                this._onEnter.next();
                this._onEnter.complete();
            }));
        }
    }
    /**
     * @private
     * @return {?}
     */
    _ngExit() {
        this._zone.onMicrotaskEmpty.subscribe((/**
         * @return {?}
         */
        () => {
            this._onExit.next();
            this._onExit.complete();
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._ngExit();
    }
}
ToastrComponent.decorators = [
    { type: Component, args: [{
                selector: "app-toastr",
                template: "<div #toastrContainer id=\"toastr-container\" class=\"{{position}}\">\n  <div *ngFor=\"let toastr of toastrs\" [@inOut]=\"toastr.config.animate || animate\" (@inOut.done)=\"onAnimationEnd($event)\"\n    class=\"toastr toastr-{{toastr.type}}\" (click)=\"clicked(toastr)\">\n    <div *ngIf=\"toastr.title\" class=\"to-title {{toastr.config.titleClass || titleClass}}\">{{toastr.title}}</div>\n    <div [ngSwitch]=\"toastr.config.enableHTML\">\n      <span *ngSwitchCase=\"true\" class=\"to-message {{toastr.config.messageClass || messageClass}}\"\n        [innerHTML]=\"sanitizer.bypassSecurityTrustHtml(toastr.message)\"></span>\n      <span *ngSwitchDefault class=\"to-message {{toastr.config.messageClass || messageClass}}\">{{toastr.message}}</span>\n    </div>\n    <div class=\"toastr-close-button\" *ngIf=\"toastr.config.showCloseButton\" (click)=\"removeToastr(toastr)\">&times;\n    </div>\n  </div>\n</div>",
                animations: [ToastrAnimations],
                styles: [".to-title{font-weight:600;font-size:16px;margin-bottom:8px;color:#fff}.to-message{word-wrap:break-word;font-size:15px;line-height:20px;font-weight:500;display:block;color:#fff;background-color:transparent}.to-message a,.to-message label{color:#fff}.to-message a:hover{color:#ccc;text-decoration:none}.toastr-close-button{font-size:25px;cursor:pointer;margin-left:20px}button.toastr-close-button{padding:0;cursor:pointer;background:0 0;border:0;-webkit-appearance:none}.top-center{top:0;right:0;width:100%}.bottom-center{bottom:0;right:0;width:100%}.top-full-width{top:0;right:0;width:100%}.bottom-full-width{bottom:0;right:0;width:100%}.top-left{top:12px;left:12px}.top-right{top:12px;right:12px}.bottom-right{right:12px;bottom:12px}.bottom-left{bottom:12px;left:12px}#toastr-container{position:fixed;z-index:99999}#toastr-container *{box-sizing:border-box}#toastr-container>div{position:relative;overflow:hidden;margin:10px 0 6px;padding:25px 15px 20px;width:345px;border-radius:0;background-position:15px;background-repeat:no-repeat;box-shadow:0 0 12px #999;opacity:1}#toastr-container>div.toastr-custom{padding:15px;color:#030303}#toastr-container>div.toastr-custom .toastr-close-button{color:#999!important}#toastr-container.bottom-center>div,#toastr-container.top-center>div{width:300px;margin:10px auto}#toastr-container.bottom-full-width>div,#toastr-container.top-full-width>div{width:100%;margin:0 auto;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center}.toastr{background-color:#fff}.toastr-success{background-color:#e2f4ed}.toastr-success .to-message,.toastr-success .to-title,.toastr-success .toastr-close-button{color:#22a471}.toastr-error{background-color:#ffdfe4}.toastr-error .to-message,.toastr-error .to-title,.toastr-error .toastr-close-button{color:#af0f3b}.toastr-info{background-color:#c5bdf5}.toastr-info .to-message,.toastr-info .to-title,.toastr-info .toastr-close-button{color:#7460ee}.toastr-warning{background-color:#f4e4e2}.toastr-warning .to-message,.toastr-warning .to-title,.toastr-warning .toastr-close-button{color:#f15c4a}.toastr-progress{position:absolute;left:0;bottom:0;height:4px;background-color:#000;opacity:.4}@media all and (max-width:240px){#toastr-container>div{padding:20px 15px 15px;width:11em}}@media all and (min-width:241px) and (max-width:480px){#toastr-container>div{padding:20px 15px 15px;width:18em}}@media all and (min-width:481px) and (max-width:768px){#toastr-container>div{padding:20px 15px 15px;width:25em}}"]
            }] }
];
/** @nocollapse */
ToastrComponent.ctorParameters = () => [
    { type: DomSanitizer },
    { type: ChangeDetectorRef },
    { type: NgZone },
    { type: ToastrOptions }
];
if (false) {
    /** @type {?} */
    ToastrComponent.prototype.messageClass;
    /** @type {?} */
    ToastrComponent.prototype.titleClass;
    /** @type {?} */
    ToastrComponent.prototype.position;
    /** @type {?} */
    ToastrComponent.prototype.maxShown;
    /** @type {?} */
    ToastrComponent.prototype.newestOnTop;
    /** @type {?} */
    ToastrComponent.prototype.animate;
    /** @type {?} */
    ToastrComponent.prototype.toastrs;
    /**
     * @type {?}
     * @private
     */
    ToastrComponent.prototype._fresh;
    /** @type {?} */
    ToastrComponent.prototype.onToastClicked;
    /**
     * @type {?}
     * @private
     */
    ToastrComponent.prototype._onEnter;
    /**
     * @type {?}
     * @private
     */
    ToastrComponent.prototype._onExit;
    /** @type {?} */
    ToastrComponent.prototype.sanitizer;
    /**
     * @type {?}
     * @private
     */
    ToastrComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    ToastrComponent.prototype._zone;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/toastr-notifications/toastr.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 * @template T
 */
function IImplicitContext() { }
if (false) {
    /** @type {?|undefined} */
    IImplicitContext.prototype.$implicit;
}
class ToastrManager {
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

/**
 * @fileoverview added by tsickle
 * Generated from: lib/toastr-notifications/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: lib/form-fields/input/input.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class InputComponent {
    constructor() {
        this.mode = 'input'; // input | datepicker | textarea
        // input | datepicker | textarea
        this.type = 'text';
        this.appearance = 'fill'; // standard | outline | fill
        // standard | outline | fill
        this.label = '';
        this.placeholder = '';
        this.icon = '';
        this.autocomplete = 'off';
        this.control = new FormControl();
        this.readonly = false;
        this.errors = [];
        this.requiredErrMessage = 'Required Field.';
        this.emailErrMessage = 'Please enter a valid email.';
        this.minLengthErrMessage = '';
        this.maxLengthErrMessage = '';
        this.patternErrMessage = '';
        this.mustMatchErrMessage = '';
        this.mustNotMatchErrMessage = '';
        this.invalidErrMessage = '';
        this.isLoading = false;
        this.showControlStatusIcon = true;
        this.isPasswordVisible = false;
        this.inputType = '';
        this.value = '';
        this._icon = '';
        this._errors = [];
        this.propagateChange = (/**
         * @param {?} _
         * @return {?}
         */
        (_) => { });
        this.onTouched = (/**
         * @return {?}
         */
        () => { });
        this.validateFn = (/**
         * @return {?}
         */
        () => { });
        this.disabled = false;
        this._errors = [
            {
                key: 'required',
                message: this.requiredErrMessage
            },
            {
                key: 'email',
                message: this.emailErrMessage
            },
            {
                key: 'pattern',
                message: this.patternErrMessage
            },
            {
                key: 'minlength',
                message: this.minLengthErrMessage
            },
            {
                key: 'maxlength',
                message: this.maxLengthErrMessage
            },
            {
                key: 'invalid',
                message: this.invalidErrMessage
            },
            {
                key: 'mustMatch',
                message: this.mustMatchErrMessage
            },
            {
                key: 'mustNotMatch',
                message: this.mustNotMatchErrMessage
            }
        ];
    }
    /**
     * ngOnInit
     * @return {?} void
     */
    ngOnInit() {
        this.inputType = this.type === 'password' ? 'text' : this.type;
    }
    /**
     * ngOnChanges
     * @param {?} changes
     * @return {?} void
     */
    ngOnChanges(changes) {
        if (changes) {
            if (typeof changes.errors !== 'undefined') {
                if (changes.errors.firstChange) {
                    this._errors.push(...changes.errors.currentValue);
                }
            }
            if (typeof changes.errors !== 'undefined') {
                if (changes.errors.firstChange) {
                    this._errors.push(...changes.errors.currentValue);
                }
            }
            if (typeof changes.requiredErrMessage !== 'undefined') {
                /** @type {?} */
                let index = this._errors.findIndex((/**
                 * @param {?} x
                 * @return {?}
                 */
                (x) => {
                    return x.key === 'required';
                }));
                this._errors[index].message = changes.requiredErrMessage.currentValue;
            }
            if (typeof changes.patternErrMessage !== 'undefined') {
                /** @type {?} */
                let index = this._errors.findIndex((/**
                 * @param {?} x
                 * @return {?}
                 */
                (x) => {
                    return x.key === 'pattern';
                }));
                this._errors[index].message = changes.patternErrMessage.currentValue;
            }
            if (typeof changes.emailErrMessage !== 'undefined') {
                /** @type {?} */
                let index = this._errors.findIndex((/**
                 * @param {?} x
                 * @return {?}
                 */
                (x) => {
                    return x.key === 'email';
                }));
                this._errors[index].message = changes.emailErrMessage.currentValue;
            }
            if (typeof changes.minLengthErrMessage !== 'undefined') {
                /** @type {?} */
                let index = this._errors.findIndex((/**
                 * @param {?} x
                 * @return {?}
                 */
                (x) => {
                    return x.key === 'minlength';
                }));
                this._errors[index].message = changes.minLengthErrMessage.currentValue;
            }
            if (typeof changes.maxLengthErrMessage !== 'undefined') {
                /** @type {?} */
                let index = this._errors.findIndex((/**
                 * @param {?} x
                 * @return {?}
                 */
                (x) => {
                    return x.key === 'maxlength';
                }));
                this._errors[index].message = changes.maxLengthErrMessage.currentValue;
            }
            if (typeof changes.invalidErrMessage !== 'undefined') {
                /** @type {?} */
                let index = this._errors.findIndex((/**
                 * @param {?} x
                 * @return {?}
                 */
                (x) => {
                    return x.key === 'invalid';
                }));
                this._errors[index].message = changes.invalidErrMessage.currentValue;
            }
            if (typeof changes.mustMatchErrMessage !== 'undefined') {
                /** @type {?} */
                let index = this._errors.findIndex((/**
                 * @param {?} x
                 * @return {?}
                 */
                (x) => {
                    return x.key === 'mustMatch';
                }));
                this._errors[index].message = changes.mustMatchErrMessage.currentValue;
            }
            if (typeof changes.mustNotMatchErrMessage !== 'undefined') {
                /** @type {?} */
                let index = this._errors.findIndex((/**
                 * @param {?} x
                 * @return {?}
                 */
                (x) => {
                    return x.key === 'mustNotMatch';
                }));
                this._errors[index].message = changes.mustNotMatchErrMessage.currentValue;
            }
        }
    }
    /**
     * Write a value to the control
     * @param {?} value
     * @return {?} void
     */
    writeValue(value) {
        if (value) {
            this.value = value;
        }
    }
    /**
     * Register a function to tell Angular when the value of the input changes
     * @param {?} fn
     * @return {?} void
     */
    registerOnChange(fn) {
        this.propagateChange = fn;
    }
    /**
     * Register a function to tell Angular when the input has been touched
     * @param {?} fn
     * @return {?} void
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * On Change
     * @param {?} event
     * @return {?} void
     */
    onChange(event) {
        /** @type {?} */
        let _value = event.target.value;
        this.value = _value;
        this.propagateChange(this.value);
        if (!this.control.pending) {
            this.onTouched();
        }
    }
    /**
     * Validate
     * @param {?} c
     * @return {?} any
     */
    validate(c) {
        return this.validateFn(c);
    }
    /**
     * Clear Date
     * @return {?} void
     */
    clearDate() {
        this.value = '';
        this.propagateChange(this.value);
    }
    /**
     * Set Disabled State
     * @param {?} isDisabled
     * @return {?} void
     */
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
}
InputComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-input',
                template: "<mat-form-field [appearance]=\"appearance\" [class.non-label-field]=\"label === ''\">\n    <mat-label *ngIf=\"label\">{{label}}</mat-label>\n    <ng-container [ngSwitch]=\"mode\">\n        <ng-container *ngSwitchCase=\"'input'\">\n            <input matInput [type]=\"!isPasswordVisible && type == 'password' ? type : inputType\"\n                [placeholder]=\"placeholder\" [value]=\"value\" [formControl]=\"control\" (input)=\"onChange($event)\"\n                [readonly]=\"readonly\" [attr.autocomplete]=\"autocomplete\">\n            <div *ngIf=\"type == 'password'\" class=\"password-visibility-icon\"\n                [class.password-visible]=\"isPasswordVisible\" matSuffix>\n                <mat-icon (click)=\"isPasswordVisible = !isPasswordVisible\">\n                    {{!isPasswordVisible ? 'visibility_off' : 'visibility'}}</mat-icon>\n            </div>\n        </ng-container>\n        <ng-container *ngSwitchCase=\"'textarea'\">\n            <textarea matInput [placeholder]=\"placeholder\" [formControl]=\"control\" (input)=\"onChange($event)\"\n                [readonly]=\"readonly\" [attr.autocomplete]=\"autocomplete\">{{value}}</textarea>\n        </ng-container>\n        <ng-container *ngSwitchCase=\"'datepicker'\">\n            <input matInput [type]=\"type\" [matDatepicker]=\"picker\" [placeholder]=\"placeholder\" [value]=\"value\"\n                [formControl]=\"control\" (dateChange)=\"onChange($event)\" (focus)=\"picker.open()\" (click)=\"picker.open()\"\n                [attr.autocomplete]=\"autocomplete\">\n            <button *ngIf=\"value\" type=\"button\" matSuffix mat-icon-button class=\"clear-date-btn\" (click)=\"clearDate()\"\n                title=\"Clear Date\">\n                <mat-icon>close</mat-icon>\n            </button>\n            <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n            <mat-datepicker #picker></mat-datepicker>\n        </ng-container>\n    </ng-container>\n    <mat-icon matSuffix *ngIf=\"icon\"><i [class]=\"icon\"></i></mat-icon>\n    <mat-error>{{_errors | getErrorMessages: control.errors}}</mat-error>\n    <div class=\"control-status control-loading-status\" *ngIf=\"isLoading\">\n        <i class=\"fa fa-spin fa-circle-o-notch\"></i>\n    </div>\n</mat-form-field>",
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => InputComponent)),
                        multi: true
                    },
                    {
                        provide: NG_VALIDATORS,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => InputComponent)),
                        multi: true
                    }
                ],
                styles: ["textarea.mat-input-element{resize:none;min-height:90px}.mat-datepicker-toggle{position:absolute;right:-10px;top:-18px}.mat-form-field-should-float .mat-datepicker-toggle{top:-14px}.clear-date-btn{position:absolute;right:25px;top:-14px}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.control-status{position:absolute;top:-24px;right:-14px}.control-loading-status{font-size:20px;color:#22a471;right:-14px}.non-label-field ::ng-deep .mat-form-field-infix{padding:0;border:0}.non-label-field ::ng-deep .mat-form-field-flex{padding-top:1.4em;padding-bottom:1.3em}.non-label-field ::ng-deep .mat-form-field-flex,.non-label-field ::ng-deep input{font-size:16px!important}.non-label-field ::ng-deep .control-status{top:-16px}.password-visibility-icon{position:absolute;top:-6px;right:-20px;left:auto;color:#597084;background-color:#fff;width:60px;height:40px;text-align:center}.password-visibility-icon.password-visible{color:#1f2430}.password-visibility-icon .mat-icon{cursor:pointer}"]
            }] }
];
/** @nocollapse */
InputComponent.ctorParameters = () => [];
InputComponent.propDecorators = {
    mode: [{ type: Input }],
    type: [{ type: Input }],
    appearance: [{ type: Input }],
    label: [{ type: Input }],
    placeholder: [{ type: Input }],
    icon: [{ type: Input }],
    autocomplete: [{ type: Input }],
    control: [{ type: Input }],
    readonly: [{ type: Input }],
    errors: [{ type: Input }],
    requiredErrMessage: [{ type: Input }],
    emailErrMessage: [{ type: Input }],
    minLengthErrMessage: [{ type: Input }],
    maxLengthErrMessage: [{ type: Input }],
    patternErrMessage: [{ type: Input }],
    mustMatchErrMessage: [{ type: Input }],
    mustNotMatchErrMessage: [{ type: Input }],
    invalidErrMessage: [{ type: Input }],
    isLoading: [{ type: Input }],
    showControlStatusIcon: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    InputComponent.prototype.mode;
    /** @type {?} */
    InputComponent.prototype.type;
    /** @type {?} */
    InputComponent.prototype.appearance;
    /** @type {?} */
    InputComponent.prototype.label;
    /** @type {?} */
    InputComponent.prototype.placeholder;
    /** @type {?} */
    InputComponent.prototype.icon;
    /** @type {?} */
    InputComponent.prototype.autocomplete;
    /** @type {?} */
    InputComponent.prototype.control;
    /** @type {?} */
    InputComponent.prototype.readonly;
    /** @type {?} */
    InputComponent.prototype.errors;
    /** @type {?} */
    InputComponent.prototype.requiredErrMessage;
    /** @type {?} */
    InputComponent.prototype.emailErrMessage;
    /** @type {?} */
    InputComponent.prototype.minLengthErrMessage;
    /** @type {?} */
    InputComponent.prototype.maxLengthErrMessage;
    /** @type {?} */
    InputComponent.prototype.patternErrMessage;
    /** @type {?} */
    InputComponent.prototype.mustMatchErrMessage;
    /** @type {?} */
    InputComponent.prototype.mustNotMatchErrMessage;
    /** @type {?} */
    InputComponent.prototype.invalidErrMessage;
    /** @type {?} */
    InputComponent.prototype.isLoading;
    /** @type {?} */
    InputComponent.prototype.showControlStatusIcon;
    /** @type {?} */
    InputComponent.prototype.isPasswordVisible;
    /** @type {?} */
    InputComponent.prototype.inputType;
    /** @type {?} */
    InputComponent.prototype.value;
    /** @type {?} */
    InputComponent.prototype.disabled;
    /**
     * @type {?}
     * @private
     */
    InputComponent.prototype.propagateChange;
    /**
     * @type {?}
     * @private
     */
    InputComponent.prototype.onTouched;
    /**
     * @type {?}
     * @private
     */
    InputComponent.prototype.validateFn;
    /** @type {?} */
    InputComponent.prototype._icon;
    /** @type {?} */
    InputComponent.prototype._errors;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/form-fields/pipes/form-error-handling.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FormErrorHandlingPipe {
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

/**
 * @fileoverview added by tsickle
 * Generated from: lib/form-fields/select/select.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SelectComponent {
    constructor() {
        this.appearance = "fill"; // standard | outline | fill
        // standard | outline | fill
        this.label = "";
        this.placeholder = "";
        this.keyAs = "single"; // key as single value or object, single | object
        // key as single value or object, single | object
        this.key = "id";
        this.text = "text";
        this.options = [];
        this.multiple = false;
        this.control = new FormControl();
        this.requiredErrMessage = "Required Field.";
        this.isLoading = false;
        this.onChange = new EventEmitter();
        this._errors = [];
        this.propagateChange = (/**
         * @param {?} _
         * @return {?}
         */
        (_) => { });
        this.onTouched = (/**
         * @return {?}
         */
        () => { });
        this.validateFn = (/**
         * @return {?}
         */
        () => { });
        this.disabled = false;
        this._errors = [
            {
                key: 'required',
                message: this.requiredErrMessage
            }
        ];
    }
    /**
     * ngOnInit
     * @return {?} void
     */
    ngOnInit() { }
    /**
     * ngOnChanges
     * @param {?} changes
     * @return {?} void
     */
    ngOnChanges(changes) {
        if (changes) {
            if (typeof changes.requiredErrMessage !== 'undefined') {
                /** @type {?} */
                let index = this._errors.findIndex((/**
                 * @param {?} x
                 * @return {?}
                 */
                (x) => {
                    return x.key === 'required';
                }));
                this._errors[index].message = changes.requiredErrMessage.currentValue;
            }
        }
    }
    /**
     * Write a value to the control
     * @param {?} value
     * @return {?} void
     */
    writeValue(value) {
        if (value) {
            this.value = value;
        }
    }
    /**
     * Register a function to tell Angular when the value of the input changes
     * @param {?} fn
     * @return {?} void
     */
    registerOnChange(fn) {
        this.propagateChange = fn;
    }
    /**
     * Register a function to tell Angular when the input has been touched
     * @param {?} fn
     * @return {?} void
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * On Change
     * @param {?} event
     * @return {?} void
     */
    onSelectionChange(event) {
        /** @type {?} */
        let _value = event.value;
        this.value = _value;
        this.propagateChange(this.value);
        this.onChange.emit(this.value);
    }
    /**
     * Compare Items
     * @param {?} option
     * @param {?} selected
     * @return {?} boolean
     */
    compareItems(option, selected) {
        if (typeof option !== 'undefined' && typeof selected !== 'undefined') {
            if (typeof option.id !== 'undefined' && typeof selected.id !== 'undefined') {
                return option.id === selected.id;
            }
            else {
                return option === selected;
            }
        }
        return false;
    }
    /**
     * Validate
     * @param {?} c
     * @return {?} any
     */
    validate(c) {
        return this.validateFn(c);
    }
    /**
     * Set Disabled State
     * @param {?} isDisabled
     * @return {?} void
     */
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
}
SelectComponent.decorators = [
    { type: Component, args: [{
                selector: "app-select",
                template: "<mat-form-field [appearance]=\"appearance\">\n  <mat-label>{{label}}</mat-label>\n  <mat-select [placeholder]=\"placeholder\" [value]=\"value\" [compareWith]=\"compareItems\" [formControl]=\"control\"\n    (selectionChange)=\"onSelectionChange($event)\" [multiple]=\"multiple ? true : null\">\n    <mat-option *ngFor=\"let option of options\" [value]=\"keyAs == 'object' ? option : option[key]\">\n      {{ option[text] }}\n    </mat-option>\n  </mat-select>\n  <mat-error>{{_errors | getErrorMessages: control.errors}}</mat-error>\n  <div class=\"control-loading\" *ngIf=\"isLoading\">\n    <i class=\"fa fa-spin fa-circle-o-notch\"></i>\n  </div>\n</mat-form-field>",
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => SelectComponent)),
                        multi: true
                    },
                    {
                        provide: NG_VALIDATORS,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => SelectComponent)),
                        multi: true
                    }
                ],
                styles: [".control-loading{font-size:26px;color:#22a471;position:absolute;right:-2px;top:-12px;background-color:#fff}"]
            }] }
];
/** @nocollapse */
SelectComponent.ctorParameters = () => [];
SelectComponent.propDecorators = {
    appearance: [{ type: Input }],
    label: [{ type: Input }],
    placeholder: [{ type: Input }],
    keyAs: [{ type: Input }],
    key: [{ type: Input }],
    text: [{ type: Input }],
    options: [{ type: Input }],
    multiple: [{ type: Input }],
    control: [{ type: Input }],
    requiredErrMessage: [{ type: Input }],
    isLoading: [{ type: Input }],
    onChange: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    SelectComponent.prototype.appearance;
    /** @type {?} */
    SelectComponent.prototype.label;
    /** @type {?} */
    SelectComponent.prototype.placeholder;
    /** @type {?} */
    SelectComponent.prototype.keyAs;
    /** @type {?} */
    SelectComponent.prototype.key;
    /** @type {?} */
    SelectComponent.prototype.text;
    /** @type {?} */
    SelectComponent.prototype.options;
    /** @type {?} */
    SelectComponent.prototype.multiple;
    /** @type {?} */
    SelectComponent.prototype.control;
    /** @type {?} */
    SelectComponent.prototype.requiredErrMessage;
    /** @type {?} */
    SelectComponent.prototype.isLoading;
    /** @type {?} */
    SelectComponent.prototype.onChange;
    /** @type {?} */
    SelectComponent.prototype.value;
    /** @type {?} */
    SelectComponent.prototype.disabled;
    /**
     * @type {?}
     * @private
     */
    SelectComponent.prototype.propagateChange;
    /**
     * @type {?}
     * @private
     */
    SelectComponent.prototype.onTouched;
    /**
     * @type {?}
     * @private
     */
    SelectComponent.prototype.validateFn;
    /** @type {?} */
    SelectComponent.prototype._errors;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/form-fields/button/button.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ButtonComponent {
    constructor() {
        this.variant = 'raised'; // raised | stroked | icon | icon-non-fab
        // raised | stroked | icon | icon-non-fab
        this.type = 'submit'; // submit | button
        // submit | button
        this.name = '';
        this.iconType = 'fa'; // fa | material
        // fa | material
        this.icon = '';
        this.disabled = false;
        this.isLoading = false;
        this.color = 'primary';
        this.onClick = new EventEmitter();
    }
    /**
     * ngOnInit
     * @return {?} void
     */
    ngOnInit() { }
    /**
     * OnClick
     * @return {?} void
     */
    _onClick() {
        this.onClick.emit();
    }
}
ButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-button',
                template: "<ng-container [ngSwitch]=\"variant\">\n    <ng-container *ngSwitchCase=\"'raised'\">\n        <button [type]=\"type\" mat-raised-button [color]=\"color\" [disabled]=\"disabled\" (click)=\"_onClick()\">\n            <ng-container *ngIf=\"isLoading\">\n                <mat-icon class=\"spinner\">\n                    <mat-spinner [color]=\"color\" diameter=\"22\">\n                    </mat-spinner>\n                </mat-icon>\n            </ng-container>\n            <ng-container *ngIf=\"!isLoading && icon != '' && iconType == 'fa'\">\n                <mat-icon [fontSet]=\"iconType\" [fontIcon]=\"icon\"></mat-icon>\n            </ng-container>\n            <ng-container *ngIf=\"!isLoading && icon != '' && iconType == 'material'\">\n                <mat-icon>{{icon}}</mat-icon>\n            </ng-container>\n            {{name}}\n        </button>\n    </ng-container>\n    <ng-container *ngSwitchCase=\"'stroked'\">\n        <button [type]=\"type\" mat-stroked-button [disabled]=\"disabled\" (click)=\"_onClick()\">\n            <ng-container *ngIf=\"isLoading\">\n                <mat-icon class=\"spinner\">\n                    <mat-spinner [color]=\"color\" diameter=\"22\">\n                    </mat-spinner>\n                </mat-icon>\n            </ng-container>\n            <ng-container *ngIf=\"!isLoading && icon != '' && iconType == 'fa'\">\n                <mat-icon [fontSet]=\"iconType\" [fontIcon]=\"icon\"></mat-icon>\n            </ng-container>\n            <ng-container *ngIf=\"!isLoading && icon != '' && iconType == 'material'\">\n                <mat-icon>{{icon}}</mat-icon>\n            </ng-container>\n            {{name}}\n        </button>\n    </ng-container>\n    <ng-container *ngSwitchCase=\"'icon'\">\n        <button [type]=\"type\" mat-icon-button mat-mini-fab [color]=\"color\" [disabled]=\"disabled\" (click)=\"_onClick()\">\n            <ng-container *ngIf=\"iconType == 'fa'; else materialIcon\">\n                <mat-icon [fontSet]=\"iconType\" [fontIcon]=\"icon\"></mat-icon>\n            </ng-container>\n            <ng-template #materialIcon>\n                <mat-icon>{{icon}}</mat-icon>\n            </ng-template>\n        </button>\n    </ng-container>\n    <ng-container *ngSwitchCase=\"'icon-non-fab'\">\n        <button [type]=\"type\" mat-icon-button [color]=\"color\" [disabled]=\"disabled\" (click)=\"_onClick()\">\n            <ng-container *ngIf=\"iconType == 'fa'; else materialIcon\">\n                <mat-icon [fontSet]=\"iconType\" [fontIcon]=\"icon\"></mat-icon>\n            </ng-container>\n            <ng-template #materialIcon>\n                <mat-icon>{{icon}}</mat-icon>\n            </ng-template>\n        </button>\n    </ng-container>\n</ng-container>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [""]
            }] }
];
/** @nocollapse */
ButtonComponent.ctorParameters = () => [];
ButtonComponent.propDecorators = {
    variant: [{ type: Input }],
    type: [{ type: Input }],
    name: [{ type: Input }],
    iconType: [{ type: Input }],
    icon: [{ type: Input }],
    disabled: [{ type: Input }],
    isLoading: [{ type: Input }],
    color: [{ type: Input }],
    onClick: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    ButtonComponent.prototype.variant;
    /** @type {?} */
    ButtonComponent.prototype.type;
    /** @type {?} */
    ButtonComponent.prototype.name;
    /** @type {?} */
    ButtonComponent.prototype.iconType;
    /** @type {?} */
    ButtonComponent.prototype.icon;
    /** @type {?} */
    ButtonComponent.prototype.disabled;
    /** @type {?} */
    ButtonComponent.prototype.isLoading;
    /** @type {?} */
    ButtonComponent.prototype.color;
    /** @type {?} */
    ButtonComponent.prototype.onClick;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/form-fields/file-input/file-input.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FileInputComponent {
    /**
     * @param {?} cd
     */
    constructor(cd) {
        this.cd = cd;
        this.label = 'Select File';
        this.accept = '*';
        this.control = new FormControl();
        this.isImagePreview = false;
        this.invalidFileSizeErrMessage = 'Please select a valid file with specified size.';
        this.onFileSelection = new EventEmitter();
        this.onFileChanged = new EventEmitter();
        this.value = null;
        this.fileName = '';
        this.imageUrl = '';
        this.isSelectedFileChanged = false;
        this.propagateChange = (/**
         * @param {?} _
         * @return {?}
         */
        (_) => { });
        this.onTouched = (/**
         * @return {?}
         */
        () => { });
        this.validateFn = (/**
         * @return {?}
         */
        () => { });
        this.disabled = false;
    }
    /**
     * ngOnInit
     * @return {?} void
     */
    ngOnInit() { }
    /**
     * Write a value to the control
     * @param {?} value
     * @return {?} void
     */
    writeValue(value) {
        if (value) {
            this.value = value;
            if (this.isImagePreview) {
                this.imageUrl = value;
            }
            else {
                this.fileName = value.substring(value.lastIndexOf('/') + 1);
            }
        }
    }
    /**
     * Register a function to tell Angular when the value of the input changes
     * @param {?} fn
     * @return {?} void
     */
    registerOnChange(fn) {
        this.propagateChange = fn;
    }
    /**
     * Register a function to tell Angular when the input has been touched
     * @param {?} fn
     * @return {?} void
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * Sanitize File Name
     * @param {?} name
     * @return {?} string
     */
    sanitizeFileName(name) {
        /** @type {?} */
        const dotIndex = name.lastIndexOf('.');
        /** @type {?} */
        const extension = name.substring(dotIndex + 1);
        name = name.substring(0, dotIndex);
        name = name.replace(/^\s+|\s+$/g, ''); // trim
        name = name.toLowerCase();
        /** @type {?} */
        let from = "àáäâèéëêìíïîòóöôùúüûñç/_,:;";
        /** @type {?} */
        let to = "aaaaeeeeiiiioooouuuunc------";
        for (let i = 0, l = from.length; i < l; i++) {
            name = name.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
        }
        name = name.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
            .replace(/\s+/g, '-') // collapse whitespace and replace by -
            .replace(/-+/g, '-'); // collapse dashes
        return name + '.' + extension;
    }
    /**
     * On Change
     * @param {?} event
     * @return {?} void
     */
    onChange(event) {
        /** @type {?} */
        let _value = event.target.files.length > 0 ? event.target.files[0] : null;
        if (this.value) {
            this.isSelectedFileChanged = true;
        }
        if (_value) {
            this.value = _value;
            this.fileName = this.sanitizeFileName(this.value.name);
            this.value.fileName = this.fileName;
            this.propagateChange(this.value);
            if (!this.control.pending) {
                this.onTouched();
            }
            if (this.isImagePreview) {
                this.showImagePreview();
            }
            this.onFileSelection.emit(this.isSelectedFileChanged);
            this.onFileChanged.emit(this.control);
        }
    }
    /**
     * On Select File
     * @return {?} void
     */
    onSelectFile() {
        this.fileInput.nativeElement.click();
    }
    /**
     * On Remove File
     * @return {?} void
     */
    onRemoveFile() {
        this.value = null;
        this.fileInput.nativeElement.value = null;
        this.propagateChange(this.value);
    }
    /**
     * Show Image Preview
     * @private
     * @return {?} void
     */
    showImagePreview() {
        /** @type {?} */
        const mimeType = this.value.type;
        if (mimeType.match(/image\/*/) == null) {
            return;
        }
        /** @type {?} */
        const reader = new FileReader();
        reader.readAsDataURL(this.value);
        reader.onload = (/**
         * @param {?} _
         * @return {?}
         */
        (_) => {
            this.imageUrl = reader.result;
            this.cd.detectChanges();
        });
    }
    /**
     * Validate
     * @param {?} c
     * @return {?} any
     */
    validate(c) {
        return this.validateFn(c);
    }
    /**
     * Set Disabled State
     * @param {?} isDisabled
     * @return {?} void
     */
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
}
FileInputComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-file-input',
                template: "<div class=\"file-input\">\n    <div class=\"file-input__box\" [class.file-input__box--selected]=\"value\"\n        [class.file-input__box--image-preview]=\"isImagePreview && value != null\">\n        <div class=\"file-input__box__unselected-view\" *ngIf=\"value === null\">\n            <div class=\"file-input__box__plus-icon\"><i class=\"material-icons\">add</i></div>\n            <div class=\"file-input__box__select-button\">\n                <app-button variant=\"stroked\" type=\"button\" name=\"{{label}}\" (onClick)=\"onSelectFile()\"></app-button>\n            </div>\n        </div>\n        <div class=\"file-input__box__selected-view\" *ngIf=\"!isImagePreview && value !== null\">\n            <div class=\"file-input__box__name\">{{fileName}}</div>\n        </div>\n        <div class=\"file-input__box__image-preview\" *ngIf=\"isImagePreview && value !== null\">\n            <img [src]=\"imageUrl\" />\n        </div>\n        <div class=\"file-input__box__change-button\" *ngIf=\"value !== null\">\n            <app-button variant=\"icon\" type=\"button\" color=\"primary\" icon=\"edit\" iconType=\"material\"\n                (onClick)=\"onSelectFile()\"></app-button>\n        </div>\n        <input #fileInput type=\"file\" accept=\"{{accept}}\" (change)=\"onChange($event)\" style=\"display:none;\" />\n    </div>\n    <div *ngIf=\"control.invalid && (control.dirty || control.touched)\" class=\"file-input__error\">\n        <div *ngIf=\"control.errors.required\">\n            Required Field.\n        </div>\n        <div *ngIf=\"control.errors?.InvalidFileSize\">\n            {{invalidFileSizeErrMessage}}\n        </div>\n    </div>\n</div>",
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => FileInputComponent)),
                        multi: true
                    },
                    {
                        provide: NG_VALIDATORS,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => FileInputComponent)),
                        multi: true
                    }
                ],
                styles: [".file-input__box{background-color:#fff;border:1px dashed #dadce1;height:215px;padding:0 25px;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;position:relative}.file-input__box--selected{border-style:solid;border-top:0;border-left:0;border-right:0;border-bottom:2px solid #4a3ae7}.file-input__box--image-preview{padding:0;border:1px solid #dadce1}.file-input__box__selected-view,.file-input__box__unselected-view{width:100%;text-align:center}.file-input__box__plus-icon{margin-bottom:30px}.file-input__box__plus-icon i{font-size:40px;color:#4a3ae7}.file-input__box__name{margin-bottom:0;font-size:15px;color:#1f2430}.file-input__box__image-preview,.file-input__box__image-preview img{width:100%;height:100%}.file-input__box__change-button{position:absolute;top:auto;bottom:5px;right:5px;left:auto}.file-input__box__change-button ::ng-deep button{width:42px;height:42px}.file-input__error{color:#f44336;font-size:75%;margin-top:5px}"]
            }] }
];
/** @nocollapse */
FileInputComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
FileInputComponent.propDecorators = {
    fileInput: [{ type: ViewChild, args: ['fileInput', { read: ElementRef, static: true },] }],
    label: [{ type: Input }],
    accept: [{ type: Input }],
    control: [{ type: Input }],
    isImagePreview: [{ type: Input }],
    invalidFileSizeErrMessage: [{ type: Input }],
    onFileSelection: [{ type: Output }],
    onFileChanged: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    FileInputComponent.prototype.fileInput;
    /** @type {?} */
    FileInputComponent.prototype.label;
    /** @type {?} */
    FileInputComponent.prototype.accept;
    /** @type {?} */
    FileInputComponent.prototype.control;
    /** @type {?} */
    FileInputComponent.prototype.isImagePreview;
    /** @type {?} */
    FileInputComponent.prototype.invalidFileSizeErrMessage;
    /** @type {?} */
    FileInputComponent.prototype.onFileSelection;
    /** @type {?} */
    FileInputComponent.prototype.onFileChanged;
    /** @type {?} */
    FileInputComponent.prototype.value;
    /** @type {?} */
    FileInputComponent.prototype.disabled;
    /** @type {?} */
    FileInputComponent.prototype.fileName;
    /** @type {?} */
    FileInputComponent.prototype.imageUrl;
    /** @type {?} */
    FileInputComponent.prototype.isSelectedFileChanged;
    /**
     * @type {?}
     * @private
     */
    FileInputComponent.prototype.propagateChange;
    /**
     * @type {?}
     * @private
     */
    FileInputComponent.prototype.onTouched;
    /**
     * @type {?}
     * @private
     */
    FileInputComponent.prototype.validateFn;
    /**
     * @type {?}
     * @private
     */
    FileInputComponent.prototype.cd;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/form-fields/custom-chip-checkbox/custom-chip-checkbox.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomChipCheckboxComponent {
    constructor() {
        this.key = "id";
        this.text = "name";
        this.selected = "selected";
        this.propagateChange = (/**
         * @param {?} _
         * @return {?}
         */
        (_) => { });
        this.onTouched = (/**
         * @return {?}
         */
        () => { });
        this.validateFn = (/**
         * @return {?}
         */
        () => { });
    }
    /**
     * ngOnInit
     * @return {?} void
     */
    ngOnInit() {
    }
    /**
     * Write a value to the control
     * @param {?} value
     * @return {?} void
     */
    writeValue(value) {
        if (value) {
            this.value = value;
        }
    }
    /**
     * Register a function to tell Angular when the value of the input changes
     * @param {?} fn
     * @return {?} void
     */
    registerOnChange(fn) {
        this.propagateChange = fn;
    }
    /**
     * Register a function to tell Angular when the input has been touched
     * @param {?} fn
     * @return {?} void
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * On Change
     * @param {?} value
     * @return {?} void
     */
    onChange(value) {
        this.value[this.selected] = !value[this.selected];
        this.onTouched();
        this.propagateChange(this.value);
    }
    /**
     * Validate
     * @param {?} c
     * @return {?} any
     */
    validate(c) {
        return this.validateFn(c);
    }
    /**
     * Set Disabled State
     * @param {?} isDisabled
     * @return {?} void
     */
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
}
CustomChipCheckboxComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-custom-chip-checkbox',
                template: "<div class=\"custom-chip-checkbox\" [class.custom-chip-checkbox--selected]=\"value[selected]\" (click)=\"onChange(value)\">\n    <div class=\"custom-chip-checkbox__icon\" *ngIf=\"value[selected]\">\n        <img\n            src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMThweCIgaGVpZ2h0PSIxOHB4IiB2aWV3Qm94PSIwIDAgMTggMTgiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDYwLjEgKDg4MTMzKSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT50aWNrPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9IldlbGNvbWUiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJEZXNpcmVkLVJvbGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yNjguMDAwMDAwLCAtNDk5LjAwMDAwMCkiIGZpbGw9IiNGRkZGRkYiIGZpbGwtcnVsZT0ibm9uemVybyI+CiAgICAgICAgICAgIDxnIGlkPSJ0aWNrIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNjguMDAwMDAwLCA0OTkuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTcuNTY2LDIuMDU2ODUzOTMgQzE3LjQxNTk0NTQsMS45MDQ5NDQ0MSAxNy4yMTIzMjc0LDEuODE5NTg4MzIgMTcsMS44MTk1ODgzMiBDMTYuNzg3NjcyNiwxLjgxOTU4ODMyIDE2LjU4NDA1NDYsMS45MDQ5NDQ0MSAxNi40MzQsMi4wNTY4NTM5MyBMOSw5LjU3NDM4MjAyIEw2LjM2Niw2LjkxMDc4NjUyIEM2LjA1MzQwNjgzLDYuNTk0NjgxMDcgNS41NDY1OTMxNyw2LjU5NDY4MTA4IDUuMjM0MDAwMDEsNi45MTA3ODY1MyBDNC45MjE0MDY4NCw3LjIyNjg5MTk3IDQuOTIxNDA2ODQsNy43Mzk0MDAxNyA1LjIzNCw4LjA1NTUwNTYyIEw4LjQzNCwxMS4yOTE0NjA3IEM4LjU4NDA1NDYxLDExLjQ0MzM3MDIgOC43ODc2NzI2LDExLjUyODcyNjMgOSwxMS41Mjg3MjYzIEM5LjIxMjMyNzQsMTEuNTI4NzI2MyA5LjQxNTk0NTM5LDExLjQ0MzM3MDIgOS41NjYsMTEuMjkxNDYwNyBMMTcuNTY2LDMuMjAxNTczMDMgQzE3LjcxNjIyMTYsMy4wNDk4MzI0MiAxNy44MDA2MjkzLDIuODQzOTI2NTggMTcuODAwNjI5MywyLjYyOTIxMzQ4IEMxNy44MDA2MjkzLDIuNDE0NTAwMzggMTcuNzE2MjIxNiwyLjIwODU5NDU1IDE3LjU2NiwyLjA1Njg1MzkzIFoiIGlkPSJQYXRoIj48L3BhdGg+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTcuNjI0LDcuMzE3MzAzMzcgQzE3LjU2NjgzNzUsNy4wMzQwNTk5OSAxNy4zNjQ1ODc2LDYuODAzMTcwNzkgMTcuMDkzNDM1OSw2LjcxMTYwOTQ5IEMxNi44MjIyODQyLDYuNjIwMDQ4MiAxNi41MjM0MjUxLDYuNjgxNzI1MTYgMTYuMzA5NDM1OSw2Ljg3MzQwNzI1IEMxNi4wOTU0NDY3LDcuMDY1MDg5MzQgMTUuOTk4ODM3NSw3LjM1NzY1NTUgMTYuMDU2LDcuNjQwODk4ODggQzE2LjczNTEzODUsMTAuOTk0NTM1MiAxNS4wMTIyOTE2LDE0LjM3MzY2ODggMTEuOTE2ODI0NiwxNS43NTkzMzc4IEM4LjgyMTM1NzU5LDE3LjE0NTAwNjkgNS4xODkzODE2MSwxNi4xNjI5MzA2IDMuMTkwOTI2NjUsMTMuMzk5ODc5MiBDMS4xOTI0NzE2OSwxMC42MzY4Mjc4IDEuMzY3MzM2OTYsNi44MzkxMjQyMyAzLjYxMTA0NDExLDQuMjc1ODE3MjkgQzUuODU0NzUxMjYsMS43MTI1MTAzNCA5LjU2MTI1NjQzLDEuMDc1OTcwNDIgMTIuNTE2LDIuNzQ2NTE2ODUgQzEyLjkwMjU5OTMsMi45NjU0NDUwMSAxMy4zOTE1MDQ0LDIuODI1OTk5MzIgMTMuNjA4LDIuNDM1MDU2MTggQzEzLjgyNDQ5NTYsMi4wNDQxMTMwNCAxMy42ODY1OTkzLDEuNTQ5NzE0NjcgMTMuMywxLjMzMDc4NjUyIEM5LjgzNDc2MzMzLC0wLjYzMTcyMjU2MSA1LjQ5OTA0MTUxLC0wLjAwMzc4NzQ1ODY4IDIuNzE3ODIxNzYsMi44NjMzODUxMSBDLTAuMDYzMzk3OTgwNSw1LjczMDU1NzY4IC0wLjYwMDczMDAzMiwxMC4xMjYyNzY4IDEuNDA2MzU3NjYsMTMuNTkxOTk4NiBDMy40MTM0NDUzNSwxNy4wNTc3MjAzIDcuNDY3NDUyNTcsMTguNzM0MzkwNCAxMS4zMDA5NTYzLDE3LjY4NDI0MDMgQzE1LjEzNDQ1OTksMTYuNjM0MDkwMSAxNy43OTcyNDMxLDEzLjExNzQyMjMgMTcuOCw5LjEwMTEyMzYgQzE3Ljc5OTY5NzQsOC41MDIxMDAxMSAxNy43NDA3NDMxLDcuOTA0NTc4NjggMTcuNjI0LDcuMzE3MzAzMzcgWiIgaWQ9IlBhdGgiPjwvcGF0aD4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+\" />\n    </div>\n    <div class=\"custom-chip-checkbox__name\" [class.custom-chip-checkbox__name--selected]=\"value[selected]\">\n        {{value[text]}}\n    </div>\n</div>",
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => CustomChipCheckboxComponent)),
                        multi: true
                    },
                    {
                        provide: NG_VALIDATORS,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => CustomChipCheckboxComponent)),
                        multi: true
                    }
                ],
                styles: [".custom-chip-checkbox{border:1px solid #ced0d5;height:100px;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;position:relative;padding:0 25px;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.custom-chip-checkbox--selected{background-color:#4540de}.custom-chip-checkbox__icon{position:absolute;top:5px;left:10px}.custom-chip-checkbox__name{font-size:17px;color:#1f2430;text-align:center}.custom-chip-checkbox__name--selected{color:#fff}"]
            }] }
];
/** @nocollapse */
CustomChipCheckboxComponent.ctorParameters = () => [];
CustomChipCheckboxComponent.propDecorators = {
    key: [{ type: Input }],
    text: [{ type: Input }],
    selected: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    CustomChipCheckboxComponent.prototype.key;
    /** @type {?} */
    CustomChipCheckboxComponent.prototype.text;
    /** @type {?} */
    CustomChipCheckboxComponent.prototype.selected;
    /** @type {?} */
    CustomChipCheckboxComponent.prototype.value;
    /** @type {?} */
    CustomChipCheckboxComponent.prototype.disabled;
    /**
     * @type {?}
     * @private
     */
    CustomChipCheckboxComponent.prototype.propagateChange;
    /**
     * @type {?}
     * @private
     */
    CustomChipCheckboxComponent.prototype.onTouched;
    /**
     * @type {?}
     * @private
     */
    CustomChipCheckboxComponent.prototype.validateFn;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/form-fields/form-fields.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Date Formats
/** @type {?} */
const CUSTOM_DATE_FORMATS = {
    parse: {
        dateInput: 'DD-MM-YYYY',
    },
    display: {
        dateInput: 'DD-MM-YYYY',
        monthYearLabel: 'MMM YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MMMM YYYY',
    },
};
const ɵ0 = { useUtc: true };
class FormFieldsModule {
}
FormFieldsModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    ReactiveFormsModule,
                    MatFormFieldModule,
                    MatIconModule,
                    MatButtonModule,
                    MatInputModule,
                    MatSelectModule,
                    MatDatepickerModule,
                    MatMomentDateModule,
                    MatCheckboxModule,
                    MatProgressSpinnerModule
                ],
                declarations: [InputComponent, FormErrorHandlingPipe, SelectComponent, ButtonComponent, FileInputComponent, CustomChipCheckboxComponent],
                exports: [MatIconModule, MatButtonModule, MatCheckboxModule, InputComponent, SelectComponent, ButtonComponent, FileInputComponent, CustomChipCheckboxComponent],
                providers: [
                    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
                    { provide: MAT_DATE_FORMATS, useValue: CUSTOM_DATE_FORMATS },
                    { provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: ɵ0 }
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/dialogs/confirmation-dialog/confirmation-dialog.model.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ConfirmationDialogConfig {
    constructor() {
        this.type = ''; // primary | warn | accent
        // primary | warn | accent
        this.icon = '';
        this.iconType = 'fa'; // fa | material
        // fa | material
        this.title = '';
        this.message = '';
        this.yesBtnText = 'Yes';
        this.noBtnText = 'No';
    }
}
if (false) {
    /** @type {?} */
    ConfirmationDialogConfig.prototype.type;
    /** @type {?} */
    ConfirmationDialogConfig.prototype.icon;
    /** @type {?} */
    ConfirmationDialogConfig.prototype.iconType;
    /** @type {?} */
    ConfirmationDialogConfig.prototype.title;
    /** @type {?} */
    ConfirmationDialogConfig.prototype.message;
    /** @type {?} */
    ConfirmationDialogConfig.prototype.yesBtnText;
    /** @type {?} */
    ConfirmationDialogConfig.prototype.noBtnText;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/dialogs/confirmation-dialog/confirmation-dialog.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ConfirmationDialogComponent {
    /**
     * @param {?} ref
     * @param {?} config
     */
    constructor(ref, config) {
        this.ref = ref;
        this.config = config;
    }
    /**
     * ngOnInit
     * @return {?} void
     */
    ngOnInit() { }
    /**
     * On Dialog Close
     * @param {?=} result
     * @return {?} void
     */
    close(result = false) {
        this.ref.close(result);
    }
}
ConfirmationDialogComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-confirmation-dialog',
                template: "<div class=\"confirmation-dialog \">\n    <div class=\"confirmation-dialog__icon confirmation-dialog__icon--{{config.type}}\">\n        <ng-container *ngIf=\"config.iconType == 'fa'; else materialIcon\">\n            <mat-icon [fontSet]=\"config.iconType\" [fontIcon]=\"config.icon\"></mat-icon>\n        </ng-container>\n        <ng-template #materialIcon>\n            <mat-icon>{{config.icon}}</mat-icon>\n        </ng-template>\n    </div>\n    <div class=\"row mt-4 confirmation-dialog__title\">\n        <h2 class=\"col-12\">{{config.title}}</h2>\n    </div>\n    <div class=\"row mt-2 confirmation-dialog__message\">\n        <p class=\"col-12\">{{config.message}}</p>\n    </div>\n    <div class=\"row mt-4\">\n        <div class=\"col-6 offset-sm-2 col-sm-4\">\n            <button type=\"button\" mat-raised-button [color]=\"config.type\" (click)=\"close(true)\" tabindex=\"1\">\n                {{config.yesBtnText}}\n            </button>\n        </div>\n        <div class=\"col-6 col-sm-4\">\n            <button type=\"button\" mat-stroked-button (click)=\"close(false)\" tabindex=\"2\">\n                {{config.noBtnText}}\n            </button>\n        </div>\n    </div>\n</div>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".confirmation-dialog{width:370px;padding:10px 0;text-align:center}@media (max-width:576px){.confirmation-dialog{width:auto}}.confirmation-dialog__icon--warn{color:#f44336}.confirmation-dialog__icon .mat-icon{font-size:60px;width:60px;height:60px}.confirmation-dialog__title h2{font-size:2.1rem}.confirmation-dialog__message p{font-size:1.08rem}"]
            }] }
];
/** @nocollapse */
ConfirmationDialogComponent.ctorParameters = () => [
    { type: MatDialogRef },
    { type: ConfirmationDialogConfig, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    ConfirmationDialogComponent.prototype.ref;
    /** @type {?} */
    ConfirmationDialogComponent.prototype.config;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/dialogs/confirmation-dialog/confirmation-dialog.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ConfirmationDialogService {
    /**
     * @param {?} dialog
     */
    constructor(dialog) {
        this.dialog = dialog;
    }
    /**
     * @param {?} data
     * @param {?} callback
     * @return {?}
     */
    open(data, callback) {
        /** @type {?} */
        const ref = this.dialog.open(ConfirmationDialogComponent, {
            data: data,
            autoFocus: false
        });
        ref.afterClosed().subscribe((/**
         * @param {?} result
         * @return {?}
         */
        result => {
            if (callback) {
                callback(result);
            }
        }));
    }
}
ConfirmationDialogService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
ConfirmationDialogService.ctorParameters = () => [
    { type: MatDialog }
];
/** @nocollapse */ ConfirmationDialogService.ngInjectableDef = ɵɵdefineInjectable({ factory: function ConfirmationDialogService_Factory() { return new ConfirmationDialogService(ɵɵinject(MatDialog$1)); }, token: ConfirmationDialogService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    ConfirmationDialogService.prototype.dialog;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/dialogs/confirmation-dialog/confirmation-dialog.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ConfirmationDialogModule {
}
ConfirmationDialogModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    MatDialogModule,
                    MatIconModule,
                    MatButtonModule
                ],
                declarations: [
                    ConfirmationDialogComponent
                ],
                exports: [],
                entryComponents: [
                    ConfirmationDialogComponent
                ],
                providers: [
                    ConfirmationDialogService
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/error.handler.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ErrorHandlerService {
    constructor() { }
    /**
     * @param {?} error
     * @return {?}
     */
    handleError(error) {
        console.info('DERSBOOK Error: ', error);
    }
}
ErrorHandlerService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
ErrorHandlerService.ctorParameters = () => [];
/** @nocollapse */ ErrorHandlerService.ngInjectableDef = ɵɵdefineInjectable({ factory: function ErrorHandlerService_Factory() { return new ErrorHandlerService(); }, token: ErrorHandlerService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: lib/middlewares/error.middleware.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Parse GraphQL Errors
 * @param {?} errors
 * @return {?}
 */
function parseGraphQLErrors(errors) {
    /** @type {?} */
    let exception = errors.length > 0 ? errors[0] : {
        error: ExceptionCodes.graphClientError,
        message: ExceptionMessages.somethingWentWrong
    };
    exception = parseServerValidationErrors(exception);
    return exception;
}
/**
 * Parse GraphQL Server Validation Errors
 * @param {?} exception
 * @return {?}
 */
function parseServerValidationErrors(exception) {
    /** @type {?} */
    const exceptionMessage = exception.message && exception.message instanceof Array && exception.message.length > 0 ? exception.message[0] : exception.message;
    if (typeof exceptionMessage === 'object' && 'constraints' in exceptionMessage) {
        /** @type {?} */
        const constraints = exceptionMessage['constraints'];
        exception.message = constraints.length > 0 ? constraints[0] : '';
    }
    return exception;
}
/**
 * GraphQL Error Middleware
 * \@param toastr
 * \@return void
 * @type {?}
 */
const errorMiddleware = (/**
 * @param {?} toastr
 * @return {?}
 */
(toastr) => onError((/**
 * @param {?} __0
 * @return {?}
 */
({ graphQLErrors, networkError }) => {
    if (!navigator.onLine) {
        toastr.errorNotification('No Internet Connection');
    }
    else if (graphQLErrors && graphQLErrors.length > 0) {
        /** @type {?} */
        const errors = [];
        graphQLErrors.forEach((/**
         * @param {?} __0
         * @return {?}
         */
        ({ message }) => {
            errors.push(message);
        }));
        /** @type {?} */
        const error = parseGraphQLErrors(errors);
        if (error.message && error.message !== '') {
            toastr.errorNotification(error.message);
        }
    }
    else if (networkError) {
        /** @type {?} */
        let message = networkError.message;
        if (networkError.message.indexOf('unauthorized') > -1) {
            message = 'Session has been expired, please login again.';
        }
        toastr.errorNotification(message);
    }
})));

/**
 * @fileoverview added by tsickle
 * Generated from: lib/middlewares/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: lib/helpers/must.match.validator.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// custom validator to check that two fields match
/**
 * @param {?} controlName
 * @param {?} matchingControlName
 * @return {?}
 */
function MustMatch(controlName, matchingControlName) {
    return (/**
     * @param {?} formGroup
     * @return {?}
     */
    (formGroup) => {
        /** @type {?} */
        const control = formGroup.controls[controlName];
        /** @type {?} */
        const matchingControl = formGroup.controls[matchingControlName];
        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // return if another validator has already found an error on the matchingControl
            return;
        }
        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        }
        else {
            matchingControl.setErrors(null);
        }
    });
}

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
function MustNotMatch(controlName, matchingControlName) {
    return (/**
     * @param {?} formGroup
     * @return {?}
     */
    (formGroup) => {
        /** @type {?} */
        const control = formGroup.controls[controlName];
        /** @type {?} */
        const matchingControl = formGroup.controls[matchingControlName];
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
function ValidateFileSize(size) {
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

/**
 * @fileoverview added by tsickle
 * Generated from: lib/helpers/currency.formatter.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} num
 * @return {?}
 */
function currencyFormatter(num) {
    return '$ ' + num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/helpers/random.password.generator.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
const ɵ0$1 = /**
 * @param {?} x
 * @return {?}
 */
(x) => {
    return x[Math.floor(Math.random() * x.length)];
};
/** @type {?} */
const randomPasswordGenerator = Array(10).fill("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz").map((ɵ0$1)).join('');

/**
 * @fileoverview added by tsickle
 * Generated from: lib/helpers/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: lib/directives/disable.link.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DisableLinkDirective {
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

/**
 * @fileoverview added by tsickle
 * Generated from: lib/common.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LMSCommonModule {
}
LMSCommonModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    MatDialogModule,
                    MatIconModule
                ],
                declarations: [
                    ToastrComponent,
                    DisableLinkDirective
                ],
                exports: [
                    DisableLinkDirective
                ],
                entryComponents: [
                    ToastrComponent
                ],
                providers: [
                    {
                        provide: ErrorHandler,
                        useClass: ErrorHandlerService,
                    },
                    ToastrManager,
                    ToastrOptions
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: common.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { CUSTOM_DATE_FORMATS, ConfirmationDialogModule, ConfirmationDialogService, ErrorHandlerService, ExceptionCodes, ExceptionMessages, FormFieldsModule, GenericConstants, LMSCommonModule, MustMatch, MustNotMatch, RegExpPattern, Toastr, ToastrManager, ValidateFileSize, ValidationMessages, currencyFormatter, errorMiddleware, randomPasswordGenerator, InputComponent as ɵa, FormErrorHandlingPipe as ɵb, SelectComponent as ɵc, ButtonComponent as ɵd, FileInputComponent as ɵe, CustomChipCheckboxComponent as ɵf, ConfirmationDialogComponent as ɵg, ConfirmationDialogConfig as ɵh, ToastrComponent as ɵi, ToastrAnimations as ɵj, ToastrOptions as ɵk, DisableLinkDirective as ɵl, ErrorHandlerService as ɵm, ToastrManager as ɵn };
//# sourceMappingURL=common.js.map
