import { TestBed } from '@angular/core/testing';

import { GrhapiperiodeabsenceService } from './grhapiperiodeabsence.service';

describe('GrhapiperiodeabsenceService', () => {
  let service: GrhapiperiodeabsenceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GrhapiperiodeabsenceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
