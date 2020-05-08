import { TestBed } from '@angular/core/testing';

import { NonPerishablesService } from './non-perishables.service';

describe('NonPerishablesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NonPerishablesService = TestBed.get(NonPerishablesService);
    expect(service).toBeTruthy();
  });
});
