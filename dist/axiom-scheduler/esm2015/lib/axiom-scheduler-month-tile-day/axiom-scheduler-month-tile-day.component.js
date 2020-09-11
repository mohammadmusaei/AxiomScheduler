import { Component, ViewEncapsulation, Input } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import * as momentNs from 'moment';
import { AxiomSchedulerComponentCommon } from './../axiom-scheduler/axiom-scheduler.component';
import * as i0 from "@angular/core";
const _c0 = ["ax-scheduler-month-tile-day", ""];
const moment = momentNs;
export class AxiomSchedulerMonthTileDayComponent extends AxiomSchedulerComponentCommon {
    constructor(injector, _renderer, _element) {
        super(injector);
        this._renderer = _renderer;
        this._element = _element;
        this.events = [];
    }
    ngOnInit() {
        this.refresh();
        this.refreshView();
    }
    showEventsDialog() {
        if (this.events && this.events.length > 0) {
            this.sidebarService.open({ title: `${this.day.format('DD MMMM YYYY')}`, events: this.events });
        }
    }
    refreshView() {
        this.checkEvents();
        var text = `${this.events.length} event${this.events.length > 1 ? "s" : ""}, Click to show detail...`;
        this._renderer.setAttribute(this._element.nativeElement, 'title', text);
    }
    checkEvents() {
        this.events = [];
        this.service.axEvents.forEach(ev => {
            if (ev.to && ev.from) {
                if (moment(ev.from).isSameOrAfter(this.day.clone().startOf('day')) && moment(ev.to).isSameOrBefore(this.day.clone().endOf('day'))) {
                    this.events.push(ev);
                }
            }
            else if (ev.from && !ev.to) {
                if (moment(ev.from).isSameOrAfter(this.day.clone().startOf('day')) && moment(ev.from).isSameOrBefore(this.day.clone().endOf('day'))) {
                    this.events.push(ev);
                }
            }
        });
    }
}
AxiomSchedulerMonthTileDayComponent.ɵfac = function AxiomSchedulerMonthTileDayComponent_Factory(t) { return new (t || AxiomSchedulerMonthTileDayComponent)(i0.ɵɵdirectiveInject(i0.Injector), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef)); };
AxiomSchedulerMonthTileDayComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AxiomSchedulerMonthTileDayComponent, selectors: [["", "ax-scheduler-month-tile-day", ""]], hostAttrs: [1, "ax-scheduler__year-view__month__day"], hostVars: 2, hostBindings: function AxiomSchedulerMonthTileDayComponent_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("click", function AxiomSchedulerMonthTileDayComponent_click_HostBindingHandler() { return ctx.showEventsDialog(); });
    } if (rf & 2) {
        i0.ɵɵclassProp("hasEvent", ctx.events.length > 0);
    } }, inputs: { day: "day" }, features: [i0.ɵɵInheritDefinitionFeature], attrs: _c0, decls: 1, vars: 1, template: function AxiomSchedulerMonthTileDayComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtext(0);
    } if (rf & 2) {
        i0.ɵɵtextInterpolate1("\n", ctx.day.format("DD"), "\n");
    } }, styles: [""], encapsulation: 2, data: { animation: [
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
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AxiomSchedulerMonthTileDayComponent, [{
        type: Component,
        args: [{
                selector: '[ax-scheduler-month-tile-day]',
                templateUrl: './axiom-scheduler-month-tile-day.component.html',
                styleUrls: ['./axiom-scheduler-month-tile-day.component.scss'],
                encapsulation: ViewEncapsulation.None,
                host: {
                    'class': 'ax-scheduler__year-view__month__day',
                    '[class.hasEvent]': 'events.length > 0',
                    '(click)': 'showEventsDialog()'
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
    }], function () { return [{ type: i0.Injector }, { type: i0.Renderer2 }, { type: i0.ElementRef }]; }, { day: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXhpb20tc2NoZWR1bGVyLW1vbnRoLXRpbGUtZGF5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2F4aW9tLXNjaGVkdWxlci9zcmMvbGliL2F4aW9tLXNjaGVkdWxlci1tb250aC10aWxlLWRheS9heGlvbS1zY2hlZHVsZXItbW9udGgtdGlsZS1kYXkuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYXhpb20tc2NoZWR1bGVyL3NyYy9saWIvYXhpb20tc2NoZWR1bGVyLW1vbnRoLXRpbGUtZGF5L2F4aW9tLXNjaGVkdWxlci1tb250aC10aWxlLWRheS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFvQixpQkFBaUIsRUFBRSxLQUFLLEVBQXlCLE1BQU0sZUFBZSxDQUFDO0FBQzdHLE9BQU8sRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUMxRSxPQUFPLEtBQUssUUFBUSxNQUFNLFFBQVEsQ0FBQztBQUVuQyxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQzs7O0FBRjNELE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQztBQTJCNUQsTUFBTSxPQUFPLG1DQUFvQyxTQUFRLDZCQUE2QjtJQU1wRixZQUFZLFFBQWtCLEVBQVUsU0FBb0IsRUFBVSxRQUFvQjtRQUN4RixLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7UUFEc0IsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUFVLGFBQVEsR0FBUixRQUFRLENBQVk7UUFGbkYsV0FBTSxHQUEwQixFQUFFLENBQUM7SUFJMUMsQ0FBQztJQUVNLFFBQVE7UUFDYixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDZixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVNLGdCQUFnQjtRQUNyQixJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3pDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFHLEdBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFFLEVBQUUsRUFBRyxNQUFNLEVBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7U0FDckc7SUFDSCxDQUFDO0lBRU0sV0FBVztRQUNoQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkIsSUFBSSxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sU0FBUyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSwyQkFBMkIsQ0FBQztRQUN0RyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDMUUsQ0FBQztJQUVPLFdBQVc7UUFDakIsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxFQUFFO1lBQ2pDLElBQUcsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFDO2dCQUNsQixJQUFJLE1BQU0sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtvQkFDakksSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7aUJBQ3RCO2FBQ0Y7aUJBQ0ksSUFBRyxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBQztnQkFDeEIsSUFBSSxNQUFNLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7b0JBQ25JLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2lCQUN0QjthQUNGO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOztzSEF6Q1UsbUNBQW1DO3dFQUFuQyxtQ0FBbUM7Z0hBQW5DLHNCQUFrQjs7OztRQzVCL0IsWUFDQTs7UUFEQSx1REFDQTs0RERjYztZQUNWLE9BQU8sQ0FBQyxpQkFBaUIsRUFBRTtnQkFDekIsVUFBVSxDQUFDLFFBQVEsRUFBRTtvQkFDbkIsS0FBSyxDQUFDLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxDQUFDO29CQUNoQyxPQUFPLENBQUMsR0FBRyxHQUFHLFlBQVksRUFBRSxLQUFLLENBQUMsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLENBQUMsQ0FBQztvQkFDL0QsT0FBTyxDQUFDLEdBQUcsR0FBRyxZQUFZLEVBQUUsS0FBSyxDQUFDLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxDQUFDLENBQUM7aUJBQzlELENBQUM7Z0JBQ0YsVUFBVSxDQUFDLFFBQVEsRUFBRTtvQkFDbkIsT0FBTyxDQUFDLEdBQUcsRUFBRSxnQkFBZ0IsRUFBRSxLQUFLLENBQUMsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLENBQUMsQ0FBQztpQkFDakUsQ0FBQzthQUNILENBQUM7U0FDSDtrREFFVSxtQ0FBbUM7Y0F2Qi9DLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsK0JBQStCO2dCQUN6QyxXQUFXLEVBQUUsaURBQWlEO2dCQUM5RCxTQUFTLEVBQUUsQ0FBQyxpREFBaUQsQ0FBQztnQkFDOUQsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLElBQUksRUFBRTtvQkFDSixPQUFPLEVBQUUscUNBQXFDO29CQUM5QyxrQkFBa0IsRUFBRSxtQkFBbUI7b0JBQ3ZDLFNBQVMsRUFBRSxvQkFBb0I7aUJBQ2hDO2dCQUNELFVBQVUsRUFBRTtvQkFDVixPQUFPLENBQUMsaUJBQWlCLEVBQUU7d0JBQ3pCLFVBQVUsQ0FBQyxRQUFRLEVBQUU7NEJBQ25CLEtBQUssQ0FBQyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsQ0FBQzs0QkFDaEMsT0FBTyxDQUFDLEdBQUcsR0FBRyxZQUFZLEVBQUUsS0FBSyxDQUFDLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxDQUFDLENBQUM7NEJBQy9ELE9BQU8sQ0FBQyxHQUFHLEdBQUcsWUFBWSxFQUFFLEtBQUssQ0FBQyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsQ0FBQyxDQUFDO3lCQUM5RCxDQUFDO3dCQUNGLFVBQVUsQ0FBQyxRQUFRLEVBQUU7NEJBQ25CLE9BQU8sQ0FBQyxHQUFHLEVBQUUsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxDQUFDLENBQUM7eUJBQ2pFLENBQUM7cUJBQ0gsQ0FBQztpQkFDSDthQUNGOzRHQUdVLEdBQUc7a0JBQVgsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbmplY3RvciwgVmlld0VuY2Fwc3VsYXRpb24sIElucHV0LCBSZW5kZXJlcjIsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHRyaWdnZXIsIHRyYW5zaXRpb24sIHN0eWxlLCBhbmltYXRlIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgKiBhcyBtb21lbnROcyBmcm9tICdtb21lbnQnOyBjb25zdCBtb21lbnQgPSBtb21lbnROcztcbmltcG9ydCB7IEF4aW9tU2NoZWR1bGVyRXZlbnQgfSBmcm9tICcuLy4uL2F4aW9tLXNjaGVkdWxlci9heGlvbS1zY2hlZHVsZXIuY29tcG9uZW50JztcbmltcG9ydCB7IEF4aW9tU2NoZWR1bGVyQ29tcG9uZW50Q29tbW9uIH0gZnJvbSAnLi8uLi9heGlvbS1zY2hlZHVsZXIvYXhpb20tc2NoZWR1bGVyLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ1theC1zY2hlZHVsZXItbW9udGgtdGlsZS1kYXldJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2F4aW9tLXNjaGVkdWxlci1tb250aC10aWxlLWRheS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2F4aW9tLXNjaGVkdWxlci1tb250aC10aWxlLWRheS5jb21wb25lbnQuc2NzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBob3N0OiB7XG4gICAgJ2NsYXNzJzogJ2F4LXNjaGVkdWxlcl9feWVhci12aWV3X19tb250aF9fZGF5JyxcbiAgICAnW2NsYXNzLmhhc0V2ZW50XSc6ICdldmVudHMubGVuZ3RoID4gMCcsXG4gICAgJyhjbGljayknOiAnc2hvd0V2ZW50c0RpYWxvZygpJ1xuICB9LFxuICBhbmltYXRpb25zOiBbXG4gICAgdHJpZ2dlcignZGlhbG9nQW5pbWF0aW9uJywgW1xuICAgICAgdHJhbnNpdGlvbignOmVudGVyJywgW1xuICAgICAgICBzdHlsZSh7IHRyYW5zZm9ybTogJ3NjYWxlKDApJyB9KSxcbiAgICAgICAgYW5pbWF0ZShgJHsxOTB9bXMgZWFzZS1pbmAsIHN0eWxlKHsgdHJhbnNmb3JtOiAnc2NhbGUoMS4xKScgfSkpLFxuICAgICAgICBhbmltYXRlKGAkezEwMH1tcyBlYXNlLWluYCwgc3R5bGUoeyB0cmFuc2Zvcm06ICdzY2FsZSgxKScgfSkpXG4gICAgICBdKSxcbiAgICAgIHRyYW5zaXRpb24oJzpsZWF2ZScsIFtcbiAgICAgICAgYW5pbWF0ZShgJHs4MH1tcyBlYXNlLWluLW91dGAsIHN0eWxlKHsgdHJhbnNmb3JtOiAnc2NhbGUoMCknIH0pKVxuICAgICAgXSlcbiAgICBdKVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEF4aW9tU2NoZWR1bGVyTW9udGhUaWxlRGF5Q29tcG9uZW50IGV4dGVuZHMgQXhpb21TY2hlZHVsZXJDb21wb25lbnRDb21tb24gaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIGRheTogbW9tZW50TnMuTW9tZW50O1xuXG4gIHB1YmxpYyBldmVudHM6IEF4aW9tU2NoZWR1bGVyRXZlbnRbXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKGluamVjdG9yOiBJbmplY3RvciwgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMiwgcHJpdmF0ZSBfZWxlbWVudDogRWxlbWVudFJlZikge1xuICAgIHN1cGVyKGluamVjdG9yKTtcbiAgfVxuXG4gIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnJlZnJlc2goKTtcbiAgICB0aGlzLnJlZnJlc2hWaWV3KCk7XG4gIH1cblxuICBwdWJsaWMgc2hvd0V2ZW50c0RpYWxvZygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5ldmVudHMgJiYgdGhpcy5ldmVudHMubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5zaWRlYmFyU2VydmljZS5vcGVuKHsgdGl0bGUgOiBgJHsgdGhpcy5kYXkuZm9ybWF0KCdERCBNTU1NIFlZWVknKSB9YCAsIGV2ZW50cyA6IHRoaXMuZXZlbnRzIH0pO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyByZWZyZXNoVmlldygpOiB2b2lkIHtcbiAgICB0aGlzLmNoZWNrRXZlbnRzKCk7XG4gICAgdmFyIHRleHQgPSBgJHt0aGlzLmV2ZW50cy5sZW5ndGh9IGV2ZW50JHt0aGlzLmV2ZW50cy5sZW5ndGggPiAxID8gXCJzXCIgOiBcIlwifSwgQ2xpY2sgdG8gc2hvdyBkZXRhaWwuLi5gO1xuICAgIHRoaXMuX3JlbmRlcmVyLnNldEF0dHJpYnV0ZSh0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICd0aXRsZScsIHRleHQpO1xuICB9XG5cbiAgcHJpdmF0ZSBjaGVja0V2ZW50cygpOiB2b2lkIHtcbiAgICB0aGlzLmV2ZW50cyA9IFtdO1xuICAgIHRoaXMuc2VydmljZS5heEV2ZW50cy5mb3JFYWNoKGV2ID0+IHtcbiAgICAgIGlmKGV2LnRvICYmIGV2LmZyb20pe1xuICAgICAgICBpZiAobW9tZW50KGV2LmZyb20pLmlzU2FtZU9yQWZ0ZXIodGhpcy5kYXkuY2xvbmUoKS5zdGFydE9mKCdkYXknKSkgJiYgbW9tZW50KGV2LnRvKS5pc1NhbWVPckJlZm9yZSh0aGlzLmRheS5jbG9uZSgpLmVuZE9mKCdkYXknKSkpIHtcbiAgICAgICAgICB0aGlzLmV2ZW50cy5wdXNoKGV2KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSBpZihldi5mcm9tICYmICFldi50byl7XG4gICAgICAgIGlmIChtb21lbnQoZXYuZnJvbSkuaXNTYW1lT3JBZnRlcih0aGlzLmRheS5jbG9uZSgpLnN0YXJ0T2YoJ2RheScpKSAmJiBtb21lbnQoZXYuZnJvbSkuaXNTYW1lT3JCZWZvcmUodGhpcy5kYXkuY2xvbmUoKS5lbmRPZignZGF5JykpKSB7XG4gICAgICAgICAgdGhpcy5ldmVudHMucHVzaChldik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG59XG5cbiIsIlxue3sgZGF5LmZvcm1hdCgnREQnKSB9fVxuIl19