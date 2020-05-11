import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonPerishablesQueryFormComponent } from './non-perishables-query-form.component';

describe('NonPerishablesQueryFormComponent', () => {
  let component: NonPerishablesQueryFormComponent;
  let fixture: ComponentFixture<NonPerishablesQueryFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonPerishablesQueryFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonPerishablesQueryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
