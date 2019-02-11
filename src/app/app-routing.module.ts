import { ThemeComponent } from './routes/theme/theme.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './routes/home/home.component';
import { EventDescriptionComponent } from './routes/event-description/event-description.component';

const routes: Routes = [
  { path : 'home' , component : HomeComponent },
  { path : 'themes' , component : ThemeComponent },
  { path : 'events' , component : EventDescriptionComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
