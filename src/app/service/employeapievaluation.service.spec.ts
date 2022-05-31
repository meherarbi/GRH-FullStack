import { TestBed } from '@angular/core/testing';

import { EmployeapievaluationService } from './employeapievaluation.service';

describe('EmployeapievaluationService', () => {
  let service: EmployeapievaluationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeapievaluationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
