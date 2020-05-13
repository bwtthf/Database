import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkMenuArchiveComponent } from './drink-menu-archive.component';

describe('DrinkMenuArchiveComponent', () => {
  let component: DrinkMenuArchiveComponent;
  let fixture: ComponentFixture<DrinkMenuArchiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrinkMenuArchiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinkMenuArchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
