/**
 * @fileoverview added by tsickle
 * Generated from: lib/toastr-notifications/toastr.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// Core
import { Component, ChangeDetectorRef, NgZone } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { Subject } from "rxjs";
import { ToastrOptions } from "./toastr.options";
import { ToastrAnimations } from "./toastr.animations";
var ToastrComponent = /** @class */ (function () {
    function ToastrComponent(sanitizer, cdr, _zone, options) {
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
    ToastrComponent.prototype.onEnter = /**
     * @return {?}
     */
    function () {
        return this._onEnter.asObservable();
    };
    /**
     * @return {?}
     */
    ToastrComponent.prototype.onExit = /**
     * @return {?}
     */
    function () {
        return this._onExit.asObservable();
    };
    /**
     * @param {?} toast
     * @return {?}
     */
    ToastrComponent.prototype.addToastr = /**
     * @param {?} toast
     * @return {?}
     */
    function (toast) {
        if (this.position.indexOf("top") > 0) {
            if (this.newestOnTop) {
                this.toastrs.unshift(toast);
            }
            else {
                this.toastrs.push(toast);
            }
            if (this.toastrs.length > this.maxShown) {
                /** @type {?} */
                var diff = this.toastrs.length - this.maxShown;
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
    };
    /**
     * @param {?} toast
     * @return {?}
     */
    ToastrComponent.prototype.removeToastr = /**
     * @param {?} toast
     * @return {?}
     */
    function (toast) {
        if (toast.timeoutId) {
            clearTimeout(toast.timeoutId);
            toast.timeoutId = null;
        }
        this.toastrs = this.toastrs.filter((/**
         * @param {?} t
         * @return {?}
         */
        function (t) {
            return t.id !== toast.id;
        }));
    };
    /**
     * @return {?}
     */
    ToastrComponent.prototype.removeAllToasts = /**
     * @return {?}
     */
    function () {
        this.toastrs.forEach((/**
         * @param {?} toast
         * @return {?}
         */
        function (toast) {
            clearTimeout(toast.timeoutId);
            toast.timeoutId = null;
        }));
        this.toastrs = [];
    };
    /**
     * @param {?} toast
     * @return {?}
     */
    ToastrComponent.prototype.clicked = /**
     * @param {?} toast
     * @return {?}
     */
    function (toast) {
        if (this.onToastClicked) {
            this.onToastClicked(toast);
        }
    };
    /**
     * @return {?}
     */
    ToastrComponent.prototype.anyToast = /**
     * @return {?}
     */
    function () {
        return this.toastrs.length > 0;
    };
    /**
     * @param {?} toastId
     * @return {?}
     */
    ToastrComponent.prototype.findToast = /**
     * @param {?} toastId
     * @return {?}
     */
    function (toastId) {
        var e_1, _a;
        try {
            for (var _b = tslib_1.__values(this.toastrs), _c = _b.next(); !_c.done; _c = _b.next()) {
                var toast = _c.value;
                if (toast.id === toastId) {
                    return toast;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return null;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ToastrComponent.prototype.onAnimationEnd = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        if (event.toState === "void" && !this.anyToast()) {
            this._ngExit();
        }
        else if (this._fresh && event.fromState === "void") {
            // notify when first animation is done
            this._fresh = false;
            this._zone.run((/**
             * @return {?}
             */
            function () {
                _this._onEnter.next();
                _this._onEnter.complete();
            }));
        }
    };
    /**
     * @private
     * @return {?}
     */
    ToastrComponent.prototype._ngExit = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this._zone.onMicrotaskEmpty.subscribe((/**
         * @return {?}
         */
        function () {
            _this._onExit.next();
            _this._onExit.complete();
        }));
    };
    /**
     * @return {?}
     */
    ToastrComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._ngExit();
    };
    ToastrComponent.decorators = [
        { type: Component, args: [{
                    selector: "app-toastr",
                    template: "<div #toastrContainer id=\"toastr-container\" class=\"{{position}}\">\n  <div *ngFor=\"let toastr of toastrs\" [@inOut]=\"toastr.config.animate || animate\" (@inOut.done)=\"onAnimationEnd($event)\"\n    class=\"toastr toastr-{{toastr.type}}\" (click)=\"clicked(toastr)\">\n    <div *ngIf=\"toastr.title\" class=\"to-title {{toastr.config.titleClass || titleClass}}\">{{toastr.title}}</div>\n    <div [ngSwitch]=\"toastr.config.enableHTML\">\n      <span *ngSwitchCase=\"true\" class=\"to-message {{toastr.config.messageClass || messageClass}}\"\n        [innerHTML]=\"sanitizer.bypassSecurityTrustHtml(toastr.message)\"></span>\n      <span *ngSwitchDefault class=\"to-message {{toastr.config.messageClass || messageClass}}\">{{toastr.message}}</span>\n    </div>\n    <div class=\"toastr-close-button\" *ngIf=\"toastr.config.showCloseButton\" (click)=\"removeToastr(toastr)\">&times;\n    </div>\n  </div>\n</div>",
                    animations: [ToastrAnimations],
                    styles: [".to-title{font-weight:600;font-size:16px;margin-bottom:8px;color:#fff}.to-message{word-wrap:break-word;font-size:15px;line-height:20px;font-weight:500;display:block;color:#fff;background-color:transparent}.to-message a,.to-message label{color:#fff}.to-message a:hover{color:#ccc;text-decoration:none}.toastr-close-button{font-size:25px;cursor:pointer;margin-left:20px}button.toastr-close-button{padding:0;cursor:pointer;background:0 0;border:0;-webkit-appearance:none}.top-center{top:0;right:0;width:100%}.bottom-center{bottom:0;right:0;width:100%}.top-full-width{top:0;right:0;width:100%}.bottom-full-width{bottom:0;right:0;width:100%}.top-left{top:12px;left:12px}.top-right{top:12px;right:12px}.bottom-right{right:12px;bottom:12px}.bottom-left{bottom:12px;left:12px}#toastr-container{position:fixed;z-index:99999}#toastr-container *{box-sizing:border-box}#toastr-container>div{position:relative;overflow:hidden;margin:10px 0 6px;padding:25px 15px 20px;width:345px;border-radius:0;background-position:15px;background-repeat:no-repeat;box-shadow:0 0 12px #999;opacity:1}#toastr-container>div.toastr-custom{padding:15px;color:#030303}#toastr-container>div.toastr-custom .toastr-close-button{color:#999!important}#toastr-container.bottom-center>div,#toastr-container.top-center>div{width:300px;margin:10px auto}#toastr-container.bottom-full-width>div,#toastr-container.top-full-width>div{width:100%;margin:0 auto;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center}.toastr{background-color:#fff}.toastr-success{background-color:#e2f4ed}.toastr-success .to-message,.toastr-success .to-title,.toastr-success .toastr-close-button{color:#22a471}.toastr-error{background-color:#ffdfe4}.toastr-error .to-message,.toastr-error .to-title,.toastr-error .toastr-close-button{color:#af0f3b}.toastr-info{background-color:#c5bdf5}.toastr-info .to-message,.toastr-info .to-title,.toastr-info .toastr-close-button{color:#7460ee}.toastr-warning{background-color:#f4e4e2}.toastr-warning .to-message,.toastr-warning .to-title,.toastr-warning .toastr-close-button{color:#f15c4a}.toastr-progress{position:absolute;left:0;bottom:0;height:4px;background-color:#000;opacity:.4}@media all and (max-width:240px){#toastr-container>div{padding:20px 15px 15px;width:11em}}@media all and (min-width:241px) and (max-width:480px){#toastr-container>div{padding:20px 15px 15px;width:18em}}@media all and (min-width:481px) and (max-width:768px){#toastr-container>div{padding:20px 15px 15px;width:25em}}"]
                }] }
    ];
    /** @nocollapse */
    ToastrComponent.ctorParameters = function () { return [
        { type: DomSanitizer },
        { type: ChangeDetectorRef },
        { type: NgZone },
        { type: ToastrOptions }
    ]; };
    return ToastrComponent;
}());
export { ToastrComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3RyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NvbW1vbi8iLCJzb3VyY2VzIjpbImxpYi90b2FzdHItbm90aWZpY2F0aW9ucy90b2FzdHIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUVoRixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDekQsT0FBTyxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUszQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDakQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFdkQ7SUFxQkUseUJBQ1MsU0FBdUIsRUFDdEIsR0FBc0IsRUFDdEIsS0FBYSxFQUNyQixPQUFzQjtRQUhmLGNBQVMsR0FBVCxTQUFTLENBQWM7UUFDdEIsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFDdEIsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQVh2QixZQUFPLEdBQWEsRUFBRSxDQUFDO1FBRWYsV0FBTSxHQUFZLElBQUksQ0FBQztRQUd2QixhQUFRLEdBQWlCLElBQUksT0FBTyxFQUFFLENBQUM7UUFDdkMsWUFBTyxHQUFpQixJQUFJLE9BQU8sRUFBRSxDQUFDO1FBUTVDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQy9CLENBQUM7Ozs7SUFFRCxpQ0FBTzs7O0lBQVA7UUFDRSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDdEMsQ0FBQzs7OztJQUVELGdDQUFNOzs7SUFBTjtRQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUNyQyxDQUFDOzs7OztJQUVELG1DQUFTOzs7O0lBQVQsVUFBVSxL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RSxNQUFNO2dCQVFwQyxhQUFhOztJQXdJdEIsc0JBQUM7Q0FBQSxBQXJJRCxJQXFJQztTQS9IWSxlQUFlOzs7SUFDMUIsdUNBQXFCOztJQUNyQixxQ0FBbUI7O0lBQ25CLG1DQUFpQjs7SUFDakIsbUNBQWlCOztJQUNqQixzQ0FBcUI7O0lBQ3JCLGtDQUFnQjs7SUFDaEIsa0NBQXVCOzs7OztJQUV2QixpQ0FBK0I7O0lBQy9CLHlDQUErQzs7Ozs7SUFFL0MsbUNBQStDOzs7OztJQUMvQyxrQ0FBOEM7O0lBRzVDLG9DQUE4Qjs7Ozs7SUFDOUIsOEJBQThCOzs7OztJQUM5QixnQ0FBcUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3JlXG5pbXBvcnQgeyBDb21wb25lbnQsIENoYW5nZURldGVjdG9yUmVmLCBOZ1pvbmUsIE9uRGVzdHJveSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBBbmltYXRpb25FdmVudCB9IGZyb20gXCJAYW5ndWxhci9hbmltYXRpb25zXCI7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlclwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xuXG4vLyBDb25maWdcbmltcG9ydCB7IFRvYXN0ciB9IGZyb20gXCIuL3RvYXN0clwiO1xuaW1wb3J0IHsgVG9hc3RyT3B0aW9ucyB9IGZyb20gXCIuL3RvYXN0ci5vcHRpb25zXCI7XG5pbXBvcnQgeyBUb2FzdHJBbmltYXRpb25zIH0gZnJvbSBcIi4vdG9hc3RyLmFuaW1hdGlvbnNcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcImFwcC10b2FzdHJcIixcbiAgdGVtcGxhdGVVcmw6IFwiLi90b2FzdHIuY29tcG9uZW50Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCIuL3RvYXN0ci5jb21wb25lbnQuc2Nzc1wiXSxcbiAgYW5pbWF0aW9uczogW1RvYXN0ckFuaW1hdGlvbnNdXG59KVxuZXhwb3J0IGNsYXNzIFRvYXN0ckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIG1lc3NhZ2VDbGFzczogc3RyaW5nO1xuICB0aXRsZUNsYXNzOiBzdHJpbmc7XG4gIHBvc2l0aW9uOiBzdHJpbmc7XG4gIG1heFNob3duOiBudW1iZXI7XG4gIG5ld2VzdE9uVG9wOiBib29sZWFuO1xuICBhbmltYXRlOiBzdHJpbmc7XG4gIHRvYXN0cnM6IFRvYXN0cltdID0gW107XG5cbiAgcHJpdmF0ZSBfZnJlc2g6IGJvb2xlYW4gPSB0cnVlO1xuICBwdWJsaWMgb25Ub2FzdENsaWNrZWQ6ICh0b2FzdDogVG9hc3RyKSA9PiB2b2lkO1xuXG4gIHByaXZhdGUgX29uRW50ZXI6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0KCk7XG4gIHByaXZhdGUgX29uRXhpdDogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3QoKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIsXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgX3pvbmU6IE5nWm9uZSxcbiAgICBvcHRpb25zOiBUb2FzdHJPcHRpb25zXG4gICkge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgb3B0aW9ucyk7XG4gIH1cblxuICBvbkVudGVyKCk6IE9ic2VydmFibGU8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLl9vbkVudGVyLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgb25FeGl0KCk6IE9ic2VydmFibGU8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLl9vbkV4aXQuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICBhZGRUb2FzdHIodG9hc3Q6IFRvYXN0cikge1xuICAgIGlmICh0aGlzLnBvc2l0aW9uLmluZGV4T2YoXCJ0b3BcIikgPiAwKSB7XG4gICAgICBpZiAodGhpcy5uZXdlc3RPblRvcCkge1xuICAgICAgICB0aGlzLnRvYXN0cnMudW5zaGlmdCh0b2FzdCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnRvYXN0cnMucHVzaCh0b2FzdCk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnRvYXN0cnMubGVuZ3RoID4gdGhpcy5tYXhTaG93bikge1xuICAgICAgICBjb25zdCBkaWZmID0gdGhpcy50b2FzdHJzLmxlbmd0aCAtIHRoaXMubWF4U2hvd247XG5cbiAgICAgICAgaWYgKHRoaXMubmV3ZXN0T25Ub3ApIHtcbiAgICAgICAgICB0aGlzLnRvYXN0cnMuc3BsaWNlKHRoaXMubWF4U2hvd24pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMudG9hc3Rycy5zcGxpY2UoMCwgZGlmZik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50b2FzdHJzLnVuc2hpZnQodG9hc3QpO1xuICAgICAgaWYgKHRoaXMudG9hc3Rycy5sZW5ndGggPiB0aGlzLm1heFNob3duKSB7XG4gICAgICAgIHRoaXMudG9hc3Rycy5zcGxpY2UodGhpcy5tYXhTaG93bik7XG4gICAgICB9XG4gICAgfSAgICBcblxuICAgIGlmICh0aGlzLmFuaW1hdGUgPT09IG51bGwgJiYgdGhpcy5fZnJlc2gpIHtcbiAgICAgIHRoaXMuX2ZyZXNoID0gZmFsc2U7XG4gICAgICB0aGlzLl9vbkVudGVyLm5leHQoKTtcbiAgICAgIHRoaXMuX29uRW50ZXIuY29tcGxldGUoKTtcbiAgICB9XG5cbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICByZW1vdmVUb2FzdHIodG9hc3Q6IFRvYXN0cikge1xuICAgIGlmICh0b2FzdC50aW1lb3V0SWQpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0b2FzdC50aW1lb3V0SWQpO1xuICAgICAgdG9hc3QudGltZW91dElkID0gbnVsbDtcbiAgICB9XG5cbiAgICB0aGlzLnRvYXN0cnMgPSB0aGlzLnRvYXN0cnMuZmlsdGVyKHQgPT4ge1xuICAgICAgcmV0dXJuIHQuaWQgIT09IHRvYXN0LmlkO1xuICAgIH0pO1xuICB9XG5cbiAgcmVtb3ZlQWxsVG9hc3RzKCkge1xuICAgIHRoaXMudG9hc3Rycy5mb3JFYWNoKCh0b2FzdDogVG9hc3RyKSA9PiB7XG4gICAgICBjbGVhclRpbWVvdXQodG9hc3QudGltZW91dElkKTtcbiAgICAgIHRvYXN0LnRpbWVvdXRJZCA9IG51bGw7XG4gICAgfSk7XG4gICAgXG4gICAgdGhpcy50b2FzdHJzID0gW107XG4gIH1cblxuICBjbGlja2VkKHRvYXN0OiBUb2FzdHIpIHtcbiAgICBpZiAodGhpcy5vblRvYXN0Q2xpY2tlZCkge1xuICAgICAgdGhpcy5vblRvYXN0Q2xpY2tlZCh0b2FzdCk7XG4gICAgfVxuICB9XG5cbiAgYW55VG9hc3QoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudG9hc3Rycy5sZW5ndGggPiAwO1xuICB9XG5cbiAgZmluZFRvYXN0KHRvYXN0SWQ6IG51bWJlcik6IFRvYXN0ciB8IHZvaWQge1xuICAgIGZvciAobGV0IHRvYXN0IG9mIHRoaXMudG9hc3Rycykge1xuICAgICAgaWYgKHRvYXN0LmlkID09PSB0b2FzdElkKSB7XG4gICAgICAgIHJldHVybiB0b2FzdDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBvbkFuaW1hdGlvbkVuZChldmVudDogQW5pbWF0aW9uRXZlbnQpIHtcbiAgICBpZiAoZXZlbnQudG9TdGF0ZSA9PT0gXCJ2b2lkXCIgJiYgIXRoaXMuYW55VG9hc3QoKSkge1xuICAgICAgdGhpcy5fbmdFeGl0KCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLl9mcmVzaCAmJiBldmVudC5mcm9tU3RhdGUgPT09IFwidm9pZFwiKSB7XG4gICAgICAvLyBub3RpZnkgd2hlbiBmaXJzdCBhbmltYXRpb24gaXMgZG9uZVxuICAgICAgdGhpcy5fZnJlc2ggPSBmYWxzZTtcbiAgICAgIHRoaXMuX3pvbmUucnVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5fb25FbnRlci5uZXh0KCk7XG4gICAgICAgIHRoaXMuX29uRW50ZXIuY29tcGxldGUoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX25nRXhpdCgpIHtcbiAgICB0aGlzLl96b25lLm9uTWljcm90YXNrRW1wdHkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuX29uRXhpdC5uZXh0KCk7XG4gICAgICB0aGlzLl9vbkV4aXQuY29tcGxldGUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuX25nRXhpdCgpO1xuICB9XG59XG4iXX0=