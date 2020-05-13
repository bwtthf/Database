import { TestBed } from '@angular/core/testing';

import { SeasonalDrinksService } from './seasonal-drinks.service';

describe('SeasonalDrinksService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SeasonalDrinksService = TestBed.get(SeasonalDrinksService);
    expect(service).toBeTruthy();
  });
});
