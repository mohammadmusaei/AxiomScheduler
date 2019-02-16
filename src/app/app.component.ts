import { Component, OnInit } from '@angular/core';
import { SAMPLE_EVENTS } from './sample-events';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  events  = [...SAMPLE_EVENTS];
  events2 = [...SAMPLE_EVENTS];
  
  ngOnInit(): void {
    
  }

}
