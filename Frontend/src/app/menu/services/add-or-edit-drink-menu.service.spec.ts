import { TestBed } from '@angular/core/testing';

import { AddOrEditDrinkMenuService } from './add-or-edit-drink-menu.service';

describe('AddOrEditDrinkMenuService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddOrEditDrinkMenuService = TestBed.get(AddOrEditDrinkMenuService);
    expect(service).toBeTruthy();
  });
});
