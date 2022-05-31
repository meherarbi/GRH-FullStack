import { TestBed } from '@angular/core/testing';

import { GrhapiuserService } from './grhapiuser.service';

describe('GrhapiuserService', () => {
  let service: GrhapiuserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GrhapiuserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
