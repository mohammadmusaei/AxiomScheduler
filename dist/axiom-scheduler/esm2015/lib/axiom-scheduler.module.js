import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AngularDraggableModule } from 'angular2-draggable';
import { AxiomSchedulerComponent } from './axiom-scheduler/axiom-scheduler.component';
import { AxiomSchedulerDayViewComponent } from './axiom-scheduler-day-view/axiom-scheduler-day-view.component';
import { AxiomSchedulerHourComponent } from './axiom-scheduler-hour/axiom-scheduler-hour.component';
import { AxiomSchedulerEventComponent } from './axiom-scheduler-event/axiom-scheduler-event.component';
import { AxiomSchedulerDayColumnComponent } from './axiom-scheduler-day-column/axiom-scheduler-day-column.component';
import { AxiomSchedulerDayTileComponent } from './axiom-scheduler-day-tile/axiom-scheduler-day-tile.component';
import { AxiomSchedulerDropdownComponent } from './axiom-scheduler-dropdown/axiom-scheduler-dropdown.component';
import { AxiomSchedulerYearViewComponent } from './axiom-scheduler-year-view/axiom-scheduler-year-view.component';
import { AxiomSchedulerMonthTileComponent } from './axiom-scheduler-month-tile/axiom-scheduler-month-tile.component';
import { AxiomSchedulerMonthTileDayComponent } from './axiom-scheduler-month-tile-day/axiom-scheduler-month-tile-day.component';
import { AxiomSchedulerWeekViewComponent } from './axiom-scheduler-week-view-component/axiom-scheduler-week-view-component.component';
import { AxiomSchedulerMonthViewComponent } from './axiom-scheduler-month-view/axiom-scheduler-month-view.component';
import { AxiomSchedulerSidebarComponent } from './axiom-scheduler-sidebar/axiom-scheduler-sidebar.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
import * as i3 from "angular2-draggable";
export class AxiomSchedulerModule {
}
AxiomSchedulerModule.ɵmod = i0.ɵɵdefineNgModule({ type: AxiomSchedulerModule });
AxiomSchedulerModule.ɵinj = i0.ɵɵdefineInjector({ factory: function AxiomSchedulerModule_Factory(t) { return new (t || AxiomSchedulerModule)(); }, imports: [[
            CommonModule,
            FormsModule,
            AngularDraggableModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AxiomSchedulerModule, { declarations: [AxiomSchedulerComponent,
        AxiomSchedulerDayViewComponent,
        AxiomSchedulerHourComponent,
        AxiomSchedulerEventComponent,
        AxiomSchedulerWeekViewComponent,
        AxiomSchedulerDayColumnComponent,
        AxiomSchedulerMonthViewComponent,
        AxiomSchedulerDayTileComponent,
        AxiomSchedulerDropdownComponent,
        AxiomSchedulerYearViewComponent,
        AxiomSchedulerMonthTileComponent,
        AxiomSchedulerMonthTileDayComponent,
        AxiomSchedulerSidebarComponent], imports: [CommonModule,
        FormsModule,
        AngularDraggableModule], exports: [AxiomSchedulerComponent,
        AxiomSchedulerDayViewComponent,
        AxiomSchedulerHourComponent,
        AxiomSchedulerEventComponent,
        AxiomSchedulerWeekViewComponent,
        AxiomSchedulerDayColumnComponent,
        AxiomSchedulerMonthViewComponent,
        AxiomSchedulerDayTileComponent,
        AxiomSchedulerDropdownComponent,
        AxiomSchedulerYearViewComponent,
        AxiomSchedulerMonthTileComponent,
        AxiomSchedulerMonthTileDayComponent,
        AxiomSchedulerSidebarComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AxiomSchedulerModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    AxiomSchedulerComponent,
                    AxiomSchedulerDayViewComponent,
                    AxiomSchedulerHourComponent,
                    AxiomSchedulerEventComponent,
                    AxiomSchedulerWeekViewComponent,
                    AxiomSchedulerDayColumnComponent,
                    AxiomSchedulerMonthViewComponent,
                    AxiomSchedulerDayTileComponent,
                    AxiomSchedulerDropdownComponent,
                    AxiomSchedulerYearViewComponent,
                    AxiomSchedulerMonthTileComponent,
                    AxiomSchedulerMonthTileDayComponent,
                    AxiomSchedulerSidebarComponent
                ],
                imports: [
                    CommonModule,
                    FormsModule,
                    AngularDraggableModule
                ],
                exports: [
                    AxiomSchedulerComponent,
                    AxiomSchedulerDayViewComponent,
                    AxiomSchedulerHourComponent,
                    AxiomSchedulerEventComponent,
                    AxiomSchedulerWeekViewComponent,
                    AxiomSchedulerDayColumnComponent,
                    AxiomSchedulerMonthViewComponent,
                    AxiomSchedulerDayTileComponent,
                    AxiomSchedulerDropdownComponent,
                    AxiomSchedulerYearViewComponent,
                    AxiomSchedulerMonthTileComponent,
                    AxiomSchedulerMonthTileDayComponent,
                    AxiomSchedulerSidebarComponent
                ]
            }]
    }], null, null); })();
