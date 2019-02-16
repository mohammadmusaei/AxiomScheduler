import { Component, OnInit, Injector, ViewChild } from '@angular/core';
import { RouteBaseClass } from '../route.base';
import { AxiomSchedulerComponent } from 'axiom-scheduler';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss']
})
export class ThemeComponent extends RouteBaseClass implements OnInit {

  @ViewChild('sch1') scheduler1: AxiomSchedulerComponent;
  @ViewChild('sch2') scheduler2: AxiomSchedulerComponent;

  constructor(injector:Injector) { 
    super(injector);
  }

  ngOnInit() {
  }

  refreshView() : void{
    this.scheduler1.refreshScheduler();
    this.scheduler2.refreshScheduler();
  }

}
