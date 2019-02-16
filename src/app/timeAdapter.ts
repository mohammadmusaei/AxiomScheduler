import { Injectable } from '@angular/core';
import { NgbTimeAdapter, NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';

@Injectable()
export class NgbTimeStringAdapter extends NgbTimeAdapter<string> {
    fromModel(value: string): NgbTimeStruct {
        if (!value) {
            return null;
        }
        const split = value.split(':');
        return {
            hour: parseInt(split[0], 10),
            minute: parseInt(split[1], 10),
            second: parseInt(split[2], 10)
        };
    }

    toModel(time: NgbTimeStruct): string {
        if (!time) {
            return null;
        }
        return `${this.pad(time.hour)}:${this.pad(time.minute)}:${this.pad(time.second)}`;
    }

    private pad(i: number): string {
        return i < 10 ? `0${i}` : `${i}`;
    }

}