import { Injectable } from '@angular/core';
import { NgbDateAdapter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';

@Injectable()
export class DateNativeAdapter extends NgbDateAdapter<Date> {
    public fromModel(date: Date | null): NgbDateStruct | null {
        if(date && moment.isDate(new Date(Date.parse(date.toString())))){
            var converted = moment(date).toDate();
            return { year: converted.getFullYear(), month: converted.getMonth() + 1, day: converted.getDate() };
        }   
        else{
            return null;
        } 
    }

    public toModel(date: NgbDateStruct | null): any | null {
        return date !== null && date.year !== null && date.month !== null
            ? new Date(Date.UTC(date.year, date.month - 1, date.day)).toISOString()
            : null;
    }
}