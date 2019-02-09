import { Component, OnInit, ViewEncapsulation, ElementRef, Input } from '@angular/core';
import * as moment from 'moment';
import { AxiomSchedulerComponentCommon, AxiomSchedulerEvent } from './../axiom-scheduler/axiom-scheduler.component';
import { AxiomSchedulerHour } from '../axiom-scheduler-day-view/axiom-scheduler-day-view.component';

@Component({
  selector: '[ax-scheduler-day-column]',
  templateUrl: './axiom-scheduler-day-column.component.html',
  styleUrls: ['./axiom-scheduler-day-column.component.scss'],
  encapsulation : ViewEncapsulation.None,
  host:{
    'class' : 'ax-scheduler__day-view__body',
    '[class.hour-none]': '!hourColumn'
  }
})
export class AxiomSchedulerDayColumnComponent extends AxiomSchedulerComponentCommon implements OnInit {

  @Input() hourColumn : boolean = true;
  @Input() bounds : any;
  public dayEvents: AxiomSchedulerEvent[];
  public date: moment.Moment;
  public hours: AxiomSchedulerHour[];
  
  edge = {
    top: true,
    bottom: true,
    left: true,
    right: true
  };

  constructor(public _element : ElementRef) { 
    super();
    this.bounds  = this._element.nativeElement;
  }

  ngOnInit() {
    this.date = moment(this.axStartDate) || moment(Date.now());
    this.checkDayEvents();
    this.setHours();
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
