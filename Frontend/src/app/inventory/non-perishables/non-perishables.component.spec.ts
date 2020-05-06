import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonPerishablesComponent } from './non-perishables.component';

describe('NonPerishablesComponent', () => {
  let component: NonPerishablesComponent;
  let fixture: ComponentFixture<NonPerishablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonPerishablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonPerishablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
