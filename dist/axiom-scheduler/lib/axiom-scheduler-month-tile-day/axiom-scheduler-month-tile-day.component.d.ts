import { OnInit, Injector, Renderer2, ElementRef } from '@angular/core';
import * as momentNs from 'moment';
import { AxiomSchedulerEvent } from './../axiom-scheduler/axiom-scheduler.component';
import { AxiomSchedulerComponentCommon } from './../axiom-scheduler/axiom-scheduler.component';
import * as i0 from "@angular/core";
export declare class AxiomSchedulerMonthTileDayComponent extends AxiomSchedulerComponentCommon implements OnInit {
    private _renderer;
    private _element;
    day: momentNs.Moment;
    events: AxiomSchedulerEvent[];
    constructor(injector: Injector, _renderer: Renderer2, _element: ElementRef);
    ngOnInit(): void;
    showEventsDialog(): void;
    refreshView(): void;
    private checkEvents;
    static ɵfac: i0.ɵɵFactoryDef<AxiomSchedulerMonthTileDayComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<AxiomSchedulerMonthTileDayComponent, "[ax-scheduler-month-tile-day]", never, { "day": "day"; }, {}, never, never>;
}
