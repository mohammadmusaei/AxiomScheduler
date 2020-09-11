(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('moment'), require('rxjs'), require('@angular/common'), require('angular2-draggable'), require('@angular/animations'), require('rxjs/operators'), require('@angular/forms')) :
    typeof define === 'function' && define.amd ? define('axiom-scheduler', ['exports', '@angular/core', 'moment', 'rxjs', '@angular/common', 'angular2-draggable', '@angular/animations', 'rxjs/operators', '@angular/forms'], factory) :
    (global = global || self, factory(global['axiom-scheduler'] = {}, global.ng.core, global.momentNs, global.rxjs, global.ng.common, global.i3, global.ng.animations, global.rxjs.operators, global.ng.forms));
}(this, (function (exports, i0, momentNs, rxjs, i1, i3, animations, operators, i2) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
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
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    ;
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }
    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    var AX_LOCALES = [
        "en",
        "af",
        "ar-dz",
        "ar-kw",
        "ar-ly",
        "ar-ma",
        "ar-sa",
        "ar-tn",
        "ar",
        "az",
        "be",
        "bg",
        "bm",
        "bn",
        "bo",
        "br",
        "bs",
        "ca",
        "cs",
        "cv",
        "cy",
        "da",
        "de-at",
        "de-ch",
        "de",
        "dv",
        "el",
        "en-SG",
        "en-au",
        "en-ca",
        "en-gb",
        "en-ie",
        "en-il",
        "en-nz",
        "eo",
        "es-do",
        "es-us",
        "es",
        "et",
        "eu",
        "fa",
        "fi",
        "fo",
        "fr-ca",
        "fr-ch",
        "fr",
        "fy",
        "ga",
        "gd",
        "gl",
        "gom-latn",
        "gu",
        "he",
        "hi",
        "hr",
        "hu",
        "hy-am",
        "id",
        "is",
        "it-ch",
        "it",
        "ja",
        "jv",
        "ka",
        "kk",
        "km",
        "kn",
        "ko",
        "ku",
        "ky",
        "lb",
        "lo",
        "lt",
        "lv",
        "me",
        "mi",
        "mk",
        "ml",
        "mn",
        "mr",
        "ms-my",
        "ms",
        "mt",
        "my",
        "nb",
        "ne",
        "nl-be",
        "nl",
        "nn",
        "pa-in",
        "pl",
        "pt-br",
        "pt",
        "ro",
        "ru",
        "sd",
        "se",
        "si",
        "sk",
        "sl",
        "sq",
        "sr-cyrl",
        "sr",
        "ss",
        "sv",
        "sw",
        "ta",
        "te",
        "tet",
        "tg",
        "th",
        "tl-ph",
        "tlh",
        "tr",
        "tzl",
        "tzm-latn",
        "tzm",
        "ug-cn",
        "uk",
        "ur",
        "uz-latn",
        "uz",
        "vi",
        "x-pseudo",
        "yo",
        "zh-cn",
        "zh-hk",
        "zh-tw"
    ];

    var moment = momentNs;
    var AxiomSchedulerService = /** @class */ (function () {
        function AxiomSchedulerService() {
            this._defaultLocale = 'en';
            this.schedulerLocale = this._defaultLocale;
            this.axEvents = [];
            this.refershRequest = new rxjs.Subject();
            this.locale = new rxjs.Subject();
            this.eventChange = new rxjs.Subject();
            this.eventClick = new rxjs.Subject();
            this.eventDeleteClick = new rxjs.Subject();
            this.eventEditClick = new rxjs.Subject();
        }
        AxiomSchedulerService.prototype.refreshDate = function (date) {
            date && this.refershRequest.next(date);
        };
        AxiomSchedulerService.prototype.changeLocale = function (locale) {
            this.schedulerLocale = locale || this._defaultLocale;
            this.locale.next(this.schedulerLocale);
        };
        AxiomSchedulerService.prototype.eventChanged = function (event) {
            event && this.eventChange.next(event);
        };
        AxiomSchedulerService.prototype.eventClicked = function (event) {
            event && this.eventClick.next(event);
        };
        return AxiomSchedulerService;
    }());
    AxiomSchedulerService.ɵfac = function AxiomSchedulerService_Factory(t) { return new (t || AxiomSchedulerService)(); };
    AxiomSchedulerService.ɵprov = i0.ɵɵdefineInjectable({ token: AxiomSchedulerService, factory: AxiomSchedulerService.ɵfac });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(AxiomSchedulerService, [{
                type: i0.Injectable
            }], function () { return []; }, null);
    })();

    var AxiomSchedulerSidebarService = /** @class */ (function () {
        function AxiomSchedulerSidebarService() {
            this.data = new rxjs.Subject();
            this.toggle = new rxjs.Subject();
        }
        AxiomSchedulerSidebarService.prototype.open = function (data) {
            var _this = this;
            this.toggle.next(true);
            setTimeout(function () {
                _this.data.next(data);
            }, 200);
        };
        AxiomSchedulerSidebarService.prototype.close = function () {
            this.toggle.next(false);
        };
        return AxiomSchedulerSidebarService;
    }());
    AxiomSchedulerSidebarService.ɵfac = function AxiomSchedulerSidebarService_Factory(t) { return new (t || AxiomSchedulerSidebarService)(); };
    AxiomSchedulerSidebarService.ɵprov = i0.ɵɵdefineInjectable({ token: AxiomSchedulerSidebarService, factory: AxiomSchedulerSidebarService.ɵfac, providedIn: 'root' });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(AxiomSchedulerSidebarService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], function () { return []; }, null);
    })();

    var _c0 = function (a0) { return { "active": a0 }; };
    function AxiomSchedulerComponent_button_18_Template(rf, ctx) {
        if (rf & 1) {
            var _r8_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "button", 20);
            i0.ɵɵlistener("click", function AxiomSchedulerComponent_button_18_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r8_1); var view_r6 = ctx.$implicit; var ctx_r7 = i0.ɵɵnextContext(); return ctx_r7.changeView(view_r6); });
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var view_r6 = ctx.$implicit;
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(2, _c0, ctx_r0.axSchedulerView === view_r6.id));
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", view_r6.title, " ");
        }
    }
    function AxiomSchedulerComponent_ax_scheduler_dropdown_21_Template(rf, ctx) {
        if (rf & 1) {
            var _r10_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "ax-scheduler-dropdown", 21);
            i0.ɵɵlistener("ngModelChange", function AxiomSchedulerComponent_ax_scheduler_dropdown_21_Template_ax_scheduler_dropdown_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r10_1); var ctx_r9 = i0.ɵɵnextContext(); return ctx_r9.axLocale = $event; })("ngModelChange", function AxiomSchedulerComponent_ax_scheduler_dropdown_21_Template_ax_scheduler_dropdown_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r10_1); var ctx_r11 = i0.ɵɵnextContext(); return ctx_r11.setLocale($event); });
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r1 = i0.ɵɵnextContext();
            i0.ɵɵproperty("ngModel", ctx_r1.axLocale)("modelFormatter", ctx_r1.modelFormatter)("items", ctx_r1.locales)("dataTitle", "title")("dataId", "id");
        }
    }
    function AxiomSchedulerComponent_div_23_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "div", 22);
        }
        if (rf & 2) {
            var ctx_r2 = i0.ɵɵnextContext();
            i0.ɵɵproperty("axEventTemplate", ctx_r2.axEventTemplate)("axEventFormatter", ctx_r2.axEventFormatter)("axDragStep", ctx_r2.axDragStep)("axStartDate", ctx_r2.date.toDate())("axEventToolbar", ctx_r2.axEventToolbar);
        }
    }
    function AxiomSchedulerComponent_div_24_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "div", 23);
        }
        if (rf & 2) {
            var ctx_r3 = i0.ɵɵnextContext();
            i0.ɵɵproperty("axEventTemplate", ctx_r3.axEventTemplate)("axEventFormatter", ctx_r3.axEventFormatter)("axDragStep", ctx_r3.axDragStep)("axStartDate", ctx_r3.date.toDate())("axEventToolbar", ctx_r3.axEventToolbar);
        }
    }
    function AxiomSchedulerComponent_div_25_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "div", 24);
        }
        if (rf & 2) {
            var ctx_r4 = i0.ɵɵnextContext();
            i0.ɵɵproperty("axEventTemplate", ctx_r4.axEventTemplate)("axEventFormatter", ctx_r4.axEventFormatter)("axDragStep", ctx_r4.axDragStep)("axStartDate", ctx_r4.date.toDate())("axEventToolbar", ctx_r4.axEventToolbar);
        }
    }
    function AxiomSchedulerComponent_div_26_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "div", 25);
        }
        if (rf & 2) {
            var ctx_r5 = i0.ɵɵnextContext();
            i0.ɵɵproperty("axEventTemplate", ctx_r5.axEventTemplate)("axEventFormatter", ctx_r5.axEventFormatter)("axDragStep", ctx_r5.axDragStep)("axStartDate", ctx_r5.date.toDate())("axEventToolbar", ctx_r5.axEventToolbar);
        }
    }
    var moment$1 = momentNs;
    (function (AxiomSchedulerView) {
        AxiomSchedulerView["Day"] = "day";
        AxiomSchedulerView["Week"] = "week";
        AxiomSchedulerView["Month"] = "month";
        AxiomSchedulerView["Year"] = "year";
    })(exports.AxiomSchedulerView || (exports.AxiomSchedulerView = {}));
    (function (AxiomSchedulerAnimation) {
        AxiomSchedulerAnimation["Animation1"] = "animation1";
        AxiomSchedulerAnimation["Animation2"] = "animation2";
        AxiomSchedulerAnimation["Animation3"] = "animation3";
        AxiomSchedulerAnimation["Animation4"] = "animation4";
        AxiomSchedulerAnimation["Default"] = "default";
        AxiomSchedulerAnimation["None"] = "none";
    })(exports.AxiomSchedulerAnimation || (exports.AxiomSchedulerAnimation = {}));
    var AxiomSchedulerComponentCommon = /** @class */ (function () {
        function AxiomSchedulerComponentCommon(injector) {
            var _this = this;
            this.injector = injector;
            this.axDragStep = 5;
            this.axEventToolbar = true;
            this.subscriptionGarbageCollection = [];
            this.today = moment$1();
            this.service = this.injector.get(AxiomSchedulerService);
            this.sidebarService = this.injector.get(AxiomSchedulerSidebarService);
            this.subscriptionGarbageCollection.push(this.service.refershRequest.subscribe(function (s) {
                if (s) {
                    _this.date = s.clone();
                    _this.date.locale(_this.service.schedulerLocale);
                    _this.refreshView();
                }
            }));
            this.subscriptionGarbageCollection.push(this.service.locale.subscribe(function (locale) {
                moment$1.locale(locale);
                if (_this.date) {
                    _this.date.locale(_this.service.schedulerLocale);
                    _this.refreshView();
                }
            }));
        }
        AxiomSchedulerComponentCommon.prototype.refresh = function () {
            this.date = this.axStartDate
                ? moment$1(this.axStartDate)
                : moment$1(Date.now());
        };
        AxiomSchedulerComponentCommon.prototype.refreshView = function () { };
        AxiomSchedulerComponentCommon.prototype.ngOnDestroy = function () {
            if (Array.isArray(this.subscriptionGarbageCollection)) {
                this.subscriptionGarbageCollection.forEach(function (g) { return g && g.unsubscribe(); });
            }
            this.baseDestroy();
        };
        AxiomSchedulerComponentCommon.prototype.baseDestroy = function () { };
        return AxiomSchedulerComponentCommon;
    }());
    AxiomSchedulerComponentCommon.ɵfac = function AxiomSchedulerComponentCommon_Factory(t) { return new (t || AxiomSchedulerComponentCommon)(i0.ɵɵdirectiveInject(i0.Injector)); };
    AxiomSchedulerComponentCommon.ɵdir = i0.ɵɵdefineDirective({ type: AxiomSchedulerComponentCommon, inputs: { axStartDate: "axStartDate", axEventTemplate: "axEventTemplate", axEventFormatter: "axEventFormatter", axDragStep: "axDragStep", axLocale: "axLocale", axEventToolbar: "axEventToolbar" } });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(AxiomSchedulerComponentCommon, [{
                type: i0.Directive
            }], function () { return [{ type: i0.Injector }]; }, { axStartDate: [{
                    type: i0.Input
                }], axEventTemplate: [{
                    type: i0.Input
                }], axEventFormatter: [{
                    type: i0.Input
                }], axDragStep: [{
                    type: i0.Input
                }], axLocale: [{
                    type: i0.Input
                }], axEventToolbar: [{
                    type: i0.Input
                }] });
    })();
    var AxiomSchedulerEvent = /** @class */ (function () {
        function AxiomSchedulerEvent(title, from, to, data, color, locked) {
            if (title === void 0) { title = null; }
            if (from === void 0) { from = null; }
            if (to === void 0) { to = null; }
            if (data === void 0) { data = null; }
            if (color === void 0) { color = null; }
            if (locked === void 0) { locked = false; }
            this.data = data;
            this.from = from;
            this.to = to;
            this.color = color;
            this.locked = locked;
            this.title = title;
            this._id = Symbol();
        }
        return AxiomSchedulerEvent;
    }());
    var AxiomSchedulerComponent = /** @class */ (function (_super) {
        __extends(AxiomSchedulerComponent, _super);
        function AxiomSchedulerComponent(injector, _element, _renderer) {
            var _this = _super.call(this, injector) || this;
            _this._element = _element;
            _this._renderer = _renderer;
            _this.axShowLocale = true;
            _this.axEventChange = new i0.EventEmitter();
            _this.axEventClick = new i0.EventEmitter();
            _this.axEventDeleteClick = new i0.EventEmitter();
            _this.axEventEditClick = new i0.EventEmitter();
            _this.axDateChange = new i0.EventEmitter();
            _this.axViewChange = new i0.EventEmitter();
            _this.items = [];
            _this.locales = AX_LOCALES.map(function (v) {
                return { id: v, title: v };
            });
            return _this;
        }
        Object.defineProperty(AxiomSchedulerComponent.prototype, "axTheme", {
            set: function (axTheme) {
                this._axTheme = axTheme;
                this.updateTheme(this._axTheme);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AxiomSchedulerComponent.prototype, "axAnimation", {
            set: function (axAnimation) {
                this._axAnimation = axAnimation;
                this.updateTheme(this._axTheme);
            },
            enumerable: false,
            configurable: true
        });
        AxiomSchedulerComponent.prototype.ngOnInit = function () {
            this.axLocale = this.axLocale || "en";
            this.setListeners();
            this.updateTheme(this._axTheme);
            this.refresh();
            this.setViews();
            this.refreshScheduler();
        };
        AxiomSchedulerComponent.prototype.refreshScheduler = function () {
            this.setLocale(this.axLocale);
            this.service.axEvents = this.axEvents;
        };
        AxiomSchedulerComponent.prototype.prev = function () {
            this.step(-1);
            this.service.refreshDate(this.date);
        };
        AxiomSchedulerComponent.prototype.next = function () {
            this.step(1);
            this.service.refreshDate(this.date);
        };
        AxiomSchedulerComponent.prototype.todayF = function () {
            this.applyDefaultAnimations(this.date.clone().isBefore(moment$1()) ? 1 : -1);
            this.date = moment$1();
            this.service.refreshDate(this.date);
            this.axDateChange && this.axDateChange.emit(this.date.clone().toDate());
        };
        AxiomSchedulerComponent.prototype.modelFormatter = function (value) {
            return value ? value.id : null;
        };
        AxiomSchedulerComponent.prototype.setLocale = function (locale) {
            this.service.changeLocale(locale);
        };
        AxiomSchedulerComponent.prototype.updateTheme = function (theme) {
            var _this = this;
            if (theme) {
                this._renderer.removeClass(this._element.nativeElement, "dark");
                this._renderer.removeClass(this._element.nativeElement, "light");
                this._renderer.addClass(this._element.nativeElement, theme);
                //
                if (this._axAnimation === "none") {
                    Object.values(exports.AxiomSchedulerAnimation).forEach(function (animation) {
                        _this._renderer.removeClass(_this._element.nativeElement, animation);
                    });
                }
                else {
                    Object.values(exports.AxiomSchedulerAnimation).forEach(function (animation) {
                        _this._renderer.removeClass(_this._element.nativeElement, animation);
                    });
                    this._renderer.addClass(this._element.nativeElement, this._axAnimation);
                }
            }
        };
        AxiomSchedulerComponent.prototype.changeView = function (view) {
            this.axSchedulerView = view.id;
            this.axViewChange && this.axViewChange.emit(view.id);
        };
        AxiomSchedulerComponent.prototype.step = function (step) {
            switch (this.axSchedulerView) {
                case exports.AxiomSchedulerView.Day:
                    this.date = this.date.clone().add(step, "days");
                    break;
                case exports.AxiomSchedulerView.Week:
                    this.date = this.date.clone().add(step, "weeks");
                    break;
                case exports.AxiomSchedulerView.Month:
                    this.date = this.date.clone().add(step, "months");
                    break;
                case exports.AxiomSchedulerView.Year:
                    this.date = this.date.clone().add(step, "years");
                    break;
            }
            this.applyDefaultAnimations(step);
            this.axDateChange && this.axDateChange.emit(this.date.clone().toDate());
        };
        AxiomSchedulerComponent.prototype.applyDefaultAnimations = function (step) {
            if (this._axAnimation === exports.AxiomSchedulerAnimation.Default) {
                this._renderer.removeClass(this._element.nativeElement, "forward");
                this._renderer.removeClass(this._element.nativeElement, "backward");
                if (step > 0) {
                    this._renderer.addClass(this._element.nativeElement, "forward");
                }
                else {
                    this._renderer.addClass(this._element.nativeElement, "backward");
                }
            }
        };
        AxiomSchedulerComponent.prototype.setViews = function () {
            var _this = this;
            var def = [
                { id: exports.AxiomSchedulerView.Day, title: "Day" },
                { id: exports.AxiomSchedulerView.Week, title: "Week" },
                { id: exports.AxiomSchedulerView.Month, title: "Month" },
                { id: exports.AxiomSchedulerView.Year, title: "Year" },
            ];
            if (Array.isArray(this.axViews)) {
                this.items = __spread(def.filter(function (i) { return _this.axViews.indexOf(i.id) >= 0; }));
            }
            else {
                this.items = __spread(def);
            }
            if (!this.axSchedulerView) {
                this.axSchedulerView = this.items[0].id;
            }
        };
        AxiomSchedulerComponent.prototype.setListeners = function () {
            var _this = this;
            this.subscriptionGarbageCollection.push(this.service.eventChange.subscribe(function (event) {
                _this.axEventChange && _this.axEventChange.emit(event);
            }));
            this.subscriptionGarbageCollection.push(this.service.eventClick.subscribe(function (event) {
                _this.axEventClick && _this.axEventClick.emit(event);
            }));
            this.subscriptionGarbageCollection.push(this.service.eventDeleteClick.subscribe(function (event) {
                _this.axEventDeleteClick && _this.axEventDeleteClick.emit(event);
            }));
            this.subscriptionGarbageCollection.push(this.service.eventEditClick.subscribe(function (event) {
                _this.axEventEditClick && _this.axEventEditClick.emit(event);
            }));
        };
        return AxiomSchedulerComponent;
    }(AxiomSchedulerComponentCommon));
    AxiomSchedulerComponent.ɵfac = function AxiomSchedulerComponent_Factory(t) { return new (t || AxiomSchedulerComponent)(i0.ɵɵdirectiveInject(i0.Injector), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2)); };
    AxiomSchedulerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AxiomSchedulerComponent, selectors: [["ax-scheduler"]], hostAttrs: [1, "ax-scheduler"], inputs: { axEvents: "axEvents", axSchedulerView: "axSchedulerView", axTheme: "axTheme", axAnimation: "axAnimation", axShowLocale: "axShowLocale", axViews: "axViews" }, outputs: { axEventChange: "axEventChange", axEventClick: "axEventClick", axEventDeleteClick: "axEventDeleteClick", axEventEditClick: "axEventEditClick", axDateChange: "axDateChange", axViewChange: "axViewChange" }, features: [i0.ɵɵProvidersFeature([AxiomSchedulerService, AxiomSchedulerSidebarService]), i0.ɵɵInheritDefinitionFeature], decls: 27, vars: 15, consts: [[1, "ax-scheduler__header"], [1, "ax-scheduler__header__date-part"], [3, "click"], [1, "ax-scheduler__header__date-part__nav"], ["height", "24px", "version", "1.1", "viewBox", "0 0 24 24", "width", "24px", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink"], ["fill", "none", "fill-rule", "evenodd", "id", "icon/chevron-back", "stroke", "none", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "1"], ["id", "lineart", "points", "15.5 20.4751 6.5 11.4751 15.5 2.4751", "stroke", "#000000"], [1, "ax-scheduler__header__date-part__title"], ["fill", "none", "fill-rule", "evenodd", "id", "icon/chevron-forward", "stroke", "none", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "1"], ["id", "lineart", "points", "7.5 20.4751 16.5 11.4751 7.5 2.4751", "stroke", "#000000"], [1, "ax-scheduler__header__nav-view-part"], [3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "ax-scheduler__header__view-part"], ["title", "Change View", 1, "view-dropdown", 3, "ngModel", "modelFormatter", "items", "dataTitle", "dataId", "ngModelChange"], ["title", "Change Locale", "class", "locale-dropdown", 3, "ngModel", "modelFormatter", "items", "dataTitle", "dataId", "ngModelChange", 4, "ngIf"], [1, "ax-scheduler__body", 3, "ngSwitch"], ["ax-scheduler-day-view", "", 3, "axEventTemplate", "axEventFormatter", "axDragStep", "axStartDate", "axEventToolbar", 4, "ngSwitchCase"], ["ax-scheduler-week-view", "", 3, "axEventTemplate", "axEventFormatter", "axDragStep", "axStartDate", "axEventToolbar", 4, "ngSwitchCase"], ["ax-scheduler-month-view", "", 3, "axEventTemplate", "axEventFormatter", "axDragStep", "axStartDate", "axEventToolbar", 4, "ngSwitchCase"], ["ax-scheduler-year-view", "", 3, "axEventTemplate", "axEventFormatter", "axDragStep", "axStartDate", "axEventToolbar", 4, "ngSwitchCase"], [3, "ngClass", "click"], ["title", "Change Locale", 1, "locale-dropdown", 3, "ngModel", "modelFormatter", "items", "dataTitle", "dataId", "ngModelChange"], ["ax-scheduler-day-view", "", 3, "axEventTemplate", "axEventFormatter", "axDragStep", "axStartDate", "axEventToolbar"], ["ax-scheduler-week-view", "", 3, "axEventTemplate", "axEventFormatter", "axDragStep", "axStartDate", "axEventToolbar"], ["ax-scheduler-month-view", "", 3, "axEventTemplate", "axEventFormatter", "axDragStep", "axStartDate", "axEventToolbar"], ["ax-scheduler-year-view", "", 3, "axEventTemplate", "axEventFormatter", "axDragStep", "axStartDate", "axEventToolbar"]], template: function AxiomSchedulerComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵelementStart(1, "div", 1);
                i0.ɵɵelementStart(2, "button", 2);
                i0.ɵɵlistener("click", function AxiomSchedulerComponent_Template_button_click_2_listener() { return ctx.todayF(); });
                i0.ɵɵtext(3, "today");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(4, "div", 3);
                i0.ɵɵelementStart(5, "button", 2);
                i0.ɵɵlistener("click", function AxiomSchedulerComponent_Template_button_click_5_listener() { return ctx.prev(); });
                i0.ɵɵnamespaceSVG();
                i0.ɵɵelementStart(6, "svg", 4);
                i0.ɵɵelementStart(7, "g", 5);
                i0.ɵɵelement(8, "polyline", 6);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵnamespaceHTML();
                i0.ɵɵelementStart(9, "div", 7);
                i0.ɵɵelementStart(10, "b");
                i0.ɵɵtext(11);
                i0.ɵɵelementEnd();
                i0.ɵɵtext(12);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(13, "button", 2);
                i0.ɵɵlistener("click", function AxiomSchedulerComponent_Template_button_click_13_listener() { return ctx.next(); });
                i0.ɵɵnamespaceSVG();
                i0.ɵɵelementStart(14, "svg", 4);
                i0.ɵɵelementStart(15, "g", 8);
                i0.ɵɵelement(16, "polyline", 9);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵnamespaceHTML();
                i0.ɵɵelementStart(17, "div", 10);
                i0.ɵɵtemplate(18, AxiomSchedulerComponent_button_18_Template, 2, 4, "button", 11);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(19, "div", 12);
                i0.ɵɵelementStart(20, "ax-scheduler-dropdown", 13);
                i0.ɵɵlistener("ngModelChange", function AxiomSchedulerComponent_Template_ax_scheduler_dropdown_ngModelChange_20_listener($event) { return ctx.axSchedulerView = $event; });
                i0.ɵɵelementEnd();
                i0.ɵɵtemplate(21, AxiomSchedulerComponent_ax_scheduler_dropdown_21_Template, 1, 5, "ax-scheduler-dropdown", 14);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(22, "div", 15);
                i0.ɵɵtemplate(23, AxiomSchedulerComponent_div_23_Template, 1, 5, "div", 16);
                i0.ɵɵtemplate(24, AxiomSchedulerComponent_div_24_Template, 1, 5, "div", 17);
                i0.ɵɵtemplate(25, AxiomSchedulerComponent_div_25_Template, 1, 5, "div", 18);
                i0.ɵɵtemplate(26, AxiomSchedulerComponent_div_26_Template, 1, 5, "div", 19);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(11);
                i0.ɵɵtextInterpolate(ctx.date.format("DD"));
                i0.ɵɵadvance(1);
                i0.ɵɵtextInterpolate2(" ", ctx.date.format("MMMM"), " ", ctx.date.format("YYYY"), " ");
                i0.ɵɵadvance(6);
                i0.ɵɵproperty("ngForOf", ctx.items);
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("ngModel", ctx.axSchedulerView)("modelFormatter", ctx.modelFormatter)("items", ctx.items)("dataTitle", "title")("dataId", "id");
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.axShowLocale);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngSwitch", ctx.axSchedulerView);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngSwitchCase", "day");
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngSwitchCase", "week");
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngSwitchCase", "month");
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngSwitchCase", "year");
            }
        }, styles: ["@import \"~angular2-draggable/css/resizable.min.css\";*,:after,:before{box-sizing:border-box}html{-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-text-size-adjust:100%;font-family:sans-serif;line-height:1.15}article,aside,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}body{background-color:#fff;color:#212529;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-size:1rem;font-weight:400;line-height:1.5;margin:0;text-align:left}[tabindex=\"-1\"]:focus{outline:0!important}hr{box-sizing:content-box;height:0;overflow:visible}h1,h2,h3,h4,h5,h6{margin-bottom:.5rem;margin-top:0}p{margin-bottom:1rem;margin-top:0}abbr[data-original-title],abbr[title]{-webkit-text-decoration:underline dotted;-webkit-text-decoration-skip-ink:none;border-bottom:0;cursor:help;text-decoration:underline;text-decoration:underline dotted;text-decoration-skip-ink:none}address{font-style:normal;line-height:inherit}address,dl,ol,ul{margin-bottom:1rem}dl,ol,ul{margin-top:0}ol ol,ol ul,ul ol,ul ul{margin-bottom:0}dt{font-weight:700}dd{margin-bottom:.5rem;margin-left:0}blockquote{margin:0 0 1rem}b,strong{font-weight:bolder}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}a{background-color:transparent;color:#007bff;text-decoration:none}a:hover{color:#0056b3;text-decoration:underline}a:not([href]):not([tabindex]),a:not([href]):not([tabindex]):focus,a:not([href]):not([tabindex]):hover{color:inherit;text-decoration:none}a:not([href]):not([tabindex]):focus{outline:0}code,kbd,pre,samp{font-family:SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em}pre{margin-bottom:1rem;margin-top:0;overflow:auto}figure{margin:0 0 1rem}img{border-style:none}img,svg{vertical-align:middle}svg{overflow:hidden}table{border-collapse:collapse}caption{caption-side:bottom;color:#6c757d;padding-bottom:.75rem;padding-top:.75rem;text-align:left}th{text-align:inherit}label{display:inline-block;margin-bottom:.5rem}button{border-radius:0}button:focus{outline:1px dotted;outline:5px auto -webkit-focus-ring-color}button,input,optgroup,select,textarea{font-family:inherit;font-size:inherit;line-height:inherit;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}input[type=checkbox],input[type=radio]{box-sizing:border-box;padding:0}input[type=date],input[type=datetime-local],input[type=month],input[type=time]{-webkit-appearance:listbox}textarea{overflow:auto;resize:vertical}fieldset{border:0;margin:0;min-width:0;padding:0}legend{color:inherit;display:block;font-size:1.5rem;line-height:inherit;margin-bottom:.5rem;max-width:100%;padding:0;white-space:normal;width:100%}progress{vertical-align:baseline}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:none;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}output{display:inline-block}summary{cursor:pointer;display:list-item}template{display:none}[hidden]{display:none!important}@-webkit-keyframes slide-in-left{0%{opacity:0;transform:translateX(-100px)}to{opacity:1;transform:translateX(0)}}@keyframes slide-in-left{0%{opacity:0;transform:translateX(-1000px)}to{opacity:1;transform:translateX(0)}}@-webkit-keyframes slide-in-right{0%{opacity:0;transform:translateX(100px)}to{opacity:1;transform:translateX(0)}}@keyframes slide-in-right{0%{opacity:0;transform:translateX(100px)}to{opacity:1;transform:translateX(0)}}@-webkit-keyframes slit-in-vertical{0%{opacity:0;transform:translateZ(-800px) rotateY(90deg)}54%{opacity:1;transform:translateZ(-160px) rotateY(87deg)}to{transform:translateZ(0) rotateY(0)}}@keyframes slit-in-vertical{0%{opacity:0;transform:translateZ(-800px) rotateY(90deg)}54%{opacity:1;transform:translateZ(-160px) rotateY(87deg)}to{transform:translateZ(0) rotateY(0)}}@-webkit-keyframes flip-in-hor-bottom{0%{opacity:0;transform:rotateX(80deg)}to{opacity:1;transform:rotateX(0)}}@keyframes flip-in-hor-bottom{0%{opacity:0;transform:rotateX(80deg)}to{opacity:1;transform:rotateX(0)}}@-webkit-keyframes swing-in-top-fwd{0%{opacity:0;transform:rotateX(-100deg);transform-origin:top}to{opacity:1;transform:rotateX(0deg);transform-origin:top}}@keyframes swing-in-top-fwd{0%{opacity:0;transform:rotateX(-100deg);transform-origin:top}to{opacity:1;transform:rotateX(0deg);transform-origin:top}}@-webkit-keyframes pulse{0%{-webkit-box-shadow:0 0 0 0 rgba(204,169,44,.4)}70%{-webkit-box-shadow:0 0 0 10px rgba(204,169,44,0)}to{-webkit-box-shadow:0 0 0 0 rgba(204,169,44,0)}}@keyframes pulse{0%{box-shadow:0 0 0 0 rgba(204,169,44,.4)}70%{box-shadow:0 0 0 10px rgba(204,169,44,0)}to{box-shadow:0 0 0 0 rgba(204,169,44,0)}}@-webkit-keyframes animation-scale{0%{opacity:0;transform:scale(0)}to{opacity:1;transform:scale(1)}}@keyframes animation-scale{0%{opacity:0;transform:scale(0)}to{opacity:1;transform:scale(1)}}@-webkit-keyframes animation-rotate{0%{opacity:0;transform:translateX(50%) scale(0) rotate(-60deg)}to{opacity:1;transform:translateX(0) scale(1) rotate(0deg)}}@keyframes animation-rotate{0%{opacity:0;transform:translateX(50%) scale(0) rotate(-60deg)}to{opacity:1;transform:translateX(0) scale(1) rotate(0deg)}}@-webkit-keyframes animation-flip{0%{opacity:0;transform:rotateY(180deg)}to{opacity:1;transform:rotateY(0deg)}}@keyframes animation-flip{0%{opacity:0;transform:rotateY(180deg)}to{opacity:1;transform:rotateY(0deg)}}@-webkit-keyframes rotate-in-2-cw{0%{opacity:0;transform:rotate(-45deg)}to{opacity:1;transform:rotate(0)}}@keyframes rotate-in-2-cw{0%{opacity:0;transform:rotate(-45deg)}to{opacity:1;transform:rotate(0)}}@-webkit-keyframes slide-in-fwd-left{0%{opacity:0;transform:translateZ(-1400px) translateX(-1000px)}to{opacity:1;transform:translateZ(0) translateX(0)}}@keyframes slide-in-fwd-left{0%{opacity:0;transform:translateZ(-1400px) translateX(-1000px)}to{opacity:1;transform:translateZ(0) translateX(0)}}@-webkit-keyframes slide-in-fwd-center{0%{opacity:0;transform:translateZ(-1400px)}to{opacity:1;transform:translateZ(0)}}@keyframes slide-in-fwd-center{0%{opacity:0;transform:translateZ(-1400px)}to{opacity:1;transform:translateZ(0)}}@-webkit-keyframes flip-in-ver-right{0%{opacity:0;transform:rotateY(-80deg)}to{opacity:1;transform:rotateY(0)}}@keyframes flip-in-ver-right{0%{opacity:0;transform:rotateY(-80deg)}to{opacity:1;transform:rotateY(0)}}@-webkit-keyframes flip-in-ver-left{0%{opacity:0;transform:rotateY(80deg)}to{opacity:1;transform:rotateY(0)}}@keyframes flip-in-ver-left{0%{opacity:0;transform:rotateY(80deg)}to{opacity:1;transform:rotateY(0)}}@-webkit-keyframes fade-in-left{0%{opacity:0;transform:translateX(-30px)}to{opacity:1;transform:translateX(0)}}@keyframes fade-in-left{0%{opacity:0;transform:translateX(-30px)}to{opacity:1;transform:translateX(0)}}@-webkit-keyframes fade-in-right{0%{opacity:0;transform:translateX(30px)}to{opacity:1;transform:translateX(0)}}@keyframes fade-in-right{0%{opacity:0;transform:translateX(30px)}to{opacity:1;transform:translateX(0)}}@-webkit-keyframes slide-out-right{0%{opacity:1;transform:translateX(0)}to{opacity:0;transform:translateX(1000px)}}@keyframes slide-out-right{0%{opacity:1;transform:translateX(0)}to{opacity:0;transform:translateX(1000px)}}.ax-scheduler.animation1 .ax-scheduler__week-view__header>div>div,.ax-scheduler.animation4 .ax-scheduler__day-view__body{-webkit-animation:animation-scale .3s ease-in-out both;animation:animation-scale .3s ease-in-out both}.ax-scheduler.animation1 .ax-scheduler__day-view__body,.ax-scheduler.animation1 .ax-scheduler__day-view__header .header_number,.ax-scheduler.animation1 .ax-scheduler__month-view__day,.ax-scheduler.animation1 .ax-scheduler__year-view>div,.ax-scheduler.animation2 .ax-scheduler__day-view__header .header_number,.ax-scheduler.animation3 .ax-scheduler__day-view__header .header_number,.ax-scheduler.animation4 .ax-scheduler__day-view__header .header_number{-webkit-animation:animation-flip .3s cubic-bezier(.25,.25,.25,1.15) both;animation:animation-flip .3s cubic-bezier(.25,.25,.25,1.15) both}.ax-scheduler.animation2 .ax-scheduler__month-view__day,.ax-scheduler.animation2 .ax-scheduler__week-view__header>div>div,.ax-scheduler.animation2 .ax-scheduler__year-view>div{-webkit-animation:swing-in-top-fwd .3s cubic-bezier(.175,.885,.32,1.275) both;animation:swing-in-top-fwd .3s cubic-bezier(.175,.885,.32,1.275) both}.ax-scheduler.animation2 .ax-scheduler__day-view__body{-webkit-animation:slit-in-vertical .3s ease-out both;animation:slit-in-vertical .3s ease-out both}.ax-scheduler.animation3 .ax-scheduler__month-view__day,.ax-scheduler.animation3 .ax-scheduler__year-view>div{-webkit-animation:rotate-in-2-cw .3s cubic-bezier(.25,.46,.45,.94) both;animation:rotate-in-2-cw .3s cubic-bezier(.25,.46,.45,.94) both}.ax-scheduler.animation3 .ax-scheduler__day-view__body{-webkit-animation:slide-in-fwd-left .3s cubic-bezier(.25,.46,.45,.94) both;animation:slide-in-fwd-left .3s cubic-bezier(.25,.46,.45,.94) both}.ax-scheduler.animation3 .ax-scheduler__week-view__header>div>div,.ax-scheduler.animation4 .ax-scheduler__week-view__header>div>div{-webkit-animation:slide-in-fwd-center .4s cubic-bezier(.25,.46,.45,.94) both;animation:slide-in-fwd-center .4s cubic-bezier(.25,.46,.45,.94) both}.ax-scheduler.animation4 .ax-scheduler__month-view__day,.ax-scheduler.animation4 .ax-scheduler__year-view>div{-webkit-animation:flip-in-ver-right .3s cubic-bezier(.25,.46,.45,.94) both;animation:flip-in-ver-right .3s cubic-bezier(.25,.46,.45,.94) both}.ax-scheduler.default.backward .ax-scheduler__day-view__header .header_number,.ax-scheduler.default.backward .ax-scheduler__month-view__day,.ax-scheduler.default.backward .ax-scheduler__week-view__header>div>div,.ax-scheduler.default.backward .ax-scheduler__year-view>div{-webkit-animation:fade-in-left .2s cubic-bezier(.39,.575,.565,1) both;animation:fade-in-left .2s cubic-bezier(.39,.575,.565,1) both}.ax-scheduler.default.forward .ax-scheduler__day-view__header .header_number,.ax-scheduler.default.forward .ax-scheduler__month-view__day,.ax-scheduler.default.forward .ax-scheduler__week-view__header>div>div,.ax-scheduler.default.forward .ax-scheduler__year-view>div{-webkit-animation:fade-in-right .2s cubic-bezier(.39,.575,.565,1) both;animation:fade-in-right .2s cubic-bezier(.39,.575,.565,1) both}.ax-scheduler__month-view__day:first-child{-webkit-animation-delay:.03s;animation-delay:.03s}.ax-scheduler__month-view__day:nth-child(2){-webkit-animation-delay:.06s;animation-delay:.06s}.ax-scheduler__month-view__day:nth-child(3){-webkit-animation-delay:.09s;animation-delay:.09s}.ax-scheduler__month-view__day:nth-child(4){-webkit-animation-delay:.12s;animation-delay:.12s}.ax-scheduler__month-view__day:nth-child(5){-webkit-animation-delay:.15s;animation-delay:.15s}.ax-scheduler__month-view__day:nth-child(6){-webkit-animation-delay:.18s;animation-delay:.18s}.ax-scheduler__month-view__day:nth-child(7){-webkit-animation-delay:.21s;animation-delay:.21s}.ax-scheduler__month-view__day:nth-child(8){-webkit-animation-delay:.24s;animation-delay:.24s}.ax-scheduler__month-view__day:nth-child(9){-webkit-animation-delay:.27s;animation-delay:.27s}.ax-scheduler__month-view__day:nth-child(10){-webkit-animation-delay:.3s;animation-delay:.3s}.ax-scheduler__month-view__day:nth-child(11){-webkit-animation-delay:.33s;animation-delay:.33s}.ax-scheduler__month-view__day:nth-child(12){-webkit-animation-delay:.36s;animation-delay:.36s}.ax-scheduler__month-view__day:nth-child(13){-webkit-animation-delay:.39s;animation-delay:.39s}.ax-scheduler__month-view__day:nth-child(14){-webkit-animation-delay:.42s;animation-delay:.42s}.ax-scheduler__month-view__day:nth-child(15){-webkit-animation-delay:.45s;animation-delay:.45s}.ax-scheduler__month-view__day:nth-child(16){-webkit-animation-delay:.48s;animation-delay:.48s}.ax-scheduler__month-view__day:nth-child(17){-webkit-animation-delay:.51s;animation-delay:.51s}.ax-scheduler__month-view__day:nth-child(18){-webkit-animation-delay:.54s;animation-delay:.54s}.ax-scheduler__month-view__day:nth-child(19){-webkit-animation-delay:.57s;animation-delay:.57s}.ax-scheduler__month-view__day:nth-child(20){-webkit-animation-delay:.6s;animation-delay:.6s}.ax-scheduler__month-view__day:nth-child(21){-webkit-animation-delay:.63s;animation-delay:.63s}.ax-scheduler__month-view__day:nth-child(22){-webkit-animation-delay:.66s;animation-delay:.66s}.ax-scheduler__month-view__day:nth-child(23){-webkit-animation-delay:.69s;animation-delay:.69s}.ax-scheduler__month-view__day:nth-child(24){-webkit-animation-delay:.72s;animation-delay:.72s}.ax-scheduler__month-view__day:nth-child(25){-webkit-animation-delay:.75s;animation-delay:.75s}.ax-scheduler__month-view__day:nth-child(26){-webkit-animation-delay:.78s;animation-delay:.78s}.ax-scheduler__month-view__day:nth-child(27){-webkit-animation-delay:.81s;animation-delay:.81s}.ax-scheduler__month-view__day:nth-child(28){-webkit-animation-delay:.84s;animation-delay:.84s}.ax-scheduler__month-view__day:nth-child(29){-webkit-animation-delay:.87s;animation-delay:.87s}.ax-scheduler__month-view__day:nth-child(30){-webkit-animation-delay:.9s;animation-delay:.9s}.ax-scheduler__month-view__day:nth-child(31){-webkit-animation-delay:.93s;animation-delay:.93s}.ax-scheduler__month-view__day:nth-child(32){-webkit-animation-delay:.96s;animation-delay:.96s}.ax-scheduler__month-view__day:nth-child(33){-webkit-animation-delay:.99s;animation-delay:.99s}.ax-scheduler__month-view__day:nth-child(34){-webkit-animation-delay:1.02s;animation-delay:1.02s}.ax-scheduler__month-view__day:nth-child(35){-webkit-animation-delay:1.05s;animation-delay:1.05s}.ax-scheduler__month-view__day:nth-child(36){-webkit-animation-delay:1.08s;animation-delay:1.08s}.ax-scheduler__month-view__day:nth-child(37){-webkit-animation-delay:1.11s;animation-delay:1.11s}.ax-scheduler__month-view__day:nth-child(38){-webkit-animation-delay:1.14s;animation-delay:1.14s}.ax-scheduler__month-view__day:nth-child(39){-webkit-animation-delay:1.17s;animation-delay:1.17s}.ax-scheduler__month-view__day:nth-child(40){-webkit-animation-delay:1.2s;animation-delay:1.2s}.ax-scheduler__month-view__day:nth-child(41){-webkit-animation-delay:1.23s;animation-delay:1.23s}.ax-scheduler__month-view__day:nth-child(42){-webkit-animation-delay:1.26s;animation-delay:1.26s}.ax-scheduler__year-view>div:first-child{-webkit-animation-delay:.03s;animation-delay:.03s}.ax-scheduler__year-view>div:nth-child(2){-webkit-animation-delay:.06s;animation-delay:.06s}.ax-scheduler__year-view>div:nth-child(3){-webkit-animation-delay:.09s;animation-delay:.09s}.ax-scheduler__year-view>div:nth-child(4){-webkit-animation-delay:.12s;animation-delay:.12s}.ax-scheduler__year-view>div:nth-child(5){-webkit-animation-delay:.15s;animation-delay:.15s}.ax-scheduler__year-view>div:nth-child(6){-webkit-animation-delay:.18s;animation-delay:.18s}.ax-scheduler__year-view>div:nth-child(7){-webkit-animation-delay:.21s;animation-delay:.21s}.ax-scheduler__year-view>div:nth-child(8){-webkit-animation-delay:.24s;animation-delay:.24s}.ax-scheduler__year-view>div:nth-child(9){-webkit-animation-delay:.27s;animation-delay:.27s}.ax-scheduler__year-view>div:nth-child(10){-webkit-animation-delay:.3s;animation-delay:.3s}.ax-scheduler__year-view>div:nth-child(11){-webkit-animation-delay:.33s;animation-delay:.33s}.ax-scheduler__year-view>div:nth-child(12){-webkit-animation-delay:.36s;animation-delay:.36s}.ax-scheduler__day-view__body:first-child,.ax-scheduler__week-view__header>div>div:first-child{-webkit-animation-delay:.03s;animation-delay:.03s}.ax-scheduler__day-view__body:nth-child(2),.ax-scheduler__week-view__header>div>div:nth-child(2){-webkit-animation-delay:.06s;animation-delay:.06s}.ax-scheduler__day-view__body:nth-child(3),.ax-scheduler__week-view__header>div>div:nth-child(3){-webkit-animation-delay:.09s;animation-delay:.09s}.ax-scheduler__day-view__body:nth-child(4),.ax-scheduler__week-view__header>div>div:nth-child(4){-webkit-animation-delay:.12s;animation-delay:.12s}.ax-scheduler__day-view__body:nth-child(5),.ax-scheduler__week-view__header>div>div:nth-child(5){-webkit-animation-delay:.15s;animation-delay:.15s}.ax-scheduler__day-view__body:nth-child(6),.ax-scheduler__week-view__header>div>div:nth-child(6){-webkit-animation-delay:.18s;animation-delay:.18s}.ax-scheduler__day-view__body:nth-child(7),.ax-scheduler__week-view__header>div>div:nth-child(7){-webkit-animation-delay:.21s;animation-delay:.21s}.ax-scheduler.default .ax-scheduler__month-view__day:first-child,.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(2),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(3),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(4),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(5),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(6),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(7),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(8),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(9),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(10),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(11),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(12),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(13),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(14),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(15),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(16),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(17),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(18),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(19),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(20),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(21),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(22),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(23),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(24),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(25),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(26),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(27),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(28),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(29),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(30),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(31),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(32),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(33),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(34),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(35),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(36),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(37),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(38),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(39),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(40),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(41),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(42),.ax-scheduler.default .ax-scheduler__year-view>div:first-child,.ax-scheduler.default .ax-scheduler__year-view>div:nth-child(2),.ax-scheduler.default .ax-scheduler__year-view>div:nth-child(3),.ax-scheduler.default .ax-scheduler__year-view>div:nth-child(4),.ax-scheduler.default .ax-scheduler__year-view>div:nth-child(5),.ax-scheduler.default .ax-scheduler__year-view>div:nth-child(6),.ax-scheduler.default .ax-scheduler__year-view>div:nth-child(7),.ax-scheduler.default .ax-scheduler__year-view>div:nth-child(8),.ax-scheduler.default .ax-scheduler__year-view>div:nth-child(9),.ax-scheduler.default .ax-scheduler__year-view>div:nth-child(10),.ax-scheduler.default .ax-scheduler__year-view>div:nth-child(11),.ax-scheduler.default .ax-scheduler__year-view>div:nth-child(12){-webkit-animation-delay:0;animation-delay:0}@media (min-width:321px) and (max-width:768px){.header_number{display:inline-block;font-size:1.8em!important;margin-top:10px!important}}@media (max-width:560px){.header_number{text-indent:10px!important}.header_day_title{display:none!important}.ax-scheduler__event__content{font-size:11px!important}}@media (max-width:768px){.ax-scheduler__event__content{font-size:10px!important}.ax-scheduler__header{padding-left:0!important}}@media (min-width:1001px){.view-dropdown{display:none!important}}@media (max-width:999px){.view-dropdown{display:inline-block}.ax-scheduler__header__nav-view-part,.locale-dropdown{display:none!important}}.ax-scheduler.dark{background-color:#37474f!important}.ax-scheduler.dark .ax-scheduler__month-view__day_list circle{fill:#fff!important}.ax-scheduler.dark .ax-scheduler__header button{background:#263238!important;border:none!important;color:#fff!important}.ax-scheduler.dark .ax-scheduler__header button:active{background:#263238!important}.ax-scheduler.dark .ax-scheduler__header__nav-view-part button.active{border-bottom:2px solid #2196f3!important}.ax-scheduler.dark .ax-scheduler__header__nav-view-part button{background-color:transparent!important}.ax-scheduler.dark .ax-scheduler__header__date-part__nav button svg>g{fill:#fff}.ax-scheduler.dark .ax-scheduler__header__date-part__nav .ax-scheduler__header__date-part__title{border:none;color:#fff}.ax-scheduler.dark .ax-scheduler__header__date-part__nav .ax-scheduler__header__date-part__title:active{background:transparent}.ax-scheduler.dark .ax-scheduler-dropdown{color:#fff}.ax-scheduler.dark .ax-scheduler-dropdown .ax-scheduler-dropdown__model{border-color:#263238}.ax-scheduler.dark .ax-scheduler-dropdown .ax-scheduler-dropdown__list{background-color:#263238;border-color:#263238}.ax-scheduler.dark .ax-scheduler-dropdown .ax-scheduler-dropdown__list>div:hover{background-color:#37474f}.ax-scheduler.dark .header_day_title p,.ax-scheduler.dark .header_number{color:#fff!important;font-weight:400}.ax-scheduler.dark .ax-scheduler__day-view__body>div:not(.ax-scheduler__event-tile),.ax-scheduler.dark .ax-scheduler__day-view__hour-column{border-color:#37474f!important}.ax-scheduler.dark .ax-scheduler__day-view__body>div:not(.ax-scheduler__event-tile)>div.ax-scheduler__day-view__hour-column:after,.ax-scheduler.dark .ax-scheduler__week-view .ax-scheduler__week-view__body>div.ax-scheduler__week-view__body__hour-column>div:not(.ax-scheduler__event-tile)>div:first-child:not(.ax-scheduler__event-tile__box):after{background:#37474f!important}.ax-scheduler.dark .ax-scheduler__day-view__body>div:not(.ax-scheduler__event-tile)>div.ax-scheduler__day-view__hour-column>span,.ax-scheduler.dark .ax-scheduler__week-view .ax-scheduler__week-view__body>div.ax-scheduler__week-view__body__hour-column>div:not(.ax-scheduler__event-tile)>div:first-child:not(.ax-scheduler__event-tile__box)>span{color:#fff!important}.ax-scheduler.dark .ax-scheduler__day-view__event-columm{background:#263238!important}.ax-scheduler.dark .ax-scheduler__day-view__body>div:not(.ax-scheduler__event-tile),.ax-scheduler.dark .ax-scheduler__day-view__body>div:not(.ax-scheduler__event-tile)>div.ax-scheduler__day-view__hour-column,.ax-scheduler.dark .ax-scheduler__week-view .ax-scheduler__week-view__body>.ax-scheduler__week-view__body__day-column>div>div,.ax-scheduler.dark .ax-scheduler__week-view .ax-scheduler__week-view__body>div.ax-scheduler__week-view__body__hour-column>div:not(.ax-scheduler__event-tile)>div:first-child:not(.ax-scheduler__event-tile__box){border-color:#37474f!important}.ax-scheduler.dark .ax-scheduler__day-view__body>div:not(.ax-scheduler__event-tile)>div.ax-scheduler__day-view__hour-column{border-right:1px solid #37474f}.ax-scheduler.dark .ax-scheduler__week-view .ax-scheduler__week-view__body>div.ax-scheduler__week-view__body__hour-column>div:not(.ax-scheduler__event-tile)>div:first-child:not(.ax-scheduler__event-tile__box):after{right:-1px}.ax-scheduler.dark .ax-scheduler__month-view,.ax-scheduler.dark .ax-scheduler__month-view__day{border-color:#37474f!important}.ax-scheduler.dark .ax-scheduler__month-view__day .more-item,.ax-scheduler.dark .ax-scheduler__month-view__day__label,.ax-scheduler.dark .ax-scheduler__month-view__day__number{color:#fff!important}.ax-scheduler.dark .ax-scheduler__month-view__day .more-item:hover{background-color:#37474f!important}.ax-scheduler.dark .ax-scheduler__month-view__day__events_container .ax-scheduler__event.expired .ax-scheduler__event__content{color:#aaa}.ax-scheduler.dark .ax-scheduler__month-view__day__events_container .ax-scheduler__event.expired:hover{background-color:#37474f!important}.ax-scheduler.dark .ax-scheduler__month-view__day__events__dialog{background-color:#455a64;border-color:#263238}.ax-scheduler.dark .ax-scheduler__close-button{color:#fff!important}.ax-scheduler.dark .ax-scheduler__close-button:hover{background-color:#263238}.ax-scheduler.dark .ax-scheduler__year-view__month{color:#fff}.ax-scheduler.dark .ax-scheduler__year-view__month .ax-scheduler__year-view__month__body>div>span{color:#bbb}.ax-scheduler.dark .ax-scheduler__year-view__month .ax-scheduler__year-view__month__body>div.current:not(.today)>span{color:#fff}.ax-scheduler.dark .ax-scheduler__day-view__body>div:not(.ax-scheduler__event-tile)>div.ax-scheduler__day-view__event-column,.ax-scheduler.dark .ax-scheduler__month-view__day{background-color:#263238!important}.ax-scheduler.dark .ax-scheduler__day-view__header>div:last-child>div>span.header_number.today{color:#e53935!important}.ax-scheduler.dark .ax-scheduler__year-view__month .ax-scheduler__year-view__month__body>div>span:hover{background-color:#263238!important}.ax-scheduler.dark .ax-scheduler__sidebar{background:#37474f;border-left-color:#263238}.ax-scheduler.dark .ax-scheduler__sidebar h6{border-bottom-color:#263238;color:#fff}.ax-scheduler{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;display:block;height:90vh;margin:0;overflow:hidden;padding:0;position:relative;user-select:none}.ax-scheduler__header .ax-scheduler__header__date-part .ax-scheduler__header__date-part__nav>button,.ax-scheduler__header .ax-scheduler__header__date-part .ax-scheduler__header__date-part__nav>div,.ax-scheduler__header .ax-scheduler__header__date-part>button{background:transparent;border:1px solid #ddd;border-radius:5px;color:#333;cursor:pointer;height:30px;line-height:26px;text-align:center;text-transform:uppercase;transition:all .1s ease-in-out}.ax-scheduler__header .ax-scheduler__header__date-part .ax-scheduler__header__date-part__nav>button:active,.ax-scheduler__header .ax-scheduler__header__date-part .ax-scheduler__header__date-part__nav>button:focus,.ax-scheduler__header .ax-scheduler__header__date-part .ax-scheduler__header__date-part__nav>div:active,.ax-scheduler__header .ax-scheduler__header__date-part .ax-scheduler__header__date-part__nav>div:focus,.ax-scheduler__header .ax-scheduler__header__date-part>button:active,.ax-scheduler__header .ax-scheduler__header__date-part>button:focus{box-shadow:none;outline:none}.ax-scheduler__header .ax-scheduler__header__date-part .ax-scheduler__header__date-part__nav>button:hover,.ax-scheduler__header .ax-scheduler__header__date-part .ax-scheduler__header__date-part__nav>div:hover,.ax-scheduler__header .ax-scheduler__header__date-part>button:hover{border-color:#aaa}.ax-scheduler__header .ax-scheduler__header__date-part .ax-scheduler__header__date-part__nav>button:active,.ax-scheduler__header .ax-scheduler__header__date-part .ax-scheduler__header__date-part__nav>div:active,.ax-scheduler__header .ax-scheduler__header__date-part>button:active{background:#eee}::-webkit-scrollbar{height:5px;width:5px}::-webkit-scrollbar-track{background:#f1f1f1}::-webkit-scrollbar-thumb{background:#888}::-webkit-scrollbar-thumb:hover{background:#555}.ax-scheduler__body,.ax-scheduler__header{display:block;margin:0;padding:0;position:relative}.ax-scheduler__header{border-bottom:none;display:flex;flex-direction:row;font-size:12px;height:60px;padding-left:30px;text-transform:uppercase}.ax-scheduler__header>div{flex:3}.ax-scheduler__header .ax-scheduler__header__date-part{align-items:center;display:flex;padding:0 5px 0 20px;text-align:left}.ax-scheduler__header .ax-scheduler__header__date-part .ax-scheduler__header__date-part__nav{display:flex;margin-left:15px}.ax-scheduler__header .ax-scheduler__header__date-part .ax-scheduler__header__date-part__nav>button,.ax-scheduler__header .ax-scheduler__header__date-part .ax-scheduler__header__date-part__nav>div{border-left:1px solid #ddd;flex:2}.ax-scheduler__header .ax-scheduler__header__date-part .ax-scheduler__header__date-part__nav>button svg,.ax-scheduler__header .ax-scheduler__header__date-part .ax-scheduler__header__date-part__nav>div svg{display:block;height:20px;vertical-align:middle}.ax-scheduler__header .ax-scheduler__header__date-part .ax-scheduler__header__date-part__nav>button:last-child,.ax-scheduler__header .ax-scheduler__header__date-part .ax-scheduler__header__date-part__nav>div:last-child{border-left:none;border-radius:0 5px 5px 0}.ax-scheduler__header .ax-scheduler__header__date-part .ax-scheduler__header__date-part__nav>button:first-child,.ax-scheduler__header .ax-scheduler__header__date-part .ax-scheduler__header__date-part__nav>div:first-child{border-radius:5px 0 0 5px;border-right:none}.ax-scheduler__header .ax-scheduler__header__date-part .ax-scheduler__header__date-part__nav>div{border:1px solid #ddd;border-radius:0}.ax-scheduler__header .ax-scheduler__header__date-part__title{color:#444;cursor:default!important;min-width:130px;padding:0 8px;text-align:center;white-space:nowrap}.ax-scheduler__header .ax-scheduler__header__view-part{padding:0 5px;text-align:left}.ax-scheduler__header .ax-scheduler__header__view-part .ax-scheduler-dropdown{float:right;margin-left:10px;margin-top:16px;min-width:80px}.ax-scheduler__body{height:calc(100% - 60px)}.ax-scheduler__header__nav-view-part{display:flex;flex-direction:row;margin:0 30px}.ax-scheduler__header__nav-view-part button{background:#fff;border:none;color:#444;cursor:pointer;font-size:13px;margin:0 8px;padding:5px 8px;position:relative;text-align:center;text-transform:uppercase;transition:all .1s ease-in-out}.ax-scheduler__header__nav-view-part button:after{background:#eee;content:\"\";height:2px;position:absolute;top:100%;transition:all .2s ease-in-out;width:0}.ax-scheduler__header__nav-view-part button:hover{color:#2196f3}.ax-scheduler__header__nav-view-part button:hover:after{left:0;right:0;width:auto}.ax-scheduler__header__nav-view-part button:active,.ax-scheduler__header__nav-view-part button:focus{box-shadow:none;outline:none}.ax-scheduler__header__nav-view-part button:active{background-color:#eee}.ax-scheduler__header__nav-view-part button.active{font-weight:700}.ax-scheduler__header__nav-view-part button.active:after{background:#2196f3;left:0;right:0;width:auto}.ax-scheduler__day-view{display:block;height:100%;margin:0;padding:0;position:relative}.ax-scheduler__day-view__body,.ax-scheduler__day-view__header{display:block;margin:0;padding:0;position:relative;width:100%}.ax-scheduler__day-view__body>div:not(.ax-scheduler__event-tile){border-bottom:1px solid #fff;display:block;height:60px;margin:0;padding:0;position:relative}.ax-scheduler__day-view__body>div:not(.ax-scheduler__event-tile)>div{display:inline-block;height:100%;margin:0;padding:0;position:relative;vertical-align:top}.ax-scheduler__day-view__body>div:not(.ax-scheduler__event-tile)>div.ax-scheduler__day-view__hour-column{max-width:50px;min-width:50px;text-align:right;width:50px}.ax-scheduler__day-view__body>div:not(.ax-scheduler__event-tile)>div.ax-scheduler__day-view__hour-column>span{color:#444;font-size:12px;padding-left:5px;padding-right:5px;position:absolute;right:0;top:-9px;vertical-align:top;z-index:2}.ax-scheduler__day-view__body>div:not(.ax-scheduler__event-tile)>div.ax-scheduler__day-view__hour-column:after{background:#fff;content:\"\";height:1px;left:0;position:absolute;right:0;top:-1px}.ax-scheduler__day-view__body>div:not(.ax-scheduler__event-tile)>div.ax-scheduler__day-view__event-column{background-color:#f5f5f5;padding-left:5px;width:calc(100% - 52px)}.ax-scheduler__day-view__body>div:not(.ax-scheduler__event-tile):hover>div.ax-scheduler__day-view__event-column{z-index:2}.ax-scheduler__day-view__body>div:last-child:not(.ax-scheduler__event-tile__box){border:none}.ax-scheduler__day-view__header{background:transparent;height:60px}.ax-scheduler__day-view__header>div{display:inline-block;height:100%;margin:0;padding:0;position:relative;vertical-align:top}.ax-scheduler__day-view__header>div:first-child{max-width:50px;min-width:50px;width:50px}.ax-scheduler__day-view__header>div:last-child>div{border:none;display:inline-block;height:100%}.ax-scheduler__day-view__header>div:last-child>div>span.header_number{color:#444;font-size:2.2em;font-weight:400;margin:0}.ax-scheduler__day-view__header>div:last-child>div>span.header_number.today{color:#e53935}.ax-scheduler__day-view__header>div:last-child>div>span.header_number>span.header_day_title{display:inline-block;font-size:.3em;margin-left:-5px}.ax-scheduler__day-view__header>div:last-child>div>span.header_number>span.header_day_title>p{color:#666;margin:0;padding:0}.ax-scheduler__day-view__header>div:last-child>div>span.header_month_year{color:#888;display:block;font-size:11px;margin:0}.ax-scheduler__day-view__body{height:calc(100% - 60px);overflow-x:hidden;overflow-y:auto}.ax-scheduler__event-tile{background:transparent;border:none;height:25px;left:0;overflow:visible;padding:0 0 0 50px;position:absolute!important;right:0;text-align:right;z-index:3}.ax-scheduler__event-tile>.ax-scheduler__event-tile__box{-webkit-animation:swing-in-top-fwd .5s cubic-bezier(.175,.885,.32,1.275) both;animation:swing-in-top-fwd .5s cubic-bezier(.175,.885,.32,1.275) both;background:#2196f3;box-shadow:0 4px 8px 0 rgba(0,0,0,.2);display:none;height:100%;position:relative;transition:box-shadow .3s ease-in-out}.ax-scheduler__event-tile>.ax-scheduler__event-tile__box:hover{box-shadow:0 8px 16px 0 rgba(0,0,0,.2)}.ax-scheduler__day-view__body.hour-none div.ax-scheduler__day-view__event-column{padding-left:5px!important;width:100%!important}.ax-scheduler__day-view__body.hour-none div.ax-scheduler__day-view__hour-column{display:none}.ax-scheduler__day-view__body.hour-none .ax-scheduler__event-tile{padding-left:0}.ax-scheduler__month-view{border:1px solid #fff;border-bottom:none;border-left:none;display:flex;flex-wrap:wrap;height:100%;overflow-x:hidden;overflow-y:auto;width:100%}.ax-scheduler__month-view .in-month{font-weight:700}.ax-scheduler__month-view__day{background-color:#f5f5f5;border-bottom:1px solid #fff;border-left:1px solid #fff;flex:14.28571%;min-height:100px;min-width:100px;position:relative;text-align:center}.ax-scheduler__month-view__day .more-item{cursor:pointer;font-size:12px;font-weight:700;margin:2px 5px;padding:2px 5px!important;text-align:left;text-indent:5px}.ax-scheduler__month-view__day .more-item:hover{background-color:#eee}.ax-scheduler__month-view__day .ax-scheduler__event{background-color:#2196f3}.ax-scheduler__month-view__day .ax-scheduler__event .ax-lock-event .st0{fill:#fff}.ax-scheduler__month-view__day .ax-scheduler__month-view__day__events{bottom:0;display:block;height:70%;margin:0;overflow:hidden;padding:0;position:absolute;width:100%}.ax-scheduler__month-view__day__number{background-color:transparent;border-radius:50%;font-size:12px;height:24px;line-height:24px;position:absolute;right:3px;text-align:center;top:3px;width:24px}.ax-scheduler__month-view__day__number.today{background-color:#e53935;color:#fff}.ax-scheduler__month-view__day__label{color:#444!important;display:block;font-size:12px;font-weight:700;line-height:28px;margin:0;position:relative;text-align:center;width:100%}.ax-scheduler__month-view__day__events_container{display:flex;flex-direction:column;padding:0 5px}.ax-scheduler__month-view__day__events_container .ax-scheduler__event.expired{background:transparent}.ax-scheduler__month-view__day__events_container .ax-scheduler__event.expired .ax-scheduler__event__content{color:#555}.ax-scheduler__month-view__day__events_container .ax-scheduler__event{align-items:stretch;background-color:#2196f3;border-radius:5px;flex:1;margin:1px 0;position:relative}.ax-scheduler__month-view__day__events_container .ax-scheduler__event.expired:hover{background:#eee;cursor:pointer}.ax-scheduler__month-view__day__events_container .ax-scheduler__event:hover{background:#1976d2;cursor:pointer}.ax-scheduler__month-view__day__events_container .ax-scheduler__event__content{font-size:12px!important;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:100%}.ax-scheduler__month-view__day__events__dialog{background-color:#fff;border:1px solid #aaa;border-radius:5px;box-shadow:0 8px 16px 0 rgba(0,0,0,.2);height:auto;max-height:400px;overflow-x:hidden;overflow-y:auto;padding:5px 10px;position:absolute;z-index:10000}.ax-scheduler__month-view__day__events__dialog .ax-scheduler__month-view__day__number{display:inline-block;font-weight:700;position:relative;top:0}.ax-scheduler__month-view__day__events__dialog .ax-scheduler__month-view__day__events_container{padding:10px}.ax-scheduler__close-button{border-radius:50%;color:#444;cursor:pointer;display:block;font-size:18px;height:18px;line-height:14px;position:absolute;right:5px;text-align:center;top:5px;width:18px;z-index:1}.ax-scheduler__close-button:hover{background-color:#eee}.ax-scheduler__year-view{border:1px solid #ddd;display:flex;flex-wrap:wrap;height:100%;overflow-x:hidden;overflow-y:auto;position:relative;width:100%}.ax-scheduler__year-view>div:not(.ax-scheduler__sidebar){flex:25%;min-height:100px;position:relative;text-align:center}.ax-scheduler__year-view__month{display:block;height:100%;margin:0;min-width:300px;padding:0;width:100%}.ax-scheduler__year-view__month .ax-scheduler__year-view__month__header{display:block;font-size:14px;font-weight:700;height:30px;line-height:30px;margin:0;padding:0 16px;position:relative;text-align:center}.ax-scheduler__year-view__month .ax-scheduler__year-view__month__body{display:flex;flex-wrap:wrap;height:calc(100% - 30px);padding:0 70px;width:100%}.ax-scheduler__year-view__month .ax-scheduler__year-view__month__body>div{flex:14.28571%;margin-top:4px;position:relative}.ax-scheduler__year-view__month .ax-scheduler__year-view__month__body>div>span{border-radius:50%;cursor:pointer;display:block;font-size:11px;height:24px;line-height:22px;position:relative;text-align:center;transition:all .1s ease-in-out;width:24px}.ax-scheduler__year-view__month .ax-scheduler__year-view__month__body>div>span:hover{background-color:#eee}.ax-scheduler__year-view__month .ax-scheduler__year-view__month__body>div>span:active{background-color:#ddd}.ax-scheduler__year-view__month .ax-scheduler__year-view__month__body>div.today>span{background-color:#e53935;border:none;color:#fff;font-weight:700}.ax-scheduler__year-view__month .ax-scheduler__year-view__month__body>div.current:not(.today)>span{color:#444;font-weight:700}.ax-scheduler__year-view__month__day{overflow:visible;position:relative}.ax-scheduler__year-view__month__day.hasEvent{border:1px solid #2196f3}.ax-scheduler__year-view__month__day:hover .ax-scheduler__year-view__month__day_tooltip{display:inline-block}.ax-scheduler__year-view__month__day .ax-scheduler__month-view__day__events__dialog{min-width:250px;z-index:1000}.ax-scheduler__year-view__month__day .ax-scheduler__event:after{top:11px}.ax-scheduler__month-view__day_list{cursor:pointer;left:0;position:absolute;top:4px;width:19px}.ax-scheduler__month-view__day_list circle{fill:#aaa}.ax-scheduler__sidebar{-webkit-animation:slide-in-right .2s cubic-bezier(.25,.46,.45,.94) both;animation:slide-in-right .2s cubic-bezier(.25,.46,.45,.94) both;background:#fff;border-left:1px solid #ccc;bottom:1px;box-shadow:-2px 0 5px -2px rgba(0,0,0,.49);display:block;left:auto;max-width:250px;padding:10px 8px;position:absolute;right:2px;top:1px;width:250px;z-index:1000}.ax-scheduler__sidebar>h6{border-bottom:1px solid #ddd;margin-bottom:16px;padding:10px 0}.ax-scheduler__event .ax-lock-event{height:17px;position:absolute;right:1px;top:3px;width:17px}.ax-scheduler__event .ax-lock-event .st0{fill:#fff}.ax-scheduler__event:hover .ax-scheduler__event__toolbar>div{-webkit-animation:slide-in-right .2s cubic-bezier(.25,.46,.45,.94) both;animation:slide-in-right .2s cubic-bezier(.25,.46,.45,.94) both;display:flex}.ax-scheduler__event .ax-scheduler__event__toolbar{background:transparent;display:block;height:30px;left:0;overflow:hidden;position:absolute;right:0;top:1px}.ax-scheduler__event .ax-scheduler__event__toolbar>div{background:#fff;border-radius:10px 0 0 10px;box-shadow:0 4px 8px 0 rgba(0,0,0,.2);display:none;flex-direction:row;padding:0 8px 3px;position:absolute;right:0;top:1px}.ax-scheduler__event .ax-scheduler__event__toolbar>div>div{cursor:pointer;display:block;height:100%;margin:0 3px;position:relative}.ax-scheduler__event .ax-scheduler__event__toolbar>div>div:hover svg,.ax-scheduler__event .ax-scheduler__event__toolbar>div>div:hover svg g{fill:#2196f3}.ax-scheduler__event .ax-scheduler__event__toolbar>div>div svg,.ax-scheduler__event .ax-scheduler__event__toolbar>div>div svg g{fill:#555;height:16px;width:16px}.ax-scheduler__event .ax-scheduler__event__toolbar>div .ax-scheduler__event__toolbar-edit svg{height:14px;width:14px}"], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(AxiomSchedulerComponent, [{
                type: i0.Component,
                args: [{
                        selector: "ax-scheduler",
                        templateUrl: "./axiom-scheduler.component.html",
                        styleUrls: ["./axiom-scheduler.component.scss"],
                        encapsulation: i0.ViewEncapsulation.None,
                        providers: [AxiomSchedulerService, AxiomSchedulerSidebarService],
                        host: {
                            class: "ax-scheduler",
                        },
                    }]
            }], function () { return [{ type: i0.Injector }, { type: i0.ElementRef }, { type: i0.Renderer2 }]; }, { axEvents: [{
                    type: i0.Input
                }], axSchedulerView: [{
                    type: i0.Input
                }], axTheme: [{
                    type: i0.Input
                }], axAnimation: [{
                    type: i0.Input
                }], axShowLocale: [{
                    type: i0.Input
                }], axViews: [{
                    type: i0.Input
                }], axEventChange: [{
                    type: i0.Output
                }], axEventClick: [{
                    type: i0.Output
                }], axEventDeleteClick: [{
                    type: i0.Output
                }], axEventEditClick: [{
                    type: i0.Output
                }], axDateChange: [{
                    type: i0.Output
                }], axViewChange: [{
                    type: i0.Output
                }] });
    })();

    var _c0$1 = ["ax-scheduler-day-view", ""];
    var _c1 = function (a0) { return { "today": a0 }; };
    var moment$2 = momentNs;
    var AxiomSchedulerHour = /** @class */ (function () {
        function AxiomSchedulerHour(start) {
            this.start = start;
            this.end = this.start.clone().add('hours', 1);
        }
        return AxiomSchedulerHour;
    }());
    var AxiomSchedulerDayViewComponent = /** @class */ (function (_super) {
        __extends(AxiomSchedulerDayViewComponent, _super);
        function AxiomSchedulerDayViewComponent(injector) {
            return _super.call(this, injector) || this;
        }
        AxiomSchedulerDayViewComponent.prototype.ngOnInit = function () {
            this.refresh();
        };
        return AxiomSchedulerDayViewComponent;
    }(AxiomSchedulerComponentCommon));
    AxiomSchedulerDayViewComponent.ɵfac = function AxiomSchedulerDayViewComponent_Factory(t) { return new (t || AxiomSchedulerDayViewComponent)(i0.ɵɵdirectiveInject(i0.Injector)); };
    AxiomSchedulerDayViewComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AxiomSchedulerDayViewComponent, selectors: [["", "ax-scheduler-day-view", ""]], hostAttrs: [1, "ax-scheduler__day-view"], features: [i0.ɵɵInheritDefinitionFeature], attrs: _c0$1, decls: 12, vars: 10, consts: [[1, "ax-scheduler__day-view__header"], [1, "header_number", 3, "ngClass"], [1, "header_day_title"], ["ax-scheduler-day-column", "", 3, "axEventTemplate", "axEventFormatter", "axDragStep", "axEventToolbar", "axStartDate"]], template: function AxiomSchedulerDayViewComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵelement(1, "div");
                i0.ɵɵelementStart(2, "div");
                i0.ɵɵelementStart(3, "div");
                i0.ɵɵelementStart(4, "span", 1);
                i0.ɵɵtext(5);
                i0.ɵɵelementStart(6, "span", 2);
                i0.ɵɵelementStart(7, "p");
                i0.ɵɵtext(8, "th");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(9, "p");
                i0.ɵɵtext(10);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelement(11, "div", 3);
            }
            if (rf & 2) {
                i0.ɵɵadvance(4);
                i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(8, _c1, ctx.date.isSame(ctx.today, "days")));
                i0.ɵɵadvance(1);
                i0.ɵɵtextInterpolate1(" ", ctx.date.format("D"), " ");
                i0.ɵɵadvance(5);
                i0.ɵɵtextInterpolate(ctx.date.format("dddd"));
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("axEventTemplate", ctx.axEventTemplate)("axEventFormatter", ctx.axEventFormatter)("axDragStep", ctx.axDragStep)("axEventToolbar", ctx.axEventToolbar)("axStartDate", ctx.axStartDate);
            }
        }, styles: [""], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(AxiomSchedulerDayViewComponent, [{
                type: i0.Component,
                args: [{
                        selector: '[ax-scheduler-day-view]',
                        templateUrl: './axiom-scheduler-day-view.component.html',
                        styleUrls: ['./axiom-scheduler-day-view.component.scss'],
                        encapsulation: i0.ViewEncapsulation.None,
                        host: {
                            'class': 'ax-scheduler__day-view'
                        }
                    }]
            }], function () { return [{ type: i0.Injector }]; }, null);
    })();

    var _c0$2 = ["ax-scheduler-event", ""];
    function AxiomSchedulerEventComponent_ng_container_0_p_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "p");
            i0.ɵɵelementStart(1, "span");
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "span");
            i0.ɵɵtext(4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r5 = i0.ɵɵnextContext(2);
            i0.ɵɵproperty("@timeAnimate", undefined);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx_r5.fromTime && ctx_r5.fromTime.format("HH:mm"));
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx_r5.toTime && ctx_r5.toTime.format("HH:mm"));
        }
    }
    function AxiomSchedulerEventComponent_ng_container_0_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0);
        }
    }
    function AxiomSchedulerEventComponent_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵtemplate(1, AxiomSchedulerEventComponent_ng_container_0_p_1_Template, 5, 3, "p", 0);
            i0.ɵɵelementStart(2, "div", 3);
            i0.ɵɵtemplate(3, AxiomSchedulerEventComponent_ng_container_0_ng_container_3_Template, 1, 0, "ng-container", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r0.showTime);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngTemplateOutlet", ctx_r0.axEventTemplate)("ngTemplateOutletContext", ctx_r0.ctx);
        }
    }
    function AxiomSchedulerEventComponent_ng_container_1_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0);
        }
    }
    function AxiomSchedulerEventComponent_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵelementStart(1, "div", 3);
            i0.ɵɵtemplate(2, AxiomSchedulerEventComponent_ng_container_1_ng_container_2_Template, 1, 0, "ng-container", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r1 = i0.ɵɵnextContext();
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngTemplateOutlet", ctx_r1.axEventTemplate)("ngTemplateOutletContext", ctx_r1.ctx);
        }
    }
    function AxiomSchedulerEventComponent_ng_container_2_p_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "p");
            i0.ɵɵelementStart(1, "span");
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "span");
            i0.ɵɵtext(4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r8 = i0.ɵɵnextContext(2);
            i0.ɵɵproperty("@timeAnimate", undefined);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx_r8.fromTime && ctx_r8.fromTime.format("HH:mm"));
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx_r8.toTime && ctx_r8.toTime.format("HH:mm"));
        }
    }
    function AxiomSchedulerEventComponent_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵtemplate(1, AxiomSchedulerEventComponent_ng_container_2_p_1_Template, 5, 3, "p", 0);
            i0.ɵɵelementStart(2, "div", 3);
            i0.ɵɵtext(3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r2 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r2.showTime);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", ctx_r2.event.title, " ");
        }
    }
    function AxiomSchedulerEventComponent__svg_svg_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(0, "svg", 5);
            i0.ɵɵelementStart(1, "g");
            i0.ɵɵelementStart(2, "g", 6);
            i0.ɵɵelement(3, "path", 7);
            i0.ɵɵelement(4, "path", 8);
            i0.ɵɵelement(5, "path", 9);
            i0.ɵɵelement(6, "polyline", 10);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
    }
    function AxiomSchedulerEventComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
            var _r10_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 11);
            i0.ɵɵelementStart(1, "div");
            i0.ɵɵelementStart(2, "div", 12);
            i0.ɵɵlistener("click", function AxiomSchedulerEventComponent_div_4_Template_div_click_2_listener() { i0.ɵɵrestoreView(_r10_1); var ctx_r9 = i0.ɵɵnextContext(); return ctx_r9.deleteEevent(); })("mousedown", function AxiomSchedulerEventComponent_div_4_Template_div_mousedown_2_listener($event) { i0.ɵɵrestoreView(_r10_1); var ctx_r11 = i0.ɵɵnextContext(); return ctx_r11.mouseDown($event); });
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(3, "svg", 13);
            i0.ɵɵelementStart(4, "g");
            i0.ɵɵelement(5, "path", 14);
            i0.ɵɵelement(6, "path", 15);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(7, "div", 16);
            i0.ɵɵlistener("click", function AxiomSchedulerEventComponent_div_4_Template_div_click_7_listener() { i0.ɵɵrestoreView(_r10_1); var ctx_r12 = i0.ɵɵnextContext(); return ctx_r12.editEevent(); })("mousedown", function AxiomSchedulerEventComponent_div_4_Template_div_mousedown_7_listener($event) { i0.ɵɵrestoreView(_r10_1); var ctx_r13 = i0.ɵɵnextContext(); return ctx_r13.mouseDown($event); });
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(8, "svg", 17);
            i0.ɵɵelementStart(9, "g", 18);
            i0.ɵɵelementStart(10, "g", 19);
            i0.ɵɵelement(11, "path", 20);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
    }
    var moment$3 = momentNs;
    var AxiomSchedulerEventComponent = /** @class */ (function (_super) {
        __extends(AxiomSchedulerEventComponent, _super);
        function AxiomSchedulerEventComponent(injector, _renderer, _element) {
            var _this = _super.call(this, injector) || this;
            _this._renderer = _renderer;
            _this._element = _element;
            _this.monthMode = false;
            _this.showTime = false;
            _this.expired = false;
            return _this;
        }
        AxiomSchedulerEventComponent.prototype.ngOnInit = function () {
            this.ctx = { item: this.event };
            this.updateTime();
            this.applyColor();
        };
        AxiomSchedulerEventComponent.prototype.ngAfterViewInit = function () {
            if (!this.monthMode) {
                this.checkPosition();
            }
        };
        AxiomSchedulerEventComponent.prototype.refreshView = function () {
        };
        AxiomSchedulerEventComponent.prototype.fromTimeChanging = function (e) {
            this.fromTime = this.fromTime.clone().startOf('day').add(this.getOffsetMinute(), 'minutes');
            this.toTime = this.fromTime.clone().add(this.diff, 'minutes');
        };
        AxiomSchedulerEventComponent.prototype.fromTimeChanged = function (e) {
            this.event.from = this.fromTime.clone().toDate();
            this.event.to = this.toTime.clone().toDate();
            this.toggleShowTime(false);
            this.service.eventChanged(this.event);
        };
        AxiomSchedulerEventComponent.prototype.toTimeChanging = function (e) {
            this.diff = e.size.height;
            this.fromTime = this.fromTime.clone().startOf('day').add(this.getOffsetMinute(), 'minutes');
            this.toTime = this.fromTime.clone().add(this.diff, 'minutes');
        };
        AxiomSchedulerEventComponent.prototype.toTimeChanged = function (e) {
            this.event.from = this.fromTime.clone().toDate();
            this.event.to = this.toTime.clone().toDate();
            this.toggleShowTime(false);
            this.service.eventChanged(this.event);
        };
        AxiomSchedulerEventComponent.prototype.toTimeChangeStart = function (e) {
            this.toggleShowTime(true);
        };
        AxiomSchedulerEventComponent.prototype.fromTimeChangeStart = function (e) {
            this.toggleShowTime(true);
        };
        AxiomSchedulerEventComponent.prototype.deleteEevent = function () {
            this.service.eventDeleteClick.next(this.event);
        };
        AxiomSchedulerEventComponent.prototype.editEevent = function () {
            this.service.eventEditClick.next(this.event);
        };
        AxiomSchedulerEventComponent.prototype.mouseDown = function (ev) {
            ev && ev.preventDefault();
            ev && ev.stopPropagation();
        };
        AxiomSchedulerEventComponent.prototype.checkPosition = function () {
            var _this = this;
            setTimeout(function () {
                var from = moment$3(_this.event.from).diff(moment$3(_this.event.from).startOf('day'), 'minutes');
                var to = moment$3(_this.event.to).diff(moment$3(_this.event.to).startOf('day'), 'minutes');
                _this._renderer.setStyle(_this._element.nativeElement.parentElement, 'top', from + "px");
                _this._renderer.setStyle(_this._element.nativeElement.parentElement, 'height', Math.abs(from - to) + "px");
                _this._renderer.setStyle(_this._element.nativeElement, 'height', "100%");
                _this._renderer.setStyle(_this._element.nativeElement, 'display', "block");
            }, 200);
        };
        AxiomSchedulerEventComponent.prototype.getOffsetMinute = function () {
            var elementPos = this._element.nativeElement.getBoundingClientRect();
            var parentPos = this._element.nativeElement.parentElement.parentElement.getBoundingClientRect();
            return (Math.abs(elementPos.top - parentPos.top) + this._element.nativeElement.parentElement.parentElement.scrollTop);
        };
        AxiomSchedulerEventComponent.prototype.updateDiff = function () {
            this.diff = this.toTime.diff(this.fromTime, 'minutes');
        };
        AxiomSchedulerEventComponent.prototype.updateTime = function () {
            this.fromTime = moment$3(this.event.from).clone();
            this.toTime = moment$3(this.event.to).clone();
            this.updateDiff();
            this.expired = moment$3(this.event.to).isBefore(moment$3(), 'days');
        };
        AxiomSchedulerEventComponent.prototype.applyColor = function () {
            if (this.event.color) {
                this._renderer.setStyle(this._element.nativeElement, 'background', this.event.color);
            }
        };
        AxiomSchedulerEventComponent.prototype.toggleShowTime = function (toggle) {
            var _this = this;
            if (toggle) {
                this.timeout = setTimeout(function () {
                    _this.showTime = toggle;
                }, 200);
            }
            else {
                clearTimeout(this.timeout);
                this.showTime = toggle;
            }
        };
        return AxiomSchedulerEventComponent;
    }(AxiomSchedulerComponentCommon));
    AxiomSchedulerEventComponent.ɵfac = function AxiomSchedulerEventComponent_Factory(t) { return new (t || AxiomSchedulerEventComponent)(i0.ɵɵdirectiveInject(i0.Injector), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef)); };
    AxiomSchedulerEventComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AxiomSchedulerEventComponent, selectors: [["", "ax-scheduler-event", ""]], hostAttrs: [1, "ax-scheduler__event"], hostVars: 2, hostBindings: function AxiomSchedulerEventComponent_HostBindings(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵlistener("click", function AxiomSchedulerEventComponent_click_HostBindingHandler() { return ctx.service.eventClicked(ctx.event); });
            }
            if (rf & 2) {
                i0.ɵɵclassProp("expired", ctx.expired);
            }
        }, inputs: { event: "event", monthMode: "monthMode" }, features: [i0.ɵɵInheritDefinitionFeature], attrs: _c0$2, decls: 5, vars: 5, consts: [[4, "ngIf"], ["class", "ax-lock-event", "style", "enable-background:new 0 0 64 64;", "version", "1.1", "viewBox", "0 0 64 64", 0, "xml", "space", "preserve", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", 4, "ngIf"], ["class", "ax-scheduler__event__toolbar", 4, "ngIf"], [1, "ax-scheduler__event__content"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["version", "1.1", "viewBox", "0 0 64 64", 0, "xml", "space", "preserve", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", 1, "ax-lock-event", 2, "enable-background", "new 0 0 64 64"], ["id", "Icon-Lock", "transform", "translate(284.000000, 430.000000)"], ["d", "M-237.7-401.3h-3v-6.4c0-6.2-5.1-11.3-11.3-11.3c-6.2,0-11.3,5.1-11.3,11.3v6.4h-3v-6.4     c0-7.9,6.4-14.3,14.3-14.3s14.3,6.4,14.3,14.3V-401.3", "id", "Fill-66", 1, "st0"], ["d", "M-239.2-374.1h-25.6c-2.6,0-4.8-2.2-4.8-4.8v-19.2c0-2.6,2.2-4.8,4.8-4.8h25.6     c2.6,0,4.8,2.2,4.8,4.8v19.2C-234.4-376.2-236.6-374.1-239.2-374.1L-239.2-374.1z M-264.8-399.7c-0.9,0-1.6,0.7-1.6,1.6v19.2     c0,0.9,0.7,1.6,1.6,1.6h25.6c0.9,0,1.6-0.7,1.6-1.6v-19.2c0-0.9-0.7-1.6-1.6-1.6H-264.8L-264.8-399.7z", "id", "Fill-67", 1, "st0"], ["d", "M-248.8-393.3c0,1.8-1.4,3.2-3.2,3.2s-3.2-1.4-3.2-3.2s1.4-3.2,3.2-3.2S-248.8-395-248.8-393.3     ", "id", "Fill-68", 1, "st0"], ["id", "Fill-69", "points", "-251.2,-393.3 -252.8,-393.3 -254.4,-383.7 -249.6,-383.7 -251.2,-393.3    ", 1, "st0"], [1, "ax-scheduler__event__toolbar"], ["title", "Remove", 1, "ax-scheduler__event__toolbar-trash", 3, "click", "mousedown"], ["height", "512px", "id", "Layer_1", "version", "1.1", "viewBox", "0 0 512 512", "width", "512px", 0, "xml", "space", "preserve", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", 2, "enable-background", "new 0 0 512 512"], ["d", "M413.7,133.4c-2.4-9-4-14-4-14c-2.6-9.3-9.2-9.3-19-10.9l-53.1-6.7c-6.6-1.1-6.6-1.1-9.2-6.8c-8.7-19.6-11.4-31-20.9-31   h-103c-9.5,0-12.1,11.4-20.8,31.1c-2.6,5.6-2.6,5.6-9.2,6.8l-53.2,6.7c-9.7,1.6-16.7,2.5-19.3,11.8c0,0-1.2,4.1-3.7,13   c-3.2,11.9-4.5,10.6,6.5,10.6h302.4C418.2,144.1,417,145.3,413.7,133.4z"], ["d", "M379.4,176H132.6c-16.6,0-17.4,2.2-16.4,14.7l18.7,242.6c1.6,12.3,2.8,14.8,17.5,14.8h207.2c14.7,0,15.9-2.5,17.5-14.8   l18.7-242.6C396.8,178.1,396,176,379.4,176z"], ["title", "Edit", 1, "ax-scheduler__event__toolbar-edit", 3, "click", "mousedown"], ["height", "16px", "version", "1.1", "viewBox", "0 0 16 16", "width", "16px", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "sketch", "http://www.bohemiancoding.com/sketch/ns", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink"], ["fill", "none", "fill-rule", "evenodd", "id", "Icons with numbers", "stroke", "none", "stroke-width", "1"], ["fill", "#000000", "id", "Group", "transform", "translate(-384.000000, -192.000000)"], ["d", "M385,203.950806 L389,208 L385,208 Z M392,196 L396,200 L389.978638,207.044189 L386,203 Z M394.084619,193.781497 C394.709458,193.156658 395.90929,193.343426 396.764518,194.198654 L397.538782,194.972918 C398.394011,195.828147 398.580778,197.027979 397.95594,197.652817 L396.720394,198.888363 L392.849074,195.017043 Z M394.084619,193.781497", "id", "Triangle 313"]], template: function AxiomSchedulerEventComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵtemplate(0, AxiomSchedulerEventComponent_ng_container_0_Template, 4, 3, "ng-container", 0);
                i0.ɵɵtemplate(1, AxiomSchedulerEventComponent_ng_container_1_Template, 3, 2, "ng-container", 0);
                i0.ɵɵtemplate(2, AxiomSchedulerEventComponent_ng_container_2_Template, 4, 2, "ng-container", 0);
                i0.ɵɵtemplate(3, AxiomSchedulerEventComponent__svg_svg_3_Template, 7, 0, "svg", 1);
                i0.ɵɵtemplate(4, AxiomSchedulerEventComponent_div_4_Template, 12, 0, "div", 2);
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngIf", !ctx.monthMode && ctx.axEventTemplate);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.monthMode && ctx.axEventTemplate);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", !ctx.axEventTemplate);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.event.locked);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.axEventToolbar && !ctx.event.locked);
            }
        }, directives: [i1.NgIf, i1.NgTemplateOutlet], styles: [".ax-scheduler__event{cursor:pointer;overflow:visible;position:relative;text-align:left}.ax-scheduler__event>.ax-scheduler__event__content{color:#eee;display:inline-block;font-size:13px;font-weight:400;height:100%;margin:0 10px;overflow:hidden;padding:5px 8px;position:relative;vertical-align:middle}.ax-scheduler__event>p{color:#fff;display:inline-block;font-size:11px;height:100%;margin:0;padding:0;position:absolute;vertical-align:top;width:50px}.ax-scheduler__event>p>span{background:#333;border-radius:100px;color:#fff;left:-40px;padding:0 5px;position:absolute;z-index:200}.ax-scheduler__event>p>span:first-child{top:0}.ax-scheduler__event>p>span:last-child{bottom:0}"], encapsulation: 2, data: { animation: [
                animations.trigger('timeAnimate', [
                    animations.transition(':enter', [
                        animations.style({ transform: 'scale(0)' }),
                        animations.animate(180 + "ms ease-in", animations.style({ transform: 'scale(1)' }))
                    ]),
                    animations.transition(':leave', [
                        animations.animate(80 + "ms ease-out", animations.style({ opacity: '0' }))
                    ])
                ])
            ] } });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(AxiomSchedulerEventComponent, [{
                type: i0.Component,
                args: [{
                        selector: '[ax-scheduler-event]',
                        templateUrl: './axiom-scheduler-event.component.html',
                        styleUrls: ['./axiom-scheduler-event.component.scss'],
                        encapsulation: i0.ViewEncapsulation.None,
                        host: {
                            'class': 'ax-scheduler__event',
                            '[class.expired]': 'expired',
                            '(click)': 'service.eventClicked(event)'
                        },
                        animations: [
                            animations.trigger('timeAnimate', [
                                animations.transition(':enter', [
                                    animations.style({ transform: 'scale(0)' }),
                                    animations.animate(180 + "ms ease-in", animations.style({ transform: 'scale(1)' }))
                                ]),
                                animations.transition(':leave', [
                                    animations.animate(80 + "ms ease-out", animations.style({ opacity: '0' }))
                                ])
                            ])
                        ]
                    }]
            }], function () { return [{ type: i0.Injector }, { type: i0.Renderer2 }, { type: i0.ElementRef }]; }, { event: [{
                    type: i0.Input
                }], monthMode: [{
                    type: i0.Input
                }] });
    })();

    var _c0$3 = ["ax-scheduler-hour", ""];
    var AxiomSchedulerHourComponent = /** @class */ (function (_super) {
        __extends(AxiomSchedulerHourComponent, _super);
        function AxiomSchedulerHourComponent(injector) {
            return _super.call(this, injector) || this;
        }
        AxiomSchedulerHourComponent.prototype.ngOnInit = function () {
            this.refreshView();
        };
        AxiomSchedulerHourComponent.prototype.refreshView = function () {
            this.minuteRows = Array(60).fill(0).map(function (x, i) {
                return { events: [], minute: i };
            });
            this.setInRangeEvent();
        };
        AxiomSchedulerHourComponent.prototype.setInRangeEvent = function () {
            this.inRnageEvents = [];
        };
        return AxiomSchedulerHourComponent;
    }(AxiomSchedulerComponentCommon));
    AxiomSchedulerHourComponent.ɵfac = function AxiomSchedulerHourComponent_Factory(t) { return new (t || AxiomSchedulerHourComponent)(i0.ɵɵdirectiveInject(i0.Injector)); };
    AxiomSchedulerHourComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AxiomSchedulerHourComponent, selectors: [["", "ax-scheduler-hour", ""]], hostAttrs: [1, "ax-scheduler-hour"], inputs: { hour: "hour" }, features: [i0.ɵɵInheritDefinitionFeature], attrs: _c0$3, decls: 0, vars: 0, template: function AxiomSchedulerHourComponent_Template(rf, ctx) { }, styles: [".ax-scheduler__event__row{display:flex;margin:1px 0;padding:0}"], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(AxiomSchedulerHourComponent, [{
                type: i0.Component,
                args: [{
                        selector: '[ax-scheduler-hour]',
                        templateUrl: './axiom-scheduler-hour.component.html',
                        styleUrls: ['./axiom-scheduler-hour.component.scss'],
                        encapsulation: i0.ViewEncapsulation.None,
                        host: {
                            'class': 'ax-scheduler-hour'
                        }
                    }]
            }], function () { return [{ type: i0.Injector }]; }, { hour: [{
                    type: i0.Input
                }] });
    })();

    var _c0$4 = ["ax-scheduler-day-column", ""];
    function AxiomSchedulerDayColumnComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
            var _r5_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 2);
            i0.ɵɵlistener("movingOffset", function AxiomSchedulerDayColumnComponent_div_0_Template_div_movingOffset_0_listener($event) { i0.ɵɵrestoreView(_r5_1); var _r3 = i0.ɵɵreference(2); return _r3.fromTimeChanging($event); })("endOffset", function AxiomSchedulerDayColumnComponent_div_0_Template_div_endOffset_0_listener($event) { i0.ɵɵrestoreView(_r5_1); var _r3 = i0.ɵɵreference(2); return _r3.fromTimeChanged($event); })("started", function AxiomSchedulerDayColumnComponent_div_0_Template_div_started_0_listener($event) { i0.ɵɵrestoreView(_r5_1); var _r3 = i0.ɵɵreference(2); return _r3.fromTimeChangeStart($event); })("edge", function AxiomSchedulerDayColumnComponent_div_0_Template_div_edge_0_listener($event) { i0.ɵɵrestoreView(_r5_1); var ctx_r8 = i0.ɵɵnextContext(); return ctx_r8.checkEdge($event); })("rzResizing", function AxiomSchedulerDayColumnComponent_div_0_Template_div_rzResizing_0_listener($event) { i0.ɵɵrestoreView(_r5_1); var _r3 = i0.ɵɵreference(2); return _r3.toTimeChanging($event); })("rzStop", function AxiomSchedulerDayColumnComponent_div_0_Template_div_rzStop_0_listener($event) { i0.ɵɵrestoreView(_r5_1); var _r3 = i0.ɵɵreference(2); return _r3.toTimeChanged($event); })("rzStart", function AxiomSchedulerDayColumnComponent_div_0_Template_div_rzStart_0_listener($event) { i0.ɵɵrestoreView(_r5_1); var _r3 = i0.ɵɵreference(2); return _r3.toTimeChangeStart($event); });
            i0.ɵɵelement(1, "div", 3, 4);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var event_r2 = ctx.$implicit;
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵproperty("ngDraggable", !event_r2.locked)("gridSize", ctx_r0.axDragStep)("bounds", ctx_r0.bounds)("lockAxis", "x")("inBounds", true)("zIndexMoving", "1000")("preventDefaultEvent", true)("ngResizable", !event_r2.locked)("rzHandles", "s,n")("rzGrid", ctx_r0.axDragStep);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("event", event_r2)("axEventTemplate", ctx_r0.axEventTemplate)("axEventToolbar", ctx_r0.axEventToolbar);
        }
    }
    function AxiomSchedulerDayColumnComponent_div_1_span_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "span");
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var hour_r12 = i0.ɵɵnextContext().$implicit;
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", hour_r12.start.format("HH:mm"), " ");
        }
    }
    function AxiomSchedulerDayColumnComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div");
            i0.ɵɵelementStart(1, "div", 5);
            i0.ɵɵtemplate(2, AxiomSchedulerDayColumnComponent_div_1_span_2_Template, 2, 1, "span", 6);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(3, "div", 7);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var hour_r12 = ctx.$implicit;
            var index_r13 = ctx.index;
            var ctx_r1 = i0.ɵɵnextContext();
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", index_r13 > 0);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("hour", hour_r12)("axEventTemplate", ctx_r1.axEventTemplate)("axEventFormatter", ctx_r1.axEventFormatter);
        }
    }
    var moment$4 = momentNs;
    var AxiomSchedulerDayColumnComponent = /** @class */ (function (_super) {
        __extends(AxiomSchedulerDayColumnComponent, _super);
        function AxiomSchedulerDayColumnComponent(injector, _element) {
            var _this = _super.call(this, injector) || this;
            _this._element = _element;
            _this.hourColumn = true;
            _this.edge = {
                top: true,
                bottom: true,
                left: true,
                right: true
            };
            _this.bounds = _this._element.nativeElement;
            return _this;
        }
        AxiomSchedulerDayColumnComponent.prototype.ngOnInit = function () {
            this.refresh();
            this.refreshView();
        };
        AxiomSchedulerDayColumnComponent.prototype.refreshView = function () {
            this.checkDayEvents();
            this.setHours();
        };
        AxiomSchedulerDayColumnComponent.prototype.checkEdge = function (event) {
            this.edge = event;
        };
        AxiomSchedulerDayColumnComponent.prototype.setHours = function () {
            this.hours = [];
            for (var hour = 0; hour <= 23; hour++) {
                this.hours.push(new AxiomSchedulerHour(this.date.clone().startOf('day').add(hour, 'hours')));
            }
        };
        AxiomSchedulerDayColumnComponent.prototype.checkDayEvents = function () {
            var _this = this;
            this.dayEvents = [];
            this.service.axEvents.forEach(function (ev) {
                if (ev.from && ev.to) {
                    if (moment$4(ev.from).isSameOrAfter(_this.date.clone().startOf('day')) && moment$4(ev.to).isSameOrBefore(_this.date.clone().endOf('day'))) {
                        _this.dayEvents.push(ev);
                    }
                }
                else if (ev.from && !ev.to) {
                    if (moment$4(ev.from).isSameOrAfter(_this.date.clone().startOf('day')) && moment$4(ev.from).isSameOrBefore(_this.date.clone().endOf('day'))) {
                        _this.dayEvents.push(ev);
                    }
                }
            });
        };
        return AxiomSchedulerDayColumnComponent;
    }(AxiomSchedulerComponentCommon));
    AxiomSchedulerDayColumnComponent.ɵfac = function AxiomSchedulerDayColumnComponent_Factory(t) { return new (t || AxiomSchedulerDayColumnComponent)(i0.ɵɵdirectiveInject(i0.Injector), i0.ɵɵdirectiveInject(i0.ElementRef)); };
    AxiomSchedulerDayColumnComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AxiomSchedulerDayColumnComponent, selectors: [["", "ax-scheduler-day-column", ""]], hostAttrs: [1, "ax-scheduler__day-view__body"], hostVars: 2, hostBindings: function AxiomSchedulerDayColumnComponent_HostBindings(rf, ctx) {
            if (rf & 2) {
                i0.ɵɵclassProp("hour-none", !ctx.hourColumn);
            }
        }, inputs: { hourColumn: "hourColumn", bounds: "bounds" }, features: [i0.ɵɵInheritDefinitionFeature], attrs: _c0$4, decls: 2, vars: 2, consts: [["class", "ax-scheduler__event-tile", 3, "ngDraggable", "gridSize", "bounds", "lockAxis", "inBounds", "zIndexMoving", "preventDefaultEvent", "ngResizable", "rzHandles", "rzGrid", "movingOffset", "endOffset", "started", "edge", "rzResizing", "rzStop", "rzStart", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], [1, "ax-scheduler__event-tile", 3, "ngDraggable", "gridSize", "bounds", "lockAxis", "inBounds", "zIndexMoving", "preventDefaultEvent", "ngResizable", "rzHandles", "rzGrid", "movingOffset", "endOffset", "started", "edge", "rzResizing", "rzStop", "rzStart"], ["ax-scheduler-event", "", 1, "ax-scheduler__event-tile__box", 3, "event", "axEventTemplate", "axEventToolbar"], ["ev", ""], [1, "ax-scheduler__day-view__hour-column"], [4, "ngIf"], ["ax-scheduler-hour", "", 1, "ax-scheduler__day-view__event-column", 3, "hour", "axEventTemplate", "axEventFormatter"]], template: function AxiomSchedulerDayColumnComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵtemplate(0, AxiomSchedulerDayColumnComponent_div_0_Template, 3, 13, "div", 0);
                i0.ɵɵtemplate(1, AxiomSchedulerDayColumnComponent_div_1_Template, 4, 4, "div", 1);
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngForOf", ctx.dayEvents);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngForOf", ctx.hours);
            }
        }, directives: [i1.NgForOf, i3.AngularDraggableDirective, i3.AngularResizableDirective, AxiomSchedulerEventComponent, i1.NgIf, AxiomSchedulerHourComponent], styles: [""], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(AxiomSchedulerDayColumnComponent, [{
                type: i0.Component,
                args: [{
                        selector: '[ax-scheduler-day-column]',
                        templateUrl: './axiom-scheduler-day-column.component.html',
                        styleUrls: ['./axiom-scheduler-day-column.component.scss'],
                        encapsulation: i0.ViewEncapsulation.None,
                        host: {
                            'class': 'ax-scheduler__day-view__body',
                            '[class.hour-none]': '!hourColumn'
                        }
                    }]
            }], function () { return [{ type: i0.Injector }, { type: i0.ElementRef }]; }, { hourColumn: [{
                    type: i0.Input
                }], bounds: [{
                    type: i0.Input
                }] });
    })();

    var _c0$5 = ["ax-scheduler-day-tile", ""];
    function AxiomSchedulerDayTileComponent__svg_svg_0_Template(rf, ctx) {
        if (rf & 1) {
            var _r5_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(0, "svg", 7);
            i0.ɵɵlistener("click", function AxiomSchedulerDayTileComponent__svg_svg_0_Template__svg_svg_click_0_listener() { i0.ɵɵrestoreView(_r5_1); var ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.showEventsDialog(); });
            i0.ɵɵelement(1, "circle", 8);
            i0.ɵɵelement(2, "circle", 9);
            i0.ɵɵelement(3, "circle", 10);
            i0.ɵɵelementEnd();
        }
    }
    function AxiomSchedulerDayTileComponent_div_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 11);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r1 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", ctx_r1.day.format("ddd"), "\n");
        }
    }
    function AxiomSchedulerDayTileComponent_ng_container_6_div_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "div", 13);
        }
        if (rf & 2) {
            var event_r6 = i0.ɵɵnextContext().$implicit;
            var ctx_r8 = i0.ɵɵnextContext();
            i0.ɵɵproperty("event", event_r6)("monthMode", true)("axEventToolbar", ctx_r8.axEventToolbar)("axEventTemplate", ctx_r8.axEventTemplate);
        }
    }
    function AxiomSchedulerDayTileComponent_ng_container_6_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵtemplate(1, AxiomSchedulerDayTileComponent_ng_container_6_div_1_Template, 1, 4, "div", 12);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var index_r7 = ctx.index;
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", index_r7 < 2);
        }
    }
    function AxiomSchedulerDayTileComponent_div_7_Template(rf, ctx) {
        if (rf & 1) {
            var _r11_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 14);
            i0.ɵɵlistener("click", function AxiomSchedulerDayTileComponent_div_7_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r11_1); var ctx_r10 = i0.ɵɵnextContext(); return ctx_r10.showEventsDialog(); });
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r3 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", ctx_r3.dayEvents.length - 2, " More ... ");
        }
    }
    var _c1$1 = function (a0, a1) { return { "today": a0, "in-month": a1 }; };
    var moment$5 = momentNs;
    var AxiomSchedulerDayTileComponent = /** @class */ (function (_super) {
        __extends(AxiomSchedulerDayTileComponent, _super);
        function AxiomSchedulerDayTileComponent(injector, _element) {
            var _this = _super.call(this, injector) || this;
            _this._element = _element;
            _this.inMonth = false;
            return _this;
        }
        AxiomSchedulerDayTileComponent.prototype.ngOnInit = function () {
            this.refresh();
            this.refreshView();
        };
        AxiomSchedulerDayTileComponent.prototype.refreshView = function () {
            this.inMonth = this.day.clone().isSameOrAfter(this.date.clone().startOf('months')) && this.day.clone().isSameOrBefore(this.date.clone().endOf('months'));
            this.checkDayEvents();
        };
        AxiomSchedulerDayTileComponent.prototype.showEventsDialog = function () {
            if (this.dayEvents && this.dayEvents.length > 0) {
                this.sidebarService.open({ title: "" + this.day.format('DD MMMM YYYY'), events: this.dayEvents });
            }
        };
        AxiomSchedulerDayTileComponent.prototype.checkDayEvents = function () {
            var _this = this;
            this.dayEvents = [];
            this.service.axEvents.forEach(function (ev) {
                if (ev.from && ev.to) {
                    if (moment$5(ev.from).isSameOrAfter(_this.day.clone().startOf('day')) && moment$5(ev.to).isSameOrBefore(_this.day.clone().endOf('day'))) {
                        _this.dayEvents.push(ev);
                    }
                }
                else if (ev.from && !ev.to) {
                    if (moment$5(ev.from).isSameOrAfter(_this.day.clone().startOf('day')) && moment$5(ev.from).isSameOrBefore(_this.day.clone().endOf('day'))) {
                        _this.dayEvents.push(ev);
                    }
                }
            });
        };
        return AxiomSchedulerDayTileComponent;
    }(AxiomSchedulerComponentCommon));
    AxiomSchedulerDayTileComponent.ɵfac = function AxiomSchedulerDayTileComponent_Factory(t) { return new (t || AxiomSchedulerDayTileComponent)(i0.ɵɵdirectiveInject(i0.Injector), i0.ɵɵdirectiveInject(i0.ElementRef)); };
    AxiomSchedulerDayTileComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AxiomSchedulerDayTileComponent, selectors: [["", "ax-scheduler-day-tile", ""]], hostAttrs: [1, "ax-scheduler__month-view__day"], inputs: { day: "day", index: "index" }, features: [i0.ɵɵInheritDefinitionFeature], attrs: _c0$5, decls: 8, vars: 9, consts: [["title", "Click to show events", "class", "ax-scheduler__month-view__day_list", "enable-background", "new 0 0 24 24", "id", "Layer_1", "version", "1.0", "viewBox", "0 0 24 24", 0, "xml", "space", "preserve", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", 3, "click", 4, "ngIf"], [1, "ax-scheduler__month-view__day__number", 3, "ngClass"], ["class", "ax-scheduler__month-view__day__label", 4, "ngIf"], [1, "ax-scheduler__month-view__day__events"], [1, "ax-scheduler__month-view__day__events_container"], [4, "ngFor", "ngForOf"], ["class", "more-item", 3, "click", 4, "ngIf"], ["title", "Click to show events", "enable-background", "new 0 0 24 24", "id", "Layer_1", "version", "1.0", "viewBox", "0 0 24 24", 0, "xml", "space", "preserve", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", 1, "ax-scheduler__month-view__day_list", 3, "click"], ["cx", "12", "cy", "12", "r", "2"], ["cx", "12", "cy", "5", "r", "2"], ["cx", "12", "cy", "19", "r", "2"], [1, "ax-scheduler__month-view__day__label"], ["ax-scheduler-event", "", 3, "event", "monthMode", "axEventToolbar", "axEventTemplate", 4, "ngIf"], ["ax-scheduler-event", "", 3, "event", "monthMode", "axEventToolbar", "axEventTemplate"], [1, "more-item", 3, "click"]], template: function AxiomSchedulerDayTileComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵtemplate(0, AxiomSchedulerDayTileComponent__svg_svg_0_Template, 4, 0, "svg", 0);
                i0.ɵɵelementStart(1, "span", 1);
                i0.ɵɵtext(2);
                i0.ɵɵelementEnd();
                i0.ɵɵtemplate(3, AxiomSchedulerDayTileComponent_div_3_Template, 2, 1, "div", 2);
                i0.ɵɵelementStart(4, "div", 3);
                i0.ɵɵelementStart(5, "div", 4);
                i0.ɵɵtemplate(6, AxiomSchedulerDayTileComponent_ng_container_6_Template, 2, 1, "ng-container", 5);
                i0.ɵɵelementEnd();
                i0.ɵɵtemplate(7, AxiomSchedulerDayTileComponent_div_7_Template, 2, 1, "div", 6);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngIf", ctx.dayEvents && ctx.dayEvents.length > 0);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(6, _c1$1, ctx.day.isSame(ctx.today, "days"), ctx.inMonth));
                i0.ɵɵadvance(1);
                i0.ɵɵtextInterpolate1(" ", ctx.day.format("DD"), "\n");
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.index < 7);
                i0.ɵɵadvance(3);
                i0.ɵɵproperty("ngForOf", ctx.dayEvents);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.dayEvents.length > 2);
            }
        }, directives: [i1.NgIf, i1.NgClass, i1.NgForOf, AxiomSchedulerEventComponent], styles: [""], encapsulation: 2, data: { animation: [
                animations.trigger('dialogAnimation', [
                    animations.transition(':enter', [
                        animations.style({ transform: 'scale(0)' }),
                        animations.animate(190 + "ms ease-in", animations.style({ transform: 'scale(1.1)' })),
                        animations.animate(100 + "ms ease-in", animations.style({ transform: 'scale(1)' }))
                    ]),
                    animations.transition(':leave', [
                        animations.animate(80 + "ms ease-in-out", animations.style({ transform: 'scale(0)' }))
                    ])
                ])
            ] } });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(AxiomSchedulerDayTileComponent, [{
                type: i0.Component,
                args: [{
                        selector: '[ax-scheduler-day-tile]',
                        templateUrl: './axiom-scheduler-day-tile.component.html',
                        styleUrls: ['./axiom-scheduler-day-tile.component.scss'],
                        encapsulation: i0.ViewEncapsulation.None,
                        host: {
                            'class': 'ax-scheduler__month-view__day'
                        },
                        animations: [
                            animations.trigger('dialogAnimation', [
                                animations.transition(':enter', [
                                    animations.style({ transform: 'scale(0)' }),
                                    animations.animate(190 + "ms ease-in", animations.style({ transform: 'scale(1.1)' })),
                                    animations.animate(100 + "ms ease-in", animations.style({ transform: 'scale(1)' }))
                                ]),
                                animations.transition(':leave', [
                                    animations.animate(80 + "ms ease-in-out", animations.style({ transform: 'scale(0)' }))
                                ])
                            ])
                        ]
                    }]
            }], function () { return [{ type: i0.Injector }, { type: i0.ElementRef }]; }, { day: [{
                    type: i0.Input
                }], index: [{
                    type: i0.Input
                }] });
    })();

    var _c0$6 = ["ax-scheduler-month-tile-day", ""];
    var moment$6 = momentNs;
    var AxiomSchedulerMonthTileDayComponent = /** @class */ (function (_super) {
        __extends(AxiomSchedulerMonthTileDayComponent, _super);
        function AxiomSchedulerMonthTileDayComponent(injector, _renderer, _element) {
            var _this = _super.call(this, injector) || this;
            _this._renderer = _renderer;
            _this._element = _element;
            _this.events = [];
            return _this;
        }
        AxiomSchedulerMonthTileDayComponent.prototype.ngOnInit = function () {
            this.refresh();
            this.refreshView();
        };
        AxiomSchedulerMonthTileDayComponent.prototype.showEventsDialog = function () {
            if (this.events && this.events.length > 0) {
                this.sidebarService.open({ title: "" + this.day.format('DD MMMM YYYY'), events: this.events });
            }
        };
        AxiomSchedulerMonthTileDayComponent.prototype.refreshView = function () {
            this.checkEvents();
            var text = this.events.length + " event" + (this.events.length > 1 ? "s" : "") + ", Click to show detail...";
            this._renderer.setAttribute(this._element.nativeElement, 'title', text);
        };
        AxiomSchedulerMonthTileDayComponent.prototype.checkEvents = function () {
            var _this = this;
            this.events = [];
            this.service.axEvents.forEach(function (ev) {
                if (ev.to && ev.from) {
                    if (moment$6(ev.from).isSameOrAfter(_this.day.clone().startOf('day')) && moment$6(ev.to).isSameOrBefore(_this.day.clone().endOf('day'))) {
                        _this.events.push(ev);
                    }
                }
                else if (ev.from && !ev.to) {
                    if (moment$6(ev.from).isSameOrAfter(_this.day.clone().startOf('day')) && moment$6(ev.from).isSameOrBefore(_this.day.clone().endOf('day'))) {
                        _this.events.push(ev);
                    }
                }
            });
        };
        return AxiomSchedulerMonthTileDayComponent;
    }(AxiomSchedulerComponentCommon));
    AxiomSchedulerMonthTileDayComponent.ɵfac = function AxiomSchedulerMonthTileDayComponent_Factory(t) { return new (t || AxiomSchedulerMonthTileDayComponent)(i0.ɵɵdirectiveInject(i0.Injector), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef)); };
    AxiomSchedulerMonthTileDayComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AxiomSchedulerMonthTileDayComponent, selectors: [["", "ax-scheduler-month-tile-day", ""]], hostAttrs: [1, "ax-scheduler__year-view__month__day"], hostVars: 2, hostBindings: function AxiomSchedulerMonthTileDayComponent_HostBindings(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵlistener("click", function AxiomSchedulerMonthTileDayComponent_click_HostBindingHandler() { return ctx.showEventsDialog(); });
            }
            if (rf & 2) {
                i0.ɵɵclassProp("hasEvent", ctx.events.length > 0);
            }
        }, inputs: { day: "day" }, features: [i0.ɵɵInheritDefinitionFeature], attrs: _c0$6, decls: 1, vars: 1, template: function AxiomSchedulerMonthTileDayComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵtext(0);
            }
            if (rf & 2) {
                i0.ɵɵtextInterpolate1("\n", ctx.day.format("DD"), "\n");
            }
        }, styles: [""], encapsulation: 2, data: { animation: [
                animations.trigger('dialogAnimation', [
                    animations.transition(':enter', [
                        animations.style({ transform: 'scale(0)' }),
                        animations.animate(190 + "ms ease-in", animations.style({ transform: 'scale(1.1)' })),
                        animations.animate(100 + "ms ease-in", animations.style({ transform: 'scale(1)' }))
                    ]),
                    animations.transition(':leave', [
                        animations.animate(80 + "ms ease-in-out", animations.style({ transform: 'scale(0)' }))
                    ])
                ])
            ] } });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(AxiomSchedulerMonthTileDayComponent, [{
                type: i0.Component,
                args: [{
                        selector: '[ax-scheduler-month-tile-day]',
                        templateUrl: './axiom-scheduler-month-tile-day.component.html',
                        styleUrls: ['./axiom-scheduler-month-tile-day.component.scss'],
                        encapsulation: i0.ViewEncapsulation.None,
                        host: {
                            'class': 'ax-scheduler__year-view__month__day',
                            '[class.hasEvent]': 'events.length > 0',
                            '(click)': 'showEventsDialog()'
                        },
                        animations: [
                            animations.trigger('dialogAnimation', [
                                animations.transition(':enter', [
                                    animations.style({ transform: 'scale(0)' }),
                                    animations.animate(190 + "ms ease-in", animations.style({ transform: 'scale(1.1)' })),
                                    animations.animate(100 + "ms ease-in", animations.style({ transform: 'scale(1)' }))
                                ]),
                                animations.transition(':leave', [
                                    animations.animate(80 + "ms ease-in-out", animations.style({ transform: 'scale(0)' }))
                                ])
                            ])
                        ]
                    }]
            }], function () { return [{ type: i0.Injector }, { type: i0.Renderer2 }, { type: i0.ElementRef }]; }, { day: [{
                    type: i0.Input
                }] });
    })();

    var _c0$7 = ["ax-scheduler-month-tile", ""];
    var _c1$2 = function (a0, a1) { return { "today": a0, "current": a1 }; };
    function AxiomSchedulerMonthTileComponent_div_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 3);
            i0.ɵɵelement(1, "span", 4);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var day_r1 = ctx.$implicit;
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(6, _c1$2, day_r1.isSame(ctx_r0.today, "days"), day_r1.isSame(ctx_r0.monthObject.month, "months")));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("axEventTemplate", ctx_r0.axEventTemplate)("axEventFormatter", ctx_r0.axEventFormatter)("axDragStep", ctx_r0.axDragStep)("axStartDate", ctx_r0.axStartDate)("day", day_r1);
        }
    }
    var AxiomSchedulerMonthTileComponent = /** @class */ (function (_super) {
        __extends(AxiomSchedulerMonthTileComponent, _super);
        function AxiomSchedulerMonthTileComponent(injector) {
            return _super.call(this, injector) || this;
        }
        AxiomSchedulerMonthTileComponent.prototype.ngOnInit = function () {
            this.refresh();
        };
        AxiomSchedulerMonthTileComponent.prototype.refreshView = function () {
            this.monthObject.month = this.date.startOf('months');
            this.monthObject.setDays();
        };
        return AxiomSchedulerMonthTileComponent;
    }(AxiomSchedulerComponentCommon));
    AxiomSchedulerMonthTileComponent.ɵfac = function AxiomSchedulerMonthTileComponent_Factory(t) { return new (t || AxiomSchedulerMonthTileComponent)(i0.ɵɵdirectiveInject(i0.Injector)); };
    AxiomSchedulerMonthTileComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AxiomSchedulerMonthTileComponent, selectors: [["", "ax-scheduler-month-tile", ""]], hostAttrs: [1, "ax-scheduler__year-view__month"], inputs: { monthObject: "monthObject" }, features: [i0.ɵɵInheritDefinitionFeature], attrs: _c0$7, decls: 4, vars: 2, consts: [[1, "ax-scheduler__year-view__month__header"], [1, "ax-scheduler__year-view__month__body"], [3, "ngClass", 4, "ngFor", "ngForOf"], [3, "ngClass"], ["ax-scheduler-month-tile-day", "", 3, "axEventTemplate", "axEventFormatter", "axDragStep", "axStartDate", "day"]], template: function AxiomSchedulerMonthTileComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵtext(1);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(2, "div", 1);
                i0.ɵɵtemplate(3, AxiomSchedulerMonthTileComponent_div_3_Template, 2, 9, "div", 2);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(1);
                i0.ɵɵtextInterpolate1(" ", ctx.monthObject.month.format("MMMM"), "\n");
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("ngForOf", ctx.monthObject.days);
            }
        }, directives: [i1.NgForOf, i1.NgClass, AxiomSchedulerMonthTileDayComponent], styles: [""], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(AxiomSchedulerMonthTileComponent, [{
                type: i0.Component,
                args: [{
                        selector: '[ax-scheduler-month-tile]',
                        templateUrl: './axiom-scheduler-month-tile.component.html',
                        styleUrls: ['./axiom-scheduler-month-tile.component.scss'],
                        encapsulation: i0.ViewEncapsulation.None,
                        host: {
                            'class': 'ax-scheduler__year-view__month'
                        }
                    }]
            }], function () { return [{ type: i0.Injector }]; }, { monthObject: [{
                    type: i0.Input
                }] });
    })();

    var _c0$8 = ["ax-scheduler-sidebar", ""];
    function AxiomSchedulerSidebarComponent_h6_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "h6");
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(ctx_r0.data.title);
        }
    }
    function AxiomSchedulerSidebarComponent_ng_container_3_div_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "div", 3);
        }
        if (rf & 2) {
            var event_r3 = ctx.$implicit;
            var ctx_r2 = i0.ɵɵnextContext(2);
            i0.ɵɵproperty("@slideInOutRight", undefined)("event", event_r3)("monthMode", true)("axEventToolbar", ctx_r2.axEventToolbar)("axEventTemplate", ctx_r2.axEventTemplate);
        }
    }
    function AxiomSchedulerSidebarComponent_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵtemplate(1, AxiomSchedulerSidebarComponent_ng_container_3_div_1_Template, 1, 5, "div", 2);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r1 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx_r1.data.events);
        }
    }
    var AxiomSchedulerSidebarComponent = /** @class */ (function () {
        function AxiomSchedulerSidebarComponent(_element, _sidebarService) {
            this._element = _element;
            this._sidebarService = _sidebarService;
            this.axEventToolbar = true;
            this.destroyed = new rxjs.ReplaySubject(1);
        }
        AxiomSchedulerSidebarComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.subs = this._sidebarService.data.subscribe(function (data) {
                _this.data = data;
                _this.setEventObserver();
            });
        };
        AxiomSchedulerSidebarComponent.prototype.ngOnDestroy = function () {
            this.destroyEventObserver();
            this.subs && this.subs.unsubscribe();
        };
        AxiomSchedulerSidebarComponent.prototype.close = function () {
            this._sidebarService.close();
        };
        AxiomSchedulerSidebarComponent.prototype.closeOnGlobalKeydown = function (event) {
            if (event.keyCode === 27) {
                this._sidebarService.close();
            }
        };
        AxiomSchedulerSidebarComponent.prototype.setEventObserver = function () {
            var _this = this;
            this.destroyed = new rxjs.ReplaySubject(1);
            rxjs.fromEvent(document, 'keydown').pipe(operators.takeUntil(this.destroyed)).subscribe(function (event) { return _this.closeOnGlobalKeydown(event); });
        };
        AxiomSchedulerSidebarComponent.prototype.destroyEventObserver = function () {
            if (this.destroyed) {
                this.destroyed.next(true);
                this.destroyed.complete();
            }
        };
        return AxiomSchedulerSidebarComponent;
    }());
    AxiomSchedulerSidebarComponent.ɵfac = function AxiomSchedulerSidebarComponent_Factory(t) { return new (t || AxiomSchedulerSidebarComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(AxiomSchedulerSidebarService)); };
    AxiomSchedulerSidebarComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AxiomSchedulerSidebarComponent, selectors: [["", "ax-scheduler-sidebar", ""]], hostAttrs: [1, "ax-scheduler__sidebar"], inputs: { axEventTemplate: "axEventTemplate", axEventToolbar: "axEventToolbar" }, attrs: _c0$8, decls: 4, vars: 2, consts: [[1, "ax-scheduler__close-button", 3, "click"], [4, "ngIf"], ["ax-scheduler-event", "", 3, "event", "monthMode", "axEventToolbar", "axEventTemplate", 4, "ngFor", "ngForOf"], ["ax-scheduler-event", "", 3, "event", "monthMode", "axEventToolbar", "axEventTemplate"]], template: function AxiomSchedulerSidebarComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "span", 0);
                i0.ɵɵlistener("click", function AxiomSchedulerSidebarComponent_Template_span_click_0_listener() { return ctx.close(); });
                i0.ɵɵtext(1, "\u00D7");
                i0.ɵɵelementEnd();
                i0.ɵɵtemplate(2, AxiomSchedulerSidebarComponent_h6_2_Template, 2, 1, "h6", 1);
                i0.ɵɵtemplate(3, AxiomSchedulerSidebarComponent_ng_container_3_Template, 2, 1, "ng-container", 1);
            }
            if (rf & 2) {
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("ngIf", ctx.data);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.data);
            }
        }, directives: [i1.NgIf, i1.NgForOf, AxiomSchedulerEventComponent], styles: [""], encapsulation: 2, data: { animation: [
                animations.trigger('slideInOutRight', [
                    animations.transition(':enter', [
                        animations.style({ transform: 'translateX(100%)' }),
                        animations.animate(150 + "ms ease-in", animations.style({ transform: 'translateX(0%)' }))
                    ]),
                    animations.transition(':leave', [
                        animations.animate(240 + "ms ease-out", animations.style({ transform: 'translateX(100%)' }))
                    ])
                ])
            ] } });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(AxiomSchedulerSidebarComponent, [{
                type: i0.Component,
                args: [{
                        selector: '[ax-scheduler-sidebar]',
                        templateUrl: './axiom-scheduler-sidebar.component.html',
                        styleUrls: ['./axiom-scheduler-sidebar.component.scss'],
                        encapsulation: i0.ViewEncapsulation.None,
                        host: {
                            'class': 'ax-scheduler__sidebar'
                        },
                        animations: [
                            animations.trigger('slideInOutRight', [
                                animations.transition(':enter', [
                                    animations.style({ transform: 'translateX(100%)' }),
                                    animations.animate(150 + "ms ease-in", animations.style({ transform: 'translateX(0%)' }))
                                ]),
                                animations.transition(':leave', [
                                    animations.animate(240 + "ms ease-out", animations.style({ transform: 'translateX(100%)' }))
                                ])
                            ])
                        ]
                    }]
            }], function () { return [{ type: i0.ElementRef }, { type: AxiomSchedulerSidebarService }]; }, { axEventTemplate: [{
                    type: i0.Input
                }], axEventToolbar: [{
                    type: i0.Input
                }] });
    })();

    var _c0$9 = ["ax-scheduler-month-view", ""];
    function AxiomSchedulerMonthViewComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "div", 2);
        }
        if (rf & 2) {
            var day_r2 = ctx.$implicit;
            var index_r3 = ctx.index;
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵproperty("axEventTemplate", ctx_r0.axEventTemplate)("axEventFormatter", ctx_r0.axEventFormatter)("axDragStep", ctx_r0.axDragStep)("axStartDate", ctx_r0.axStartDate)("axEventToolbar", ctx_r0.axEventToolbar)("day", day_r2)("index", index_r3);
        }
    }
    function AxiomSchedulerMonthViewComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "div", 3);
        }
        if (rf & 2) {
            var ctx_r1 = i0.ɵɵnextContext();
            i0.ɵɵproperty("@slideInOutRight", undefined)("axEventTemplate", ctx_r1.axEventTemplate)("axEventToolbar", ctx_r1.axEventToolbar);
        }
    }
    var moment$7 = momentNs;
    var AxiomSchedulerMonthViewComponent = /** @class */ (function (_super) {
        __extends(AxiomSchedulerMonthViewComponent, _super);
        function AxiomSchedulerMonthViewComponent(injector) {
            var _this = _super.call(this, injector) || this;
            _this.sidebar = false;
            return _this;
        }
        AxiomSchedulerMonthViewComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.subscriptionGarbageCollection.push(this.sidebarService.toggle.subscribe(function (toggle) {
                _this.sidebar = toggle;
            }));
            this.refresh();
            this.refreshView();
        };
        AxiomSchedulerMonthViewComponent.prototype.refreshView = function () {
            this.setDays();
        };
        AxiomSchedulerMonthViewComponent.prototype.setDays = function () {
            var monthSize = 42;
            var startOfMonth = this.date.clone().startOf('month');
            var endOfMonth = this.date.clone().endOf('month');
            this.days = [];
            var day = startOfMonth.clone();
            while (day <= endOfMonth) {
                this.days.push(day);
                day = day.clone().add(1, 'd');
            }
            if (startOfMonth.clone().get('d') < 6) {
                day = startOfMonth.clone();
                while (day.get('d') < 6) {
                    day = day.clone().add(-1, 'days');
                    this.days.unshift(day);
                }
            }
            if (this.days.length < monthSize) {
                var size = (monthSize - this.days.length);
                for (var index = 1; index <= size; index++) {
                    this.days.push(endOfMonth.clone().add(index, 'days'));
                }
            }
        };
        return AxiomSchedulerMonthViewComponent;
    }(AxiomSchedulerComponentCommon));
    AxiomSchedulerMonthViewComponent.ɵfac = function AxiomSchedulerMonthViewComponent_Factory(t) { return new (t || AxiomSchedulerMonthViewComponent)(i0.ɵɵdirectiveInject(i0.Injector)); };
    AxiomSchedulerMonthViewComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AxiomSchedulerMonthViewComponent, selectors: [["", "ax-scheduler-month-view", ""]], hostAttrs: [1, "ax-scheduler__month-view"], features: [i0.ɵɵInheritDefinitionFeature], attrs: _c0$9, decls: 2, vars: 2, consts: [["ax-scheduler-day-tile", "", 3, "axEventTemplate", "axEventFormatter", "axDragStep", "axStartDate", "axEventToolbar", "day", "index", 4, "ngFor", "ngForOf"], ["ax-scheduler-sidebar", "", 3, "axEventTemplate", "axEventToolbar", 4, "ngIf"], ["ax-scheduler-day-tile", "", 3, "axEventTemplate", "axEventFormatter", "axDragStep", "axStartDate", "axEventToolbar", "day", "index"], ["ax-scheduler-sidebar", "", 3, "axEventTemplate", "axEventToolbar"]], template: function AxiomSchedulerMonthViewComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵtemplate(0, AxiomSchedulerMonthViewComponent_div_0_Template, 1, 7, "div", 0);
                i0.ɵɵtemplate(1, AxiomSchedulerMonthViewComponent_div_1_Template, 1, 3, "div", 1);
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngForOf", ctx.days);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.sidebar);
            }
        }, directives: [i1.NgForOf, i1.NgIf, AxiomSchedulerDayTileComponent, AxiomSchedulerSidebarComponent], styles: [""], encapsulation: 2, data: { animation: [
                animations.trigger('slideInOutRight', [
                    animations.transition(':enter', [
                        animations.style({ transform: 'translateX(-100%)' }),
                        animations.animate(120 + "ms ease-in-out", animations.style({ transform: 'translateX(0%)' }))
                    ]),
                    animations.transition(':leave', [
                        animations.animate(100 + "ms ease-in-out", animations.style({ transform: 'translateX(100%)' }))
                    ])
                ])
            ] } });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(AxiomSchedulerMonthViewComponent, [{
                type: i0.Component,
                args: [{
                        selector: '[ax-scheduler-month-view]',
                        templateUrl: './axiom-scheduler-month-view.component.html',
                        styleUrls: ['./axiom-scheduler-month-view.component.scss'],
                        encapsulation: i0.ViewEncapsulation.None,
                        host: {
                            'class': 'ax-scheduler__month-view'
                        },
                        animations: [
                            animations.trigger('slideInOutRight', [
                                animations.transition(':enter', [
                                    animations.style({ transform: 'translateX(-100%)' }),
                                    animations.animate(120 + "ms ease-in-out", animations.style({ transform: 'translateX(0%)' }))
                                ]),
                                animations.transition(':leave', [
                                    animations.animate(100 + "ms ease-in-out", animations.style({ transform: 'translateX(100%)' }))
                                ])
                            ])
                        ]
                    }]
            }], function () { return [{ type: i0.Injector }]; }, null);
    })();

    var _c0$a = ["ax-scheduler-week-view", ""];
    var _c1$3 = function (a0) { return { "today": a0 }; };
    function AxiomSchedulerWeekViewComponent_div_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div");
            i0.ɵɵelementStart(1, "span", 6);
            i0.ɵɵtext(2);
            i0.ɵɵelementStart(3, "span", 7);
            i0.ɵɵelementStart(4, "p");
            i0.ɵɵtext(5, "th");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "p");
            i0.ɵɵtext(7);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var day_r3 = ctx.$implicit;
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(3, _c1$3, day_r3.isSame(ctx_r0.today, "days")));
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", day_r3.format("D"), " ");
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate(day_r3.format("dddd"));
        }
    }
    function AxiomSchedulerWeekViewComponent_div_6_span_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "span");
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var hour_r4 = i0.ɵɵnextContext().$implicit;
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", hour_r4.start.format("HH:mm"), " ");
        }
    }
    function AxiomSchedulerWeekViewComponent_div_6_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div");
            i0.ɵɵelementStart(1, "div");
            i0.ɵɵtemplate(2, AxiomSchedulerWeekViewComponent_div_6_span_2_Template, 2, 1, "span", 8);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var index_r5 = ctx.index;
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", index_r5 > 0);
        }
    }
    function AxiomSchedulerWeekViewComponent_div_9_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "div", 9);
        }
        if (rf & 2) {
            var day_r8 = ctx.$implicit;
            var ctx_r2 = i0.ɵɵnextContext();
            i0.ɵɵproperty("hourColumn", false)("axEventTemplate", ctx_r2.axEventTemplate)("axEventFormatter", ctx_r2.axEventFormatter)("axEventToolbar", ctx_r2.axEventToolbar)("axDragStep", ctx_r2.axDragStep)("axStartDate", day_r8.toDate());
        }
    }
    var moment$8 = momentNs;
    var AxiomSchedulerWeekViewComponent = /** @class */ (function (_super) {
        __extends(AxiomSchedulerWeekViewComponent, _super);
        function AxiomSchedulerWeekViewComponent(injector) {
            return _super.call(this, injector) || this;
        }
        AxiomSchedulerWeekViewComponent.prototype.ngOnInit = function () {
            this.refresh();
            this.refreshView();
        };
        AxiomSchedulerWeekViewComponent.prototype.refreshView = function () {
            this.updateDays();
            this.setHours();
        };
        AxiomSchedulerWeekViewComponent.prototype.updateDays = function () {
            var startOfWeek = this.date.clone().startOf('isoWeek');
            var endOfWeek = this.date.clone().endOf('isoWeek');
            this.days = [];
            var day = startOfWeek;
            while (day <= endOfWeek) {
                this.days.push(day);
                day = day.clone().add(1, 'd');
            }
        };
        AxiomSchedulerWeekViewComponent.prototype.setHours = function () {
            this.hours = [];
            for (var hour = 0; hour <= 23; hour++) {
                this.hours.push(new AxiomSchedulerHour(this.date.clone().startOf('day').add(hour, 'hours')));
            }
        };
        return AxiomSchedulerWeekViewComponent;
    }(AxiomSchedulerComponentCommon));
    AxiomSchedulerWeekViewComponent.ɵfac = function AxiomSchedulerWeekViewComponent_Factory(t) { return new (t || AxiomSchedulerWeekViewComponent)(i0.ɵɵdirectiveInject(i0.Injector)); };
    AxiomSchedulerWeekViewComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AxiomSchedulerWeekViewComponent, selectors: [["", "ax-scheduler-week-view", ""]], hostAttrs: [1, "ax-scheduler__week-view"], features: [i0.ɵɵInheritDefinitionFeature], attrs: _c0$a, decls: 10, vars: 3, consts: [[1, "ax-scheduler__week-view__header"], [4, "ngFor", "ngForOf"], [1, "ax-scheduler__week-view__body"], [1, "ax-scheduler__week-view__body__hour-column"], [1, "ax-scheduler__week-view__body__day-column"], ["ax-scheduler-day-column", "", 3, "hourColumn", "axEventTemplate", "axEventFormatter", "axEventToolbar", "axDragStep", "axStartDate", 4, "ngFor", "ngForOf"], [1, "header_number", 3, "ngClass"], [1, "header_day_title"], [4, "ngIf"], ["ax-scheduler-day-column", "", 3, "hourColumn", "axEventTemplate", "axEventFormatter", "axEventToolbar", "axDragStep", "axStartDate"]], template: function AxiomSchedulerWeekViewComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵelement(1, "div");
                i0.ɵɵelementStart(2, "div");
                i0.ɵɵtemplate(3, AxiomSchedulerWeekViewComponent_div_3_Template, 8, 5, "div", 1);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(4, "div", 2);
                i0.ɵɵelementStart(5, "div", 3);
                i0.ɵɵtemplate(6, AxiomSchedulerWeekViewComponent_div_6_Template, 3, 1, "div", 1);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(7, "div", 4);
                i0.ɵɵelementStart(8, "div");
                i0.ɵɵtemplate(9, AxiomSchedulerWeekViewComponent_div_9_Template, 1, 6, "div", 5);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(3);
                i0.ɵɵproperty("ngForOf", ctx.days);
                i0.ɵɵadvance(3);
                i0.ɵɵproperty("ngForOf", ctx.hours);
                i0.ɵɵadvance(3);
                i0.ɵɵproperty("ngForOf", ctx.days);
            }
        }, directives: [i1.NgForOf, i1.NgClass, i1.NgIf, AxiomSchedulerDayColumnComponent], styles: ["@-webkit-keyframes slide-in-left{0%{opacity:0;transform:translateX(-100px)}to{opacity:1;transform:translateX(0)}}@keyframes slide-in-left{0%{opacity:0;transform:translateX(-1000px)}to{opacity:1;transform:translateX(0)}}@-webkit-keyframes slide-in-right{0%{opacity:0;transform:translateX(100px)}to{opacity:1;transform:translateX(0)}}@keyframes slide-in-right{0%{opacity:0;transform:translateX(100px)}to{opacity:1;transform:translateX(0)}}@-webkit-keyframes slit-in-vertical{0%{opacity:0;transform:translateZ(-800px) rotateY(90deg)}54%{opacity:1;transform:translateZ(-160px) rotateY(87deg)}to{transform:translateZ(0) rotateY(0)}}@keyframes slit-in-vertical{0%{opacity:0;transform:translateZ(-800px) rotateY(90deg)}54%{opacity:1;transform:translateZ(-160px) rotateY(87deg)}to{transform:translateZ(0) rotateY(0)}}@-webkit-keyframes flip-in-hor-bottom{0%{opacity:0;transform:rotateX(80deg)}to{opacity:1;transform:rotateX(0)}}@keyframes flip-in-hor-bottom{0%{opacity:0;transform:rotateX(80deg)}to{opacity:1;transform:rotateX(0)}}@-webkit-keyframes swing-in-top-fwd{0%{opacity:0;transform:rotateX(-100deg);transform-origin:top}to{opacity:1;transform:rotateX(0deg);transform-origin:top}}@keyframes swing-in-top-fwd{0%{opacity:0;transform:rotateX(-100deg);transform-origin:top}to{opacity:1;transform:rotateX(0deg);transform-origin:top}}@-webkit-keyframes pulse{0%{-webkit-box-shadow:0 0 0 0 rgba(204,169,44,.4)}70%{-webkit-box-shadow:0 0 0 10px rgba(204,169,44,0)}to{-webkit-box-shadow:0 0 0 0 rgba(204,169,44,0)}}@keyframes pulse{0%{box-shadow:0 0 0 0 rgba(204,169,44,.4)}70%{box-shadow:0 0 0 10px rgba(204,169,44,0)}to{box-shadow:0 0 0 0 rgba(204,169,44,0)}}@-webkit-keyframes animation-scale{0%{opacity:0;transform:scale(0)}to{opacity:1;transform:scale(1)}}@keyframes animation-scale{0%{opacity:0;transform:scale(0)}to{opacity:1;transform:scale(1)}}@-webkit-keyframes animation-rotate{0%{opacity:0;transform:translateX(50%) scale(0) rotate(-60deg)}to{opacity:1;transform:translateX(0) scale(1) rotate(0deg)}}@keyframes animation-rotate{0%{opacity:0;transform:translateX(50%) scale(0) rotate(-60deg)}to{opacity:1;transform:translateX(0) scale(1) rotate(0deg)}}@-webkit-keyframes animation-flip{0%{opacity:0;transform:rotateY(180deg)}to{opacity:1;transform:rotateY(0deg)}}@keyframes animation-flip{0%{opacity:0;transform:rotateY(180deg)}to{opacity:1;transform:rotateY(0deg)}}@-webkit-keyframes rotate-in-2-cw{0%{opacity:0;transform:rotate(-45deg)}to{opacity:1;transform:rotate(0)}}@keyframes rotate-in-2-cw{0%{opacity:0;transform:rotate(-45deg)}to{opacity:1;transform:rotate(0)}}@-webkit-keyframes slide-in-fwd-left{0%{opacity:0;transform:translateZ(-1400px) translateX(-1000px)}to{opacity:1;transform:translateZ(0) translateX(0)}}@keyframes slide-in-fwd-left{0%{opacity:0;transform:translateZ(-1400px) translateX(-1000px)}to{opacity:1;transform:translateZ(0) translateX(0)}}@-webkit-keyframes slide-in-fwd-center{0%{opacity:0;transform:translateZ(-1400px)}to{opacity:1;transform:translateZ(0)}}@keyframes slide-in-fwd-center{0%{opacity:0;transform:translateZ(-1400px)}to{opacity:1;transform:translateZ(0)}}@-webkit-keyframes flip-in-ver-right{0%{opacity:0;transform:rotateY(-80deg)}to{opacity:1;transform:rotateY(0)}}@keyframes flip-in-ver-right{0%{opacity:0;transform:rotateY(-80deg)}to{opacity:1;transform:rotateY(0)}}@-webkit-keyframes flip-in-ver-left{0%{opacity:0;transform:rotateY(80deg)}to{opacity:1;transform:rotateY(0)}}@keyframes flip-in-ver-left{0%{opacity:0;transform:rotateY(80deg)}to{opacity:1;transform:rotateY(0)}}@-webkit-keyframes fade-in-left{0%{opacity:0;transform:translateX(-30px)}to{opacity:1;transform:translateX(0)}}@keyframes fade-in-left{0%{opacity:0;transform:translateX(-30px)}to{opacity:1;transform:translateX(0)}}@-webkit-keyframes fade-in-right{0%{opacity:0;transform:translateX(30px)}to{opacity:1;transform:translateX(0)}}@keyframes fade-in-right{0%{opacity:0;transform:translateX(30px)}to{opacity:1;transform:translateX(0)}}@-webkit-keyframes slide-out-right{0%{opacity:1;transform:translateX(0)}to{opacity:0;transform:translateX(1000px)}}@keyframes slide-out-right{0%{opacity:1;transform:translateX(0)}to{opacity:0;transform:translateX(1000px)}}.ax-scheduler.animation1 .ax-scheduler__week-view__header>div>div,.ax-scheduler.animation4 .ax-scheduler__day-view__body{-webkit-animation:animation-scale .3s ease-in-out both;animation:animation-scale .3s ease-in-out both}.ax-scheduler.animation1 .ax-scheduler__day-view__body,.ax-scheduler.animation1 .ax-scheduler__day-view__header .header_number,.ax-scheduler.animation1 .ax-scheduler__month-view__day,.ax-scheduler.animation1 .ax-scheduler__year-view>div,.ax-scheduler.animation2 .ax-scheduler__day-view__header .header_number,.ax-scheduler.animation3 .ax-scheduler__day-view__header .header_number,.ax-scheduler.animation4 .ax-scheduler__day-view__header .header_number{-webkit-animation:animation-flip .3s cubic-bezier(.25,.25,.25,1.15) both;animation:animation-flip .3s cubic-bezier(.25,.25,.25,1.15) both}.ax-scheduler.animation2 .ax-scheduler__month-view__day,.ax-scheduler.animation2 .ax-scheduler__week-view__header>div>div,.ax-scheduler.animation2 .ax-scheduler__year-view>div{-webkit-animation:swing-in-top-fwd .3s cubic-bezier(.175,.885,.32,1.275) both;animation:swing-in-top-fwd .3s cubic-bezier(.175,.885,.32,1.275) both}.ax-scheduler.animation2 .ax-scheduler__day-view__body{-webkit-animation:slit-in-vertical .3s ease-out both;animation:slit-in-vertical .3s ease-out both}.ax-scheduler.animation3 .ax-scheduler__month-view__day,.ax-scheduler.animation3 .ax-scheduler__year-view>div{-webkit-animation:rotate-in-2-cw .3s cubic-bezier(.25,.46,.45,.94) both;animation:rotate-in-2-cw .3s cubic-bezier(.25,.46,.45,.94) both}.ax-scheduler.animation3 .ax-scheduler__day-view__body{-webkit-animation:slide-in-fwd-left .3s cubic-bezier(.25,.46,.45,.94) both;animation:slide-in-fwd-left .3s cubic-bezier(.25,.46,.45,.94) both}.ax-scheduler.animation3 .ax-scheduler__week-view__header>div>div,.ax-scheduler.animation4 .ax-scheduler__week-view__header>div>div{-webkit-animation:slide-in-fwd-center .4s cubic-bezier(.25,.46,.45,.94) both;animation:slide-in-fwd-center .4s cubic-bezier(.25,.46,.45,.94) both}.ax-scheduler.animation4 .ax-scheduler__month-view__day,.ax-scheduler.animation4 .ax-scheduler__year-view>div{-webkit-animation:flip-in-ver-right .3s cubic-bezier(.25,.46,.45,.94) both;animation:flip-in-ver-right .3s cubic-bezier(.25,.46,.45,.94) both}.ax-scheduler.default.backward .ax-scheduler__day-view__header .header_number,.ax-scheduler.default.backward .ax-scheduler__month-view__day,.ax-scheduler.default.backward .ax-scheduler__week-view__header>div>div,.ax-scheduler.default.backward .ax-scheduler__year-view>div{-webkit-animation:fade-in-left .2s cubic-bezier(.39,.575,.565,1) both;animation:fade-in-left .2s cubic-bezier(.39,.575,.565,1) both}.ax-scheduler.default.forward .ax-scheduler__day-view__header .header_number,.ax-scheduler.default.forward .ax-scheduler__month-view__day,.ax-scheduler.default.forward .ax-scheduler__week-view__header>div>div,.ax-scheduler.default.forward .ax-scheduler__year-view>div{-webkit-animation:fade-in-right .2s cubic-bezier(.39,.575,.565,1) both;animation:fade-in-right .2s cubic-bezier(.39,.575,.565,1) both}.ax-scheduler__month-view__day:first-child{-webkit-animation-delay:.03s;animation-delay:.03s}.ax-scheduler__month-view__day:nth-child(2){-webkit-animation-delay:.06s;animation-delay:.06s}.ax-scheduler__month-view__day:nth-child(3){-webkit-animation-delay:.09s;animation-delay:.09s}.ax-scheduler__month-view__day:nth-child(4){-webkit-animation-delay:.12s;animation-delay:.12s}.ax-scheduler__month-view__day:nth-child(5){-webkit-animation-delay:.15s;animation-delay:.15s}.ax-scheduler__month-view__day:nth-child(6){-webkit-animation-delay:.18s;animation-delay:.18s}.ax-scheduler__month-view__day:nth-child(7){-webkit-animation-delay:.21s;animation-delay:.21s}.ax-scheduler__month-view__day:nth-child(8){-webkit-animation-delay:.24s;animation-delay:.24s}.ax-scheduler__month-view__day:nth-child(9){-webkit-animation-delay:.27s;animation-delay:.27s}.ax-scheduler__month-view__day:nth-child(10){-webkit-animation-delay:.3s;animation-delay:.3s}.ax-scheduler__month-view__day:nth-child(11){-webkit-animation-delay:.33s;animation-delay:.33s}.ax-scheduler__month-view__day:nth-child(12){-webkit-animation-delay:.36s;animation-delay:.36s}.ax-scheduler__month-view__day:nth-child(13){-webkit-animation-delay:.39s;animation-delay:.39s}.ax-scheduler__month-view__day:nth-child(14){-webkit-animation-delay:.42s;animation-delay:.42s}.ax-scheduler__month-view__day:nth-child(15){-webkit-animation-delay:.45s;animation-delay:.45s}.ax-scheduler__month-view__day:nth-child(16){-webkit-animation-delay:.48s;animation-delay:.48s}.ax-scheduler__month-view__day:nth-child(17){-webkit-animation-delay:.51s;animation-delay:.51s}.ax-scheduler__month-view__day:nth-child(18){-webkit-animation-delay:.54s;animation-delay:.54s}.ax-scheduler__month-view__day:nth-child(19){-webkit-animation-delay:.57s;animation-delay:.57s}.ax-scheduler__month-view__day:nth-child(20){-webkit-animation-delay:.6s;animation-delay:.6s}.ax-scheduler__month-view__day:nth-child(21){-webkit-animation-delay:.63s;animation-delay:.63s}.ax-scheduler__month-view__day:nth-child(22){-webkit-animation-delay:.66s;animation-delay:.66s}.ax-scheduler__month-view__day:nth-child(23){-webkit-animation-delay:.69s;animation-delay:.69s}.ax-scheduler__month-view__day:nth-child(24){-webkit-animation-delay:.72s;animation-delay:.72s}.ax-scheduler__month-view__day:nth-child(25){-webkit-animation-delay:.75s;animation-delay:.75s}.ax-scheduler__month-view__day:nth-child(26){-webkit-animation-delay:.78s;animation-delay:.78s}.ax-scheduler__month-view__day:nth-child(27){-webkit-animation-delay:.81s;animation-delay:.81s}.ax-scheduler__month-view__day:nth-child(28){-webkit-animation-delay:.84s;animation-delay:.84s}.ax-scheduler__month-view__day:nth-child(29){-webkit-animation-delay:.87s;animation-delay:.87s}.ax-scheduler__month-view__day:nth-child(30){-webkit-animation-delay:.9s;animation-delay:.9s}.ax-scheduler__month-view__day:nth-child(31){-webkit-animation-delay:.93s;animation-delay:.93s}.ax-scheduler__month-view__day:nth-child(32){-webkit-animation-delay:.96s;animation-delay:.96s}.ax-scheduler__month-view__day:nth-child(33){-webkit-animation-delay:.99s;animation-delay:.99s}.ax-scheduler__month-view__day:nth-child(34){-webkit-animation-delay:1.02s;animation-delay:1.02s}.ax-scheduler__month-view__day:nth-child(35){-webkit-animation-delay:1.05s;animation-delay:1.05s}.ax-scheduler__month-view__day:nth-child(36){-webkit-animation-delay:1.08s;animation-delay:1.08s}.ax-scheduler__month-view__day:nth-child(37){-webkit-animation-delay:1.11s;animation-delay:1.11s}.ax-scheduler__month-view__day:nth-child(38){-webkit-animation-delay:1.14s;animation-delay:1.14s}.ax-scheduler__month-view__day:nth-child(39){-webkit-animation-delay:1.17s;animation-delay:1.17s}.ax-scheduler__month-view__day:nth-child(40){-webkit-animation-delay:1.2s;animation-delay:1.2s}.ax-scheduler__month-view__day:nth-child(41){-webkit-animation-delay:1.23s;animation-delay:1.23s}.ax-scheduler__month-view__day:nth-child(42){-webkit-animation-delay:1.26s;animation-delay:1.26s}.ax-scheduler__year-view>div:first-child{-webkit-animation-delay:.03s;animation-delay:.03s}.ax-scheduler__year-view>div:nth-child(2){-webkit-animation-delay:.06s;animation-delay:.06s}.ax-scheduler__year-view>div:nth-child(3){-webkit-animation-delay:.09s;animation-delay:.09s}.ax-scheduler__year-view>div:nth-child(4){-webkit-animation-delay:.12s;animation-delay:.12s}.ax-scheduler__year-view>div:nth-child(5){-webkit-animation-delay:.15s;animation-delay:.15s}.ax-scheduler__year-view>div:nth-child(6){-webkit-animation-delay:.18s;animation-delay:.18s}.ax-scheduler__year-view>div:nth-child(7){-webkit-animation-delay:.21s;animation-delay:.21s}.ax-scheduler__year-view>div:nth-child(8){-webkit-animation-delay:.24s;animation-delay:.24s}.ax-scheduler__year-view>div:nth-child(9){-webkit-animation-delay:.27s;animation-delay:.27s}.ax-scheduler__year-view>div:nth-child(10){-webkit-animation-delay:.3s;animation-delay:.3s}.ax-scheduler__year-view>div:nth-child(11){-webkit-animation-delay:.33s;animation-delay:.33s}.ax-scheduler__year-view>div:nth-child(12){-webkit-animation-delay:.36s;animation-delay:.36s}.ax-scheduler__day-view__body:first-child,.ax-scheduler__week-view__header>div>div:first-child{-webkit-animation-delay:.03s;animation-delay:.03s}.ax-scheduler__day-view__body:nth-child(2),.ax-scheduler__week-view__header>div>div:nth-child(2){-webkit-animation-delay:.06s;animation-delay:.06s}.ax-scheduler__day-view__body:nth-child(3),.ax-scheduler__week-view__header>div>div:nth-child(3){-webkit-animation-delay:.09s;animation-delay:.09s}.ax-scheduler__day-view__body:nth-child(4),.ax-scheduler__week-view__header>div>div:nth-child(4){-webkit-animation-delay:.12s;animation-delay:.12s}.ax-scheduler__day-view__body:nth-child(5),.ax-scheduler__week-view__header>div>div:nth-child(5){-webkit-animation-delay:.15s;animation-delay:.15s}.ax-scheduler__day-view__body:nth-child(6),.ax-scheduler__week-view__header>div>div:nth-child(6){-webkit-animation-delay:.18s;animation-delay:.18s}.ax-scheduler__day-view__body:nth-child(7),.ax-scheduler__week-view__header>div>div:nth-child(7){-webkit-animation-delay:.21s;animation-delay:.21s}.ax-scheduler.default .ax-scheduler__month-view__day:first-child,.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(2),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(3),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(4),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(5),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(6),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(7),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(8),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(9),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(10),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(11),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(12),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(13),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(14),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(15),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(16),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(17),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(18),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(19),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(20),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(21),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(22),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(23),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(24),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(25),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(26),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(27),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(28),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(29),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(30),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(31),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(32),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(33),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(34),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(35),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(36),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(37),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(38),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(39),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(40),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(41),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(42),.ax-scheduler.default .ax-scheduler__year-view>div:first-child,.ax-scheduler.default .ax-scheduler__year-view>div:nth-child(2),.ax-scheduler.default .ax-scheduler__year-view>div:nth-child(3),.ax-scheduler.default .ax-scheduler__year-view>div:nth-child(4),.ax-scheduler.default .ax-scheduler__year-view>div:nth-child(5),.ax-scheduler.default .ax-scheduler__year-view>div:nth-child(6),.ax-scheduler.default .ax-scheduler__year-view>div:nth-child(7),.ax-scheduler.default .ax-scheduler__year-view>div:nth-child(8),.ax-scheduler.default .ax-scheduler__year-view>div:nth-child(9),.ax-scheduler.default .ax-scheduler__year-view>div:nth-child(10),.ax-scheduler.default .ax-scheduler__year-view>div:nth-child(11),.ax-scheduler.default .ax-scheduler__year-view>div:nth-child(12){-webkit-animation-delay:0;animation-delay:0}::-webkit-scrollbar{height:5px;width:5px}::-webkit-scrollbar-track{background:#f1f1f1}::-webkit-scrollbar-thumb{background:#888}::-webkit-scrollbar-thumb:hover{background:#555}.ax-scheduler__week-view{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;display:block;height:100%;margin:0;padding:0;position:relative;user-select:none}.ax-scheduler__week-view .ax-scheduler__week-view__header{display:block;margin:0;padding:0;position:relative;width:100%}.ax-scheduler__week-view .ax-scheduler__week-view__body>div{border:none;display:inline-block;margin:0;padding:0;vertical-align:top}.ax-scheduler__week-view .ax-scheduler__week-view__body>.ax-scheduler__week-view__body__day-column{width:calc(100% - 50px)}.ax-scheduler__week-view .ax-scheduler__week-view__body>.ax-scheduler__week-view__body__day-column>div{display:table;width:100%}.ax-scheduler__week-view .ax-scheduler__week-view__body>.ax-scheduler__week-view__body__day-column>div>div{border-left:1px solid #fff;display:table-cell;height:60px;overflow:visible;width:auto;width:7%}.ax-scheduler__week-view .ax-scheduler__week-view__body>.ax-scheduler__week-view__body__day-column>div>div:first-child{border-left:none}.ax-scheduler__week-view .ax-scheduler__week-view__body>div.ax-scheduler__week-view__body__hour-column>div:not(.ax-scheduler__event-tile){border-bottom:1px solid #ddd;display:block;height:60px;margin:0;padding:0;position:relative;width:50px}.ax-scheduler__week-view .ax-scheduler__week-view__body>div.ax-scheduler__week-view__body__hour-column>div:not(.ax-scheduler__event-tile)>div{display:block;height:100%;margin:0;padding:0;position:relative}.ax-scheduler__week-view .ax-scheduler__week-view__body>div.ax-scheduler__week-view__body__hour-column>div:not(.ax-scheduler__event-tile)>div:first-child:not(.ax-scheduler__event-tile__box){max-width:50px;min-width:50px;text-align:right;width:50px}.ax-scheduler__week-view .ax-scheduler__week-view__body>div.ax-scheduler__week-view__body__hour-column>div:not(.ax-scheduler__event-tile)>div:first-child:not(.ax-scheduler__event-tile__box)>span{color:#444;font-size:12px;padding-left:5px;padding-right:5px;position:absolute;right:0;top:-9px;vertical-align:top;z-index:2}.ax-scheduler__week-view .ax-scheduler__week-view__body>div.ax-scheduler__week-view__body__hour-column>div:not(.ax-scheduler__event-tile)>div:first-child:not(.ax-scheduler__event-tile__box):after{background:#fff;content:\"\";height:1px;left:0;position:absolute;right:0;top:-1px}.ax-scheduler__week-view .ax-scheduler__week-view__header{background:transparent;display:flex;height:60px;outline:1px solid transparent}.ax-scheduler__week-view .ax-scheduler__week-view__header>div{display:inline-block;height:100%;margin:0;padding:0;position:relative;vertical-align:top}.ax-scheduler__week-view .ax-scheduler__week-view__header>div:first-child{max-width:50px;min-width:50px;width:50px}.ax-scheduler__week-view .ax-scheduler__week-view__header>div:last-child{display:table;width:100%}.ax-scheduler__week-view .ax-scheduler__week-view__header>div:last-child>div{border:none;display:table-cell;height:100%;width:7%}.ax-scheduler__week-view .ax-scheduler__week-view__header>div:last-child>div>span.header_number{color:#444;font-size:2.2em;font-weight:400;margin:0}.ax-scheduler__week-view .ax-scheduler__week-view__header>div:last-child>div>span.header_number.today{color:#e53935!important}.ax-scheduler__week-view .ax-scheduler__week-view__header>div:last-child>div>span.header_number>span.header_day_title{color:#444;display:inline-block;font-size:.3em;margin-left:-5px}.ax-scheduler__week-view .ax-scheduler__week-view__header>div:last-child>div>span.header_number>span.header_day_title>p{margin:0;padding:0}.ax-scheduler__week-view .ax-scheduler__week-view__header>div:last-child>div>span.header_month_year{display:block;font-size:11px;margin:0}.ax-scheduler__week-view .ax-scheduler__week-view__body{height:calc(100% - 60px);overflow-x:hidden;overflow-y:auto}"], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(AxiomSchedulerWeekViewComponent, [{
                type: i0.Component,
                args: [{
                        selector: '[ax-scheduler-week-view]',
                        templateUrl: './axiom-scheduler-week-view-component.component.html',
                        styleUrls: ['./axiom-scheduler-week-view-component.component.scss'],
                        encapsulation: i0.ViewEncapsulation.None,
                        host: {
                            'class': 'ax-scheduler__week-view'
                        }
                    }]
            }], function () { return [{ type: i0.Injector }]; }, null);
    })();

    var _c0$b = ["ax-scheduler-year-view", ""];
    function AxiomSchedulerYearViewComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div");
            i0.ɵɵelement(1, "div", 2);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var month_r2 = ctx.$implicit;
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("monthObject", month_r2)("axEventTemplate", ctx_r0.axEventTemplate)("axEventFormatter", ctx_r0.axEventFormatter)("axDragStep", ctx_r0.axDragStep)("axEventToolbar", ctx_r0.axEventToolbar)("axStartDate", ctx_r0.axStartDate);
        }
    }
    function AxiomSchedulerYearViewComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "div", 3);
        }
        if (rf & 2) {
            var ctx_r1 = i0.ɵɵnextContext();
            i0.ɵɵproperty("@slideInOutRight", undefined)("axEventTemplate", ctx_r1.axEventTemplate)("axEventToolbar", ctx_r1.axEventToolbar);
        }
    }
    var moment$9 = momentNs;
    var AxiomSchedulerYearViewMonthObject = /** @class */ (function () {
        function AxiomSchedulerYearViewMonthObject(month) {
            this.month = month.clone();
            this.setDays();
        }
        AxiomSchedulerYearViewMonthObject.prototype.setDays = function () {
            var monthSize = 42;
            var startOfMonth = this.month.clone().startOf('month');
            var endOfMonth = this.month.clone().endOf('month');
            this.days = [];
            var day = startOfMonth.clone();
            while (day <= endOfMonth) {
                this.days.push(day);
                day = day.clone().add(1, 'd');
            }
            if (startOfMonth.clone().get('d') < 6) {
                day = startOfMonth.clone();
                while (day.get('d') < 6) {
                    day = day.clone().add(-1, 'days');
                    this.days.unshift(day);
                }
            }
            if (this.days.length < monthSize) {
                var size = (monthSize - this.days.length);
                for (var index = 1; index <= size; index++) {
                    this.days.push(endOfMonth.clone().add(index, 'days'));
                }
            }
        };
        return AxiomSchedulerYearViewMonthObject;
    }());
    var AxiomSchedulerYearViewComponent = /** @class */ (function (_super) {
        __extends(AxiomSchedulerYearViewComponent, _super);
        function AxiomSchedulerYearViewComponent(injector) {
            var _this = _super.call(this, injector) || this;
            _this.sidebar = false;
            return _this;
        }
        AxiomSchedulerYearViewComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.subscriptionGarbageCollection.push(this.sidebarService.toggle.subscribe(function (toggle) {
                _this.sidebar = toggle;
            }));
            this.refresh();
            this.refreshView();
        };
        AxiomSchedulerYearViewComponent.prototype.refreshView = function () {
            this.setMonths();
        };
        AxiomSchedulerYearViewComponent.prototype.setMonths = function () {
            var startMonth = this.date.clone().startOf('year');
            var endMonth = this.date.clone().endOf('year');
            this.months = [];
            var month = startMonth.clone();
            while (month <= endMonth) {
                this.months.push(new AxiomSchedulerYearViewMonthObject(month));
                month = month.clone().add(1, 'month');
            }
        };
        return AxiomSchedulerYearViewComponent;
    }(AxiomSchedulerComponentCommon));
    AxiomSchedulerYearViewComponent.ɵfac = function AxiomSchedulerYearViewComponent_Factory(t) { return new (t || AxiomSchedulerYearViewComponent)(i0.ɵɵdirectiveInject(i0.Injector)); };
    AxiomSchedulerYearViewComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AxiomSchedulerYearViewComponent, selectors: [["", "ax-scheduler-year-view", ""]], hostAttrs: [1, "ax-scheduler__year-view"], features: [i0.ɵɵInheritDefinitionFeature], attrs: _c0$b, decls: 2, vars: 2, consts: [[4, "ngFor", "ngForOf"], ["ax-scheduler-sidebar", "", 3, "axEventTemplate", "axEventToolbar", 4, "ngIf"], ["ax-scheduler-month-tile", "", 3, "monthObject", "axEventTemplate", "axEventFormatter", "axDragStep", "axEventToolbar", "axStartDate"], ["ax-scheduler-sidebar", "", 3, "axEventTemplate", "axEventToolbar"]], template: function AxiomSchedulerYearViewComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵtemplate(0, AxiomSchedulerYearViewComponent_div_0_Template, 2, 6, "div", 0);
                i0.ɵɵtemplate(1, AxiomSchedulerYearViewComponent_div_1_Template, 1, 3, "div", 1);
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngForOf", ctx.months);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.sidebar);
            }
        }, styles: [""], encapsulation: 2, data: { animation: [
                animations.trigger('slideInOutRight', [
                    animations.transition(':enter', [
                        animations.style({ transform: 'translateX(-100%)' }),
                        animations.animate(120 + "ms ease-in-out", animations.style({ transform: 'translateX(0%)' }))
                    ]),
                    animations.transition(':leave', [
                        animations.animate(100 + "ms ease-in-out", animations.style({ transform: 'translateX(100%)' }))
                    ])
                ])
            ] } });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(AxiomSchedulerYearViewComponent, [{
                type: i0.Component,
                args: [{
                        selector: '[ax-scheduler-year-view]',
                        templateUrl: './axiom-scheduler-year-view.component.html',
                        styleUrls: ['./axiom-scheduler-year-view.component.scss'],
                        encapsulation: i0.ViewEncapsulation.None,
                        host: {
                            'class': 'ax-scheduler__year-view'
                        },
                        animations: [
                            animations.trigger('slideInOutRight', [
                                animations.transition(':enter', [
                                    animations.style({ transform: 'translateX(-100%)' }),
                                    animations.animate(120 + "ms ease-in-out", animations.style({ transform: 'translateX(0%)' }))
                                ]),
                                animations.transition(':leave', [
                                    animations.animate(100 + "ms ease-in-out", animations.style({ transform: 'translateX(100%)' }))
                                ])
                            ])
                        ]
                    }]
            }], function () { return [{ type: i0.Injector }]; }, null);
    })();

    function AxiomSchedulerDropdownComponent__svg_svg_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(0, "svg", 3);
            i0.ɵɵelementStart(1, "g", 4);
            i0.ɵɵelement(2, "polyline", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
    }
    function AxiomSchedulerDropdownComponent__svg_svg_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(0, "svg", 3);
            i0.ɵɵelementStart(1, "g", 6);
            i0.ɵɵelement(2, "polyline", 7);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
    }
    function AxiomSchedulerDropdownComponent_div_4_div_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r6_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 10);
            i0.ɵɵlistener("click", function AxiomSchedulerDropdownComponent_div_4_div_1_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r6_1); var item_r4 = ctx.$implicit; var ctx_r5 = i0.ɵɵnextContext(2); return ctx_r5.select(item_r4); });
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var item_r4 = ctx.$implicit;
            var ctx_r3 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", item_r4[ctx_r3.dataTitle], " ");
        }
    }
    function AxiomSchedulerDropdownComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 8);
            i0.ɵɵtemplate(1, AxiomSchedulerDropdownComponent_div_4_div_1_Template, 2, 1, "div", 9);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r2 = i0.ɵɵnextContext();
            i0.ɵɵproperty("@dropdownAnimation", undefined);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx_r2.items);
        }
    }
    var AxiomSchedulerDropdownComponent = /** @class */ (function () {
        function AxiomSchedulerDropdownComponent(_element) {
            this._element = _element;
            this.items = [];
            this.ngModelChange = new i0.EventEmitter();
            this.destroyed = new rxjs.ReplaySubject(1);
            this.propagateChange = function (_) { };
            this.onTouched = function () { };
        }
        Object.defineProperty(AxiomSchedulerDropdownComponent.prototype, "ngModel", {
            get: function () {
                return this._ngModel;
            },
            set: function (ngModel) {
                this._ngModel = ngModel;
            },
            enumerable: false,
            configurable: true
        });
        AxiomSchedulerDropdownComponent.prototype.ngOnInit = function () {
        };
        AxiomSchedulerDropdownComponent.prototype.ngOnDestroy = function () {
            this.destroyEventObserver();
        };
        AxiomSchedulerDropdownComponent.prototype.onChange = function () {
            this.propagateChange(this.ngModel);
        };
        AxiomSchedulerDropdownComponent.prototype.writeValue = function (obj) {
            this.ngModel = obj;
        };
        AxiomSchedulerDropdownComponent.prototype.registerOnChange = function (fn) {
            this.propagateChange = fn;
        };
        AxiomSchedulerDropdownComponent.prototype.registerOnTouched = function (fn) {
            this.onTouched = fn;
        };
        AxiomSchedulerDropdownComponent.prototype.toggle = function (toggle) {
            if (toggle === void 0) { toggle = !this.open; }
            this.open = toggle;
            if (this.open) {
                this.setEventObserver();
            }
            else {
                this.destroyEventObserver();
            }
        };
        AxiomSchedulerDropdownComponent.prototype.inputFormatter = function () {
            var _this = this;
            if (this.ngModel) {
                var index = this.items.findIndex(function (i) { return i[_this.dataId] === _this.ngModel; });
                if (index > -1) {
                    return this.items[index][this.dataTitle];
                }
            }
            else {
                return '';
            }
        };
        AxiomSchedulerDropdownComponent.prototype.select = function (item) {
            this.ngModel = this.modelFormatter ? this.modelFormatter(item) : item;
            this.propagateChange(this.ngModel);
            this.toggle(false);
        };
        AxiomSchedulerDropdownComponent.prototype.closeOnGlobalClick = function (targetElement) {
            if (targetElement) {
                var arrow = targetElement.id === 'ax-dropdown-arr';
                var clickedInside = this._element.nativeElement.contains(targetElement);
                if (!clickedInside && !arrow) {
                    this.toggle(false);
                }
            }
        };
        AxiomSchedulerDropdownComponent.prototype.closeOnGlobalKeydown = function (event) {
            if (event.keyCode === 27) {
                this.toggle(false);
            }
        };
        AxiomSchedulerDropdownComponent.prototype.setEventObserver = function () {
            var _this = this;
            this.destroyed = new rxjs.ReplaySubject(1);
            rxjs.fromEvent(document, 'click').pipe(operators.takeUntil(this.destroyed)).subscribe(function (event) { return _this.closeOnGlobalClick(event.target); });
            rxjs.fromEvent(document, 'keydown').pipe(operators.takeUntil(this.destroyed)).subscribe(function (event) { return _this.closeOnGlobalKeydown(event); });
        };
        AxiomSchedulerDropdownComponent.prototype.destroyEventObserver = function () {
            if (this.destroyed) {
                this.destroyed.next(true);
                this.destroyed.complete();
            }
        };
        return AxiomSchedulerDropdownComponent;
    }());
    AxiomSchedulerDropdownComponent.ɵfac = function AxiomSchedulerDropdownComponent_Factory(t) { return new (t || AxiomSchedulerDropdownComponent)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
    AxiomSchedulerDropdownComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AxiomSchedulerDropdownComponent, selectors: [["ax-scheduler-dropdown"]], hostAttrs: [1, "ax-scheduler-dropdown"], hostVars: 2, hostBindings: function AxiomSchedulerDropdownComponent_HostBindings(rf, ctx) {
            if (rf & 2) {
                i0.ɵɵclassProp("open", ctx.open);
            }
        }, inputs: { dataTitle: "dataTitle", dataId: "dataId", items: "items", modelFormatter: "modelFormatter", ngModel: "ngModel" }, outputs: { ngModelChange: "ngModelChange" }, features: [i0.ɵɵProvidersFeature([
                {
                    provide: i2.NG_VALUE_ACCESSOR,
                    useExisting: i0.forwardRef(function () { return AxiomSchedulerDropdownComponent; }),
                    multi: true
                }
            ])], decls: 5, vars: 4, consts: [[1, "ax-scheduler-dropdown__model", 3, "click"], ["id", "ax-dropdown-arr", "height", "24px", "version", "1.1", "viewBox", "0 0 24 24", "width", "24px", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", 4, "ngIf"], ["class", "ax-scheduler-dropdown__list", 4, "ngIf"], ["id", "ax-dropdown-arr", "height", "24px", "version", "1.1", "viewBox", "0 0 24 24", "width", "24px", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink"], ["id", "ax-dropdown-arr", "fill", "none", "fill-rule", "evenodd", "id", "icon/chevron-bottom", "stroke", "none", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "1"], ["id", "ax-dropdown-arr", "id", "lineart", "points", "20.5 7.5 11.5 16.5 2.5 7.5", "stroke", "#000000"], ["id", "ax-dropdown-arr", "fill", "none", "fill-rule", "evenodd", "id", "icon/chevron-top", "stroke", "none", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "1"], ["id", "ax-dropdown-arr", "id", "lineart", "points", "20.5 15.5 11.5 6.5 2.5 15.5", "stroke", "#000000"], [1, "ax-scheduler-dropdown__list"], [3, "click", 4, "ngFor", "ngForOf"], [3, "click"]], template: function AxiomSchedulerDropdownComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵlistener("click", function AxiomSchedulerDropdownComponent_Template_div_click_0_listener() { return ctx.toggle(); });
                i0.ɵɵtext(1);
                i0.ɵɵtemplate(2, AxiomSchedulerDropdownComponent__svg_svg_2_Template, 3, 0, "svg", 1);
                i0.ɵɵtemplate(3, AxiomSchedulerDropdownComponent__svg_svg_3_Template, 3, 0, "svg", 1);
                i0.ɵɵelementEnd();
                i0.ɵɵtemplate(4, AxiomSchedulerDropdownComponent_div_4_Template, 2, 2, "div", 2);
            }
            if (rf & 2) {
                i0.ɵɵadvance(1);
                i0.ɵɵtextInterpolate1(" ", ctx.inputFormatter(), " ");
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", !ctx.open);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.open);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.open);
            }
        }, directives: [i1.NgIf, i1.NgForOf], styles: [".ax-scheduler-dropdown{display:inline-block;margin:0;padding:0;position:relative;width:auto}.ax-scheduler-dropdown.open .ax-scheduler-dropdown__model{border-bottom:none;border-radius:5px 5px 0 0}.ax-scheduler-dropdown .ax-scheduler-dropdown__model{border:1px solid #ddd;border-radius:5px;display:block;margin:0;min-width:100px;padding:5px 13px 5px 8px;width:100%}.ax-scheduler-dropdown .ax-scheduler-dropdown__model svg{float:right;height:16px;position:relative;right:-7px;top:2px;width:16px}.ax-scheduler-dropdown .ax-scheduler-dropdown__list{background-color:#fff;border:1px solid #ddd;border-radius:0 0 5px 5px;border-top:none;box-shadow:0 8px 16px 0 rgba(0,0,0,.2);display:flex;flex-direction:column;margin:0;max-height:300px;overflow:auto;padding:0;position:relative;z-index:100}.ax-scheduler-dropdown .ax-scheduler-dropdown__list div{cursor:pointer;flex:1;font-size:13px;padding:5px 8px;text-align:left}.ax-scheduler-dropdown .ax-scheduler-dropdown__list div:hover{background-color:#eee}.ax-scheduler-dropdown .ax-scheduler-dropdown__list div:last-child{border-radius:0 0 5px 5px}"], encapsulation: 2, data: { animation: [
                animations.trigger('dropdownAnimation', [
                    animations.transition(':leave', [
                        animations.animate(80 + "ms ease-in-out", animations.style({ transform: 'scale(0)' }))
                    ])
                ])
            ] } });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(AxiomSchedulerDropdownComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'ax-scheduler-dropdown',
                        templateUrl: './axiom-scheduler-dropdown.component.html',
                        styleUrls: ['./axiom-scheduler-dropdown.component.scss'],
                        encapsulation: i0.ViewEncapsulation.None,
                        providers: [
                            {
                                provide: i2.NG_VALUE_ACCESSOR,
                                useExisting: i0.forwardRef(function () { return AxiomSchedulerDropdownComponent; }),
                                multi: true
                            }
                        ],
                        host: {
                            'class': 'ax-scheduler-dropdown',
                            '[class.open]': 'open'
                        },
                        animations: [
                            animations.trigger('dropdownAnimation', [
                                animations.transition(':leave', [
                                    animations.animate(80 + "ms ease-in-out", animations.style({ transform: 'scale(0)' }))
                                ])
                            ])
                        ]
                    }]
            }], function () { return [{ type: i0.ElementRef }]; }, { dataTitle: [{
                    type: i0.Input
                }], dataId: [{
                    type: i0.Input
                }], items: [{
                    type: i0.Input
                }], modelFormatter: [{
                    type: i0.Input
                }], ngModel: [{
                    type: i0.Input
                }], ngModelChange: [{
                    type: i0.Output
                }] });
    })();

    var AxiomSchedulerModule = /** @class */ (function () {
        function AxiomSchedulerModule() {
        }
        return AxiomSchedulerModule;
    }());
    AxiomSchedulerModule.ɵmod = i0.ɵɵdefineNgModule({ type: AxiomSchedulerModule });
    AxiomSchedulerModule.ɵinj = i0.ɵɵdefineInjector({ factory: function AxiomSchedulerModule_Factory(t) { return new (t || AxiomSchedulerModule)(); }, imports: [[
                i1.CommonModule,
                i2.FormsModule,
                i3.AngularDraggableModule
            ]] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AxiomSchedulerModule, { declarations: [AxiomSchedulerComponent,
                AxiomSchedulerDayViewComponent,
                AxiomSchedulerHourComponent,
                AxiomSchedulerEventComponent,
                AxiomSchedulerWeekViewComponent,
                AxiomSchedulerDayColumnComponent,
                AxiomSchedulerMonthViewComponent,
                AxiomSchedulerDayTileComponent,
                AxiomSchedulerDropdownComponent,
                AxiomSchedulerYearViewComponent,
                AxiomSchedulerMonthTileComponent,
                AxiomSchedulerMonthTileDayComponent,
                AxiomSchedulerSidebarComponent], imports: [i1.CommonModule,
                i2.FormsModule,
                i3.AngularDraggableModule], exports: [AxiomSchedulerComponent,
                AxiomSchedulerDayViewComponent,
                AxiomSchedulerHourComponent,
                AxiomSchedulerEventComponent,
                AxiomSchedulerWeekViewComponent,
                AxiomSchedulerDayColumnComponent,
                AxiomSchedulerMonthViewComponent,
                AxiomSchedulerDayTileComponent,
                AxiomSchedulerDropdownComponent,
                AxiomSchedulerYearViewComponent,
                AxiomSchedulerMonthTileComponent,
                AxiomSchedulerMonthTileDayComponent,
                AxiomSchedulerSidebarComponent] });
    })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(AxiomSchedulerModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            AxiomSchedulerComponent,
                            AxiomSchedulerDayViewComponent,
                            AxiomSchedulerHourComponent,
                            AxiomSchedulerEventComponent,
                            AxiomSchedulerWeekViewComponent,
                            AxiomSchedulerDayColumnComponent,
                            AxiomSchedulerMonthViewComponent,
                            AxiomSchedulerDayTileComponent,
                            AxiomSchedulerDropdownComponent,
                            AxiomSchedulerYearViewComponent,
                            AxiomSchedulerMonthTileComponent,
                            AxiomSchedulerMonthTileDayComponent,
                            AxiomSchedulerSidebarComponent
                        ],
                        imports: [
                            i1.CommonModule,
                            i2.FormsModule,
                            i3.AngularDraggableModule
                        ],
                        exports: [
                            AxiomSchedulerComponent,
                            AxiomSchedulerDayViewComponent,
                            AxiomSchedulerHourComponent,
                            AxiomSchedulerEventComponent,
                            AxiomSchedulerWeekViewComponent,
                            AxiomSchedulerDayColumnComponent,
                            AxiomSchedulerMonthViewComponent,
                            AxiomSchedulerDayTileComponent,
                            AxiomSchedulerDropdownComponent,
                            AxiomSchedulerYearViewComponent,
                            AxiomSchedulerMonthTileComponent,
                            AxiomSchedulerMonthTileDayComponent,
                            AxiomSchedulerSidebarComponent
                        ]
                    }]
            }], null, null);
    })();
    i0.ɵɵsetComponentScope(AxiomSchedulerComponent, [i1.NgClass, i1.NgComponentOutlet, i1.NgForOf, i1.NgIf, i1.NgTemplateOutlet, i1.NgStyle, i1.NgSwitch, i1.NgSwitchCase, i1.NgSwitchDefault, i1.NgPlural, i1.NgPluralCase, i2.ɵangular_packages_forms_forms_y, i2.NgSelectOption, i2.ɵangular_packages_forms_forms_x, i2.DefaultValueAccessor, i2.NumberValueAccessor, i2.RangeValueAccessor, i2.CheckboxControlValueAccessor, i2.SelectControlValueAccessor, i2.SelectMultipleControlValueAccessor, i2.RadioControlValueAccessor, i2.NgControlStatus, i2.NgControlStatusGroup, i2.RequiredValidator, i2.MinLengthValidator, i2.MaxLengthValidator, i2.PatternValidator, i2.CheckboxRequiredValidator, i2.EmailValidator, i2.NgModel, i2.NgModelGroup, i2.NgForm, i3.AngularDraggableDirective, i3.AngularResizableDirective, AxiomSchedulerComponent,
        AxiomSchedulerDayViewComponent,
        AxiomSchedulerHourComponent,
        AxiomSchedulerEventComponent,
        AxiomSchedulerWeekViewComponent,
        AxiomSchedulerDayColumnComponent,
        AxiomSchedulerMonthViewComponent,
        AxiomSchedulerDayTileComponent,
        AxiomSchedulerDropdownComponent,
        AxiomSchedulerYearViewComponent,
        AxiomSchedulerMonthTileComponent,
        AxiomSchedulerMonthTileDayComponent,
        AxiomSchedulerSidebarComponent], [i1.AsyncPipe, i1.UpperCasePipe, i1.LowerCasePipe, i1.JsonPipe, i1.SlicePipe, i1.DecimalPipe, i1.PercentPipe, i1.TitleCasePipe, i1.CurrencyPipe, i1.DatePipe, i1.I18nPluralPipe, i1.I18nSelectPipe, i1.KeyValuePipe]);
    i0.ɵɵsetComponentScope(AxiomSchedulerDayViewComponent, [i1.NgClass, i1.NgComponentOutlet, i1.NgForOf, i1.NgIf, i1.NgTemplateOutlet, i1.NgStyle, i1.NgSwitch, i1.NgSwitchCase, i1.NgSwitchDefault, i1.NgPlural, i1.NgPluralCase, i2.ɵangular_packages_forms_forms_y, i2.NgSelectOption, i2.ɵangular_packages_forms_forms_x, i2.DefaultValueAccessor, i2.NumberValueAccessor, i2.RangeValueAccessor, i2.CheckboxControlValueAccessor, i2.SelectControlValueAccessor, i2.SelectMultipleControlValueAccessor, i2.RadioControlValueAccessor, i2.NgControlStatus, i2.NgControlStatusGroup, i2.RequiredValidator, i2.MinLengthValidator, i2.MaxLengthValidator, i2.PatternValidator, i2.CheckboxRequiredValidator, i2.EmailValidator, i2.NgModel, i2.NgModelGroup, i2.NgForm, i3.AngularDraggableDirective, i3.AngularResizableDirective, AxiomSchedulerComponent,
        AxiomSchedulerDayViewComponent,
        AxiomSchedulerHourComponent,
        AxiomSchedulerEventComponent,
        AxiomSchedulerWeekViewComponent,
        AxiomSchedulerDayColumnComponent,
        AxiomSchedulerMonthViewComponent,
        AxiomSchedulerDayTileComponent,
        AxiomSchedulerDropdownComponent,
        AxiomSchedulerYearViewComponent,
        AxiomSchedulerMonthTileComponent,
        AxiomSchedulerMonthTileDayComponent,
        AxiomSchedulerSidebarComponent], [i1.AsyncPipe, i1.UpperCasePipe, i1.LowerCasePipe, i1.JsonPipe, i1.SlicePipe, i1.DecimalPipe, i1.PercentPipe, i1.TitleCasePipe, i1.CurrencyPipe, i1.DatePipe, i1.I18nPluralPipe, i1.I18nSelectPipe, i1.KeyValuePipe]);
    i0.ɵɵsetComponentScope(AxiomSchedulerYearViewComponent, [i1.NgClass, i1.NgComponentOutlet, i1.NgForOf, i1.NgIf, i1.NgTemplateOutlet, i1.NgStyle, i1.NgSwitch, i1.NgSwitchCase, i1.NgSwitchDefault, i1.NgPlural, i1.NgPluralCase, i2.ɵangular_packages_forms_forms_y, i2.NgSelectOption, i2.ɵangular_packages_forms_forms_x, i2.DefaultValueAccessor, i2.NumberValueAccessor, i2.RangeValueAccessor, i2.CheckboxControlValueAccessor, i2.SelectControlValueAccessor, i2.SelectMultipleControlValueAccessor, i2.RadioControlValueAccessor, i2.NgControlStatus, i2.NgControlStatusGroup, i2.RequiredValidator, i2.MinLengthValidator, i2.MaxLengthValidator, i2.PatternValidator, i2.CheckboxRequiredValidator, i2.EmailValidator, i2.NgModel, i2.NgModelGroup, i2.NgForm, i3.AngularDraggableDirective, i3.AngularResizableDirective, AxiomSchedulerComponent,
        AxiomSchedulerDayViewComponent,
        AxiomSchedulerHourComponent,
        AxiomSchedulerEventComponent,
        AxiomSchedulerWeekViewComponent,
        AxiomSchedulerDayColumnComponent,
        AxiomSchedulerMonthViewComponent,
        AxiomSchedulerDayTileComponent,
        AxiomSchedulerDropdownComponent,
        AxiomSchedulerYearViewComponent,
        AxiomSchedulerMonthTileComponent,
        AxiomSchedulerMonthTileDayComponent,
        AxiomSchedulerSidebarComponent], [i1.AsyncPipe, i1.UpperCasePipe, i1.LowerCasePipe, i1.JsonPipe, i1.SlicePipe, i1.DecimalPipe, i1.PercentPipe, i1.TitleCasePipe, i1.CurrencyPipe, i1.DatePipe, i1.I18nPluralPipe, i1.I18nSelectPipe, i1.KeyValuePipe]);

    /*
     * Public API Surface of axiom-scheduler
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.AX_LOCALES = AX_LOCALES;
    exports.AxiomSchedulerComponent = AxiomSchedulerComponent;
    exports.AxiomSchedulerComponentCommon = AxiomSchedulerComponentCommon;
    exports.AxiomSchedulerDayColumnComponent = AxiomSchedulerDayColumnComponent;
    exports.AxiomSchedulerDayTileComponent = AxiomSchedulerDayTileComponent;
    exports.AxiomSchedulerDayViewComponent = AxiomSchedulerDayViewComponent;
    exports.AxiomSchedulerDropdownComponent = AxiomSchedulerDropdownComponent;
    exports.AxiomSchedulerEvent = AxiomSchedulerEvent;
    exports.AxiomSchedulerEventComponent = AxiomSchedulerEventComponent;
    exports.AxiomSchedulerHour = AxiomSchedulerHour;
    exports.AxiomSchedulerHourComponent = AxiomSchedulerHourComponent;
    exports.AxiomSchedulerModule = AxiomSchedulerModule;
    exports.AxiomSchedulerMonthTileComponent = AxiomSchedulerMonthTileComponent;
    exports.AxiomSchedulerMonthTileDayComponent = AxiomSchedulerMonthTileDayComponent;
    exports.AxiomSchedulerMonthViewComponent = AxiomSchedulerMonthViewComponent;
    exports.AxiomSchedulerService = AxiomSchedulerService;
    exports.AxiomSchedulerSidebarComponent = AxiomSchedulerSidebarComponent;
    exports.AxiomSchedulerSidebarService = AxiomSchedulerSidebarService;
    exports.AxiomSchedulerWeekViewComponent = AxiomSchedulerWeekViewComponent;
    exports.AxiomSchedulerYearViewComponent = AxiomSchedulerYearViewComponent;
    exports.AxiomSchedulerYearViewMonthObject = AxiomSchedulerYearViewMonthObject;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=axiom-scheduler.umd.js.map
