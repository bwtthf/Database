import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasonalDrinksComponent } from './seasonal-drinks.component';

describe('SeasonalDrinksComponent', () => {
  let component: SeasonalDrinksComponent;
  let fixture: ComponentFixture<SeasonalDrinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeasonalDrinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeasonalDrinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
