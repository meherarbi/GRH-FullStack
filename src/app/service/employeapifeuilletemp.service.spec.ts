import { TestBed } from '@angular/core/testing';

import { EmployeapifeuilletempService } from './employeapifeuilletemp.service';

describe('EmployeapifeuilletempService', () => {
  let service: EmployeapifeuilletempService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeapifeuilletempService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
