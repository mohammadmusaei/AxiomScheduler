import { AxiomSchedulerComponentCommon } from './../axiom-scheduler/axiom-scheduler.component';
import { Component, OnInit, ViewEncapsulation, Injector } from '@angular/core';
import * as moment from 'moment';

export class AxiomSchedulerYearViewMonthObject {

  public month: moment.Moment;
  public days: moment.Moment[];

  constructor(month: moment.Moment) {
    this.month = month.clone();
    this.setDays();
  }
  
  setDays(): void {
    const monthSize = 42;
    var startOfMonth = this.month.clone().startOf('month');
    var endOfMonth = this.month.clone().endOf('month');
    this.days = [];
    var day = startOfMonth.clone();
    while (day <= endOfMonth) {
      this.days.push(day);
      day = day.clone().add(1, 'd');
    }
    if (startOfMonth.clone().get('d') < 6) {
      day = startOfMonth.clone();
      while (day.get('d') < 6) {
        day = day.clone().add(-1, 'days');
        this.days.unshift(day);
      }
    }
    if (this.days.length < monthSize) {
      var size = (monthSize - this.days.length);
      for (let index = 1; index <= size; index++) {
        this.days.push(endOfMonth.clone().add(index, 'days'));
      }
    }
  }
}

@Component({
  selector: '[ax-scheduler-year-view]',
  templateUrl: './axiom-scheduler-year-view.component.html',
  styleUrls: ['./axiom-scheduler-year-view.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    'class': 'ax-scheduler__year-view'
  }
})
export class AxiomSchedulerYearViewComponent extends AxiomSchedulerComponentCommon implements OnInit {

  months: AxiomSchedulerYearViewMonthObject[];

  constructor(injector: Injector) {
    super(injector);
  }

  public ngOnInit(): void {
    this.refresh();
    this.refreshView();
  }

  public refreshView(): void {
    this.setMonths();
  }

  private setMonths(): void {
    var startMonth = this.date.clone().startOf('year');
    var endMonth = this.date.clone().endOf('year');
    this.months = [];
    var month = startMonth.clone();
    while (month <= endMonth) {
      this.months.push(new AxiomSchedulerYearViewMonthObject(month));
      month = month.clone().add(1, 'month');
    }
  }

}
