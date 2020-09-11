import { ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, ɵɵgetCurrentView, ɵɵelementStart, ɵɵlistener, ɵɵrestoreView, ɵɵnextContext, ɵɵtext, ɵɵelementEnd, ɵɵproperty, ɵɵpureFunction1, ɵɵadvance, ɵɵtextInterpolate1, ɵɵelement, ɵɵdirectiveInject, Injector, ɵɵdefineDirective, Directive, Input, EventEmitter, ElementRef, Renderer2, ɵɵdefineComponent, ɵɵProvidersFeature, ɵɵInheritDefinitionFeature, ɵɵnamespaceSVG, ɵɵnamespaceHTML, ɵɵtemplate, ɵɵtextInterpolate, ɵɵtextInterpolate2, Component, ViewEncapsulation, Output, ɵɵelementContainer, ɵɵelementContainerStart, ɵɵelementContainerEnd, ɵɵclassProp, ɵɵreference, ɵɵpureFunction2, forwardRef, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule, ɵɵsetComponentScope } from '@angular/core';
import * as momentNs from 'moment';
import { Subject, ReplaySubject, fromEvent } from 'rxjs';
import { NgIf, NgTemplateOutlet, NgForOf, NgClass, CommonModule, NgComponentOutlet, NgStyle, NgSwitch, NgSwitchCase, NgSwitchDefault, NgPlural, NgPluralCase, AsyncPipe, UpperCasePipe, LowerCasePipe, JsonPipe, SlicePipe, DecimalPipe, PercentPipe, TitleCasePipe, CurrencyPipe, DatePipe, I18nPluralPipe, I18nSelectPipe, KeyValuePipe } from '@angular/common';
import { AngularDraggableDirective, AngularResizableDirective, AngularDraggableModule } from 'angular2-draggable';
import { trigger, transition, style, animate } from '@angular/animations';
import { takeUntil } from 'rxjs/operators';
import { NG_VALUE_ACCESSOR, FormsModule, ɵangular_packages_forms_forms_y, NgSelectOption, ɵangular_packages_forms_forms_x, DefaultValueAccessor, NumberValueAccessor, RangeValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, SelectMultipleControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinLengthValidator, MaxLengthValidator, PatternValidator, CheckboxRequiredValidator, EmailValidator, NgModel, NgModelGroup, NgForm } from '@angular/forms';

const AX_LOCALES = [
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

const moment = momentNs;
class AxiomSchedulerService {
    constructor() {
        this._defaultLocale = 'en';
        this.schedulerLocale = this._defaultLocale;
        this.axEvents = [];
        this.refershRequest = new Subject();
        this.locale = new Subject();
        this.eventChange = new Subject();
        this.eventClick = new Subject();
        this.eventDeleteClick = new Subject();
        this.eventEditClick = new Subject();
    }
    refreshDate(date) {
        date && this.refershRequest.next(date);
    }
    changeLocale(locale) {
        this.schedulerLocale = locale || this._defaultLocale;
        this.locale.next(this.schedulerLocale);
    }
    eventChanged(event) {
        event && this.eventChange.next(event);
    }
    eventClicked(event) {
        event && this.eventClick.next(event);
    }
}
AxiomSchedulerService.ɵfac = function AxiomSchedulerService_Factory(t) { return new (t || AxiomSchedulerService)(); };
AxiomSchedulerService.ɵprov = ɵɵdefineInjectable({ token: AxiomSchedulerService, factory: AxiomSchedulerService.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(AxiomSchedulerService, [{
        type: Injectable
    }], function () { return []; }, null); })();

class AxiomSchedulerSidebarService {
    constructor() {
        this.data = new Subject();
        this.toggle = new Subject();
    }
    open(data) {
        this.toggle.next(true);
        setTimeout(() => {
            this.data.next(data);
        }, 200);
    }
    close() {
        this.toggle.next(false);
    }
}
AxiomSchedulerSidebarService.ɵfac = function AxiomSchedulerSidebarService_Factory(t) { return new (t || AxiomSchedulerSidebarService)(); };
AxiomSchedulerSidebarService.ɵprov = ɵɵdefineInjectable({ token: AxiomSchedulerSidebarService, factory: AxiomSchedulerSidebarService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(AxiomSchedulerSidebarService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

const _c0 = function (a0) { return { "active": a0 }; };
function AxiomSchedulerComponent_button_18_Template(rf, ctx) { if (rf & 1) {
    const _r8 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 20);
    ɵɵlistener("click", function AxiomSchedulerComponent_button_18_Template_button_click_0_listener() { ɵɵrestoreView(_r8); const view_r6 = ctx.$implicit; const ctx_r7 = ɵɵnextContext(); return ctx_r7.changeView(view_r6); });
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const view_r6 = ctx.$implicit;
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngClass", ɵɵpureFunction1(2, _c0, ctx_r0.axSchedulerView === view_r6.id));
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", view_r6.title, " ");
} }
function AxiomSchedulerComponent_ax_scheduler_dropdown_21_Template(rf, ctx) { if (rf & 1) {
    const _r10 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "ax-scheduler-dropdown", 21);
    ɵɵlistener("ngModelChange", function AxiomSchedulerComponent_ax_scheduler_dropdown_21_Template_ax_scheduler_dropdown_ngModelChange_0_listener($event) { ɵɵrestoreView(_r10); const ctx_r9 = ɵɵnextContext(); return ctx_r9.axLocale = $event; })("ngModelChange", function AxiomSchedulerComponent_ax_scheduler_dropdown_21_Template_ax_scheduler_dropdown_ngModelChange_0_listener($event) { ɵɵrestoreView(_r10); const ctx_r11 = ɵɵnextContext(); return ctx_r11.setLocale($event); });
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngModel", ctx_r1.axLocale)("modelFormatter", ctx_r1.modelFormatter)("items", ctx_r1.locales)("dataTitle", "title")("dataId", "id");
} }
function AxiomSchedulerComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "div", 22);
} if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("axEventTemplate", ctx_r2.axEventTemplate)("axEventFormatter", ctx_r2.axEventFormatter)("axDragStep", ctx_r2.axDragStep)("axStartDate", ctx_r2.date.toDate())("axEventToolbar", ctx_r2.axEventToolbar);
} }
function AxiomSchedulerComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "div", 23);
} if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵproperty("axEventTemplate", ctx_r3.axEventTemplate)("axEventFormatter", ctx_r3.axEventFormatter)("axDragStep", ctx_r3.axDragStep)("axStartDate", ctx_r3.date.toDate())("axEventToolbar", ctx_r3.axEventToolbar);
} }
function AxiomSchedulerComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "div", 24);
} if (rf & 2) {
    const ctx_r4 = ɵɵnextContext();
    ɵɵproperty("axEventTemplate", ctx_r4.axEventTemplate)("axEventFormatter", ctx_r4.axEventFormatter)("axDragStep", ctx_r4.axDragStep)("axStartDate", ctx_r4.date.toDate())("axEventToolbar", ctx_r4.axEventToolbar);
} }
function AxiomSchedulerComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "div", 25);
} if (rf & 2) {
    const ctx_r5 = ɵɵnextContext();
    ɵɵproperty("axEventTemplate", ctx_r5.axEventTemplate)("axEventFormatter", ctx_r5.axEventFormatter)("axDragStep", ctx_r5.axDragStep)("axStartDate", ctx_r5.date.toDate())("axEventToolbar", ctx_r5.axEventToolbar);
} }
const moment$1 = momentNs;
var AxiomSchedulerView;
(function (AxiomSchedulerView) {
    AxiomSchedulerView["Day"] = "day";
    AxiomSchedulerView["Week"] = "week";
    AxiomSchedulerView["Month"] = "month";
    AxiomSchedulerView["Year"] = "year";
})(AxiomSchedulerView || (AxiomSchedulerView = {}));
var AxiomSchedulerAnimation;
(function (AxiomSchedulerAnimation) {
    AxiomSchedulerAnimation["Animation1"] = "animation1";
    AxiomSchedulerAnimation["Animation2"] = "animation2";
    AxiomSchedulerAnimation["Animation3"] = "animation3";
    AxiomSchedulerAnimation["Animation4"] = "animation4";
    AxiomSchedulerAnimation["Default"] = "default";
    AxiomSchedulerAnimation["None"] = "none";
})(AxiomSchedulerAnimation || (AxiomSchedulerAnimation = {}));
class AxiomSchedulerComponentCommon {
    constructor(injector) {
        this.injector = injector;
        this.axDragStep = 5;
        this.axEventToolbar = true;
        this.subscriptionGarbageCollection = [];
        this.today = moment$1();
        this.service = this.injector.get(AxiomSchedulerService);
        this.sidebarService = this.injector.get(AxiomSchedulerSidebarService);
        this.subscriptionGarbageCollection.push(this.service.refershRequest.subscribe((s) => {
            if (s) {
                this.date = s.clone();
                this.date.locale(this.service.schedulerLocale);
                this.refreshView();
            }
        }));
        this.subscriptionGarbageCollection.push(this.service.locale.subscribe((locale) => {
            moment$1.locale(locale);
            if (this.date) {
                this.date.locale(this.service.schedulerLocale);
                this.refreshView();
            }
        }));
    }
    refresh() {
        this.date = this.axStartDate
            ? moment$1(this.axStartDate)
            : moment$1(Date.now());
    }
    refreshView() { }
    ngOnDestroy() {
        if (Array.isArray(this.subscriptionGarbageCollection)) {
            this.subscriptionGarbageCollection.forEach((g) => g && g.unsubscribe());
        }
        this.baseDestroy();
    }
    baseDestroy() { }
}
AxiomSchedulerComponentCommon.ɵfac = function AxiomSchedulerComponentCommon_Factory(t) { return new (t || AxiomSchedulerComponentCommon)(ɵɵdirectiveInject(Injector)); };
AxiomSchedulerComponentCommon.ɵdir = ɵɵdefineDirective({ type: AxiomSchedulerComponentCommon, inputs: { axStartDate: "axStartDate", axEventTemplate: "axEventTemplate", axEventFormatter: "axEventFormatter", axDragStep: "axDragStep", axLocale: "axLocale", axEventToolbar: "axEventToolbar" } });
/*@__PURE__*/ (function () { ɵsetClassMetadata(AxiomSchedulerComponentCommon, [{
        type: Directive
    }], function () { return [{ type: Injector }]; }, { axStartDate: [{
            type: Input
        }], axEventTemplate: [{
            type: Input
        }], axEventFormatter: [{
            type: Input
        }], axDragStep: [{
            type: Input
        }], axLocale: [{
            type: Input
        }], axEventToolbar: [{
            type: Input
        }] }); })();
