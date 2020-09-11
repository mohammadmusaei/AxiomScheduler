import { OnInit, OnDestroy, ElementRef, TemplateRef } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { AxiomSchedulerSidebarService, AxiomSchedulerSidebarData } from './../services/axiom-scheduler-sidebar.service';
import * as i0 from "@angular/core";
export declare class AxiomSchedulerSidebarComponent implements OnInit, OnDestroy {
    private _element;
    private _sidebarService;
    axEventTemplate: TemplateRef<any>;
    axEventToolbar: boolean;
    data: AxiomSchedulerSidebarData;
    protected destroyed: ReplaySubject<boolean>;
    private subs;
    constructor(_element: ElementRef, _sidebarService: AxiomSchedulerSidebarService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    close(): void;
    private closeOnGlobalKeydown;
    private setEventObserver;
    private destroyEventObserver;
    static ɵfac: i0.ɵɵFactoryDef<AxiomSchedulerSidebarComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<AxiomSchedulerSidebarComponent, "[ax-scheduler-sidebar]", never, { "axEventTemplate": "axEventTemplate"; "axEventToolbar": "axEventToolbar"; }, {}, never, never>;
}
