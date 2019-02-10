import { Injectable } from "@angular/core";
import { Subject } from 'rxjs';
import * as moment from 'moment';


@Injectable({
    providedIn : 'root'
})
export class AxiomSchedulerService{

    private _defaultLocale = 'en';
    schedulerLocale : string = this._defaultLocale;
    locale : Subject<string>;
    refershRequest : Subject<moment.Moment>;

    constructor() {
        this.refershRequest = new Subject<moment.Moment>();        
        this.locale = new Subject<string>();
    }

    refreshDate(date : moment.Moment) : void{
        date && this.refershRequest.next(date);
    }

    changeLocale(locale:string) : void{
        this.schedulerLocale= locale || this._defaultLocale;
        this.locale.next(this.schedulerLocale);
    }

}