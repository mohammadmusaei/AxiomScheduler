import { Component, OnInit } from '@angular/core';
import { SAMPLE_EVENTS } from 'src/app/sample-events';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  events  = [...SAMPLE_EVENTS];

  constructor() { }

  ngOnInit() {
  }

}
