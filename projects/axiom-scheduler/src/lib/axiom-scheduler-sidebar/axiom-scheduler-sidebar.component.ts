import { Component, OnInit, OnDestroy, ElementRef, Input, TemplateRef, ViewEncapsulation } from '@angular/core';
import { ReplaySubject, fromEvent, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { trigger, transition, style, animate } from '@angular/animations';
import { AxiomSchedulerSidebarService, AxiomSchedulerSidebarData } from './../services/axiom-scheduler-sidebar.service';

@Component({
  selector: '[ax-scheduler-sidebar]',
  templateUrl: './axiom-scheduler-sidebar.component.html',
  styleUrls: ['./axiom-scheduler-sidebar.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    'class': 'ax-scheduler__sidebar'
  },
  animations: [
    trigger('slideInOutRight', [
      transition(':enter', [
          style({ transform: 'translateX(100%)' }),
          animate(`${150}ms ease-in`, style({ transform: 'translateX(0%)' }))
      ]),
      transition(':leave', [
          animate(`${240}ms ease-out`, style({ transform: 'translateX(100%)' }))
      ])
  ])
  ]
})
export class AxiomSchedulerSidebarComponent implements OnInit, OnDestroy {

  @Input() axEventTemplate: TemplateRef<any>;
  @Input() axEventToolbar: boolean = true;
  public data: AxiomSchedulerSidebarData;

  protected destroyed: ReplaySubject<boolean> = new ReplaySubject<boolean>(1);
  private subs: Subscription;

  constructor(private _element: ElementRef, private _sidebarService: AxiomSchedulerSidebarService) { }

  public ngOnInit(): void {
    this.subs = this._sidebarService.data.subscribe(data => {
      this.data = data;
      this.setEventObserver();
    });
  }

  public ngOnDestroy(): void {
    this.destroyEventObserver();
    this.subs && this.subs.unsubscribe();
  }

  public close(): void {
    this._sidebarService.close();
  }

  private closeOnGlobalKeydown(event: KeyboardEvent): void {
    if (event.keyCode === 27) {
      this._sidebarService.close();
    }
  }

  private setEventObserver(): void {
    this.destroyed = new ReplaySubject<boolean>(1);
    fromEvent(document, 'keydown').pipe(takeUntil(this.destroyed)).subscribe((event: KeyboardEvent) => this.closeOnGlobalKeydown(event));
  }

  private destroyEventObserver(): void {
    if (this.destroyed) {
      this.destroyed.next(true);
      this.destroyed.complete();
    }
  }

}
