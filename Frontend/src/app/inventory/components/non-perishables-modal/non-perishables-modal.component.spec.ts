import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonPerishablesModalComponent } from './non-perishables-modal.component';

describe('NonPerishablesModalComponent', () => {
  let component: NonPerishablesModalComponent;
  let fixture: ComponentFixture<NonPerishablesModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonPerishablesModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonPerishablesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
