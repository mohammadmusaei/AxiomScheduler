import { AxiomSchedulerAnimation } from 'axiom-scheduler';

import { Component, OnInit } from '@angular/core';
import { SAMPLE_EVENTS } from 'src/app/sample-events';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  events  = [...SAMPLE_EVENTS];
  model : any = {};
  themes = ['dark','light'];
  animations = Object.values(AxiomSchedulerAnimation);

  constructor() { }

  ngOnInit() {
    this.model.step = 5;
    this.model.toolbar = true;
    this.model.eventTemplate = true;
    this.model.theme = 'light';
    this.model.locale = true;
    this.model.animation = AxiomSchedulerAnimation.Default;
  }

}
