import { Component, ViewEncapsulation } from '@angular/core';
import { transition, style, animate, trigger } from '@angular/animations';
import * as momentNs from 'moment';
import { AxiomSchedulerComponentCommon } from './../axiom-scheduler/axiom-scheduler.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../axiom-scheduler-day-tile/axiom-scheduler-day-tile.component";
import * as i3 from "../axiom-scheduler-sidebar/axiom-scheduler-sidebar.component";
const _c0 = ["ax-scheduler-month-view", ""];
function AxiomSchedulerMonthViewComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 2);
} if (rf & 2) {
    const day_r2 = ctx.$implicit;
    const index_r3 = ctx.index;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("axEventTemplate", ctx_r0.axEventTemplate)("axEventFormatter", ctx_r0.axEventFormatter)("axDragStep", ctx_r0.axDragStep)("axStartDate", ctx_r0.axStartDate)("axEventToolbar", ctx_r0.axEventToolbar)("day", day_r2)("index", index_r3);
} }
function AxiomSchedulerMonthViewComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 3);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("@slideInOutRight", undefined)("axEventTemplate", ctx_r1.axEventTemplate)("axEventToolbar", ctx_r1.axEventToolbar);
} }
const moment = momentNs;
export class AxiomSchedulerMonthViewComponent extends AxiomSchedulerComponentCommon {
    constructor(injector) {
        super(injector);
        this.sidebar = false;
    }
    ngOnInit() {
        this.subscriptionGarbageCollection.push(this.sidebarService.toggle.subscribe(toggle => {
            this.sidebar = toggle;
        }));
        this.refresh();
        this.refreshView();
    }
    refreshView() {
        this.setDays();
    }
    setDays() {
        const monthSize = 42;
        var startOfMonth = this.date.clone().startOf('month');
        var endOfMonth = this.date.clone().endOf('month');
        this.days = [];
        var day = startOfMonth.clone();
        while (day <= endOfMonth) {
            this.days.push(day);
            day = day.clone().add(1, 'd');
        }
        if (startOfMonth.clone().get('d') < 6) {
            day = startOfMonth.clone();
            while (day.get('d') < 6) {
                day = day.clone().add(-1, 'days');
                this.days.unshift(day);
            }
        }
        if (this.days.length < monthSize) {
            var size = (monthSize - this.days.length);
            for (let index = 1; index <= size; index++) {
                this.days.push(endOfMonth.clone().add(index, 'days'));
            }
        }
    }
}
AxiomSchedulerMonthViewComponent.ɵfac = function AxiomSchedulerMonthViewComponent_Factory(t) { return new (t || AxiomSchedulerMonthViewComponent)(i0.ɵɵdirectiveInject(i0.Injector)); };
AxiomSchedulerMonthViewComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AxiomSchedulerMonthViewComponent, selectors: [["", "ax-scheduler-month-view", ""]], hostAttrs: [1, "ax-scheduler__month-view"], features: [i0.ɵɵInheritDefinitionFeature], attrs: _c0, decls: 2, vars: 2, consts: [["ax-scheduler-day-tile", "", 3, "axEventTemplate", "axEventFormatter", "axDragStep", "axStartDate", "axEventToolbar", "day", "index", 4, "ngFor", "ngForOf"], ["ax-scheduler-sidebar", "", 3, "axEventTemplate", "axEventToolbar", 4, "ngIf"], ["ax-scheduler-day-tile", "", 3, "axEventTemplate", "axEventFormatter", "axDragStep", "axStartDate", "axEventToolbar", "day", "index"], ["ax-scheduler-sidebar", "", 3, "axEventTemplate", "axEventToolbar"]], template: function AxiomSchedulerMonthViewComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, AxiomSchedulerMonthViewComponent_div_0_Template, 1, 7, "div", 0);
        i0.ɵɵtemplate(1, AxiomSchedulerMonthViewComponent_div_1_Template, 1, 3, "div", 1);
    } if (rf & 2) {
        i0.ɵɵproperty("ngForOf", ctx.days);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.sidebar);
    } }, directives: [i1.NgForOf, i1.NgIf, i2.AxiomSchedulerDayTileComponent, i3.AxiomSchedulerSidebarComponent], styles: [""], encapsulation: 2, data: { animation: [
            trigger('slideInOutRight', [
                transition(':enter', [
                    style({ transform: 'translateX(-100%)' }),
                    animate(`${120}ms ease-in-out`, style({ transform: 'translateX(0%)' }))
                ]),
                transition(':leave', [
                    animate(`${100}ms ease-in-out`, style({ transform: 'translateX(100%)' }))
                ])
            ])
        ] } });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AxiomSchedulerMonthViewComponent, [{
        type: Component,
        args: [{
                selector: '[ax-scheduler-month-view]',
                templateUrl: './axiom-scheduler-month-view.component.html',
                styleUrls: ['./axiom-scheduler-month-view.component.scss'],
                encapsulation: ViewEncapsulation.None,
                host: {
                    'class': 'ax-scheduler__month-view'
                },
                animations: [
                    trigger('slideInOutRight', [
                        transition(':enter', [
                            style({ transform: 'translateX(-100%)' }),
                            animate(`${120}ms ease-in-out`, style({ transform: 'translateX(0%)' }))
                        ]),
                        transition(':leave', [
                            animate(`${100}ms ease-in-out`, style({ transform: 'translateX(100%)' }))
                        ])
                    ])
                ]
            }]
    }], function () { return [{ type: i0.Injector }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXhpb20tc2NoZWR1bGVyLW1vbnRoLXZpZXcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYXhpb20tc2NoZWR1bGVyL3NyYy9saWIvYXhpb20tc2NoZWR1bGVyLW1vbnRoLXZpZXcvYXhpb20tc2NoZWR1bGVyLW1vbnRoLXZpZXcuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYXhpb20tc2NoZWR1bGVyL3NyYy9saWIvYXhpb20tc2NoZWR1bGVyLW1vbnRoLXZpZXcvYXhpb20tc2NoZWR1bGVyLW1vbnRoLXZpZXcuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxpQkFBaUIsRUFBWSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDMUUsT0FBTyxLQUFLLFFBQVEsTUFBTSxRQUFRLENBQUM7QUFDbkMsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sZ0RBQWdELENBQUM7Ozs7Ozs7SUNGL0YseUJBWU07Ozs7O0lBVk4sd0RBQXFDLDZDQUFBLGlDQUFBLG1DQUFBLHlDQUFBLGVBQUEsbUJBQUE7OztJQWFyQyx5QkFBeUk7OztJQUEvRiw0Q0FBa0IsMkNBQUEseUNBQUE7O0FEZHhCLE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQztBQXVCNUQsTUFBTSxPQUFPLGdDQUFpQyxTQUFRLDZCQUE2QjtJQUtqRixZQUFZLFFBQWtCO1FBQzVCLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUhYLFlBQU8sR0FBRyxLQUFLLENBQUM7SUFJdkIsQ0FBQztJQUVNLFFBQVE7UUFDYixJQUFJLENBQUMsNkJBQTZCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLFNBQVMs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U0FBUyxFQUFFLENBQUMsNkNBQTZDLENBQUM7Z0JBQzFELGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxJQUFJLEVBQUU7b0JBQ0osT0FBTyxFQUFFLDBCQUEwQjtpQkFDcEM7Z0JBQ0QsVUFBVSxFQUFFO29CQUNWLE9BQU8sQ0FBQyxpQkFBaUIsRUFBRTt3QkFDekIsVUFBVSxDQUFDLFFBQVEsRUFBRTs0QkFDbkIsS0FBSyxDQUFDLEVBQUUsU0FBUyxFQUFFLG1CQUFtQixFQUFFLENBQUM7NEJBQ3pDLE9BQU8sQ0FBQyxHQUFHLEdBQUcsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLEVBQUUsU0FBUyxFQUFFLGdCQUFnQixFQUFFLENBQUMsQ0FBQzt5QkFDeEUsQ0FBQzt3QkFDRixVQUFVLENBQUMsUUFBUSxFQUFFOzRCQUNuQixPQUFPLENBQUMsR0FBRyxHQUFHLGdCQUFnQixFQUFFLEtBQUssQ0FBQyxFQUFFLFNBQVMsRUFBRSxrQkFBa0IsRUFBRSxDQUFDLENBQUM7eUJBQzFFLENBQUM7cUJBQ0gsQ0FBQztpQkFDSDthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uLCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgdHJhbnNpdGlvbiwgc3R5bGUsIGFuaW1hdGUsIHRyaWdnZXIgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCAqIGFzIG1vbWVudE5zIGZyb20gJ21vbWVudCc7IGNvbnN0IG1vbWVudCA9IG1vbWVudE5zO1xuaW1wb3J0IHsgQXhpb21TY2hlZHVsZXJDb21wb25lbnRDb21tb24gfSBmcm9tICcuLy4uL2F4aW9tLXNjaGVkdWxlci9heGlvbS1zY2hlZHVsZXIuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnW2F4LXNjaGVkdWxlci1tb250aC12aWV3XScsXG4gIHRlbXBsYXRlVXJsOiAnLi9heGlvbS1zY2hlZHVsZXItbW9udGgtdmlldy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2F4aW9tLXNjaGVkdWxlci1tb250aC12aWV3LmNvbXBvbmVudC5zY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGhvc3Q6IHtcbiAgICAnY2xhc3MnOiAnYXgtc2NoZWR1bGVyX19tb250aC12aWV3J1xuICB9LFxuICBhbmltYXRpb25zOiBbXG4gICAgdHJpZ2dlcignc2xpZGVJbk91dFJpZ2h0JywgW1xuICAgICAgdHJhbnNpdGlvbignOmVudGVyJywgW1xuICAgICAgICBzdHlsZSh7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoLTEwMCUpJyB9KSxcbiAgICAgICAgYW5pbWF0ZShgJHsxMjB9bXMgZWFzZS1pbi1vdXRgLCBzdHlsZSh7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMCUpJyB9KSlcbiAgICAgIF0pLFxuICAgICAgdHJhbnNpdGlvbignOmxlYXZlJywgW1xuICAgICAgICBhbmltYXRlKGAkezEwMH1tcyBlYXNlLWluLW91dGAsIHN0eWxlKHsgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgxMDAlKScgfSkpXG4gICAgICBdKVxuICAgIF0pXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQXhpb21TY2hlZHVsZXJNb250aFZpZXdDb21wb25lbnQgZXh0ZW5kcyBBeGlvbVNjaGVkdWxlckNvbXBvbmVudENvbW1vbiBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgcHVibGljIGRheXM6IG1vbWVudE5zLk1vbWVudFtdO1xuICBwdWJsaWMgc2lkZWJhciA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKGluamVjdG9yOiBJbmplY3Rvcikge1xuICAgIHN1cGVyKGluamVjdG9yKTtcbiAgfVxuXG4gIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbkdhcmJhZ2VDb2xsZWN0aW9uLnB1c2godGhpcy5zaWRlYmFyU2VydmljZS50b2dnbGUuc3Vic2NyaWJlKHRvZ2dsZSA9PiB7XG4gICAgICB0aGlzLnNpZGViYXIgPSB0b2dnbGU7XG4gICAgfSkpO1xuICAgIHRoaXMucmVmcmVzaCgpO1xuICAgIHRoaXMucmVmcmVzaFZpZXcoKTtcbiAgfVxuXG4gIHB1YmxpYyByZWZyZXNoVmlldygpOiB2b2lkIHtcbiAgICB0aGlzLnNldERheXMoKTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0RGF5cygpOiB2b2lkIHtcbiAgICBjb25zdCBtb250aFNpemUgPSA0MjtcbiAgICB2YXIgc3RhcnRPZk1vbnRoID0gdGhpcy5kYXRlLmNsb25lKCkuc3RhcnRPZignbW9udGgnKTtcbiAgICB2YXIgZW5kT2ZNb250aCA9IHRoaXMuZGF0ZS5jbG9uZSgpLmVuZE9mKCdtb250aCcpO1xuICAgIHRoaXMuZGF5cyA9IFtdO1xuICAgIHZhciBkYXkgPSBzdGFydE9mTW9udGguY2xvbmUoKTtcbiAgICB3aGlsZSAoZGF5IDw9IGVuZE9mTW9udGgpIHtcbiAgICAgIHRoaXMuZGF5cy5wdXNoKGRheSk7XG4gICAgICBkYXkgPSBkYXkuY2xvbmUoKS5hZGQoMSwgJ2QnKTtcbiAgICB9XG4gICAgaWYgKHN0YXJ0T2ZNb250aC5jbG9uZSgpLmdldCgnZCcpIDwgNikge1xuICAgICAgZGF5ID0gc3RhcnRPZk1vbnRoLmNsb25lKCk7XG4gICAgICB3aGlsZSAoZGF5LmdldCgnZCcpIDwgNikge1xuICAgICAgICBkYXkgPSBkYXkuY2xvbmUoKS5hZGQoLTEsICdkYXlzJyk7XG4gICAgICAgIHRoaXMuZGF5cy51bnNoaWZ0KGRheSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aGlzLmRheXMubGVuZ3RoIDwgbW9udGhTaXplKSB7XG4gICAgICB2YXIgc2l6ZSA9IChtb250aFNpemUgLSB0aGlzLmRheXMubGVuZ3RoKTtcbiAgICAgIGZvciAobGV0IGluZGV4ID0gMTsgaW5kZXggPD0gc2l6ZTsgaW5kZXgrKykge1xuICAgICAgICB0aGlzLmRheXMucHVzaChlbmRPZk1vbnRoLmNsb25lKCkuYWRkKGluZGV4LCAnZGF5cycpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxufVxuIiwiXG48ZGl2ICpuZ0Zvcj1cImxldCBkYXkgb2YgZGF5cztsZXQgaW5kZXg9aW5kZXhcIiBcbmF4LXNjaGVkdWxlci1kYXktdGlsZSBcbltheEV2ZW50VGVtcGxhdGVdID0gXCJheEV2ZW50VGVtcGxhdGVcIlxuW2F4RXZlbnRGb3JtYXR0ZXJdID0gXCJheEV2ZW50Rm9ybWF0dGVyXCJcbltheERyYWdTdGVwXT1cImF4RHJhZ1N0ZXBcIlxuW2F4U3RhcnREYXRlXT1cImF4U3RhcnREYXRlXCJcbltheEV2ZW50VG9vbGJhcl09XCJheEV2ZW50VG9vbGJhclwiXG5bZGF5XT1cImRheVwiIFxuW2luZGV4XT1cImluZGV4XCI+XG5cbiAgICBcblxuPC9kaXY+XG5cblxuPGRpdiBheC1zY2hlZHVsZXItc2lkZWJhciAqbmdJZj1cInNpZGViYXJcIiBbQHNsaWRlSW5PdXRSaWdodF0gW2F4RXZlbnRUZW1wbGF0ZV09XCJheEV2ZW50VGVtcGxhdGVcIiBbYXhFdmVudFRvb2xiYXJdPVwiYXhFdmVudFRvb2xiYXJcIj48L2Rpdj4iXX0=