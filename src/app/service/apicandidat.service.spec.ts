import { TestBed } from '@angular/core/testing';

import { ApicandidatService } from './apicandidat.service';

describe('ApicandidatService', () => {
  let service: ApicandidatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApicandidatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
