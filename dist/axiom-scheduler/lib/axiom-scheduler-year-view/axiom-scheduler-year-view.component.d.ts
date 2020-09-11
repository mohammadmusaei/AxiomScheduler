import { OnInit, Injector } from '@angular/core';
import * as momentNs from 'moment';
import { AxiomSchedulerComponentCommon } from './../axiom-scheduler/axiom-scheduler.component';
import * as i0 from "@angular/core";
export declare class AxiomSchedulerYearViewMonthObject {
    month: momentNs.Moment;
    days: momentNs.Moment[];
    constructor(month: momentNs.Moment);
    setDays(): void;
}
export declare class AxiomSchedulerYearViewComponent extends AxiomSchedulerComponentCommon implements OnInit {
    months: AxiomSchedulerYearViewMonthObject[];
    sidebar: boolean;
    constructor(injector: Injector);
    ngOnInit(): void;
    refreshView(): void;
    private setMonths;
    static ɵfac: i0.ɵɵFactoryDef<AxiomSchedulerYearViewComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<AxiomSchedulerYearViewComponent, "[ax-scheduler-year-view]", never, {}, {}, never, never>;
}
