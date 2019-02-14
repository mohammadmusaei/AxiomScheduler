
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

@NgModule({
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
})
export class AxiomSchedulerModule { }
