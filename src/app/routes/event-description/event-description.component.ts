import { Component, OnInit } from '@angular/core';
import { SAMPLE_EVENTS } from 'src/app/sample-events';
import { AxiomSchedulerEvent, AxiomSchedulerView } from 'src/app/axiom-scheduler/axiom-scheduler.component';

@Component({
  selector: 'app-event-description',
  templateUrl: './event-description.component.html',
  styleUrls: ['./event-description.component.scss']
})
export class EventDescriptionComponent implements OnInit {

  events  = [...SAMPLE_EVENTS];
  clickEvent : AxiomSchedulerEvent;
  changedEvent : AxiomSchedulerEvent;
  changedDate : Date;
  view : AxiomSchedulerView;
  step = 15;

  constructor() { }

  ngOnInit() {
  }

  eventClick($event : AxiomSchedulerEvent) : void{
    this.clickEvent = $event;
  }
  changeEvent($event : AxiomSchedulerEvent) : void{
    this.changedEvent = $event;
  }
  dateChange($event : Date) : void{
    this.changedDate = $event;
  }
  viewChange($event : AxiomSchedulerView) : void{
    this.view = $event;
  }

}
