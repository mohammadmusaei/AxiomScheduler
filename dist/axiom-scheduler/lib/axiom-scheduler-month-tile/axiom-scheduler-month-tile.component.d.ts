import { AxiomSchedulerYearViewMonthObject } from './../axiom-scheduler-year-view/axiom-scheduler-year-view.component';
import { OnInit, Injector } from '@angular/core';
import { AxiomSchedulerComponentCommon } from './../axiom-scheduler/axiom-scheduler.component';
import * as i0 from "@angular/core";
export declare class AxiomSchedulerMonthTileComponent extends AxiomSchedulerComponentCommon implements OnInit {
    monthObject: AxiomSchedulerYearViewMonthObject;
    constructor(injector: Injector);
    ngOnInit(): void;
    refreshView(): void;
    static ɵfac: i0.ɵɵFactoryDef<AxiomSchedulerMonthTileComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<AxiomSchedulerMonthTileComponent, "[ax-scheduler-month-tile]", never, { "monthObject": "monthObject"; }, {}, never, never>;
}
