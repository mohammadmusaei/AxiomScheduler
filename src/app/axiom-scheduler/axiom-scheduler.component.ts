import { AX_LOCALES } from './../locales';
import { Component, OnInit, ViewEncapsulation, Input, TemplateRef, ViewChildren, AfterViewInit, ViewChild, Injector } from '@angular/core';
import * as moment from 'moment';
import { AxiomSchedulerService } from '../services/axiom-scheduler.service';

export enum AxiomSchedulerView {
  Day = 1,
  FourDay = 2,
  Week = 3,
  Month = 4,
  Year = 5,
  Schedule = 6
}

export class AxiomSchedulerComponentCommon {
  @Input() axEvents: AxiomSchedulerEvent[];
  @Input() axStartDate: Date;
  @Input() axEventTemplate: TemplateRef<any>;
  @Input() axEventFormatter: (data: any, date?: Date) => string;
  @Input() axDragStep: number;
  @Input() axLocale: string;
  today: moment.Moment;
  date: moment.Moment;
  service: AxiomSchedulerService;

  constructor(protected injector: Injector) {
    this.today = moment();
    this.service = this.injector.get(AxiomSchedulerService);
    this.service.refershRequest.subscribe((s) => {
      if (s) {
        this.date = s.clone();
        this.refreshView();
      }
    });
    this.service.locale.subscribe((locale) => {
      moment.locale(locale);
      if(this.date){
        this.date.locale(this.service.schedulerLocale);
        this.refreshView();
      }
    });
  }

  refresh(): void {
    this.date = this.axStartDate ? moment(this.axStartDate) : moment(Date.now());
  }

  refreshView(): void { }

}

export class AxiomSchedulerEvent {
  from: Date;
  to: Date;
  data: any;
  constructor(from: Date = null, to: Date = null, data: any = null) {
    this.data = data;
    this.from = from;
    this.to = to;
  }
}

@Component({
  selector: 'ax-scheduler',
  templateUrl: './axiom-scheduler.component.html',
  styleUrls: ['./axiom-scheduler.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [AxiomSchedulerService],
  host: {
    'class': 'ax-scheduler',
    '[class.dark]' : 'axTheme === "dark"'
  }
})
export class AxiomSchedulerComponent extends AxiomSchedulerComponentCommon implements OnInit {

  @Input() axSchedulerView: AxiomSchedulerView = AxiomSchedulerView.Week;
  @Input() axTheme : 'light' | 'dark' = 'light';
  items = [
    {id : AxiomSchedulerView.Day , title : 'Day'},
    {id : AxiomSchedulerView.Week , title : 'Week'},
    {id : AxiomSchedulerView.Month , title : 'Month'},
    {id : AxiomSchedulerView.Year , title : 'Year'}, 
    {id : AxiomSchedulerView.Schedule , title : 'Schedule'}
  ];

  locales = AX_LOCALES.map((v)=>{
    return { id : v , title : v };
  });

  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit() {
    this.axLocale = this.axLocale || 'en';
    this.refresh();
  }

  prev(): void {
    this.step(-1);
    this.service.refreshDate(this.date);
  }

  next(): void {
    this.step(1);
    this.service.refreshDate(this.date);
  }

  todayF() {
    this.date = moment();
    this.service.refreshDate(this.date);
  }

  modelFormatter(value : any) : any{
    return value ? value.id : null;
  }

  setLocale(locale : string):void{
    this.service.changeLocale(locale);
  }

  private step(step : number) : void{
    switch (this.axSchedulerView) {
      case AxiomSchedulerView.Day:
        this.date = this.date.clone().add(step, 'days');
        break;
      case AxiomSchedulerView.FourDay:
        this.date = this.date.clone().add(step, 'days');
        break;
      case AxiomSchedulerView.Week:
        this.date = this.date.clone().add(step, 'weeks');
        break;
      case AxiomSchedulerView.Month:
        this.date = this.date.clone().add(step, 'months');
        break;
      case AxiomSchedulerView.Year:
        this.date = this.date.clone().add(step, 'years');
        break;
      case AxiomSchedulerView.Schedule:
        break;
    }
  }

}
