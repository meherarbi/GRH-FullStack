import { TestBed } from '@angular/core/testing';

import { GrhapiconsultantService } from './grhapiconsultant.service';

describe('GrhapiconsultantService', () => {
  let service: GrhapiconsultantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GrhapiconsultantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
