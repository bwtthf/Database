import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiftAvailableComponent } from './shift-available.component';

describe('ShiftAvailableComponent', () => {
  let component: ShiftAvailableComponent;
  let fixture: ComponentFixture<ShiftAvailableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShiftAvailableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShiftAvailableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
