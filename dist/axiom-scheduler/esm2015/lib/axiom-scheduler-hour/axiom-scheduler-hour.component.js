import { Component, Input, ViewEncapsulation } from '@angular/core';
import { AxiomSchedulerComponentCommon } from './../axiom-scheduler/axiom-scheduler.component';
import * as i0 from "@angular/core";
const _c0 = ["ax-scheduler-hour", ""];
export class AxiomSchedulerHourComponent extends AxiomSchedulerComponentCommon {
    constructor(injector) {
        super(injector);
    }
    ngOnInit() {
        this.refreshView();
    }
    refreshView() {
        this.minuteRows = Array(60).fill(0).map((x, i) => {
            return { events: [], minute: i };
        });
        this.setInRangeEvent();
    }
    setInRangeEvent() {
        this.inRnageEvents = [];
    }
}
AxiomSchedulerHourComponent.ɵfac = function AxiomSchedulerHourComponent_Factory(t) { return new (t || AxiomSchedulerHourComponent)(i0.ɵɵdirectiveInject(i0.Injector)); };
AxiomSchedulerHourComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AxiomSchedulerHourComponent, selectors: [["", "ax-scheduler-hour", ""]], hostAttrs: [1, "ax-scheduler-hour"], inputs: { hour: "hour" }, features: [i0.ɵɵInheritDefinitionFeature], attrs: _c0, decls: 0, vars: 0, template: function AxiomSchedulerHourComponent_Template(rf, ctx) { }, styles: [".ax-scheduler__event__row{display:flex;margin:1px 0;padding:0}"], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AxiomSchedulerHourComponent, [{
        type: Component,
        args: [{
                selector: '[ax-scheduler-hour]',
                templateUrl: './axiom-scheduler-hour.component.html',
                styleUrls: ['./axiom-scheduler-hour.component.scss'],
                encapsulation: ViewEncapsulation.None,
                host: {
                    'class': 'ax-scheduler-hour'
                }
            }]
    }], function () { return [{ type: i0.Injector }]; }, { hour: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXhpb20tc2NoZWR1bGVyLWhvdXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYXhpb20tc2NoZWR1bGVyL3NyYy9saWIvYXhpb20tc2NoZWR1bGVyLWhvdXIvYXhpb20tc2NoZWR1bGVyLWhvdXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLGlCQUFpQixFQUFZLE1BQU0sZUFBZSxDQUFDO0FBQ3RGLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLGdEQUFnRCxDQUFDOzs7QUFhL0YsTUFBTSxPQUFPLDJCQUE0QixTQUFRLDZCQUE2QjtJQU81RSxZQUFZLFFBQWtCO1FBQzVCLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNsQixDQUFDO0lBRU0sUUFBUTtRQUNiLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRU0sV0FBVztRQUNoQixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQy9DLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQztRQUNuQyxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRU8sZUFBZTtRQUNyQixJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQztJQUMxQixDQUFDOztzR0F4QlUsMkJBQTJCO2dFQUEzQiwyQkFBMkI7a0RBQTNCLDJCQUEyQjtjQVR2QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IsV0FBVyxFQUFFLHVDQUF1QztnQkFDcEQsU0FBUyxFQUFFLENBQUMsdUNBQXVDLENBQUM7Z0JBQ3BELGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxJQUFJLEVBQUU7b0JBQ0osT0FBTyxFQUFFLG1CQUFtQjtpQkFDN0I7YUFDRjsyREFHVSxJQUFJO2tCQUFaLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIFZpZXdFbmNhcHN1bGF0aW9uLCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXhpb21TY2hlZHVsZXJDb21wb25lbnRDb21tb24gfSBmcm9tICcuLy4uL2F4aW9tLXNjaGVkdWxlci9heGlvbS1zY2hlZHVsZXIuY29tcG9uZW50JztcbmltcG9ydCB7IEF4aW9tU2NoZWR1bGVyRXZlbnQgfSBmcm9tICcuLy4uL2F4aW9tLXNjaGVkdWxlci9heGlvbS1zY2hlZHVsZXIuY29tcG9uZW50JztcbmltcG9ydCB7IEF4aW9tU2NoZWR1bGVySG91ciB9IGZyb20gJy4vLi4vYXhpb20tc2NoZWR1bGVyLWRheS12aWV3L2F4aW9tLXNjaGVkdWxlci1kYXktdmlldy5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdbYXgtc2NoZWR1bGVyLWhvdXJdJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2F4aW9tLXNjaGVkdWxlci1ob3VyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYXhpb20tc2NoZWR1bGVyLWhvdXIuY29tcG9uZW50LnNjc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgaG9zdDoge1xuICAgICdjbGFzcyc6ICdheC1zY2hlZHVsZXItaG91cidcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBBeGlvbVNjaGVkdWxlckhvdXJDb21wb25lbnQgZXh0ZW5kcyBBeGlvbVNjaGVkdWxlckNvbXBvbmVudENvbW1vbiBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgaG91cjogQXhpb21TY2hlZHVsZXJIb3VyO1xuXG4gIHB1YmxpYyBpblJuYWdlRXZlbnRzOiBBeGlvbVNjaGVkdWxlckV2ZW50W107XG4gIHB1YmxpYyBtaW51dGVSb3dzOiB7IGV2ZW50czogQXhpb21TY2hlZHVsZXJFdmVudFtdLCBtaW51dGU6IG51bWJlciB9W107XG5cbiAgY29uc3RydWN0b3IoaW5qZWN0b3I6IEluamVjdG9yKSB7XG4gICAgc3VwZXIoaW5qZWN0b3IpO1xuICB9XG5cbiAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMucmVmcmVzaFZpZXcoKTtcbiAgfVxuXG4gIHB1YmxpYyByZWZyZXNoVmlldygpOiB2b2lkIHtcbiAgICB0aGlzLm1pbnV0ZVJvd3MgPSBBcnJheSg2MCkuZmlsbCgwKS5tYXAoKHgsIGkpID0+IHtcbiAgICAgIHJldHVybiB7IGV2ZW50czogW10sIG1pbnV0ZTogaSB9O1xuICAgIH0pO1xuICAgIHRoaXMuc2V0SW5SYW5nZUV2ZW50KCk7XG4gIH1cblxuICBwcml2YXRlIHNldEluUmFuZ2VFdmVudCgpOiB2b2lkIHtcbiAgICB0aGlzLmluUm5hZ2VFdmVudHMgPSBbXTtcbiAgfVxuXG59XG4iXX0=