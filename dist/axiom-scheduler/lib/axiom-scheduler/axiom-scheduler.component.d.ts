import { OnInit, TemplateRef, Injector, EventEmitter, OnDestroy, ElementRef, Renderer2 } from "@angular/core";
import * as momentNs from "moment";
import { AxiomSchedulerService } from "./../services/axiom-scheduler.service";
import { Subscription } from "rxjs";
import { AxiomSchedulerSidebarService } from "./../services/axiom-scheduler-sidebar.service";
import * as i0 from "@angular/core";
export declare enum AxiomSchedulerView {
    Day = "day",
    Week = "week",
    Month = "month",
    Year = "year"
}
export declare enum AxiomSchedulerAnimation {
    Animation1 = "animation1",
    Animation2 = "animation2",
    Animation3 = "animation3",
    Animation4 = "animation4",
    Default = "default",
    None = "none"
}
export declare type AxiomSchedulerTheme = "light" | "dark";
export declare class AxiomSchedulerComponentCommon implements OnDestroy {
    protected injector: Injector;
    axStartDate: Date;
    axEventTemplate: TemplateRef<any>;
    axEventFormatter: (data: any, date?: Date) => string;
    axDragStep: number;
    axLocale: string;
    axEventToolbar: boolean;
    today: momentNs.Moment;
    date: momentNs.Moment;
    service: AxiomSchedulerService;
    sidebarService: AxiomSchedulerSidebarService;
    subscriptionGarbageCollection: Subscription[];
    constructor(injector: Injector);
    refresh(): void;
    refreshView(): void;
    ngOnDestroy(): void;
    baseDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDef<AxiomSchedulerComponentCommon, never>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<AxiomSchedulerComponentCommon, never, never, { "axStartDate": "axStartDate"; "axEventTemplate": "axEventTemplate"; "axEventFormatter": "axEventFormatter"; "axDragStep": "axDragStep"; "axLocale": "axLocale"; "axEventToolbar": "axEventToolbar"; }, {}, never>;
}
export declare class AxiomSchedulerEvent {
    readonly _id: Symbol;
    from: Date;
    to: Date;
    data: any;
    color: string;
    locked: boolean;
    title: string;
    constructor(title?: string, from?: Date, to?: Date, data?: any, color?: string, locked?: boolean);
}
export declare class AxiomSchedulerComponent extends AxiomSchedulerComponentCommon implements OnInit {
    private _element;
    private _renderer;
    axEvents: AxiomSchedulerEvent[];
    axSchedulerView: AxiomSchedulerView;
    set axTheme(axTheme: AxiomSchedulerTheme);
    set axAnimation(axAnimation: AxiomSchedulerAnimation);
    axShowLocale: boolean;
    axViews: AxiomSchedulerView[];
    axEventChange: EventEmitter<AxiomSchedulerEvent>;
    axEventClick: EventEmitter<AxiomSchedulerEvent>;
    axEventDeleteClick: EventEmitter<AxiomSchedulerEvent>;
    axEventEditClick: EventEmitter<AxiomSchedulerEvent>;
    axDateChange: EventEmitter<Date>;
    axViewChange: EventEmitter<AxiomSchedulerView>;
    items: any[];
    locales: {
        id: string;
        title: string;
    }[];
    private _axTheme;
    private _axAnimation;
    constructor(injector: Injector, _element: ElementRef, _renderer: Renderer2);
    ngOnInit(): void;
    refreshScheduler(): void;
    prev(): void;
    next(): void;
    todayF(): void;
    modelFormatter(value: any): any;
    setLocale(locale: string): void;
    updateTheme(theme: "light" | "dark"): void;
    changeView(view: any): void;
    private step;
    private applyDefaultAnimations;
    private setViews;
    private setListeners;
    static ɵfac: i0.ɵɵFactoryDef<AxiomSchedulerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<AxiomSchedulerComponent, "ax-scheduler", never, { "axEvents": "axEvents"; "axSchedulerView": "axSchedulerView"; "axTheme": "axTheme"; "axAnimation": "axAnimation"; "axShowLocale": "axShowLocale"; "axViews": "axViews"; }, { "axEventChange": "axEventChange"; "axEventClick": "axEventClick"; "axEventDeleteClick": "axEventDeleteClick"; "axEventEditClick": "axEventEditClick"; "axDateChange": "axDateChange"; "axViewChange": "axViewChange"; }, never, never>;
}
