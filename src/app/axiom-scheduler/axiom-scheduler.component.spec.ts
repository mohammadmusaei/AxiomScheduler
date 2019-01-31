import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AxiomSchedulerComponent } from './axiom-scheduler.component';

describe('AxiomSchedulerComponent', () => {
  let component: AxiomSchedulerComponent;
  let fixture: ComponentFixture<AxiomSchedulerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AxiomSchedulerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AxiomSchedulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
