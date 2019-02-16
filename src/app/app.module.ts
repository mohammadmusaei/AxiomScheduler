import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AxiomSchedulerModule } from 'axiom-scheduler';
import { NgbModule, NgbDateAdapter, NgbTimeAdapter } from '@ng-bootstrap/ng-bootstrap';
import { NotifierModule } from 'angular-notifier';
import { ColorPickerModule } from 'ngx-color-picker';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './routes/home/home.component';
import { ThemeComponent } from './routes/theme/theme.component';
import { EventDescriptionComponent } from './routes/event-description/event-description.component';
import { EventWindowComponent } from './event-window/event-window.component';
import { DateNativeAdapter } from './dateAdapter';
import { NgbTimeStringAdapter } from './timeAdapter';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ThemeComponent,
    EventDescriptionComponent,
    EventWindowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AxiomSchedulerModule,
    BrowserAnimationsModule,
    ColorPickerModule,
    NgbModule,
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
      theme: 'material'
    }),
  ],
  providers: [
    { provide: NgbDateAdapter, useClass: DateNativeAdapter },
    { provide: NgbTimeAdapter, useClass: NgbTimeStringAdapter }
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    EventWindowComponent
  ]
})
export class AppModule { }
