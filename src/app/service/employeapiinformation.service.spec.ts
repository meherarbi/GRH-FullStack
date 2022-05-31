import { TestBed } from '@angular/core/testing';

import { EmployeapiinformationService } from './employeapiinformation.service';

describe('EmployeapiinformationService', () => {
  let service: EmployeapiinformationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeapiinformationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
