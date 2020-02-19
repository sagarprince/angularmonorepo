/**
 * @fileoverview added by tsickle
 * Generated from: lib/toastr-notifications/toastr.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Core
import { Component, ChangeDetectorRef, NgZone } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { Subject } from "rxjs";
import { ToastrOptions } from "./toastr.options";
import { ToastrAnimations } from "./toastr.animations";
export class ToastrComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3RyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NvbW1vbi8iLCJzb3VyY2VzIjpbImxpYi90b2FzdHItbm90aWZpY2F0aW9ucy90b2FzdHIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLE9BQU8sRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBRWhGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN6RCxPQUFPLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBSzNDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQVF2RCxNQUFNLE9BQU8sZUFBZTs7Ozs7OztJQWUxQixZQUNTLFNBQXVCLEVBQ3RCLEdBQXNCLEVBQ3RCLEtBQWEsRUFDckIsT0FBc0I7UUFIZixjQUFTLEdBQVQsU0FBUyxDQUFjO1FBQ3RCLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQ3RCLFVBQUssR0FBTCxLQUFLLENBQVE7UUFYdkIsWUFBTyxHQUFhLEVBQUUsQ0FBQztRQUVmLFdBQU0sR0FBWSxJQUFJLENBQUM7UUFHdkIsYUFBUSxHQUFpQixJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQ3ZDLFlBQU8sR0FBaUIsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQVE1QyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztJQUMvQixDQUFDOzs7O0lBRUQsT0FBTztRQUNMLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN0QyxDQUFDOzs7O0lBRUQsTUFBTTtRQUNKLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUNyQyxDQUFDOzs7OztJQUVELFNBQVMsQ0FBQyxLQUFhO1FB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Q0FBdUI7Ozs7O0lBRXZCLGlDQUErQjs7SUFDL0IseUNBQStDOzs7OztJQUUvQyxtQ0FBK0M7Ozs7O0lBQy9DLGtDQUE4Qzs7SUFHNUMsb0NBQThCOzs7OztJQUM5Qiw4QkFBOEI7Ozs7O0lBQzlCLGdDQUFxQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcmVcbmltcG9ydCB7IENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0b3JSZWYsIE5nWm9uZSwgT25EZXN0cm95IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEFuaW1hdGlvbkV2ZW50IH0gZnJvbSBcIkBhbmd1bGFyL2FuaW1hdGlvbnNcIjtcbmltcG9ydCB7IERvbVNhbml0aXplciB9IGZyb20gXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7IGZpcnN0IH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XG5cbi8vIENvbmZpZ1xuaW1wb3J0IHsgVG9hc3RyIH0gZnJvbSBcIi4vdG9hc3RyXCI7XG5pbXBvcnQgeyBUb2FzdHJPcHRpb25zIH0gZnJvbSBcIi4vdG9hc3RyLm9wdGlvbnNcIjtcbmltcG9ydCB7IFRvYXN0ckFuaW1hdGlvbnMgfSBmcm9tIFwiLi90b2FzdHIuYW5pbWF0aW9uc1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwiYXBwLXRvYXN0clwiLFxuICB0ZW1wbGF0ZVVybDogXCIuL3RvYXN0ci5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcIi4vdG9hc3RyLmNvbXBvbmVudC5zY3NzXCJdLFxuICBhbmltYXRpb25zOiBbVG9hc3RyQW5pbWF0aW9uc11cbn0pXG5leHBvcnQgY2xhc3MgVG9hc3RyQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgbWVzc2FnZUNsYXNzOiBzdHJpbmc7XG4gIHRpdGxlQ2xhc3M6IHN0cmluZztcbiAgcG9zaXRpb246IHN0cmluZztcbiAgbWF4U2hvd246IG51bWJlcjtcbiAgbmV3ZXN0T25Ub3A6IGJvb2xlYW47XG4gIGFuaW1hdGU6IHN0cmluZztcbiAgdG9hc3RyczogVG9hc3RyW10gPSBbXTtcblxuICBwcml2YXRlIF9mcmVzaDogYm9vbGVhbiA9IHRydWU7XG4gIHB1YmxpYyBvblRvYXN0Q2xpY2tlZDogKHRvYXN0OiBUb2FzdHIpID0+IHZvaWQ7XG5cbiAgcHJpdmF0ZSBfb25FbnRlcjogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3QoKTtcbiAgcHJpdmF0ZSBfb25FeGl0OiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdCgpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBzYW5pdGl6ZXI6IERvbVNhbml0aXplcixcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBfem9uZTogTmdab25lLFxuICAgIG9wdGlvbnM6IFRvYXN0ck9wdGlvbnNcbiAgKSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBvcHRpb25zKTtcbiAgfVxuXG4gIG9uRW50ZXIoKTogT2JzZXJ2YWJsZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuX29uRW50ZXIuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICBvbkV4aXQoKTogT2JzZXJ2YWJsZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuX29uRXhpdC5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIGFkZFRvYXN0cih0b2FzdDogVG9hc3RyKSB7XG4gICAgaWYgKHRoaXMucG9zaXRpb24uaW5kZXhPZihcInRvcFwiKSA+IDApIHtcbiAgICAgIGlmICh0aGlzLm5ld2VzdE9uVG9wKSB7XG4gICAgICAgIHRoaXMudG9hc3Rycy51bnNoaWZ0KHRvYXN0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudG9hc3Rycy5wdXNoKHRvYXN0KTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMudG9hc3Rycy5sZW5ndGggPiB0aGlzLm1heFNob3duKSB7XG4gICAgICAgIGNvbnN0IGRpZmYgPSB0aGlzLnRvYXN0cnMubGVuZ3RoIC0gdGhpcy5tYXhTaG93bjtcblxuICAgICAgICBpZiAodGhpcy5uZXdlc3RPblRvcCkge1xuICAgICAgICAgIHRoaXMudG9hc3Rycy5zcGxpY2UodGhpcy5tYXhTaG93bik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy50b2FzdHJzLnNwbGljZSgwLCBkaWZmKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRvYXN0cnMudW5zaGlmdCh0b2FzdCk7XG4gICAgICBpZiAodGhpcy50b2FzdHJzLmxlbmd0aCA+IHRoaXMubWF4U2hvd24pIHtcbiAgICAgICAgdGhpcy50b2FzdHJzLnNwbGljZSh0aGlzLm1heFNob3duKTtcbiAgICAgIH1cbiAgICB9ICAgIFxuXG4gICAgaWYgKHRoaXMuYW5pbWF0ZSA9PT0gbnVsbCAmJiB0aGlzLl9mcmVzaCkge1xuICAgICAgdGhpcy5fZnJlc2ggPSBmYWxzZTtcbiAgICAgIHRoaXMuX29uRW50ZXIubmV4dCgpO1xuICAgICAgdGhpcy5fb25FbnRlci5jb21wbGV0ZSgpO1xuICAgIH1cblxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIHJlbW92ZVRvYXN0cih0b2FzdDogVG9hc3RyKSB7XG4gICAgaWYgKHRvYXN0LnRpbWVvdXRJZCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRvYXN0LnRpbWVvdXRJZCk7XG4gICAgICB0b2FzdC50aW1lb3V0SWQgPSBudWxsO1xuICAgIH1cblxuICAgIHRoaXMudG9hc3RycyA9IHRoaXMudG9hc3Rycy5maWx0ZXIodCA9PiB7XG4gICAgICByZXR1cm4gdC5pZCAhPT0gdG9hc3QuaWQ7XG4gICAgfSk7XG4gIH1cblxuICByZW1vdmVBbGxUb2FzdHMoKSB7XG4gICAgdGhpcy50b2FzdHJzLmZvckVhY2goKHRvYXN0OiBUb2FzdHIpID0+IHtcbiAgICAgIGNsZWFyVGltZW91dCh0b2FzdC50aW1lb3V0SWQpO1xuICAgICAgdG9hc3QudGltZW91dElkID0gbnVsbDtcbiAgICB9KTtcbiAgICBcbiAgICB0aGlzLnRvYXN0cnMgPSBbXTtcbiAgfVxuXG4gIGNsaWNrZWQodG9hc3Q6IFRvYXN0cikge1xuICAgIGlmICh0aGlzLm9uVG9hc3RDbGlja2VkKSB7XG4gICAgICB0aGlzLm9uVG9hc3RDbGlja2VkKHRvYXN0KTtcbiAgICB9XG4gIH1cblxuICBhbnlUb2FzdCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy50b2FzdHJzLmxlbmd0aCA+IDA7XG4gIH1cblxuICBmaW5kVG9hc3QodG9hc3RJZDogbnVtYmVyKTogVG9hc3RyIHwgdm9pZCB7XG4gICAgZm9yIChsZXQgdG9hc3Qgb2YgdGhpcy50b2FzdHJzKSB7XG4gICAgICBpZiAodG9hc3QuaWQgPT09IHRvYXN0SWQpIHtcbiAgICAgICAgcmV0dXJuIHRvYXN0O1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIG9uQW5pbWF0aW9uRW5kKGV2ZW50OiBBbmltYXRpb25FdmVudCkge1xuICAgIGlmIChldmVudC50b1N0YXRlID09PSBcInZvaWRcIiAmJiAhdGhpcy5hbnlUb2FzdCgpKSB7XG4gICAgICB0aGlzLl9uZ0V4aXQoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuX2ZyZXNoICYmIGV2ZW50LmZyb21TdGF0ZSA9PT0gXCJ2b2lkXCIpIHtcbiAgICAgIC8vIG5vdGlmeSB3aGVuIGZpcnN0IGFuaW1hdGlvbiBpcyBkb25lXG4gICAgICB0aGlzLl9mcmVzaCA9IGZhbHNlO1xuICAgICAgdGhpcy5fem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICB0aGlzLl9vbkVudGVyLm5leHQoKTtcbiAgICAgICAgdGhpcy5fb25FbnRlci5jb21wbGV0ZSgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfbmdFeGl0KCkge1xuICAgIHRoaXMuX3pvbmUub25NaWNyb3Rhc2tFbXB0eS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5fb25FeGl0Lm5leHQoKTtcbiAgICAgIHRoaXMuX29uRXhpdC5jb21wbGV0ZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5fbmdFeGl0KCk7XG4gIH1cbn1cbiJdfQ==