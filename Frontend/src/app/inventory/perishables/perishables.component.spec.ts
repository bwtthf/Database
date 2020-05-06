import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerishablesComponent } from './perishables.component';

describe('PerishablesComponent', () => {
  let component: PerishablesComponent;
  let fixture: ComponentFixture<PerishablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerishablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerishablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