i0.ɵɵsetComponentScope(AxiomSchedulerComponent, [i1.NgClass, i1.NgComponentOutlet, i1.NgForOf, i1.NgIf, i1.NgTemplateOutlet, i1.NgStyle, i1.NgSwitch, i1.NgSwitchCase, i1.NgSwitchDefault, i1.NgPlural, i1.NgPluralCase, i2.ɵangular_packages_forms_forms_y, i2.NgSelectOption, i2.ɵangular_packages_forms_forms_x, i2.DefaultValueAccessor, i2.NumberValueAccessor, i2.RangeValueAccessor, i2.CheckboxControlValueAccessor, i2.SelectControlValueAccessor, i2.SelectMultipleControlValueAccessor, i2.RadioControlValueAccessor, i2.NgControlStatus, i2.NgControlStatusGroup, i2.RequiredValidator, i2.MinLengthValidator, i2.MaxLengthValidator, i2.PatternValidator, i2.CheckboxRequiredValidator, i2.EmailValidator, i2.NgModel, i2.NgModelGroup, i2.NgForm, i3.AngularDraggableDirective, i3.AngularResizableDirective, AxiomSchedulerComponent,
    AxiomSchedulerDayViewComponent,
    AxiomSchedulerHourComponent,
    AxiomSchedulerEventComponent,
    AxiomSchedulerWeekViewComponent,
    AxiomSchedulerDayColumnComponent,
    AxiomSchedulerMonthViewComponent,
    AxiomSchedulerDayTileComponent,
    AxiomSchedulerDropdownComponent,
    AxiomSchedulerYearViewComponent,
    AxiomSchedulerMonthTileComponent,
    AxiomSchedulerMonthTileDayComponent,
    AxiomSchedulerSidebarComponent], [i1.AsyncPipe, i1.UpperCasePipe, i1.LowerCasePipe, i1.JsonPipe, i1.SlicePipe, i1.DecimalPipe, i1.PercentPipe, i1.TitleCasePipe, i1.CurrencyPipe, i1.DatePipe, i1.I18nPluralPipe, i1.I18nSelectPipe, i1.KeyValuePipe]);
