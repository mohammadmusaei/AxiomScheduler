import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AxiomSchedulerMonthTileDayComponent } from './axiom-scheduler-month-tile-day.component';

describe('AxiomSchedulerMonthTileDayComponent', () => {
  let component: AxiomSchedulerMonthTileDayComponent;
  let fixture: ComponentFixture<AxiomSchedulerMonthTileDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AxiomSchedulerMonthTileDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AxiomSchedulerMonthTileDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
