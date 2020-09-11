import { Component, ViewEncapsulation, Input } from '@angular/core';
import * as momentNs from 'moment';
import { AxiomSchedulerComponentCommon } from './../axiom-scheduler/axiom-scheduler.component';
import { AxiomSchedulerHour } from './../axiom-scheduler-day-view/axiom-scheduler-day-view.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "angular2-draggable";
import * as i3 from "../axiom-scheduler-event/axiom-scheduler-event.component";
import * as i4 from "../axiom-scheduler-hour/axiom-scheduler-hour.component";
const _c0 = ["ax-scheduler-day-column", ""];
function AxiomSchedulerDayColumnComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵlistener("movingOffset", function AxiomSchedulerDayColumnComponent_div_0_Template_div_movingOffset_0_listener($event) { i0.ɵɵrestoreView(_r5); const _r3 = i0.ɵɵreference(2); return _r3.fromTimeChanging($event); })("endOffset", function AxiomSchedulerDayColumnComponent_div_0_Template_div_endOffset_0_listener($event) { i0.ɵɵrestoreView(_r5); const _r3 = i0.ɵɵreference(2); return _r3.fromTimeChanged($event); })("started", function AxiomSchedulerDayColumnComponent_div_0_Template_div_started_0_listener($event) { i0.ɵɵrestoreView(_r5); const _r3 = i0.ɵɵreference(2); return _r3.fromTimeChangeStart($event); })("edge", function AxiomSchedulerDayColumnComponent_div_0_Template_div_edge_0_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r8 = i0.ɵɵnextContext(); return ctx_r8.checkEdge($event); })("rzResizing", function AxiomSchedulerDayColumnComponent_div_0_Template_div_rzResizing_0_listener($event) { i0.ɵɵrestoreView(_r5); const _r3 = i0.ɵɵreference(2); return _r3.toTimeChanging($event); })("rzStop", function AxiomSchedulerDayColumnComponent_div_0_Template_div_rzStop_0_listener($event) { i0.ɵɵrestoreView(_r5); const _r3 = i0.ɵɵreference(2); return _r3.toTimeChanged($event); })("rzStart", function AxiomSchedulerDayColumnComponent_div_0_Template_div_rzStart_0_listener($event) { i0.ɵɵrestoreView(_r5); const _r3 = i0.ɵɵreference(2); return _r3.toTimeChangeStart($event); });
    i0.ɵɵelement(1, "div", 3, 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const event_r2 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngDraggable", !event_r2.locked)("gridSize", ctx_r0.axDragStep)("bounds", ctx_r0.bounds)("lockAxis", "x")("inBounds", true)("zIndexMoving", "1000")("preventDefaultEvent", true)("ngResizable", !event_r2.locked)("rzHandles", "s,n")("rzGrid", ctx_r0.axDragStep);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("event", event_r2)("axEventTemplate", ctx_r0.axEventTemplate)("axEventToolbar", ctx_r0.axEventToolbar);
} }
function AxiomSchedulerDayColumnComponent_div_1_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const hour_r12 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", hour_r12.start.format("HH:mm"), " ");
} }
function AxiomSchedulerDayColumnComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "div", 5);
    i0.ɵɵtemplate(2, AxiomSchedulerDayColumnComponent_div_1_span_2_Template, 2, 1, "span", 6);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "div", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const hour_r12 = ctx.$implicit;
    const index_r13 = ctx.index;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", index_r13 > 0);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("hour", hour_r12)("axEventTemplate", ctx_r1.axEventTemplate)("axEventFormatter", ctx_r1.axEventFormatter);
} }
const moment = momentNs;
export class AxiomSchedulerDayColumnComponent extends AxiomSchedulerComponentCommon {
    constructor(injector, _element) {
        super(injector);
        this._element = _element;
        this.hourColumn = true;
        this.edge = {
            top: true,
            bottom: true,
            left: true,
            right: true
        };
        this.bounds = this._element.nativeElement;
    }
    ngOnInit() {
        this.refresh();
        this.refreshView();
    }
    refreshView() {
        this.checkDayEvents();
        this.setHours();
    }
    checkEdge(event) {
        this.edge = event;
    }
    setHours() {
        this.hours = [];
        for (let hour = 0; hour <= 23; hour++) {
            this.hours.push(new AxiomSchedulerHour(this.date.clone().startOf('day').add(hour, 'hours')));
        }
    }
    checkDayEvents() {
        this.dayEvents = [];
        this.service.axEvents.forEach(ev => {
            if (ev.from && ev.to) {
                if (moment(ev.from).isSameOrAfter(this.date.clone().startOf('day')) && moment(ev.to).isSameOrBefore(this.date.clone().endOf('day'))) {
                    this.dayEvents.push(ev);
                }
            }
            else if (ev.from && !ev.to) {
                if (moment(ev.from).isSameOrAfter(this.date.clone().startOf('day')) && moment(ev.from).isSameOrBefore(this.date.clone().endOf('day'))) {
                    this.dayEvents.push(ev);
                }
            }
        });
    }
}
AxiomSchedulerDayColumnComponent.ɵfac = function AxiomSchedulerDayColumnComponent_Factory(t) { return new (t || AxiomSchedulerDayColumnComponent)(i0.ɵɵdirectiveInject(i0.Injector), i0.ɵɵdirectiveInject(i0.ElementRef)); };
AxiomSchedulerDayColumnComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AxiomSchedulerDayColumnComponent, selectors: [["", "ax-scheduler-day-column", ""]], hostAttrs: [1, "ax-scheduler__day-view__body"], hostVars: 2, hostBindings: function AxiomSchedulerDayColumnComponent_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassProp("hour-none", !ctx.hourColumn);
    } }, inputs: { hourColumn: "hourColumn", bounds: "bounds" }, features: [i0.ɵɵInheritDefinitionFeature], attrs: _c0, decls: 2, vars: 2, consts: [["class", "ax-scheduler__event-tile", 3, "ngDraggable", "gridSize", "bounds", "lockAxis", "inBounds", "zIndexMoving", "preventDefaultEvent", "ngResizable", "rzHandles", "rzGrid", "movingOffset", "endOffset", "started", "edge", "rzResizing", "rzStop", "rzStart", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], [1, "ax-scheduler__event-tile", 3, "ngDraggable", "gridSize", "bounds", "lockAxis", "inBounds", "zIndexMoving", "preventDefaultEvent", "ngResizable", "rzHandles", "rzGrid", "movingOffset", "endOffset", "started", "edge", "rzResizing", "rzStop", "rzStart"], ["ax-scheduler-event", "", 1, "ax-scheduler__event-tile__box", 3, "event", "axEventTemplate", "axEventToolbar"], ["ev", ""], [1, "ax-scheduler__day-view__hour-column"], [4, "ngIf"], ["ax-scheduler-hour", "", 1, "ax-scheduler__day-view__event-column", 3, "hour", "axEventTemplate", "axEventFormatter"]], template: function AxiomSchedulerDayColumnComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, AxiomSchedulerDayColumnComponent_div_0_Template, 3, 13, "div", 0);
        i0.ɵɵtemplate(1, AxiomSchedulerDayColumnComponent_div_1_Template, 4, 4, "div", 1);
    } if (rf & 2) {
        i0.ɵɵproperty("ngForOf", ctx.dayEvents);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.hours);
    } }, directives: [i1.NgForOf, i2.AngularDraggableDirective, i2.AngularResizableDirective, i3.AxiomSchedulerEventComponent, i1.NgIf, i4.AxiomSchedulerHourComponent], styles: [""], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AxiomSchedulerDayColumnComponent, [{
        type: Component,
        args: [{
                selector: '[ax-scheduler-day-column]',
                templateUrl: './axiom-scheduler-day-column.component.html',
                styleUrls: ['./axiom-scheduler-day-column.component.scss'],
                encapsulation: ViewEncapsulation.None,
                host: {
                    'class': 'ax-scheduler__day-view__body',
                    '[class.hour-none]': '!hourColumn'
                }
            }]
    }], function () { return [{ type: i0.Injector }, { type: i0.ElementRef }]; }, { hourColumn: [{
            type: Input
        }], bounds: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXhpb20tc2NoZWR1bGVyLWRheS1jb2x1bW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYXhpb20tc2NoZWR1bGVyL3NyYy9saWIvYXhpb20tc2NoZWR1bGVyLWRheS1jb2x1bW4vYXhpb20tc2NoZWR1bGVyLWRheS1jb2x1bW4uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYXhpb20tc2NoZWR1bGVyL3NyYy9saWIvYXhpb20tc2NoZWR1bGVyLWRheS1jb2x1bW4vYXhpb20tc2NoZWR1bGVyLWRheS1jb2x1bW4uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxpQkFBaUIsRUFBYyxLQUFLLEVBQVksTUFBTSxlQUFlLENBQUM7QUFDbEcsT0FBTyxLQUFLLFFBQVEsTUFBTSxRQUFRLENBQUM7QUFDbkMsT0FBTyxFQUFFLDZCQUE2QixFQUF1QixNQUFNLGdEQUFnRCxDQUFDO0FBQ3BILE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGtFQUFrRSxDQUFDOzs7Ozs7Ozs7SUNIdEcsOEJBT0U7SUFOQSwwTEFBZ0IsNEJBQTJCLElBQUMsdUtBQWMsMkJBQTBCLElBQXhDLG1LQUNqQywrQkFBOEIsSUFERyw2TEFBQSx5S0FHViwwQkFBeUIsSUFIZixpS0FHMkIseUJBQXdCLElBSG5ELG1LQUlqQyw2QkFBNEIsSUFKSztJQU01Qyw0QkFDTTtJQUVSLGlCQUFNOzs7O0lBVmdFLDhDQUE2QiwrQkFBQSx5QkFBQSxpQkFBQSxrQkFBQSx3QkFBQSw2QkFBQSxpQ0FBQSxvQkFBQSw2QkFBQTtJQU9sRCxlQUFlO0lBQWYsZ0NBQWUsMkNBQUEseUNBQUE7OztJQU81RCw0QkFDRTtJQUFBLFlBQ0Y7SUFBQSxpQkFBTzs7O0lBREwsZUFDRjtJQURFLCtEQUNGOzs7SUFKSiwyQkFDRTtJQUFBLDhCQUNFO0lBQUEseUZB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LENBQUM7O2dIQXZEVSxnQ0FBZ0M7cUVBQWhDLGdDQUFnQzs7O1FDZjdDLGtGQU9FO1FBS0YsaUZBQ0U7O1FBYm9DLHVDQUErQjtRQVloRSxlQUE0QztRQUE1QyxtQ0FBNEM7O2tEREdwQyxnQ0FBZ0M7Y0FWNUMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSwyQkFBMkI7Z0JBQ3JDLFdBQVcsRUFBRSw2Q0FBNkM7Z0JBQzFELFNBQVMsRUFBRSxDQUFDLDZDQUE2QyxDQUFDO2dCQUMxRCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsSUFBSSxFQUFFO29CQUNKLE9BQU8sRUFBRSw4QkFBOEI7b0JBQ3ZDLG1CQUFtQixFQUFFLGFBQWE7aUJBQ25DO2FBQ0Y7b0ZBR1UsVUFBVTtrQkFBbEIsS0FBSztZQUNHLE1BQU07a0JBQWQsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiwgRWxlbWVudFJlZiwgSW5wdXQsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBtb21lbnROcyBmcm9tICdtb21lbnQnOyBjb25zdCBtb21lbnQgPSBtb21lbnROcztcbmltcG9ydCB7IEF4aW9tU2NoZWR1bGVyQ29tcG9uZW50Q29tbW9uLCBBeGlvbVNjaGVkdWxlckV2ZW50IH0gZnJvbSAnLi8uLi9heGlvbS1zY2hlZHVsZXIvYXhpb20tc2NoZWR1bGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBeGlvbVNjaGVkdWxlckhvdXIgfSBmcm9tICcuLy4uL2F4aW9tLXNjaGVkdWxlci1kYXktdmlldy9heGlvbS1zY2hlZHVsZXItZGF5LXZpZXcuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnW2F4LXNjaGVkdWxlci1kYXktY29sdW1uXScsXG4gIHRlbXBsYXRlVXJsOiAnLi9heGlvbS1zY2hlZHVsZXItZGF5LWNvbHVtbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2F4aW9tLXNjaGVkdWxlci1kYXktY29sdW1uLmNvbXBvbmVudC5zY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGhvc3Q6IHtcbiAgICAnY2xhc3MnOiAnYXgtc2NoZWR1bGVyX19kYXktdmlld19fYm9keScsXG4gICAgJ1tjbGFzcy5ob3VyLW5vbmVdJzogJyFob3VyQ29sdW1uJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIEF4aW9tU2NoZWR1bGVyRGF5Q29sdW1uQ29tcG9uZW50IGV4dGVuZHMgQXhpb21TY2hlZHVsZXJDb21wb25lbnRDb21tb24gaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIGhvdXJDb2x1bW46IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKSBib3VuZHM6IGFueTtcblxuICBwdWJsaWMgZGF5RXZlbnRzOiBBeGlvbVNjaGVkdWxlckV2ZW50W107XG4gIHB1YmxpYyBob3VyczogQXhpb21TY2hlZHVsZXJIb3VyW107XG5cbiAgcHVibGljIGVkZ2UgPSB7XG4gICAgdG9wOiB0cnVlLFxuICAgIGJvdHRvbTogdHJ1ZSxcbiAgICBsZWZ0OiB0cnVlLFxuICAgIHJpZ2h0OiB0cnVlXG4gIH07XG5cbiAgY29uc3RydWN0b3IoaW5qZWN0b3I6IEluamVjdG9yLCBwdWJsaWMgX2VsZW1lbnQ6IEVsZW1lbnRSZWYpIHtcbiAgICBzdXBlcihpbmplY3Rvcik7XG4gICAgdGhpcy5ib3VuZHMgPSB0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XG4gIH1cblxuICBwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5yZWZyZXNoKCk7XG4gICAgdGhpcy5yZWZyZXNoVmlldygpO1xuICB9XG5cbiAgcHVibGljIHJlZnJlc2hWaWV3KCk6IHZvaWQge1xuICAgIHRoaXMuY2hlY2tEYXlFdmVudHMoKTtcbiAgICB0aGlzLnNldEhvdXJzKCk7XG4gIH1cblxuICBwdWJsaWMgY2hlY2tFZGdlKGV2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5lZGdlID0gZXZlbnQ7XG4gIH1cblxuICBwcml2YXRlIHNldEhvdXJzKCk6IHZvaWQge1xuICAgIHRoaXMuaG91cnMgPSBbXTtcbiAgICBmb3IgKGxldCBob3VyID0gMDsgaG91ciA8PSAyMzsgaG91cisrKSB7XG4gICAgICB0aGlzLmhvdXJzLnB1c2gobmV3IEF4aW9tU2NoZWR1bGVySG91cih0aGlzLmRhdGUuY2xvbmUoKS5zdGFydE9mKCdkYXknKS5hZGQoaG91ciwgJ2hvdXJzJykpKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNoZWNrRGF5RXZlbnRzKCk6IHZvaWQge1xuICAgIHRoaXMuZGF5RXZlbnRzID0gW107XG4gICAgdGhpcy5zZXJ2aWNlLmF4RXZlbnRzLmZvckVhY2goZXYgPT4ge1xuICAgICAgaWYgKGV2LmZyb20gJiYgZXYudG8pIHtcbiAgICAgICAgaWYgKG1vbWVudChldi5mcm9tKS5pc1NhbWVPckFmdGVyKHRoaXMuZGF0ZS5jbG9uZSgpLnN0YXJ0T2YoJ2RheScpKSAmJiBtb21lbnQoZXYudG8pLmlzU2FtZU9yQmVmb3JlKHRoaXMuZGF0ZS5jbG9uZSgpLmVuZE9mKCdkYXknKSkpIHtcbiAgICAgICAgICB0aGlzLmRheUV2ZW50cy5wdXNoKGV2KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSBpZiAoZXYuZnJvbSAmJiAhZXYudG8pIHtcbiAgICAgICAgaWYgKG1vbWVudChldi5mcm9tKS5pc1NhbWVPckFmdGVyKHRoaXMuZGF0ZS5jbG9uZSgpLnN0YXJ0T2YoJ2RheScpKSAmJiBtb21lbnQoZXYuZnJvbSkuaXNTYW1lT3JCZWZvcmUodGhpcy5kYXRlLmNsb25lKCkuZW5kT2YoJ2RheScpKSkge1xuICAgICAgICAgIHRoaXMuZGF5RXZlbnRzLnB1c2goZXYpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxufVxuIiwiPGRpdiBjbGFzcz1cImF4LXNjaGVkdWxlcl9fZXZlbnQtdGlsZVwiICpuZ0Zvcj1cImxldCBldmVudCBvZiBkYXlFdmVudHNcIiBbbmdEcmFnZ2FibGVdPVwiIWV2ZW50LmxvY2tlZFwiXG4gIChtb3ZpbmdPZmZzZXQpPVwiZXYuZnJvbVRpbWVDaGFuZ2luZygkZXZlbnQpXCIgKGVuZE9mZnNldCk9XCJldi5mcm9tVGltZUNoYW5nZWQoJGV2ZW50KVwiXG4gIChzdGFydGVkKT1cImV2LmZyb21UaW1lQ2hhbmdlU3RhcnQoJGV2ZW50KVwiIChlZGdlKT1cImNoZWNrRWRnZSgkZXZlbnQpXCIgW2dyaWRTaXplXT1cImF4RHJhZ1N0ZXBcIiBbYm91bmRzXT1cImJvdW5kc1wiXG4gIFtsb2NrQXhpc109XCIneCdcIiBbaW5Cb3VuZHNdPVwidHJ1ZVwiIFt6SW5kZXhNb3ZpbmddPVwiJzEwMDAnXCIgW3ByZXZlbnREZWZhdWx0RXZlbnRdPVwidHJ1ZVwiIFtuZ1Jlc2l6YWJsZV09XCIhZXZlbnQubG9ja2VkXCJcbiAgW3J6SGFuZGxlc109XCIncyxuJ1wiIChyelJlc2l6aW5nKT1cImV2LnRvVGltZUNoYW5naW5nKCRldmVudClcIiAocnpTdG9wKT1cImV2LnRvVGltZUNoYW5nZWQoJGV2ZW50KVwiXG4gIChyelN0YXJ0KT1cImV2LnRvVGltZUNoYW5nZVN0YXJ0KCRldmVudClcIiBbcnpHcmlkXT1cImF4RHJhZ1N0ZXBcIj5cblxuICA8ZGl2IGNsYXNzPVwiYXgtc2NoZWR1bGVyX19ldmVudC10aWxlX19ib3hcIiAjZXYgW2V2ZW50XT1cImV2ZW50XCIgW2F4RXZlbnRUZW1wbGF0ZV09XCJheEV2ZW50VGVtcGxhdGVcIiBbYXhFdmVudFRvb2xiYXJdPVwiYXhFdmVudFRvb2xiYXJcIiBheC1zY2hlZHVsZXItZXZlbnQ+XG4gIDwvZGl2PlxuXG48L2Rpdj5cblxuPGRpdiAqbmdGb3I9XCJsZXQgaG91ciBvZiBob3VycztsZXQgaW5kZXggPSBpbmRleFwiPlxuICA8ZGl2IGNsYXNzPVwiYXgtc2NoZWR1bGVyX19kYXktdmlld19faG91ci1jb2x1bW5cIj5cbiAgICA8c3BhbiAqbmdJZj1cImluZGV4ID4gMFwiPlxuICAgICAge3sgaG91ci5zdGFydC5mb3JtYXQoJ0hIOm1tJykgfX1cbiAgICA8L3NwYW4+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiYXgtc2NoZWR1bGVyX19kYXktdmlld19fZXZlbnQtY29sdW1uXCIgYXgtc2NoZWR1bGVyLWhvdXIgW2hvdXJdPVwiaG91clwiIFtheEV2ZW50VGVtcGxhdGVdPVwiYXhFdmVudFRlbXBsYXRlXCJcbiAgICBbYXhFdmVudEZvcm1hdHRlcl09XCJheEV2ZW50Rm9ybWF0dGVyXCI+XG5cbiAgPC9kaXY+XG48L2Rpdj4iXX0=