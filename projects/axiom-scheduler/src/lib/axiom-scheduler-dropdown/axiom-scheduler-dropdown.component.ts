import { Component, OnInit, ViewEncapsulation, forwardRef, Input, Output, EventEmitter, ElementRef, OnDestroy } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { trigger, transition, style, animate } from '@angular/animations';
import { ReplaySubject, fromEvent } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'ax-scheduler-dropdown',
  templateUrl: './axiom-scheduler-dropdown.component.html',
  styleUrls: ['./axiom-scheduler-dropdown.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AxiomSchedulerDropdownComponent),
      multi: true
    }
  ],
  host: {
    'class': 'ax-scheduler-dropdown',
    '[class.open]': 'open'
  },
  animations: [
    trigger('dropdownAnimation', [
      transition(':leave', [
        animate(`${80}ms ease-in-out`, style({ transform: 'scale(0)' }))
      ])
    ])
  ]
})
export class AxiomSchedulerDropdownComponent implements OnInit, ControlValueAccessor, OnDestroy {

  @Input() dataTitle: string;
  @Input() dataId: string;
  @Input() items: any[] = [];
  @Input() modelFormatter: (val: any) => any;
  @Input() set ngModel(ngModel: any) {
    this._ngModel = ngModel;
  }
  get ngModel() {
    return this._ngModel;
  }

  @Output() ngModelChange = new EventEmitter<any>();

  public open: boolean;

  protected destroyed: ReplaySubject<boolean> = new ReplaySubject<boolean>(1);

  private _ngModel: any;

  constructor(private _element: ElementRef) { }

  public ngOnInit(): void {
  }

  public ngOnDestroy(): void {
    this.destroyEventObserver();
  }

  public onChange() {
    this.propagateChange(this.ngModel);
  }

  public writeValue(obj: any): void {
    this.ngModel = obj;
  }

  public registerOnChange(fn: (_: any) => void): void {
    this.propagateChange = fn;
  }

  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  public propagateChange = (_: any) => { }

  public onTouched = () => { };

  public toggle(toggle = !this.open): void {
    this.open = toggle;
    if (this.open) {
      this.setEventObserver();
    }
    else {
      this.destroyEventObserver();
    }
  }

  public inputFormatter(): string {
    if (this.ngModel) {
      var index = this.items.findIndex(i => i[this.dataId] === this.ngModel);
      if (index > -1) {
        return this.items[index][this.dataTitle];
      }
    }
    else {
      return '';
    }
  }

  public select(item: any): void {
    this.ngModel = this.modelFormatter ? this.modelFormatter(item) : item;
    this.propagateChange(this.ngModel);
    this.toggle(false);
  }

  private closeOnGlobalClick(targetElement: any): void {
    if (targetElement) {
      const arrow = targetElement.id === 'ax-dropdown-arr';
      const clickedInside = this._element.nativeElement.contains(targetElement);
      if (!clickedInside && !arrow) {
        this.toggle(false);
      }
    }
  }

  private closeOnGlobalKeydown(event: KeyboardEvent): void {
    if (event.keyCode === 27) {
      this.toggle(false);
    }
  }

  private setEventObserver(): void {
    this.destroyed = new ReplaySubject<boolean>(1);
    fromEvent(document, 'click').pipe(takeUntil(this.destroyed)).subscribe((event: MouseEvent) => this.closeOnGlobalClick(event.target));
    fromEvent(document, 'keydown').pipe(takeUntil(this.destroyed)).subscribe((event: KeyboardEvent) => this.closeOnGlobalKeydown(event));
  }

  private destroyEventObserver(): void {
    if (this.destroyed) {
      this.destroyed.next(true);
      this.destroyed.complete();
    }
  }


}
