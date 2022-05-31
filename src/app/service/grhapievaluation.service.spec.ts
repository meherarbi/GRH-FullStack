import { TestBed } from '@angular/core/testing';

import { GrhapievaluationService } from './grhapievaluation.service';

describe('GrhapievaluationService', () => {
  let service: GrhapievaluationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GrhapievaluationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