i0.ɵɵsetComponentScope(AxiomSchedulerDayViewComponent, [i1.NgClass, i1.NgComponentOutlet, i1.NgForOf, i1.NgIf, i1.NgTemplateOutlet, i1.NgStyle, i1.NgSwitch, i1.NgSwitchCase, i1.NgSwitchDefault, i1.NgPlural, i1.NgPluralCase, i2.ɵangular_packages_forms_forms_y, i2.NgSelectOption, i2.ɵangular_packages_forms_forms_x, i2.DefaultValueAccessor, i2.NumberValueAccessor, i2.RangeValueAccessor, i2.CheckboxControlValueAccessor, i2.SelectControlValueAccessor, i2.SelectMultipleControlValueAccessor, i2.RadioControlValueAccessor, i2.NgControlStatus, i2.NgControlStatusGroup, i2.RequiredValidator, i2.MinLengthValidator, i2.MaxLengthValidator, i2.PatternValidator, i2.CheckboxRequiredValidator, i2.EmailValidator, i2.NgModel, i2.NgModelGroup, i2.NgForm, i3.AngularDraggableDirective, i3.AngularResizableDirective, AxiomSchedulerComponent,
    AxiomSchedulerDayViewComponent,
    AxiomSchedulerHourComponent,
    AxiomSchedulerEventComponent,
    AxiomSchedulerWeekViewComponent,
    AxiomSchedulerDayColumnComponent,
    AxiomSchedulerMonthViewComponent,
    AxiomSchedulerDayTileComponent,
    AxiomSchedulerDropdownComponent,
    AxiomSchedulerYearViewComponent,
    AxiomSchedulerMonthTileComponent,
    AxiomSchedulerMonthTileDayComponent,
    AxiomSchedulerSidebarComponent], [i1.AsyncPipe, i1.UpperCasePipe, i1.LowerCasePipe, i1.JsonPipe, i1.SlicePipe, i1.DecimalPipe, i1.PercentPipe, i1.TitleCasePipe, i1.CurrencyPipe, i1.DatePipe, i1.I18nPluralPipe, i1.I18nSelectPipe, i1.KeyValuePipe]);
