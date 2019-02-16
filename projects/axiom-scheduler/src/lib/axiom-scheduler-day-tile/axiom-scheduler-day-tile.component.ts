import { Component, OnInit, ViewEncapsulation, Input, ElementRef, Injector } from '@angular/core';
import * as momentNs from 'moment'; const moment = momentNs;
import { AxiomSchedulerComponentCommon, AxiomSchedulerEvent } from './../axiom-scheduler/axiom-scheduler.component';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: '[ax-scheduler-day-tile]',
  templateUrl: './axiom-scheduler-day-tile.component.html',
  styleUrls: ['./axiom-scheduler-day-tile.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    'class': 'ax-scheduler__month-view__day'
  },
  animations: [
    trigger('dialogAnimation', [
      transition(':enter', [
        style({ transform: 'scale(0)' }),
        animate(`${190}ms ease-in`, style({ transform: 'scale(1.1)' })),
        animate(`${100}ms ease-in`, style({ transform: 'scale(1)' }))
      ]),
      transition(':leave', [
        animate(`${80}ms ease-in-out`, style({ transform: 'scale(0)' }))
      ])
    ])
  ]
})
export class AxiomSchedulerDayTileComponent extends AxiomSchedulerComponentCommon implements OnInit {

  @Input() day: momentNs.Moment;
  @Input() index: number;

  public inMonth: boolean = false;
  public dayEvents: AxiomSchedulerEvent[];

  constructor(injector: Injector, private _element: ElementRef) {
    super(injector);
  }

  public ngOnInit(): void {
    this.refresh();
    this.refreshView();
  }

  public refreshView(): void {
    this.inMonth = this.day.clone().isSameOrAfter(this.date.clone().startOf('months')) && this.day.clone().isSameOrBefore(this.date.clone().endOf('months'));
    this.checkDayEvents();
  }

  public showEventsDialog(): void {
    if (this.dayEvents && this.dayEvents.length > 0) {
      this.sidebarService.open({ title : `${ this.day.format('DD MMMM YYYY') }` , events : this.dayEvents });
    }
  }

  private checkDayEvents(): void {
    this.dayEvents = [];
    this.service.axEvents.forEach(ev => {
      if(ev.from && ev.to){
        if (moment(ev.from).isSameOrAfter(this.day.clone().startOf('day')) && moment(ev.to).isSameOrBefore(this.day.clone().endOf('day'))) {
          this.dayEvents.push(ev);
        }
      }
      else if(ev.from && !ev.to){
        if (moment(ev.from).isSameOrAfter(this.day.clone().startOf('day')) && moment(ev.from).isSameOrBefore(this.day.clone().endOf('day'))) {
          this.dayEvents.push(ev);
        }
      }
    });
  }

}