class AxiomSchedulerEvent {
    constructor(title = null, from = null, to = null, data = null, color = null, locked = false) {
        this.data = data;
        this.from = from;
        this.to = to;
        this.color = color;
        this.locked = locked;
        this.title = title;
        this._id = Symbol();
    }
}
class AxiomSchedulerComponent extends AxiomSchedulerComponentCommon {
    constructor(injector, _element, _renderer) {
        super(injector);
        this._element = _element;
        this._renderer = _renderer;
        this.axShowLocale = true;
        this.axEventChange = new EventEmitter();
        this.axEventClick = new EventEmitter();
        this.axEventDeleteClick = new EventEmitter();
        this.axEventEditClick = new EventEmitter();
        this.axDateChange = new EventEmitter();
        this.axViewChange = new EventEmitter();
        this.items = [];
        this.locales = AX_LOCALES.map((v) => {
            return { id: v, title: v };
        });
    }
    set axTheme(axTheme) {
        this._axTheme = axTheme;
        this.updateTheme(this._axTheme);
    }
    set axAnimation(axAnimation) {
        this._axAnimation = axAnimation;
        this.updateTheme(this._axTheme);
    }
    ngOnInit() {
        this.axLocale = this.axLocale || "en";
        this.setListeners();
        this.updateTheme(this._axTheme);
        this.refresh();
        this.setViews();
        this.refreshScheduler();
    }
    refreshScheduler() {
        this.setLocale(this.axLocale);
        this.service.axEvents = this.axEvents;
    }
    prev() {
        this.step(-1);
        this.service.refreshDate(this.date);
    }
    next() {
        this.step(1);
        this.service.refreshDate(this.date);
    }
    todayF() {
        this.applyDefaultAnimations(this.date.clone().isBefore(moment$1()) ? 1 : -1);
        this.date = moment$1();
        this.service.refreshDate(this.date);
        this.axDateChange && this.axDateChange.emit(this.date.clone().toDate());
    }
    modelFormatter(value) {
        return value ? value.id : null;
    }
    setLocale(locale) {
        this.service.changeLocale(locale);
    }
    updateTheme(theme) {
        if (theme) {
            this._renderer.removeClass(this._element.nativeElement, "dark");
            this._renderer.removeClass(this._element.nativeElement, "light");
            this._renderer.addClass(this._element.nativeElement, theme);
            //
            if (this._axAnimation === "none") {
                Object.values(AxiomSchedulerAnimation).forEach((animation) => {
                    this._renderer.removeClass(this._element.nativeElement, animation);
                });
            }
            else {
                Object.values(AxiomSchedulerAnimation).forEach((animation) => {
                    this._renderer.removeClass(this._element.nativeElement, animation);
                });
                this._renderer.addClass(this._element.nativeElement, this._axAnimation);
            }
        }
    }
    changeView(view) {
        this.axSchedulerView = view.id;
        this.axViewChange && this.axViewChange.emit(view.id);
    }
    step(step) {
        switch (this.axSchedulerView) {
            case AxiomSchedulerView.Day:
                this.date = this.date.clone().add(step, "days");
                break;
            case AxiomSchedulerView.Week:
                this.date = this.date.clone().add(step, "weeks");
                break;
            case AxiomSchedulerView.Month:
                this.date = this.date.clone().add(step, "months");
                break;
            case AxiomSchedulerView.Year:
                this.date = this.date.clone().add(step, "years");
                break;
        }
        this.applyDefaultAnimations(step);
        this.axDateChange && this.axDateChange.emit(this.date.clone().toDate());
    }
    applyDefaultAnimations(step) {
        if (this._axAnimation === AxiomSchedulerAnimation.Default) {
            this._renderer.removeClass(this._element.nativeElement, "forward");
            this._renderer.removeClass(this._element.nativeElement, "backward");
            if (step > 0) {
                this._renderer.addClass(this._element.nativeElement, "forward");
            }
            else {
                this._renderer.addClass(this._element.nativeElement, "backward");
            }
        }
    }
    setViews() {
        var def = [
            { id: AxiomSchedulerView.Day, title: "Day" },
            { id: AxiomSchedulerView.Week, title: "Week" },
            { id: AxiomSchedulerView.Month, title: "Month" },
            { id: AxiomSchedulerView.Year, title: "Year" },
        ];
        if (Array.isArray(this.axViews)) {
            this.items = [...def.filter((i) => this.axViews.indexOf(i.id) >= 0)];
        }
        else {
            this.items = [...def];
        }
        if (!this.axSchedulerView) {
            this.axSchedulerView = this.items[0].id;
        }
    }
    setListeners() {
        this.subscriptionGarbageCollection.push(this.service.eventChange.subscribe((event) => {
            this.axEventChange && this.axEventChange.emit(event);
        }));
        this.subscriptionGarbageCollection.push(this.service.eventClick.subscribe((event) => {
            this.axEventClick && this.axEventClick.emit(event);
        }));
        this.subscriptionGarbageCollection.push(this.service.eventDeleteClick.subscribe((event) => {
            this.axEventDeleteClick && this.axEventDeleteClick.emit(event);
        }));
        this.subscriptionGarbageCollection.push(this.service.eventEditClick.subscribe((event) => {
            this.axEventEditClick && this.axEventEditClick.emit(event);
        }));
    }
}
AxiomSchedulerComponent.ɵfac = function AxiomSchedulerComponent_Factory(t) { return new (t || AxiomSchedulerComponent)(ɵɵdirectiveInject(Injector), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2)); };
AxiomSchedulerComponent.ɵcmp = ɵɵdefineComponent({ type: AxiomSchedulerComponent, selectors: [["ax-scheduler"]], hostAttrs: [1, "ax-scheduler"], inputs: { axEvents: "axEvents", axSchedulerView: "axSchedulerView", axTheme: "axTheme", axAnimation: "axAnimation", axShowLocale: "axShowLocale", axViews: "axViews" }, outputs: { axEventChange: "axEventChange", axEventClick: "axEventClick", axEventDeleteClick: "axEventDeleteClick", axEventEditClick: "axEventEditClick", axDateChange: "axDateChange", axViewChange: "axViewChange" }, features: [ɵɵProvidersFeature([AxiomSchedulerService, AxiomSchedulerSidebarService]), ɵɵInheritDefinitionFeature], decls: 27, vars: 15, consts: [[1, "ax-scheduler__header"], [1, "ax-scheduler__header__date-part"], [3, "click"], [1, "ax-scheduler__header__date-part__nav"], ["height", "24px", "version", "1.1", "viewBox", "0 0 24 24", "width", "24px", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink"], ["fill", "none", "fill-rule", "evenodd", "id", "icon/chevron-back", "stroke", "none", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "1"], ["id", "lineart", "points", "15.5 20.4751 6.5 11.4751 15.5 2.4751", "stroke", "#000000"], [1, "ax-scheduler__header__date-part__title"], ["fill", "none", "fill-rule", "evenodd", "id", "icon/chevron-forward", "stroke", "none", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "1"], ["id", "lineart", "points", "7.5 20.4751 16.5 11.4751 7.5 2.4751", "stroke", "#000000"], [1, "ax-scheduler__header__nav-view-part"], [3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "ax-scheduler__header__view-part"], ["title", "Change View", 1, "view-dropdown", 3, "ngModel", "modelFormatter", "items", "dataTitle", "dataId", "ngModelChange"], ["title", "Change Locale", "class", "locale-dropdown", 3, "ngModel", "modelFormatter", "items", "dataTitle", "dataId", "ngModelChange", 4, "ngIf"], [1, "ax-scheduler__body", 3, "ngSwitch"], ["ax-scheduler-day-view", "", 3, "axEventTemplate", "axEventFormatter", "axDragStep", "axStartDate", "axEventToolbar", 4, "ngSwitchCase"], ["ax-scheduler-week-view", "", 3, "axEventTemplate", "axEventFormatter", "axDragStep", "axStartDate", "axEventToolbar", 4, "ngSwitchCase"], ["ax-scheduler-month-view", "", 3, "axEventTemplate", "axEventFormatter", "axDragStep", "axStartDate", "axEventToolbar", 4, "ngSwitchCase"], ["ax-scheduler-year-view", "", 3, "axEventTemplate", "axEventFormatter", "axDragStep", "axStartDate", "axEventToolbar", 4, "ngSwitchCase"], [3, "ngClass", "click"], ["title", "Change Locale", 1, "locale-dropdown", 3, "ngModel", "modelFormatter", "items", "dataTitle", "dataId", "ngModelChange"], ["ax-scheduler-day-view", "", 3, "axEventTemplate", "axEventFormatter", "axDragStep", "axStartDate", "axEventToolbar"], ["ax-scheduler-week-view", "", 3, "axEventTemplate", "axEventFormatter", "axDragStep", "axStartDate", "axEventToolbar"], ["ax-scheduler-month-view", "", 3, "axEventTemplate", "axEventFormatter", "axDragStep", "axStartDate", "axEventToolbar"], ["ax-scheduler-year-view", "", 3, "axEventTemplate", "axEventFormatter", "axDragStep", "axStartDate", "axEventToolbar"]], template: function AxiomSchedulerComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵelementStart(1, "div", 1);
        ɵɵelementStart(2, "button", 2);
        ɵɵlistener("click", function AxiomSchedulerComponent_Template_button_click_2_listener() { return ctx.todayF(); });
        ɵɵtext(3, "today");
        ɵɵelementEnd();
        ɵɵelementStart(4, "div", 3);
        ɵɵelementStart(5, "button", 2);
        ɵɵlistener("click", function AxiomSchedulerComponent_Template_button_click_5_listener() { return ctx.prev(); });
        ɵɵnamespaceSVG();
        ɵɵelementStart(6, "svg", 4);
        ɵɵelementStart(7, "g", 5);
        ɵɵelement(8, "polyline", 6);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵnamespaceHTML();
        ɵɵelementStart(9, "div", 7);
        ɵɵelementStart(10, "b");
        ɵɵtext(11);
        ɵɵelementEnd();
        ɵɵtext(12);
        ɵɵelementEnd();
        ɵɵelementStart(13, "button", 2);
        ɵɵlistener("click", function AxiomSchedulerComponent_Template_button_click_13_listener() { return ctx.next(); });
        ɵɵnamespaceSVG();
        ɵɵelementStart(14, "svg", 4);
        ɵɵelementStart(15, "g", 8);
        ɵɵelement(16, "polyline", 9);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵnamespaceHTML();
        ɵɵelementStart(17, "div", 10);
        ɵɵtemplate(18, AxiomSchedulerComponent_button_18_Template, 2, 4, "button", 11);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(19, "div", 12);
        ɵɵelementStart(20, "ax-scheduler-dropdown", 13);
        ɵɵlistener("ngModelChange", function AxiomSchedulerComponent_Template_ax_scheduler_dropdown_ngModelChange_20_listener($event) { return ctx.axSchedulerView = $event; });
        ɵɵelementEnd();
        ɵɵtemplate(21, AxiomSchedulerComponent_ax_scheduler_dropdown_21_Template, 1, 5, "ax-scheduler-dropdown", 14);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(22, "div", 15);
        ɵɵtemplate(23, AxiomSchedulerComponent_div_23_Template, 1, 5, "div", 16);
        ɵɵtemplate(24, AxiomSchedulerComponent_div_24_Template, 1, 5, "div", 17);
        ɵɵtemplate(25, AxiomSchedulerComponent_div_25_Template, 1, 5, "div", 18);
        ɵɵtemplate(26, AxiomSchedulerComponent_div_26_Template, 1, 5, "div", 19);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(11);
        ɵɵtextInterpolate(ctx.date.format("DD"));
        ɵɵadvance(1);
        ɵɵtextInterpolate2(" ", ctx.date.format("MMMM"), " ", ctx.date.format("YYYY"), " ");
        ɵɵadvance(6);
        ɵɵproperty("ngForOf", ctx.items);
        ɵɵadvance(2);
        ɵɵproperty("ngModel", ctx.axSchedulerView)("modelFormatter", ctx.modelFormatter)("items", ctx.items)("dataTitle", "title")("dataId", "id");
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.axShowLocale);
        ɵɵadvance(1);
        ɵɵproperty("ngSwitch", ctx.axSchedulerView);
        ɵɵadvance(1);
        ɵɵproperty("ngSwitchCase", "day");
        ɵɵadvance(1);
        ɵɵproperty("ngSwitchCase", "week");
        ɵɵadvance(1);
        ɵɵproperty("ngSwitchCase", "month");
        ɵɵadvance(1);
        ɵɵproperty("ngSwitchCase", "year");
    } }, styles: ["@import \"~angular2-draggable/css/resizable.min.css\";*,:after,:before{box-sizing:border-box}html{-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-text-size-adjust:100%;font-family:sans-serif;line-height:1.15}article,aside,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}body{background-color:#fff;color:#212529;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-size:1rem;font-weight:400;line-height:1.5;margin:0;text-align:left}[tabindex=\"-1\"]:focus{outline:0!important}hr{box-sizing:content-box;height:0;overflow:visible}h1,h2,h3,h4,h5,h6{margin-bottom:.5rem;margin-top:0}p{margin-bottom:1rem;margin-top:0}abbr[data-original-title],abbr[title]{-webkit-text-decoration:underline dotted;-webkit-text-decoration-skip-ink:none;border-bottom:0;cursor:help;text-decoration:underline;text-decoration:underline dotted;text-decoration-skip-ink:none}address{font-style:normal;line-height:inherit}address,dl,ol,ul{margin-bottom:1rem}dl,ol,ul{margin-top:0}ol ol,ol ul,ul ol,ul ul{margin-bottom:0}dt{font-weight:700}dd{margin-bottom:.5rem;margin-left:0}blockquote{margin:0 0 1rem}b,strong{font-weight:bolder}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}a{background-color:transparent;color:#007bff;text-decoration:none}a:hover{color:#0056b3;text-decoration:underline}a:not([href]):not([tabindex]),a:not([href]):not([tabindex]):focus,a:not([href]):not([tabindex]):hover{color:inherit;text-decoration:none}a:not([href]):not([tabindex]):focus{outline:0}code,kbd,pre,samp{font-family:SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em}pre{margin-bottom:1rem;margin-top:0;overflow:auto}figure{margin:0 0 1rem}img{border-style:none}img,svg{vertical-align:middle}svg{overflow:hidden}table{border-collapse:collapse}caption{caption-side:bottom;color:#6c757d;padding-bottom:.75rem;padding-top:.75rem;text-align:left}th{text-align:inherit}label{display:inline-block;margin-bottom:.5rem}button{border-radius:0}button:focus{outline:1px dotted;outline:5px auto -webkit-focus-ring-color}button,input,optgroup,select,textarea{font-family:inherit;font-size:inherit;line-height:inherit;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}input[type=checkbox],input[type=radio]{box-sizing:border-box;padding:0}input[type=date],input[type=datetime-local],input[type=month],input[type=time]{-webkit-appearance:listbox}textarea{overflow:auto;resize:vertical}fieldset{border:0;margin:0;min-width:0;padding:0}legend{color:inherit;display:block;font-size:1.5rem;line-height:inherit;margin-bottom:.5rem;max-width:100%;padding:0;white-space:normal;width:100%}progress{vertical-align:baseline}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:none;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}output{display:inline-block}summary{cursor:pointer;display:list-item}template{display:none}[hidden]{display:none!important}@-webkit-keyframes slide-in-left{0%{opacity:0;transform:translateX(-100px)}to{opacity:1;transform:translateX(0)}}@keyframes slide-in-left{0%{opacity:0;transform:translateX(-1000px)}to{opacity:1;transform:translateX(0)}}@-webkit-keyframes slide-in-right{0%{opacity:0;transform:translateX(100px)}to{opacity:1;transform:translateX(0)}}@keyframes slide-in-right{0%{opacity:0;transform:translateX(100px)}to{opacity:1;transform:translateX(0)}}@-webkit-keyframes slit-in-vertical{0%{opacity:0;transform:translateZ(-800px) rotateY(90deg)}54%{opacity:1;transform:translateZ(-160px) rotateY(87deg)}to{transform:translateZ(0) rotateY(0)}}@keyframes slit-in-vertical{0%{opacity:0;transform:translateZ(-800px) rotateY(90deg)}54%{opacity:1;transform:translateZ(-160px) rotateY(87deg)}to{transform:translateZ(0) rotateY(0)}}@-webkit-keyframes flip-in-hor-bottom{0%{opacity:0;transform:rotateX(80deg)}to{opacity:1;transform:rotateX(0)}}@keyframes flip-in-hor-bottom{0%{opacity:0;transform:rotateX(80deg)}to{opacity:1;transform:rotateX(0)}}@-webkit-keyframes swing-in-top-fwd{0%{opacity:0;transform:rotateX(-100deg);transform-origin:top}to{opacity:1;transform:rotateX(0deg);transform-origin:top}}@keyframes swing-in-top-fwd{0%{opacity:0;transform:rotateX(-100deg);transform-origin:top}to{opacity:1;transform:rotateX(0deg);transform-origin:top}}@-webkit-keyframes pulse{0%{-webkit-box-shadow:0 0 0 0 rgba(204,169,44,.4)}70%{-webkit-box-shadow:0 0 0 10px rgba(204,169,44,0)}to{-webkit-box-shadow:0 0 0 0 rgba(204,169,44,0)}}@keyframes pulse{0%{box-shadow:0 0 0 0 rgba(204,169,44,.4)}70%{box-shadow:0 0 0 10px rgba(204,169,44,0)}to{box-shadow:0 0 0 0 rgba(204,169,44,0)}}@-webkit-keyframes animation-scale{0%{opacity:0;transform:scale(0)}to{opacity:1;transform:scale(1)}}@keyframes animation-scale{0%{opacity:0;transform:scale(0)}to{opacity:1;transform:scale(1)}}@-webkit-keyframes animation-rotate{0%{opacity:0;transform:translateX(50%) scale(0) rotate(-60deg)}to{opacity:1;transform:translateX(0) scale(1) rotate(0deg)}}@keyframes animation-rotate{0%{opacity:0;transform:translateX(50%) scale(0) rotate(-60deg)}to{opacity:1;transform:translateX(0) scale(1) rotate(0deg)}}@-webkit-keyframes animation-flip{0%{opacity:0;transform:rotateY(180deg)}to{opacity:1;transform:rotateY(0deg)}}@keyframes animation-flip{0%{opacity:0;transform:rotateY(180deg)}to{opacity:1;transform:rotateY(0deg)}}@-webkit-keyframes rotate-in-2-cw{0%{opacity:0;transform:rotate(-45deg)}to{opacity:1;transform:rotate(0)}}@keyframes rotate-in-2-cw{0%{opacity:0;transform:rotate(-45deg)}to{opacity:1;transform:rotate(0)}}@-webkit-keyframes slide-in-fwd-left{0%{opacity:0;transform:translateZ(-1400px) translateX(-1000px)}to{opacity:1;transform:translateZ(0) translateX(0)}}@keyframes slide-in-fwd-left{0%{opacity:0;transform:translateZ(-1400px) translateX(-1000px)}to{opacity:1;transform:translateZ(0) translateX(0)}}@-webkit-keyframes slide-in-fwd-center{0%{opacity:0;transform:translateZ(-1400px)}to{opacity:1;transform:translateZ(0)}}@keyframes slide-in-fwd-center{0%{opacity:0;transform:translateZ(-1400px)}to{opacity:1;transform:translateZ(0)}}@-webkit-keyframes flip-in-ver-right{0%{opacity:0;transform:rotateY(-80deg)}to{opacity:1;transform:rotateY(0)}}@keyframes flip-in-ver-right{0%{opacity:0;transform:rotateY(-80deg)}to{opacity:1;transform:rotateY(0)}}@-webkit-keyframes flip-in-ver-left{0%{opacity:0;transform:rotateY(80deg)}to{opacity:1;transform:rotateY(0)}}@keyframes flip-in-ver-left{0%{opacity:0;transform:rotateY(80deg)}to{opacity:1;transform:rotateY(0)}}@-webkit-keyframes fade-in-left{0%{opacity:0;transform:translateX(-30px)}to{opacity:1;transform:translateX(0)}}@keyframes fade-in-left{0%{opacity:0;transform:translateX(-30px)}to{opacity:1;transform:translateX(0)}}@-webkit-keyframes fade-in-right{0%{opacity:0;transform:translateX(30px)}to{opacity:1;transform:translateX(0)}}@keyframes fade-in-right{0%{opacity:0;transform:translateX(30px)}to{opacity:1;transform:translateX(0)}}@-webkit-keyframes slide-out-right{0%{opacity:1;transform:translateX(0)}to{opacity:0;transform:translateX(1000px)}}@keyframes slide-out-right{0%{opacity:1;transform:translateX(0)}to{opacity:0;transform:translateX(1000px)}}.ax-scheduler.animation1 .ax-scheduler__week-view__header>div>div,.ax-scheduler.animation4 .ax-scheduler__day-view__body{-webkit-animation:animation-scale .3s ease-in-out both;animation:animation-scale .3s ease-in-out both}.ax-scheduler.animation1 .ax-scheduler__day-view__body,.ax-scheduler.animation1 .ax-scheduler__day-view__header .header_number,.ax-scheduler.animation1 .ax-scheduler__month-view__day,.ax-scheduler.animation1 .ax-scheduler__year-view>div,.ax-scheduler.animation2 .ax-scheduler__day-view__header .header_number,.ax-scheduler.animation3 .ax-scheduler__day-view__header .header_number,.ax-scheduler.animation4 .ax-scheduler__day-view__header .header_number{-webkit-animation:animation-flip .3s cubic-bezier(.25,.25,.25,1.15) both;animation:animation-flip .3s cubic-bezier(.25,.25,.25,1.15) both}.ax-scheduler.animation2 .ax-scheduler__month-view__day,.ax-scheduler.animation2 .ax-scheduler__week-view__header>div>div,.ax-scheduler.animation2 .ax-scheduler__year-view>div{-webkit-animation:swing-in-top-fwd .3s cubic-bezier(.175,.885,.32,1.275) both;animation:swing-in-top-fwd .3s cubic-bezier(.175,.885,.32,1.275) both}.ax-scheduler.animation2 .ax-scheduler__day-view__body{-webkit-animation:slit-in-vertical .3s ease-out both;animation:slit-in-vertical .3s ease-out both}.ax-scheduler.animation3 .ax-scheduler__month-view__day,.ax-scheduler.animation3 .ax-scheduler__year-view>div{-webkit-animation:rotate-in-2-cw .3s cubic-bezier(.25,.46,.45,.94) both;animation:rotate-in-2-cw .3s cubic-bezier(.25,.46,.45,.94) both}.ax-scheduler.animation3 .ax-scheduler__day-view__body{-webkit-animation:slide-in-fwd-left .3s cubic-bezier(.25,.46,.45,.94) both;animation:slide-in-fwd-left .3s cubic-bezier(.25,.46,.45,.94) both}.ax-scheduler.animation3 .ax-scheduler__week-view__header>div>div,.ax-scheduler.animation4 .ax-scheduler__week-view__header>div>div{-webkit-animation:slide-in-fwd-center .4s cubic-bezier(.25,.46,.45,.94) both;animation:slide-in-fwd-center .4s cubic-bezier(.25,.46,.45,.94) both}.ax-scheduler.animation4 .ax-scheduler__month-view__day,.ax-scheduler.animation4 .ax-scheduler__year-view>div{-webkit-animation:flip-in-ver-right .3s cubic-bezier(.25,.46,.45,.94) both;animation:flip-in-ver-right .3s cubic-bezier(.25,.46,.45,.94) both}.ax-scheduler.default.backward .ax-scheduler__day-view__header .header_number,.ax-scheduler.default.backward .ax-scheduler__month-view__day,.ax-scheduler.default.backward .ax-scheduler__week-view__header>div>div,.ax-scheduler.default.backward .ax-scheduler__year-view>div{-webkit-animation:fade-in-left .2s cubic-bezier(.39,.575,.565,1) both;animation:fade-in-left .2s cubic-bezier(.39,.575,.565,1) both}.ax-scheduler.default.forward .ax-scheduler__day-view__header .header_number,.ax-scheduler.default.forward .ax-scheduler__month-view__day,.ax-scheduler.default.forward .ax-scheduler__week-view__header>div>div,.ax-scheduler.default.forward .ax-scheduler__year-view>div{-webkit-animation:fade-in-right .2s cubic-bezier(.39,.575,.565,1) both;animation:fade-in-right .2s cubic-bezier(.39,.575,.565,1) both}.ax-scheduler__month-view__day:first-child{-webkit-animation-delay:.03s;animation-delay:.03s}.ax-scheduler__month-view__day:nth-child(2){-webkit-animation-delay:.06s;animation-delay:.06s}.ax-scheduler__month-view__day:nth-child(3){-webkit-animation-delay:.09s;animation-delay:.09s}.ax-scheduler__month-view__day:nth-child(4){-webkit-animation-delay:.12s;animation-delay:.12s}.ax-scheduler__month-view__day:nth-child(5){-webkit-animation-delay:.15s;animation-delay:.15s}.ax-scheduler__month-view__day:nth-child(6){-webkit-animation-delay:.18s;animation-delay:.18s}.ax-scheduler__month-view__day:nth-child(7){-webkit-animation-delay:.21s;animation-delay:.21s}.ax-scheduler__month-view__day:nth-child(8){-webkit-animation-delay:.24s;animation-delay:.24s}.ax-scheduler__month-view__day:nth-child(9){-webkit-animation-delay:.27s;animation-delay:.27s}.ax-scheduler__month-view__day:nth-child(10){-webkit-animation-delay:.3s;animation-delay:.3s}.ax-scheduler__month-view__day:nth-child(11){-webkit-animation-delay:.33s;animation-delay:.33s}.ax-scheduler__month-view__day:nth-child(12){-webkit-animation-delay:.36s;animation-delay:.36s}.ax-scheduler__month-view__day:nth-child(13){-webkit-animation-delay:.39s;animation-delay:.39s}.ax-scheduler__month-view__day:nth-child(14){-webkit-animation-delay:.42s;animation-delay:.42s}.ax-scheduler__month-view__day:nth-child(15){-webkit-animation-delay:.45s;animation-delay:.45s}.ax-scheduler__month-view__day:nth-child(16){-webkit-animation-delay:.48s;animation-delay:.48s}.ax-scheduler__month-view__day:nth-child(17){-webkit-animation-delay:.51s;animation-delay:.51s}.ax-scheduler__month-view__day:nth-child(18){-webkit-animation-delay:.54s;animation-delay:.54s}.ax-scheduler__month-view__day:nth-child(19){-webkit-animation-delay:.57s;animation-delay:.57s}.ax-scheduler__month-view__day:nth-child(20){-webkit-animation-delay:.6s;animation-delay:.6s}.ax-scheduler__month-view__day:nth-child(21){-webkit-animation-delay:.63s;animation-delay:.63s}.ax-scheduler__month-view__day:nth-child(22){-webkit-animation-delay:.66s;animation-delay:.66s}.ax-scheduler__month-view__day:nth-child(23){-webkit-animation-delay:.69s;animation-delay:.69s}.ax-scheduler__month-view__day:nth-child(24){-webkit-animation-delay:.72s;animation-delay:.72s}.ax-scheduler__month-view__day:nth-child(25){-webkit-animation-delay:.75s;animation-delay:.75s}.ax-scheduler__month-view__day:nth-child(26){-webkit-animation-delay:.78s;animation-delay:.78s}.ax-scheduler__month-view__day:nth-child(27){-webkit-animation-delay:.81s;animation-delay:.81s}.ax-scheduler__month-view__day:nth-child(28){-webkit-animation-delay:.84s;animation-delay:.84s}.ax-scheduler__month-view__day:nth-child(29){-webkit-animation-delay:.87s;animation-delay:.87s}.ax-scheduler__month-view__day:nth-child(30){-webkit-animation-delay:.9s;animation-delay:.9s}.ax-scheduler__month-view__day:nth-child(31){-webkit-animation-delay:.93s;animation-delay:.93s}.ax-scheduler__month-view__day:nth-child(32){-webkit-animation-delay:.96s;animation-delay:.96s}.ax-scheduler__month-view__day:nth-child(33){-webkit-animation-delay:.99s;animation-delay:.99s}.ax-scheduler__month-view__day:nth-child(34){-webkit-animation-delay:1.02s;animation-delay:1.02s}.ax-scheduler__month-view__day:nth-child(35){-webkit-animation-delay:1.05s;animation-delay:1.05s}.ax-scheduler__month-view__day:nth-child(36){-webkit-animation-delay:1.08s;animation-delay:1.08s}.ax-scheduler__month-view__day:nth-child(37){-webkit-animation-delay:1.11s;animation-delay:1.11s}.ax-scheduler__month-view__day:nth-child(38){-webkit-animation-delay:1.14s;animation-delay:1.14s}.ax-scheduler__month-view__day:nth-child(39){-webkit-animation-delay:1.17s;animation-delay:1.17s}.ax-scheduler__month-view__day:nth-child(40){-webkit-animation-delay:1.2s;animation-delay:1.2s}.ax-scheduler__month-view__day:nth-child(41){-webkit-animation-delay:1.23s;animation-delay:1.23s}.ax-scheduler__month-view__day:nth-child(42){-webkit-animation-delay:1.26s;animation-delay:1.26s}.ax-scheduler__year-view>div:first-child{-webkit-animation-delay:.03s;animation-delay:.03s}.ax-scheduler__year-view>div:nth-child(2){-webkit-animation-delay:.06s;animation-delay:.06s}.ax-scheduler__year-view>div:nth-child(3){-webkit-animation-delay:.09s;animation-delay:.09s}.ax-scheduler__year-view>div:nth-child(4){-webkit-animation-delay:.12s;animation-delay:.12s}.ax-scheduler__year-view>div:nth-child(5){-webkit-animation-delay:.15s;animation-delay:.15s}.ax-scheduler__year-view>div:nth-child(6){-webkit-animation-delay:.18s;animation-delay:.18s}.ax-scheduler__year-view>div:nth-child(7){-webkit-animation-delay:.21s;animation-delay:.21s}.ax-scheduler__year-view>div:nth-child(8){-webkit-animation-delay:.24s;animation-delay:.24s}.ax-scheduler__year-view>div:nth-child(9){-webkit-animation-delay:.27s;animation-delay:.27s}.ax-scheduler__year-view>div:nth-child(10){-webkit-animation-delay:.3s;animation-delay:.3s}.ax-scheduler__year-view>div:nth-child(11){-webkit-animation-delay:.33s;animation-delay:.33s}.ax-scheduler__year-view>div:nth-child(12){-webkit-animation-delay:.36s;animation-delay:.36s}.ax-scheduler__day-view__body:first-child,.ax-scheduler__week-view__header>div>div:first-child{-webkit-animation-delay:.03s;animation-delay:.03s}.ax-scheduler__day-view__body:nth-child(2),.ax-scheduler__week-view__header>div>div:nth-child(2){-webkit-animation-delay:.06s;animation-delay:.06s}.ax-scheduler__day-view__body:nth-child(3),.ax-scheduler__week-view__header>div>div:nth-child(3){-webkit-animation-delay:.09s;animation-delay:.09s}.ax-scheduler__day-view__body:nth-child(4),.ax-scheduler__week-view__header>div>div:nth-child(4){-webkit-animation-delay:.12s;animation-delay:.12s}.ax-scheduler__day-view__body:nth-child(5),.ax-scheduler__week-view__header>div>div:nth-child(5){-webkit-animation-delay:.15s;animation-delay:.15s}.ax-scheduler__day-view__body:nth-child(6),.ax-scheduler__week-view__header>div>div:nth-child(6){-webkit-animation-delay:.18s;animation-delay:.18s}.ax-scheduler__day-view__body:nth-child(7),.ax-scheduler__week-view__header>div>div:nth-child(7){-webkit-animation-delay:.21s;animation-delay:.21s}.ax-scheduler.default .ax-scheduler__month-view__day:first-child,.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(2),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(3),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(4),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(5),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(6),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(7),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(8),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(9),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(10),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(11),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(12),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(13),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(14),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(15),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(16),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(17),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(18),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(19),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(20),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(21),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(22),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(23),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(24),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(25),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(26),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(27),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(28),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(29),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(30),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(31),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(32),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(33),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(34),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(35),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(36),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(37),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(38),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(39),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(40),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(41),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(42),.ax-scheduler.default .ax-scheduler__year-view>div:first-child,.ax-scheduler.default .ax-scheduler__year-view>div:nth-child(2),.ax-scheduler.default .ax-scheduler__year-view>div:nth-child(3),.ax-scheduler.default .ax-scheduler__year-view>div:nth-child(4),.ax-scheduler.default .ax-scheduler__year-view>div:nth-child(5),.ax-scheduler.default .ax-scheduler__year-view>div:nth-child(6),.ax-scheduler.default .ax-scheduler__year-view>div:nth-child(7),.ax-scheduler.default .ax-scheduler__year-view>div:nth-child(8),.ax-scheduler.default .ax-scheduler__year-view>div:nth-child(9),.ax-scheduler.default .ax-scheduler__year-view>div:nth-child(10),.ax-scheduler.default .ax-scheduler__year-view>div:nth-child(11),.ax-scheduler.default .ax-scheduler__year-view>div:nth-child(12){-webkit-animation-delay:0;animation-delay:0}@media (min-width:321px) and (max-width:768px){.header_number{display:inline-block;font-size:1.8em!important;margin-top:10px!important}}@media (max-width:560px){.header_number{text-indent:10px!important}.header_day_title{display:none!important}.ax-scheduler__event__content{font-size:11px!important}}@media (max-width:768px){.ax-scheduler__event__content{font-size:10px!important}.ax-scheduler__header{padding-left:0!important}}@media (min-width:1001px){.view-dropdown{display:none!important}}@media (max-width:999px){.view-dropdown{display:inline-block}.ax-scheduler__header__nav-view-part,.locale-dropdown{display:none!important}}.ax-scheduler.dark{background-color:#37474f!important}.ax-scheduler.dark .ax-scheduler__month-view__day_list circle{fill:#fff!important}.ax-scheduler.dark .ax-scheduler__header button{background:#263238!important;border:none!important;color:#fff!important}.ax-scheduler.dark .ax-scheduler__header button:active{background:#263238!important}.ax-scheduler.dark .ax-scheduler__header__nav-view-part button.active{border-bottom:2px solid #2196f3!important}.ax-scheduler.dark .ax-scheduler__header__nav-view-part button{background-color:transparent!important}.ax-scheduler.dark .ax-scheduler__header__date-part__nav button svg>g{fill:#fff}.ax-scheduler.dark .ax-scheduler__header__date-part__nav .ax-scheduler__header__date-part__title{border:none;color:#fff}.ax-scheduler.dark .ax-scheduler__header__date-part__nav .ax-scheduler__header__date-part__title:active{background:transparent}.ax-scheduler.dark .ax-scheduler-dropdown{color:#fff}.ax-scheduler.dark .ax-scheduler-dropdown .ax-scheduler-dropdown__model{border-color:#263238}.ax-scheduler.dark .ax-scheduler-dropdown .ax-scheduler-dropdown__list{background-color:#263238;border-color:#263238}.ax-scheduler.dark .ax-scheduler-dropdown .ax-scheduler-dropdown__list>div:hover{background-color:#37474f}.ax-scheduler.dark .header_day_title p,.ax-scheduler.dark .header_number{color:#fff!important;font-weight:400}.ax-scheduler.dark .ax-scheduler__day-view__body>div:not(.ax-scheduler__event-tile),.ax-scheduler.dark .ax-scheduler__day-view__hour-column{border-color:#37474f!important}.ax-scheduler.dark .ax-scheduler__day-view__body>div:not(.ax-scheduler__event-tile)>div.ax-scheduler__day-view__hour-column:after,.ax-scheduler.dark .ax-scheduler__week-view .ax-scheduler__week-view__body>div.ax-scheduler__week-view__body__hour-column>div:not(.ax-scheduler__event-tile)>div:first-child:not(.ax-scheduler__event-tile__box):after{background:#37474f!important}.ax-scheduler.dark .ax-scheduler__day-view__body>div:not(.ax-scheduler__event-tile)>div.ax-scheduler__day-view__hour-column>span,.ax-scheduler.dark .ax-scheduler__week-view .ax-scheduler__week-view__body>div.ax-scheduler__week-view__body__hour-column>div:not(.ax-scheduler__event-tile)>div:first-child:not(.ax-scheduler__event-tile__box)>span{color:#fff!important}.ax-scheduler.dark .ax-scheduler__day-view__event-columm{background:#263238!important}.ax-scheduler.dark .ax-scheduler__day-view__body>div:not(.ax-scheduler__event-tile),.ax-scheduler.dark .ax-scheduler__day-view__body>div:not(.ax-scheduler__event-tile)>div.ax-scheduler__day-view__hour-column,.ax-scheduler.dark .ax-scheduler__week-view .ax-scheduler__week-view__body>.ax-scheduler__week-view__body__day-column>div>div,.ax-scheduler.dark .ax-scheduler__week-view .ax-scheduler__week-view__body>div.ax-scheduler__week-view__body__hour-column>div:not(.ax-scheduler__event-tile)>div:first-child:not(.ax-scheduler__event-tile__box){border-color:#37474f!important}.ax-scheduler.dark .ax-scheduler__day-view__body>div:not(.ax-scheduler__event-tile)>div.ax-scheduler__day-view__hour-column{border-right:1px solid #37474f}.ax-scheduler.dark .ax-scheduler__week-view .ax-scheduler__week-view__body>div.ax-scheduler__week-view__body__hour-column>div:not(.ax-scheduler__event-tile)>div:first-child:not(.ax-scheduler__event-tile__box):after{right:-1px}.ax-scheduler.dark .ax-scheduler__month-view,.ax-scheduler.dark .ax-scheduler__month-view__day{border-color:#37474f!important}.ax-scheduler.dark .ax-scheduler__month-view__day .more-item,.ax-scheduler.dark .ax-scheduler__month-view__day__label,.ax-scheduler.dark .ax-scheduler__month-view__day__number{color:#fff!important}.ax-scheduler.dark .ax-scheduler__month-view__day .more-item:hover{background-color:#37474f!important}.ax-scheduler.dark .ax-scheduler__month-view__day__events_container .ax-scheduler__event.expired .ax-scheduler__event__content{color:#aaa}.ax-scheduler.dark .ax-scheduler__month-view__day__events_container .ax-scheduler__event.expired:hover{background-color:#37474f!important}.ax-scheduler.dark .ax-scheduler__month-view__day__events__dialog{background-color:#455a64;border-color:#263238}.ax-scheduler.dark .ax-scheduler__close-button{color:#fff!important}.ax-scheduler.dark .ax-scheduler__close-button:hover{background-color:#263238}.ax-scheduler.dark .ax-scheduler__year-view__month{color:#fff}.ax-scheduler.dark .ax-scheduler__year-view__month .ax-scheduler__year-view__month__body>div>span{color:#bbb}.ax-scheduler.dark .ax-scheduler__year-view__month .ax-scheduler__year-view__month__body>div.current:not(.today)>span{color:#fff}.ax-scheduler.dark .ax-scheduler__day-view__body>div:not(.ax-scheduler__event-tile)>div.ax-scheduler__day-view__event-column,.ax-scheduler.dark .ax-scheduler__month-view__day{background-color:#263238!important}.ax-scheduler.dark .ax-scheduler__day-view__header>div:last-child>div>span.header_number.today{color:#e53935!important}.ax-scheduler.dark .ax-scheduler__year-view__month .ax-scheduler__year-view__month__body>div>span:hover{background-color:#263238!important}.ax-scheduler.dark .ax-scheduler__sidebar{background:#37474f;border-left-color:#263238}.ax-scheduler.dark .ax-scheduler__sidebar h6{border-bottom-color:#263238;color:#fff}.ax-scheduler{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;display:block;height:90vh;margin:0;overflow:hidden;padding:0;position:relative;user-select:none}.ax-scheduler__header .ax-scheduler__header__date-part .ax-scheduler__header__date-part__nav>button,.ax-scheduler__header .ax-scheduler__header__date-part .ax-scheduler__header__date-part__nav>div,.ax-scheduler__header .ax-scheduler__header__date-part>button{background:transparent;border:1px solid #ddd;border-radius:5px;color:#333;cursor:pointer;height:30px;line-height:26px;text-align:center;text-transform:uppercase;transition:all .1s ease-in-out}.ax-scheduler__header .ax-scheduler__header__date-part .ax-scheduler__header__date-part__nav>button:active,.ax-scheduler__header .ax-scheduler__header__date-part .ax-scheduler__header__date-part__nav>button:focus,.ax-scheduler__header .ax-scheduler__header__date-part .ax-scheduler__header__date-part__nav>div:active,.ax-scheduler__header .ax-scheduler__header__date-part .ax-scheduler__header__date-part__nav>div:focus,.ax-scheduler__header .ax-scheduler__header__date-part>button:active,.ax-scheduler__header .ax-scheduler__header__date-part>button:focus{box-shadow:none;outline:none}.ax-scheduler__header .ax-scheduler__header__date-part .ax-scheduler__header__date-part__nav>button:hover,.ax-scheduler__header .ax-scheduler__header__date-part .ax-scheduler__header__date-part__nav>div:hover,.ax-scheduler__header .ax-scheduler__header__date-part>button:hover{border-color:#aaa}.ax-scheduler__header .ax-scheduler__header__date-part .ax-scheduler__header__date-part__nav>button:active,.ax-scheduler__header .ax-scheduler__header__date-part .ax-scheduler__header__date-part__nav>div:active,.ax-scheduler__header .ax-scheduler__header__date-part>button:active{background:#eee}::-webkit-scrollbar{height:5px;width:5px}::-webkit-scrollbar-track{background:#f1f1f1}::-webkit-scrollbar-thumb{background:#888}::-webkit-scrollbar-thumb:hover{background:#555}.ax-scheduler__body,.ax-scheduler__header{display:block;margin:0;padding:0;position:relative}.ax-scheduler__header{border-bottom:none;display:flex;flex-direction:row;font-size:12px;height:60px;padding-left:30px;text-transform:uppercase}.ax-scheduler__header>div{flex:3}.ax-scheduler__header .ax-scheduler__header__date-part{align-items:center;display:flex;padding:0 5px 0 20px;text-align:left}.ax-scheduler__header .ax-scheduler__header__date-part .ax-scheduler__header__date-part__nav{display:flex;margin-left:15px}.ax-scheduler__header .ax-scheduler__header__date-part .ax-scheduler__header__date-part__nav>button,.ax-scheduler__header .ax-scheduler__header__date-part .ax-scheduler__header__date-part__nav>div{border-left:1px solid #ddd;flex:2}.ax-scheduler__header .ax-scheduler__header__date-part .ax-scheduler__header__date-part__nav>button svg,.ax-scheduler__header .ax-scheduler__header__date-part .ax-scheduler__header__date-part__nav>div svg{display:block;height:20px;vertical-align:middle}.ax-scheduler__header .ax-scheduler__header__date-part .ax-scheduler__header__date-part__nav>button:last-child,.ax-scheduler__header .ax-scheduler__header__date-part .ax-scheduler__header__date-part__nav>div:last-child{border-left:none;border-radius:0 5px 5px 0}.ax-scheduler__header .ax-scheduler__header__date-part .ax-scheduler__header__date-part__nav>button:first-child,.ax-scheduler__header .ax-scheduler__header__date-part .ax-scheduler__header__date-part__nav>div:first-child{border-radius:5px 0 0 5px;border-right:none}.ax-scheduler__header .ax-scheduler__header__date-part .ax-scheduler__header__date-part__nav>div{border:1px solid #ddd;border-radius:0}.ax-scheduler__header .ax-scheduler__header__date-part__title{color:#444;cursor:default!important;min-width:130px;padding:0 8px;text-align:center;white-space:nowrap}.ax-scheduler__header .ax-scheduler__header__view-part{padding:0 5px;text-align:left}.ax-scheduler__header .ax-scheduler__header__view-part .ax-scheduler-dropdown{float:right;margin-left:10px;margin-top:16px;min-width:80px}.ax-scheduler__body{height:calc(100% - 60px)}.ax-scheduler__header__nav-view-part{display:flex;flex-direction:row;margin:0 30px}.ax-scheduler__header__nav-view-part button{background:#fff;border:none;color:#444;cursor:pointer;font-size:13px;margin:0 8px;padding:5px 8px;position:relative;text-align:center;text-transform:uppercase;transition:all .1s ease-in-out}.ax-scheduler__header__nav-view-part button:after{background:#eee;content:\"\";height:2px;position:absolute;top:100%;transition:all .2s ease-in-out;width:0}.ax-scheduler__header__nav-view-part button:hover{color:#2196f3}.ax-scheduler__header__nav-view-part button:hover:after{left:0;right:0;width:auto}.ax-scheduler__header__nav-view-part button:active,.ax-scheduler__header__nav-view-part button:focus{box-shadow:none;outline:none}.ax-scheduler__header__nav-view-part button:active{background-color:#eee}.ax-scheduler__header__nav-view-part button.active{font-weight:700}.ax-scheduler__header__nav-view-part button.active:after{background:#2196f3;left:0;right:0;width:auto}.ax-scheduler__day-view{display:block;height:100%;margin:0;padding:0;position:relative}.ax-scheduler__day-view__body,.ax-scheduler__day-view__header{display:block;margin:0;padding:0;position:relative;width:100%}.ax-scheduler__day-view__body>div:not(.ax-scheduler__event-tile){border-bottom:1px solid #fff;display:block;height:60px;margin:0;padding:0;position:relative}.ax-scheduler__day-view__body>div:not(.ax-scheduler__event-tile)>div{display:inline-block;height:100%;margin:0;padding:0;position:relative;vertical-align:top}.ax-scheduler__day-view__body>div:not(.ax-scheduler__event-tile)>div.ax-scheduler__day-view__hour-column{max-width:50px;min-width:50px;text-align:right;width:50px}.ax-scheduler__day-view__body>div:not(.ax-scheduler__event-tile)>div.ax-scheduler__day-view__hour-column>span{color:#444;font-size:12px;padding-left:5px;padding-right:5px;position:absolute;right:0;top:-9px;vertical-align:top;z-index:2}.ax-scheduler__day-view__body>div:not(.ax-scheduler__event-tile)>div.ax-scheduler__day-view__hour-column:after{background:#fff;content:\"\";height:1px;left:0;position:absolute;right:0;top:-1px}.ax-scheduler__day-view__body>div:not(.ax-scheduler__event-tile)>div.ax-scheduler__day-view__event-column{background-color:#f5f5f5;padding-left:5px;width:calc(100% - 52px)}.ax-scheduler__day-view__body>div:not(.ax-scheduler__event-tile):hover>div.ax-scheduler__day-view__event-column{z-index:2}.ax-scheduler__day-view__body>div:last-child:not(.ax-scheduler__event-tile__box){border:none}.ax-scheduler__day-view__header{background:transparent;height:60px}.ax-scheduler__day-view__header>div{display:inline-block;height:100%;margin:0;padding:0;position:relative;vertical-align:top}.ax-scheduler__day-view__header>div:first-child{max-width:50px;min-width:50px;width:50px}.ax-scheduler__day-view__header>div:last-child>div{border:none;display:inline-block;height:100%}.ax-scheduler__day-view__header>div:last-child>div>span.header_number{color:#444;font-size:2.2em;font-weight:400;margin:0}.ax-scheduler__day-view__header>div:last-child>div>span.header_number.today{color:#e53935}.ax-scheduler__day-view__header>div:last-child>div>span.header_number>span.header_day_title{display:inline-block;font-size:.3em;margin-left:-5px}.ax-scheduler__day-view__header>div:last-child>div>span.header_number>span.header_day_title>p{color:#666;margin:0;padding:0}.ax-scheduler__day-view__header>div:last-child>div>span.header_month_year{color:#888;display:block;font-size:11px;margin:0}.ax-scheduler__day-view__body{height:calc(100% - 60px);overflow-x:hidden;overflow-y:auto}.ax-scheduler__event-tile{background:transparent;border:none;height:25px;left:0;overflow:visible;padding:0 0 0 50px;position:absolute!important;right:0;text-align:right;z-index:3}.ax-scheduler__event-tile>.ax-scheduler__event-tile__box{-webkit-animation:swing-in-top-fwd .5s cubic-bezier(.175,.885,.32,1.275) both;animation:swing-in-top-fwd .5s cubic-bezier(.175,.885,.32,1.275) both;background:#2196f3;box-shadow:0 4px 8px 0 rgba(0,0,0,.2);display:none;height:100%;position:relative;transition:box-shadow .3s ease-in-out}.ax-scheduler__event-tile>.ax-scheduler__event-tile__box:hover{box-shadow:0 8px 16px 0 rgba(0,0,0,.2)}.ax-scheduler__day-view__body.hour-none div.ax-scheduler__day-view__event-column{padding-left:5px!important;width:100%!important}.ax-scheduler__day-view__body.hour-none div.ax-scheduler__day-view__hour-column{display:none}.ax-scheduler__day-view__body.hour-none .ax-scheduler__event-tile{padding-left:0}.ax-scheduler__month-view{border:1px solid #fff;border-bottom:none;border-left:none;display:flex;flex-wrap:wrap;height:100%;overflow-x:hidden;overflow-y:auto;width:100%}.ax-scheduler__month-view .in-month{font-weight:700}.ax-scheduler__month-view__day{background-color:#f5f5f5;border-bottom:1px solid #fff;border-left:1px solid #fff;flex:14.28571%;min-height:100px;min-width:100px;position:relative;text-align:center}.ax-scheduler__month-view__day .more-item{cursor:pointer;font-size:12px;font-weight:700;margin:2px 5px;padding:2px 5px!important;text-align:left;text-indent:5px}.ax-scheduler__month-view__day .more-item:hover{background-color:#eee}.ax-scheduler__month-view__day .ax-scheduler__event{background-color:#2196f3}.ax-scheduler__month-view__day .ax-scheduler__event .ax-lock-event .st0{fill:#fff}.ax-scheduler__month-view__day .ax-scheduler__month-view__day__events{bottom:0;display:block;height:70%;margin:0;overflow:hidden;padding:0;position:absolute;width:100%}.ax-scheduler__month-view__day__number{background-color:transparent;border-radius:50%;font-size:12px;height:24px;line-height:24px;position:absolute;right:3px;text-align:center;top:3px;width:24px}.ax-scheduler__month-view__day__number.today{background-color:#e53935;color:#fff}.ax-scheduler__month-view__day__label{color:#444!important;display:block;font-size:12px;font-weight:700;line-height:28px;margin:0;position:relative;text-align:center;width:100%}.ax-scheduler__month-view__day__events_container{display:flex;flex-direction:column;padding:0 5px}.ax-scheduler__month-view__day__events_container .ax-scheduler__event.expired{background:transparent}.ax-scheduler__month-view__day__events_container .ax-scheduler__event.expired .ax-scheduler__event__content{color:#555}.ax-scheduler__month-view__day__events_container .ax-scheduler__event{align-items:stretch;background-color:#2196f3;border-radius:5px;flex:1;margin:1px 0;position:relative}.ax-scheduler__month-view__day__events_container .ax-scheduler__event.expired:hover{background:#eee;cursor:pointer}.ax-scheduler__month-view__day__events_container .ax-scheduler__event:hover{background:#1976d2;cursor:pointer}.ax-scheduler__month-view__day__events_container .ax-scheduler__event__content{font-size:12px!important;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:100%}.ax-scheduler__month-view__day__events__dialog{background-color:#fff;border:1px solid #aaa;border-radius:5px;box-shadow:0 8px 16px 0 rgba(0,0,0,.2);height:auto;max-height:400px;overflow-x:hidden;overflow-y:auto;padding:5px 10px;position:absolute;z-index:10000}.ax-scheduler__month-view__day__events__dialog .ax-scheduler__month-view__day__number{display:inline-block;font-weight:700;position:relative;top:0}.ax-scheduler__month-view__day__events__dialog .ax-scheduler__month-view__day__events_container{padding:10px}.ax-scheduler__close-button{border-radius:50%;color:#444;cursor:pointer;display:block;font-size:18px;height:18px;line-height:14px;position:absolute;right:5px;text-align:center;top:5px;width:18px;z-index:1}.ax-scheduler__close-button:hover{background-color:#eee}.ax-scheduler__year-view{border:1px solid #ddd;display:flex;flex-wrap:wrap;height:100%;overflow-x:hidden;overflow-y:auto;position:relative;width:100%}.ax-scheduler__year-view>div:not(.ax-scheduler__sidebar){flex:25%;min-height:100px;position:relative;text-align:center}.ax-scheduler__year-view__month{display:block;height:100%;margin:0;min-width:300px;padding:0;width:100%}.ax-scheduler__year-view__month .ax-scheduler__year-view__month__header{display:block;font-size:14px;font-weight:700;height:30px;line-height:30px;margin:0;padding:0 16px;position:relative;text-align:center}.ax-scheduler__year-view__month .ax-scheduler__year-view__month__body{display:flex;flex-wrap:wrap;height:calc(100% - 30px);padding:0 70px;width:100%}.ax-scheduler__year-view__month .ax-scheduler__year-view__month__body>div{flex:14.28571%;margin-top:4px;position:relative}.ax-scheduler__year-view__month .ax-scheduler__year-view__month__body>div>span{border-radius:50%;cursor:pointer;display:block;font-size:11px;height:24px;line-height:22px;position:relative;text-align:center;transition:all .1s ease-in-out;width:24px}.ax-scheduler__year-view__month .ax-scheduler__year-view__month__body>div>span:hover{background-color:#eee}.ax-scheduler__year-view__month .ax-scheduler__year-view__month__body>div>span:active{background-color:#ddd}.ax-scheduler__year-view__month .ax-scheduler__year-view__month__body>div.today>span{background-color:#e53935;border:none;color:#fff;font-weight:700}.ax-scheduler__year-view__month .ax-scheduler__year-view__month__body>div.current:not(.today)>span{color:#444;font-weight:700}.ax-scheduler__year-view__month__day{overflow:visible;position:relative}.ax-scheduler__year-view__month__day.hasEvent{border:1px solid #2196f3}.ax-scheduler__year-view__month__day:hover .ax-scheduler__year-view__month__day_tooltip{display:inline-block}.ax-scheduler__year-view__month__day .ax-scheduler__month-view__day__events__dialog{min-width:250px;z-index:1000}.ax-scheduler__year-view__month__day .ax-scheduler__event:after{top:11px}.ax-scheduler__month-view__day_list{cursor:pointer;left:0;position:absolute;top:4px;width:19px}.ax-scheduler__month-view__day_list circle{fill:#aaa}.ax-scheduler__sidebar{-webkit-animation:slide-in-right .2s cubic-bezier(.25,.46,.45,.94) both;animation:slide-in-right .2s cubic-bezier(.25,.46,.45,.94) both;background:#fff;border-left:1px solid #ccc;bottom:1px;box-shadow:-2px 0 5px -2px rgba(0,0,0,.49);display:block;left:auto;max-width:250px;padding:10px 8px;position:absolute;right:2px;top:1px;width:250px;z-index:1000}.ax-scheduler__sidebar>h6{border-bottom:1px solid #ddd;margin-bottom:16px;padding:10px 0}.ax-scheduler__event .ax-lock-event{height:17px;position:absolute;right:1px;top:3px;width:17px}.ax-scheduler__event .ax-lock-event .st0{fill:#fff}.ax-scheduler__event:hover .ax-scheduler__event__toolbar>div{-webkit-animation:slide-in-right .2s cubic-bezier(.25,.46,.45,.94) both;animation:slide-in-right .2s cubic-bezier(.25,.46,.45,.94) both;display:flex}.ax-scheduler__event .ax-scheduler__event__toolbar{background:transparent;display:block;height:30px;left:0;overflow:hidden;position:absolute;right:0;top:1px}.ax-scheduler__event .ax-scheduler__event__toolbar>div{background:#fff;border-radius:10px 0 0 10px;box-shadow:0 4px 8px 0 rgba(0,0,0,.2);display:none;flex-direction:row;padding:0 8px 3px;position:absolute;right:0;top:1px}.ax-scheduler__event .ax-scheduler__event__toolbar>div>div{cursor:pointer;display:block;height:100%;margin:0 3px;position:relative}.ax-scheduler__event .ax-scheduler__event__toolbar>div>div:hover svg,.ax-scheduler__event .ax-scheduler__event__toolbar>div>div:hover svg g{fill:#2196f3}.ax-scheduler__event .ax-scheduler__event__toolbar>div>div svg,.ax-scheduler__event .ax-scheduler__event__toolbar>div>div svg g{fill:#555;height:16px;width:16px}.ax-scheduler__event .ax-scheduler__event__toolbar>div .ax-scheduler__event__toolbar-edit svg{height:14px;width:14px}"], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(AxiomSchedulerComponent, [{
        type: Component,
        args: [{
                selector: "ax-scheduler",
                templateUrl: "./axiom-scheduler.component.html",
                styleUrls: ["./axiom-scheduler.component.scss"],
                encapsulation: ViewEncapsulation.None,
                providers: [AxiomSchedulerService, AxiomSchedulerSidebarService],
                host: {
                    class: "ax-scheduler",
                },
            }]
    }], function () { return [{ type: Injector }, { type: ElementRef }, { type: Renderer2 }]; }, { axEvents: [{
            type: Input
        }], axSchedulerView: [{
            type: Input
        }], axTheme: [{
            type: Input
        }], axAnimation: [{
            type: Input
        }], axShowLocale: [{
            type: Input
        }], axViews: [{
            type: Input
        }], axEventChange: [{
            type: Output
        }], axEventClick: [{
            type: Output
        }], axEventDeleteClick: [{
            type: Output
        }], axEventEditClick: [{
            type: Output
        }], axDateChange: [{
            type: Output
        }], axViewChange: [{
            type: Output
        }] }); })();

