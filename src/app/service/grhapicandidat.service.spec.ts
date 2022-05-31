import { TestBed } from '@angular/core/testing';

import { GrhapicandidatService } from './grhapicandidat.service';

describe('GrhapicandidatService', () => {
  let service: GrhapicandidatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GrhapicandidatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
