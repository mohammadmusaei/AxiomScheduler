import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AxiomSchedulerDropdownComponent } from './axiom-scheduler-dropdown.component';

describe('AxiomSchedulerDropdownComponent', () => {
  let component: AxiomSchedulerDropdownComponent;
  let fixture: ComponentFixture<AxiomSchedulerDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AxiomSchedulerDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AxiomSchedulerDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