const _c0$1 = ["ax-scheduler-day-view", ""];
const _c1 = function (a0) { return { "today": a0 }; };
const moment$2 = momentNs;
class AxiomSchedulerHour {
    constructor(start) {
        this.start = start;
        this.end = this.start.clone().add('hours', 1);
    }
}
class AxiomSchedulerDayViewComponent extends AxiomSchedulerComponentCommon {
    constructor(injector) {
        super(injector);
    }
    ngOnInit() {
        this.refresh();
    }
}
AxiomSchedulerDayViewComponent.ɵfac = function AxiomSchedulerDayViewComponent_Factory(t) { return new (t || AxiomSchedulerDayViewComponent)(ɵɵdirectiveInject(Injector)); };
AxiomSchedulerDayViewComponent.ɵcmp = ɵɵdefineComponent({ type: AxiomSchedulerDayViewComponent, selectors: [["", "ax-scheduler-day-view", ""]], hostAttrs: [1, "ax-scheduler__day-view"], features: [ɵɵInheritDefinitionFeature], attrs: _c0$1, decls: 12, vars: 10, consts: [[1, "ax-scheduler__day-view__header"], [1, "header_number", 3, "ngClass"], [1, "header_day_title"], ["ax-scheduler-day-column", "", 3, "axEventTemplate", "axEventFormatter", "axDragStep", "axEventToolbar", "axStartDate"]], template: function AxiomSchedulerDayViewComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵelement(1, "div");
        ɵɵelementStart(2, "div");
        ɵɵelementStart(3, "div");
        ɵɵelementStart(4, "span", 1);
        ɵɵtext(5);
        ɵɵelementStart(6, "span", 2);
        ɵɵelementStart(7, "p");
        ɵɵtext(8, "th");
        ɵɵelementEnd();
        ɵɵelementStart(9, "p");
        ɵɵtext(10);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelement(11, "div", 3);
    } if (rf & 2) {
        ɵɵadvance(4);
        ɵɵproperty("ngClass", ɵɵpureFunction1(8, _c1, ctx.date.isSame(ctx.today, "days")));
        ɵɵadvance(1);
        ɵɵtextInterpolate1(" ", ctx.date.format("D"), " ");
        ɵɵadvance(5);
        ɵɵtextInterpolate(ctx.date.format("dddd"));
        ɵɵadvance(1);
        ɵɵproperty("axEventTemplate", ctx.axEventTemplate)("axEventFormatter", ctx.axEventFormatter)("axDragStep", ctx.axDragStep)("axEventToolbar", ctx.axEventToolbar)("axStartDate", ctx.axStartDate);
    } }, styles: [""], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(AxiomSchedulerDayViewComponent, [{
        type: Component,
        args: [{
                selector: '[ax-scheduler-day-view]',
                templateUrl: './axiom-scheduler-day-view.component.html',
                styleUrls: ['./axiom-scheduler-day-view.component.scss'],
                encapsulation: ViewEncapsulation.None,
                host: {
                    'class': 'ax-scheduler__day-view'
                }
            }]
    }], function () { return [{ type: Injector }]; }, null); })();

