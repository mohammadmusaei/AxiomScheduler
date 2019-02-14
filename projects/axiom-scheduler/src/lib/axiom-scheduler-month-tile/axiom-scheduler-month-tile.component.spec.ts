import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AxiomSchedulerMonthTileComponent } from './axiom-scheduler-month-tile.component';

describe('AxiomSchedulerMonthTileComponent', () => {
  let component: AxiomSchedulerMonthTileComponent;
  let fixture: ComponentFixture<AxiomSchedulerMonthTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AxiomSchedulerMonthTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AxiomSchedulerMonthTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
