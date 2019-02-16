import { Component, OnInit, Injector, ViewEncapsulation, Input, Renderer2, ElementRef } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import * as momentNs from 'moment'; const moment = momentNs;
import { AxiomSchedulerEvent } from './../axiom-scheduler/axiom-scheduler.component';
import { AxiomSchedulerComponentCommon } from './../axiom-scheduler/axiom-scheduler.component';

@Component({
  selector: '[ax-scheduler-month-tile-day]',
  templateUrl: './axiom-scheduler-month-tile-day.component.html',
  styleUrls: ['./axiom-scheduler-month-tile-day.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    'class': 'ax-scheduler__year-view__month__day',
    '[class.hasEvent]': 'events.length > 0',
    '(click)': 'showEventsDialog()'
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
export class AxiomSchedulerMonthTileDayComponent extends AxiomSchedulerComponentCommon implements OnInit {

  @Input() day: momentNs.Moment;

  public events: AxiomSchedulerEvent[] = [];

  constructor(injector: Injector, private _renderer: Renderer2, private _element: ElementRef) {
    super(injector);
  }

  public ngOnInit(): void {
    this.refresh();
    this.refreshView();
  }

  public showEventsDialog(): void {
    if (this.events && this.events.length > 0) {
      this.sidebarService.open({ title : `${ this.day.format('DD MMMM YYYY') }` , events : this.events });
    }
  }

  public refreshView(): void {
    this.checkEvents();
    var text = `${this.events.length} event${this.events.length > 1 ? "s" : ""}, Click to show detail...`;
    this._renderer.setAttribute(this._element.nativeElement, 'title', text);
  }

  private checkEvents(): void {
    this.events = [];
    this.service.axEvents.forEach(ev => {
      if(ev.to && ev.from){
        if (moment(ev.from).isSameOrAfter(this.day.clone().startOf('day')) && moment(ev.to).isSameOrBefore(this.day.clone().endOf('day'))) {
          this.events.push(ev);
        }
      }
      else if(ev.from && !ev.to){
        if (moment(ev.from).isSameOrAfter(this.day.clone().startOf('day')) && moment(ev.from).isSameOrBefore(this.day.clone().endOf('day'))) {
          this.events.push(ev);
        }
      }
    });
  }

}

