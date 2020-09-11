import { Component, ViewEncapsulation } from '@angular/core';
import * as momentNs from 'moment';
import { AxiomSchedulerComponentCommon } from './../axiom-scheduler/axiom-scheduler.component';
import * as i0 from "@angular/core";
const _c0 = ["ax-scheduler-day-view", ""];
const _c1 = function (a0) { return { "today": a0 }; };
const moment = momentNs;
export class AxiomSchedulerHour {
    constructor(start) {
        this.start = start;
        this.end = this.start.clone().add('hours', 1);
    }
}
export class AxiomSchedulerDayViewComponent extends AxiomSchedulerComponentCommon {
    constructor(injector) {
        super(injector);
    }
    ngOnInit() {
        this.refresh();
    }
}
AxiomSchedulerDayViewComponent.ɵfac = function AxiomSchedulerDayViewComponent_Factory(t) { return new (t || AxiomSchedulerDayViewComponent)(i0.ɵɵdirectiveInject(i0.Injector)); };
AxiomSchedulerDayViewComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AxiomSchedulerDayViewComponent, selectors: [["", "ax-scheduler-day-view", ""]], hostAttrs: [1, "ax-scheduler__day-view"], features: [i0.ɵɵInheritDefinitionFeature], attrs: _c0, decls: 12, vars: 10, consts: [[1, "ax-scheduler__day-view__header"], [1, "header_number", 3, "ngClass"], [1, "header_day_title"], ["ax-scheduler-day-column", "", 3, "axEventTemplate", "axEventFormatter", "axDragStep", "axEventToolbar", "axStartDate"]], template: function AxiomSchedulerDayViewComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelement(1, "div");
        i0.ɵɵelementStart(2, "div");
        i0.ɵɵelementStart(3, "div");
        i0.ɵɵelementStart(4, "span", 1);
        i0.ɵɵtext(5);
        i0.ɵɵelementStart(6, "span", 2);
        i0.ɵɵelementStart(7, "p");
        i0.ɵɵtext(8, "th");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "p");
        i0.ɵɵtext(10);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelement(11, "div", 3);
    } if (rf & 2) {
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(8, _c1, ctx.date.isSame(ctx.today, "days")));
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", ctx.date.format("D"), " ");
        i0.ɵɵadvance(5);
        i0.ɵɵtextInterpolate(ctx.date.format("dddd"));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("axEventTemplate", ctx.axEventTemplate)("axEventFormatter", ctx.axEventFormatter)("axDragStep", ctx.axDragStep)("axEventToolbar", ctx.axEventToolbar)("axStartDate", ctx.axStartDate);
    } }, styles: [""], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AxiomSchedulerDayViewComponent, [{
        type: Component,
        args: [{
                selector: '[ax-scheduler-day-view]',
                templateUrl: './axiom-scheduler-day-view.component.html',
                styleUrls: ['./axiom-scheduler-day-view.component.scss'],
                encapsulation: ViewEncapsulation.None,
                host: {
                    'class': 'ax-scheduler__day-view'
                }
            }]
    }], function () { return [{ type: i0.Injector }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXhpb20tc2NoZWR1bGVyLWRheS12aWV3LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2F4aW9tLXNjaGVkdWxlci9zcmMvbGliL2F4aW9tLXNjaGVkdWxlci1kYXktdmlldy9heGlvbS1zY2hlZHVsZXItZGF5LXZpZXcuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYXhpb20tc2NoZWR1bGVyL3NyYy9saWIvYXhpb20tc2NoZWR1bGVyLWRheS12aWV3L2F4aW9tLXNjaGVkdWxlci1kYXktdmlldy5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLGlCQUFpQixFQUFZLE1BQU0sZUFBZSxDQUFDO0FBQy9FLE9BQU8sS0FBSyxRQUFRLE1BQU0sUUFBUSxDQUFDO0FBQ25DLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLGdEQUFnRCxDQUFDOzs7O0FBRDNELE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQztBQUc1RCxNQUFNLE9BQU8sa0JBQWtCO0lBRzdCLFlBQVksS0FBc0I7UUFDaEMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDaEQsQ0FBQztDQUNGO0FBV0QsTUFBTSxPQUFPLDhCQUErQixTQUFRLDZCQUE2QjtJQUUvRSxZQUFZLFFBQWtCO1FBQzVCLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNsQixDQUFDO0lBRU0sUUFBUTtRQUNiLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNqQixDQUFDOzs0R0FSVSw4QkFBOEI7bUVBQTlCLDhCQUE4QjtRQ3RCM0MsOEJBQ0U7UUFBQSxzQkFFTTtRQUNOLDJCQUNFO1FBQUEsMkJBQ0U7UUFBQSwrQkFDRTtRQUFBLFlBQ0E7UUFBQSwrQkFDRTtRQUFBLHlCQUFHO1FBQUEsa0JBQUU7UUFBQSxpQkFBSTtRQUNULHlCQUFHO1FBQUEsYUFBeUI7UUFBQSxpQkFBSTtRQUNsQyxpQkFBTztRQUNULGlCQUFPO1FBQ1QsaUJBQU07UUFDUixpQkFBTTtRQUNSLGlCQUFNO1FBQ04sMEJBU007O1FBbkI0QixlQUFtRDtRQUFuRCx3RkFBbUQ7UUFDN0UsZUFDQTtRQURBLHFEQUNBO1FBRUssZUFBeUI7UUFBekIsNkNBQXlCO1FBT3RDLGVBQXFDO1FBQXJDLHFEQUFxQywwQ0FBQSw4QkFBQSxzQ0FBQSxnQ0FBQTs7a0RES3hCLDhCQUE4QjtjQVQxQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtnQkFDbkMsV0FBVyxFQUFFLDJDQUEyQztnQkFDeEQsU0FBUyxFQUFFLENBQUMsMkNBQTJDLENBQUM7Z0JBQ3hELGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxJQUFJLEVBQUU7b0JBQ0osT0FBTyxFQUFFLHdCQUF3QjtpQkFDbEM7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIG1vbWVudE5zIGZyb20gJ21vbWVudCc7IGNvbnN0IG1vbWVudCA9IG1vbWVudE5zO1xuaW1wb3J0IHsgQXhpb21TY2hlZHVsZXJDb21wb25lbnRDb21tb24gfSBmcm9tICcuLy4uL2F4aW9tLXNjaGVkdWxlci9heGlvbS1zY2hlZHVsZXIuY29tcG9uZW50JztcblxuZXhwb3J0IGNsYXNzIEF4aW9tU2NoZWR1bGVySG91ciB7XG4gIHB1YmxpYyBzdGFydDogbW9tZW50TnMuTW9tZW50O1xuICBwdWJsaWMgZW5kOiBtb21lbnROcy5Nb21lbnQ7XG4gIGNvbnN0cnVjdG9yKHN0YXJ0OiBtb21lbnROcy5Nb21lbnQpIHtcbiAgICB0aGlzLnN0YXJ0ID0gc3RhcnQ7XG4gICAgdGhpcy5lbmQgPSB0aGlzLnN0YXJ0LmNsb25lKCkuYWRkKCdob3VycycsIDEpO1xuICB9XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ1theC1zY2hlZHVsZXItZGF5LXZpZXddJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2F4aW9tLXNjaGVkdWxlci1kYXktdmlldy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2F4aW9tLXNjaGVkdWxlci1kYXktdmlldy5jb21wb25lbnQuc2NzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBob3N0OiB7XG4gICAgJ2NsYXNzJzogJ2F4LXNjaGVkdWxlcl9fZGF5LXZpZXcnXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgQXhpb21TY2hlZHVsZXJEYXlWaWV3Q29tcG9uZW50IGV4dGVuZHMgQXhpb21TY2hlZHVsZXJDb21wb25lbnRDb21tb24gaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKGluamVjdG9yOiBJbmplY3Rvcikge1xuICAgIHN1cGVyKGluamVjdG9yKTtcbiAgfVxuXG4gIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnJlZnJlc2goKTtcbiAgfVxuXG59XG4iLCI8ZGl2IGNsYXNzPVwiYXgtc2NoZWR1bGVyX19kYXktdmlld19faGVhZGVyXCI+XG4gIDxkaXY+XG5cbiAgPC9kaXY+XG4gIDxkaXY+XG4gICAgPGRpdj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiaGVhZGVyX251bWJlclwiIFtuZ0NsYXNzXT1cInsgJ3RvZGF5JyA6IGRhdGUuaXNTYW1lKHRvZGF5LCdkYXlzJykgfVwiPlxuICAgICAgICB7eyBkYXRlLmZvcm1hdCgnRCcpIH19XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaGVhZGVyX2RheV90aXRsZVwiPlxuICAgICAgICAgIDxwPnRoPC9wPlxuICAgICAgICAgIDxwPnt7IGRhdGUuZm9ybWF0KCdkZGRkJykgfX08L3A+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj5cbjxkaXYgYXgtc2NoZWR1bGVyLWRheS1jb2x1bW5cbltheEV2ZW50VGVtcGxhdGVdID0gXCJheEV2ZW50VGVtcGxhdGVcIlxuW2F4RXZlbnRGb3JtYXR0ZXJdID0gXCJheEV2ZW50Rm9ybWF0dGVyXCJcbltheERyYWdTdGVwXT1cImF4RHJhZ1N0ZXBcIlxuW2F4RXZlbnRUb29sYmFyXT1cImF4RXZlbnRUb29sYmFyXCJcbltheFN0YXJ0RGF0ZV09XCJheFN0YXJ0RGF0ZVwiPlxuXG4gICAgXG5cbjwvZGl2PlxuIl19