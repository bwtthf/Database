import { TestBed } from '@angular/core/testing';

import { Drink_SalesService } from './drink_sales.service';

describe('Drink_SalesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Drink_SalesService = TestBed.get(Drink_SalesService);
    expect(service).toBeTruthy();
  });
});
