import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventWindowComponent } from './event-window.component';

describe('EventWindowComponent', () => {
  let component: EventWindowComponent;
  let fixture: ComponentFixture<EventWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
