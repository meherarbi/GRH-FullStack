import { TestBed } from '@angular/core/testing';

import { ApiconsultantService } from './apiconsultant.service';

describe('ApiconsultantService', () => {
  let service: ApiconsultantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiconsultantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
