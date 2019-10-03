import {Component, OnInit, Input, ViewEncapsulation, Injector} from '@angular/core';
import {AxiomSchedulerComponentCommon} from './../axiom-scheduler/axiom-scheduler.component';
import {AxiomSchedulerHour} from './../axiom-scheduler-day-view/axiom-scheduler-day-view.component';
import {AxiomSchedulerService} from "../services/axiom-scheduler.service";
import * as momentNs from 'moment';

const moment = momentNs;

@Component({
  selector: '[ax-scheduler-hour]',
  templateUrl: './axiom-scheduler-hour.component.html',
  styleUrls: ['./axiom-scheduler-hour.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    'class': 'ax-scheduler-hour'
  }
})
export class AxiomSchedulerHourComponent extends AxiomSchedulerComponentCommon implements OnInit {

  @Input() hour: AxiomSchedulerHour;

  public service: AxiomSchedulerService;

  maxHeight: number;

  constructor(injector: Injector) {
    super(injector);
  }

  public stepList = [];

  ngOnInit(): void {
    this.stepList = new Array(2).fill(0).map((value, index) => index);
    this.maxHeight = 100 / this.stepList.length;
    this.refreshView();
  }

  refreshView(): void {
    this.stepList = new Array(2).fill(0).map((value, index) => index);
    this.maxHeight = 100 / this.stepList.length;
  }

  clicked(number: number) {
    const minute = (60 / 2) * number;
    this.service.hourStepClicked(moment(this.hour.start).set({minute}));
  }

}
