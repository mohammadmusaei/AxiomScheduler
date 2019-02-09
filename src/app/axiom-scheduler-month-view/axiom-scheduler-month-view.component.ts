import { Component, OnInit, ViewEncapsulation, Injector } from '@angular/core';
import { AxiomSchedulerComponentCommon } from './../axiom-scheduler/axiom-scheduler.component';
import * as moment from 'moment';

@Component({
  selector: '[ax-scheduler-month-view]',
  templateUrl: './axiom-scheduler-month-view.component.html',
  styleUrls: ['./axiom-scheduler-month-view.component.scss'],
  encapsulation : ViewEncapsulation.None,
  host: {
    'class': 'ax-scheduler__month-view'
  }
})
export class AxiomSchedulerMonthViewComponent extends AxiomSchedulerComponentCommon implements OnInit {

  public days: moment.Moment[];

  constructor(injector : Injector) {
    super(injector);
  }

  ngOnInit() {
    this.refresh();
    this.refreshView();
  }

  refreshView() : void{
    this.setDays();
  }

  private setDays(): void {
    const monthSize = 35;
    var startOfMonth = this.date.clone().startOf('month');
    var endOfMonth = this.date.clone().endOf('month');
    this.days = [];
    var day = startOfMonth.clone();
    while (day <= endOfMonth) {
      this.days.push(day);
      day = day.clone().add(1, 'd');
    }
    if(startOfMonth.clone().get('d') < 6 ){
      day = startOfMonth.clone();
      while(day.get('d') < 6){
        day = day.clone().add(-1,'days');
        this.days.unshift(day);
      }
    }
    if (this.days.length < monthSize) {
      var size = (monthSize - this.days.length);
      for (let index = 1; index <= size; index++) {
        this.days.push(endOfMonth.clone().add(index,'days'));
      }
    }
  }

}
