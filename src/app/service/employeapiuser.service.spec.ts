import { TestBed } from '@angular/core/testing';

import { EmployeapiuserService } from './employeapiuser.service';

describe('EmployeapiuserService', () => {
  let service: EmployeapiuserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeapiuserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
