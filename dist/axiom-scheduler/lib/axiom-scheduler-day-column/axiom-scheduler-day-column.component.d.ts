import { OnInit, ElementRef, Injector } from '@angular/core';
import { AxiomSchedulerComponentCommon, AxiomSchedulerEvent } from './../axiom-scheduler/axiom-scheduler.component';
import { AxiomSchedulerHour } from './../axiom-scheduler-day-view/axiom-scheduler-day-view.component';
import * as i0 from "@angular/core";
export declare class AxiomSchedulerDayColumnComponent extends AxiomSchedulerComponentCommon implements OnInit {
    _element: ElementRef;
    hourColumn: boolean;
    bounds: any;
    dayEvents: AxiomSchedulerEvent[];
    hours: AxiomSchedulerHour[];
    edge: {
        top: boolean;
        bottom: boolean;
        left: boolean;
        right: boolean;
    };
    constructor(injector: Injector, _element: ElementRef);
    ngOnInit(): void;
    refreshView(): void;
    checkEdge(event: any): void;
    private setHours;
    private checkDayEvents;
    static ɵfac: i0.ɵɵFactoryDef<AxiomSchedulerDayColumnComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<AxiomSchedulerDayColumnComponent, "[ax-scheduler-day-column]", never, { "hourColumn": "hourColumn"; "bounds": "bounds"; }, {}, never, never>;
}
