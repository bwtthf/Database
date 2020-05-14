import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Food_SalesComponent } from './food_sales.component';

describe('Food_SalesComponent', () => {
  let component: Food_SalesComponent;
  let fixture: ComponentFixture<Food_SalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Food_SalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Food_SalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
