import { Subject } from 'rxjs';
import { AxiomSchedulerEvent } from './../axiom-scheduler/axiom-scheduler.component';
import * as i0 from "@angular/core";
export interface AxiomSchedulerSidebarData {
    title: string;
    events: AxiomSchedulerEvent[];
}
export declare class AxiomSchedulerSidebarService {
    toggle: Subject<boolean>;
    data: Subject<AxiomSchedulerSidebarData>;
    constructor();
    open(data: AxiomSchedulerSidebarData): void;
    close(): void;
    static ɵfac: i0.ɵɵFactoryDef<AxiomSchedulerSidebarService, never>;
    static ɵprov: i0.ɵɵInjectableDef<AxiomSchedulerSidebarService>;
}
