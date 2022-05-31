import { TestBed } from '@angular/core/testing';

import { EmployeapiconsultantService } from './employeapiconsultant.service';

describe('EmployeapiconsultantService', () => {
  let service: EmployeapiconsultantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeapiconsultantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
