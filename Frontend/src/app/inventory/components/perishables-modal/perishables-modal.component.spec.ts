import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerishablesModalComponent } from './perishables-modal.component';

describe('PerishablesModalComponent', () => {
  let component: PerishablesModalComponent;
  let fixture: ComponentFixture<PerishablesModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerishablesModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerishablesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
