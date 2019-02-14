import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AxiomSchedulerYearViewComponent } from './axiom-scheduler-year-view.component';

describe('AxiomSchedulerYearViewComponent', () => {
  let component: AxiomSchedulerYearViewComponent;
  let fixture: ComponentFixture<AxiomSchedulerYearViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AxiomSchedulerYearViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AxiomSchedulerYearViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
