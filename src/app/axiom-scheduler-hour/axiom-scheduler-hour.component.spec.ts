import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AxiomSchedulerHourComponent } from './axiom-scheduler-hour.component';

describe('AxiomSchedulerHourComponent', () => {
  let component: AxiomSchedulerHourComponent;
  let fixture: ComponentFixture<AxiomSchedulerHourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AxiomSchedulerHourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AxiomSchedulerHourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
