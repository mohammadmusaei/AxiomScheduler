import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AxiomSchedulerWeekViewComponentComponent } from './axiom-scheduler-week-view-component.component';

describe('AxiomSchedulerWeekViewComponentComponent', () => {
  let component: AxiomSchedulerWeekViewComponentComponent;
  let fixture: ComponentFixture<AxiomSchedulerWeekViewComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AxiomSchedulerWeekViewComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AxiomSchedulerWeekViewComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
