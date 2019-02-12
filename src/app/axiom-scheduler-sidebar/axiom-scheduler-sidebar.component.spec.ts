import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AxiomSchedulerSidebarComponent } from './axiom-scheduler-sidebar.component';

describe('AxiomSchedulerSidebarComponent', () => {
  let component: AxiomSchedulerSidebarComponent;
  let fixture: ComponentFixture<AxiomSchedulerSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AxiomSchedulerSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AxiomSchedulerSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
