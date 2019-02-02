import { AxiomSchedulerComponentCommon } from './../axiom-scheduler/axiom-scheduler.component';
import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { AxiomSchedulerEvent } from '../axiom-scheduler/axiom-scheduler.component';
import { AxiomSchedulerHour } from '../axiom-scheduler-day-view/axiom-scheduler-day-view.component';

@Component({
  selector: '[ax-scheduler-event]',
  templateUrl: './axiom-scheduler-event.component.html',
  styleUrls: ['./axiom-scheduler-event.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host:{
    'class' : 'ax-scheduler__event'
  }
})
export class AxiomSchedulerEventComponent extends AxiomSchedulerComponentCommon implements OnInit {

  @Input() event: AxiomSchedulerEvent;
  @Input() hour: AxiomSchedulerHour;
  ctx: any;

  constructor() {
    super();
  }

  ngOnInit() {
    this.ctx = { item: this.event };
  }

}
