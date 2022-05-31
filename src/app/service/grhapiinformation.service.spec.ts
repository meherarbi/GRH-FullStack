import { TestBed } from '@angular/core/testing';

import { GrhapiinformationService } from './grhapiinformation.service';

describe('GrhapiinformationService', () => {
  let service: GrhapiinformationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GrhapiinformationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
