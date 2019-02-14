import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AxiomSchedulerDayViewComponent } from './axiom-scheduler-day-view.component';

describe('AxiomSchedulerDayViewComponent', () => {
  let component: AxiomSchedulerDayViewComponent;
  let fixture: ComponentFixture<AxiomSchedulerDayViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AxiomSchedulerDayViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AxiomSchedulerDayViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
