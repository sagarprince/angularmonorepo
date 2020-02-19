(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('@angular/platform-browser'), require('@angular/animations'), require('@angular/common'), require('@angular/forms'), require('@angular/material'), require('@angular/material-moment-adapter'), require('@angular/material/core'), require('@angular/material/dialog'), require('apollo-link-error'), require('@angular/router')) :
    typeof define === 'function' && define.amd ? define('common', ['exports', '@angular/core', 'rxjs', '@angular/platform-browser', '@angular/animations', '@angular/common', '@angular/forms', '@angular/material', '@angular/material-moment-adapter', '@angular/material/core', '@angular/material/dialog', 'apollo-link-error', '@angular/router'], factory) :
    (global = global || self, factory(global.common = {}, global.ng.core, global.rxjs, global.ng.platformBrowser, global.ng.animations, global.ng.common, global.ng.forms, global.ng.material, global.ng['material-moment-adapter'], global.ng.material.core, global.ng.material.dialog, global.apolloLinkError, global.ng.router));
}(this, (function (exports, core, rxjs, platformBrowser, animations, common, forms, material, materialMomentAdapter, core$1, dialog, apolloLinkError, router) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/constants.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // @dynamic
    var   
    // @dynamic
    ExceptionCodes = /** @class */ (function () {
        function ExceptionCodes() {
        }
        Object.defineProperty(ExceptionCodes, "graphClientError", {
            get: /**
             * @return {?}
             */
            function () { return "GRAPHQL_CLIENT_ERROR"; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ExceptionCodes, "validationException", {
            get: /**
             * @return {?}
             */
            function () { return "VALIDATION_EXCEPTION"; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ExceptionCodes, "invalidCredentials", {
            get: /**
             * @return {?}
             */
            function () { return "INVALID_CREDENTIALS_EXCEPTION"; },
            enumerable: true,
            configurable: true
        });
        return ExceptionCodes;
    }());
    // @dynamic
    var   
    // @dynamic
    ExceptionMessages = /** @class */ (function () {
        function ExceptionMessages() {
        }
        Object.defineProperty(ExceptionMessages, "somethingWentWrong", {
            get: /**
             * @return {?}
             */
            function () { return 'Something went wrong, please try again later.'; },
            enumerable: true,
            configurable: true
        });
        return ExceptionMessages;
    }());
    // @dynamic
    var   
    // @dynamic
    RegExpPattern = /** @class */ (function () {
        function RegExpPattern() {
        }
        Object.defineProperty(RegExpPattern, "validUrl", {
            get: /**
             * @return {?}
             */
            function () { return '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?'; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(RegExpPattern, "validPassword", {
            get: /**
             * @return {?}
             */
            function () { return '(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=[^0-9]*[0-9]).{8,}'; },
            enumerable: true,
            configurable: true
        });
        return RegExpPattern;
    }());
    // @dynamic
    var   
    // @dynamic
    GenericConstants = /** @class */ (function () {
        function GenericConstants() {
        }
        Object.defineProperty(GenericConstants, "genderOptions", {
            get: /**
             * @return {?}
             */
            function () {
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
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GenericConstants, "statusOptions", {
            get: /**
             * @return {?}
             */
            function () {
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
            },
            enumerable: true,
            configurable: true
        });
        return GenericConstants;
    }());
    // @dynamic
    var   
    // @dynamic
    ValidationMessages = /** @class */ (function () {
        function ValidationMessages() {
        }
        Object.defineProperty(ValidationMessages, "password", {
            get: /**
             * @return {?}
             */
            function () { return 'Password must be eight characters, at least one uppercase letter, one lowercase letter, one special character and one number.'; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ValidationMessages, "passwordNotMatch", {
            get: /**
             * @return {?}
             */
            function () { return "Password doesn't match."; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ValidationMessages, "passwordMatch", {
            get: /**
             * @return {?}
             */
            function () { return "New password must be different than old password."; },
            enumerable: true,
            configurable: true
        });
        return ValidationMessages;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/toastr-notifications/toastr.options.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ToastrOptions = /** @class */ (function () {
        function ToastrOptions() {
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
        ToastrOptions.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        ToastrOptions.ctorParameters = function () { return []; };
        return ToastrOptions;
    }());
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
    var ToastrAnimations = animations.trigger("inOut", [
        animations.state("fade", animations.style({ opacity: 1 })),
        animations.transition("void => fade", [
            animations.style({
                opacity: 1
            }),
            animations.animate("0.4s ease-in")
        ]),
        animations.transition("fade => void", [
            animations.animate("0.4s 0.1s ease-out", animations.style({
                opacity: 0
            }))
        ]),
        animations.state("slideFromLeft", animations.style({ opacity: 1, transform: "translateX(0)" })),
        animations.transition("void => slideFromLeft", [
            animations.style({
                opacity: 0,
                transform: "translateX(-100%)"
            }),
            animations.animate("0.4s ease-in")
        ]),
        animations.transition("slideFromLeft => void", [
            animations.animate("0.4s 0.1s ease-out", animations.style({
                opacity: 0,
                transform: "translateX(100%)"
            }))
        ]),
        animations.state("slideFromRight", animations.style({ opacity: 1, transform: "translateX(0)" })),
        animations.transition("void => slideFromRight", [
            animations.style({
                opacity: 0,
                transform: "translateX(100%)"
            }),
            animations.animate("0.4s ease-in")
        ]),
        animations.transition("slideFromRight => void", [
            animations.animate("0.4s 0.1s ease-out", animations.style({
                opacity: 0,
                transform: "translateX(-100%)"
            }))
        ]),
        animations.state("slideFromTop", animations.style({ opacity: 1, transform: "translateY(0)" })),
        animations.transition("void => slideFromTop", [
            animations.style({
                opacity: 0,
                transform: "translateY(-100%)"
            }),
            animations.animate("0.4s ease-in")
        ]),
        animations.transition("slideFromTop => void", [
            animations.animate("0.4s 0.1s ease-out", animations.style({
                opacity: 0,
                transform: "translateY(-100%)"
            }))
        ]),
        animations.state("slideFromBottom", animations.style({ opacity: 1, transform: "translateY(0)" })),
        animations.transition("void => slideFromBottom", [
            animations.style({
                opacity: 0,
                transform: "translateY(100%)"
            }),
            animations.animate("0.4s ease-in")
        ]),
        animations.transition("slideFromBottom => void", [
            animations.animate("0.4s 0.1s ease-out", animations.style({
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
    var ToastrComponent = /** @class */ (function () {
        function ToastrComponent(sanitizer, cdr, _zone, options) {
            this.sanitizer = sanitizer;
            this.cdr = cdr;
            this._zone = _zone;
            this.toastrs = [];
            this._fresh = true;
            this._onEnter = new rxjs.Subject();
            this._onExit = new rxjs.Subject();
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
                for (var _b = __values(this.toastrs), _c = _b.next(); !_c.done; _c = _b.next()) {
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
            { type: core.Component, args: [{
                        selector: "app-toastr",
                        template: "<div #toastrContainer id=\"toastr-container\" class=\"{{position}}\">\n  <div *ngFor=\"let toastr of toastrs\" [@inOut]=\"toastr.config.animate || animate\" (@inOut.done)=\"onAnimationEnd($event)\"\n    class=\"toastr toastr-{{toastr.type}}\" (click)=\"clicked(toastr)\">\n    <div *ngIf=\"toastr.title\" class=\"to-title {{toastr.config.titleClass || titleClass}}\">{{toastr.title}}</div>\n    <div [ngSwitch]=\"toastr.config.enableHTML\">\n      <span *ngSwitchCase=\"true\" class=\"to-message {{toastr.config.messageClass || messageClass}}\"\n        [innerHTML]=\"sanitizer.bypassSecurityTrustHtml(toastr.message)\"></span>\n      <span *ngSwitchDefault class=\"to-message {{toastr.config.messageClass || messageClass}}\">{{toastr.message}}</span>\n    </div>\n    <div class=\"toastr-close-button\" *ngIf=\"toastr.config.showCloseButton\" (click)=\"removeToastr(toastr)\">&times;\n    </div>\n  </div>\n</div>",
                        animations: [ToastrAnimations],
                        styles: [".to-title{font-weight:600;font-size:16px;margin-bottom:8px;color:#fff}.to-message{word-wrap:break-word;font-size:15px;line-height:20px;font-weight:500;display:block;color:#fff;background-color:transparent}.to-message a,.to-message label{color:#fff}.to-message a:hover{color:#ccc;text-decoration:none}.toastr-close-button{font-size:25px;cursor:pointer;margin-left:20px}button.toastr-close-button{padding:0;cursor:pointer;background:0 0;border:0;-webkit-appearance:none}.top-center{top:0;right:0;width:100%}.bottom-center{bottom:0;right:0;width:100%}.top-full-width{top:0;right:0;width:100%}.bottom-full-width{bottom:0;right:0;width:100%}.top-left{top:12px;left:12px}.top-right{top:12px;right:12px}.bottom-right{right:12px;bottom:12px}.bottom-left{bottom:12px;left:12px}#toastr-container{position:fixed;z-index:99999}#toastr-container *{box-sizing:border-box}#toastr-container>div{position:relative;overflow:hidden;margin:10px 0 6px;padding:25px 15px 20px;width:345px;border-radius:0;background-position:15px;background-repeat:no-repeat;box-shadow:0 0 12px #999;opacity:1}#toastr-container>div.toastr-custom{padding:15px;color:#030303}#toastr-container>div.toastr-custom .toastr-close-button{color:#999!important}#toastr-container.bottom-center>div,#toastr-container.top-center>div{width:300px;margin:10px auto}#toastr-container.bottom-full-width>div,#toastr-container.top-full-width>div{width:100%;margin:0 auto;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center}.toastr{background-color:#fff}.toastr-success{background-color:#e2f4ed}.toastr-success .to-message,.toastr-success .to-title,.toastr-success .toastr-close-button{color:#22a471}.toastr-error{background-color:#ffdfe4}.toastr-error .to-message,.toastr-error .to-title,.toastr-error .toastr-close-button{color:#af0f3b}.toastr-info{background-color:#c5bdf5}.toastr-info .to-message,.toastr-info .to-title,.toastr-info .toastr-close-button{color:#7460ee}.toastr-warning{background-color:#f4e4e2}.toastr-warning .to-message,.toastr-warning .to-title,.toastr-warning .toastr-close-button{color:#f15c4a}.toastr-progress{position:absolute;left:0;bottom:0;height:4px;background-color:#000;opacity:.4}@media all and (max-width:240px){#toastr-container>div{padding:20px 15px 15px;width:11em}}@media all and (min-width:241px) and (max-width:480px){#toastr-container>div{padding:20px 15px 15px;width:18em}}@media all and (min-width:481px) and (max-width:768px){#toastr-container>div{padding:20px 15px 15px;width:25em}}"]
                    }] }
        ];
        /** @nocollapse */
        ToastrComponent.ctorParameters = function () { return [
            { type: platformBrowser.DomSanitizer },
            { type: core.ChangeDetectorRef },
            { type: core.NgZone },
            { type: ToastrOptions }
        ]; };
        return ToastrComponent;
    }());
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
    var ToastrManager = /** @class */ (function () {
        function ToastrManager(_applicationRef, _componentFactoryResolver, _injector, ngZone, options) {
            this._applicationRef = _applicationRef;
            this._componentFactoryResolver = _componentFactoryResolver;
            this._injector = _injector;
            this.ngZone = ngZone;
            this.options = options;
            this.toastrContainers = [];
            this.index = 0;
            this.toastClicked = new rxjs.Subject();
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
            var _providers = core.ReflectiveInjector.resolve(providers);
            /** @type {?} */
            var injector = core.ReflectiveInjector.fromResolvedProviders(_providers, this._injector);
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
            { type: core.Injectable }
        ];
        /** @nocollapse */
        ToastrManager.ctorParameters = function () { return [
            { type: core.ApplicationRef },
            { type: core.ComponentFactoryResolver },
            { type: core.Injector },
            { type: core.NgZone },
            { type: ToastrOptions }
        ]; };
        return ToastrManager;
    }());
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
    var InputComponent = /** @class */ (function () {
        function InputComponent() {
            this.mode = 'input'; // input | datepicker | textarea
            // input | datepicker | textarea
            this.type = 'text';
            this.appearance = 'fill'; // standard | outline | fill
            // standard | outline | fill
            this.label = '';
            this.placeholder = '';
            this.icon = '';
            this.autocomplete = 'off';
            this.control = new forms.FormControl();
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
            function (_) { });
            this.onTouched = (/**
             * @return {?}
             */
            function () { });
            this.validateFn = (/**
             * @return {?}
             */
            function () { });
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
         * @return void
         */
        /**
         * ngOnInit
         * @return {?} void
         */
        InputComponent.prototype.ngOnInit = /**
         * ngOnInit
         * @return {?} void
         */
        function () {
            this.inputType = this.type === 'password' ? 'text' : this.type;
        };
        /**
         * ngOnChanges
         * @param changes
         * @return void
         */
        /**
         * ngOnChanges
         * @param {?} changes
         * @return {?} void
         */
        InputComponent.prototype.ngOnChanges = /**
         * ngOnChanges
         * @param {?} changes
         * @return {?} void
         */
        function (changes) {
            var _a, _b;
            if (changes) {
                if (typeof changes.errors !== 'undefined') {
                    if (changes.errors.firstChange) {
                        (_a = this._errors).push.apply(_a, __spread(changes.errors.currentValue));
                    }
                }
                if (typeof changes.errors !== 'undefined') {
                    if (changes.errors.firstChange) {
                        (_b = this._errors).push.apply(_b, __spread(changes.errors.currentValue));
                    }
                }
                if (typeof changes.requiredErrMessage !== 'undefined') {
                    /** @type {?} */
                    var index = this._errors.findIndex((/**
                     * @param {?} x
                     * @return {?}
                     */
                    function (x) {
                        return x.key === 'required';
                    }));
                    this._errors[index].message = changes.requiredErrMessage.currentValue;
                }
                if (typeof changes.patternErrMessage !== 'undefined') {
                    /** @type {?} */
                    var index = this._errors.findIndex((/**
                     * @param {?} x
                     * @return {?}
                     */
                    function (x) {
                        return x.key === 'pattern';
                    }));
                    this._errors[index].message = changes.patternErrMessage.currentValue;
                }
                if (typeof changes.emailErrMessage !== 'undefined') {
                    /** @type {?} */
                    var index = this._errors.findIndex((/**
                     * @param {?} x
                     * @return {?}
                     */
                    function (x) {
                        return x.key === 'email';
                    }));
                    this._errors[index].message = changes.emailErrMessage.currentValue;
                }
                if (typeof changes.minLengthErrMessage !== 'undefined') {
                    /** @type {?} */
                    var index = this._errors.findIndex((/**
                     * @param {?} x
                     * @return {?}
                     */
                    function (x) {
                        return x.key === 'minlength';
                    }));
                    this._errors[index].message = changes.minLengthErrMessage.currentValue;
                }
                if (typeof changes.maxLengthErrMessage !== 'undefined') {
                    /** @type {?} */
                    var index = this._errors.findIndex((/**
                     * @param {?} x
                     * @return {?}
                     */
                    function (x) {
                        return x.key === 'maxlength';
                    }));
                    this._errors[index].message = changes.maxLengthErrMessage.currentValue;
                }
                if (typeof changes.invalidErrMessage !== 'undefined') {
                    /** @type {?} */
                    var index = this._errors.findIndex((/**
                     * @param {?} x
                     * @return {?}
                     */
                    function (x) {
                        return x.key === 'invalid';
                    }));
                    this._errors[index].message = changes.invalidErrMessage.currentValue;
                }
                if (typeof changes.mustMatchErrMessage !== 'undefined') {
                    /** @type {?} */
                    var index = this._errors.findIndex((/**
                     * @param {?} x
                     * @return {?}
                     */
                    function (x) {
                        return x.key === 'mustMatch';
                    }));
                    this._errors[index].message = changes.mustMatchErrMessage.currentValue;
                }
                if (typeof changes.mustNotMatchErrMessage !== 'undefined') {
                    /** @type {?} */
                    var index = this._errors.findIndex((/**
                     * @param {?} x
                     * @return {?}
                     */
                    function (x) {
                        return x.key === 'mustNotMatch';
                    }));
                    this._errors[index].message = changes.mustNotMatchErrMessage.currentValue;
                }
            }
        };
        /**
         * Write a value to the control
         * @param value
         * @return void
         */
        /**
         * Write a value to the control
         * @param {?} value
         * @return {?} void
         */
        InputComponent.prototype.writeValue = /**
         * Write a value to the control
         * @param {?} value
         * @return {?} void
         */
        function (value) {
            if (value) {
                this.value = value;
            }
        };
        /**
         * Register a function to tell Angular when the value of the input changes
         * @param fn
         * @return void
         */
        /**
         * Register a function to tell Angular when the value of the input changes
         * @param {?} fn
         * @return {?} void
         */
        InputComponent.prototype.registerOnChange = /**
         * Register a function to tell Angular when the value of the input changes
         * @param {?} fn
         * @return {?} void
         */
        function (fn) {
            this.propagateChange = fn;
        };
        /**
         * Register a function to tell Angular when the input has been touched
         * @param fn
         * @return void
         */
        /**
         * Register a function to tell Angular when the input has been touched
         * @param {?} fn
         * @return {?} void
         */
        InputComponent.prototype.registerOnTouched = /**
         * Register a function to tell Angular when the input has been touched
         * @param {?} fn
         * @return {?} void
         */
        function (fn) {
            this.onTouched = fn;
        };
        /**
         * On Change
         * @param event
         * @return void
         */
        /**
         * On Change
         * @param {?} event
         * @return {?} void
         */
        InputComponent.prototype.onChange = /**
         * On Change
         * @param {?} event
         * @return {?} void
         */
        function (event) {
            /** @type {?} */
            var _value = event.target.value;
            this.value = _value;
            this.propagateChange(this.value);
            if (!this.control.pending) {
                this.onTouched();
            }
        };
        /**
         * Validate
         * @param c
         * @return any
         */
        /**
         * Validate
         * @param {?} c
         * @return {?} any
         */
        InputComponent.prototype.validate = /**
         * Validate
         * @param {?} c
         * @return {?} any
         */
        function (c) {
            return this.validateFn(c);
        };
        /**
         * Clear Date
         * @return void
         */
        /**
         * Clear Date
         * @return {?} void
         */
        InputComponent.prototype.clearDate = /**
         * Clear Date
         * @return {?} void
         */
        function () {
            this.value = '';
            this.propagateChange(this.value);
        };
        /**
         * Set Disabled State
         * @param isDisabled
         * @return void
         */
        /**
         * Set Disabled State
         * @param {?} isDisabled
         * @return {?} void
         */
        InputComponent.prototype.setDisabledState = /**
         * Set Disabled State
         * @param {?} isDisabled
         * @return {?} void
         */
        function (isDisabled) {
            this.disabled = isDisabled;
        };
        InputComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'app-input',
                        template: "<mat-form-field [appearance]=\"appearance\" [class.non-label-field]=\"label === ''\">\n    <mat-label *ngIf=\"label\">{{label}}</mat-label>\n    <ng-container [ngSwitch]=\"mode\">\n        <ng-container *ngSwitchCase=\"'input'\">\n            <input matInput [type]=\"!isPasswordVisible && type == 'password' ? type : inputType\"\n                [placeholder]=\"placeholder\" [value]=\"value\" [formControl]=\"control\" (input)=\"onChange($event)\"\n                [readonly]=\"readonly\" [attr.autocomplete]=\"autocomplete\">\n            <div *ngIf=\"type == 'password'\" class=\"password-visibility-icon\"\n                [class.password-visible]=\"isPasswordVisible\" matSuffix>\n                <mat-icon (click)=\"isPasswordVisible = !isPasswordVisible\">\n                    {{!isPasswordVisible ? 'visibility_off' : 'visibility'}}</mat-icon>\n            </div>\n        </ng-container>\n        <ng-container *ngSwitchCase=\"'textarea'\">\n            <textarea matInput [placeholder]=\"placeholder\" [formControl]=\"control\" (input)=\"onChange($event)\"\n                [readonly]=\"readonly\" [attr.autocomplete]=\"autocomplete\">{{value}}</textarea>\n        </ng-container>\n        <ng-container *ngSwitchCase=\"'datepicker'\">\n            <input matInput [type]=\"type\" [matDatepicker]=\"picker\" [placeholder]=\"placeholder\" [value]=\"value\"\n                [formControl]=\"control\" (dateChange)=\"onChange($event)\" (focus)=\"picker.open()\" (click)=\"picker.open()\"\n                [attr.autocomplete]=\"autocomplete\">\n            <button *ngIf=\"value\" type=\"button\" matSuffix mat-icon-button class=\"clear-date-btn\" (click)=\"clearDate()\"\n                title=\"Clear Date\">\n                <mat-icon>close</mat-icon>\n            </button>\n            <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n            <mat-datepicker #picker></mat-datepicker>\n        </ng-container>\n    </ng-container>\n    <mat-icon matSuffix *ngIf=\"icon\"><i [class]=\"icon\"></i></mat-icon>\n    <mat-error>{{_errors | getErrorMessages: control.errors}}</mat-error>\n    <div class=\"control-status control-loading-status\" *ngIf=\"isLoading\">\n        <i class=\"fa fa-spin fa-circle-o-notch\"></i>\n    </div>\n</mat-form-field>",
                        providers: [
                            {
                                provide: forms.NG_VALUE_ACCESSOR,
                                useExisting: core.forwardRef((/**
                                 * @return {?}
                                 */
                                function () { return InputComponent; })),
                                multi: true
                            },
                            {
                                provide: forms.NG_VALIDATORS,
                                useExisting: core.forwardRef((/**
                                 * @return {?}
                                 */
                                function () { return InputComponent; })),
                                multi: true
                            }
                        ],
                        styles: ["textarea.mat-input-element{resize:none;min-height:90px}.mat-datepicker-toggle{position:absolute;right:-10px;top:-18px}.mat-form-field-should-float .mat-datepicker-toggle{top:-14px}.clear-date-btn{position:absolute;right:25px;top:-14px}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.control-status{position:absolute;top:-24px;right:-14px}.control-loading-status{font-size:20px;color:#22a471;right:-14px}.non-label-field ::ng-deep .mat-form-field-infix{padding:0;border:0}.non-label-field ::ng-deep .mat-form-field-flex{padding-top:1.4em;padding-bottom:1.3em}.non-label-field ::ng-deep .mat-form-field-flex,.non-label-field ::ng-deep input{font-size:16px!important}.non-label-field ::ng-deep .control-status{top:-16px}.password-visibility-icon{position:absolute;top:-6px;right:-20px;left:auto;color:#597084;background-color:#fff;width:60px;height:40px;text-align:center}.password-visibility-icon.password-visible{color:#1f2430}.password-visibility-icon .mat-icon{cursor:pointer}"]
                    }] }
        ];
        /** @nocollapse */
        InputComponent.ctorParameters = function () { return []; };
        InputComponent.propDecorators = {
            mode: [{ type: core.Input }],
            type: [{ type: core.Input }],
            appearance: [{ type: core.Input }],
            label: [{ type: core.Input }],
            placeholder: [{ type: core.Input }],
            icon: [{ type: core.Input }],
            autocomplete: [{ type: core.Input }],
            control: [{ type: core.Input }],
            readonly: [{ type: core.Input }],
            errors: [{ type: core.Input }],
            requiredErrMessage: [{ type: core.Input }],
            emailErrMessage: [{ type: core.Input }],
            minLengthErrMessage: [{ type: core.Input }],
            maxLengthErrMessage: [{ type: core.Input }],
            patternErrMessage: [{ type: core.Input }],
            mustMatchErrMessage: [{ type: core.Input }],
            mustNotMatchErrMessage: [{ type: core.Input }],
            invalidErrMessage: [{ type: core.Input }],
            isLoading: [{ type: core.Input }],
            showControlStatusIcon: [{ type: core.Input }]
        };
        return InputComponent;
    }());
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
    var FormErrorHandlingPipe = /** @class */ (function () {
        function FormErrorHandlingPipe() {
        }
        /**
         * @param {?} value
         * @param {?} controlErrors
         * @return {?}
         */
        FormErrorHandlingPipe.prototype.transform = /**
         * @param {?} value
         * @param {?} controlErrors
         * @return {?}
         */
        function (value, controlErrors) {
            /** @type {?} */
            var error = '';
            /** @type {?} */
            var i = 0;
            while (i < value.length) {
                /** @type {?} */
                var x = value[i];
                if (controlErrors && controlErrors.hasOwnProperty(x.key) && controlErrors[x.key]) {
                    error = x.message;
                    break;
                }
                i++;
            }
            return error;
        };
        FormErrorHandlingPipe.decorators = [
            { type: core.Pipe, args: [{
                        name: 'getErrorMessages'
                    },] }
        ];
        return FormErrorHandlingPipe;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/form-fields/select/select.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SelectComponent = /** @class */ (function () {
        function SelectComponent() {
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
            this.control = new forms.FormControl();
            this.requiredErrMessage = "Required Field.";
            this.isLoading = false;
            this.onChange = new core.EventEmitter();
            this._errors = [];
            this.propagateChange = (/**
             * @param {?} _
             * @return {?}
             */
            function (_) { });
            this.onTouched = (/**
             * @return {?}
             */
            function () { });
            this.validateFn = (/**
             * @return {?}
             */
            function () { });
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
         * @return void
         */
        /**
         * ngOnInit
         * @return {?} void
         */
        SelectComponent.prototype.ngOnInit = /**
         * ngOnInit
         * @return {?} void
         */
        function () { };
        /**
         * ngOnChanges
         * @param changes
         * @return void
         */
        /**
         * ngOnChanges
         * @param {?} changes
         * @return {?} void
         */
        SelectComponent.prototype.ngOnChanges = /**
         * ngOnChanges
         * @param {?} changes
         * @return {?} void
         */
        function (changes) {
            if (changes) {
                if (typeof changes.requiredErrMessage !== 'undefined') {
                    /** @type {?} */
                    var index = this._errors.findIndex((/**
                     * @param {?} x
                     * @return {?}
                     */
                    function (x) {
                        return x.key === 'required';
                    }));
                    this._errors[index].message = changes.requiredErrMessage.currentValue;
                }
            }
        };
        /**
         * Write a value to the control
         * @param value
         * @return void
         */
        /**
         * Write a value to the control
         * @param {?} value
         * @return {?} void
         */
        SelectComponent.prototype.writeValue = /**
         * Write a value to the control
         * @param {?} value
         * @return {?} void
         */
        function (value) {
            if (value) {
                this.value = value;
            }
        };
        /**
         * Register a function to tell Angular when the value of the input changes
         * @param fn
         * @return void
         */
        /**
         * Register a function to tell Angular when the value of the input changes
         * @param {?} fn
         * @return {?} void
         */
        SelectComponent.prototype.registerOnChange = /**
         * Register a function to tell Angular when the value of the input changes
         * @param {?} fn
         * @return {?} void
         */
        function (fn) {
            this.propagateChange = fn;
        };
        /**
         * Register a function to tell Angular when the input has been touched
         * @param fn
         * @return void
         */
        /**
         * Register a function to tell Angular when the input has been touched
         * @param {?} fn
         * @return {?} void
         */
        SelectComponent.prototype.registerOnTouched = /**
         * Register a function to tell Angular when the input has been touched
         * @param {?} fn
         * @return {?} void
         */
        function (fn) {
            this.onTouched = fn;
        };
        /**
         * On Change
         * @param event
         * @return void
         */
        /**
         * On Change
         * @param {?} event
         * @return {?} void
         */
        SelectComponent.prototype.onSelectionChange = /**
         * On Change
         * @param {?} event
         * @return {?} void
         */
        function (event) {
            /** @type {?} */
            var _value = event.value;
            this.value = _value;
            this.propagateChange(this.value);
            this.onChange.emit(this.value);
        };
        /**
         * Compare Items
         * @param option
         * @param selected
         * @return boolean
         */
        /**
         * Compare Items
         * @param {?} option
         * @param {?} selected
         * @return {?} boolean
         */
        SelectComponent.prototype.compareItems = /**
         * Compare Items
         * @param {?} option
         * @param {?} selected
         * @return {?} boolean
         */
        function (option, selected) {
            if (typeof option !== 'undefined' && typeof selected !== 'undefined') {
                if (typeof option.id !== 'undefined' && typeof selected.id !== 'undefined') {
                    return option.id === selected.id;
                }
                else {
                    return option === selected;
                }
            }
            return false;
        };
        /**
         * Validate
         * @param c
         * @return any
         */
        /**
         * Validate
         * @param {?} c
         * @return {?} any
         */
        SelectComponent.prototype.validate = /**
         * Validate
         * @param {?} c
         * @return {?} any
         */
        function (c) {
            return this.validateFn(c);
        };
        /**
         * Set Disabled State
         * @param isDisabled
         * @return void
         */
        /**
         * Set Disabled State
         * @param {?} isDisabled
         * @return {?} void
         */
        SelectComponent.prototype.setDisabledState = /**
         * Set Disabled State
         * @param {?} isDisabled
         * @return {?} void
         */
        function (isDisabled) {
            this.disabled = isDisabled;
        };
        SelectComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "app-select",
                        template: "<mat-form-field [appearance]=\"appearance\">\n  <mat-label>{{label}}</mat-label>\n  <mat-select [placeholder]=\"placeholder\" [value]=\"value\" [compareWith]=\"compareItems\" [formControl]=\"control\"\n    (selectionChange)=\"onSelectionChange($event)\" [multiple]=\"multiple ? true : null\">\n    <mat-option *ngFor=\"let option of options\" [value]=\"keyAs == 'object' ? option : option[key]\">\n      {{ option[text] }}\n    </mat-option>\n  </mat-select>\n  <mat-error>{{_errors | getErrorMessages: control.errors}}</mat-error>\n  <div class=\"control-loading\" *ngIf=\"isLoading\">\n    <i class=\"fa fa-spin fa-circle-o-notch\"></i>\n  </div>\n</mat-form-field>",
                        providers: [
                            {
                                provide: forms.NG_VALUE_ACCESSOR,
                                useExisting: core.forwardRef((/**
                                 * @return {?}
                                 */
                                function () { return SelectComponent; })),
                                multi: true
                            },
                            {
                                provide: forms.NG_VALIDATORS,
                                useExisting: core.forwardRef((/**
                                 * @return {?}
                                 */
                                function () { return SelectComponent; })),
                                multi: true
                            }
                        ],
                        styles: [".control-loading{font-size:26px;color:#22a471;position:absolute;right:-2px;top:-12px;background-color:#fff}"]
                    }] }
        ];
        /** @nocollapse */
        SelectComponent.ctorParameters = function () { return []; };
        SelectComponent.propDecorators = {
            appearance: [{ type: core.Input }],
            label: [{ type: core.Input }],
            placeholder: [{ type: core.Input }],
            keyAs: [{ type: core.Input }],
            key: [{ type: core.Input }],
            text: [{ type: core.Input }],
            options: [{ type: core.Input }],
            multiple: [{ type: core.Input }],
            control: [{ type: core.Input }],
            requiredErrMessage: [{ type: core.Input }],
            isLoading: [{ type: core.Input }],
            onChange: [{ type: core.Output }]
        };
        return SelectComponent;
    }());
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
    var ButtonComponent = /** @class */ (function () {
        function ButtonComponent() {
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
            this.onClick = new core.EventEmitter();
        }
        /**
         * ngOnInit
         * @return void
         */
        /**
         * ngOnInit
         * @return {?} void
         */
        ButtonComponent.prototype.ngOnInit = /**
         * ngOnInit
         * @return {?} void
         */
        function () { };
        /**
         * OnClick
         * @return void
         */
        /**
         * OnClick
         * @return {?} void
         */
        ButtonComponent.prototype._onClick = /**
         * OnClick
         * @return {?} void
         */
        function () {
            this.onClick.emit();
        };
        ButtonComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'app-button',
                        template: "<ng-container [ngSwitch]=\"variant\">\n    <ng-container *ngSwitchCase=\"'raised'\">\n        <button [type]=\"type\" mat-raised-button [color]=\"color\" [disabled]=\"disabled\" (click)=\"_onClick()\">\n            <ng-container *ngIf=\"isLoading\">\n                <mat-icon class=\"spinner\">\n                    <mat-spinner [color]=\"color\" diameter=\"22\">\n                    </mat-spinner>\n                </mat-icon>\n            </ng-container>\n            <ng-container *ngIf=\"!isLoading && icon != '' && iconType == 'fa'\">\n                <mat-icon [fontSet]=\"iconType\" [fontIcon]=\"icon\"></mat-icon>\n            </ng-container>\n            <ng-container *ngIf=\"!isLoading && icon != '' && iconType == 'material'\">\n                <mat-icon>{{icon}}</mat-icon>\n            </ng-container>\n            {{name}}\n        </button>\n    </ng-container>\n    <ng-container *ngSwitchCase=\"'stroked'\">\n        <button [type]=\"type\" mat-stroked-button [disabled]=\"disabled\" (click)=\"_onClick()\">\n            <ng-container *ngIf=\"isLoading\">\n                <mat-icon class=\"spinner\">\n                    <mat-spinner [color]=\"color\" diameter=\"22\">\n                    </mat-spinner>\n                </mat-icon>\n            </ng-container>\n            <ng-container *ngIf=\"!isLoading && icon != '' && iconType == 'fa'\">\n                <mat-icon [fontSet]=\"iconType\" [fontIcon]=\"icon\"></mat-icon>\n            </ng-container>\n            <ng-container *ngIf=\"!isLoading && icon != '' && iconType == 'material'\">\n                <mat-icon>{{icon}}</mat-icon>\n            </ng-container>\n            {{name}}\n        </button>\n    </ng-container>\n    <ng-container *ngSwitchCase=\"'icon'\">\n        <button [type]=\"type\" mat-icon-button mat-mini-fab [color]=\"color\" [disabled]=\"disabled\" (click)=\"_onClick()\">\n            <ng-container *ngIf=\"iconType == 'fa'; else materialIcon\">\n                <mat-icon [fontSet]=\"iconType\" [fontIcon]=\"icon\"></mat-icon>\n            </ng-container>\n            <ng-template #materialIcon>\n                <mat-icon>{{icon}}</mat-icon>\n            </ng-template>\n        </button>\n    </ng-container>\n    <ng-container *ngSwitchCase=\"'icon-non-fab'\">\n        <button [type]=\"type\" mat-icon-button [color]=\"color\" [disabled]=\"disabled\" (click)=\"_onClick()\">\n            <ng-container *ngIf=\"iconType == 'fa'; else materialIcon\">\n                <mat-icon [fontSet]=\"iconType\" [fontIcon]=\"icon\"></mat-icon>\n            </ng-container>\n            <ng-template #materialIcon>\n                <mat-icon>{{icon}}</mat-icon>\n            </ng-template>\n        </button>\n    </ng-container>\n</ng-container>",
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        ButtonComponent.ctorParameters = function () { return []; };
        ButtonComponent.propDecorators = {
            variant: [{ type: core.Input }],
            type: [{ type: core.Input }],
            name: [{ type: core.Input }],
            iconType: [{ type: core.Input }],
            icon: [{ type: core.Input }],
            disabled: [{ type: core.Input }],
            isLoading: [{ type: core.Input }],
            color: [{ type: core.Input }],
            onClick: [{ type: core.Output }]
        };
        return ButtonComponent;
    }());
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
    var FileInputComponent = /** @class */ (function () {
        function FileInputComponent(cd) {
            this.cd = cd;
            this.label = 'Select File';
            this.accept = '*';
            this.control = new forms.FormControl();
            this.isImagePreview = false;
            this.invalidFileSizeErrMessage = 'Please select a valid file with specified size.';
            this.onFileSelection = new core.EventEmitter();
            this.onFileChanged = new core.EventEmitter();
            this.value = null;
            this.fileName = '';
            this.imageUrl = '';
            this.isSelectedFileChanged = false;
            this.propagateChange = (/**
             * @param {?} _
             * @return {?}
             */
            function (_) { });
            this.onTouched = (/**
             * @return {?}
             */
            function () { });
            this.validateFn = (/**
             * @return {?}
             */
            function () { });
            this.disabled = false;
        }
        /**
         * ngOnInit
         * @return void
         */
        /**
         * ngOnInit
         * @return {?} void
         */
        FileInputComponent.prototype.ngOnInit = /**
         * ngOnInit
         * @return {?} void
         */
        function () { };
        /**
         * Write a value to the control
         * @param value
         * @return void
         */
        /**
         * Write a value to the control
         * @param {?} value
         * @return {?} void
         */
        FileInputComponent.prototype.writeValue = /**
         * Write a value to the control
         * @param {?} value
         * @return {?} void
         */
        function (value) {
            if (value) {
                this.value = value;
                if (this.isImagePreview) {
                    this.imageUrl = value;
                }
                else {
                    this.fileName = value.substring(value.lastIndexOf('/') + 1);
                }
            }
        };
        /**
         * Register a function to tell Angular when the value of the input changes
         * @param fn
         * @return void
         */
        /**
         * Register a function to tell Angular when the value of the input changes
         * @param {?} fn
         * @return {?} void
         */
        FileInputComponent.prototype.registerOnChange = /**
         * Register a function to tell Angular when the value of the input changes
         * @param {?} fn
         * @return {?} void
         */
        function (fn) {
            this.propagateChange = fn;
        };
        /**
         * Register a function to tell Angular when the input has been touched
         * @param fn
         * @return void
         */
        /**
         * Register a function to tell Angular when the input has been touched
         * @param {?} fn
         * @return {?} void
         */
        FileInputComponent.prototype.registerOnTouched = /**
         * Register a function to tell Angular when the input has been touched
         * @param {?} fn
         * @return {?} void
         */
        function (fn) {
            this.onTouched = fn;
        };
        /**
         * Sanitize File Name
         * @param name
         * @return string
         */
        /**
         * Sanitize File Name
         * @param {?} name
         * @return {?} string
         */
        FileInputComponent.prototype.sanitizeFileName = /**
         * Sanitize File Name
         * @param {?} name
         * @return {?} string
         */
        function (name) {
            /** @type {?} */
            var dotIndex = name.lastIndexOf('.');
            /** @type {?} */
            var extension = name.substring(dotIndex + 1);
            name = name.substring(0, dotIndex);
            name = name.replace(/^\s+|\s+$/g, ''); // trim
            name = name.toLowerCase();
            /** @type {?} */
            var from = "àáäâèéëêìíïîòóöôùúüûñç/_,:;";
            /** @type {?} */
            var to = "aaaaeeeeiiiioooouuuunc------";
            for (var i = 0, l = from.length; i < l; i++) {
                name = name.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
            }
            name = name.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
                .replace(/\s+/g, '-') // collapse whitespace and replace by -
                .replace(/-+/g, '-'); // collapse dashes
            return name + '.' + extension;
        };
        /**
         * On Change
         * @param event
         * @return void
         */
        /**
         * On Change
         * @param {?} event
         * @return {?} void
         */
        FileInputComponent.prototype.onChange = /**
         * On Change
         * @param {?} event
         * @return {?} void
         */
        function (event) {
            /** @type {?} */
            var _value = event.target.files.length > 0 ? event.target.files[0] : null;
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
        };
        /**
         * On Select File
         * @return void
         */
        /**
         * On Select File
         * @return {?} void
         */
        FileInputComponent.prototype.onSelectFile = /**
         * On Select File
         * @return {?} void
         */
        function () {
            this.fileInput.nativeElement.click();
        };
        /**
         * On Remove File
         * @return void
         */
        /**
         * On Remove File
         * @return {?} void
         */
        FileInputComponent.prototype.onRemoveFile = /**
         * On Remove File
         * @return {?} void
         */
        function () {
            this.value = null;
            this.fileInput.nativeElement.value = null;
            this.propagateChange(this.value);
        };
        /**
         * Show Image Preview
         * @return void
         */
        /**
         * Show Image Preview
         * @private
         * @return {?} void
         */
        FileInputComponent.prototype.showImagePreview = /**
         * Show Image Preview
         * @private
         * @return {?} void
         */
        function () {
            var _this = this;
            /** @type {?} */
            var mimeType = this.value.type;
            if (mimeType.match(/image\/*/) == null) {
                return;
            }
            /** @type {?} */
            var reader = new FileReader();
            reader.readAsDataURL(this.value);
            reader.onload = (/**
             * @param {?} _
             * @return {?}
             */
            function (_) {
                _this.imageUrl = reader.result;
                _this.cd.detectChanges();
            });
        };
        /**
         * Validate
         * @param c
         * @return any
         */
        /**
         * Validate
         * @param {?} c
         * @return {?} any
         */
        FileInputComponent.prototype.validate = /**
         * Validate
         * @param {?} c
         * @return {?} any
         */
        function (c) {
            return this.validateFn(c);
        };
        /**
         * Set Disabled State
         * @param isDisabled
         * @return void
         */
        /**
         * Set Disabled State
         * @param {?} isDisabled
         * @return {?} void
         */
        FileInputComponent.prototype.setDisabledState = /**
         * Set Disabled State
         * @param {?} isDisabled
         * @return {?} void
         */
        function (isDisabled) {
            this.disabled = isDisabled;
        };
        FileInputComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'app-file-input',
                        template: "<div class=\"file-input\">\n    <div class=\"file-input__box\" [class.file-input__box--selected]=\"value\"\n        [class.file-input__box--image-preview]=\"isImagePreview && value != null\">\n        <div class=\"file-input__box__unselected-view\" *ngIf=\"value === null\">\n            <div class=\"file-input__box__plus-icon\"><i class=\"material-icons\">add</i></div>\n            <div class=\"file-input__box__select-button\">\n                <app-button variant=\"stroked\" type=\"button\" name=\"{{label}}\" (onClick)=\"onSelectFile()\"></app-button>\n            </div>\n        </div>\n        <div class=\"file-input__box__selected-view\" *ngIf=\"!isImagePreview && value !== null\">\n            <div class=\"file-input__box__name\">{{fileName}}</div>\n        </div>\n        <div class=\"file-input__box__image-preview\" *ngIf=\"isImagePreview && value !== null\">\n            <img [src]=\"imageUrl\" />\n        </div>\n        <div class=\"file-input__box__change-button\" *ngIf=\"value !== null\">\n            <app-button variant=\"icon\" type=\"button\" color=\"primary\" icon=\"edit\" iconType=\"material\"\n                (onClick)=\"onSelectFile()\"></app-button>\n        </div>\n        <input #fileInput type=\"file\" accept=\"{{accept}}\" (change)=\"onChange($event)\" style=\"display:none;\" />\n    </div>\n    <div *ngIf=\"control.invalid && (control.dirty || control.touched)\" class=\"file-input__error\">\n        <div *ngIf=\"control.errors.required\">\n            Required Field.\n        </div>\n        <div *ngIf=\"control.errors?.InvalidFileSize\">\n            {{invalidFileSizeErrMessage}}\n        </div>\n    </div>\n</div>",
                        providers: [
                            {
                                provide: forms.NG_VALUE_ACCESSOR,
                                useExisting: core.forwardRef((/**
                                 * @return {?}
                                 */
                                function () { return FileInputComponent; })),
                                multi: true
                            },
                            {
                                provide: forms.NG_VALIDATORS,
                                useExisting: core.forwardRef((/**
                                 * @return {?}
                                 */
                                function () { return FileInputComponent; })),
                                multi: true
                            }
                        ],
                        styles: [".file-input__box{background-color:#fff;border:1px dashed #dadce1;height:215px;padding:0 25px;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;position:relative}.file-input__box--selected{border-style:solid;border-top:0;border-left:0;border-right:0;border-bottom:2px solid #4a3ae7}.file-input__box--image-preview{padding:0;border:1px solid #dadce1}.file-input__box__selected-view,.file-input__box__unselected-view{width:100%;text-align:center}.file-input__box__plus-icon{margin-bottom:30px}.file-input__box__plus-icon i{font-size:40px;color:#4a3ae7}.file-input__box__name{margin-bottom:0;font-size:15px;color:#1f2430}.file-input__box__image-preview,.file-input__box__image-preview img{width:100%;height:100%}.file-input__box__change-button{position:absolute;top:auto;bottom:5px;right:5px;left:auto}.file-input__box__change-button ::ng-deep button{width:42px;height:42px}.file-input__error{color:#f44336;font-size:75%;margin-top:5px}"]
                    }] }
        ];
        /** @nocollapse */
        FileInputComponent.ctorParameters = function () { return [
            { type: core.ChangeDetectorRef }
        ]; };
        FileInputComponent.propDecorators = {
            fileInput: [{ type: core.ViewChild, args: ['fileInput', { read: core.ElementRef, static: true },] }],
            label: [{ type: core.Input }],
            accept: [{ type: core.Input }],
            control: [{ type: core.Input }],
            isImagePreview: [{ type: core.Input }],
            invalidFileSizeErrMessage: [{ type: core.Input }],
            onFileSelection: [{ type: core.Output }],
            onFileChanged: [{ type: core.Output }]
        };
        return FileInputComponent;
    }());
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
    var CustomChipCheckboxComponent = /** @class */ (function () {
        function CustomChipCheckboxComponent() {
            this.key = "id";
            this.text = "name";
            this.selected = "selected";
            this.propagateChange = (/**
             * @param {?} _
             * @return {?}
             */
            function (_) { });
            this.onTouched = (/**
             * @return {?}
             */
            function () { });
            this.validateFn = (/**
             * @return {?}
             */
            function () { });
        }
        /**
         * ngOnInit
         * @return void
         */
        /**
         * ngOnInit
         * @return {?} void
         */
        CustomChipCheckboxComponent.prototype.ngOnInit = /**
         * ngOnInit
         * @return {?} void
         */
        function () {
        };
        /**
         * Write a value to the control
         * @param value
         * @return void
         */
        /**
         * Write a value to the control
         * @param {?} value
         * @return {?} void
         */
        CustomChipCheckboxComponent.prototype.writeValue = /**
         * Write a value to the control
         * @param {?} value
         * @return {?} void
         */
        function (value) {
            if (value) {
                this.value = value;
            }
        };
        /**
         * Register a function to tell Angular when the value of the input changes
         * @param fn
         * @return void
         */
        /**
         * Register a function to tell Angular when the value of the input changes
         * @param {?} fn
         * @return {?} void
         */
        CustomChipCheckboxComponent.prototype.registerOnChange = /**
         * Register a function to tell Angular when the value of the input changes
         * @param {?} fn
         * @return {?} void
         */
        function (fn) {
            this.propagateChange = fn;
        };
        /**
         * Register a function to tell Angular when the input has been touched
         * @param fn
         * @return void
         */
        /**
         * Register a function to tell Angular when the input has been touched
         * @param {?} fn
         * @return {?} void
         */
        CustomChipCheckboxComponent.prototype.registerOnTouched = /**
         * Register a function to tell Angular when the input has been touched
         * @param {?} fn
         * @return {?} void
         */
        function (fn) {
            this.onTouched = fn;
        };
        /**
         * On Change
         * @param event
         * @return void
         */
        /**
         * On Change
         * @param {?} value
         * @return {?} void
         */
        CustomChipCheckboxComponent.prototype.onChange = /**
         * On Change
         * @param {?} value
         * @return {?} void
         */
        function (value) {
            this.value[this.selected] = !value[this.selected];
            this.onTouched();
            this.propagateChange(this.value);
        };
        /**
         * Validate
         * @param c
         * @return any
         */
        /**
         * Validate
         * @param {?} c
         * @return {?} any
         */
        CustomChipCheckboxComponent.prototype.validate = /**
         * Validate
         * @param {?} c
         * @return {?} any
         */
        function (c) {
            return this.validateFn(c);
        };
        /**
         * Set Disabled State
         * @param isDisabled
         * @return void
         */
        /**
         * Set Disabled State
         * @param {?} isDisabled
         * @return {?} void
         */
        CustomChipCheckboxComponent.prototype.setDisabledState = /**
         * Set Disabled State
         * @param {?} isDisabled
         * @return {?} void
         */
        function (isDisabled) {
            this.disabled = isDisabled;
        };
        CustomChipCheckboxComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'app-custom-chip-checkbox',
                        template: "<div class=\"custom-chip-checkbox\" [class.custom-chip-checkbox--selected]=\"value[selected]\" (click)=\"onChange(value)\">\n    <div class=\"custom-chip-checkbox__icon\" *ngIf=\"value[selected]\">\n        <img\n            src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMThweCIgaGVpZ2h0PSIxOHB4IiB2aWV3Qm94PSIwIDAgMTggMTgiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDYwLjEgKDg4MTMzKSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT50aWNrPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9IldlbGNvbWUiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJEZXNpcmVkLVJvbGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yNjguMDAwMDAwLCAtNDk5LjAwMDAwMCkiIGZpbGw9IiNGRkZGRkYiIGZpbGwtcnVsZT0ibm9uemVybyI+CiAgICAgICAgICAgIDxnIGlkPSJ0aWNrIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNjguMDAwMDAwLCA0OTkuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTcuNTY2LDIuMDU2ODUzOTMgQzE3LjQxNTk0NTQsMS45MDQ5NDQ0MSAxNy4yMTIzMjc0LDEuODE5NTg4MzIgMTcsMS44MTk1ODgzMiBDMTYuNzg3NjcyNiwxLjgxOTU4ODMyIDE2LjU4NDA1NDYsMS45MDQ5NDQ0MSAxNi40MzQsMi4wNTY4NTM5MyBMOSw5LjU3NDM4MjAyIEw2LjM2Niw2LjkxMDc4NjUyIEM2LjA1MzQwNjgzLDYuNTk0NjgxMDcgNS41NDY1OTMxNyw2LjU5NDY4MTA4IDUuMjM0MDAwMDEsNi45MTA3ODY1MyBDNC45MjE0MDY4NCw3LjIyNjg5MTk3IDQuOTIxNDA2ODQsNy43Mzk0MDAxNyA1LjIzNCw4LjA1NTUwNTYyIEw4LjQzNCwxMS4yOTE0NjA3IEM4LjU4NDA1NDYxLDExLjQ0MzM3MDIgOC43ODc2NzI2LDExLjUyODcyNjMgOSwxMS41Mjg3MjYzIEM5LjIxMjMyNzQsMTEuNTI4NzI2MyA5LjQxNTk0NTM5LDExLjQ0MzM3MDIgOS41NjYsMTEuMjkxNDYwNyBMMTcuNTY2LDMuMjAxNTczMDMgQzE3LjcxNjIyMTYsMy4wNDk4MzI0MiAxNy44MDA2MjkzLDIuODQzOTI2NTggMTcuODAwNjI5MywyLjYyOTIxMzQ4IEMxNy44MDA2MjkzLDIuNDE0NTAwMzggMTcuNzE2MjIxNiwyLjIwODU5NDU1IDE3LjU2NiwyLjA1Njg1MzkzIFoiIGlkPSJQYXRoIj48L3BhdGg+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTcuNjI0LDcuMzE3MzAzMzcgQzE3LjU2NjgzNzUsNy4wMzQwNTk5OSAxNy4zNjQ1ODc2LDYuODAzMTcwNzkgMTcuMDkzNDM1OSw2LjcxMTYwOTQ5IEMxNi44MjIyODQyLDYuNjIwMDQ4MiAxNi41MjM0MjUxLDYuNjgxNzI1MTYgMTYuMzA5NDM1OSw2Ljg3MzQwNzI1IEMxNi4wOTU0NDY3LDcuMDY1MDg5MzQgMTUuOTk4ODM3NSw3LjM1NzY1NTUgMTYuMDU2LDcuNjQwODk4ODggQzE2LjczNTEzODUsMTAuOTk0NTM1MiAxNS4wMTIyOTE2LDE0LjM3MzY2ODggMTEuOTE2ODI0NiwxNS43NTkzMzc4IEM4LjgyMTM1NzU5LDE3LjE0NTAwNjkgNS4xODkzODE2MSwxNi4xNjI5MzA2IDMuMTkwOTI2NjUsMTMuMzk5ODc5MiBDMS4xOTI0NzE2OSwxMC42MzY4Mjc4IDEuMzY3MzM2OTYsNi44MzkxMjQyMyAzLjYxMTA0NDExLDQuMjc1ODE3MjkgQzUuODU0NzUxMjYsMS43MTI1MTAzNCA5LjU2MTI1NjQzLDEuMDc1OTcwNDIgMTIuNTE2LDIuNzQ2NTE2ODUgQzEyLjkwMjU5OTMsMi45NjU0NDUwMSAxMy4zOTE1MDQ0LDIuODI1OTk5MzIgMTMuNjA4LDIuNDM1MDU2MTggQzEzLjgyNDQ5NTYsMi4wNDQxMTMwNCAxMy42ODY1OTkzLDEuNTQ5NzE0NjcgMTMuMywxLjMzMDc4NjUyIEM5LjgzNDc2MzMzLC0wLjYzMTcyMjU2MSA1LjQ5OTA0MTUxLC0wLjAwMzc4NzQ1ODY4IDIuNzE3ODIxNzYsMi44NjMzODUxMSBDLTAuMDYzMzk3OTgwNSw1LjczMDU1NzY4IC0wLjYwMDczMDAzMiwxMC4xMjYyNzY4IDEuNDA2MzU3NjYsMTMuNTkxOTk4NiBDMy40MTM0NDUzNSwxNy4wNTc3MjAzIDcuNDY3NDUyNTcsMTguNzM0MzkwNCAxMS4zMDA5NTYzLDE3LjY4NDI0MDMgQzE1LjEzNDQ1OTksMTYuNjM0MDkwMSAxNy43OTcyNDMxLDEzLjExNzQyMjMgMTcuOCw5LjEwMTEyMzYgQzE3Ljc5OTY5NzQsOC41MDIxMDAxMSAxNy43NDA3NDMxLDcuOTA0NTc4NjggMTcuNjI0LDcuMzE3MzAzMzcgWiIgaWQ9IlBhdGgiPjwvcGF0aD4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+\" />\n    </div>\n    <div class=\"custom-chip-checkbox__name\" [class.custom-chip-checkbox__name--selected]=\"value[selected]\">\n        {{value[text]}}\n    </div>\n</div>",
                        providers: [
                            {
                                provide: forms.NG_VALUE_ACCESSOR,
                                useExisting: core.forwardRef((/**
                                 * @return {?}
                                 */
                                function () { return CustomChipCheckboxComponent; })),
                                multi: true
                            },
                            {
                                provide: forms.NG_VALIDATORS,
                                useExisting: core.forwardRef((/**
                                 * @return {?}
                                 */
                                function () { return CustomChipCheckboxComponent; })),
                                multi: true
                            }
                        ],
                        styles: [".custom-chip-checkbox{border:1px solid #ced0d5;height:100px;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;position:relative;padding:0 25px;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.custom-chip-checkbox--selected{background-color:#4540de}.custom-chip-checkbox__icon{position:absolute;top:5px;left:10px}.custom-chip-checkbox__name{font-size:17px;color:#1f2430;text-align:center}.custom-chip-checkbox__name--selected{color:#fff}"]
                    }] }
        ];
        /** @nocollapse */
        CustomChipCheckboxComponent.ctorParameters = function () { return []; };
        CustomChipCheckboxComponent.propDecorators = {
            key: [{ type: core.Input }],
            text: [{ type: core.Input }],
            selected: [{ type: core.Input }]
        };
        return CustomChipCheckboxComponent;
    }());
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
    var CUSTOM_DATE_FORMATS = {
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
    var ɵ0 = { useUtc: true };
    var FormFieldsModule = /** @class */ (function () {
        function FormFieldsModule() {
        }
        FormFieldsModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            forms.FormsModule,
                            forms.ReactiveFormsModule,
                            material.MatFormFieldModule,
                            material.MatIconModule,
                            material.MatButtonModule,
                            material.MatInputModule,
                            material.MatSelectModule,
                            material.MatDatepickerModule,
                            materialMomentAdapter.MatMomentDateModule,
                            material.MatCheckboxModule,
                            material.MatProgressSpinnerModule
                        ],
                        declarations: [InputComponent, FormErrorHandlingPipe, SelectComponent, ButtonComponent, FileInputComponent, CustomChipCheckboxComponent],
                        exports: [material.MatIconModule, material.MatButtonModule, material.MatCheckboxModule, InputComponent, SelectComponent, ButtonComponent, FileInputComponent, CustomChipCheckboxComponent],
                        providers: [
                            { provide: core$1.DateAdapter, useClass: materialMomentAdapter.MomentDateAdapter, deps: [core$1.MAT_DATE_LOCALE] },
                            { provide: core$1.MAT_DATE_FORMATS, useValue: CUSTOM_DATE_FORMATS },
                            { provide: materialMomentAdapter.MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: ɵ0 }
                        ]
                    },] }
        ];
        return FormFieldsModule;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/dialogs/confirmation-dialog/confirmation-dialog.model.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ConfirmationDialogConfig = /** @class */ (function () {
        function ConfirmationDialogConfig() {
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
        return ConfirmationDialogConfig;
    }());
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
    var ConfirmationDialogComponent = /** @class */ (function () {
        function ConfirmationDialogComponent(ref, config) {
            this.ref = ref;
            this.config = config;
        }
        /**
         * ngOnInit
         * @return void
         */
        /**
         * ngOnInit
         * @return {?} void
         */
        ConfirmationDialogComponent.prototype.ngOnInit = /**
         * ngOnInit
         * @return {?} void
         */
        function () { };
        /**
         * On Dialog Close
         * @param result
         * @return void
         */
        /**
         * On Dialog Close
         * @param {?=} result
         * @return {?} void
         */
        ConfirmationDialogComponent.prototype.close = /**
         * On Dialog Close
         * @param {?=} result
         * @return {?} void
         */
        function (result) {
            if (result === void 0) { result = false; }
            this.ref.close(result);
        };
        ConfirmationDialogComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'app-confirmation-dialog',
                        template: "<div class=\"confirmation-dialog \">\n    <div class=\"confirmation-dialog__icon confirmation-dialog__icon--{{config.type}}\">\n        <ng-container *ngIf=\"config.iconType == 'fa'; else materialIcon\">\n            <mat-icon [fontSet]=\"config.iconType\" [fontIcon]=\"config.icon\"></mat-icon>\n        </ng-container>\n        <ng-template #materialIcon>\n            <mat-icon>{{config.icon}}</mat-icon>\n        </ng-template>\n    </div>\n    <div class=\"row mt-4 confirmation-dialog__title\">\n        <h2 class=\"col-12\">{{config.title}}</h2>\n    </div>\n    <div class=\"row mt-2 confirmation-dialog__message\">\n        <p class=\"col-12\">{{config.message}}</p>\n    </div>\n    <div class=\"row mt-4\">\n        <div class=\"col-6 offset-sm-2 col-sm-4\">\n            <button type=\"button\" mat-raised-button [color]=\"config.type\" (click)=\"close(true)\" tabindex=\"1\">\n                {{config.yesBtnText}}\n            </button>\n        </div>\n        <div class=\"col-6 col-sm-4\">\n            <button type=\"button\" mat-stroked-button (click)=\"close(false)\" tabindex=\"2\">\n                {{config.noBtnText}}\n            </button>\n        </div>\n    </div>\n</div>",
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        styles: [".confirmation-dialog{width:370px;padding:10px 0;text-align:center}@media (max-width:576px){.confirmation-dialog{width:auto}}.confirmation-dialog__icon--warn{color:#f44336}.confirmation-dialog__icon .mat-icon{font-size:60px;width:60px;height:60px}.confirmation-dialog__title h2{font-size:2.1rem}.confirmation-dialog__message p{font-size:1.08rem}"]
                    }] }
        ];
        /** @nocollapse */
        ConfirmationDialogComponent.ctorParameters = function () { return [
            { type: dialog.MatDialogRef },
            { type: ConfirmationDialogConfig, decorators: [{ type: core.Inject, args: [dialog.MAT_DIALOG_DATA,] }] }
        ]; };
        return ConfirmationDialogComponent;
    }());
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
    var ConfirmationDialogService = /** @class */ (function () {
        function ConfirmationDialogService(dialog) {
            this.dialog = dialog;
        }
        /**
         * @param {?} data
         * @param {?} callback
         * @return {?}
         */
        ConfirmationDialogService.prototype.open = /**
         * @param {?} data
         * @param {?} callback
         * @return {?}
         */
        function (data, callback) {
            /** @type {?} */
            var ref = this.dialog.open(ConfirmationDialogComponent, {
                data: data,
                autoFocus: false
            });
            ref.afterClosed().subscribe((/**
             * @param {?} result
             * @return {?}
             */
            function (result) {
                if (callback) {
                    callback(result);
                }
            }));
        };
        ConfirmationDialogService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        ConfirmationDialogService.ctorParameters = function () { return [
            { type: material.MatDialog }
        ]; };
        /** @nocollapse */ ConfirmationDialogService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function ConfirmationDialogService_Factory() { return new ConfirmationDialogService(core.ɵɵinject(dialog.MatDialog)); }, token: ConfirmationDialogService, providedIn: "root" });
        return ConfirmationDialogService;
    }());
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
    var ConfirmationDialogModule = /** @class */ (function () {
        function ConfirmationDialogModule() {
        }
        ConfirmationDialogModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            material.MatDialogModule,
                            material.MatIconModule,
                            material.MatButtonModule
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
        return ConfirmationDialogModule;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/services/error.handler.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ErrorHandlerService = /** @class */ (function () {
        function ErrorHandlerService() {
        }
        /**
         * @param {?} error
         * @return {?}
         */
        ErrorHandlerService.prototype.handleError = /**
         * @param {?} error
         * @return {?}
         */
        function (error) {
            console.info('DERSBOOK Error: ', error);
        };
        ErrorHandlerService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        ErrorHandlerService.ctorParameters = function () { return []; };
        /** @nocollapse */ ErrorHandlerService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function ErrorHandlerService_Factory() { return new ErrorHandlerService(); }, token: ErrorHandlerService, providedIn: "root" });
        return ErrorHandlerService;
    }());

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
        var exception = errors.length > 0 ? errors[0] : {
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
        var exceptionMessage = exception.message && exception.message instanceof Array && exception.message.length > 0 ? exception.message[0] : exception.message;
        if (typeof exceptionMessage === 'object' && 'constraints' in exceptionMessage) {
            /** @type {?} */
            var constraints = exceptionMessage['constraints'];
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
    var errorMiddleware = (/**
     * @param {?} toastr
     * @return {?}
     */
    function (toastr) { return apolloLinkError.onError((/**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var graphQLErrors = _a.graphQLErrors, networkError = _a.networkError;
        if (!navigator.onLine) {
            toastr.errorNotification('No Internet Connection');
        }
        else if (graphQLErrors && graphQLErrors.length > 0) {
            /** @type {?} */
            var errors_1 = [];
            graphQLErrors.forEach((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var message = _a.message;
                errors_1.push(message);
            }));
            /** @type {?} */
            var error = parseGraphQLErrors(errors_1);
            if (error.message && error.message !== '') {
                toastr.errorNotification(error.message);
            }
        }
        else if (networkError) {
            /** @type {?} */
            var message = networkError.message;
            if (networkError.message.indexOf('unauthorized') > -1) {
                message = 'Session has been expired, please login again.';
            }
            toastr.errorNotification(message);
        }
    })); });

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
        function (formGroup) {
            /** @type {?} */
            var control = formGroup.controls[controlName];
            /** @type {?} */
            var matchingControl = formGroup.controls[matchingControlName];
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
        function (formGroup) {
            /** @type {?} */
            var control = formGroup.controls[controlName];
            /** @type {?} */
            var matchingControl = formGroup.controls[matchingControlName];
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
    var ɵ0$1 = /**
     * @param {?} x
     * @return {?}
     */
    function (x) {
        return x[Math.floor(Math.random() * x.length)];
    };
    /** @type {?} */
    var randomPasswordGenerator = Array(10).fill("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz").map((ɵ0$1)).join('');

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
            { type: core.Directive, args: [{
                        selector: '[routerLink][disableLink]'
                    },] }
        ];
        /** @nocollapse */
        DisableLinkDirective.ctorParameters = function () { return [
            { type: router.RouterLink, decorators: [{ type: core.Optional }] },
            { type: router.RouterLinkWithHref, decorators: [{ type: core.Optional }] }
        ]; };
        DisableLinkDirective.propDecorators = {
            disableLink: [{ type: core.Input }]
        };
        return DisableLinkDirective;
    }());
    if (false) {
        /** @type {?} */
        DisableLinkDirective.prototype.disableLink;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/common.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LMSCommonModule = /** @class */ (function () {
        function LMSCommonModule() {
        }
        LMSCommonModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            material.MatDialogModule,
                            material.MatIconModule
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
                                provide: core.ErrorHandler,
                                useClass: ErrorHandlerService,
                            },
                            ToastrManager,
                            ToastrOptions
                        ]
                    },] }
        ];
        return LMSCommonModule;
    }());

    exports.CUSTOM_DATE_FORMATS = CUSTOM_DATE_FORMATS;
    exports.ConfirmationDialogModule = ConfirmationDialogModule;
    exports.ConfirmationDialogService = ConfirmationDialogService;
    exports.ErrorHandlerService = ErrorHandlerService;
    exports.ExceptionCodes = ExceptionCodes;
    exports.ExceptionMessages = ExceptionMessages;
    exports.FormFieldsModule = FormFieldsModule;
    exports.GenericConstants = GenericConstants;
    exports.LMSCommonModule = LMSCommonModule;
    exports.MustMatch = MustMatch;
    exports.MustNotMatch = MustNotMatch;
    exports.RegExpPattern = RegExpPattern;
    exports.Toastr = Toastr;
    exports.ToastrManager = ToastrManager;
    exports.ValidateFileSize = ValidateFileSize;
    exports.ValidationMessages = ValidationMessages;
    exports.currencyFormatter = currencyFormatter;
    exports.errorMiddleware = errorMiddleware;
    exports.randomPasswordGenerator = randomPasswordGenerator;
    exports.ɵa = InputComponent;
    exports.ɵb = FormErrorHandlingPipe;
    exports.ɵc = SelectComponent;
    exports.ɵd = ButtonComponent;
    exports.ɵe = FileInputComponent;
    exports.ɵf = CustomChipCheckboxComponent;
    exports.ɵg = ConfirmationDialogComponent;
    exports.ɵh = ConfirmationDialogConfig;
    exports.ɵi = ToastrComponent;
    exports.ɵj = ToastrAnimations;
    exports.ɵk = ToastrOptions;
    exports.ɵl = DisableLinkDirective;
    exports.ɵm = ErrorHandlerService;
    exports.ɵn = ToastrManager;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=common.umd.js.map
