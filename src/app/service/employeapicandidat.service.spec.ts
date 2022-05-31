import { TestBed } from '@angular/core/testing';

import { EmployeapicandidatService } from './employeapicandidat.service';

describe('EmployeapicandidatService', () => {
  let service: EmployeapicandidatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeapicandidatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
