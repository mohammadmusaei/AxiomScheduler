import { OnInit, Injector } from '@angular/core';
import * as momentNs from 'moment';
import { AxiomSchedulerComponentCommon } from './../axiom-scheduler/axiom-scheduler.component';
import * as i0 from "@angular/core";
export declare class AxiomSchedulerHour {
    start: momentNs.Moment;
    end: momentNs.Moment;
    constructor(start: momentNs.Moment);
}
export declare class AxiomSchedulerDayViewComponent extends AxiomSchedulerComponentCommon implements OnInit {
    constructor(injector: Injector);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDef<AxiomSchedulerDayViewComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<AxiomSchedulerDayViewComponent, "[ax-scheduler-day-view]", never, {}, {}, never, never>;
}
