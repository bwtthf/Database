import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerishablesQueryFormComponent } from './perishables-query-form.component';

describe('PerishablesQueryFormComponent', () => {
  let component: PerishablesQueryFormComponent;
  let fixture: ComponentFixture<PerishablesQueryFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerishablesQueryFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerishablesQueryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
