import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrEditSalesComponent } from './add-or-edit-sales.component';

describe('AddOrEditSalesComponent', () => {
  let component: AddOrEditSalesComponent;
  let fixture: ComponentFixture<AddOrEditSalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddOrEditSalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOrEditSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
