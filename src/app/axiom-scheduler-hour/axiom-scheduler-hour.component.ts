import { AxiomSchedulerComponentCommon } from './../axiom-scheduler/axiom-scheduler.component';
import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import * as moment from 'moment';
import { AxiomSchedulerEvent } from '../axiom-scheduler/axiom-scheduler.component';
import { AxiomSchedulerHour } from '../axiom-scheduler-day-view/axiom-scheduler-day-view.component';

@Component({
  selector: '[ax-scheduler-hour]',
  templateUrl: './axiom-scheduler-hour.component.html',
  styleUrls: ['./axiom-scheduler-hour.component.scss'],
  encapsulation : ViewEncapsulation.None,
  host:{
    'class' : 'ax-scheduler-hour'
  }
})
export class AxiomSchedulerHourComponent extends AxiomSchedulerComponentCommon implements OnInit {

  @Input() hour : AxiomSchedulerHour;
  inRnageEvents : AxiomSchedulerEvent[];
  minuteRows : { events : AxiomSchedulerEvent[] , minute : number }[];

  constructor() { 
    super();
  }

  ngOnInit() {
    this.minuteRows = Array(60).fill(0).map((x,i)=>{
      return { events : [] , minute : i };
    });
    this.setInRangeEvent();
  }

  private setInRangeEvent(){
    this.inRnageEvents = [];
    // this.inRnageEvents = this.axEvents.filter(event=>{
    //   var evt = moment(event.date);
    //   const inRange = evt.isSameOrAfter(this.hour.start) && evt.isSameOrBefore(this.hour.end);
    //   if(inRange){
    //     var index = this.minuteRows.findIndex(i=>i.minute === +event.date.getMinutes());
    //     if(index >= 0){
    //       this.minuteRows[index].events.push(event);
    //     }
    //   }
    //   return inRange;
    // });
  }

}
