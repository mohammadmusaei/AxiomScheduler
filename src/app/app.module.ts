import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularDraggableModule } from 'angular2-draggable';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AxiomSchedulerComponent } from './axiom-scheduler/axiom-scheduler.component';
import { AxiomSchedulerDayViewComponent } from './axiom-scheduler-day-view/axiom-scheduler-day-view.component';
import { AxiomSchedulerHourComponent } from './axiom-scheduler-hour/axiom-scheduler-hour.component';
import { AxiomSchedulerEventComponent } from './axiom-scheduler-event/axiom-scheduler-event.component';
import { DragTryDirective } from './drag-try.directive';

@NgModule({
  declarations: [
    AppComponent,
    AxiomSchedulerComponent,
    AxiomSchedulerDayViewComponent,
    AxiomSchedulerHourComponent,
    AxiomSchedulerEventComponent,
    DragTryDirective
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularDraggableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