const _c0$2 = ["ax-scheduler-event", ""];
function AxiomSchedulerEventComponent_ng_container_0_p_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "p");
    ɵɵelementStart(1, "span");
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementStart(3, "span");
    ɵɵtext(4);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = ɵɵnextContext(2);
    ɵɵproperty("@timeAnimate", undefined);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r5.fromTime && ctx_r5.fromTime.format("HH:mm"));
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r5.toTime && ctx_r5.toTime.format("HH:mm"));
} }
function AxiomSchedulerEventComponent_ng_container_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function AxiomSchedulerEventComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, AxiomSchedulerEventComponent_ng_container_0_p_1_Template, 5, 3, "p", 0);
    ɵɵelementStart(2, "div", 3);
    ɵɵtemplate(3, AxiomSchedulerEventComponent_ng_container_0_ng_container_3_Template, 1, 0, "ng-container", 4);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.showTime);
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r0.axEventTemplate)("ngTemplateOutletContext", ctx_r0.ctx);
} }
function AxiomSchedulerEventComponent_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function AxiomSchedulerEventComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 3);
    ɵɵtemplate(2, AxiomSchedulerEventComponent_ng_container_1_ng_container_2_Template, 1, 0, "ng-container", 4);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r1.axEventTemplate)("ngTemplateOutletContext", ctx_r1.ctx);
} }
function AxiomSchedulerEventComponent_ng_container_2_p_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "p");
    ɵɵelementStart(1, "span");
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementStart(3, "span");
    ɵɵtext(4);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = ɵɵnextContext(2);
    ɵɵproperty("@timeAnimate", undefined);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r8.fromTime && ctx_r8.fromTime.format("HH:mm"));
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r8.toTime && ctx_r8.toTime.format("HH:mm"));
} }
function AxiomSchedulerEventComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, AxiomSchedulerEventComponent_ng_container_2_p_1_Template, 5, 3, "p", 0);
    ɵɵelementStart(2, "div", 3);
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r2.showTime);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ctx_r2.event.title, " ");
} }
function AxiomSchedulerEventComponent__svg_svg_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "svg", 5);
    ɵɵelementStart(1, "g");
    ɵɵelementStart(2, "g", 6);
    ɵɵelement(3, "path", 7);
    ɵɵelement(4, "path", 8);
    ɵɵelement(5, "path", 9);
    ɵɵelement(6, "polyline", 10);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} }
function AxiomSchedulerEventComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r10 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 11);
    ɵɵelementStart(1, "div");
    ɵɵelementStart(2, "div", 12);
    ɵɵlistener("click", function AxiomSchedulerEventComponent_div_4_Template_div_click_2_listener() { ɵɵrestoreView(_r10); const ctx_r9 = ɵɵnextContext(); return ctx_r9.deleteEevent(); })("mousedown", function AxiomSchedulerEventComponent_div_4_Template_div_mousedown_2_listener($event) { ɵɵrestoreView(_r10); const ctx_r11 = ɵɵnextContext(); return ctx_r11.mouseDown($event); });
    ɵɵnamespaceSVG();
    ɵɵelementStart(3, "svg", 13);
    ɵɵelementStart(4, "g");
    ɵɵelement(5, "path", 14);
    ɵɵelement(6, "path", 15);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵnamespaceHTML();
    ɵɵelementStart(7, "div", 16);
    ɵɵlistener("click", function AxiomSchedulerEventComponent_div_4_Template_div_click_7_listener() { ɵɵrestoreView(_r10); const ctx_r12 = ɵɵnextContext(); return ctx_r12.editEevent(); })("mousedown", function AxiomSchedulerEventComponent_div_4_Template_div_mousedown_7_listener($event) { ɵɵrestoreView(_r10); const ctx_r13 = ɵɵnextContext(); return ctx_r13.mouseDown($event); });
    ɵɵnamespaceSVG();
    ɵɵelementStart(8, "svg", 17);
    ɵɵelementStart(9, "g", 18);
    ɵɵelementStart(10, "g", 19);
    ɵɵelement(11, "path", 20);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} }
const moment$3 = momentNs;
class AxiomSchedulerEventComponent extends AxiomSchedulerComponentCommon {
    constructor(injector, _renderer, _element) {
        super(injector);
        this._renderer = _renderer;
        this._element = _element;
        this.monthMode = false;
        this.showTime = false;
        this.expired = false;
    }
    ngOnInit() {
        this.ctx = { item: this.event };
        this.updateTime();
        this.applyColor();
    }
    ngAfterViewInit() {
        if (!this.monthMode) {
            this.checkPosition();
        }
    }
    refreshView() {
    }
    fromTimeChanging(e) {
        this.fromTime = this.fromTime.clone().startOf('day').add(this.getOffsetMinute(), 'minutes');
        this.toTime = this.fromTime.clone().add(this.diff, 'minutes');
    }
    fromTimeChanged(e) {
        this.event.from = this.fromTime.clone().toDate();
        this.event.to = this.toTime.clone().toDate();
        this.toggleShowTime(false);
        this.service.eventChanged(this.event);
    }
    toTimeChanging(e) {
        this.diff = e.size.height;
        this.fromTime = this.fromTime.clone().startOf('day').add(this.getOffsetMinute(), 'minutes');
        this.toTime = this.fromTime.clone().add(this.diff, 'minutes');
    }
    toTimeChanged(e) {
        this.event.from = this.fromTime.clone().toDate();
        this.event.to = this.toTime.clone().toDate();
        this.toggleShowTime(false);
        this.service.eventChanged(this.event);
    }
    toTimeChangeStart(e) {
        this.toggleShowTime(true);
    }
    fromTimeChangeStart(e) {
        this.toggleShowTime(true);
    }
    deleteEevent() {
        this.service.eventDeleteClick.next(this.event);
    }
    editEevent() {
        this.service.eventEditClick.next(this.event);
    }
    mouseDown(ev) {
        ev && ev.preventDefault();
        ev && ev.stopPropagation();
    }
    checkPosition() {
        setTimeout(() => {
            var from = moment$3(this.event.from).diff(moment$3(this.event.from).startOf('day'), 'minutes');
            var to = moment$3(this.event.to).diff(moment$3(this.event.to).startOf('day'), 'minutes');
            this._renderer.setStyle(this._element.nativeElement.parentElement, 'top', `${from}px`);
            this._renderer.setStyle(this._element.nativeElement.parentElement, 'height', `${Math.abs(from - to)}px`);
            this._renderer.setStyle(this._element.nativeElement, 'height', `100%`);
            this._renderer.setStyle(this._element.nativeElement, 'display', `block`);
        }, 200);
    }
    getOffsetMinute() {
        const elementPos = this._element.nativeElement.getBoundingClientRect();
        const parentPos = this._element.nativeElement.parentElement.parentElement.getBoundingClientRect();
        return (Math.abs(elementPos.top - parentPos.top) + this._element.nativeElement.parentElement.parentElement.scrollTop);
    }
    updateDiff() {
        this.diff = this.toTime.diff(this.fromTime, 'minutes');
    }
    updateTime() {
        this.fromTime = moment$3(this.event.from).clone();
        this.toTime = moment$3(this.event.to).clone();
        this.updateDiff();
        this.expired = moment$3(this.event.to).isBefore(moment$3(), 'days');
    }
    applyColor() {
        if (this.event.color) {
            this._renderer.setStyle(this._element.nativeElement, 'background', this.event.color);
        }
    }
    toggleShowTime(toggle) {
        if (toggle) {
            this.timeout = setTimeout(() => {
                this.showTime = toggle;
            }, 200);
        }
        else {
            clearTimeout(this.timeout);
            this.showTime = toggle;
        }
    }
}
AxiomSchedulerEventComponent.ɵfac = function AxiomSchedulerEventComponent_Factory(t) { return new (t || AxiomSchedulerEventComponent)(ɵɵdirectiveInject(Injector), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef)); };
AxiomSchedulerEventComponent.ɵcmp = ɵɵdefineComponent({ type: AxiomSchedulerEventComponent, selectors: [["", "ax-scheduler-event", ""]], hostAttrs: [1, "ax-scheduler__event"], hostVars: 2, hostBindings: function AxiomSchedulerEventComponent_HostBindings(rf, ctx) { if (rf & 1) {
        ɵɵlistener("click", function AxiomSchedulerEventComponent_click_HostBindingHandler() { return ctx.service.eventClicked(ctx.event); });
    } if (rf & 2) {
        ɵɵclassProp("expired", ctx.expired);
    } }, inputs: { event: "event", monthMode: "monthMode" }, features: [ɵɵInheritDefinitionFeature], attrs: _c0$2, decls: 5, vars: 5, consts: [[4, "ngIf"], ["class", "ax-lock-event", "style", "enable-background:new 0 0 64 64;", "version", "1.1", "viewBox", "0 0 64 64", 0, "xml", "space", "preserve", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", 4, "ngIf"], ["class", "ax-scheduler__event__toolbar", 4, "ngIf"], [1, "ax-scheduler__event__content"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["version", "1.1", "viewBox", "0 0 64 64", 0, "xml", "space", "preserve", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", 1, "ax-lock-event", 2, "enable-background", "new 0 0 64 64"], ["id", "Icon-Lock", "transform", "translate(284.000000, 430.000000)"], ["d", "M-237.7-401.3h-3v-6.4c0-6.2-5.1-11.3-11.3-11.3c-6.2,0-11.3,5.1-11.3,11.3v6.4h-3v-6.4     c0-7.9,6.4-14.3,14.3-14.3s14.3,6.4,14.3,14.3V-401.3", "id", "Fill-66", 1, "st0"], ["d", "M-239.2-374.1h-25.6c-2.6,0-4.8-2.2-4.8-4.8v-19.2c0-2.6,2.2-4.8,4.8-4.8h25.6     c2.6,0,4.8,2.2,4.8,4.8v19.2C-234.4-376.2-236.6-374.1-239.2-374.1L-239.2-374.1z M-264.8-399.7c-0.9,0-1.6,0.7-1.6,1.6v19.2     c0,0.9,0.7,1.6,1.6,1.6h25.6c0.9,0,1.6-0.7,1.6-1.6v-19.2c0-0.9-0.7-1.6-1.6-1.6H-264.8L-264.8-399.7z", "id", "Fill-67", 1, "st0"], ["d", "M-248.8-393.3c0,1.8-1.4,3.2-3.2,3.2s-3.2-1.4-3.2-3.2s1.4-3.2,3.2-3.2S-248.8-395-248.8-393.3     ", "id", "Fill-68", 1, "st0"], ["id", "Fill-69", "points", "-251.2,-393.3 -252.8,-393.3 -254.4,-383.7 -249.6,-383.7 -251.2,-393.3    ", 1, "st0"], [1, "ax-scheduler__event__toolbar"], ["title", "Remove", 1, "ax-scheduler__event__toolbar-trash", 3, "click", "mousedown"], ["height", "512px", "id", "Layer_1", "version", "1.1", "viewBox", "0 0 512 512", "width", "512px", 0, "xml", "space", "preserve", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", 2, "enable-background", "new 0 0 512 512"], ["d", "M413.7,133.4c-2.4-9-4-14-4-14c-2.6-9.3-9.2-9.3-19-10.9l-53.1-6.7c-6.6-1.1-6.6-1.1-9.2-6.8c-8.7-19.6-11.4-31-20.9-31   h-103c-9.5,0-12.1,11.4-20.8,31.1c-2.6,5.6-2.6,5.6-9.2,6.8l-53.2,6.7c-9.7,1.6-16.7,2.5-19.3,11.8c0,0-1.2,4.1-3.7,13   c-3.2,11.9-4.5,10.6,6.5,10.6h302.4C418.2,144.1,417,145.3,413.7,133.4z"], ["d", "M379.4,176H132.6c-16.6,0-17.4,2.2-16.4,14.7l18.7,242.6c1.6,12.3,2.8,14.8,17.5,14.8h207.2c14.7,0,15.9-2.5,17.5-14.8   l18.7-242.6C396.8,178.1,396,176,379.4,176z"], ["title", "Edit", 1, "ax-scheduler__event__toolbar-edit", 3, "click", "mousedown"], ["height", "16px", "version", "1.1", "viewBox", "0 0 16 16", "width", "16px", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "sketch", "http://www.bohemiancoding.com/sketch/ns", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink"], ["fill", "none", "fill-rule", "evenodd", "id", "Icons with numbers", "stroke", "none", "stroke-width", "1"], ["fill", "#000000", "id", "Group", "transform", "translate(-384.000000, -192.000000)"], ["d", "M385,203.950806 L389,208 L385,208 Z M392,196 L396,200 L389.978638,207.044189 L386,203 Z M394.084619,193.781497 C394.709458,193.156658 395.90929,193.343426 396.764518,194.198654 L397.538782,194.972918 C398.394011,195.828147 398.580778,197.027979 397.95594,197.652817 L396.720394,198.888363 L392.849074,195.017043 Z M394.084619,193.781497", "id", "Triangle 313"]], template: function AxiomSchedulerEventComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, AxiomSchedulerEventComponent_ng_container_0_Template, 4, 3, "ng-container", 0);
        ɵɵtemplate(1, AxiomSchedulerEventComponent_ng_container_1_Template, 3, 2, "ng-container", 0);
        ɵɵtemplate(2, AxiomSchedulerEventComponent_ng_container_2_Template, 4, 2, "ng-container", 0);
        ɵɵtemplate(3, AxiomSchedulerEventComponent__svg_svg_3_Template, 7, 0, "svg", 1);
        ɵɵtemplate(4, AxiomSchedulerEventComponent_div_4_Template, 12, 0, "div", 2);
    } if (rf & 2) {
        ɵɵproperty("ngIf", !ctx.monthMode && ctx.axEventTemplate);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.monthMode && ctx.axEventTemplate);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", !ctx.axEventTemplate);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.event.locked);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.axEventToolbar && !ctx.event.locked);
    } }, directives: [NgIf, NgTemplateOutlet], styles: [".ax-scheduler__event{cursor:pointer;overflow:visible;position:relative;text-align:left}.ax-scheduler__event>.ax-scheduler__event__content{color:#eee;display:inline-block;font-size:13px;font-weight:400;height:100%;margin:0 10px;overflow:hidden;padding:5px 8px;position:relative;vertical-align:middle}.ax-scheduler__event>p{color:#fff;display:inline-block;font-size:11px;height:100%;margin:0;padding:0;position:absolute;vertical-align:top;width:50px}.ax-scheduler__event>p>span{background:#333;border-radius:100px;color:#fff;left:-40px;padding:0 5px;position:absolute;z-index:200}.ax-scheduler__event>p>span:first-child{top:0}.ax-scheduler__event>p>span:last-child{bottom:0}"], encapsulation: 2, data: { animation: [
            trigger('timeAnimate', [
                transition(':enter', [
                    style({ transform: 'scale(0)' }),
                    animate(`${180}ms ease-in`, style({ transform: 'scale(1)' }))
                ]),
                transition(':leave', [
                    animate(`${80}ms ease-out`, style({ opacity: '0' }))
                ])
            ])
        ] } });
