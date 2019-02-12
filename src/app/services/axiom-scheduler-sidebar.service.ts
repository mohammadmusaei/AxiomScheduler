import { Subject } from 'rxjs';
import { AxiomSchedulerEvent } from './../axiom-scheduler/axiom-scheduler.component';
import { Injectable } from '@angular/core';

export interface AxiomSchedulerSidebarData {
  title: string;
  events: AxiomSchedulerEvent[];
}

@Injectable({
  providedIn: 'root'
})
export class AxiomSchedulerSidebarService {

  public toggle: Subject<boolean>;
  public data: Subject<AxiomSchedulerSidebarData>;

  constructor() {
    this.data = new Subject<AxiomSchedulerSidebarData>();
    this.toggle = new Subject<boolean>();
  }

  public open(data: AxiomSchedulerSidebarData): void {
    this.toggle.next(true);
    setTimeout(() => {
      this.data.next(data);
    }, 200);
  }

  public close() : void{
    this.toggle.next(false);
  }

}
