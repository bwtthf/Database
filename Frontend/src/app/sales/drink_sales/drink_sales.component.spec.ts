import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Drink_SalesComponent } from './drink_sales.component';

describe('Drink_SalesComponent', () => {
  let component: Drink_SalesComponent;
  let fixture: ComponentFixture<Drink_SalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Drink_SalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Drink_SalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
