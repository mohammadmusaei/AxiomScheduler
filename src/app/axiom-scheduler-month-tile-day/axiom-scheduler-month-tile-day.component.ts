import { AxiomSchedulerEvent } from './../axiom-scheduler/axiom-scheduler.component';
import { Component, OnInit, Injector, ViewEncapsulation, Input, Renderer2, ElementRef, OnDestroy } from '@angular/core';
import { AxiomSchedulerComponentCommon } from '../axiom-scheduler/axiom-scheduler.component';
import * as moment from 'moment';
import { trigger, transition, style, animate } from '@angular/animations';
import { ReplaySubject, fromEvent } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

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

  @Input() day: moment.Moment;

  public events: AxiomSchedulerEvent[] = [];
  public showEvents: boolean = false;

  protected destroyed: ReplaySubject<boolean> = new ReplaySubject<boolean>(1);

  constructor(injector: Injector, private _renderer: Renderer2, private _element: ElementRef) {
    super(injector);
  }

  public ngOnInit(): void {
    this.refresh();
    this.refreshView();
  }


  public baseDestroy(): void {
    this.destroyEventObserver();
  }

  public showEventsDialog(): void {
    if (this.events && this.events.length > 0) {
      this.showEvents = true
      this.setEventObserver();
    }
  }

  public closeDialog($event?: Event): void {
    this.showEvents = false;
    this.destroyEventObserver();
    $event && $event.preventDefault();
    $event && $event.stopPropagation();
  }

  public refreshView(): void {
    this.checkEvents();
    var text = `${this.events.length} event${this.events.length > 1 ? "s" : ""}, Click to show detail...`;
    this._renderer.setAttribute(this._element.nativeElement, 'title', text);
  }

  private closeOnGlobalClick(targetElement: HTMLElement | EventTarget): void {
    if (targetElement) {
      const clickedInside = this._element.nativeElement.contains(targetElement);
      if (!clickedInside) {
        this.closeDialog();
      }
    }
  }

  private closeOnGlobalKeydown(event: KeyboardEvent): void {
    if (event.keyCode === 27) {
      this.closeDialog();
    }
  }

  private setEventObserver(): void {
    this.destroyed = new ReplaySubject<boolean>(1);
    fromEvent(document, 'click').pipe(takeUntil(this.destroyed)).subscribe((event: MouseEvent) => this.closeOnGlobalClick(event.target));
    fromEvent(document, 'keydown').pipe(takeUntil(this.destroyed)).subscribe((event: KeyboardEvent) => this.closeOnGlobalKeydown(event));
  }

  private destroyEventObserver(): void {
    if (this.destroyed) {
      this.destroyed.next(true);
      this.destroyed.complete();
    }
  }

  private checkEvents(): void {
    this.events = [];
    this.axEvents.forEach(ev => {
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

