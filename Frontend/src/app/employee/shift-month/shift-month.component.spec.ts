import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiftMonthComponent } from './shift-month.component';

describe('ShiftMonthComponent', () => {
  let component: ShiftMonthComponent;
  let fixture: ComponentFixture<ShiftMonthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShiftMonthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShiftMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
