import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularDraggableModule } from 'angular2-draggable';

import { NotifierModule } from 'angular-notifier';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AxiomSchedulerComponent } from './axiom-scheduler/axiom-scheduler.component';
import { AxiomSchedulerDayViewComponent } from './axiom-scheduler-day-view/axiom-scheduler-day-view.component';
import { AxiomSchedulerHourComponent } from './axiom-scheduler-hour/axiom-scheduler-hour.component';
import { AxiomSchedulerEventComponent } from './axiom-scheduler-event/axiom-scheduler-event.component';
import { AxiomSchedulerWeekViewComponent } from './axiom-scheduler-week-view-component/axiom-scheduler-week-view-component.component';
import { AxiomSchedulerDayColumnComponent } from './axiom-scheduler-day-column/axiom-scheduler-day-column.component';
import { AxiomSchedulerMonthViewComponent } from './axiom-scheduler-month-view/axiom-scheduler-month-view.component';
import { AxiomSchedulerDayTileComponent } from './axiom-scheduler-day-tile/axiom-scheduler-day-tile.component';
import { AxiomSchedulerDropdownComponent } from './axiom-scheduler-dropdown/axiom-scheduler-dropdown.component';
import { AxiomSchedulerYearViewComponent } from './axiom-scheduler-year-view/axiom-scheduler-year-view.component';
import { AxiomSchedulerMonthTileComponent } from './axiom-scheduler-month-tile/axiom-scheduler-month-tile.component';
import { AxiomSchedulerMonthTileDayComponent } from './axiom-scheduler-month-tile-day/axiom-scheduler-month-tile-day.component';
import { HomeComponent } from './routes/home/home.component';
import { ThemeComponent } from './routes/theme/theme.component';
import { EventDescriptionComponent } from './routes/event-description/event-description.component';
import { AxiomSchedulerSidebarComponent } from './axiom-scheduler-sidebar/axiom-scheduler-sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
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
    HomeComponent,
    ThemeComponent,
    EventDescriptionComponent,
    AxiomSchedulerSidebarComponent
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularDraggableModule,
    BrowserAnimationsModule ,

    NotifierModule.withConfig({
      position: {
        horizontal: {
          position: 'middle',
          distance: 12
        }, 
        vertical: {
          position: 'bottom',
          distance: 12
        }
      },
      theme:'material'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