/*@__PURE__*/ (function () { ɵsetClassMetadata(AxiomSchedulerEventComponent, [{
        type: Component,
        args: [{
                selector: '[ax-scheduler-event]',
                templateUrl: './axiom-scheduler-event.component.html',
                styleUrls: ['./axiom-scheduler-event.component.scss'],
                encapsulation: ViewEncapsulation.None,
                host: {
                    'class': 'ax-scheduler__event',
                    '[class.expired]': 'expired',
                    '(click)': 'service.eventClicked(event)'
                },
                animations: [
                    trigger('timeAnimate', [
                        transition(':enter', [
                            style({ transform: 'scale(0)' }),
                            animate(`${180}ms ease-in`, style({ transform: 'scale(1)' }))
                        ]),
                        transition(':leave', [
                            animate(`${80}ms ease-out`, style({ opacity: '0' }))
                        ])
                    ])
                ]
            }]
    }], function () { return [{ type: Injector }, { type: Renderer2 }, { type: ElementRef }]; }, { event: [{
            type: Input
        }], monthMode: [{
            type: Input
        }] }); })();

const _c0$3 = ["ax-scheduler-hour", ""];
class AxiomSchedulerHourComponent extends AxiomSchedulerComponentCommon {
    constructor(injector) {
        super(injector);
    }
    ngOnInit() {
        this.refreshView();
    }
    refreshView() {
        this.minuteRows = Array(60).fill(0).map((x, i) => {
            return { events: [], minute: i };
        });
        this.setInRangeEvent();
    }
    setInRangeEvent() {
        this.inRnageEvents = [];
    }
}
AxiomSchedulerHourComponent.ɵfac = function AxiomSchedulerHourComponent_Factory(t) { return new (t || AxiomSchedulerHourComponent)(ɵɵdirectiveInject(Injector)); };
AxiomSchedulerHourComponent.ɵcmp = ɵɵdefineComponent({ type: AxiomSchedulerHourComponent, selectors: [["", "ax-scheduler-hour", ""]], hostAttrs: [1, "ax-scheduler-hour"], inputs: { hour: "hour" }, features: [ɵɵInheritDefinitionFeature], attrs: _c0$3, decls: 0, vars: 0, template: function AxiomSchedulerHourComponent_Template(rf, ctx) { }, styles: [".ax-scheduler__event__row{display:flex;margin:1px 0;padding:0}"], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(AxiomSchedulerHourComponent, [{
        type: Component,
        args: [{
                selector: '[ax-scheduler-hour]',
                templateUrl: './axiom-scheduler-hour.component.html',
                styleUrls: ['./axiom-scheduler-hour.component.scss'],
                encapsulation: ViewEncapsulation.None,
                host: {
                    'class': 'ax-scheduler-hour'
                }
            }]
    }], function () { return [{ type: Injector }]; }, { hour: [{
            type: Input
        }] }); })();

const _c0$4 = ["ax-scheduler-day-column", ""];
function AxiomSchedulerDayColumnComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 2);
    ɵɵlistener("movingOffset", function AxiomSchedulerDayColumnComponent_div_0_Template_div_movingOffset_0_listener($event) { ɵɵrestoreView(_r5); const _r3 = ɵɵreference(2); return _r3.fromTimeChanging($event); })("endOffset", function AxiomSchedulerDayColumnComponent_div_0_Template_div_endOffset_0_listener($event) { ɵɵrestoreView(_r5); const _r3 = ɵɵreference(2); return _r3.fromTimeChanged($event); })("started", function AxiomSchedulerDayColumnComponent_div_0_Template_div_started_0_listener($event) { ɵɵrestoreView(_r5); const _r3 = ɵɵreference(2); return _r3.fromTimeChangeStart($event); })("edge", function AxiomSchedulerDayColumnComponent_div_0_Template_div_edge_0_listener($event) { ɵɵrestoreView(_r5); const ctx_r8 = ɵɵnextContext(); return ctx_r8.checkEdge($event); })("rzResizing", function AxiomSchedulerDayColumnComponent_div_0_Template_div_rzResizing_0_listener($event) { ɵɵrestoreView(_r5); const _r3 = ɵɵreference(2); return _r3.toTimeChanging($event); })("rzStop", function AxiomSchedulerDayColumnComponent_div_0_Template_div_rzStop_0_listener($event) { ɵɵrestoreView(_r5); const _r3 = ɵɵreference(2); return _r3.toTimeChanged($event); })("rzStart", function AxiomSchedulerDayColumnComponent_div_0_Template_div_rzStart_0_listener($event) { ɵɵrestoreView(_r5); const _r3 = ɵɵreference(2); return _r3.toTimeChangeStart($event); });
    ɵɵelement(1, "div", 3, 4);
    ɵɵelementEnd();
} if (rf & 2) {
    const event_r2 = ctx.$implicit;
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngDraggable", !event_r2.locked)("gridSize", ctx_r0.axDragStep)("bounds", ctx_r0.bounds)("lockAxis", "x")("inBounds", true)("zIndexMoving", "1000")("preventDefaultEvent", true)("ngResizable", !event_r2.locked)("rzHandles", "s,n")("rzGrid", ctx_r0.axDragStep);
    ɵɵadvance(1);
    ɵɵproperty("event", event_r2)("axEventTemplate", ctx_r0.axEventTemplate)("axEventToolbar", ctx_r0.axEventToolbar);
} }
function AxiomSchedulerDayColumnComponent_div_1_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const hour_r12 = ɵɵnextContext().$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", hour_r12.start.format("HH:mm"), " ");
} }
function AxiomSchedulerDayColumnComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵelementStart(1, "div", 5);
    ɵɵtemplate(2, AxiomSchedulerDayColumnComponent_div_1_span_2_Template, 2, 1, "span", 6);
    ɵɵelementEnd();
    ɵɵelement(3, "div", 7);
    ɵɵelementEnd();
} if (rf & 2) {
    const hour_r12 = ctx.$implicit;
    const index_r13 = ctx.index;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("ngIf", index_r13 > 0);
    ɵɵadvance(1);
    ɵɵproperty("hour", hour_r12)("axEventTemplate", ctx_r1.axEventTemplate)("axEventFormatter", ctx_r1.axEventFormatter);
} }
const moment$4 = momentNs;
class AxiomSchedulerDayColumnComponent extends AxiomSchedulerComponentCommon {
    constructor(injector, _element) {
        super(injector);
        this._element = _element;
        this.hourColumn = true;
        this.edge = {
            top: true,
            bottom: true,
            left: true,
            right: true
        };
        this.bounds = this._element.nativeElement;
    }
    ngOnInit() {
        this.refresh();
        this.refreshView();
    }
    refreshView() {
        this.checkDayEvents();
        this.setHours();
    }
    checkEdge(event) {
        this.edge = event;
    }
    setHours() {
        this.hours = [];
        for (let hour = 0; hour <= 23; hour++) {
            this.hours.push(new AxiomSchedulerHour(this.date.clone().startOf('day').add(hour, 'hours')));
        }
    }
    checkDayEvents() {
        this.dayEvents = [];
        this.service.axEvents.forEach(ev => {
            if (ev.from && ev.to) {
                if (moment$4(ev.from).isSameOrAfter(this.date.clone().startOf('day')) && moment$4(ev.to).isSameOrBefore(this.date.clone().endOf('day'))) {
                    this.dayEvents.push(ev);
                }
            }
            else if (ev.from && !ev.to) {
                if (moment$4(ev.from).isSameOrAfter(this.date.clone().startOf('day')) && moment$4(ev.from).isSameOrBefore(this.date.clone().endOf('day'))) {
                    this.dayEvents.push(ev);
                }
            }
        });
    }
}
AxiomSchedulerDayColumnComponent.ɵfac = function AxiomSchedulerDayColumnComponent_Factory(t) { return new (t || AxiomSchedulerDayColumnComponent)(ɵɵdirectiveInject(Injector), ɵɵdirectiveInject(ElementRef)); };
AxiomSchedulerDayColumnComponent.ɵcmp = ɵɵdefineComponent({ type: AxiomSchedulerDayColumnComponent, selectors: [["", "ax-scheduler-day-column", ""]], hostAttrs: [1, "ax-scheduler__day-view__body"], hostVars: 2, hostBindings: function AxiomSchedulerDayColumnComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵɵclassProp("hour-none", !ctx.hourColumn);
    } }, inputs: { hourColumn: "hourColumn", bounds: "bounds" }, features: [ɵɵInheritDefinitionFeature], attrs: _c0$4, decls: 2, vars: 2, consts: [["class", "ax-scheduler__event-tile", 3, "ngDraggable", "gridSize", "bounds", "lockAxis", "inBounds", "zIndexMoving", "preventDefaultEvent", "ngResizable", "rzHandles", "rzGrid", "movingOffset", "endOffset", "started", "edge", "rzResizing", "rzStop", "rzStart", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], [1, "ax-scheduler__event-tile", 3, "ngDraggable", "gridSize", "bounds", "lockAxis", "inBounds", "zIndexMoving", "preventDefaultEvent", "ngResizable", "rzHandles", "rzGrid", "movingOffset", "endOffset", "started", "edge", "rzResizing", "rzStop", "rzStart"], ["ax-scheduler-event", "", 1, "ax-scheduler__event-tile__box", 3, "event", "axEventTemplate", "axEventToolbar"], ["ev", ""], [1, "ax-scheduler__day-view__hour-column"], [4, "ngIf"], ["ax-scheduler-hour", "", 1, "ax-scheduler__day-view__event-column", 3, "hour", "axEventTemplate", "axEventFormatter"]], template: function AxiomSchedulerDayColumnComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, AxiomSchedulerDayColumnComponent_div_0_Template, 3, 13, "div", 0);
        ɵɵtemplate(1, AxiomSchedulerDayColumnComponent_div_1_Template, 4, 4, "div", 1);
    } if (rf & 2) {
        ɵɵproperty("ngForOf", ctx.dayEvents);
        ɵɵadvance(1);
        ɵɵproperty("ngForOf", ctx.hours);
    } }, directives: [NgForOf, AngularDraggableDirective, AngularResizableDirective, AxiomSchedulerEventComponent, NgIf, AxiomSchedulerHourComponent], styles: [""], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(AxiomSchedulerDayColumnComponent, [{
        type: Component,
        args: [{
                selector: '[ax-scheduler-day-column]',
                templateUrl: './axiom-scheduler-day-column.component.html',
                styleUrls: ['./axiom-scheduler-day-column.component.scss'],
                encapsulation: ViewEncapsulation.None,
                host: {
                    'class': 'ax-scheduler__day-view__body',
                    '[class.hour-none]': '!hourColumn'
                }
            }]
    }], function () { return [{ type: Injector }, { type: ElementRef }]; }, { hourColumn: [{
            type: Input
        }], bounds: [{
            type: Input
        }] }); })();

const _c0$5 = ["ax-scheduler-day-tile", ""];
function AxiomSchedulerDayTileComponent__svg_svg_0_Template(rf, ctx) { if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "svg", 7);
    ɵɵlistener("click", function AxiomSchedulerDayTileComponent__svg_svg_0_Template__svg_svg_click_0_listener() { ɵɵrestoreView(_r5); const ctx_r4 = ɵɵnextContext(); return ctx_r4.showEventsDialog(); });
    ɵɵelement(1, "circle", 8);
    ɵɵelement(2, "circle", 9);
    ɵɵelement(3, "circle", 10);
    ɵɵelementEnd();
} }
function AxiomSchedulerDayTileComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 11);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r1.day.format("ddd"), "\n");
} }
function AxiomSchedulerDayTileComponent_ng_container_6_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "div", 13);
} if (rf & 2) {
    const event_r6 = ɵɵnextContext().$implicit;
    const ctx_r8 = ɵɵnextContext();
    ɵɵproperty("event", event_r6)("monthMode", true)("axEventToolbar", ctx_r8.axEventToolbar)("axEventTemplate", ctx_r8.axEventTemplate);
} }
function AxiomSchedulerDayTileComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, AxiomSchedulerDayTileComponent_ng_container_6_div_1_Template, 1, 4, "div", 12);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const index_r7 = ctx.index;
    ɵɵadvance(1);
    ɵɵproperty("ngIf", index_r7 < 2);
} }
function AxiomSchedulerDayTileComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r11 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 14);
    ɵɵlistener("click", function AxiomSchedulerDayTileComponent_div_7_Template_div_click_0_listener() { ɵɵrestoreView(_r11); const ctx_r10 = ɵɵnextContext(); return ctx_r10.showEventsDialog(); });
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r3.dayEvents.length - 2, " More ... ");
} }
const _c1$1 = function (a0, a1) { return { "today": a0, "in-month": a1 }; };
const moment$5 = momentNs;
class AxiomSchedulerDayTileComponent extends AxiomSchedulerComponentCommon {
    constructor(injector, _element) {
        super(injector);
        this._element = _element;
        this.inMonth = false;
    }
    ngOnInit() {
        this.refresh();
        this.refreshView();
    }
    refreshView() {
        this.inMonth = this.day.clone().isSameOrAfter(this.date.clone().startOf('months')) && this.day.clone().isSameOrBefore(this.date.clone().endOf('months'));
        this.checkDayEvents();
    }
    showEventsDialog() {
        if (this.dayEvents && this.dayEvents.length > 0) {
            this.sidebarService.open({ title: `${this.day.format('DD MMMM YYYY')}`, events: this.dayEvents });
        }
    }
    checkDayEvents() {
        this.dayEvents = [];
        this.service.axEvents.forEach(ev => {
            if (ev.from && ev.to) {
                if (moment$5(ev.from).isSameOrAfter(this.day.clone().startOf('day')) && moment$5(ev.to).isSameOrBefore(this.day.clone().endOf('day'))) {
                    this.dayEvents.push(ev);
                }
            }
            else if (ev.from && !ev.to) {
                if (moment$5(ev.from).isSameOrAfter(this.day.clone().startOf('day')) && moment$5(ev.from).isSameOrBefore(this.day.clone().endOf('day'))) {
                    this.dayEvents.push(ev);
                }
            }
        });
    }
}
AxiomSchedulerDayTileComponent.ɵfac = function AxiomSchedulerDayTileComponent_Factory(t) { return new (t || AxiomSchedulerDayTileComponent)(ɵɵdirectiveInject(Injector), ɵɵdirectiveInject(ElementRef)); };
AxiomSchedulerDayTileComponent.ɵcmp = ɵɵdefineComponent({ type: AxiomSchedulerDayTileComponent, selectors: [["", "ax-scheduler-day-tile", ""]], hostAttrs: [1, "ax-scheduler__month-view__day"], inputs: { day: "day", index: "index" }, features: [ɵɵInheritDefinitionFeature], attrs: _c0$5, decls: 8, vars: 9, consts: [["title", "Click to show events", "class", "ax-scheduler__month-view__day_list", "enable-background", "new 0 0 24 24", "id", "Layer_1", "version", "1.0", "viewBox", "0 0 24 24", 0, "xml", "space", "preserve", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", 3, "click", 4, "ngIf"], [1, "ax-scheduler__month-view__day__number", 3, "ngClass"], ["class", "ax-scheduler__month-view__day__label", 4, "ngIf"], [1, "ax-scheduler__month-view__day__events"], [1, "ax-scheduler__month-view__day__events_container"], [4, "ngFor", "ngForOf"], ["class", "more-item", 3, "click", 4, "ngIf"], ["title", "Click to show events", "enable-background", "new 0 0 24 24", "id", "Layer_1", "version", "1.0", "viewBox", "0 0 24 24", 0, "xml", "space", "preserve", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", 1, "ax-scheduler__month-view__day_list", 3, "click"], ["cx", "12", "cy", "12", "r", "2"], ["cx", "12", "cy", "5", "r", "2"], ["cx", "12", "cy", "19", "r", "2"], [1, "ax-scheduler__month-view__day__label"], ["ax-scheduler-event", "", 3, "event", "monthMode", "axEventToolbar", "axEventTemplate", 4, "ngIf"], ["ax-scheduler-event", "", 3, "event", "monthMode", "axEventToolbar", "axEventTemplate"], [1, "more-item", 3, "click"]], template: function AxiomSchedulerDayTileComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, AxiomSchedulerDayTileComponent__svg_svg_0_Template, 4, 0, "svg", 0);
        ɵɵelementStart(1, "span", 1);
        ɵɵtext(2);
        ɵɵelementEnd();
        ɵɵtemplate(3, AxiomSchedulerDayTileComponent_div_3_Template, 2, 1, "div", 2);
        ɵɵelementStart(4, "div", 3);
        ɵɵelementStart(5, "div", 4);
        ɵɵtemplate(6, AxiomSchedulerDayTileComponent_ng_container_6_Template, 2, 1, "ng-container", 5);
        ɵɵelementEnd();
        ɵɵtemplate(7, AxiomSchedulerDayTileComponent_div_7_Template, 2, 1, "div", 6);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵproperty("ngIf", ctx.dayEvents && ctx.dayEvents.length > 0);
        ɵɵadvance(1);
        ɵɵproperty("ngClass", ɵɵpureFunction2(6, _c1$1, ctx.day.isSame(ctx.today, "days"), ctx.inMonth));
        ɵɵadvance(1);
        ɵɵtextInterpolate1(" ", ctx.day.format("DD"), "\n");
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.index < 7);
        ɵɵadvance(3);
        ɵɵproperty("ngForOf", ctx.dayEvents);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.dayEvents.length > 2);
    } }, directives: [NgIf, NgClass, NgForOf, AxiomSchedulerEventComponent], styles: [""], encapsulation: 2, data: { animation: [
            trigger('dialogAnimation', [
                transition(':enter', [
                    style({ transform: 'scale(0)' }),
                    animate(`${190}ms ease-in`, style({ transform: 'scale(1.1)' })),
                    animate(`${100}ms ease-in`, style({ transform: 'scale(1)' }))
                ]),
                transition(':leave', [
                    animate(`${80}ms ease-in-out`, style({ transform: 'scale(0)' }))
                ])
            ])
        ] } });
/*@__PURE__*/ (function () { ɵsetClassMetadata(AxiomSchedulerDayTileComponent, [{
        type: Component,
        args: [{
                selector: '[ax-scheduler-day-tile]',
                templateUrl: './axiom-scheduler-day-tile.component.html',
                styleUrls: ['./axiom-scheduler-day-tile.component.scss'],
                encapsulation: ViewEncapsulation.None,
                host: {
                    'class': 'ax-scheduler__month-view__day'
                },
                animations: [
                    trigger('dialogAnimation', [
                        transition(':enter', [
                            style({ transform: 'scale(0)' }),
                            animate(`${190}ms ease-in`, style({ transform: 'scale(1.1)' })),
                            animate(`${100}ms ease-in`, style({ transform: 'scale(1)' }))
                        ]),
                        transition(':leave', [
                            animate(`${80}ms ease-in-out`, style({ transform: 'scale(0)' }))
                        ])
                    ])
                ]
            }]
    }], function () { return [{ type: Injector }, { type: ElementRef }]; }, { day: [{
            type: Input
        }], index: [{
            type: Input
        }] }); })();

