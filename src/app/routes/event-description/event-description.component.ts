import { Component, OnInit } from '@angular/core';
import { SAMPLE_EVENTS } from 'src/app/sample-events';

@Component({
  selector: 'app-event-description',
  templateUrl: './event-description.component.html',
  styleUrls: ['./event-description.component.scss']
})
export class EventDescriptionComponent implements OnInit {

  events  = [...SAMPLE_EVENTS];

  constructor() { }

  ngOnInit() {
  }

}
