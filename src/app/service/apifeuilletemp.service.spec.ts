import { TestBed } from '@angular/core/testing';

import { ApifeuilletempService } from './apifeuilletemp.service';

describe('ApifeuilletempService', () => {
  let service: ApifeuilletempService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApifeuilletempService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
