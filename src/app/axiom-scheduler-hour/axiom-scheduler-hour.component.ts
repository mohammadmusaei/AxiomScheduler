import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';
import { AxiomSchedulerEvent } from '../axiom-scheduler/axiom-scheduler.component';
import { AxiomSchedulerHour } from '../axiom-scheduler-day-view/axiom-scheduler-day-view.component';

@Component({
  selector: '[ax-scheduler-hour]',
  templateUrl: './axiom-scheduler-hour.component.html',
  styleUrls: ['./axiom-scheduler-hour.component.scss'],
  host:{
    'class' : 'ax-scheduler-hour'
  }
})
export class AxiomSchedulerHourComponent implements OnInit {

  @Input() hour : AxiomSchedulerHour;
  @Input() events : AxiomSchedulerEvent[];

  constructor() { }

  ngOnInit() {
  }

}
