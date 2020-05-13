import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrEditDrinkMenuComponent } from './add-or-edit-drink-menu.component';

describe('AddOrEditDrinkMenuComponent', () => {
  let component: AddOrEditDrinkMenuComponent;
  let fixture: ComponentFixture<AddOrEditDrinkMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddOrEditDrinkMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOrEditDrinkMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
