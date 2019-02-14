import { AxiomSchedulerEvent } from './../axiom-scheduler/axiom-scheduler.component';
import { Injectable } from "@angular/core";
import { Subject } from 'rxjs';
import * as moment from 'moment';


@Injectable()
export class AxiomSchedulerService{

    private _defaultLocale = 'en';
    schedulerLocale : string = this._defaultLocale;
    locale : Subject<string>;
    refershRequest : Subject<moment.Moment>;
    eventChange : Subject<AxiomSchedulerEvent>;
    eventClick : Subject<AxiomSchedulerEvent>;
    eventDeleteClick : Subject<AxiomSchedulerEvent>;
    eventEditClick : Subject<AxiomSchedulerEvent>;

    constructor() {
        this.refershRequest = new Subject<moment.Moment>();        
        this.locale = new Subject<string>();
        this.eventChange = new Subject<AxiomSchedulerEvent>();
        this.eventClick = new Subject<AxiomSchedulerEvent>();
        this.eventDeleteClick = new Subject<AxiomSchedulerEvent>();
        this.eventEditClick = new Subject<AxiomSchedulerEvent>();
    }

    refreshDate(date : moment.Moment) : void{
        date && this.refershRequest.next(date);
    }

    changeLocale(locale:string) : void{
        this.schedulerLocale= locale || this._defaultLocale;
        this.locale.next(this.schedulerLocale);
    }

    eventChanged(event : AxiomSchedulerEvent) : void{
        event && this.eventChange.next(event);
    }

    eventClicked(event : AxiomSchedulerEvent) : void{
        event && this.eventClick.next(event);
    }

}