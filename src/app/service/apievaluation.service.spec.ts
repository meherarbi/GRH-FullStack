import { TestBed } from '@angular/core/testing';

import { ApievaluationService } from './apievaluation.service';

describe('ApievaluationService', () => {
  let service: ApievaluationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApievaluationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
