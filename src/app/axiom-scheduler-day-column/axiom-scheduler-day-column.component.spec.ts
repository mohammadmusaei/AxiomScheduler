import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AxiomSchedulerDayColumnComponent } from './axiom-scheduler-day-column.component';

describe('AxiomSchedulerDayColumnComponent', () => {
  let component: AxiomSchedulerDayColumnComponent;
  let fixture: ComponentFixture<AxiomSchedulerDayColumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AxiomSchedulerDayColumnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AxiomSchedulerDayColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
