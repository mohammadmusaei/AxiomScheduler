import { AxiomSchedulerComponentCommon } from './../axiom-scheduler/axiom-scheduler.component';
import { OnInit, Renderer2, ElementRef, AfterViewInit, Injector } from '@angular/core';
import { AxiomSchedulerEvent } from './../axiom-scheduler/axiom-scheduler.component';
import * as momentNs from 'moment';
import { IResizeEvent } from 'angular2-draggable/lib/models/resize-event';
import * as i0 from "@angular/core";
export declare class AxiomSchedulerEventComponent extends AxiomSchedulerComponentCommon implements OnInit, AfterViewInit {
    private _renderer;
    private _element;
    event: AxiomSchedulerEvent;
    monthMode: boolean;
    ctx: any;
    fromTime: momentNs.Moment;
    toTime: momentNs.Moment;
    diff: number;
    showTime: boolean;
    expired: boolean;
    private timeout;
    constructor(injector: Injector, _renderer: Renderer2, _element: ElementRef);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    refreshView(): void;
    fromTimeChanging(e: {
        x: number;
        y: number;
    }): void;
    fromTimeChanged(e: {
        x: number;
        y: number;
    }): void;
    toTimeChanging(e: IResizeEvent): void;
    toTimeChanged(e: IResizeEvent): void;
    toTimeChangeStart(e: IResizeEvent): void;
    fromTimeChangeStart(e: IResizeEvent): void;
    deleteEevent(): void;
    editEevent(): void;
    mouseDown(ev: MouseEvent): void;
    private checkPosition;
    private getOffsetMinute;
    private updateDiff;
    private updateTime;
    private applyColor;
    private toggleShowTime;
    static ɵfac: i0.ɵɵFactoryDef<AxiomSchedulerEventComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<AxiomSchedulerEventComponent, "[ax-scheduler-event]", never, { "event": "event"; "monthMode": "monthMode"; }, {}, never, never>;
}
