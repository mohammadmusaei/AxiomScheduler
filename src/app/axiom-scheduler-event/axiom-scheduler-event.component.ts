import { AxiomSchedulerComponentCommon } from './../axiom-scheduler/axiom-scheduler.component';
import { Component, OnInit, Input, ViewEncapsulation, Renderer2, ElementRef, AfterViewInit } from '@angular/core';
import { AxiomSchedulerEvent } from '../axiom-scheduler/axiom-scheduler.component';
import * as moment from 'moment';
import { trigger, style, transition, animate } from '@angular/animations';
import { IResizeEvent } from 'angular2-draggable/lib/models/resize-event';

@Component({
  selector: '[ax-scheduler-event]',
  templateUrl: './axiom-scheduler-event.component.html',
  styleUrls: ['./axiom-scheduler-event.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    'class': 'ax-scheduler__event'
  },
  animations: [
    trigger('timeAnimate', [
      transition(':enter', [
        style({ transform: 'scale(0)' }),
        animate(`${180}ms ease-in`, style({ transform: 'scale(1)' }))
      ]),
      transition(':leave', [
        animate(`${80}ms ease-out`, style({ transform: 'translateX(-100%)' }))
      ])
    ])
  ]
})
export class AxiomSchedulerEventComponent extends AxiomSchedulerComponentCommon implements OnInit, AfterViewInit {

  @Input() event: AxiomSchedulerEvent;
  ctx: any;
  fromTime: moment.Moment;
  toTime: moment.Moment;
  diff: number;
  showTime : boolean = false;

  constructor(private _renderer: Renderer2, private _element: ElementRef) {
    super();
  }

  ngOnInit() {
    this.ctx = { item : this.event };
    this.updateTime();
  }

  ngAfterViewInit(): void {
    this.checkPosition();
  }

  fromTimeChanging(e: { x: number, y: number }): void {
    this.fromTime = this.fromTime.clone().startOf('day').add(this.getOffsetMinute(), 'minutes');
    this.toTime = this.fromTime.clone().add(this.diff, 'minutes');
  }

  fromTimeChanged(e: { x: number, y: number }): void {
    this.event.from = this.fromTime.clone().toDate();
    this.event.to = this.toTime.clone().toDate();
    this.showTime = false;
  }

  toTimeChanging(e: IResizeEvent): void {
    this.diff = e.size.height;
    this.fromTime = this.fromTime.clone().startOf('day').add(this.getOffsetMinute(), 'minutes');
    this.toTime = this.fromTime.clone().add(this.diff, 'minutes');
  }

  toTimeChanged(e: IResizeEvent): void {
    this.event.from = this.fromTime.clone().toDate();
    this.event.to = this.toTime.clone().toDate();
    this.showTime = false;
  }

  toTimeChangeStart(e: IResizeEvent): void {
    this.showTime = true;
  }

  fromTimeChangeStart(e: IResizeEvent): void {
    this.showTime = true;
  }

  private checkPosition(): void {
    setTimeout(() => {
      var from = moment(this.event.from).diff(moment(this.event.from).startOf('day'), 'minutes');
      var to = moment(this.event.to).diff(moment(this.event.to).startOf('day'), 'minutes');
      this._renderer.setStyle(this._element.nativeElement.parentElement, 'top', `${from}px`);
      this._renderer.setStyle(this._element.nativeElement.parentElement, 'height', `${Math.abs(from - to)}px`);
      this._renderer.setStyle(this._element.nativeElement, 'height', `100%`);
    }, 300);
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
  }

}
