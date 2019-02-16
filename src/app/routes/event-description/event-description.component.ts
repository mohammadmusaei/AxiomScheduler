import { Component, OnInit } from '@angular/core';
import { SAMPLE_EVENTS } from 'src/app/sample-events';
import { AxiomSchedulerEvent, AxiomSchedulerView } from 'axiom-scheduler';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-event-description',
  templateUrl: './event-description.component.html',
  styleUrls: ['./event-description.component.scss']
})
export class EventDescriptionComponent implements OnInit {

  events = [...SAMPLE_EVENTS];
  clickEvent: AxiomSchedulerEvent;
  changedEvent: AxiomSchedulerEvent; 
  deleteClicked: AxiomSchedulerEvent;
  editClicked: AxiomSchedulerEvent;
  changedDate: Date;
  view: AxiomSchedulerView;
  step = 15;

  constructor(private readonly _notifier: NotifierService) { }

  ngOnInit() {
    
  }

  eventClick($event: AxiomSchedulerEvent): void {
    this.clickEvent = $event;
    this._notifier.notify('default', `${$event.data.title} clicked!`);
  }
  changeEvent($event: AxiomSchedulerEvent): void {
    this.changedEvent = $event;
    this._notifier.notify('default', `${$event.data.title} changed to ( ${$event.from.toDateString() + '-' + $event.to.toDateString()} )`);
  }
  deleteClick($event: AxiomSchedulerEvent): void {
    this.deleteClicked = $event;
    this._notifier.notify('default', `${$event.data.title} delete click!`);
  }
  editClick($event: AxiomSchedulerEvent): void {
    this.editClicked = $event;
    this._notifier.notify('default', `${$event.data.title} edit click!`);
  }
  dateChange($event: Date): void {
    this.changedDate = $event;
    this._notifier.notify('default', `Date changed to ${$event.toDateString()}`);
  }
  viewChange($event: AxiomSchedulerView): void {
    this.view = $event;
    this._notifier.notify('default', `View changed to "${$event}"`);
  }

}
