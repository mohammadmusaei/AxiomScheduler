import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AxiomSchedulerModule } from 'axiom-scheduler';

import { NotifierModule } from 'angular-notifier';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './routes/home/home.component';
import { ThemeComponent } from './routes/theme/theme.component';
import { EventDescriptionComponent } from './routes/event-description/event-description.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ThemeComponent,
    EventDescriptionComponent
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AxiomSchedulerModule,
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
