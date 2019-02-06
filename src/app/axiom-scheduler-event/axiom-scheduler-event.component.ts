import { AxiomSchedulerComponentCommon } from './../axiom-scheduler/axiom-scheduler.component';
import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { AxiomSchedulerEvent } from '../axiom-scheduler/axiom-scheduler.component';
import { AxiomSchedulerHour } from '../axiom-scheduler-day-view/axiom-scheduler-day-view.component';
import * as moment  from 'moment';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: '[ax-scheduler-event]',
  templateUrl: './axiom-scheduler-event.component.html',
  styleUrls: ['./axiom-scheduler-event.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host:{
    'class' : 'ax-scheduler__event'
  },
  animations: [
    trigger('timeAnimate', [
      transition(':enter', [
        style({ transform: 'scale(0)' }),
        animate(`${150}ms ease-in`, style({ transform: 'scale(1)' }))
      ]),
      transition(':leave', [
        animate(`${100}ms ease-out`, style({ transform: 'scale(0)' }))
      ])
    ])
  ]
})
export class AxiomSchedulerEventComponent extends AxiomSchedulerComponentCommon implements OnInit {

  @Input() event: AxiomSchedulerEvent;
  @Input() hour: AxiomSchedulerHour;
  ctx: any;
  time : moment.Moment;

  constructor() {
    super();
  }

  ngOnInit() {
    
    //this.ctx = { item: this.event };
  }

  timeChange(e) : void{
    if(e && e.y >= 0){
      this.time = moment(Date.now()).startOf('day').add(e.y,'minute');
    }
  }
  timeChanged(timeChanged : any) : void{
    this.time  = null;
  }

}
