import { Component, OnInit, ViewEncapsulation, Injector } from '@angular/core';
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

  constructor(injector : Injector) {
    super(injector);
  }

  ngOnInit() {
    this.refresh();
    this.refreshView();
  }

  refreshView() : void{
    this.axDragStep = this.axDragStep || 15;
  }

}
