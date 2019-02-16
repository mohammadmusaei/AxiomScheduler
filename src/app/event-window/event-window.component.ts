import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AxiomSchedulerEvent } from 'axiom-scheduler';
import * as moment from 'moment';

@Component({
  selector: 'app-event-window',
  templateUrl: './event-window.component.html',
  styleUrls: ['./event-window.component.scss']
})
export class EventWindowComponent implements OnInit {

  public model: AxiomSchedulerEvent;
  public fromTime: string;
  public toTime: string;

  constructor(public modal: NgbActiveModal) {

  }

  ngOnInit() {
    if (this.model.from) {
      var from = moment(this.model.from);
      this.fromTime = from.format('HH:mm:ss');
    }
    if (this.model.to) {
      var to = moment(this.model.to);
      this.toTime = to.format('HH:mm:ss');
    }
  }

  save() {
    if (this.fromTime) {
      var fromSplitted = this.fromTime.split(':');
      var addTime = new Date(this.model.from);
      addTime.setHours(+fromSplitted[0]);
      addTime.setMinutes(+fromSplitted[1]);
      addTime.setSeconds(+fromSplitted[2]);
      this.model.from = addTime;
    }
    if (this.toTime) {
      var fromSplitted = this.toTime.split(':');
      var addTime = new Date(this.model.to);
      addTime.setHours(+fromSplitted[0]);
      addTime.setMinutes(+fromSplitted[1]);
      addTime.setSeconds(+fromSplitted[2]);
      this.model.to = addTime;
    }
    this.model.data.title = this.model.title;
    this.modal.close(this.model);
  }

}
