import { AxiomSchedulerYearViewMonthObject } from './../axiom-scheduler-year-view/axiom-scheduler-year-view.component';
import { Component, OnInit, ViewEncapsulation, Injector, Input } from '@angular/core';
import { AxiomSchedulerComponentCommon } from './../axiom-scheduler/axiom-scheduler.component';

@Component({
  selector: '[ax-scheduler-month-tile]',
  templateUrl: './axiom-scheduler-month-tile.component.html',
  styleUrls: ['./axiom-scheduler-month-tile.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    'class': 'ax-scheduler__year-view__month'
  }
})
export class AxiomSchedulerMonthTileComponent extends AxiomSchedulerComponentCommon implements OnInit {

  @Input() monthObject: AxiomSchedulerYearViewMonthObject;

  constructor(injector: Injector) {
    super(injector);
  }

  public ngOnInit(): void {
    this.refresh();
  }

  public refreshView(): void {
    this.monthObject.month = this.date.startOf('months');
    this.monthObject.setDays();
  }

}
