import { Component, OnInit, ViewEncapsulation, Input, ElementRef, Injector } from '@angular/core';
import * as moment from 'moment';
import { AxiomSchedulerComponentCommon, AxiomSchedulerEvent } from './../axiom-scheduler/axiom-scheduler.component';
import { ReplaySubject, fromEvent } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
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
  
  @Input() day: moment.Moment;
  @Input() index: number;

  public dayEvents: AxiomSchedulerEvent[];
  public showEvents: boolean = false;
  
  protected destroyed: ReplaySubject<boolean> = new ReplaySubject<boolean>(1);

  constructor(injector : Injector,private _element : ElementRef) {
    super(injector);
  }

  public ngOnInit() : void {
    this.refreshView();
  }

  public refreshView() : void{
    this.checkDayEvents();
  }

  public baseDestroy(): void {
    this.destroyEventObserver();
  }

  public showEventsDialog() : void{
    this.showEvents = true
    this.setEventObserver();
  }

  public closeDialog() : void{
    this.showEvents = false;
    this.destroyEventObserver();
  }

  private checkDayEvents(): void {
    this.dayEvents = [];
    this.axEvents.forEach(ev => {
      if (moment(ev.from).isSameOrAfter(this.day.clone().startOf('day')) && moment(ev.to).isSameOrBefore(this.day.clone().endOf('day'))) {
        this.dayEvents.push(ev);
      }
    });
  }

  private closeOnGlobalClick(targetElement: HTMLElement | EventTarget) : void{ 
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

}
