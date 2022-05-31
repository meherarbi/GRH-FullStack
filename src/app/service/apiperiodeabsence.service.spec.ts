import { TestBed } from '@angular/core/testing';

import { ApiperiodeabsenceService } from './apiperiodeabsence.service';

describe('ApiperiodeabsenceService', () => {
  let service: ApiperiodeabsenceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiperiodeabsenceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
