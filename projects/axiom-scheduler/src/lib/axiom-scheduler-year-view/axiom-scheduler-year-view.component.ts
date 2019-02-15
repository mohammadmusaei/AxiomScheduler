import { Component, OnInit, ViewEncapsulation, Injector } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import * as momentNs from 'moment'; const moment = momentNs;
import { AxiomSchedulerComponentCommon } from './../axiom-scheduler/axiom-scheduler.component';

export class AxiomSchedulerYearViewMonthObject {

  public month: momentNs.Moment;
  public days: momentNs.Moment[];

  constructor(month: momentNs.Moment) {
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
  },
  animations: [
    trigger('slideInOutRight', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate(`${120}ms ease-in-out`, style({ transform: 'translateX(0%)' }))
      ]),
      transition(':leave', [
        animate(`${100}ms ease-in-out`, style({ transform: 'translateX(100%)' }))
      ])
    ])
  ]
})
export class AxiomSchedulerYearViewComponent extends AxiomSchedulerComponentCommon implements OnInit {

  public months: AxiomSchedulerYearViewMonthObject[];
  public sidebar = false;

  constructor(injector: Injector) {
    super(injector);
  }

  public ngOnInit(): void {
    this.subscriptionGarbageCollection.push(this.sidebarService.toggle.subscribe(toggle => {
      this.sidebar = toggle;
    }));
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
