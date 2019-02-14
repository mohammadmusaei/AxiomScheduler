import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AxiomSchedulerMonthViewComponent } from './axiom-scheduler-month-view.component';

describe('AxiomSchedulerMonthViewComponent', () => {
  let component: AxiomSchedulerMonthViewComponent;
  let fixture: ComponentFixture<AxiomSchedulerMonthViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AxiomSchedulerMonthViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AxiomSchedulerMonthViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
