import { TestBed } from '@angular/core/testing';

import { InventoryAnalyticsService } from './inventory-analytics.service';

describe('InventoryAnalyticsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InventoryAnalyticsService = TestBed.get(InventoryAnalyticsService);
    expect(service).toBeTruthy();
  });
});
