import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Hourly_SalesComponent } from './hourly_sales.component';

describe('Hourly_SalesComponent', () => {
  let component: Hourly_SalesComponent;
  let fixture: ComponentFixture<Hourly_SalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hourly_SalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Hourly_SalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
