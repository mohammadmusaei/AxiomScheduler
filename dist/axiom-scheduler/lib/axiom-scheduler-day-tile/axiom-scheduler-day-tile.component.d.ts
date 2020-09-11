import { OnInit, ElementRef, Injector } from '@angular/core';
import * as momentNs from 'moment';
import { AxiomSchedulerComponentCommon, AxiomSchedulerEvent } from './../axiom-scheduler/axiom-scheduler.component';
import * as i0 from "@angular/core";
export declare class AxiomSchedulerDayTileComponent extends AxiomSchedulerComponentCommon implements OnInit {
    private _element;
    day: momentNs.Moment;
    index: number;
    inMonth: boolean;
    dayEvents: AxiomSchedulerEvent[];
    constructor(injector: Injector, _element: ElementRef);
    ngOnInit(): void;
    refreshView(): void;
    showEventsDialog(): void;
    private checkDayEvents;
    static ɵfac: i0.ɵɵFactoryDef<AxiomSchedulerDayTileComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<AxiomSchedulerDayTileComponent, "[ax-scheduler-day-tile]", never, { "day": "day"; "index": "index"; }, {}, never, never>;
}
