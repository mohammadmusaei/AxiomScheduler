import { SAMPLE_EVENTS } from 'src/app/sample-events';
import { EventWindowComponent } from 'src/app/event-window/event-window.component';
import { Injector } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AxiomSchedulerEvent } from 'axiom-scheduler';


export class RouteBaseClass {

    public _modalService: NgbModal;
    public events = [...SAMPLE_EVENTS];

    constructor(protected injector: Injector) {
        this._modalService = this.injector.get(NgbModal);
    }

    public editEvent($event: AxiomSchedulerEvent = null): void {
        var instance = this._modalService.open(EventWindowComponent, { size: 'sm', centered: true });
        if ($event) {
            instance.componentInstance.model = { ...$event }
        }
        instance.result.then((model) => {
            if (model) {
                if ($event) {
                    var index = this.events.findIndex(e => e._id === $event._id);
                    if (index > -1) {
                        this.events[index] = model;
                        this.refreshView();
                    }
                }
                else {
                    this.events.push(model);
                    this.refreshView();
                }
            }
        });
    }

    public removeEvent($event: AxiomSchedulerEvent): void {
        var index = this.events.findIndex(e => e._id === $event._id);
        if (index > -1) {
            this.events.splice(index, 1);
            this.refreshView();
        }
    }

    public refreshView(): void { }

}