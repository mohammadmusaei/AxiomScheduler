import { Component, OnInit, ViewEncapsulation, Input, TemplateRef } from '@angular/core';

export class AxiomSchedulerComponentCommon {
  @Input() axEvents : AxiomSchedulerEvent [] ;
  @Input() axStartDate : Date;
  @Input() axEventTemplate: TemplateRef<any>;
  @Input() axEventFormatter : (data : any,date? : Date) => string;
  @Input() axDragStep: number;
}

export class  AxiomSchedulerEvent{
  from : Date;
  to : Date;
  data : any;
  constructor(from : Date = null ,to : Date = null , data : any = null) {
    this.data = data;
    this.from = from;
    this.to = to;
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
