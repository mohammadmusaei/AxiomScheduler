import { Component, Input, ViewEncapsulation } from '@angular/core';
import { ReplaySubject, fromEvent } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { trigger, transition, style, animate } from '@angular/animations';
import * as i0 from "@angular/core";
import * as i1 from "./../services/axiom-scheduler-sidebar.service";
import * as i2 from "@angular/common";
import * as i3 from "../axiom-scheduler-event/axiom-scheduler-event.component";
const _c0 = ["ax-scheduler-sidebar", ""];
function AxiomSchedulerSidebarComponent_h6_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h6");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r0.data.title);
} }
function AxiomSchedulerSidebarComponent_ng_container_3_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 3);
} if (rf & 2) {
    const event_r3 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("@slideInOutRight", undefined)("event", event_r3)("monthMode", true)("axEventToolbar", ctx_r2.axEventToolbar)("axEventTemplate", ctx_r2.axEventTemplate);
} }
function AxiomSchedulerSidebarComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, AxiomSchedulerSidebarComponent_ng_container_3_div_1_Template, 1, 5, "div", 2);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r1.data.events);
} }
export class AxiomSchedulerSidebarComponent {
    constructor(_element, _sidebarService) {
        this._element = _element;
        this._sidebarService = _sidebarService;
        this.axEventToolbar = true;
        this.destroyed = new ReplaySubject(1);
    }
    ngOnInit() {
        this.subs = this._sidebarService.data.subscribe(data => {
            this.data = data;
            this.setEventObserver();
        });
    }
    ngOnDestroy() {
        this.destroyEventObserver();
        this.subs && this.subs.unsubscribe();
    }
    close() {
        this._sidebarService.close();
    }
    closeOnGlobalKeydown(event) {
        if (event.keyCode === 27) {
            this._sidebarService.close();
        }
    }
    setEventObserver() {
        this.destroyed = new ReplaySubject(1);
        fromEvent(document, 'keydown').pipe(takeUntil(this.destroyed)).subscribe((event) => this.closeOnGlobalKeydown(event));
    }
    destroyEventObserver() {
        if (this.destroyed) {
            this.destroyed.next(true);
            this.destroyed.complete();
        }
    }
}
AxiomSchedulerSidebarComponent.ɵfac = function AxiomSchedulerSidebarComponent_Factory(t) { return new (t || AxiomSchedulerSidebarComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.AxiomSchedulerSidebarService)); };
AxiomSchedulerSidebarComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AxiomSchedulerSidebarComponent, selectors: [["", "ax-scheduler-sidebar", ""]], hostAttrs: [1, "ax-scheduler__sidebar"], inputs: { axEventTemplate: "axEventTemplate", axEventToolbar: "axEventToolbar" }, attrs: _c0, decls: 4, vars: 2, consts: [[1, "ax-scheduler__close-button", 3, "click"], [4, "ngIf"], ["ax-scheduler-event", "", 3, "event", "monthMode", "axEventToolbar", "axEventTemplate", 4, "ngFor", "ngForOf"], ["ax-scheduler-event", "", 3, "event", "monthMode", "axEventToolbar", "axEventTemplate"]], template: function AxiomSchedulerSidebarComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "span", 0);
        i0.ɵɵlistener("click", function AxiomSchedulerSidebarComponent_Template_span_click_0_listener() { return ctx.close(); });
        i0.ɵɵtext(1, "\u00D7");
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(2, AxiomSchedulerSidebarComponent_h6_2_Template, 2, 1, "h6", 1);
        i0.ɵɵtemplate(3, AxiomSchedulerSidebarComponent_ng_container_3_Template, 2, 1, "ng-container", 1);
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.data);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.data);
    } }, directives: [i2.NgIf, i2.NgForOf, i3.AxiomSchedulerEventComponent], styles: [""], encapsulation: 2, data: { animation: [
            trigger('slideInOutRight', [
                transition(':enter', [
                    style({ transform: 'translateX(100%)' }),
                    animate(`${150}ms ease-in`, style({ transform: 'translateX(0%)' }))
                ]),
                transition(':leave', [
                    animate(`${240}ms ease-out`, style({ transform: 'translateX(100%)' }))
                ])
            ])
        ] } });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AxiomSchedulerSidebarComponent, [{
        type: Component,
        args: [{
                selector: '[ax-scheduler-sidebar]',
                templateUrl: './axiom-scheduler-sidebar.component.html',
                styleUrls: ['./axiom-scheduler-sidebar.component.scss'],
                encapsulation: ViewEncapsulation.None,
                host: {
                    'class': 'ax-scheduler__sidebar'
                },
                animations: [
                    trigger('slideInOutRight', [
                        transition(':enter', [
                            style({ transform: 'translateX(100%)' }),
                            animate(`${150}ms ease-in`, style({ transform: 'translateX(0%)' }))
                        ]),
                        transition(':leave', [
                            animate(`${240}ms ease-out`, style({ transform: 'translateX(100%)' }))
                        ])
                    ])
                ]
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i1.AxiomSchedulerSidebarService }]; }, { axEventTemplate: [{
            type: Input
        }], axEventToolbar: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXhpb20tc2NoZWR1bGVyLXNpZGViYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYXhpb20tc2NoZWR1bGVyL3NyYy9saWIvYXhpb20tc2NoZWR1bGVyLXNpZGViYXIvYXhpb20tc2NoZWR1bGVyLXNpZGViYXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYXhpb20tc2NoZWR1bGVyL3NyYy9saWIvYXhpb20tc2NoZWR1bGVyLXNpZGViYXIvYXhpb20tc2NoZWR1bGVyLXNpZGViYXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBaUMsS0FBSyxFQUFlLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hILE9BQU8sRUFBRSxhQUFhLEVBQUUsU0FBUyxFQUFnQixNQUFNLE1BQU0sQ0FBQztBQUM5RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7Ozs7O0lDRDFFLDBCQUFpQjtJQUFBLFlBQWdCO0lBQUEsaUJBQUs7OztJQUFyQixlQUFnQjtJQUFoQix1Q0FBZ0I7OztJQUk3Qix5QkFDbUc7Ozs7SUFEOUYsNENBQWtCLG1CQUFBLG1CQUFBLHlDQUFBLDJDQUFBOzs7SUFGM0IsNkJBRUk7SUFBQSw4RkFDNkY7SUFFakcsMEJBQWU7OztJQUhhLGVBQWlDO0lBQWpDLDRDQUFpQzs7QURvQjdELE1BQU0sT0FBTyw4QkFBOEI7SUFTekMsWUFBb0IsUUFBb0IsRUFBVSxlQUE2QztRQUEzRSxhQUFRLEdBQVIsUUFBUSxDQUFZO1FBQVUsb0JBQWUsR0FBZixlQUFlLENBQThCO1FBTnRGLG1CQUFjLEdBQVksSUFBSSxDQUFDO1FBRzlCLGNBQVMsR0FB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RSxnQkFBZ0IsRUFBRSxDQUFDLENBQUM7eUJBQ3RFLENBQUM7d0JBQ0YsVUFBVSxDQUFDLFFBQVEsRUFBRTs0QkFDakIsT0FBTyxDQUFDLEdBQUcsR0FBRyxhQUFhLEVBQUUsS0FBSyxDQUFDLEVBQUUsU0FBUyxFQUFFLGtCQUFrQixFQUFFLENBQUMsQ0FBQzt5QkFDekUsQ0FBQztxQkFDTCxDQUFDO2lCQUNEO2FBQ0Y7d0dBR1UsZUFBZTtrQkFBdkIsS0FBSztZQUNHLGNBQWM7a0JBQXRCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95LCBFbGVtZW50UmVmLCBJbnB1dCwgVGVtcGxhdGVSZWYsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZXBsYXlTdWJqZWN0LCBmcm9tRXZlbnQsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgdHJpZ2dlciwgdHJhbnNpdGlvbiwgc3R5bGUsIGFuaW1hdGUgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7IEF4aW9tU2NoZWR1bGVyU2lkZWJhclNlcnZpY2UsIEF4aW9tU2NoZWR1bGVyU2lkZWJhckRhdGEgfSBmcm9tICcuLy4uL3NlcnZpY2VzL2F4aW9tLXNjaGVkdWxlci1zaWRlYmFyLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdbYXgtc2NoZWR1bGVyLXNpZGViYXJdJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2F4aW9tLXNjaGVkdWxlci1zaWRlYmFyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYXhpb20tc2NoZWR1bGVyLXNpZGViYXIuY29tcG9uZW50LnNjc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgaG9zdDoge1xuICAgICdjbGFzcyc6ICdheC1zY2hlZHVsZXJfX3NpZGViYXInXG4gIH0sXG4gIGFuaW1hdGlvbnM6IFtcbiAgICB0cmlnZ2VyKCdzbGlkZUluT3V0UmlnaHQnLCBbXG4gICAgICB0cmFuc2l0aW9uKCc6ZW50ZXInLCBbXG4gICAgICAgICAgc3R5bGUoeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDEwMCUpJyB9KSxcbiAgICAgICAgICBhbmltYXRlKGAkezE1MH1tcyBlYXNlLWluYCwgc3R5bGUoeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDAlKScgfSkpXG4gICAgICBdKSxcbiAgICAgIHRyYW5zaXRpb24oJzpsZWF2ZScsIFtcbiAgICAgICAgICBhbmltYXRlKGAkezI0MH1tcyBlYXNlLW91dGAsIHN0eWxlKHsgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgxMDAlKScgfSkpXG4gICAgICBdKVxuICBdKVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEF4aW9tU2NoZWR1bGVyU2lkZWJhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICBASW5wdXQoKSBheEV2ZW50VGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gIEBJbnB1dCgpIGF4RXZlbnRUb29sYmFyOiBib29sZWFuID0gdHJ1ZTtcbiAgcHVibGljIGRhdGE6IEF4aW9tU2NoZWR1bGVyU2lkZWJhckRhdGE7XG5cbiAgcHJvdGVjdGVkIGRlc3Ryb3llZDogUmVwbGF5U3ViamVjdDxib29sZWFuPiA9IG5ldyBSZXBsYXlTdWJqZWN0PGJvb2xlYW4+KDEpO1xuICBwcml2YXRlIHN1YnM6IFN1YnNjcmlwdGlvbjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbGVtZW50OiBFbGVtZW50UmVmLCBwcml2YXRlIF9zaWRlYmFyU2VydmljZTogQXhpb21TY2hlZHVsZXJTaWRlYmFyU2VydmljZSkgeyB9XG5cbiAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc3VicyA9IHRoaXMuX3NpZGViYXJTZXJ2aWNlLmRhdGEuc3Vic2NyaWJlKGRhdGEgPT4ge1xuICAgICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICAgIHRoaXMuc2V0RXZlbnRPYnNlcnZlcigpO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveUV2ZW50T2JzZXJ2ZXIoKTtcbiAgICB0aGlzLnN1YnMgJiYgdGhpcy5zdWJzLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBwdWJsaWMgY2xvc2UoKTogdm9pZCB7XG4gICAgdGhpcy5fc2lkZWJhclNlcnZpY2UuY2xvc2UoKTtcbiAgfVxuXG4gIHByaXZhdGUgY2xvc2VPbkdsb2JhbEtleWRvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMjcpIHtcbiAgICAgIHRoaXMuX3NpZGViYXJTZXJ2aWNlLmNsb3NlKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZXRFdmVudE9ic2VydmVyKCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveWVkID0gbmV3IFJlcGxheVN1YmplY3Q8Ym9vbGVhbj4oMSk7XG4gICAgZnJvbUV2ZW50KGRvY3VtZW50LCAna2V5ZG93bicpLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveWVkKSkuc3Vic2NyaWJlKChldmVudDogS2V5Ym9hcmRFdmVudCkgPT4gdGhpcy5jbG9zZU9uR2xvYmFsS2V5ZG93bihldmVudCkpO1xuICB9XG5cbiAgcHJpdmF0ZSBkZXN0cm95RXZlbnRPYnNlcnZlcigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5kZXN0cm95ZWQpIHtcbiAgICAgIHRoaXMuZGVzdHJveWVkLm5leHQodHJ1ZSk7XG4gICAgICB0aGlzLmRlc3Ryb3llZC5jb21wbGV0ZSgpO1xuICAgIH1cbiAgfVxuXG59XG4iLCI8c3BhbiBjbGFzcz1cImF4LXNjaGVkdWxlcl9fY2xvc2UtYnV0dG9uXCIgKGNsaWNrKT1cImNsb3NlKClcIj7Dlzwvc3Bhbj5cblxuPGg2ICpuZ0lmPVwiZGF0YVwiPnt7IGRhdGEudGl0bGUgfX08L2g2PlxuXG48bmctY29udGFpbmVyICpuZ0lmPVwiZGF0YVwiPlxuXG4gICAgPGRpdiBbQHNsaWRlSW5PdXRSaWdodF0gKm5nRm9yPVwibGV0IGV2ZW50IG9mIGRhdGEuZXZlbnRzXCIgW2V2ZW50XT1cImV2ZW50XCIgW21vbnRoTW9kZV09XCJ0cnVlXCJcbiAgICAgICAgW2F4RXZlbnRUb29sYmFyXT1cImF4RXZlbnRUb29sYmFyXCIgW2F4RXZlbnRUZW1wbGF0ZV09XCJheEV2ZW50VGVtcGxhdGVcIiBheC1zY2hlZHVsZXItZXZlbnQ+PC9kaXY+XG5cbjwvbmctY29udGFpbmVyPiJdfQ==