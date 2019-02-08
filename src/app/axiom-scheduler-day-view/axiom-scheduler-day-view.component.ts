import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import * as moment from 'moment';
import { AxiomSchedulerComponentCommon, AxiomSchedulerEvent } from './../axiom-scheduler/axiom-scheduler.component';

export class AxiomSchedulerHour {
  start: moment.Moment;
  end: moment.Moment;
  constructor(start: moment.Moment) {
    this.start = start;
    this.end = this.start.clone().add('hours', 1);
  }
}

@Component({
  selector: '[ax-scheduler-day-view]',
  templateUrl: './axiom-scheduler-day-view.component.html',
  styleUrls: ['./axiom-scheduler-day-view.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    'class': 'ax-scheduler__day-view'
  }
})
export class AxiomSchedulerDayViewComponent extends AxiomSchedulerComponentCommon implements OnInit {

  public date: moment.Moment;
  public hours: AxiomSchedulerHour[];
  public dayEvents: AxiomSchedulerEvent[];

  edge = {
    top: true,
    bottom: true,
    left: true,
    right: true
  };

  constructor() {
    super();
  }

  ngOnInit() {
    this.date = moment(this.axStartDate) || moment(Date.now());
    this.axDragStep = this.axDragStep || 15;
    this.setHours();
    this.checkDayEvents();
  }

  checkEdge(event) {
    this.edge = event;
  }

  private setHours(): void {
    this.hours = [];
    for (let hour = 0; hour <= 23; hour++) {
      this.hours.push(new AxiomSchedulerHour(this.date.clone().startOf('day').add(hour, 'hours')));
    }
  }

  private checkDayEvents(): void {
    this.dayEvents = [];
    this.axEvents.forEach(ev => {
      if(moment(ev.from).isSameOrAfter(this.date.startOf('day')) && moment(ev.to).isSameOrBefore(this.date.endOf('day'))){
        this.dayEvents.push(ev);
      }
    });
  }

}
