import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrEditFoodMenuComponent } from './add-or-edit-food-menu.component';

describe('AddOrEditFoodMenuComponent', () => {
  let component: AddOrEditFoodMenuComponent;
  let fixture: ComponentFixture<AddOrEditFoodMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddOrEditFoodMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOrEditFoodMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
