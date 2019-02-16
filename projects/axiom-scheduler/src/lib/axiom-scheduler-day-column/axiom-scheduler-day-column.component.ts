import { Component, OnInit, ViewEncapsulation, ElementRef, Input, Injector } from '@angular/core';
import * as momentNs from 'moment'; const moment = momentNs;
import { AxiomSchedulerComponentCommon, AxiomSchedulerEvent } from './../axiom-scheduler/axiom-scheduler.component';
import { AxiomSchedulerHour } from './../axiom-scheduler-day-view/axiom-scheduler-day-view.component';

@Component({
  selector: '[ax-scheduler-day-column]',
  templateUrl: './axiom-scheduler-day-column.component.html',
  styleUrls: ['./axiom-scheduler-day-column.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    'class': 'ax-scheduler__day-view__body',
    '[class.hour-none]': '!hourColumn'
  }
})
export class AxiomSchedulerDayColumnComponent extends AxiomSchedulerComponentCommon implements OnInit {

  @Input() hourColumn: boolean = true;
  @Input() bounds: any;

  public dayEvents: AxiomSchedulerEvent[];
  public hours: AxiomSchedulerHour[];

  public edge = {
    top: true,
    bottom: true,
    left: true,
    right: true
  };

  constructor(injector: Injector, public _element: ElementRef) {
    super(injector);
    this.bounds = this._element.nativeElement;
  }

  public ngOnInit(): void {
    this.refresh();
    this.refreshView();
  }

  public refreshView(): void {
    this.checkDayEvents();
    this.setHours();
  }

  public checkEdge(event): void {
    this.edge = event;
  }

  private setHours(): void {
    this.hours = [];
    for (let hour = 0; hour <= 23; hour++) {
      this.hours.push(new AxiomSchedulerHour(this.date.clone().startOf('day').add(hour, 'hours')));
    }
  }

  private checkDayEvents(): void {
    this.dayEvents = [];
    this.service.axEvents.forEach(ev => {
      if (ev.from && ev.to) {
        if (moment(ev.from).isSameOrAfter(this.date.clone().startOf('day')) && moment(ev.to).isSameOrBefore(this.date.clone().endOf('day'))) {
          this.dayEvents.push(ev);
        }
      }
      else if (ev.from && !ev.to) {
        if (moment(ev.from).isSameOrAfter(this.date.clone().startOf('day')) && moment(ev.from).isSameOrBefore(this.date.clone().endOf('day'))) {
          this.dayEvents.push(ev);
        }
      }
    });
  }

}
