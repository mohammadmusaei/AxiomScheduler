import { Component, ViewEncapsulation, Input } from '@angular/core';
import { AxiomSchedulerComponentCommon } from './../axiom-scheduler/axiom-scheduler.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../axiom-scheduler-month-tile-day/axiom-scheduler-month-tile-day.component";
const _c0 = ["ax-scheduler-month-tile", ""];
const _c1 = function (a0, a1) { return { "today": a0, "current": a1 }; };
function AxiomSchedulerMonthTileComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵelement(1, "span", 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const day_r1 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(6, _c1, day_r1.isSame(ctx_r0.today, "days"), day_r1.isSame(ctx_r0.monthObject.month, "months")));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("axEventTemplate", ctx_r0.axEventTemplate)("axEventFormatter", ctx_r0.axEventFormatter)("axDragStep", ctx_r0.axDragStep)("axStartDate", ctx_r0.axStartDate)("day", day_r1);
} }
export class AxiomSchedulerMonthTileComponent extends AxiomSchedulerComponentCommon {
    constructor(injector) {
        super(injector);
    }
    ngOnInit() {
        this.refresh();
    }
    refreshView() {
        this.monthObject.month = this.date.startOf('months');
        this.monthObject.setDays();
    }
}
AxiomSchedulerMonthTileComponent.ɵfac = function AxiomSchedulerMonthTileComponent_Factory(t) { return new (t || AxiomSchedulerMonthTileComponent)(i0.ɵɵdirectiveInject(i0.Injector)); };
AxiomSchedulerMonthTileComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AxiomSchedulerMonthTileComponent, selectors: [["", "ax-scheduler-month-tile", ""]], hostAttrs: [1, "ax-scheduler__year-view__month"], inputs: { monthObject: "monthObject" }, features: [i0.ɵɵInheritDefinitionFeature], attrs: _c0, decls: 4, vars: 2, consts: [[1, "ax-scheduler__year-view__month__header"], [1, "ax-scheduler__year-view__month__body"], [3, "ngClass", 4, "ngFor", "ngForOf"], [3, "ngClass"], ["ax-scheduler-month-tile-day", "", 3, "axEventTemplate", "axEventFormatter", "axDragStep", "axStartDate", "day"]], template: function AxiomSchedulerMonthTileComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "div", 1);
        i0.ɵɵtemplate(3, AxiomSchedulerMonthTileComponent_div_3_Template, 2, 9, "div", 2);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", ctx.monthObject.month.format("MMMM"), "\n");
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx.monthObject.days);
    } }, directives: [i1.NgForOf, i1.NgClass, i2.AxiomSchedulerMonthTileDayComponent], styles: [""], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AxiomSchedulerMonthTileComponent, [{
        type: Component,
        args: [{
                selector: '[ax-scheduler-month-tile]',
                templateUrl: './axiom-scheduler-month-tile.component.html',
                styleUrls: ['./axiom-scheduler-month-tile.component.scss'],
                encapsulation: ViewEncapsulation.None,
                host: {
                    'class': 'ax-scheduler__year-view__month'
                }
            }]
    }], function () { return [{ type: i0.Injector }]; }, { monthObject: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXhpb20tc2NoZWR1bGVyLW1vbnRoLXRpbGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYXhpb20tc2NoZWR1bGVyL3NyYy9saWIvYXhpb20tc2NoZWR1bGVyLW1vbnRoLXRpbGUvYXhpb20tc2NoZWR1bGVyLW1vbnRoLXRpbGUuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYXhpb20tc2NoZWR1bGVyL3NyYy9saWIvYXhpb20tc2NoZWR1bGVyLW1vbnRoLXRpbGUvYXhpb20tc2NoZWR1bGVyLW1vbnRoLXRpbGUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBVSxpQkFBaUIsRUFBWSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdEYsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sZ0RBQWdELENBQUM7Ozs7Ozs7SUNJM0YsOEJBQ0k7SUFBQSwwQkFLbUI7SUFDdkIsaUJBQU07Ozs7SUFQb0MsNElBQXVHO0lBRTdJLGVBQXFDO0lBQXJDLHdEQUFxQyw2Q0FBQSxpQ0FBQSxtQ0FBQSxlQUFBOztBREs3QyxNQUFNLE9BQU8sZ0NBQWlDLFNBQVEsNkJBQTZCO0lBSWpGLFlBQVksUUFBa0I7UUFDNUIsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2xCLENBQUM7SUFFTSxRQUFRO1FBQ2IsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFFTSxXQUFXO1FBQ2hCLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3JELElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDN0IsQ0FBQzs7Z0hBZlUsZ0NBQWdDO3FFQUFoQyxnQ0FBZ0M7UUNYN0MsOEJBQ0c7UUFBQSxZQUNIO1FBQUEsaUJBQU07UUFDTiw4QkFDSTtRQUFBLGlGQUNJO1FBT1AsaUJBQU07O1FBWEosZUFDSDtRQURHLHNFQUNIO1FBRVMsZUFBb0M7UUFBcEMsOENBQW9DOztrRERPaEMsZ0NBQWdDO2NBVDVDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsMkJBQTJCO2dCQUNyQyxXQUFXLEVBQUUsNkNBQTZDO2dCQUMxRCxTQUFTLEVBQUUsQ0FBQyw2Q0FBNkMsQ0FBQztnQkFDMUQsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLElBQUksRUFBRTtvQkFDSixPQUFPLEVBQUUsZ0NBQWdDO2lCQUMxQzthQUNGOzJEQUdVLFdBQVc7a0JBQW5CLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBeGlvbVNjaGVkdWxlclllYXJWaWV3TW9udGhPYmplY3QgfSBmcm9tICcuLy4uL2F4aW9tLXNjaGVkdWxlci15ZWFyLXZpZXcvYXhpb20tc2NoZWR1bGVyLXllYXItdmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uLCBJbmplY3RvciwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEF4aW9tU2NoZWR1bGVyQ29tcG9uZW50Q29tbW9uIH0gZnJvbSAnLi8uLi9heGlvbS1zY2hlZHVsZXIvYXhpb20tc2NoZWR1bGVyLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ1theC1zY2hlZHVsZXItbW9udGgtdGlsZV0nLFxuICB0ZW1wbGF0ZVVybDogJy4vYXhpb20tc2NoZWR1bGVyLW1vbnRoLXRpbGUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9heGlvbS1zY2hlZHVsZXItbW9udGgtdGlsZS5jb21wb25lbnQuc2NzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBob3N0OiB7XG4gICAgJ2NsYXNzJzogJ2F4LXNjaGVkdWxlcl9feWVhci12aWV3X19tb250aCdcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBBeGlvbVNjaGVkdWxlck1vbnRoVGlsZUNvbXBvbmVudCBleHRlbmRzIEF4aW9tU2NoZWR1bGVyQ29tcG9uZW50Q29tbW9uIGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSBtb250aE9iamVjdDogQXhpb21TY2hlZHVsZXJZZWFyVmlld01vbnRoT2JqZWN0O1xuXG4gIGNvbnN0cnVjdG9yKGluamVjdG9yOiBJbmplY3Rvcikge1xuICAgIHN1cGVyKGluamVjdG9yKTtcbiAgfVxuXG4gIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnJlZnJlc2goKTtcbiAgfVxuXG4gIHB1YmxpYyByZWZyZXNoVmlldygpOiB2b2lkIHtcbiAgICB0aGlzLm1vbnRoT2JqZWN0Lm1vbnRoID0gdGhpcy5kYXRlLnN0YXJ0T2YoJ21vbnRocycpO1xuICAgIHRoaXMubW9udGhPYmplY3Quc2V0RGF5cygpO1xuICB9XG5cbn1cbiIsIlxuXG48ZGl2IGNsYXNzPVwiYXgtc2NoZWR1bGVyX195ZWFyLXZpZXdfX21vbnRoX19oZWFkZXJcIj5cbiAgIHt7IG1vbnRoT2JqZWN0Lm1vbnRoLmZvcm1hdCgnTU1NTScpIH19XG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJheC1zY2hlZHVsZXJfX3llYXItdmlld19fbW9udGhfX2JvZHlcIj5cbiAgICA8ZGl2ICpuZ0Zvcj1cImxldCBkYXkgb2YgbW9udGhPYmplY3QuZGF5c1wiIFtuZ0NsYXNzXT1cInsgJ3RvZGF5JyA6IGRheS5pc1NhbWUodG9kYXksJ2RheXMnKSAsICdjdXJyZW50JyA6IGRheS5pc1NhbWUobW9udGhPYmplY3QubW9udGgsJ21vbnRocycpIH1cIj5cbiAgICAgICAgPHNwYW4gYXgtc2NoZWR1bGVyLW1vbnRoLXRpbGUtZGF5XG4gICAgICAgIFtheEV2ZW50VGVtcGxhdGVdID0gXCJheEV2ZW50VGVtcGxhdGVcIlxuICAgICAgICBbYXhFdmVudEZvcm1hdHRlcl0gPSBcImF4RXZlbnRGb3JtYXR0ZXJcIlxuICAgICAgICBbYXhEcmFnU3RlcF09XCJheERyYWdTdGVwXCJcbiAgICAgICAgW2F4U3RhcnREYXRlXT1cImF4U3RhcnREYXRlXCJcbiAgICAgICAgW2RheV09XCJkYXlcIj48L3NwYW4+XG4gICAgPC9kaXY+XG4gPC9kaXY+Il19