const _c0$6 = ["ax-scheduler-month-tile-day", ""];
const moment$6 = momentNs;
class AxiomSchedulerMonthTileDayComponent extends AxiomSchedulerComponentCommon {
    constructor(injector, _renderer, _element) {
        super(injector);
        this._renderer = _renderer;
        this._element = _element;
        this.events = [];
    }
    ngOnInit() {
        this.refresh();
        this.refreshView();
    }
    showEventsDialog() {
        if (this.events && this.events.length > 0) {
            this.sidebarService.open({ title: `${this.day.format('DD MMMM YYYY')}`, events: this.events });
        }
    }
    refreshView() {
        this.checkEvents();
        var text = `${this.events.length} event${this.events.length > 1 ? "s" : ""}, Click to show detail...`;
        this._renderer.setAttribute(this._element.nativeElement, 'title', text);
    }
    checkEvents() {
        this.events = [];
        this.service.axEvents.forEach(ev => {
            if (ev.to && ev.from) {
                if (moment$6(ev.from).isSameOrAfter(this.day.clone().startOf('day')) && moment$6(ev.to).isSameOrBefore(this.day.clone().endOf('day'))) {
                    this.events.push(ev);
                }
            }
            else if (ev.from && !ev.to) {
                if (moment$6(ev.from).isSameOrAfter(this.day.clone().startOf('day')) && moment$6(ev.from).isSameOrBefore(this.day.clone().endOf('day'))) {
                    this.events.push(ev);
                }
            }
        });
    }
}
AxiomSchedulerMonthTileDayComponent.ɵfac = function AxiomSchedulerMonthTileDayComponent_Factory(t) { return new (t || AxiomSchedulerMonthTileDayComponent)(ɵɵdirectiveInject(Injector), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef)); };
AxiomSchedulerMonthTileDayComponent.ɵcmp = ɵɵdefineComponent({ type: AxiomSchedulerMonthTileDayComponent, selectors: [["", "ax-scheduler-month-tile-day", ""]], hostAttrs: [1, "ax-scheduler__year-view__month__day"], hostVars: 2, hostBindings: function AxiomSchedulerMonthTileDayComponent_HostBindings(rf, ctx) { if (rf & 1) {
        ɵɵlistener("click", function AxiomSchedulerMonthTileDayComponent_click_HostBindingHandler() { return ctx.showEventsDialog(); });
    } if (rf & 2) {
        ɵɵclassProp("hasEvent", ctx.events.length > 0);
    } }, inputs: { day: "day" }, features: [ɵɵInheritDefinitionFeature], attrs: _c0$6, decls: 1, vars: 1, template: function AxiomSchedulerMonthTileDayComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtext(0);
    } if (rf & 2) {
        ɵɵtextInterpolate1("\n", ctx.day.format("DD"), "\n");
    } }, styles: [""], encapsulation: 2, data: { animation: [
            trigger('dialogAnimation', [
                transition(':enter', [
                    style({ transform: 'scale(0)' }),
                    animate(`${190}ms ease-in`, style({ transform: 'scale(1.1)' })),
                    animate(`${100}ms ease-in`, style({ transform: 'scale(1)' }))
                ]),
                transition(':leave', [
                    animate(`${80}ms ease-in-out`, style({ transform: 'scale(0)' }))
                ])
            ])
        ] } });
/*@__PURE__*/ (function () { ɵsetClassMetadata(AxiomSchedulerMonthTileDayComponent, [{
        type: Component,
        args: [{
                selector: '[ax-scheduler-month-tile-day]',
                templateUrl: './axiom-scheduler-month-tile-day.component.html',
                styleUrls: ['./axiom-scheduler-month-tile-day.component.scss'],
                encapsulation: ViewEncapsulation.None,
                host: {
                    'class': 'ax-scheduler__year-view__month__day',
                    '[class.hasEvent]': 'events.length > 0',
                    '(click)': 'showEventsDialog()'
                },
                animations: [
                    trigger('dialogAnimation', [
                        transition(':enter', [
                            style({ transform: 'scale(0)' }),
                            animate(`${190}ms ease-in`, style({ transform: 'scale(1.1)' })),
                            animate(`${100}ms ease-in`, style({ transform: 'scale(1)' }))
                        ]),
                        transition(':leave', [
                            animate(`${80}ms ease-in-out`, style({ transform: 'scale(0)' }))
                        ])
                    ])
                ]
            }]
    }], function () { return [{ type: Injector }, { type: Renderer2 }, { type: ElementRef }]; }, { day: [{
            type: Input
        }] }); })();

const _c0$7 = ["ax-scheduler-month-tile", ""];
const _c1$2 = function (a0, a1) { return { "today": a0, "current": a1 }; };
function AxiomSchedulerMonthTileComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 3);
    ɵɵelement(1, "span", 4);
    ɵɵelementEnd();
} if (rf & 2) {
    const day_r1 = ctx.$implicit;
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngClass", ɵɵpureFunction2(6, _c1$2, day_r1.isSame(ctx_r0.today, "days"), day_r1.isSame(ctx_r0.monthObject.month, "months")));
    ɵɵadvance(1);
    ɵɵproperty("axEventTemplate", ctx_r0.axEventTemplate)("axEventFormatter", ctx_r0.axEventFormatter)("axDragStep", ctx_r0.axDragStep)("axStartDate", ctx_r0.axStartDate)("day", day_r1);
} }
class AxiomSchedulerMonthTileComponent extends AxiomSchedulerComponentCommon {
    constructor(injector) {
        super(injector);
    }
    ngOnInit() {
        this.refresh();
    }
    refreshView() {
        this.monthObject.month = this.date.startOf('months');
        this.monthObject.setDays();
    }
}
AxiomSchedulerMonthTileComponent.ɵfac = function AxiomSchedulerMonthTileComponent_Factory(t) { return new (t || AxiomSchedulerMonthTileComponent)(ɵɵdirectiveInject(Injector)); };
AxiomSchedulerMonthTileComponent.ɵcmp = ɵɵdefineComponent({ type: AxiomSchedulerMonthTileComponent, selectors: [["", "ax-scheduler-month-tile", ""]], hostAttrs: [1, "ax-scheduler__year-view__month"], inputs: { monthObject: "monthObject" }, features: [ɵɵInheritDefinitionFeature], attrs: _c0$7, decls: 4, vars: 2, consts: [[1, "ax-scheduler__year-view__month__header"], [1, "ax-scheduler__year-view__month__body"], [3, "ngClass", 4, "ngFor", "ngForOf"], [3, "ngClass"], ["ax-scheduler-month-tile-day", "", 3, "axEventTemplate", "axEventFormatter", "axDragStep", "axStartDate", "day"]], template: function AxiomSchedulerMonthTileComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵtext(1);
        ɵɵelementEnd();
        ɵɵelementStart(2, "div", 1);
        ɵɵtemplate(3, AxiomSchedulerMonthTileComponent_div_3_Template, 2, 9, "div", 2);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(1);
        ɵɵtextInterpolate1(" ", ctx.monthObject.month.format("MMMM"), "\n");
        ɵɵadvance(2);
        ɵɵproperty("ngForOf", ctx.monthObject.days);
    } }, directives: [NgForOf, NgClass, AxiomSchedulerMonthTileDayComponent], styles: [""], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(AxiomSchedulerMonthTileComponent, [{
        type: Component,
        args: [{
                selector: '[ax-scheduler-month-tile]',
                templateUrl: './axiom-scheduler-month-tile.component.html',
                styleUrls: ['./axiom-scheduler-month-tile.component.scss'],
                encapsulation: ViewEncapsulation.None,
                host: {
                    'class': 'ax-scheduler__year-view__month'
                }
            }]
    }], function () { return [{ type: Injector }]; }, { monthObject: [{
            type: Input
        }] }); })();

const _c0$8 = ["ax-scheduler-sidebar", ""];
function AxiomSchedulerSidebarComponent_h6_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "h6");
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r0.data.title);
} }
function AxiomSchedulerSidebarComponent_ng_container_3_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "div", 3);
} if (rf & 2) {
    const event_r3 = ctx.$implicit;
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵproperty("@slideInOutRight", undefined)("event", event_r3)("monthMode", true)("axEventToolbar", ctx_r2.axEventToolbar)("axEventTemplate", ctx_r2.axEventTemplate);
} }
function AxiomSchedulerSidebarComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, AxiomSchedulerSidebarComponent_ng_container_3_div_1_Template, 1, 5, "div", 2);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r1.data.events);
} }
class AxiomSchedulerSidebarComponent {
    constructor(_element, _sidebarService) {
        this._element = _element;
        this._sidebarService = _sidebarService;
        this.axEventToolbar = true;
        this.destroyed = new ReplaySubject(1);
    }
    ngOnInit() {
        this.subs = this._sidebarService.data.subscribe(data => {
            this.data = data;
            this.setEventObserver();
        });
    }
    ngOnDestroy() {
        this.destroyEventObserver();
        this.subs && this.subs.unsubscribe();
    }
    close() {
        this._sidebarService.close();
    }
    closeOnGlobalKeydown(event) {
        if (event.keyCode === 27) {
            this._sidebarService.close();
        }
    }
    setEventObserver() {
        this.destroyed = new ReplaySubject(1);
        fromEvent(document, 'keydown').pipe(takeUntil(this.destroyed)).subscribe((event) => this.closeOnGlobalKeydown(event));
    }
    destroyEventObserver() {
        if (this.destroyed) {
            this.destroyed.next(true);
            this.destroyed.complete();
        }
    }
}
AxiomSchedulerSidebarComponent.ɵfac = function AxiomSchedulerSidebarComponent_Factory(t) { return new (t || AxiomSchedulerSidebarComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(AxiomSchedulerSidebarService)); };
AxiomSchedulerSidebarComponent.ɵcmp = ɵɵdefineComponent({ type: AxiomSchedulerSidebarComponent, selectors: [["", "ax-scheduler-sidebar", ""]], hostAttrs: [1, "ax-scheduler__sidebar"], inputs: { axEventTemplate: "axEventTemplate", axEventToolbar: "axEventToolbar" }, attrs: _c0$8, decls: 4, vars: 2, consts: [[1, "ax-scheduler__close-button", 3, "click"], [4, "ngIf"], ["ax-scheduler-event", "", 3, "event", "monthMode", "axEventToolbar", "axEventTemplate", 4, "ngFor", "ngForOf"], ["ax-scheduler-event", "", 3, "event", "monthMode", "axEventToolbar", "axEventTemplate"]], template: function AxiomSchedulerSidebarComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "span", 0);
        ɵɵlistener("click", function AxiomSchedulerSidebarComponent_Template_span_click_0_listener() { return ctx.close(); });
        ɵɵtext(1, "\u00D7");
        ɵɵelementEnd();
        ɵɵtemplate(2, AxiomSchedulerSidebarComponent_h6_2_Template, 2, 1, "h6", 1);
        ɵɵtemplate(3, AxiomSchedulerSidebarComponent_ng_container_3_Template, 2, 1, "ng-container", 1);
    } if (rf & 2) {
        ɵɵadvance(2);
        ɵɵproperty("ngIf", ctx.data);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.data);
    } }, directives: [NgIf, NgForOf, AxiomSchedulerEventComponent], styles: [""], encapsulation: 2, data: { animation: [
            trigger('slideInOutRight', [
                transition(':enter', [
                    style({ transform: 'translateX(100%)' }),
                    animate(`${150}ms ease-in`, style({ transform: 'translateX(0%)' }))
                ]),
                transition(':leave', [
                    animate(`${240}ms ease-out`, style({ transform: 'translateX(100%)' }))
                ])
            ])
        ] } });
/*@__PURE__*/ (function () { ɵsetClassMetadata(AxiomSchedulerSidebarComponent, [{
        type: Component,
        args: [{
                selector: '[ax-scheduler-sidebar]',
                templateUrl: './axiom-scheduler-sidebar.component.html',
                styleUrls: ['./axiom-scheduler-sidebar.component.scss'],
                encapsulation: ViewEncapsulation.None,
                host: {
                    'class': 'ax-scheduler__sidebar'
                },
                animations: [
                    trigger('slideInOutRight', [
                        transition(':enter', [
                            style({ transform: 'translateX(100%)' }),
                            animate(`${150}ms ease-in`, style({ transform: 'translateX(0%)' }))
                        ]),
                        transition(':leave', [
                            animate(`${240}ms ease-out`, style({ transform: 'translateX(100%)' }))
                        ])
                    ])
                ]
            }]
    }], function () { return [{ type: ElementRef }, { type: AxiomSchedulerSidebarService }]; }, { axEventTemplate: [{
            type: Input
        }], axEventToolbar: [{
            type: Input
        }] }); })();

const _c0$9 = ["ax-scheduler-month-view", ""];
function AxiomSchedulerMonthViewComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "div", 2);
} if (rf & 2) {
    const day_r2 = ctx.$implicit;
    const index_r3 = ctx.index;
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("axEventTemplate", ctx_r0.axEventTemplate)("axEventFormatter", ctx_r0.axEventFormatter)("axDragStep", ctx_r0.axDragStep)("axStartDate", ctx_r0.axStartDate)("axEventToolbar", ctx_r0.axEventToolbar)("day", day_r2)("index", index_r3);
} }
function AxiomSchedulerMonthViewComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "div", 3);
} if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("@slideInOutRight", undefined)("axEventTemplate", ctx_r1.axEventTemplate)("axEventToolbar", ctx_r1.axEventToolbar);
} }
const moment$7 = momentNs;
class AxiomSchedulerMonthViewComponent extends AxiomSchedulerComponentCommon {
    constructor(injector) {
        super(injector);
        this.sidebar = false;
    }
    ngOnInit() {
        this.subscriptionGarbageCollection.push(this.sidebarService.toggle.subscribe(toggle => {
            this.sidebar = toggle;
        }));
        this.refresh();
        this.refreshView();
    }
    refreshView() {
        this.setDays();
    }
    setDays() {
        const monthSize = 42;
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
            for (let index = 1; index <= size; index++) {
                this.days.push(endOfMonth.clone().add(index, 'days'));
            }
        }
    }
}
AxiomSchedulerMonthViewComponent.ɵfac = function AxiomSchedulerMonthViewComponent_Factory(t) { return new (t || AxiomSchedulerMonthViewComponent)(ɵɵdirectiveInject(Injector)); };
AxiomSchedulerMonthViewComponent.ɵcmp = ɵɵdefineComponent({ type: AxiomSchedulerMonthViewComponent, selectors: [["", "ax-scheduler-month-view", ""]], hostAttrs: [1, "ax-scheduler__month-view"], features: [ɵɵInheritDefinitionFeature], attrs: _c0$9, decls: 2, vars: 2, consts: [["ax-scheduler-day-tile", "", 3, "axEventTemplate", "axEventFormatter", "axDragStep", "axStartDate", "axEventToolbar", "day", "index", 4, "ngFor", "ngForOf"], ["ax-scheduler-sidebar", "", 3, "axEventTemplate", "axEventToolbar", 4, "ngIf"], ["ax-scheduler-day-tile", "", 3, "axEventTemplate", "axEventFormatter", "axDragStep", "axStartDate", "axEventToolbar", "day", "index"], ["ax-scheduler-sidebar", "", 3, "axEventTemplate", "axEventToolbar"]], template: function AxiomSchedulerMonthViewComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, AxiomSchedulerMonthViewComponent_div_0_Template, 1, 7, "div", 0);
        ɵɵtemplate(1, AxiomSchedulerMonthViewComponent_div_1_Template, 1, 3, "div", 1);
    } if (rf & 2) {
        ɵɵproperty("ngForOf", ctx.days);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.sidebar);
    } }, directives: [NgForOf, NgIf, AxiomSchedulerDayTileComponent, AxiomSchedulerSidebarComponent], styles: [""], encapsulation: 2, data: { animation: [
            trigger('slideInOutRight', [
                transition(':enter', [
                    style({ transform: 'translateX(-100%)' }),
                    animate(`${120}ms ease-in-out`, style({ transform: 'translateX(0%)' }))
                ]),
                transition(':leave', [
                    animate(`${100}ms ease-in-out`, style({ transform: 'translateX(100%)' }))
                ])
            ])
        ] } });
/*@__PURE__*/ (function () { ɵsetClassMetadata(AxiomSchedulerMonthViewComponent, [{
        type: Component,
        args: [{
                selector: '[ax-scheduler-month-view]',
                templateUrl: './axiom-scheduler-month-view.component.html',
                styleUrls: ['./axiom-scheduler-month-view.component.scss'],
                encapsulation: ViewEncapsulation.None,
                host: {
                    'class': 'ax-scheduler__month-view'
                },
                animations: [
                    trigger('slideInOutRight', [
                        transition(':enter', [
                            style({ transform: 'translateX(-100%)' }),
                            animate(`${120}ms ease-in-out`, style({ transform: 'translateX(0%)' }))
                        ]),
                        transition(':leave', [
                            animate(`${100}ms ease-in-out`, style({ transform: 'translateX(100%)' }))
                        ])
                    ])
                ]
            }]
    }], function () { return [{ type: Injector }]; }, null); })();

