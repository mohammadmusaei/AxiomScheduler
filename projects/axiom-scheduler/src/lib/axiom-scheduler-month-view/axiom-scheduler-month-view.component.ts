import { Component, OnInit, ViewEncapsulation, Injector } from '@angular/core';
import { transition, style, animate, trigger } from '@angular/animations';
import * as momentNs from 'moment'; const moment = momentNs;
import { AxiomSchedulerComponentCommon } from './../axiom-scheduler/axiom-scheduler.component';

@Component({
  selector: '[ax-scheduler-month-view]',
  templateUrl: './axiom-scheduler-month-view.component.html',
  styleUrls: ['./axiom-scheduler-month-view.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    'class': 'ax-scheduler__month-view'
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
export class AxiomSchedulerMonthViewComponent extends AxiomSchedulerComponentCommon implements OnInit {

  public days: momentNs.Moment[];
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
    this.setDays();
  }

  private setDays(): void {
    const monthSize = 42;
    var startOfMonth = this.date.clone().startOf('month');
    var endOfMonth = this.date.clone().endOf('month');
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
