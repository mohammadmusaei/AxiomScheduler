import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AxiomSchedulerEventComponent } from './axiom-scheduler-event.component';

describe('AxiomSchedulerEventComponent', () => {
  let component: AxiomSchedulerEventComponent;
  let fixture: ComponentFixture<AxiomSchedulerEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AxiomSchedulerEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AxiomSchedulerEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
