import { AxiomSchedulerEvent } from './../axiom-scheduler/axiom-scheduler.component';
import { Component, OnInit, Injector, ViewEncapsulation, Input } from '@angular/core';
import { AxiomSchedulerComponentCommon } from '../axiom-scheduler/axiom-scheduler.component';
import * as moment from 'moment';

@Component({
  selector: '[ax-scheduler-month-tile-day]',
  templateUrl: './axiom-scheduler-month-tile-day.component.html',
  styleUrls: ['./axiom-scheduler-month-tile-day.component.scss'],
  encapsulation:ViewEncapsulation.None,
  host:{
    'class' : 'ax-scheduler__year-view__month__day',
    '[class.hasEvent]' : 'events.length > 0'
  }
})
export class AxiomSchedulerMonthTileDayComponent  extends AxiomSchedulerComponentCommon implements OnInit {

  @Input() day : moment.Moment;
  events : AxiomSchedulerEvent[] = [];

  constructor(injector : Injector) { 
    super(injector);
  }

  ngOnInit() {
    this.refresh();
    this.refreshView();
  }

  refreshView() : void{
    this.checkEvents();
  }

  private checkEvents() : void{
    this.events = [];
    this.axEvents.forEach(ev => {
      if(moment(ev.from).isSameOrAfter(this.day.clone().startOf('day')) && moment(ev.to).isSameOrBefore(this.day.clone().endOf('day'))){
        this.events.push(ev);
      }
    });
  }

}

