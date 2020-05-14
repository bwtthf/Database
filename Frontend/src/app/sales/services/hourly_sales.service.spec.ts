import { TestBed } from '@angular/core/testing';

import { Hourly_SalesService } from './hourly_sales.service';

describe('Hourly_SalesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Hourly_SalesService = TestBed.get(Hourly_SalesService);
    expect(service).toBeTruthy();
  });
});
