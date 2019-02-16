
import { AxiomSchedulerAnimation, AxiomSchedulerEvent } from 'axiom-scheduler';

import { Component, OnInit, ViewChild } from '@angular/core';
import { SAMPLE_EVENTS } from 'src/app/sample-events';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EventWindowComponent } from 'src/app/event-window/event-window.component';
import { AxiomSchedulerComponent } from 'axiom-scheduler';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public events  = [...SAMPLE_EVENTS];
  public model : any = {};
  public themes = ['dark','light'];
  public animations = Object.values(AxiomSchedulerAnimation);
  @ViewChild(AxiomSchedulerComponent)  scheduler : AxiomSchedulerComponent;

  constructor(private _modalService: NgbModal) { }

  ngOnInit() {
    this.model.step = 5;
    this.model.toolbar = true;
    this.model.eventTemplate = true;
    this.model.theme = 'light';
    this.model.locale = true;
    this.model.animation = AxiomSchedulerAnimation.Default;
  }

  public editEvent($event : AxiomSchedulerEvent) : void{
    var instance = this._modalService.open(EventWindowComponent,{ size:'sm' });
    instance.componentInstance.model = {...$event};
    instance.result.then((model)=>{
      var index = this.events.findIndex(e=>e.data.id === $event.data.id);
      if(index > -1){
        this.events[index] = model;
        this.scheduler.refreshScheduler();
      }
    });
  }

  public removeEvent($event : AxiomSchedulerEvent) : void{
    var index = this.events.findIndex(e=>e._id === $event._id);
    if(index > -1){
      this.events.splice(index,1);
      this.scheduler.refreshScheduler();
    }
  }


}
