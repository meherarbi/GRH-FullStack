import { TestBed } from '@angular/core/testing';

import { GrhapifeuilletempService } from './grhapifeuilletemp.service';

describe('GrhapifeuilletempService', () => {
  let service: GrhapifeuilletempService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GrhapifeuilletempService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
