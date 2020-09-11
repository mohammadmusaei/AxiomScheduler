import { OnInit, Injector } from '@angular/core';
import { AxiomSchedulerComponentCommon } from './../axiom-scheduler/axiom-scheduler.component';
import { AxiomSchedulerEvent } from './../axiom-scheduler/axiom-scheduler.component';
import { AxiomSchedulerHour } from './../axiom-scheduler-day-view/axiom-scheduler-day-view.component';
import * as i0 from "@angular/core";
export declare class AxiomSchedulerHourComponent extends AxiomSchedulerComponentCommon implements OnInit {
    hour: AxiomSchedulerHour;
    inRnageEvents: AxiomSchedulerEvent[];
    minuteRows: {
        events: AxiomSchedulerEvent[];
        minute: number;
    }[];
    constructor(injector: Injector);
    ngOnInit(): void;
    refreshView(): void;
    private setInRangeEvent;
    static ɵfac: i0.ɵɵFactoryDef<AxiomSchedulerHourComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<AxiomSchedulerHourComponent, "[ax-scheduler-hour]", never, { "hour": "hour"; }, {}, never, never>;
}
