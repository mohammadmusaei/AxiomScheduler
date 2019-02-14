import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AxiomSchedulerDayTileComponent } from './axiom-scheduler-day-tile.component';

describe('AxiomSchedulerDayTileComponent', () => {
  let component: AxiomSchedulerDayTileComponent;
  let fixture: ComponentFixture<AxiomSchedulerDayTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AxiomSchedulerDayTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AxiomSchedulerDayTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