const _c0$a = ["ax-scheduler-week-view", ""];
const _c1$3 = function (a0) { return { "today": a0 }; };
function AxiomSchedulerWeekViewComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵelementStart(1, "span", 6);
    ɵɵtext(2);
    ɵɵelementStart(3, "span", 7);
    ɵɵelementStart(4, "p");
    ɵɵtext(5, "th");
    ɵɵelementEnd();
    ɵɵelementStart(6, "p");
    ɵɵtext(7);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const day_r3 = ctx.$implicit;
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngClass", ɵɵpureFunction1(3, _c1$3, day_r3.isSame(ctx_r0.today, "days")));
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", day_r3.format("D"), " ");
    ɵɵadvance(5);
    ɵɵtextInterpolate(day_r3.format("dddd"));
} }
function AxiomSchedulerWeekViewComponent_div_6_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const hour_r4 = ɵɵnextContext().$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", hour_r4.start.format("HH:mm"), " ");
} }
function AxiomSchedulerWeekViewComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵelementStart(1, "div");
    ɵɵtemplate(2, AxiomSchedulerWeekViewComponent_div_6_span_2_Template, 2, 1, "span", 8);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const index_r5 = ctx.index;
    ɵɵadvance(2);
    ɵɵproperty("ngIf", index_r5 > 0);
} }
function AxiomSchedulerWeekViewComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "div", 9);
} if (rf & 2) {
    const day_r8 = ctx.$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("hourColumn", false)("axEventTemplate", ctx_r2.axEventTemplate)("axEventFormatter", ctx_r2.axEventFormatter)("axEventToolbar", ctx_r2.axEventToolbar)("axDragStep", ctx_r2.axDragStep)("axStartDate", day_r8.toDate());
} }
const moment$8 = momentNs;
class AxiomSchedulerWeekViewComponent extends AxiomSchedulerComponentCommon {
    constructor(injector) {
        super(injector);
    }
    ngOnInit() {
        this.refresh();
        this.refreshView();
    }
    refreshView() {
        this.updateDays();
        this.setHours();
    }
    updateDays() {
        var startOfWeek = this.date.clone().startOf('isoWeek');
        var endOfWeek = this.date.clone().endOf('isoWeek');
        this.days = [];
        var day = startOfWeek;
        while (day <= endOfWeek) {
            this.days.push(day);
            day = day.clone().add(1, 'd');
        }
    }
    setHours() {
        this.hours = [];
        for (let hour = 0; hour <= 23; hour++) {
            this.hours.push(new AxiomSchedulerHour(this.date.clone().startOf('day').add(hour, 'hours')));
        }
    }
}
AxiomSchedulerWeekViewComponent.ɵfac = function AxiomSchedulerWeekViewComponent_Factory(t) { return new (t || AxiomSchedulerWeekViewComponent)(ɵɵdirectiveInject(Injector)); };
AxiomSchedulerWeekViewComponent.ɵcmp = ɵɵdefineComponent({ type: AxiomSchedulerWeekViewComponent, selectors: [["", "ax-scheduler-week-view", ""]], hostAttrs: [1, "ax-scheduler__week-view"], features: [ɵɵInheritDefinitionFeature], attrs: _c0$a, decls: 10, vars: 3, consts: [[1, "ax-scheduler__week-view__header"], [4, "ngFor", "ngForOf"], [1, "ax-scheduler__week-view__body"], [1, "ax-scheduler__week-view__body__hour-column"], [1, "ax-scheduler__week-view__body__day-column"], ["ax-scheduler-day-column", "", 3, "hourColumn", "axEventTemplate", "axEventFormatter", "axEventToolbar", "axDragStep", "axStartDate", 4, "ngFor", "ngForOf"], [1, "header_number", 3, "ngClass"], [1, "header_day_title"], [4, "ngIf"], ["ax-scheduler-day-column", "", 3, "hourColumn", "axEventTemplate", "axEventFormatter", "axEventToolbar", "axDragStep", "axStartDate"]], template: function AxiomSchedulerWeekViewComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵelement(1, "div");
        ɵɵelementStart(2, "div");
        ɵɵtemplate(3, AxiomSchedulerWeekViewComponent_div_3_Template, 8, 5, "div", 1);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(4, "div", 2);
        ɵɵelementStart(5, "div", 3);
        ɵɵtemplate(6, AxiomSchedulerWeekViewComponent_div_6_Template, 3, 1, "div", 1);
        ɵɵelementEnd();
        ɵɵelementStart(7, "div", 4);
        ɵɵelementStart(8, "div");
        ɵɵtemplate(9, AxiomSchedulerWeekViewComponent_div_9_Template, 1, 6, "div", 5);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(3);
        ɵɵproperty("ngForOf", ctx.days);
        ɵɵadvance(3);
        ɵɵproperty("ngForOf", ctx.hours);
        ɵɵadvance(3);
        ɵɵproperty("ngForOf", ctx.days);
    } }, directives: [NgForOf, NgClass, NgIf, AxiomSchedulerDayColumnComponent], styles: ["@-webkit-keyframes slide-in-left{0%{opacity:0;transform:translateX(-100px)}to{opacity:1;transform:translateX(0)}}@keyframes slide-in-left{0%{opacity:0;transform:translateX(-1000px)}to{opacity:1;transform:translateX(0)}}@-webkit-keyframes slide-in-right{0%{opacity:0;transform:translateX(100px)}to{opacity:1;transform:translateX(0)}}@keyframes slide-in-right{0%{opacity:0;transform:translateX(100px)}to{opacity:1;transform:translateX(0)}}@-webkit-keyframes slit-in-vertical{0%{opacity:0;transform:translateZ(-800px) rotateY(90deg)}54%{opacity:1;transform:translateZ(-160px) rotateY(87deg)}to{transform:translateZ(0) rotateY(0)}}@keyframes slit-in-vertical{0%{opacity:0;transform:translateZ(-800px) rotateY(90deg)}54%{opacity:1;transform:translateZ(-160px) rotateY(87deg)}to{transform:translateZ(0) rotateY(0)}}@-webkit-keyframes flip-in-hor-bottom{0%{opacity:0;transform:rotateX(80deg)}to{opacity:1;transform:rotateX(0)}}@keyframes flip-in-hor-bottom{0%{opacity:0;transform:rotateX(80deg)}to{opacity:1;transform:rotateX(0)}}@-webkit-keyframes swing-in-top-fwd{0%{opacity:0;transform:rotateX(-100deg);transform-origin:top}to{opacity:1;transform:rotateX(0deg);transform-origin:top}}@keyframes swing-in-top-fwd{0%{opacity:0;transform:rotateX(-100deg);transform-origin:top}to{opacity:1;transform:rotateX(0deg);transform-origin:top}}@-webkit-keyframes pulse{0%{-webkit-box-shadow:0 0 0 0 rgba(204,169,44,.4)}70%{-webkit-box-shadow:0 0 0 10px rgba(204,169,44,0)}to{-webkit-box-shadow:0 0 0 0 rgba(204,169,44,0)}}@keyframes pulse{0%{box-shadow:0 0 0 0 rgba(204,169,44,.4)}70%{box-shadow:0 0 0 10px rgba(204,169,44,0)}to{box-shadow:0 0 0 0 rgba(204,169,44,0)}}@-webkit-keyframes animation-scale{0%{opacity:0;transform:scale(0)}to{opacity:1;transform:scale(1)}}@keyframes animation-scale{0%{opacity:0;transform:scale(0)}to{opacity:1;transform:scale(1)}}@-webkit-keyframes animation-rotate{0%{opacity:0;transform:translateX(50%) scale(0) rotate(-60deg)}to{opacity:1;transform:translateX(0) scale(1) rotate(0deg)}}@keyframes animation-rotate{0%{opacity:0;transform:translateX(50%) scale(0) rotate(-60deg)}to{opacity:1;transform:translateX(0) scale(1) rotate(0deg)}}@-webkit-keyframes animation-flip{0%{opacity:0;transform:rotateY(180deg)}to{opacity:1;transform:rotateY(0deg)}}@keyframes animation-flip{0%{opacity:0;transform:rotateY(180deg)}to{opacity:1;transform:rotateY(0deg)}}@-webkit-keyframes rotate-in-2-cw{0%{opacity:0;transform:rotate(-45deg)}to{opacity:1;transform:rotate(0)}}@keyframes rotate-in-2-cw{0%{opacity:0;transform:rotate(-45deg)}to{opacity:1;transform:rotate(0)}}@-webkit-keyframes slide-in-fwd-left{0%{opacity:0;transform:translateZ(-1400px) translateX(-1000px)}to{opacity:1;transform:translateZ(0) translateX(0)}}@keyframes slide-in-fwd-left{0%{opacity:0;transform:translateZ(-1400px) translateX(-1000px)}to{opacity:1;transform:translateZ(0) translateX(0)}}@-webkit-keyframes slide-in-fwd-center{0%{opacity:0;transform:translateZ(-1400px)}to{opacity:1;transform:translateZ(0)}}@keyframes slide-in-fwd-center{0%{opacity:0;transform:translateZ(-1400px)}to{opacity:1;transform:translateZ(0)}}@-webkit-keyframes flip-in-ver-right{0%{opacity:0;transform:rotateY(-80deg)}to{opacity:1;transform:rotateY(0)}}@keyframes flip-in-ver-right{0%{opacity:0;transform:rotateY(-80deg)}to{opacity:1;transform:rotateY(0)}}@-webkit-keyframes flip-in-ver-left{0%{opacity:0;transform:rotateY(80deg)}to{opacity:1;transform:rotateY(0)}}@keyframes flip-in-ver-left{0%{opacity:0;transform:rotateY(80deg)}to{opacity:1;transform:rotateY(0)}}@-webkit-keyframes fade-in-left{0%{opacity:0;transform:translateX(-30px)}to{opacity:1;transform:translateX(0)}}@keyframes fade-in-left{0%{opacity:0;transform:translateX(-30px)}to{opacity:1;transform:translateX(0)}}@-webkit-keyframes fade-in-right{0%{opacity:0;transform:translateX(30px)}to{opacity:1;transform:translateX(0)}}@keyframes fade-in-right{0%{opacity:0;transform:translateX(30px)}to{opacity:1;transform:translateX(0)}}@-webkit-keyframes slide-out-right{0%{opacity:1;transform:translateX(0)}to{opacity:0;transform:translateX(1000px)}}@keyframes slide-out-right{0%{opacity:1;transform:translateX(0)}to{opacity:0;transform:translateX(1000px)}}.ax-scheduler.animation1 .ax-scheduler__week-view__header>div>div,.ax-scheduler.animation4 .ax-scheduler__day-view__body{-webkit-animation:animation-scale .3s ease-in-out both;animation:animation-scale .3s ease-in-out both}.ax-scheduler.animation1 .ax-scheduler__day-view__body,.ax-scheduler.animation1 .ax-scheduler__day-view__header .header_number,.ax-scheduler.animation1 .ax-scheduler__month-view__day,.ax-scheduler.animation1 .ax-scheduler__year-view>div,.ax-scheduler.animation2 .ax-scheduler__day-view__header .header_number,.ax-scheduler.animation3 .ax-scheduler__day-view__header .header_number,.ax-scheduler.animation4 .ax-scheduler__day-view__header .header_number{-webkit-animation:animation-flip .3s cubic-bezier(.25,.25,.25,1.15) both;animation:animation-flip .3s cubic-bezier(.25,.25,.25,1.15) both}.ax-scheduler.animation2 .ax-scheduler__month-view__day,.ax-scheduler.animation2 .ax-scheduler__week-view__header>div>div,.ax-scheduler.animation2 .ax-scheduler__year-view>div{-webkit-animation:swing-in-top-fwd .3s cubic-bezier(.175,.885,.32,1.275) both;animation:swing-in-top-fwd .3s cubic-bezier(.175,.885,.32,1.275) both}.ax-scheduler.animation2 .ax-scheduler__day-view__body{-webkit-animation:slit-in-vertical .3s ease-out both;animation:slit-in-vertical .3s ease-out both}.ax-scheduler.animation3 .ax-scheduler__month-view__day,.ax-scheduler.animation3 .ax-scheduler__year-view>div{-webkit-animation:rotate-in-2-cw .3s cubic-bezier(.25,.46,.45,.94) both;animation:rotate-in-2-cw .3s cubic-bezier(.25,.46,.45,.94) both}.ax-scheduler.animation3 .ax-scheduler__day-view__body{-webkit-animation:slide-in-fwd-left .3s cubic-bezier(.25,.46,.45,.94) both;animation:slide-in-fwd-left .3s cubic-bezier(.25,.46,.45,.94) both}.ax-scheduler.animation3 .ax-scheduler__week-view__header>div>div,.ax-scheduler.animation4 .ax-scheduler__week-view__header>div>div{-webkit-animation:slide-in-fwd-center .4s cubic-bezier(.25,.46,.45,.94) both;animation:slide-in-fwd-center .4s cubic-bezier(.25,.46,.45,.94) both}.ax-scheduler.animation4 .ax-scheduler__month-view__day,.ax-scheduler.animation4 .ax-scheduler__year-view>div{-webkit-animation:flip-in-ver-right .3s cubic-bezier(.25,.46,.45,.94) both;animation:flip-in-ver-right .3s cubic-bezier(.25,.46,.45,.94) both}.ax-scheduler.default.backward .ax-scheduler__day-view__header .header_number,.ax-scheduler.default.backward .ax-scheduler__month-view__day,.ax-scheduler.default.backward .ax-scheduler__week-view__header>div>div,.ax-scheduler.default.backward .ax-scheduler__year-view>div{-webkit-animation:fade-in-left .2s cubic-bezier(.39,.575,.565,1) both;animation:fade-in-left .2s cubic-bezier(.39,.575,.565,1) both}.ax-scheduler.default.forward .ax-scheduler__day-view__header .header_number,.ax-scheduler.default.forward .ax-scheduler__month-view__day,.ax-scheduler.default.forward .ax-scheduler__week-view__header>div>div,.ax-scheduler.default.forward .ax-scheduler__year-view>div{-webkit-animation:fade-in-right .2s cubic-bezier(.39,.575,.565,1) both;animation:fade-in-right .2s cubic-bezier(.39,.575,.565,1) both}.ax-scheduler__month-view__day:first-child{-webkit-animation-delay:.03s;animation-delay:.03s}.ax-scheduler__month-view__day:nth-child(2){-webkit-animation-delay:.06s;animation-delay:.06s}.ax-scheduler__month-view__day:nth-child(3){-webkit-animation-delay:.09s;animation-delay:.09s}.ax-scheduler__month-view__day:nth-child(4){-webkit-animation-delay:.12s;animation-delay:.12s}.ax-scheduler__month-view__day:nth-child(5){-webkit-animation-delay:.15s;animation-delay:.15s}.ax-scheduler__month-view__day:nth-child(6){-webkit-animation-delay:.18s;animation-delay:.18s}.ax-scheduler__month-view__day:nth-child(7){-webkit-animation-delay:.21s;animation-delay:.21s}.ax-scheduler__month-view__day:nth-child(8){-webkit-animation-delay:.24s;animation-delay:.24s}.ax-scheduler__month-view__day:nth-child(9){-webkit-animation-delay:.27s;animation-delay:.27s}.ax-scheduler__month-view__day:nth-child(10){-webkit-animation-delay:.3s;animation-delay:.3s}.ax-scheduler__month-view__day:nth-child(11){-webkit-animation-delay:.33s;animation-delay:.33s}.ax-scheduler__month-view__day:nth-child(12){-webkit-animation-delay:.36s;animation-delay:.36s}.ax-scheduler__month-view__day:nth-child(13){-webkit-animation-delay:.39s;animation-delay:.39s}.ax-scheduler__month-view__day:nth-child(14){-webkit-animation-delay:.42s;animation-delay:.42s}.ax-scheduler__month-view__day:nth-child(15){-webkit-animation-delay:.45s;animation-delay:.45s}.ax-scheduler__month-view__day:nth-child(16){-webkit-animation-delay:.48s;animation-delay:.48s}.ax-scheduler__month-view__day:nth-child(17){-webkit-animation-delay:.51s;animation-delay:.51s}.ax-scheduler__month-view__day:nth-child(18){-webkit-animation-delay:.54s;animation-delay:.54s}.ax-scheduler__month-view__day:nth-child(19){-webkit-animation-delay:.57s;animation-delay:.57s}.ax-scheduler__month-view__day:nth-child(20){-webkit-animation-delay:.6s;animation-delay:.6s}.ax-scheduler__month-view__day:nth-child(21){-webkit-animation-delay:.63s;animation-delay:.63s}.ax-scheduler__month-view__day:nth-child(22){-webkit-animation-delay:.66s;animation-delay:.66s}.ax-scheduler__month-view__day:nth-child(23){-webkit-animation-delay:.69s;animation-delay:.69s}.ax-scheduler__month-view__day:nth-child(24){-webkit-animation-delay:.72s;animation-delay:.72s}.ax-scheduler__month-view__day:nth-child(25){-webkit-animation-delay:.75s;animation-delay:.75s}.ax-scheduler__month-view__day:nth-child(26){-webkit-animation-delay:.78s;animation-delay:.78s}.ax-scheduler__month-view__day:nth-child(27){-webkit-animation-delay:.81s;animation-delay:.81s}.ax-scheduler__month-view__day:nth-child(28){-webkit-animation-delay:.84s;animation-delay:.84s}.ax-scheduler__month-view__day:nth-child(29){-webkit-animation-delay:.87s;animation-delay:.87s}.ax-scheduler__month-view__day:nth-child(30){-webkit-animation-delay:.9s;animation-delay:.9s}.ax-scheduler__month-view__day:nth-child(31){-webkit-animation-delay:.93s;animation-delay:.93s}.ax-scheduler__month-view__day:nth-child(32){-webkit-animation-delay:.96s;animation-delay:.96s}.ax-scheduler__month-view__day:nth-child(33){-webkit-animation-delay:.99s;animation-delay:.99s}.ax-scheduler__month-view__day:nth-child(34){-webkit-animation-delay:1.02s;animation-delay:1.02s}.ax-scheduler__month-view__day:nth-child(35){-webkit-animation-delay:1.05s;animation-delay:1.05s}.ax-scheduler__month-view__day:nth-child(36){-webkit-animation-delay:1.08s;animation-delay:1.08s}.ax-scheduler__month-view__day:nth-child(37){-webkit-animation-delay:1.11s;animation-delay:1.11s}.ax-scheduler__month-view__day:nth-child(38){-webkit-animation-delay:1.14s;animation-delay:1.14s}.ax-scheduler__month-view__day:nth-child(39){-webkit-animation-delay:1.17s;animation-delay:1.17s}.ax-scheduler__month-view__day:nth-child(40){-webkit-animation-delay:1.2s;animation-delay:1.2s}.ax-scheduler__month-view__day:nth-child(41){-webkit-animation-delay:1.23s;animation-delay:1.23s}.ax-scheduler__month-view__day:nth-child(42){-webkit-animation-delay:1.26s;animation-delay:1.26s}.ax-scheduler__year-view>div:first-child{-webkit-animation-delay:.03s;animation-delay:.03s}.ax-scheduler__year-view>div:nth-child(2){-webkit-animation-delay:.06s;animation-delay:.06s}.ax-scheduler__year-view>div:nth-child(3){-webkit-animation-delay:.09s;animation-delay:.09s}.ax-scheduler__year-view>div:nth-child(4){-webkit-animation-delay:.12s;animation-delay:.12s}.ax-scheduler__year-view>div:nth-child(5){-webkit-animation-delay:.15s;animation-delay:.15s}.ax-scheduler__year-view>div:nth-child(6){-webkit-animation-delay:.18s;animation-delay:.18s}.ax-scheduler__year-view>div:nth-child(7){-webkit-animation-delay:.21s;animation-delay:.21s}.ax-scheduler__year-view>div:nth-child(8){-webkit-animation-delay:.24s;animation-delay:.24s}.ax-scheduler__year-view>div:nth-child(9){-webkit-animation-delay:.27s;animation-delay:.27s}.ax-scheduler__year-view>div:nth-child(10){-webkit-animation-delay:.3s;animation-delay:.3s}.ax-scheduler__year-view>div:nth-child(11){-webkit-animation-delay:.33s;animation-delay:.33s}.ax-scheduler__year-view>div:nth-child(12){-webkit-animation-delay:.36s;animation-delay:.36s}.ax-scheduler__day-view__body:first-child,.ax-scheduler__week-view__header>div>div:first-child{-webkit-animation-delay:.03s;animation-delay:.03s}.ax-scheduler__day-view__body:nth-child(2),.ax-scheduler__week-view__header>div>div:nth-child(2){-webkit-animation-delay:.06s;animation-delay:.06s}.ax-scheduler__day-view__body:nth-child(3),.ax-scheduler__week-view__header>div>div:nth-child(3){-webkit-animation-delay:.09s;animation-delay:.09s}.ax-scheduler__day-view__body:nth-child(4),.ax-scheduler__week-view__header>div>div:nth-child(4){-webkit-animation-delay:.12s;animation-delay:.12s}.ax-scheduler__day-view__body:nth-child(5),.ax-scheduler__week-view__header>div>div:nth-child(5){-webkit-animation-delay:.15s;animation-delay:.15s}.ax-scheduler__day-view__body:nth-child(6),.ax-scheduler__week-view__header>div>div:nth-child(6){-webkit-animation-delay:.18s;animation-delay:.18s}.ax-scheduler__day-view__body:nth-child(7),.ax-scheduler__week-view__header>div>div:nth-child(7){-webkit-animation-delay:.21s;animation-delay:.21s}.ax-scheduler.default .ax-scheduler__month-view__day:first-child,.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(2),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(3),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(4),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(5),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(6),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(7),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(8),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(9),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(10),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(11),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(12),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(13),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(14),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(15),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(16),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(17),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(18),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(19),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(20),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(21),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(22),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(23),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(24),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(25),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(26),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(27),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(28),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(29),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(30),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(31),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(32),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(33),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(34),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(35),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(36),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(37),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(38),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(39),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(40),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(41),.ax-scheduler.default .ax-scheduler__month-view__day:nth-child(42),.ax-scheduler.default .ax-scheduler__year-view>div:first-child,.ax-scheduler.default .ax-scheduler__year-view>div:nth-child(2),.ax-scheduler.default .ax-scheduler__year-view>div:nth-child(3),.ax-scheduler.default .ax-scheduler__year-view>div:nth-child(4),.ax-scheduler.default .ax-scheduler__year-view>div:nth-child(5),.ax-scheduler.default .ax-scheduler__year-view>div:nth-child(6),.ax-scheduler.default .ax-scheduler__year-view>div:nth-child(7),.ax-scheduler.default .ax-scheduler__year-view>div:nth-child(8),.ax-scheduler.default .ax-scheduler__year-view>div:nth-child(9),.ax-scheduler.default .ax-scheduler__year-view>div:nth-child(10),.ax-scheduler.default .ax-scheduler__year-view>div:nth-child(11),.ax-scheduler.default .ax-scheduler__year-view>div:nth-child(12){-webkit-animation-delay:0;animation-delay:0}::-webkit-scrollbar{height:5px;width:5px}::-webkit-scrollbar-track{background:#f1f1f1}::-webkit-scrollbar-thumb{background:#888}::-webkit-scrollbar-thumb:hover{background:#555}.ax-scheduler__week-view{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;display:block;height:100%;margin:0;padding:0;position:relative;user-select:none}.ax-scheduler__week-view .ax-scheduler__week-view__header{display:block;margin:0;padding:0;position:relative;width:100%}.ax-scheduler__week-view .ax-scheduler__week-view__body>div{border:none;display:inline-block;margin:0;padding:0;vertical-align:top}.ax-scheduler__week-view .ax-scheduler__week-view__body>.ax-scheduler__week-view__body__day-column{width:calc(100% - 50px)}.ax-scheduler__week-view .ax-scheduler__week-view__body>.ax-scheduler__week-view__body__day-column>div{display:table;width:100%}.ax-scheduler__week-view .ax-scheduler__week-view__body>.ax-scheduler__week-view__body__day-column>div>div{border-left:1px solid #fff;display:table-cell;height:60px;overflow:visible;width:auto;width:7%}.ax-scheduler__week-view .ax-scheduler__week-view__body>.ax-scheduler__week-view__body__day-column>div>div:first-child{border-left:none}.ax-scheduler__week-view .ax-scheduler__week-view__body>div.ax-scheduler__week-view__body__hour-column>div:not(.ax-scheduler__event-tile){border-bottom:1px solid #ddd;display:block;height:60px;margin:0;padding:0;position:relative;width:50px}.ax-scheduler__week-view .ax-scheduler__week-view__body>div.ax-scheduler__week-view__body__hour-column>div:not(.ax-scheduler__event-tile)>div{display:block;height:100%;margin:0;padding:0;position:relative}.ax-scheduler__week-view .ax-scheduler__week-view__body>div.ax-scheduler__week-view__body__hour-column>div:not(.ax-scheduler__event-tile)>div:first-child:not(.ax-scheduler__event-tile__box){max-width:50px;min-width:50px;text-align:right;width:50px}.ax-scheduler__week-view .ax-scheduler__week-view__body>div.ax-scheduler__week-view__body__hour-column>div:not(.ax-scheduler__event-tile)>div:first-child:not(.ax-scheduler__event-tile__box)>span{color:#444;font-size:12px;padding-left:5px;padding-right:5px;position:absolute;right:0;top:-9px;vertical-align:top;z-index:2}.ax-scheduler__week-view .ax-scheduler__week-view__body>div.ax-scheduler__week-view__body__hour-column>div:not(.ax-scheduler__event-tile)>div:first-child:not(.ax-scheduler__event-tile__box):after{background:#fff;content:\"\";height:1px;left:0;position:absolute;right:0;top:-1px}.ax-scheduler__week-view .ax-scheduler__week-view__header{background:transparent;display:flex;height:60px;outline:1px solid transparent}.ax-scheduler__week-view .ax-scheduler__week-view__header>div{display:inline-block;height:100%;margin:0;padding:0;position:relative;vertical-align:top}.ax-scheduler__week-view .ax-scheduler__week-view__header>div:first-child{max-width:50px;min-width:50px;width:50px}.ax-scheduler__week-view .ax-scheduler__week-view__header>div:last-child{display:table;width:100%}.ax-scheduler__week-view .ax-scheduler__week-view__header>div:last-child>div{border:none;display:table-cell;height:100%;width:7%}.ax-scheduler__week-view .ax-scheduler__week-view__header>div:last-child>div>span.header_number{color:#444;font-size:2.2em;font-weight:400;margin:0}.ax-scheduler__week-view .ax-scheduler__week-view__header>div:last-child>div>span.header_number.today{color:#e53935!important}.ax-scheduler__week-view .ax-scheduler__week-view__header>div:last-child>div>span.header_number>span.header_day_title{color:#444;display:inline-block;font-size:.3em;margin-left:-5px}.ax-scheduler__week-view .ax-scheduler__week-view__header>div:last-child>div>span.header_number>span.header_day_title>p{margin:0;padding:0}.ax-scheduler__week-view .ax-scheduler__week-view__header>div:last-child>div>span.header_month_year{display:block;font-size:11px;margin:0}.ax-scheduler__week-view .ax-scheduler__week-view__body{height:calc(100% - 60px);overflow-x:hidden;overflow-y:auto}"], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(AxiomSchedulerWeekViewComponent, [{
        type: Component,
        args: [{
                selector: '[ax-scheduler-week-view]',
                templateUrl: './axiom-scheduler-week-view-component.component.html',
                styleUrls: ['./axiom-scheduler-week-view-component.component.scss'],
                encapsulation: ViewEncapsulation.None,
                host: {
                    'class': 'ax-scheduler__week-view'
                }
            }]
    }], function () { return [{ type: Injector }]; }, null); })();

