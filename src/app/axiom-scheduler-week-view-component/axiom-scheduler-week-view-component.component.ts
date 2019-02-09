import { Component, OnInit, ViewEncapsulation, Injector } from '@angular/core';
import * as moment from 'moment';
import { AxiomSchedulerComponentCommon } from '../axiom-scheduler/axiom-scheduler.component';
import { AxiomSchedulerHour } from '../axiom-scheduler-day-view/axiom-scheduler-day-view.component';

@Component({
  selector: '[ax-scheduler-week-view]',
  templateUrl: './axiom-scheduler-week-view-component.component.html',
  styleUrls: ['./axiom-scheduler-week-view-component.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    'class': 'ax-scheduler__week-view'
  }
})
export class AxiomSchedulerWeekViewComponent extends AxiomSchedulerComponentCommon implements OnInit {

  public days: moment.Moment[];
  public hours: AxiomSchedulerHour[];

  constructor(injector : Injector) {
    super(injector);
  }

  ngOnInit() {
    this.refresh();
    this.refreshView();
  }

  refreshView() : void{
    this.updateDays();
    this.setHours();
  }

  private updateDays(): void {
    var startOfWeek = this.date.clone().startOf('isoWeek');
    var endOfWeek = this.date.clone().endOf('isoWeek');
    this.days = [];
    var day = startOfWeek;
    while (day <= endOfWeek) {
      this.days.push(day);
      day = day.clone().add(1, 'd');
    }
  }

  private setHours(): void {
    this.hours = [];
    for (let hour = 0; hour <= 23; hour++) {
      this.hours.push(new AxiomSchedulerHour(this.date.clone().startOf('day').add(hour, 'hours')));
    }
  }

}
