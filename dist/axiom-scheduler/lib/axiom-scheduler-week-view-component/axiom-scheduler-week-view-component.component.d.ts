import { OnInit, Injector } from '@angular/core';
import * as momentNs from 'moment';
import { AxiomSchedulerComponentCommon } from './../axiom-scheduler/axiom-scheduler.component';
import { AxiomSchedulerHour } from './../axiom-scheduler-day-view/axiom-scheduler-day-view.component';
import * as i0 from "@angular/core";
export declare class AxiomSchedulerWeekViewComponent extends AxiomSchedulerComponentCommon implements OnInit {
    days: momentNs.Moment[];
    hours: AxiomSchedulerHour[];
    constructor(injector: Injector);
    ngOnInit(): void;
    refreshView(): void;
    private updateDays;
    private setHours;
    static ɵfac: i0.ɵɵFactoryDef<AxiomSchedulerWeekViewComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<AxiomSchedulerWeekViewComponent, "[ax-scheduler-week-view]", never, {}, {}, never, never>;
}
