import { Component, OnInit } from '@angular/core';
import { SAMPLE_EVENTS } from 'src/app/sample-events';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss']
})
export class ThemeComponent implements OnInit {

  events  = [...SAMPLE_EVENTS];
  events2  = [...SAMPLE_EVENTS];

  constructor() { }

  ngOnInit() {
  }

}
