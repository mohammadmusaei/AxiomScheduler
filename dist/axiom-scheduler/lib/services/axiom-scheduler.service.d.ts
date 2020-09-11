import { AxiomSchedulerEvent } from './../axiom-scheduler/axiom-scheduler.component';
import { Subject } from 'rxjs';
import * as momentNs from 'moment';
import * as i0 from "@angular/core";
export declare class AxiomSchedulerService {
    private _defaultLocale;
    schedulerLocale: string;
    locale: Subject<string>;
    refershRequest: Subject<momentNs.Moment>;
    eventChange: Subject<AxiomSchedulerEvent>;
    eventClick: Subject<AxiomSchedulerEvent>;
    eventDeleteClick: Subject<AxiomSchedulerEvent>;
    eventEditClick: Subject<AxiomSchedulerEvent>;
    axEvents: AxiomSchedulerEvent[];
    constructor();
    refreshDate(date: momentNs.Moment): void;
    changeLocale(locale: string): void;
    eventChanged(event: AxiomSchedulerEvent): void;
    eventClicked(event: AxiomSchedulerEvent): void;
    static ɵfac: i0.ɵɵFactoryDef<AxiomSchedulerService, never>;
    static ɵprov: i0.ɵɵInjectableDef<AxiomSchedulerService>;
}
