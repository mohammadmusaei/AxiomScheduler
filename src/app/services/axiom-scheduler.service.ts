import { Injectable } from "@angular/core";
import { Subject } from 'rxjs';
import * as moment from 'moment';


@Injectable({
    providedIn : 'root'
})
export class AxiomSchedulerService{

    refershRequest : Subject<moment.Moment>;

    constructor() {
        this.refershRequest = new Subject<moment.Moment>();        
    }

}