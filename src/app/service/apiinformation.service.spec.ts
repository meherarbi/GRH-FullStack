import { TestBed } from '@angular/core/testing';

import { ApiinformationService } from './apiinformation.service';

describe('ApiinformationService', () => {
  let service: ApiinformationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiinformationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
