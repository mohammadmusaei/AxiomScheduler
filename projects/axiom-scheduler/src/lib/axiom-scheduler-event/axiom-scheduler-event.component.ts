import { AxiomSchedulerComponentCommon } from './../axiom-scheduler/axiom-scheduler.component';
import { Component, OnInit, Input, ViewEncapsulation, Renderer2, ElementRef, AfterViewInit, Injector } from '@angular/core';
import { AxiomSchedulerEvent } from './../axiom-scheduler/axiom-scheduler.component';
import * as momentNs from 'moment'; const moment = momentNs;
import { trigger, style, transition, animate } from '@angular/animations';
import { IResizeEvent } from 'angular2-draggable/lib/models/resize-event';

@Component({
  selector: '[ax-scheduler-event]',
  templateUrl: './axiom-scheduler-event.component.html',
  styleUrls: ['./axiom-scheduler-event.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    'class': 'ax-scheduler__event',
    '[class.expired]': 'expired',
    '(click)': 'service.eventClicked(event)'
  },
  animations: [
    trigger('timeAnimate', [
      transition(':enter', [
        style({ transform: 'scale(0)' }),
        animate(`${180}ms ease-in`, style({ transform: 'scale(1)' }))
      ]),
      transition(':leave', [
        animate(`${80}ms ease-out`, style({ opacity: '0' }))
      ])
    ])
  ]
})
export class AxiomSchedulerEventComponent extends AxiomSchedulerComponentCommon implements OnInit, AfterViewInit {

  @Input() event: AxiomSchedulerEvent;
  @Input() monthMode: boolean = false;

  public ctx: any;
  public fromTime: momentNs.Moment;
  public toTime: momentNs.Moment;
  public diff: number;
  public showTime: boolean = false;
  public expired: boolean = false;

  private timeout: any;

  constructor(injector: Injector, private _renderer: Renderer2, private _element: ElementRef) {
    super(injector);
  }

  public ngOnInit(): void {
    this.ctx = { item: this.event };
    this.updateTime();
    this.applyColor();
  }

  public ngAfterViewInit(): void {
    if (!this.monthMode) {
      this.checkPosition();
    }
  }

  public refreshView(): void {
    
  }

  public fromTimeChanging(e: { x: number, y: number }): void {
    this.fromTime = this.fromTime.clone().startOf('day').add(this.getOffsetMinute(), 'minutes');
    this.toTime = this.fromTime.clone().add(this.diff, 'minutes');
  }

  public fromTimeChanged(e: { x: number, y: number }): void {
    this.event.from = this.fromTime.clone().toDate();
    this.event.to = this.toTime.clone().toDate();
    this.toggleShowTime(false);
    this.service.eventChanged(this.event);
  }

  public toTimeChanging(e: IResizeEvent): void {
    this.diff = e.size.height;
    this.fromTime = this.fromTime.clone().startOf('day').add(this.getOffsetMinute(), 'minutes');
    this.toTime = this.fromTime.clone().add(this.diff, 'minutes');
  }

  public toTimeChanged(e: IResizeEvent): void {
    this.event.from = this.fromTime.clone().toDate();
    this.event.to = this.toTime.clone().toDate();
    this.toggleShowTime(false);
    this.service.eventChanged(this.event);
  }

  public toTimeChangeStart(e: IResizeEvent): void {
    this.toggleShowTime(true);
  }

  public fromTimeChangeStart(e: IResizeEvent): void {
    this.toggleShowTime(true);
  }

  public deleteEevent(): void {
    this.service.eventDeleteClick.next(this.event);
  }

  public editEevent(): void {
    this.service.eventEditClick.next(this.event);
  }

  public mouseDown(ev : MouseEvent): void {
    ev && ev.preventDefault();
    ev && ev.stopPropagation();
  }

  private checkPosition(): void {
    setTimeout(() => {
      var from = moment(this.event.from).diff(moment(this.event.from).startOf('day'), 'minutes');
      var to = moment(this.event.to).diff(moment(this.event.to).startOf('day'), 'minutes');
      this._renderer.setStyle(this._element.nativeElement.parentElement, 'top', `${from}px`);
      this._renderer.setStyle(this._element.nativeElement.parentElement, 'height', `${Math.abs(from - to)}px`);
      this._renderer.setStyle(this._element.nativeElement, 'height', `100%`);
      this._renderer.setStyle(this._element.nativeElement, 'display', `block`);
    }, 200);
  }

  private getOffsetMinute(): number {
    const elementPos = this._element.nativeElement.getBoundingClientRect();
    const parentPos = this._element.nativeElement.parentElement.parentElement.getBoundingClientRect();
    return (Math.abs(elementPos.top - parentPos.top) + this._element.nativeElement.parentElement.parentElement.scrollTop);
  }

  private updateDiff(): void {
    this.diff = this.toTime.diff(this.fromTime, 'minutes');
  }

  private updateTime(): void {
    this.fromTime = moment(this.event.from).clone();
    this.toTime = moment(this.event.to).clone();
    this.updateDiff();
    this.expired = moment(this.event.to).isBefore(moment(), 'days');
  }

  private applyColor(): void {
    if (this.event.color) {
      this._renderer.setStyle(this._element.nativeElement, 'background', this.event.color);
    }
  }

  private toggleShowTime(toggle: boolean): void {
    if (toggle) {
      this.timeout = setTimeout(() => {
        this.showTime = toggle;
      }, 200);
    }
    else {
      clearTimeout(this.timeout);
      this.showTime = toggle;
    }
  }

}
