import { TestBed } from '@angular/core/testing';

import { DrinkMenuArchiveService } from './drink-menu-archive.service';

describe('DrinkMenuArchiveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DrinkMenuArchiveService = TestBed.get(DrinkMenuArchiveService);
    expect(service).toBeTruthy();
  });
});
