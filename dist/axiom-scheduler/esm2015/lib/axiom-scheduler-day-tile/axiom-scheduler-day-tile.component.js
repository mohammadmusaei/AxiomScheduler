import { Component, ViewEncapsulation, Input } from '@angular/core';
import * as momentNs from 'moment';
import { AxiomSchedulerComponentCommon } from './../axiom-scheduler/axiom-scheduler.component';
import { trigger, transition, style, animate } from '@angular/animations';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../axiom-scheduler-event/axiom-scheduler-event.component";
const _c0 = ["ax-scheduler-day-tile", ""];
function AxiomSchedulerDayTileComponent__svg_svg_0_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "svg", 7);
    i0.ɵɵlistener("click", function AxiomSchedulerDayTileComponent__svg_svg_0_Template__svg_svg_click_0_listener() { i0.ɵɵrestoreView(_r5); const ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.showEventsDialog(); });
    i0.ɵɵelement(1, "circle", 8);
    i0.ɵɵelement(2, "circle", 9);
    i0.ɵɵelement(3, "circle", 10);
    i0.ɵɵelementEnd();
} }
function AxiomSchedulerDayTileComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 11);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.day.format("ddd"), "\n");
} }
function AxiomSchedulerDayTileComponent_ng_container_6_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 13);
} if (rf & 2) {
    const event_r6 = i0.ɵɵnextContext().$implicit;
    const ctx_r8 = i0.ɵɵnextContext();
    i0.ɵɵproperty("event", event_r6)("monthMode", true)("axEventToolbar", ctx_r8.axEventToolbar)("axEventTemplate", ctx_r8.axEventTemplate);
} }
function AxiomSchedulerDayTileComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, AxiomSchedulerDayTileComponent_ng_container_6_div_1_Template, 1, 4, "div", 12);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const index_r7 = ctx.index;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", index_r7 < 2);
} }
function AxiomSchedulerDayTileComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 14);
    i0.ɵɵlistener("click", function AxiomSchedulerDayTileComponent_div_7_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r11); const ctx_r10 = i0.ɵɵnextContext(); return ctx_r10.showEventsDialog(); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r3.dayEvents.length - 2, " More ... ");
} }
const _c1 = function (a0, a1) { return { "today": a0, "in-month": a1 }; };
const moment = momentNs;
export class AxiomSchedulerDayTileComponent extends AxiomSchedulerComponentCommon {
    constructor(injector, _element) {
        super(injector);
        this._element = _element;
        this.inMonth = false;
    }
    ngOnInit() {
        this.refresh();
        this.refreshView();
    }
    refreshView() {
        this.inMonth = this.day.clone().isSameOrAfter(this.date.clone().startOf('months')) && this.day.clone().isSameOrBefore(this.date.clone().endOf('months'));
        this.checkDayEvents();
    }
    showEventsDialog() {
        if (this.dayEvents && this.dayEvents.length > 0) {
            this.sidebarService.open({ title: `${this.day.format('DD MMMM YYYY')}`, events: this.dayEvents });
        }
    }
    checkDayEvents() {
        this.dayEvents = [];
        this.service.axEvents.forEach(ev => {
            if (ev.from && ev.to) {
                if (moment(ev.from).isSameOrAfter(this.day.clone().startOf('day')) && moment(ev.to).isSameOrBefore(this.day.clone().endOf('day'))) {
                    this.dayEvents.push(ev);
                }
            }
            else if (ev.from && !ev.to) {
                if (moment(ev.from).isSameOrAfter(this.day.clone().startOf('day')) && moment(ev.from).isSameOrBefore(this.day.clone().endOf('day'))) {
                    this.dayEvents.push(ev);
                }
            }
        });
    }
}
AxiomSchedulerDayTileComponent.ɵfac = function AxiomSchedulerDayTileComponent_Factory(t) { return new (t || AxiomSchedulerDayTileComponent)(i0.ɵɵdirectiveInject(i0.Injector), i0.ɵɵdirectiveInject(i0.ElementRef)); };
AxiomSchedulerDayTileComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AxiomSchedulerDayTileComponent, selectors: [["", "ax-scheduler-day-tile", ""]], hostAttrs: [1, "ax-scheduler__month-view__day"], inputs: { day: "day", index: "index" }, features: [i0.ɵɵInheritDefinitionFeature], attrs: _c0, decls: 8, vars: 9, consts: [["title", "Click to show events", "class", "ax-scheduler__month-view__day_list", "enable-background", "new 0 0 24 24", "id", "Layer_1", "version", "1.0", "viewBox", "0 0 24 24", 0, "xml", "space", "preserve", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", 3, "click", 4, "ngIf"], [1, "ax-scheduler__month-view__day__number", 3, "ngClass"], ["class", "ax-scheduler__month-view__day__label", 4, "ngIf"], [1, "ax-scheduler__month-view__day__events"], [1, "ax-scheduler__month-view__day__events_container"], [4, "ngFor", "ngForOf"], ["class", "more-item", 3, "click", 4, "ngIf"], ["title", "Click to show events", "enable-background", "new 0 0 24 24", "id", "Layer_1", "version", "1.0", "viewBox", "0 0 24 24", 0, "xml", "space", "preserve", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", 1, "ax-scheduler__month-view__day_list", 3, "click"], ["cx", "12", "cy", "12", "r", "2"], ["cx", "12", "cy", "5", "r", "2"], ["cx", "12", "cy", "19", "r", "2"], [1, "ax-scheduler__month-view__day__label"], ["ax-scheduler-event", "", 3, "event", "monthMode", "axEventToolbar", "axEventTemplate", 4, "ngIf"], ["ax-scheduler-event", "", 3, "event", "monthMode", "axEventToolbar", "axEventTemplate"], [1, "more-item", 3, "click"]], template: function AxiomSchedulerDayTileComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, AxiomSchedulerDayTileComponent__svg_svg_0_Template, 4, 0, "svg", 0);
        i0.ɵɵelementStart(1, "span", 1);
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(3, AxiomSchedulerDayTileComponent_div_3_Template, 2, 1, "div", 2);
        i0.ɵɵelementStart(4, "div", 3);
        i0.ɵɵelementStart(5, "div", 4);
        i0.ɵɵtemplate(6, AxiomSchedulerDayTileComponent_ng_container_6_Template, 2, 1, "ng-container", 5);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(7, AxiomSchedulerDayTileComponent_div_7_Template, 2, 1, "div", 6);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.dayEvents && ctx.dayEvents.length > 0);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(6, _c1, ctx.day.isSame(ctx.today, "days"), ctx.inMonth));
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", ctx.day.format("DD"), "\n");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.index < 7);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngForOf", ctx.dayEvents);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.dayEvents.length > 2);
    } }, directives: [i1.NgIf, i1.NgClass, i1.NgForOf, i2.AxiomSchedulerEventComponent], styles: [""], encapsulation: 2, data: { animation: [
            trigger('dialogAnimation', [
                transition(':enter', [
                    style({ transform: 'scale(0)' }),
                    animate(`${190}ms ease-in`, style({ transform: 'scale(1.1)' })),
                    animate(`${100}ms ease-in`, style({ transform: 'scale(1)' }))
                ]),
                transition(':leave', [
                    animate(`${80}ms ease-in-out`, style({ transform: 'scale(0)' }))
                ])
            ])
        ] } });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AxiomSchedulerDayTileComponent, [{
        type: Component,
        args: [{
                selector: '[ax-scheduler-day-tile]',
                templateUrl: './axiom-scheduler-day-tile.component.html',
                styleUrls: ['./axiom-scheduler-day-tile.component.scss'],
                encapsulation: ViewEncapsulation.None,
                host: {
                    'class': 'ax-scheduler__month-view__day'
                },
                animations: [
                    trigger('dialogAnimation', [
                        transition(':enter', [
                            style({ transform: 'scale(0)' }),
                            animate(`${190}ms ease-in`, style({ transform: 'scale(1.1)' })),
                            animate(`${100}ms ease-in`, style({ transform: 'scale(1)' }))
                        ]),
                        transition(':leave', [
                            animate(`${80}ms ease-in-out`, style({ transform: 'scale(0)' }))
                        ])
                    ])
                ]
            }]
    }], function () { return [{ type: i0.Injector }, { type: i0.ElementRef }]; }, { day: [{
            type: Input
        }], index: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXhpb20tc2NoZWR1bGVyLWRheS10aWxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2F4aW9tLXNjaGVkdWxlci9zcmMvbGliL2F4aW9tLXNjaGVkdWxlci1kYXktdGlsZS9heGlvbS1zY2hlZHVsZXItZGF5LXRpbGUuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYXhpb20tc2NoZWR1bGVyL3NyYy9saWIvYXhpb20tc2NoZWR1bGVyLWRheS10aWxlL2F4aW9tLXNjaGVkdWxlci1kYXktdGlsZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLGlCQUFpQixFQUFFLEtBQUssRUFBd0IsTUFBTSxlQUFlLENBQUM7QUFDbEcsT0FBTyxLQUFLLFFBQVEsTUFBTSxRQUFRLENBQUM7QUFDbkMsT0FBTyxFQUFFLDZCQUE2QixFQUF1QixNQUFNLGdEQUFnRCxDQUFDO0FBQ3BILE9BQU8sRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7Ozs7OztJQ0YxRSxtQkFHSTtJQUhKLDhCQUdJO0lBSDJDLCtNQUE0QjtJQUd2RSw0QkFDQTtJQUFBLDRCQUNBO0lBQUEsNkJBQ0o7SUFBQSxpQkFBTTs7O0lBTU4sK0JBQ0k7SUFBQSxZQUNKO0lBQUEsaUJBQU07OztJQURGLGVBQ0o7SUFESSwwREFDSjs7O0lBTVksMEJBQ2lFOzs7O0lBRDFDLGdDQUFlLG1CQUFBLHlDQUFBLDJDQUFBOzs7SUFEMUMsNkJBQ0k7SUFBQSwrRkFDMkQ7SUFFL0QsMEJBQWU7OztJQUhOLGVBQWlCO0lBQWpCLG1DQUFpQjs7OztJQUs5QiwrQkFDSTtJQURnRCx3TUFBNEI7SUFDNUUsWUFDSjtJQUFBLGlCQUFNOzs7SUFERixlQUNKO0lBREkscUVBQ0o7OztBRDNCZ0MsTUFBTSxN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QyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsQ0FBQyxDQUFDOzRCQUMvRCxPQUFPLENBQUMsR0FBRyxHQUFHLFlBQVksRUFBRSxLQUFLLENBQUMsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLENBQUMsQ0FBQzt5QkFDOUQsQ0FBQzt3QkFDRixVQUFVLENBQUMsUUFBUSxFQUFFOzRCQUNuQixPQUFPLENBQUMsR0FBRyxFQUFFLGdCQUFnQixFQUFFLEtBQUssQ0FBQyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsQ0FBQyxDQUFDO3lCQUNqRSxDQUFDO3FCQUNILENBQUM7aUJBQ0g7YUFDRjtvRkFHVSxHQUFHO2tCQUFYLEtBQUs7WUFDRyxLQUFLO2tCQUFiLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb24sIElucHV0LCBFbGVtZW50UmVmLCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMgbW9tZW50TnMgZnJvbSAnbW9tZW50JzsgY29uc3QgbW9tZW50ID0gbW9tZW50TnM7XG5pbXBvcnQgeyBBeGlvbVNjaGVkdWxlckNvbXBvbmVudENvbW1vbiwgQXhpb21TY2hlZHVsZXJFdmVudCB9IGZyb20gJy4vLi4vYXhpb20tc2NoZWR1bGVyL2F4aW9tLXNjaGVkdWxlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgdHJpZ2dlciwgdHJhbnNpdGlvbiwgc3R5bGUsIGFuaW1hdGUgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnW2F4LXNjaGVkdWxlci1kYXktdGlsZV0nLFxuICB0ZW1wbGF0ZVVybDogJy4vYXhpb20tc2NoZWR1bGVyLWRheS10aWxlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYXhpb20tc2NoZWR1bGVyLWRheS10aWxlLmNvbXBvbmVudC5zY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGhvc3Q6IHtcbiAgICAnY2xhc3MnOiAnYXgtc2NoZWR1bGVyX19tb250aC12aWV3X19kYXknXG4gIH0sXG4gIGFuaW1hdGlvbnM6IFtcbiAgICB0cmlnZ2VyKCdkaWFsb2dBbmltYXRpb24nLCBbXG4gICAgICB0cmFuc2l0aW9uKCc6ZW50ZXInLCBbXG4gICAgICAgIHN0eWxlKHsgdHJhbnNmb3JtOiAnc2NhbGUoMCknIH0pLFxuICAgICAgICBhbmltYXRlKGAkezE5MH1tcyBlYXNlLWluYCwgc3R5bGUoeyB0cmFuc2Zvcm06ICdzY2FsZSgxLjEpJyB9KSksXG4gICAgICAgIGFuaW1hdGUoYCR7MTAwfW1zIGVhc2UtaW5gLCBzdHlsZSh7IHRyYW5zZm9ybTogJ3NjYWxlKDEpJyB9KSlcbiAgICAgIF0pLFxuICAgICAgdHJhbnNpdGlvbignOmxlYXZlJywgW1xuICAgICAgICBhbmltYXRlKGAkezgwfW1zIGVhc2UtaW4tb3V0YCwgc3R5bGUoeyB0cmFuc2Zvcm06ICdzY2FsZSgwKScgfSkpXG4gICAgICBdKVxuICAgIF0pXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQXhpb21TY2hlZHVsZXJEYXlUaWxlQ29tcG9uZW50IGV4dGVuZHMgQXhpb21TY2hlZHVsZXJDb21wb25lbnRDb21tb24gaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIGRheTogbW9tZW50TnMuTW9tZW50O1xuICBASW5wdXQoKSBpbmRleDogbnVtYmVyO1xuXG4gIHB1YmxpYyBpbk1vbnRoOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBkYXlFdmVudHM6IEF4aW9tU2NoZWR1bGVyRXZlbnRbXTtcblxuICBjb25zdHJ1Y3RvcihpbmplY3RvcjogSW5qZWN0b3IsIHByaXZhdGUgX2VsZW1lbnQ6IEVsZW1lbnRSZWYpIHtcbiAgICBzdXBlcihpbmplY3Rvcik7XG4gIH1cblxuICBwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5yZWZyZXNoKCk7XG4gICAgdGhpcy5yZWZyZXNoVmlldygpO1xuICB9XG5cbiAgcHVibGljIHJlZnJlc2hWaWV3KCk6IHZvaWQge1xuICAgIHRoaXMuaW5Nb250aCA9IHRoaXMuZGF5LmNsb25lKCkuaXNTYW1lT3JBZnRlcih0aGlzLmRhdGUuY2xvbmUoKS5zdGFydE9mKCdtb250aHMnKSkgJiYgdGhpcy5kYXkuY2xvbmUoKS5pc1NhbWVPckJlZm9yZSh0aGlzLmRhdGUuY2xvbmUoKS5lbmRPZignbW9udGhzJykpO1xuICAgIHRoaXMuY2hlY2tEYXlFdmVudHMoKTtcbiAgfVxuXG4gIHB1YmxpYyBzaG93RXZlbnRzRGlhbG9nKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmRheUV2ZW50cyAmJiB0aGlzLmRheUV2ZW50cy5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLnNpZGViYXJTZXJ2aWNlLm9wZW4oeyB0aXRsZSA6IGAkeyB0aGlzLmRheS5mb3JtYXQoJ0REIE1NTU0gWVlZWScpIH1gICwgZXZlbnRzIDogdGhpcy5kYXlFdmVudHMgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjaGVja0RheUV2ZW50cygpOiB2b2lkIHtcbiAgICB0aGlzLmRheUV2ZW50cyA9IFtdO1xuICAgIHRoaXMuc2VydmljZS5heEV2ZW50cy5mb3JFYWNoKGV2ID0+IHtcbiAgICAgIGlmKGV2LmZyb20gJiYgZXYudG8pe1xuICAgICAgICBpZiAobW9tZW50KGV2LmZyb20pLmlzU2FtZU9yQWZ0ZXIodGhpcy5kYXkuY2xvbmUoKS5zdGFydE9mKCdkYXknKSkgJiYgbW9tZW50KGV2LnRvKS5pc1NhbWVPckJlZm9yZSh0aGlzLmRheS5jbG9uZSgpLmVuZE9mKCdkYXknKSkpIHtcbiAgICAgICAgICB0aGlzLmRheUV2ZW50cy5wdXNoKGV2KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSBpZihldi5mcm9tICYmICFldi50byl7XG4gICAgICAgIGlmIChtb21lbnQoZXYuZnJvbSkuaXNTYW1lT3JBZnRlcih0aGlzLmRheS5jbG9uZSgpLnN0YXJ0T2YoJ2RheScpKSAmJiBtb21lbnQoZXYuZnJvbSkuaXNTYW1lT3JCZWZvcmUodGhpcy5kYXkuY2xvbmUoKS5lbmRPZignZGF5JykpKSB7XG4gICAgICAgICAgdGhpcy5kYXlFdmVudHMucHVzaChldik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG59XG4iLCJcbjxzdmcgKm5nSWY9XCJkYXlFdmVudHMgJiYgZGF5RXZlbnRzLmxlbmd0aCA+IDBcIiAoY2xpY2spPVwic2hvd0V2ZW50c0RpYWxvZygpXCIgdGl0bGU9XCJDbGljayB0byBzaG93IGV2ZW50c1wiIGNsYXNzPVwiYXgtc2NoZWR1bGVyX19tb250aC12aWV3X19kYXlfbGlzdFwiXG4gICAgZW5hYmxlLWJhY2tncm91bmQ9XCJuZXcgMCAwIDI0IDI0XCIgaWQ9XCJMYXllcl8xXCIgdmVyc2lvbj1cIjEuMFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB4bWw6c3BhY2U9XCJwcmVzZXJ2ZVwiXG4gICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiPlxuICAgIDxjaXJjbGUgY3g9XCIxMlwiIGN5PVwiMTJcIiByPVwiMlwiIC8+XG4gICAgPGNpcmNsZSBjeD1cIjEyXCIgY3k9XCI1XCIgcj1cIjJcIiAvPlxuICAgIDxjaXJjbGUgY3g9XCIxMlwiIGN5PVwiMTlcIiByPVwiMlwiIC8+XG48L3N2Zz5cblxuPHNwYW4gY2xhc3M9XCJheC1zY2hlZHVsZXJfX21vbnRoLXZpZXdfX2RheV9fbnVtYmVyXCJcbiAgICBbbmdDbGFzc109XCJ7ICd0b2RheScgOiBkYXkuaXNTYW1lKHRvZGF5LCdkYXlzJykgLCAnaW4tbW9udGgnIDogaW5Nb250aCB9XCI+XG4gICAge3sgZGF5LmZvcm1hdCgnREQnKSB9fVxuPC9zcGFuPlxuPGRpdiBjbGFzcz1cImF4LXNjaGVkdWxlcl9fbW9udGgtdmlld19fZGF5X19sYWJlbFwiICpuZ0lmPVwiaW5kZXggPCA3XCI+XG4gICAge3sgZGF5LmZvcm1hdCgnZGRkJykgfX1cbjwvZGl2PlxuXG5cbjxkaXYgY2xhc3M9XCJheC1zY2hlZHVsZXJfX21vbnRoLXZpZXdfX2RheV9fZXZlbnRzXCI+XG4gICAgPGRpdiBjbGFzcz1cImF4LXNjaGVkdWxlcl9fbW9udGgtdmlld19fZGF5X19ldmVudHNfY29udGFpbmVyXCI+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGV2ZW50IG9mIGRheUV2ZW50cztsZXQgaW5kZXg9aW5kZXhcIj5cbiAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJpbmRleCA8IDJcIiBbZXZlbnRdPVwiZXZlbnRcIiBbbW9udGhNb2RlXT1cInRydWVcIiBbYXhFdmVudFRvb2xiYXJdPVwiYXhFdmVudFRvb2xiYXJcIlxuICAgICAgICAgICAgICAgIFtheEV2ZW50VGVtcGxhdGVdPVwiYXhFdmVudFRlbXBsYXRlXCIgYXgtc2NoZWR1bGVyLWV2ZW50PjwvZGl2PlxuXG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJtb3JlLWl0ZW1cIiAqbmdJZj1cImRheUV2ZW50cy5sZW5ndGggPiAyXCIgKGNsaWNrKT1cInNob3dFdmVudHNEaWFsb2coKVwiPlxuICAgICAgICB7eyBkYXlFdmVudHMubGVuZ3RoIC0gMiB9fSBNb3JlIC4uLlxuICAgIDwvZGl2PlxuXG48L2Rpdj4iXX0=