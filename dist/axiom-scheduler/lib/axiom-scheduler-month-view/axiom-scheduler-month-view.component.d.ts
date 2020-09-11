import { OnInit, Injector } from '@angular/core';
import * as momentNs from 'moment';
import { AxiomSchedulerComponentCommon } from './../axiom-scheduler/axiom-scheduler.component';
import * as i0 from "@angular/core";
export declare class AxiomSchedulerMonthViewComponent extends AxiomSchedulerComponentCommon implements OnInit {
    days: momentNs.Moment[];
    sidebar: boolean;
    constructor(injector: Injector);
    ngOnInit(): void;
    refreshView(): void;
    private setDays;
    static ɵfac: i0.ɵɵFactoryDef<AxiomSchedulerMonthViewComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<AxiomSchedulerMonthViewComponent, "[ax-scheduler-month-view]", never, {}, {}, never, never>;
}