i0.ɵɵsetComponentScope(AxiomSchedulerYearViewComponent, [i1.NgClass, i1.NgComponentOutlet, i1.NgForOf, i1.NgIf, i1.NgTemplateOutlet, i1.NgStyle, i1.NgSwitch, i1.NgSwitchCase, i1.NgSwitchDefault, i1.NgPlural, i1.NgPluralCase, i2.ɵangular_packages_forms_forms_y, i2.NgSelectOption, i2.ɵangular_packages_forms_forms_x, i2.DefaultValueAccessor, i2.NumberValueAccessor, i2.RangeValueAccessor, i2.CheckboxControlValueAccessor, i2.SelectControlValueAccessor, i2.SelectMultipleControlValueAccessor, i2.RadioControlValueAccessor, i2.NgControlStatus, i2.NgControlStatusGroup, i2.RequiredValidator, i2.MinLengthValidator, i2.MaxLengthValidator, i2.PatternValidator, i2.CheckboxRequiredValidator, i2.EmailValidator, i2.NgModel, i2.NgModelGroup, i2.NgForm, i3.AngularDraggableDirective, i3.AngularResizableDirective, AxiomSchedulerComponent,
    AxiomSchedulerDayViewComponent,
    AxiomSchedulerHourComponent,
    AxiomSchedulerEventComponent,
    AxiomSchedulerWeekViewComponent,
    AxiomSchedulerDayColumnComponent,
    AxiomSchedulerMonthViewComponent,
    AxiomSchedulerDayTileComponent,
    AxiomSchedulerDropdownComponent,
    AxiomSchedulerYearViewComponent,
    AxiomSchedulerMonthTileComponent,
    AxiomSchedulerMonthTileDayComponent,
    AxiomSchedulerSidebarComponent], [i1.AsyncPipe, i1.UpperCasePipe, i1.LowerCasePipe, i1.JsonPipe, i1.SlicePipe, i1.DecimalPipe, i1.PercentPipe, i1.TitleCasePipe, i1.CurrencyPipe, i1.DatePipe, i1.I18nPluralPipe, i1.I18nSelectPipe, i1.KeyValuePipe]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXhpb20tc2NoZWR1bGVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL2F4aW9tLXNjaGVkdWxlci9zcmMvbGliL2F4aW9tLXNjaGVkdWxlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRTVELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLCtEQUErRCxDQUFDO0FBQy9HLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBQ3BHLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBQ3ZHLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLG1FQUFtRSxDQUFDO0FBQ3JILE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLCtEQUErRCxDQUFDO0FBQy9HLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLCtEQUErRCxDQUFDO0FBQ2hILE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLGlFQUFpRSxDQUFDO0FBQ2xILE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLG1FQUFtRSxDQUFDO0FBQ3JILE9BQU8sRUFBRSxtQ0FBbUMsRUFBRSxNQUFNLDJFQUEyRSxDQUFDO0FBQ2hJLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLHFGQUFxRixDQUFDO0FBQ3RJLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLG1FQUFtRSxDQUFDO0FBQ3JILE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLDZEQUE2RCxDQUFDOzs7OztBQXVDN0csTUFBTSxPQUFPLG9CQUFvQjs7d0RBQXBCLG9CQUFvQjt1SEFBcEIsb0JBQW9CLGtCQXJCdEI7WUFDUCxZQUFZO1lBQ1osV0FBVztZQUNYLHNCQUFzQjtTQUN2Qjt3RkFpQlUsb0JBQW9CLG1CQW5DN0IsdUJBQXVCO1FBQ3ZCLDhCQUE4QjtRQUM5QiwyQkFBMkI7UUFDM0IsNEJBQTRCO1FBQzVCLCtCQUErQjtRQUMvQixnQ0FBZ0M7UUFDaEMsZ0NBQWdDO1FBQ2hDLDhCQUE4QjtRQUM5QiwrQkFBK0I7UUFDL0IsK0JBQStCO1FBQy9CLGdDQUFnQztRQUNoQyxtQ0FBbUM7UUFDbkMsOEJBQThCLGFBRzlCLFlBQVk7UUFDWixXQUFXO1FBQ1gsc0JBQXNCLGFBR3RCLHVCQUF1QjtRQUN2Qiw4QkFBOEI7UUFDOUIsMkJBQTJCO1FBQzNCLDRCQUE0QjtRQUM1QiwrQkFBK0I7UUFDL0IsZ0NBQWdDO1FBQ2hDLGdDQUFnQztRQUNoQyw4QkFBOEI7UUFDOUIsK0JBQStCO1FBQy9CLCtCQUErQjtRQUMvQixnQ0FBZ0M7UUFDaEMsbUNBQW1DO1FBQ25DLDhCQUE4QjtrREFHckIsb0JBQW9CO2NBckNoQyxRQUFRO2VBQUM7Z0JBQ1IsWUFBWSxFQUFFO29CQUNaLHVCQUF1QjtvQkFDdkIsOEJBQThCO29CQUM5QiwyQkFBMkI7b0JBQzNCLDRCQUE0QjtvQkFDNUIsK0JBQStCO29CQUMvQixnQ0FBZ0M7b0JBQ2hDLGdDQUFnQztvQkFDaEMsOEJBQThCO29CQUM5QiwrQkFBK0I7b0JBQy9CLCtCQUErQjtvQkFDL0IsZ0NBQWdDO29CQUNoQyxtQ0FBbUM7b0JBQ25DLDhCQUE4QjtpQkFDL0I7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osV0FBVztvQkFDWCxzQkFBc0I7aUJBQ3ZCO2dCQUNELE9BQU8sRUFBRTtvQkFDUCx1QkFBdUI7b0JBQ3ZCLDhCQUE4QjtvQkFDOUIsMkJBQTJCO29CQUMzQiw0QkFBNEI7b0JBQzVCLCtCQUErQjtvQkFDL0IsZ0NBQWdDO29CQUNoQyxnQ0FBZ0M7b0JBQ2hDLDhCQUE4QjtvQkFDOUIsK0JBQStCO29CQUMvQiwrQkFBK0I7b0JBQy9CLGdDQUFnQztvQkFDaEMsbUNBQW1DO29CQUNuQyw4QkFBOEI7aUJBQy9CO2FBQ0Y7O3VCQWxDRyx1QkFBdUIsOHVCQUF2Qix1QkFBdUI7SUFDdkIsOEJBQThCO0lBQzlCLDJCQUEyQjtJQUMzQiw0QkFBNEI7SUFDNUIsK0JBQStCO0lBQy9CLGdDQUFnQztJQUNoQyxnQ0FBZ0M7SUFDaEMsOEJBQThCO0lBQzlCLCtCQUErQjtJQUMvQiwrQkFBK0I7SUFDL0IsZ0NBQWdDO0lBQ2hDLG1DQUFtQztJQUNuQyw4QkFBOEI7dUJBWDlCLDhCQUE4Qiw4dUJBRDlCLHVCQUF1QjtJQUN2Qiw4QkFBOEI7SUFDOUIsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1QiwrQkFBK0I7SUFDL0IsZ0NBQWdDO0lBQ2hDLGdDQUFnQztJQUNoQyw4QkFBOEI7SUFDOUIsK0JBQStCO0lBQy9CLCtCQUErQjtJQUMvQixnQ0FBZ0M7SUFDaEMsbUNBQW1DO0lBQ25DLDhCQUE4Qjt1QkFIOUIsK0JBQStCLDh1QkFUL0IsdUJBQXVCO0lBQ3ZCLDhCQUE4QjtJQUM5QiwyQkFBMkI7SUFDM0IsNEJBQTRCO0lBQzVCLCtCQUErQjtJQUMvQixnQ0FBZ0M7SUFDaEMsZ0NBQWdDO0lBQ2hDLDhCQUE4QjtJQUM5QiwrQkFBK0I7SUFDL0IsK0JBQStCO0lBQy9CLGdDQUFnQztJQUNoQyxtQ0FBbUM7SUFDbkMsOEJBQThCIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQW5ndWxhckRyYWdnYWJsZU1vZHVsZSB9IGZyb20gJ2FuZ3VsYXIyLWRyYWdnYWJsZSc7XG5cbmltcG9ydCB7IEF4aW9tU2NoZWR1bGVyQ29tcG9uZW50IH0gZnJvbSAnLi9heGlvbS1zY2hlZHVsZXIvYXhpb20tc2NoZWR1bGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBeGlvbVNjaGVkdWxlckRheVZpZXdDb21wb25lbnQgfSBmcm9tICcuL2F4aW9tLXNjaGVkdWxlci1kYXktdmlldy9heGlvbS1zY2hlZHVsZXItZGF5LXZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IEF4aW9tU2NoZWR1bGVySG91ckNvbXBvbmVudCB9IGZyb20gJy4vYXhpb20tc2NoZWR1bGVyLWhvdXIvYXhpb20tc2NoZWR1bGVyLWhvdXIuY29tcG9uZW50JztcbmltcG9ydCB7IEF4aW9tU2NoZWR1bGVyRXZlbnRDb21wb25lbnQgfSBmcm9tICcuL2F4aW9tLXNjaGVkdWxlci1ldmVudC9heGlvbS1zY2hlZHVsZXItZXZlbnQuY29tcG9uZW50JztcbmltcG9ydCB7IEF4aW9tU2NoZWR1bGVyRGF5Q29sdW1uQ29tcG9uZW50IH0gZnJvbSAnLi9heGlvbS1zY2hlZHVsZXItZGF5LWNvbHVtbi9heGlvbS1zY2hlZHVsZXItZGF5LWNvbHVtbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgQXhpb21TY2hlZHVsZXJEYXlUaWxlQ29tcG9uZW50IH0gZnJvbSAnLi9heGlvbS1zY2hlZHVsZXItZGF5LXRpbGUvYXhpb20tc2NoZWR1bGVyLWRheS10aWxlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBeGlvbVNjaGVkdWxlckRyb3Bkb3duQ29tcG9uZW50IH0gZnJvbSAnLi9heGlvbS1zY2hlZHVsZXItZHJvcGRvd24vYXhpb20tc2NoZWR1bGVyLWRyb3Bkb3duLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBeGlvbVNjaGVkdWxlclllYXJWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi9heGlvbS1zY2hlZHVsZXIteWVhci12aWV3L2F4aW9tLXNjaGVkdWxlci15ZWFyLXZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IEF4aW9tU2NoZWR1bGVyTW9udGhUaWxlQ29tcG9uZW50IH0gZnJvbSAnLi9heGlvbS1zY2hlZHVsZXItbW9udGgtdGlsZS9heGlvbS1zY2hlZHVsZXItbW9udGgtdGlsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQXhpb21TY2hlZHVsZXJNb250aFRpbGVEYXlDb21wb25lbnQgfSBmcm9tICcuL2F4aW9tLXNjaGVkdWxlci1tb250aC10aWxlLWRheS9heGlvbS1zY2hlZHVsZXItbW9udGgtdGlsZS1kYXkuY29tcG9uZW50JztcbmltcG9ydCB7IEF4aW9tU2NoZWR1bGVyV2Vla1ZpZXdDb21wb25lbnQgfSBmcm9tICcuL2F4aW9tLXNjaGVkdWxlci13ZWVrLXZpZXctY29tcG9uZW50L2F4aW9tLXNjaGVkdWxlci13ZWVrLXZpZXctY29tcG9uZW50LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBeGlvbVNjaGVkdWxlck1vbnRoVmlld0NvbXBvbmVudCB9IGZyb20gJy4vYXhpb20tc2NoZWR1bGVyLW1vbnRoLXZpZXcvYXhpb20tc2NoZWR1bGVyLW1vbnRoLXZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IEF4aW9tU2NoZWR1bGVyU2lkZWJhckNvbXBvbmVudCB9IGZyb20gJy4vYXhpb20tc2NoZWR1bGVyLXNpZGViYXIvYXhpb20tc2NoZWR1bGVyLXNpZGViYXIuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQXhpb21TY2hlZHVsZXJDb21wb25lbnQsXG4gICAgQXhpb21TY2hlZHVsZXJEYXlWaWV3Q29tcG9uZW50LFxuICAgIEF4aW9tU2NoZWR1bGVySG91ckNvbXBvbmVudCxcbiAgICBBeGlvbVNjaGVkdWxlckV2ZW50Q29tcG9uZW50LFxuICAgIEF4aW9tU2NoZWR1bGVyV2Vla1ZpZXdDb21wb25lbnQsXG4gICAgQXhpb21TY2hlZHVsZXJEYXlDb2x1bW5Db21wb25lbnQsXG4gICAgQXhpb21TY2hlZHVsZXJNb250aFZpZXdDb21wb25lbnQsXG4gICAgQXhpb21TY2hlZHVsZXJEYXlUaWxlQ29tcG9uZW50LFxuICAgIEF4aW9tU2NoZWR1bGVyRHJvcGRvd25Db21wb25lbnQsXG4gICAgQXhpb21TY2hlZHVsZXJZZWFyVmlld0NvbXBvbmVudCxcbiAgICBBeGlvbVNjaGVkdWxlck1vbnRoVGlsZUNvbXBvbmVudCxcbiAgICBBeGlvbVNjaGVkdWxlck1vbnRoVGlsZURheUNvbXBvbmVudCxcbiAgICBBeGlvbVNjaGVkdWxlclNpZGViYXJDb21wb25lbnRcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBBbmd1bGFyRHJhZ2dhYmxlTW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBBeGlvbVNjaGVkdWxlckNvbXBvbmVudCxcbiAgICBBeGlvbVNjaGVkdWxlckRheVZpZXdDb21wb25lbnQsXG4gICAgQXhpb21TY2hlZHVsZXJIb3VyQ29tcG9uZW50LFxuICAgIEF4aW9tU2NoZWR1bGVyRXZlbnRDb21wb25lbnQsXG4gICAgQXhpb21TY2hlZHVsZXJXZWVrVmlld0NvbXBvbmVudCxcbiAgICBBeGlvbVNjaGVkdWxlckRheUNvbHVtbkNvbXBvbmVudCxcbiAgICBBeGlvbVNjaGVkdWxlck1vbnRoVmlld0NvbXBvbmVudCxcbiAgICBBeGlvbVNjaGVkdWxlckRheVRpbGVDb21wb25lbnQsXG4gICAgQXhpb21TY2hlZHVsZXJEcm9wZG93bkNvbXBvbmVudCxcbiAgICBBeGlvbVNjaGVkdWxlclllYXJWaWV3Q29tcG9uZW50LFxuICAgIEF4aW9tU2NoZWR1bGVyTW9udGhUaWxlQ29tcG9uZW50LFxuICAgIEF4aW9tU2NoZWR1bGVyTW9udGhUaWxlRGF5Q29tcG9uZW50LFxuICAgIEF4aW9tU2NoZWR1bGVyU2lkZWJhckNvbXBvbmVudFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEF4aW9tU2NoZWR1bGVyTW9kdWxlIHsgfVxuIl19