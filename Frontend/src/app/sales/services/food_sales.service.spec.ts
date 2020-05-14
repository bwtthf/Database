import { TestBed } from '@angular/core/testing';

import { Food_SalesService } from './food_sales.service';

describe('Food_SalesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Food_SalesService = TestBed.get(Food_SalesService);
    expect(service).toBeTruthy();
  });
});