const _c0$b = ["ax-scheduler-year-view", ""];
function AxiomSchedulerYearViewComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵelement(1, "div", 2);
    ɵɵelementEnd();
} if (rf & 2) {
    const month_r2 = ctx.$implicit;
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("monthObject", month_r2)("axEventTemplate", ctx_r0.axEventTemplate)("axEventFormatter", ctx_r0.axEventFormatter)("axDragStep", ctx_r0.axDragStep)("axEventToolbar", ctx_r0.axEventToolbar)("axStartDate", ctx_r0.axStartDate);
} }
function AxiomSchedulerYearViewComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "div", 3);
} if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("@slideInOutRight", undefined)("axEventTemplate", ctx_r1.axEventTemplate)("axEventToolbar", ctx_r1.axEventToolbar);
} }
const moment$9 = momentNs;
class AxiomSchedulerYearViewMonthObject {
    constructor(month) {
        this.month = month.clone();
        this.setDays();
    }
    setDays() {
        const monthSize = 42;
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
            for (let index = 1; index <= size; index++) {
                this.days.push(endOfMonth.clone().add(index, 'days'));
            }
        }
    }
}
class AxiomSchedulerYearViewComponent extends AxiomSchedulerComponentCommon {
    constructor(injector) {
        super(injector);
        this.sidebar = false;
    }
    ngOnInit() {
        this.subscriptionGarbageCollection.push(this.sidebarService.toggle.subscribe(toggle => {
            this.sidebar = toggle;
        }));
        this.refresh();
        this.refreshView();
    }
    refreshView() {
        this.setMonths();
    }
    setMonths() {
        var startMonth = this.date.clone().startOf('year');
        var endMonth = this.date.clone().endOf('year');
        this.months = [];
        var month = startMonth.clone();
        while (month <= endMonth) {
            this.months.push(new AxiomSchedulerYearViewMonthObject(month));
            month = month.clone().add(1, 'month');
        }
    }
}
AxiomSchedulerYearViewComponent.ɵfac = function AxiomSchedulerYearViewComponent_Factory(t) { return new (t || AxiomSchedulerYearViewComponent)(ɵɵdirectiveInject(Injector)); };
AxiomSchedulerYearViewComponent.ɵcmp = ɵɵdefineComponent({ type: AxiomSchedulerYearViewComponent, selectors: [["", "ax-scheduler-year-view", ""]], hostAttrs: [1, "ax-scheduler__year-view"], features: [ɵɵInheritDefinitionFeature], attrs: _c0$b, decls: 2, vars: 2, consts: [[4, "ngFor", "ngForOf"], ["ax-scheduler-sidebar", "", 3, "axEventTemplate", "axEventToolbar", 4, "ngIf"], ["ax-scheduler-month-tile", "", 3, "monthObject", "axEventTemplate", "axEventFormatter", "axDragStep", "axEventToolbar", "axStartDate"], ["ax-scheduler-sidebar", "", 3, "axEventTemplate", "axEventToolbar"]], template: function AxiomSchedulerYearViewComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, AxiomSchedulerYearViewComponent_div_0_Template, 2, 6, "div", 0);
        ɵɵtemplate(1, AxiomSchedulerYearViewComponent_div_1_Template, 1, 3, "div", 1);
    } if (rf & 2) {
        ɵɵproperty("ngForOf", ctx.months);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.sidebar);
    } }, styles: [""], encapsulation: 2, data: { animation: [
            trigger('slideInOutRight', [
                transition(':enter', [
                    style({ transform: 'translateX(-100%)' }),
                    animate(`${120}ms ease-in-out`, style({ transform: 'translateX(0%)' }))
                ]),
                transition(':leave', [
                    animate(`${100}ms ease-in-out`, style({ transform: 'translateX(100%)' }))
                ])
            ])
        ] } });
/*@__PURE__*/ (function () { ɵsetClassMetadata(AxiomSchedulerYearViewComponent, [{
        type: Component,
        args: [{
                selector: '[ax-scheduler-year-view]',
                templateUrl: './axiom-scheduler-year-view.component.html',
                styleUrls: ['./axiom-scheduler-year-view.component.scss'],
                encapsulation: ViewEncapsulation.None,
                host: {
                    'class': 'ax-scheduler__year-view'
                },
                animations: [
                    trigger('slideInOutRight', [
                        transition(':enter', [
                            style({ transform: 'translateX(-100%)' }),
                            animate(`${120}ms ease-in-out`, style({ transform: 'translateX(0%)' }))
                        ]),
                        transition(':leave', [
                            animate(`${100}ms ease-in-out`, style({ transform: 'translateX(100%)' }))
                        ])
                    ])
                ]
            }]
    }], function () { return [{ type: Injector }]; }, null); })();

function AxiomSchedulerDropdownComponent__svg_svg_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "svg", 3);
    ɵɵelementStart(1, "g", 4);
    ɵɵelement(2, "polyline", 5);
    ɵɵelementEnd();
    ɵɵelementEnd();
} }
function AxiomSchedulerDropdownComponent__svg_svg_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "svg", 3);
    ɵɵelementStart(1, "g", 6);
    ɵɵelement(2, "polyline", 7);
    ɵɵelementEnd();
    ɵɵelementEnd();
} }
function AxiomSchedulerDropdownComponent_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 10);
    ɵɵlistener("click", function AxiomSchedulerDropdownComponent_div_4_div_1_Template_div_click_0_listener() { ɵɵrestoreView(_r6); const item_r4 = ctx.$implicit; const ctx_r5 = ɵɵnextContext(2); return ctx_r5.select(item_r4); });
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", item_r4[ctx_r3.dataTitle], " ");
} }
function AxiomSchedulerDropdownComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 8);
    ɵɵtemplate(1, AxiomSchedulerDropdownComponent_div_4_div_1_Template, 2, 1, "div", 9);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("@dropdownAnimation", undefined);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r2.items);
} }
class AxiomSchedulerDropdownComponent {
    constructor(_element) {
        this._element = _element;
        this.items = [];
        this.ngModelChange = new EventEmitter();
        this.destroyed = new ReplaySubject(1);
        this.propagateChange = (_) => { };
        this.onTouched = () => { };
    }
    set ngModel(ngModel) {
        this._ngModel = ngModel;
    }
    get ngModel() {
        return this._ngModel;
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        this.destroyEventObserver();
    }
    onChange() {
        this.propagateChange(this.ngModel);
    }
    writeValue(obj) {
        this.ngModel = obj;
    }
    registerOnChange(fn) {
        this.propagateChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    toggle(toggle = !this.open) {
        this.open = toggle;
        if (this.open) {
            this.setEventObserver();
        }
        else {
            this.destroyEventObserver();
        }
    }
    inputFormatter() {
        if (this.ngModel) {
            var index = this.items.findIndex(i => i[this.dataId] === this.ngModel);
            if (index > -1) {
                return this.items[index][this.dataTitle];
            }
        }
        else {
            return '';
        }
    }
    select(item) {
        this.ngModel = this.modelFormatter ? this.modelFormatter(item) : item;
        this.propagateChange(this.ngModel);
        this.toggle(false);
    }
    closeOnGlobalClick(targetElement) {
        if (targetElement) {
            const arrow = targetElement.id === 'ax-dropdown-arr';
            const clickedInside = this._element.nativeElement.contains(targetElement);
            if (!clickedInside && !arrow) {
                this.toggle(false);
            }
        }
    }
    closeOnGlobalKeydown(event) {
        if (event.keyCode === 27) {
            this.toggle(false);
        }
    }
    setEventObserver() {
        this.destroyed = new ReplaySubject(1);
        fromEvent(document, 'click').pipe(takeUntil(this.destroyed)).subscribe((event) => this.closeOnGlobalClick(event.target));
        fromEvent(document, 'keydown').pipe(takeUntil(this.destroyed)).subscribe((event) => this.closeOnGlobalKeydown(event));
    }
    destroyEventObserver() {
        if (this.destroyed) {
            this.destroyed.next(true);
            this.destroyed.complete();
        }
    }
}
AxiomSchedulerDropdownComponent.ɵfac = function AxiomSchedulerDropdownComponent_Factory(t) { return new (t || AxiomSchedulerDropdownComponent)(ɵɵdirectiveInject(ElementRef)); };
AxiomSchedulerDropdownComponent.ɵcmp = ɵɵdefineComponent({ type: AxiomSchedulerDropdownComponent, selectors: [["ax-scheduler-dropdown"]], hostAttrs: [1, "ax-scheduler-dropdown"], hostVars: 2, hostBindings: function AxiomSchedulerDropdownComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵɵclassProp("open", ctx.open);
    } }, inputs: { dataTitle: "dataTitle", dataId: "dataId", items: "items", modelFormatter: "modelFormatter", ngModel: "ngModel" }, outputs: { ngModelChange: "ngModelChange" }, features: [ɵɵProvidersFeature([
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => AxiomSchedulerDropdownComponent),
                multi: true
            }
        ])], decls: 5, vars: 4, consts: [[1, "ax-scheduler-dropdown__model", 3, "click"], ["id", "ax-dropdown-arr", "height", "24px", "version", "1.1", "viewBox", "0 0 24 24", "width", "24px", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", 4, "ngIf"], ["class", "ax-scheduler-dropdown__list", 4, "ngIf"], ["id", "ax-dropdown-arr", "height", "24px", "version", "1.1", "viewBox", "0 0 24 24", "width", "24px", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink"], ["id", "ax-dropdown-arr", "fill", "none", "fill-rule", "evenodd", "id", "icon/chevron-bottom", "stroke", "none", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "1"], ["id", "ax-dropdown-arr", "id", "lineart", "points", "20.5 7.5 11.5 16.5 2.5 7.5", "stroke", "#000000"], ["id", "ax-dropdown-arr", "fill", "none", "fill-rule", "evenodd", "id", "icon/chevron-top", "stroke", "none", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "1"], ["id", "ax-dropdown-arr", "id", "lineart", "points", "20.5 15.5 11.5 6.5 2.5 15.5", "stroke", "#000000"], [1, "ax-scheduler-dropdown__list"], [3, "click", 4, "ngFor", "ngForOf"], [3, "click"]], template: function AxiomSchedulerDropdownComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵlistener("click", function AxiomSchedulerDropdownComponent_Template_div_click_0_listener() { return ctx.toggle(); });
        ɵɵtext(1);
        ɵɵtemplate(2, AxiomSchedulerDropdownComponent__svg_svg_2_Template, 3, 0, "svg", 1);
        ɵɵtemplate(3, AxiomSchedulerDropdownComponent__svg_svg_3_Template, 3, 0, "svg", 1);
        ɵɵelementEnd();
        ɵɵtemplate(4, AxiomSchedulerDropdownComponent_div_4_Template, 2, 2, "div", 2);
    } if (rf & 2) {
        ɵɵadvance(1);
        ɵɵtextInterpolate1(" ", ctx.inputFormatter(), " ");
        ɵɵadvance(1);
        ɵɵproperty("ngIf", !ctx.open);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.open);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.open);
    } }, directives: [NgIf, NgForOf], styles: [".ax-scheduler-dropdown{display:inline-block;margin:0;padding:0;position:relative;width:auto}.ax-scheduler-dropdown.open .ax-scheduler-dropdown__model{border-bottom:none;border-radius:5px 5px 0 0}.ax-scheduler-dropdown .ax-scheduler-dropdown__model{border:1px solid #ddd;border-radius:5px;display:block;margin:0;min-width:100px;padding:5px 13px 5px 8px;width:100%}.ax-scheduler-dropdown .ax-scheduler-dropdown__model svg{float:right;height:16px;position:relative;right:-7px;top:2px;width:16px}.ax-scheduler-dropdown .ax-scheduler-dropdown__list{background-color:#fff;border:1px solid #ddd;border-radius:0 0 5px 5px;border-top:none;box-shadow:0 8px 16px 0 rgba(0,0,0,.2);display:flex;flex-direction:column;margin:0;max-height:300px;overflow:auto;padding:0;position:relative;z-index:100}.ax-scheduler-dropdown .ax-scheduler-dropdown__list div{cursor:pointer;flex:1;font-size:13px;padding:5px 8px;text-align:left}.ax-scheduler-dropdown .ax-scheduler-dropdown__list div:hover{background-color:#eee}.ax-scheduler-dropdown .ax-scheduler-dropdown__list div:last-child{border-radius:0 0 5px 5px}"], encapsulation: 2, data: { animation: [
            trigger('dropdownAnimation', [
                transition(':leave', [
                    animate(`${80}ms ease-in-out`, style({ transform: 'scale(0)' }))
                ])
            ])
        ] } });
/*@__PURE__*/ (function () { ɵsetClassMetadata(AxiomSchedulerDropdownComponent, [{
        type: Component,
        args: [{
                selector: 'ax-scheduler-dropdown',
                templateUrl: './axiom-scheduler-dropdown.component.html',
                styleUrls: ['./axiom-scheduler-dropdown.component.scss'],
                encapsulation: ViewEncapsulation.None,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => AxiomSchedulerDropdownComponent),
                        multi: true
                    }
                ],
                host: {
                    'class': 'ax-scheduler-dropdown',
                    '[class.open]': 'open'
                },
                animations: [
                    trigger('dropdownAnimation', [
                        transition(':leave', [
                            animate(`${80}ms ease-in-out`, style({ transform: 'scale(0)' }))
                        ])
                    ])
                ]
            }]
    }], function () { return [{ type: ElementRef }]; }, { dataTitle: [{
            type: Input
        }], dataId: [{
            type: Input
        }], items: [{
            type: Input
        }], modelFormatter: [{
            type: Input
        }], ngModel: [{
            type: Input
        }], ngModelChange: [{
            type: Output
        }] }); })();

class AxiomSchedulerModule {
}
AxiomSchedulerModule.ɵmod = ɵɵdefineNgModule({ type: AxiomSchedulerModule });
AxiomSchedulerModule.ɵinj = ɵɵdefineInjector({ factory: function AxiomSchedulerModule_Factory(t) { return new (t || AxiomSchedulerModule)(); }, imports: [[
            CommonModule,
            FormsModule,
            AngularDraggableModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(AxiomSchedulerModule, { declarations: [AxiomSchedulerComponent,
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
        AxiomSchedulerSidebarComponent], imports: [CommonModule,
        FormsModule,
        AngularDraggableModule], exports: [AxiomSchedulerComponent,
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
        AxiomSchedulerSidebarComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(AxiomSchedulerModule, [{
        type: NgModule,
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
                    CommonModule,
                    FormsModule,
                    AngularDraggableModule
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
    }], null, null); })();
ɵɵsetComponentScope(AxiomSchedulerComponent, [NgClass, NgComponentOutlet, NgForOf, NgIf, NgTemplateOutlet, NgStyle, NgSwitch, NgSwitchCase, NgSwitchDefault, NgPlural, NgPluralCase, ɵangular_packages_forms_forms_y, NgSelectOption, ɵangular_packages_forms_forms_x, DefaultValueAccessor, NumberValueAccessor, RangeValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, SelectMultipleControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinLengthValidator, MaxLengthValidator, PatternValidator, CheckboxRequiredValidator, EmailValidator, NgModel, NgModelGroup, NgForm, AngularDraggableDirective, AngularResizableDirective, AxiomSchedulerComponent,
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
    AxiomSchedulerSidebarComponent], [AsyncPipe, UpperCasePipe, LowerCasePipe, JsonPipe, SlicePipe, DecimalPipe, PercentPipe, TitleCasePipe, CurrencyPipe, DatePipe, I18nPluralPipe, I18nSelectPipe, KeyValuePipe]);
ɵɵsetComponentScope(AxiomSchedulerDayViewComponent, [NgClass, NgComponentOutlet, NgForOf, NgIf, NgTemplateOutlet, NgStyle, NgSwitch, NgSwitchCase, NgSwitchDefault, NgPlural, NgPluralCase, ɵangular_packages_forms_forms_y, NgSelectOption, ɵangular_packages_forms_forms_x, DefaultValueAccessor, NumberValueAccessor, RangeValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, SelectMultipleControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinLengthValidator, MaxLengthValidator, PatternValidator, CheckboxRequiredValidator, EmailValidator, NgModel, NgModelGroup, NgForm, AngularDraggableDirective, AngularResizableDirective, AxiomSchedulerComponent,
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
    AxiomSchedulerSidebarComponent], [AsyncPipe, UpperCasePipe, LowerCasePipe, JsonPipe, SlicePipe, DecimalPipe, PercentPipe, TitleCasePipe, CurrencyPipe, DatePipe, I18nPluralPipe, I18nSelectPipe, KeyValuePipe]);
ɵɵsetComponentScope(AxiomSchedulerYearViewComponent, [NgClass, NgComponentOutlet, NgForOf, NgIf, NgTemplateOutlet, NgStyle, NgSwitch, NgSwitchCase, NgSwitchDefault, NgPlural, NgPluralCase, ɵangular_packages_forms_forms_y, NgSelectOption, ɵangular_packages_forms_forms_x, DefaultValueAccessor, NumberValueAccessor, RangeValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, SelectMultipleControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinLengthValidator, MaxLengthValidator, PatternValidator, CheckboxRequiredValidator, EmailValidator, NgModel, NgModelGroup, NgForm, AngularDraggableDirective, AngularResizableDirective, AxiomSchedulerComponent,
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
    AxiomSchedulerSidebarComponent], [AsyncPipe, UpperCasePipe, LowerCasePipe, JsonPipe, SlicePipe, DecimalPipe, PercentPipe, TitleCasePipe, CurrencyPipe, DatePipe, I18nPluralPipe, I18nSelectPipe, KeyValuePipe]);

/*
 * Public API Surface of axiom-scheduler
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AX_LOCALES, AxiomSchedulerAnimation, AxiomSchedulerComponent, AxiomSchedulerComponentCommon, AxiomSchedulerDayColumnComponent, AxiomSchedulerDayTileComponent, AxiomSchedulerDayViewComponent, AxiomSchedulerDropdownComponent, AxiomSchedulerEvent, AxiomSchedulerEventComponent, AxiomSchedulerHour, AxiomSchedulerHourComponent, AxiomSchedulerModule, AxiomSchedulerMonthTileComponent, AxiomSchedulerMonthTileDayComponent, AxiomSchedulerMonthViewComponent, AxiomSchedulerService, AxiomSchedulerSidebarComponent, AxiomSchedulerSidebarService, AxiomSchedulerView, AxiomSchedulerWeekViewComponent, AxiomSchedulerYearViewComponent, AxiomSchedulerYearViewMonthObject };
//# sourceMappingURL=axiom-scheduler.js.map
