import { TestBed } from '@angular/core/testing';

import { EmployeapiperiodeabsenceService } from './employeapiperiodeabsence.service';

describe('EmployeapiperiodeabsenceService', () => {
  let service: EmployeapiperiodeabsenceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeapiperiodeabsenceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
