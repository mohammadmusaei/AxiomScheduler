import { Component, OnInit, ViewEncapsulation, Injector } from '@angular/core';
import * as momentNs from 'moment'; const moment = momentNs;
import { AxiomSchedulerComponentCommon } from './../axiom-scheduler/axiom-scheduler.component';

export class AxiomSchedulerHour {
  public start: momentNs.Moment;
  public end: momentNs.Moment;
  constructor(start: momentNs.Moment) {
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

  constructor(injector: Injector) {
    super(injector);
  }

  public ngOnInit(): void {
    this.refresh();
  }

}
