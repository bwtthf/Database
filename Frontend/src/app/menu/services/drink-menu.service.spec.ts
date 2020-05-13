import { TestBed } from '@angular/core/testing';

import { DrinkMenuService } from './drink-menu.service';

describe('DrinkMenuService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DrinkMenuService = TestBed.get(DrinkMenuService);
    expect(service).toBeTruthy();
  });
});
