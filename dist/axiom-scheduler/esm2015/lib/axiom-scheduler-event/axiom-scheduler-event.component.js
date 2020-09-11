import { AxiomSchedulerComponentCommon } from './../axiom-scheduler/axiom-scheduler.component';
import { Component, Input, ViewEncapsulation } from '@angular/core';
import * as momentNs from 'moment';
import { trigger, style, transition, animate } from '@angular/animations';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = ["ax-scheduler-event", ""];
function AxiomSchedulerEventComponent_ng_container_0_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("@timeAnimate", undefined);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r5.fromTime && ctx_r5.fromTime.format("HH:mm"));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r5.toTime && ctx_r5.toTime.format("HH:mm"));
} }
function AxiomSchedulerEventComponent_ng_container_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function AxiomSchedulerEventComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, AxiomSchedulerEventComponent_ng_container_0_p_1_Template, 5, 3, "p", 0);
    i0.ɵɵelementStart(2, "div", 3);
    i0.ɵɵtemplate(3, AxiomSchedulerEventComponent_ng_container_0_ng_container_3_Template, 1, 0, "ng-container", 4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.showTime);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r0.axEventTemplate)("ngTemplateOutletContext", ctx_r0.ctx);
} }
function AxiomSchedulerEventComponent_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function AxiomSchedulerEventComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 3);
    i0.ɵɵtemplate(2, AxiomSchedulerEventComponent_ng_container_1_ng_container_2_Template, 1, 0, "ng-container", 4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r1.axEventTemplate)("ngTemplateOutletContext", ctx_r1.ctx);
} }
function AxiomSchedulerEventComponent_ng_container_2_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("@timeAnimate", undefined);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r8.fromTime && ctx_r8.fromTime.format("HH:mm"));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r8.toTime && ctx_r8.toTime.format("HH:mm"));
} }
function AxiomSchedulerEventComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, AxiomSchedulerEventComponent_ng_container_2_p_1_Template, 5, 3, "p", 0);
    i0.ɵɵelementStart(2, "div", 3);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.showTime);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r2.event.title, " ");
} }
function AxiomSchedulerEventComponent__svg_svg_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "svg", 5);
    i0.ɵɵelementStart(1, "g");
    i0.ɵɵelementStart(2, "g", 6);
    i0.ɵɵelement(3, "path", 7);
    i0.ɵɵelement(4, "path", 8);
    i0.ɵɵelement(5, "path", 9);
    i0.ɵɵelement(6, "polyline", 10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function AxiomSchedulerEventComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 11);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵelementStart(2, "div", 12);
    i0.ɵɵlistener("click", function AxiomSchedulerEventComponent_div_4_Template_div_click_2_listener() { i0.ɵɵrestoreView(_r10); const ctx_r9 = i0.ɵɵnextContext(); return ctx_r9.deleteEevent(); })("mousedown", function AxiomSchedulerEventComponent_div_4_Template_div_mousedown_2_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r11 = i0.ɵɵnextContext(); return ctx_r11.mouseDown($event); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(3, "svg", 13);
    i0.ɵɵelementStart(4, "g");
    i0.ɵɵelement(5, "path", 14);
    i0.ɵɵelement(6, "path", 15);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(7, "div", 16);
    i0.ɵɵlistener("click", function AxiomSchedulerEventComponent_div_4_Template_div_click_7_listener() { i0.ɵɵrestoreView(_r10); const ctx_r12 = i0.ɵɵnextContext(); return ctx_r12.editEevent(); })("mousedown", function AxiomSchedulerEventComponent_div_4_Template_div_mousedown_7_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r13 = i0.ɵɵnextContext(); return ctx_r13.mouseDown($event); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(8, "svg", 17);
    i0.ɵɵelementStart(9, "g", 18);
    i0.ɵɵelementStart(10, "g", 19);
    i0.ɵɵelement(11, "path", 20);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
const moment = momentNs;
export class AxiomSchedulerEventComponent extends AxiomSchedulerComponentCommon {
    constructor(injector, _renderer, _element) {
        super(injector);
        this._renderer = _renderer;
        this._element = _element;
        this.monthMode = false;
        this.showTime = false;
        this.expired = false;
    }
    ngOnInit() {
        this.ctx = { item: this.event };
        this.updateTime();
        this.applyColor();
    }
    ngAfterViewInit() {
        if (!this.monthMode) {
            this.checkPosition();
        }
    }
    refreshView() {
    }
    fromTimeChanging(e) {
        this.fromTime = this.fromTime.clone().startOf('day').add(this.getOffsetMinute(), 'minutes');
        this.toTime = this.fromTime.clone().add(this.diff, 'minutes');
    }
    fromTimeChanged(e) {
        this.event.from = this.fromTime.clone().toDate();
        this.event.to = this.toTime.clone().toDate();
        this.toggleShowTime(false);
        this.service.eventChanged(this.event);
    }
    toTimeChanging(e) {
        this.diff = e.size.height;
        this.fromTime = this.fromTime.clone().startOf('day').add(this.getOffsetMinute(), 'minutes');
        this.toTime = this.fromTime.clone().add(this.diff, 'minutes');
    }
    toTimeChanged(e) {
        this.event.from = this.fromTime.clone().toDate();
        this.event.to = this.toTime.clone().toDate();
        this.toggleShowTime(false);
        this.service.eventChanged(this.event);
    }
    toTimeChangeStart(e) {
        this.toggleShowTime(true);
    }
    fromTimeChangeStart(e) {
        this.toggleShowTime(true);
    }
    deleteEevent() {
        this.service.eventDeleteClick.next(this.event);
    }
    editEevent() {
        this.service.eventEditClick.next(this.event);
    }
    mouseDown(ev) {
        ev && ev.preventDefault();
        ev && ev.stopPropagation();
    }
    checkPosition() {
        setTimeout(() => {
            var from = moment(this.event.from).diff(moment(this.event.from).startOf('day'), 'minutes');
            var to = moment(this.event.to).diff(moment(this.event.to).startOf('day'), 'minutes');
            this._renderer.setStyle(this._element.nativeElement.parentElement, 'top', `${from}px`);
            this._renderer.setStyle(this._element.nativeElement.parentElement, 'height', `${Math.abs(from - to)}px`);
            this._renderer.setStyle(this._element.nativeElement, 'height', `100%`);
            this._renderer.setStyle(this._element.nativeElement, 'display', `block`);
        }, 200);
    }
    getOffsetMinute() {
        const elementPos = this._element.nativeElement.getBoundingClientRect();
        const parentPos = this._element.nativeElement.parentElement.parentElement.getBoundingClientRect();
        return (Math.abs(elementPos.top - parentPos.top) + this._element.nativeElement.parentElement.parentElement.scrollTop);
    }
    updateDiff() {
        this.diff = this.toTime.diff(this.fromTime, 'minutes');
    }
    updateTime() {
        this.fromTime = moment(this.event.from).clone();
        this.toTime = moment(this.event.to).clone();
        this.updateDiff();
        this.expired = moment(this.event.to).isBefore(moment(), 'days');
    }
    applyColor() {
        if (this.event.color) {
            this._renderer.setStyle(this._element.nativeElement, 'background', this.event.color);
        }
    }
    toggleShowTime(toggle) {
        if (toggle) {
            this.timeout = setTimeout(() => {
                this.showTime = toggle;
            }, 200);
        }
        else {
            clearTimeout(this.timeout);
            this.showTime = toggle;
        }
    }
}
AxiomSchedulerEventComponent.ɵfac = function AxiomSchedulerEventComponent_Factory(t) { return new (t || AxiomSchedulerEventComponent)(i0.ɵɵdirectiveInject(i0.Injector), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef)); };
AxiomSchedulerEventComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AxiomSchedulerEventComponent, selectors: [["", "ax-scheduler-event", ""]], hostAttrs: [1, "ax-scheduler__event"], hostVars: 2, hostBindings: function AxiomSchedulerEventComponent_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("click", function AxiomSchedulerEventComponent_click_HostBindingHandler() { return ctx.service.eventClicked(ctx.event); });
    } if (rf & 2) {
        i0.ɵɵclassProp("expired", ctx.expired);
    } }, inputs: { event: "event", monthMode: "monthMode" }, features: [i0.ɵɵInheritDefinitionFeature], attrs: _c0, decls: 5, vars: 5, consts: [[4, "ngIf"], ["class", "ax-lock-event", "style", "enable-background:new 0 0 64 64;", "version", "1.1", "viewBox", "0 0 64 64", 0, "xml", "space", "preserve", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", 4, "ngIf"], ["class", "ax-scheduler__event__toolbar", 4, "ngIf"], [1, "ax-scheduler__event__content"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["version", "1.1", "viewBox", "0 0 64 64", 0, "xml", "space", "preserve", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", 1, "ax-lock-event", 2, "enable-background", "new 0 0 64 64"], ["id", "Icon-Lock", "transform", "translate(284.000000, 430.000000)"], ["d", "M-237.7-401.3h-3v-6.4c0-6.2-5.1-11.3-11.3-11.3c-6.2,0-11.3,5.1-11.3,11.3v6.4h-3v-6.4     c0-7.9,6.4-14.3,14.3-14.3s14.3,6.4,14.3,14.3V-401.3", "id", "Fill-66", 1, "st0"], ["d", "M-239.2-374.1h-25.6c-2.6,0-4.8-2.2-4.8-4.8v-19.2c0-2.6,2.2-4.8,4.8-4.8h25.6     c2.6,0,4.8,2.2,4.8,4.8v19.2C-234.4-376.2-236.6-374.1-239.2-374.1L-239.2-374.1z M-264.8-399.7c-0.9,0-1.6,0.7-1.6,1.6v19.2     c0,0.9,0.7,1.6,1.6,1.6h25.6c0.9,0,1.6-0.7,1.6-1.6v-19.2c0-0.9-0.7-1.6-1.6-1.6H-264.8L-264.8-399.7z", "id", "Fill-67", 1, "st0"], ["d", "M-248.8-393.3c0,1.8-1.4,3.2-3.2,3.2s-3.2-1.4-3.2-3.2s1.4-3.2,3.2-3.2S-248.8-395-248.8-393.3     ", "id", "Fill-68", 1, "st0"], ["id", "Fill-69", "points", "-251.2,-393.3 -252.8,-393.3 -254.4,-383.7 -249.6,-383.7 -251.2,-393.3    ", 1, "st0"], [1, "ax-scheduler__event__toolbar"], ["title", "Remove", 1, "ax-scheduler__event__toolbar-trash", 3, "click", "mousedown"], ["height", "512px", "id", "Layer_1", "version", "1.1", "viewBox", "0 0 512 512", "width", "512px", 0, "xml", "space", "preserve", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", 2, "enable-background", "new 0 0 512 512"], ["d", "M413.7,133.4c-2.4-9-4-14-4-14c-2.6-9.3-9.2-9.3-19-10.9l-53.1-6.7c-6.6-1.1-6.6-1.1-9.2-6.8c-8.7-19.6-11.4-31-20.9-31   h-103c-9.5,0-12.1,11.4-20.8,31.1c-2.6,5.6-2.6,5.6-9.2,6.8l-53.2,6.7c-9.7,1.6-16.7,2.5-19.3,11.8c0,0-1.2,4.1-3.7,13   c-3.2,11.9-4.5,10.6,6.5,10.6h302.4C418.2,144.1,417,145.3,413.7,133.4z"], ["d", "M379.4,176H132.6c-16.6,0-17.4,2.2-16.4,14.7l18.7,242.6c1.6,12.3,2.8,14.8,17.5,14.8h207.2c14.7,0,15.9-2.5,17.5-14.8   l18.7-242.6C396.8,178.1,396,176,379.4,176z"], ["title", "Edit", 1, "ax-scheduler__event__toolbar-edit", 3, "click", "mousedown"], ["height", "16px", "version", "1.1", "viewBox", "0 0 16 16", "width", "16px", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "sketch", "http://www.bohemiancoding.com/sketch/ns", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink"], ["fill", "none", "fill-rule", "evenodd", "id", "Icons with numbers", "stroke", "none", "stroke-width", "1"], ["fill", "#000000", "id", "Group", "transform", "translate(-384.000000, -192.000000)"], ["d", "M385,203.950806 L389,208 L385,208 Z M392,196 L396,200 L389.978638,207.044189 L386,203 Z M394.084619,193.781497 C394.709458,193.156658 395.90929,193.343426 396.764518,194.198654 L397.538782,194.972918 C398.394011,195.828147 398.580778,197.027979 397.95594,197.652817 L396.720394,198.888363 L392.849074,195.017043 Z M394.084619,193.781497", "id", "Triangle 313"]], template: function AxiomSchedulerEventComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, AxiomSchedulerEventComponent_ng_container_0_Template, 4, 3, "ng-container", 0);
        i0.ɵɵtemplate(1, AxiomSchedulerEventComponent_ng_container_1_Template, 3, 2, "ng-container", 0);
        i0.ɵɵtemplate(2, AxiomSchedulerEventComponent_ng_container_2_Template, 4, 2, "ng-container", 0);
        i0.ɵɵtemplate(3, AxiomSchedulerEventComponent__svg_svg_3_Template, 7, 0, "svg", 1);
        i0.ɵɵtemplate(4, AxiomSchedulerEventComponent_div_4_Template, 12, 0, "div", 2);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", !ctx.monthMode && ctx.axEventTemplate);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.monthMode && ctx.axEventTemplate);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.axEventTemplate);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.event.locked);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.axEventToolbar && !ctx.event.locked);
    } }, directives: [i1.NgIf, i1.NgTemplateOutlet], styles: [".ax-scheduler__event{cursor:pointer;overflow:visible;position:relative;text-align:left}.ax-scheduler__event>.ax-scheduler__event__content{color:#eee;display:inline-block;font-size:13px;font-weight:400;height:100%;margin:0 10px;overflow:hidden;padding:5px 8px;position:relative;vertical-align:middle}.ax-scheduler__event>p{color:#fff;display:inline-block;font-size:11px;height:100%;margin:0;padding:0;position:absolute;vertical-align:top;width:50px}.ax-scheduler__event>p>span{background:#333;border-radius:100px;color:#fff;left:-40px;padding:0 5px;position:absolute;z-index:200}.ax-scheduler__event>p>span:first-child{top:0}.ax-scheduler__event>p>span:last-child{bottom:0}"], encapsulation: 2, data: { animation: [
            trigger('timeAnimate', [
                transition(':enter', [
                    style({ transform: 'scale(0)' }),
                    animate(`${180}ms ease-in`, style({ transform: 'scale(1)' }))
                ]),
                transition(':leave', [
                    animate(`${80}ms ease-out`, style({ opacity: '0' }))
                ])
            ])
        ] } });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AxiomSchedulerEventComponent, [{
        type: Component,
        args: [{
                selector: '[ax-scheduler-event]',
                templateUrl: './axiom-scheduler-event.component.html',
                styleUrls: ['./axiom-scheduler-event.component.scss'],
                encapsulation: ViewEncapsulation.None,
                host: {
                    'class': 'ax-scheduler__event',
                    '[class.expired]': 'expired',
                    '(click)': 'service.eventClicked(event)'
                },
                animations: [
                    trigger('timeAnimate', [
                        transition(':enter', [
                            style({ transform: 'scale(0)' }),
                            animate(`${180}ms ease-in`, style({ transform: 'scale(1)' }))
                        ]),
                        transition(':leave', [
                            animate(`${80}ms ease-out`, style({ opacity: '0' }))
                        ])
                    ])
                ]
            }]
    }], function () { return [{ type: i0.Injector }, { type: i0.Renderer2 }, { type: i0.ElementRef }]; }, { event: [{
            type: Input
        }], monthMode: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXhpb20tc2NoZWR1bGVyLWV2ZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2F4aW9tLXNjaGVkdWxlci9zcmMvbGliL2F4aW9tLXNjaGVkdWxlci1ldmVudC9heGlvbS1zY2hlZHVsZXItZXZlbnQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYXhpb20tc2NoZWR1bGVyL3NyYy9saWIvYXhpb20tc2NoZWR1bGVyLWV2ZW50L2F4aW9tLXNjaGVkdWxlci1ldmVudC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUMvRixPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxpQkFBaUIsRUFBa0QsTUFBTSxlQUFlLENBQUM7QUFFNUgsT0FBTyxLQUFLLFFBQVEsTUFBTSxRQUFRLENBQUM7QUFDbkMsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7OztJQ0hsRSx5QkFDUTtJQUFBLDRCQUFNO0lBQUEsWUFBMEM7SUFBQSxpQkFBTztJQUN2RCw0QkFBTTtJQUFBLFlBQXNDO0lBQUEsaUJBQU87SUFDM0QsaUJBQUk7OztJQUhELHdDQUFjO0lBQ0gsZUFBMEM7SUFBMUMsd0VBQTBDO0lBQzFDLGVBQXNDO0lBQXRDLG9FQUFzQzs7O0lBSTVDLHdCQUNlOzs7SUFSL0IsNkJBQ1E7SUFBQSx3RkFDUTtJQUlSLDhCQUNRO0lBQUEsOEdBQ0E7SUFDUixpQkFBTTtJQUNkLDBCQUFlOzs7SUFUVyxlQUFnQjtJQUFoQixzQ0FBZ0I7SUFNWixlQUErQztJQUEvQyx5REFBK0MsdUNBQUE7OztJQU03RCx3QkFDZTs7O0lBSC9CLDZCQUNRO0lBQUEsOEJBQ1E7SUFBQSw4R0FDQTtJQUNSLGlCQUFNO0lB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Q0FBQztnQkFDRixVQUFVLENBQUMsUUFBUSxFQUFFO29CQUNuQixPQUFPLENBQUMsR0FBRyxFQUFFLGFBQWEsRUFBRSxLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztpQkFDckQsQ0FBQzthQUNILENBQUM7U0FDSDtrREFFVSw0QkFBNEI7Y0F0QnhDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsc0JBQXNCO2dCQUNoQyxXQUFXLEVBQUUsd0NBQXdDO2dCQUNyRCxTQUFTLEVBQUUsQ0FBQyx3Q0FBd0MsQ0FBQztnQkFDckQsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLElBQUksRUFBRTtvQkFDSixPQUFPLEVBQUUscUJBQXFCO29CQUM5QixpQkFBaUIsRUFBRSxTQUFTO29CQUM1QixTQUFTLEVBQUUsNkJBQTZCO2lCQUN6QztnQkFDRCxVQUFVLEVBQUU7b0JBQ1YsT0FBTyxDQUFDLGFBQWEsRUFBRTt3QkFDckIsVUFBVSxDQUFDLFFBQVEsRUFBRTs0QkFDbkIsS0FBSyxDQUFDLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxDQUFDOzRCQUNoQyxPQUFPLENBQUMsR0FBRyxHQUFHLFlBQVksRUFBRSxLQUFLLENBQUMsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLENBQUMsQ0FBQzt5QkFDOUQsQ0FBQzt3QkFDRixVQUFVLENBQUMsUUFBUSxFQUFFOzRCQUNuQixPQUFPLENBQUMsR0FBRyxFQUFFLGFBQWEsRUFBRSxLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQzt5QkFDckQsQ0FBQztxQkFDSCxDQUFDO2lCQUNIO2FBQ0Y7NEdBR1UsS0FBSztrQkFBYixLQUFLO1lBQ0csU0FBUztrQkFBakIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEF4aW9tU2NoZWR1bGVyQ29tcG9uZW50Q29tbW9uIH0gZnJvbSAnLi8uLi9heGlvbS1zY2hlZHVsZXIvYXhpb20tc2NoZWR1bGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIFZpZXdFbmNhcHN1bGF0aW9uLCBSZW5kZXJlcjIsIEVsZW1lbnRSZWYsIEFmdGVyVmlld0luaXQsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBeGlvbVNjaGVkdWxlckV2ZW50IH0gZnJvbSAnLi8uLi9heGlvbS1zY2hlZHVsZXIvYXhpb20tc2NoZWR1bGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgKiBhcyBtb21lbnROcyBmcm9tICdtb21lbnQnOyBjb25zdCBtb21lbnQgPSBtb21lbnROcztcbmltcG9ydCB7IHRyaWdnZXIsIHN0eWxlLCB0cmFuc2l0aW9uLCBhbmltYXRlIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBJUmVzaXplRXZlbnQgfSBmcm9tICdhbmd1bGFyMi1kcmFnZ2FibGUvbGliL21vZGVscy9yZXNpemUtZXZlbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdbYXgtc2NoZWR1bGVyLWV2ZW50XScsXG4gIHRlbXBsYXRlVXJsOiAnLi9heGlvbS1zY2hlZHVsZXItZXZlbnQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9heGlvbS1zY2hlZHVsZXItZXZlbnQuY29tcG9uZW50LnNjc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgaG9zdDoge1xuICAgICdjbGFzcyc6ICdheC1zY2hlZHVsZXJfX2V2ZW50JyxcbiAgICAnW2NsYXNzLmV4cGlyZWRdJzogJ2V4cGlyZWQnLFxuICAgICcoY2xpY2spJzogJ3NlcnZpY2UuZXZlbnRDbGlja2VkKGV2ZW50KSdcbiAgfSxcbiAgYW5pbWF0aW9uczogW1xuICAgIHRyaWdnZXIoJ3RpbWVBbmltYXRlJywgW1xuICAgICAgdHJhbnNpdGlvbignOmVudGVyJywgW1xuICAgICAgICBzdHlsZSh7IHRyYW5zZm9ybTogJ3NjYWxlKDApJyB9KSxcbiAgICAgICAgYW5pbWF0ZShgJHsxODB9bXMgZWFzZS1pbmAsIHN0eWxlKHsgdHJhbnNmb3JtOiAnc2NhbGUoMSknIH0pKVxuICAgICAgXSksXG4gICAgICB0cmFuc2l0aW9uKCc6bGVhdmUnLCBbXG4gICAgICAgIGFuaW1hdGUoYCR7ODB9bXMgZWFzZS1vdXRgLCBzdHlsZSh7IG9wYWNpdHk6ICcwJyB9KSlcbiAgICAgIF0pXG4gICAgXSlcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBBeGlvbVNjaGVkdWxlckV2ZW50Q29tcG9uZW50IGV4dGVuZHMgQXhpb21TY2hlZHVsZXJDb21wb25lbnRDb21tb24gaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuXG4gIEBJbnB1dCgpIGV2ZW50OiBBeGlvbVNjaGVkdWxlckV2ZW50O1xuICBASW5wdXQoKSBtb250aE1vZGU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBwdWJsaWMgY3R4OiBhbnk7XG4gIHB1YmxpYyBmcm9tVGltZTogbW9tZW50TnMuTW9tZW50O1xuICBwdWJsaWMgdG9UaW1lOiBtb21lbnROcy5Nb21lbnQ7XG4gIHB1YmxpYyBkaWZmOiBudW1iZXI7XG4gIHB1YmxpYyBzaG93VGltZTogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgZXhwaXJlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIHByaXZhdGUgdGltZW91dDogYW55O1xuXG4gIGNvbnN0cnVjdG9yKGluamVjdG9yOiBJbmplY3RvciwgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMiwgcHJpdmF0ZSBfZWxlbWVudDogRWxlbWVudFJlZikge1xuICAgIHN1cGVyKGluamVjdG9yKTtcbiAgfVxuXG4gIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmN0eCA9IHsgaXRlbTogdGhpcy5ldmVudCB9O1xuICAgIHRoaXMudXBkYXRlVGltZSgpO1xuICAgIHRoaXMuYXBwbHlDb2xvcigpO1xuICB9XG5cbiAgcHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMubW9udGhNb2RlKSB7XG4gICAgICB0aGlzLmNoZWNrUG9zaXRpb24oKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgcmVmcmVzaFZpZXcoKTogdm9pZCB7XG4gICAgXG4gIH1cblxuICBwdWJsaWMgZnJvbVRpbWVDaGFuZ2luZyhlOiB7IHg6IG51bWJlciwgeTogbnVtYmVyIH0pOiB2b2lkIHtcbiAgICB0aGlzLmZyb21UaW1lID0gdGhpcy5mcm9tVGltZS5jbG9uZSgpLnN0YXJ0T2YoJ2RheScpLmFkZCh0aGlzLmdldE9mZnNldE1pbnV0ZSgpLCAnbWludXRlcycpO1xuICAgIHRoaXMudG9UaW1lID0gdGhpcy5mcm9tVGltZS5jbG9uZSgpLmFkZCh0aGlzLmRpZmYsICdtaW51dGVzJyk7XG4gIH1cblxuICBwdWJsaWMgZnJvbVRpbWVDaGFuZ2VkKGU6IHsgeDogbnVtYmVyLCB5OiBudW1iZXIgfSk6IHZvaWQge1xuICAgIHRoaXMuZXZlbnQuZnJvbSA9IHRoaXMuZnJvbVRpbWUuY2xvbmUoKS50b0RhdGUoKTtcbiAgICB0aGlzLmV2ZW50LnRvID0gdGhpcy50b1RpbWUuY2xvbmUoKS50b0RhdGUoKTtcbiAgICB0aGlzLnRvZ2dsZVNob3dUaW1lKGZhbHNlKTtcbiAgICB0aGlzLnNlcnZpY2UuZXZlbnRDaGFuZ2VkKHRoaXMuZXZlbnQpO1xuICB9XG5cbiAgcHVibGljIHRvVGltZUNoYW5naW5nKGU6IElSZXNpemVFdmVudCk6IHZvaWQge1xuICAgIHRoaXMuZGlmZiA9IGUuc2l6ZS5oZWlnaHQ7XG4gICAgdGhpcy5mcm9tVGltZSA9IHRoaXMuZnJvbVRpbWUuY2xvbmUoKS5zdGFydE9mKCdkYXknKS5hZGQodGhpcy5nZXRPZmZzZXRNaW51dGUoKSwgJ21pbnV0ZXMnKTtcbiAgICB0aGlzLnRvVGltZSA9IHRoaXMuZnJvbVRpbWUuY2xvbmUoKS5hZGQodGhpcy5kaWZmLCAnbWludXRlcycpO1xuICB9XG5cbiAgcHVibGljIHRvVGltZUNoYW5nZWQoZTogSVJlc2l6ZUV2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5ldmVudC5mcm9tID0gdGhpcy5mcm9tVGltZS5jbG9uZSgpLnRvRGF0ZSgpO1xuICAgIHRoaXMuZXZlbnQudG8gPSB0aGlzLnRvVGltZS5jbG9uZSgpLnRvRGF0ZSgpO1xuICAgIHRoaXMudG9nZ2xlU2hvd1RpbWUoZmFsc2UpO1xuICAgIHRoaXMuc2VydmljZS5ldmVudENoYW5nZWQodGhpcy5ldmVudCk7XG4gIH1cblxuICBwdWJsaWMgdG9UaW1lQ2hhbmdlU3RhcnQoZTogSVJlc2l6ZUV2ZW50KTogdm9pZCB7XG4gICAgdGhpcy50b2dnbGVTaG93VGltZSh0cnVlKTtcbiAgfVxuXG4gIHB1YmxpYyBmcm9tVGltZUNoYW5nZVN0YXJ0KGU6IElSZXNpemVFdmVudCk6IHZvaWQge1xuICAgIHRoaXMudG9nZ2xlU2hvd1RpbWUodHJ1ZSk7XG4gIH1cblxuICBwdWJsaWMgZGVsZXRlRWV2ZW50KCk6IHZvaWQge1xuICAgIHRoaXMuc2VydmljZS5ldmVudERlbGV0ZUNsaWNrLm5leHQodGhpcy5ldmVudCk7XG4gIH1cblxuICBwdWJsaWMgZWRpdEVldmVudCgpOiB2b2lkIHtcbiAgICB0aGlzLnNlcnZpY2UuZXZlbnRFZGl0Q2xpY2submV4dCh0aGlzLmV2ZW50KTtcbiAgfVxuXG4gIHB1YmxpYyBtb3VzZURvd24oZXYgOiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgZXYgJiYgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICBldiAmJiBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxuXG4gIHByaXZhdGUgY2hlY2tQb3NpdGlvbigpOiB2b2lkIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHZhciBmcm9tID0gbW9tZW50KHRoaXMuZXZlbnQuZnJvbSkuZGlmZihtb21lbnQodGhpcy5ldmVudC5mcm9tKS5zdGFydE9mKCdkYXknKSwgJ21pbnV0ZXMnKTtcbiAgICAgIHZhciB0byA9IG1vbWVudCh0aGlzLmV2ZW50LnRvKS5kaWZmKG1vbWVudCh0aGlzLmV2ZW50LnRvKS5zdGFydE9mKCdkYXknKSwgJ21pbnV0ZXMnKTtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudC5wYXJlbnRFbGVtZW50LCAndG9wJywgYCR7ZnJvbX1weGApO1xuICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LnBhcmVudEVsZW1lbnQsICdoZWlnaHQnLCBgJHtNYXRoLmFicyhmcm9tIC0gdG8pfXB4YCk7XG4gICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdoZWlnaHQnLCBgMTAwJWApO1xuICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LCAnZGlzcGxheScsIGBibG9ja2ApO1xuICAgIH0sIDIwMCk7XG4gIH1cblxuICBwcml2YXRlIGdldE9mZnNldE1pbnV0ZSgpOiBudW1iZXIge1xuICAgIGNvbnN0IGVsZW1lbnRQb3MgPSB0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgcGFyZW50UG9zID0gdGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICByZXR1cm4gKE1hdGguYWJzKGVsZW1lbnRQb3MudG9wIC0gcGFyZW50UG9zLnRvcCkgKyB0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnNjcm9sbFRvcCk7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZURpZmYoKTogdm9pZCB7XG4gICAgdGhpcy5kaWZmID0gdGhpcy50b1RpbWUuZGlmZih0aGlzLmZyb21UaW1lLCAnbWludXRlcycpO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVUaW1lKCk6IHZvaWQge1xuICAgIHRoaXMuZnJvbVRpbWUgPSBtb21lbnQodGhpcy5ldmVudC5mcm9tKS5jbG9uZSgpO1xuICAgIHRoaXMudG9UaW1lID0gbW9tZW50KHRoaXMuZXZlbnQudG8pLmNsb25lKCk7XG4gICAgdGhpcy51cGRhdGVEaWZmKCk7XG4gICAgdGhpcy5leHBpcmVkID0gbW9tZW50KHRoaXMuZXZlbnQudG8pLmlzQmVmb3JlKG1vbWVudCgpLCAnZGF5cycpO1xuICB9XG5cbiAgcHJpdmF0ZSBhcHBseUNvbG9yKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmV2ZW50LmNvbG9yKSB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdiYWNrZ3JvdW5kJywgdGhpcy5ldmVudC5jb2xvcik7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSB0b2dnbGVTaG93VGltZSh0b2dnbGU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAodG9nZ2xlKSB7XG4gICAgICB0aGlzLnRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5zaG93VGltZSA9IHRvZ2dsZTtcbiAgICAgIH0sIDIwMCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dCk7XG4gICAgICB0aGlzLnNob3dUaW1lID0gdG9nZ2xlO1xuICAgIH1cbiAgfVxuXG59XG4iLCI8bmctY29udGFpbmVyICpuZ0lmPVwiIW1vbnRoTW9kZSAmJiBheEV2ZW50VGVtcGxhdGVcIj5cbiAgICAgICAgPHAgW0B0aW1lQW5pbWF0ZV0gKm5nSWY9XCJzaG93VGltZVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuPnt7IGZyb21UaW1lICYmIGZyb21UaW1lLmZvcm1hdCgnSEg6bW0nKSB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3Bhbj57eyB0b1RpbWUgJiYgdG9UaW1lLmZvcm1hdCgnSEg6bW0nKSB9fTwvc3Bhbj5cbiAgICAgICAgPC9wPlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJheC1zY2hlZHVsZXJfX2V2ZW50X19jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImF4RXZlbnRUZW1wbGF0ZTtjb250ZXh0OmN0eFwiPlxuICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICA8L2Rpdj5cbjwvbmctY29udGFpbmVyPlxuPG5nLWNvbnRhaW5lciAqbmdJZj1cIm1vbnRoTW9kZSAmJiBheEV2ZW50VGVtcGxhdGVcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImF4LXNjaGVkdWxlcl9fZXZlbnRfX2NvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiYXhFdmVudFRlbXBsYXRlO2NvbnRleHQ6Y3R4XCI+XG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgIDwvZGl2PlxuPC9uZy1jb250YWluZXI+XG48bmctY29udGFpbmVyICpuZ0lmPVwiIWF4RXZlbnRUZW1wbGF0ZVwiPlxuICAgICAgICA8cCBbQHRpbWVBbmltYXRlXSAqbmdJZj1cInNob3dUaW1lXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4+e3sgZnJvbVRpbWUgJiYgZnJvbVRpbWUuZm9ybWF0KCdISDptbScpIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuPnt7IHRvVGltZSAmJiB0b1RpbWUuZm9ybWF0KCdISDptbScpIH19PC9zcGFuPlxuICAgICAgICA8L3A+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJheC1zY2hlZHVsZXJfX2V2ZW50X19jb250ZW50XCI+XG4gICAgICAgICAgICAgICAge3sgZXZlbnQudGl0bGUgfX1cbiAgICAgICAgPC9kaXY+XG48L25nLWNvbnRhaW5lcj5cblxuPHN2ZyBjbGFzcz1cImF4LWxvY2stZXZlbnRcIiAqbmdJZj1cImV2ZW50LmxvY2tlZFwiIHN0eWxlPVwiZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NCA2NDtcIiB2ZXJzaW9uPVwiMS4xXCJcbiAgICAgICAgdmlld0JveD1cIjAgMCA2NCA2NFwiIHhtbDpzcGFjZT1cInByZXNlcnZlXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiPlxuICAgICAgICA8Zz5cbiAgICAgICAgICAgICAgICA8ZyBpZD1cIkljb24tTG9ja1wiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgyODQuMDAwMDAwLCA0MzAuMDAwMDAwKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggY2xhc3M9XCJzdDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTS0yMzcuNy00MDEuM2gtM3YtNi40YzAtNi4yLTUuMS0xMS4zLTExLjMtMTEuM2MtNi4yLDAtMTEuMyw1LjEtMTEuMywxMS4zdjYuNGgtM3YtNi40ICAgICBjMC03LjksNi40LTE0LjMsMTQuMy0xNC4zczE0LjMsNi40LDE0LjMsMTQuM1YtNDAxLjNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIkZpbGwtNjZcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggY2xhc3M9XCJzdDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTS0yMzkuMi0zNzQuMWgtMjUuNmMtMi42LDAtNC44LTIuMi00LjgtNC44di0xOS4yYzAtMi42LDIuMi00LjgsNC44LTQuOGgyNS42ICAgICBjMi42LDAsNC44LDIuMiw0LjgsNC44djE5LjJDLTIzNC40LTM3Ni4yLTIzNi42LTM3NC4xLTIzOS4yLTM3NC4xTC0yMzkuMi0zNzQuMXogTS0yNjQuOC0zOTkuN2MtMC45LDAtMS42LDAuNy0xLjYsMS42djE5LjIgICAgIGMwLDAuOSwwLjcsMS42LDEuNiwxLjZoMjUuNmMwLjksMCwxLjYtMC43LDEuNi0xLjZ2LTE5LjJjMC0wLjktMC43LTEuNi0xLjYtMS42SC0yNjQuOEwtMjY0LjgtMzk5Ljd6XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJGaWxsLTY3XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGNsYXNzPVwic3QwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk0tMjQ4LjgtMzkzLjNjMCwxLjgtMS40LDMuMi0zLjIsMy4ycy0zLjItMS40LTMuMi0zLjJzMS40LTMuMiwzLjItMy4yUy0yNDguOC0zOTUtMjQ4LjgtMzkzLjMgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiRmlsbC02OFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cG9seWxpbmUgY2xhc3M9XCJzdDBcIiBpZD1cIkZpbGwtNjlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb2ludHM9XCItMjUxLjIsLTM5My4zIC0yNTIuOCwtMzkzLjMgLTI1NC40LC0zODMuNyAtMjQ5LjYsLTM4My43IC0yNTEuMiwtMzkzLjMgICAgXCIgLz5cbiAgICAgICAgICAgICAgICA8L2c+XG4gICAgICAgIDwvZz5cbjwvc3ZnPlxuXG48ZGl2IGNsYXNzPVwiYXgtc2NoZWR1bGVyX19ldmVudF9fdG9vbGJhclwiICpuZ0lmPVwiYXhFdmVudFRvb2xiYXIgJiYgIWV2ZW50LmxvY2tlZFwiPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJheC1zY2hlZHVsZXJfX2V2ZW50X190b29sYmFyLXRyYXNoXCIgdGl0bGU9XCJSZW1vdmVcIiAoY2xpY2spPVwiZGVsZXRlRWV2ZW50KClcIiAobW91c2Vkb3duKT1cIm1vdXNlRG93bigkZXZlbnQpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGhlaWdodD1cIjUxMnB4XCIgaWQ9XCJMYXllcl8xXCIgc3R5bGU9XCJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7XCIgdmVyc2lvbj1cIjEuMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiIHdpZHRoPVwiNTEycHhcIiB4bWw6c3BhY2U9XCJwcmVzZXJ2ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNNDEzLjcsMTMzLjRjLTIuNC05LTQtMTQtNC0xNGMtMi42LTkuMy05LjItOS4zLTE5LTEwLjlsLTUzLjEtNi43Yy02LjYtMS4xLTYuNi0xLjEtOS4yLTYuOGMtOC43LTE5LjYtMTEuNC0zMS0yMC45LTMxICAgaC0xMDNjLTkuNSwwLTEyLjEsMTEuNC0yMC44LDMxLjFjLTIuNiw1LjYtMi42LDUuNi05LjIsNi44bC01My4yLDYuN2MtOS43LDEuNi0xNi43LDIuNS0xOS4zLDExLjhjMCwwLTEuMiw0LjEtMy43LDEzICAgYy0zLjIsMTEuOS00LjUsMTAuNiw2LjUsMTAuNmgzMDIuNEM0MTguMiwxNDQuMSw0MTcsMTQ1LjMsNDEzLjcsMTMzLjR6XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk0zNzkuNCwxNzZIMTMyLjZjLTE2LjYsMC0xNy40LDIuMi0xNi40LDE0LjdsMTguNywyNDIuNmMxLjYsMTIuMywyLjgsMTQuOCwxNy41LDE0LjhoMjA3LjJjMTQuNywwLDE1LjktMi41LDE3LjUtMTQuOCAgIGwxOC43LTI0Mi42QzM5Ni44LDE3OC4xLDM5NiwxNzYsMzc5LjQsMTc2elwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJheC1zY2hlZHVsZXJfX2V2ZW50X190b29sYmFyLWVkaXRcIiB0aXRsZT1cIkVkaXRcIiAoY2xpY2spPVwiZWRpdEVldmVudCgpXCIgKG1vdXNlZG93bik9XCJtb3VzZURvd24oJGV2ZW50KVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBoZWlnaHQ9XCIxNnB4XCIgdmVyc2lvbj1cIjEuMVwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIiB3aWR0aD1cIjE2cHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeG1sbnM6c2tldGNoPVwiaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxnIGZpbGw9XCJub25lXCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGlkPVwiSWNvbnMgd2l0aCBudW1iZXJzXCIgc3Ryb2tlPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlLXdpZHRoPVwiMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxnIGZpbGw9XCIjMDAwMDAwXCIgaWQ9XCJHcm91cFwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtMzg0LjAwMDAwMCwgLTE5Mi4wMDAwMDApXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTM4NSwyMDMuOTUwODA2IEwzODksMjA4IEwzODUsMjA4IFogTTM5MiwxOTYgTDM5NiwyMDAgTDM4OS45Nzg2MzgsMjA3LjA0NDE4OSBMMzg2LDIwMyBaIE0zOTQuMDg0NjE5LDE5My43ODE0OTcgQzM5NC43MDk0NTgsMTkzLjE1NjY1OCAzOTUuOTA5MjksMTkzLjM0MzQyNiAzOTYuNzY0NTE4LDE5NC4xOTg2NTQgTDM5Ny41Mzg3ODIsMTk0Ljk3MjkxOCBDMzk4LjM5NDAxMSwxOTUuODI4MTQ3IDM5OC41ODA3NzgsMTk3LjAyNzk3OSAzOTcuOTU1OTQsMTk3LjY1MjgxNyBMMzk2LjcyMDM5NCwxOTguODg4MzYzIEwzOTIuODQ5MDc0LDE5NS4wMTcwNDMgWiBNMzk0LjA4NDYxOSwxOTMuNzgxNDk3XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJUcmlhbmdsZSAzMTNcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuPC9kaXY+Il19