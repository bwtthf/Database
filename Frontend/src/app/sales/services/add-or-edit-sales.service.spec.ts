import { TestBed } from '@angular/core/testing';

import { AddOrEditSalesService } from './add-or-edit-sales.service';

describe('AddOrEditSalesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddOrEditSalesService = TestBed.get(AddOrEditSalesService);
    expect(service).toBeTruthy();
  });
});
