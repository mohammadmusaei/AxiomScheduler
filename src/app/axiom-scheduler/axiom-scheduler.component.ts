import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

export class AxiomSchedulerComponentCommon{
  @Input() events : AxiomSchedulerEvent [] ;
  @Input() startDate : Date;
}

export class  AxiomSchedulerEvent{
  date : Date;
  data : any;
  constructor(date : Date = null , data : any = null) {
    this.data = data;
    this.date = date;
  }
}

@Component({
  selector: 'ax-scheduler',
  templateUrl: './axiom-scheduler.component.html',
  styleUrls: ['./axiom-scheduler.component.scss'],
  encapsulation : ViewEncapsulation.None,
  host:{
    'class' : 'ax-scheduler'
  }
})
export class AxiomSchedulerComponent extends AxiomSchedulerComponentCommon implements OnInit {

  constructor() { 
    super();
  }

  ngOnInit() {

  }

}
