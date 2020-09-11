import { Component, ViewEncapsulation } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import * as momentNs from 'moment';
import { AxiomSchedulerComponentCommon } from './../axiom-scheduler/axiom-scheduler.component';
import * as i0 from "@angular/core";
const _c0 = ["ax-scheduler-year-view", ""];
function AxiomSchedulerYearViewComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelement(1, "div", 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const month_r2 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("monthObject", month_r2)("axEventTemplate", ctx_r0.axEventTemplate)("axEventFormatter", ctx_r0.axEventFormatter)("axDragStep", ctx_r0.axDragStep)("axEventToolbar", ctx_r0.axEventToolbar)("axStartDate", ctx_r0.axStartDate);
} }
function AxiomSchedulerYearViewComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 3);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("@slideInOutRight", undefined)("axEventTemplate", ctx_r1.axEventTemplate)("axEventToolbar", ctx_r1.axEventToolbar);
} }
const moment = momentNs;
export class AxiomSchedulerYearViewMonthObject {
    constructor(month) {
        this.month = month.clone();
        this.setDays();
    }
    setDays() {
        const monthSize = 42;
        var startOfMonth = this.month.clone().startOf('month');
        var endOfMonth = this.month.clone().endOf('month');
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
export class AxiomSchedulerYearViewComponent extends AxiomSchedulerComponentCommon {
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
        this.setMonths();
    }
    setMonths() {
        var startMonth = this.date.clone().startOf('year');
        var endMonth = this.date.clone().endOf('year');
        this.months = [];
        var month = startMonth.clone();
        while (month <= endMonth) {
            this.months.push(new AxiomSchedulerYearViewMonthObject(month));
            month = month.clone().add(1, 'month');
        }
    }
}
AxiomSchedulerYearViewComponent.ɵfac = function AxiomSchedulerYearViewComponent_Factory(t) { return new (t || AxiomSchedulerYearViewComponent)(i0.ɵɵdirectiveInject(i0.Injector)); };
AxiomSchedulerYearViewComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AxiomSchedulerYearViewComponent, selectors: [["", "ax-scheduler-year-view", ""]], hostAttrs: [1, "ax-scheduler__year-view"], features: [i0.ɵɵInheritDefinitionFeature], attrs: _c0, decls: 2, vars: 2, consts: [[4, "ngFor", "ngForOf"], ["ax-scheduler-sidebar", "", 3, "axEventTemplate", "axEventToolbar", 4, "ngIf"], ["ax-scheduler-month-tile", "", 3, "monthObject", "axEventTemplate", "axEventFormatter", "axDragStep", "axEventToolbar", "axStartDate"], ["ax-scheduler-sidebar", "", 3, "axEventTemplate", "axEventToolbar"]], template: function AxiomSchedulerYearViewComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, AxiomSchedulerYearViewComponent_div_0_Template, 2, 6, "div", 0);
        i0.ɵɵtemplate(1, AxiomSchedulerYearViewComponent_div_1_Template, 1, 3, "div", 1);
    } if (rf & 2) {
        i0.ɵɵproperty("ngForOf", ctx.months);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.sidebar);
    } }, styles: [""], encapsulation: 2, data: { animation: [
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
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AxiomSchedulerYearViewComponent, [{
        type: Component,
        args: [{
                selector: '[ax-scheduler-year-view]',
                templateUrl: './axiom-scheduler-year-view.component.html',
                styleUrls: ['./axiom-scheduler-year-view.component.scss'],
                encapsulation: ViewEncapsulation.None,
                host: {
                    'class': 'ax-scheduler__year-view'
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXhpb20tc2NoZWR1bGVyLXllYXItdmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9heGlvbS1zY2hlZHVsZXIvc3JjL2xpYi9heGlvbS1zY2hlZHVsZXIteWVhci12aWV3L2F4aW9tLXNjaGVkdWxlci15ZWFyLXZpZXcuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYXhpb20tc2NoZWR1bGVyL3NyYy9saWIvYXhpb20tc2NoZWR1bGVyLXllYXItdmlldy9heGlvbS1zY2hlZHVsZXIteWVhci12aWV3LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsaUJBQWlCLEVBQVksTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQzFFLE9BQU8sS0FBSyxRQUFRLE1BQU0sUUFBUSxDQUFDO0FBQ25DLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLGdEQUFnRCxDQUFDOzs7O0lDRi9GLDJCQUNFO0lBQUEseUJBTWtDO0lBQ3BDLGlCQUFNOzs7O0lBTkosZUFBcUI7SUFBckIsc0NBQXFCLDJDQUFBLDZDQUFBLGlDQUFBLHlDQUFBLG1DQUFBOzs7SUFVdkIseUJBQXlJOzs7SUFBL0YsNENBQWtCLDJDQUFBLHlDQUFBOztBRFh4QixNQUFNLE1BQU0sR0FBRyxRQUFRLENBQUM7QUFHNUQsTUFBTSxPQUFPLGlDQUFpQztJQUs1QyxZQUFZLEtBQXNCO1FBQ2hDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBRUQsT0FBTztRQUNMLE1BQU0sU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNyQixJ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Z0JBQWdCLEVBQUUsQ0FBQyxDQUFDO3lCQUN4RSxDQUFDO3dCQUNGLFVBQVUsQ0FBQyxRQUFRLEVBQUU7NEJBQ25CLE9BQU8sQ0FBQyxHQUFHLEdBQUcsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLEVBQUUsU0FBUyxFQUFFLGtCQUFrQixFQUFFLENBQUMsQ0FBQzt5QkFDMUUsQ0FBQztxQkFDSCxDQUFDO2lCQUNIO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb24sIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB0cmlnZ2VyLCB0cmFuc2l0aW9uLCBzdHlsZSwgYW5pbWF0ZSB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0ICogYXMgbW9tZW50TnMgZnJvbSAnbW9tZW50JzsgY29uc3QgbW9tZW50ID0gbW9tZW50TnM7XG5pbXBvcnQgeyBBeGlvbVNjaGVkdWxlckNvbXBvbmVudENvbW1vbiB9IGZyb20gJy4vLi4vYXhpb20tc2NoZWR1bGVyL2F4aW9tLXNjaGVkdWxlci5jb21wb25lbnQnO1xuXG5leHBvcnQgY2xhc3MgQXhpb21TY2hlZHVsZXJZZWFyVmlld01vbnRoT2JqZWN0IHtcblxuICBwdWJsaWMgbW9udGg6IG1vbWVudE5zLk1vbWVudDtcbiAgcHVibGljIGRheXM6IG1vbWVudE5zLk1vbWVudFtdO1xuXG4gIGNvbnN0cnVjdG9yKG1vbnRoOiBtb21lbnROcy5Nb21lbnQpIHtcbiAgICB0aGlzLm1vbnRoID0gbW9udGguY2xvbmUoKTtcbiAgICB0aGlzLnNldERheXMoKTtcbiAgfVxuICBcbiAgc2V0RGF5cygpOiB2b2lkIHtcbiAgICBjb25zdCBtb250aFNpemUgPSA0MjtcbiAgICB2YXIgc3RhcnRPZk1vbnRoID0gdGhpcy5tb250aC5jbG9uZSgpLnN0YXJ0T2YoJ21vbnRoJyk7XG4gICAgdmFyIGVuZE9mTW9udGggPSB0aGlzLm1vbnRoLmNsb25lKCkuZW5kT2YoJ21vbnRoJyk7XG4gICAgdGhpcy5kYXlzID0gW107XG4gICAgdmFyIGRheSA9IHN0YXJ0T2ZNb250aC5jbG9uZSgpO1xuICAgIHdoaWxlIChkYXkgPD0gZW5kT2ZNb250aCkge1xuICAgICAgdGhpcy5kYXlzLnB1c2goZGF5KTtcbiAgICAgIGRheSA9IGRheS5jbG9uZSgpLmFkZCgxLCAnZCcpO1xuICAgIH1cbiAgICBpZiAoc3RhcnRPZk1vbnRoLmNsb25lKCkuZ2V0KCdkJykgPCA2KSB7XG4gICAgICBkYXkgPSBzdGFydE9mTW9udGguY2xvbmUoKTtcbiAgICAgIHdoaWxlIChkYXkuZ2V0KCdkJykgPCA2KSB7XG4gICAgICAgIGRheSA9IGRheS5jbG9uZSgpLmFkZCgtMSwgJ2RheXMnKTtcbiAgICAgICAgdGhpcy5kYXlzLnVuc2hpZnQoZGF5KTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRoaXMuZGF5cy5sZW5ndGggPCBtb250aFNpemUpIHtcbiAgICAgIHZhciBzaXplID0gKG1vbnRoU2l6ZSAtIHRoaXMuZGF5cy5sZW5ndGgpO1xuICAgICAgZm9yIChsZXQgaW5kZXggPSAxOyBpbmRleCA8PSBzaXplOyBpbmRleCsrKSB7XG4gICAgICAgIHRoaXMuZGF5cy5wdXNoKGVuZE9mTW9udGguY2xvbmUoKS5hZGQoaW5kZXgsICdkYXlzJykpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdbYXgtc2NoZWR1bGVyLXllYXItdmlld10nLFxuICB0ZW1wbGF0ZVVybDogJy4vYXhpb20tc2NoZWR1bGVyLXllYXItdmlldy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2F4aW9tLXNjaGVkdWxlci15ZWFyLXZpZXcuY29tcG9uZW50LnNjc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgaG9zdDoge1xuICAgICdjbGFzcyc6ICdheC1zY2hlZHVsZXJfX3llYXItdmlldydcbiAgfSxcbiAgYW5pbWF0aW9uczogW1xuICAgIHRyaWdnZXIoJ3NsaWRlSW5PdXRSaWdodCcsIFtcbiAgICAgIHRyYW5zaXRpb24oJzplbnRlcicsIFtcbiAgICAgICAgc3R5bGUoeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKC0xMDAlKScgfSksXG4gICAgICAgIGFuaW1hdGUoYCR7MTIwfW1zIGVhc2UtaW4tb3V0YCwgc3R5bGUoeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDAlKScgfSkpXG4gICAgICBdKSxcbiAgICAgIHRyYW5zaXRpb24oJzpsZWF2ZScsIFtcbiAgICAgICAgYW5pbWF0ZShgJHsxMDB9bXMgZWFzZS1pbi1vdXRgLCBzdHlsZSh7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMTAwJSknIH0pKVxuICAgICAgXSlcbiAgICBdKVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEF4aW9tU2NoZWR1bGVyWWVhclZpZXdDb21wb25lbnQgZXh0ZW5kcyBBeGlvbVNjaGVkdWxlckNvbXBvbmVudENvbW1vbiBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgcHVibGljIG1vbnRoczogQXhpb21TY2hlZHVsZXJZZWFyVmlld01vbnRoT2JqZWN0W107XG4gIHB1YmxpYyBzaWRlYmFyID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoaW5qZWN0b3I6IEluamVjdG9yKSB7XG4gICAgc3VwZXIoaW5qZWN0b3IpO1xuICB9XG5cbiAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uR2FyYmFnZUNvbGxlY3Rpb24ucHVzaCh0aGlzLnNpZGViYXJTZXJ2aWNlLnRvZ2dsZS5zdWJzY3JpYmUodG9nZ2xlID0+IHtcbiAgICAgIHRoaXMuc2lkZWJhciA9IHRvZ2dsZTtcbiAgICB9KSk7XG4gICAgdGhpcy5yZWZyZXNoKCk7XG4gICAgdGhpcy5yZWZyZXNoVmlldygpO1xuICB9XG5cbiAgcHVibGljIHJlZnJlc2hWaWV3KCk6IHZvaWQge1xuICAgIHRoaXMuc2V0TW9udGhzKCk7XG4gIH1cblxuICBwcml2YXRlIHNldE1vbnRocygpOiB2b2lkIHtcbiAgICB2YXIgc3RhcnRNb250aCA9IHRoaXMuZGF0ZS5jbG9uZSgpLnN0YXJ0T2YoJ3llYXInKTtcbiAgICB2YXIgZW5kTW9udGggPSB0aGlzLmRhdGUuY2xvbmUoKS5lbmRPZigneWVhcicpO1xuICAgIHRoaXMubW9udGhzID0gW107XG4gICAgdmFyIG1vbnRoID0gc3RhcnRNb250aC5jbG9uZSgpO1xuICAgIHdoaWxlIChtb250aCA8PSBlbmRNb250aCkge1xuICAgICAgdGhpcy5tb250aHMucHVzaChuZXcgQXhpb21TY2hlZHVsZXJZZWFyVmlld01vbnRoT2JqZWN0KG1vbnRoKSk7XG4gICAgICBtb250aCA9IG1vbnRoLmNsb25lKCkuYWRkKDEsICdtb250aCcpO1xuICAgIH1cbiAgfVxuXG59XG4iLCJcbjxkaXYgKm5nRm9yPVwibGV0IG1vbnRoIG9mIG1vbnRoc1wiPlxuICA8ZGl2IGF4LXNjaGVkdWxlci1tb250aC10aWxlXG4gIFttb250aE9iamVjdF09XCJtb250aFwiXG4gIFtheEV2ZW50VGVtcGxhdGVdID0gXCJheEV2ZW50VGVtcGxhdGVcIlxuICBbYXhFdmVudEZvcm1hdHRlcl0gPSBcImF4RXZlbnRGb3JtYXR0ZXJcIlxuICBbYXhEcmFnU3RlcF09XCJheERyYWdTdGVwXCJcbiAgW2F4RXZlbnRUb29sYmFyXT1cImF4RXZlbnRUb29sYmFyXCJcbiAgW2F4U3RhcnREYXRlXT1cImF4U3RhcnREYXRlXCI+PC9kaXY+XG48L2Rpdj5cblxuXG5cbjxkaXYgYXgtc2NoZWR1bGVyLXNpZGViYXIgKm5nSWY9XCJzaWRlYmFyXCIgW0BzbGlkZUluT3V0UmlnaHRdIFtheEV2ZW50VGVtcGxhdGVdPVwiYXhFdmVudFRlbXBsYXRlXCIgW2F4RXZlbnRUb29sYmFyXT1cImF4RXZlbnRUb29sYmFyXCI+PC9kaXY+Il19