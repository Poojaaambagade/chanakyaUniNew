import { TestBed } from '@angular/core/testing';

import { CommonApiCallServiceService } from './common-api-call-service.service';

describe('CommonApiCallServiceService', () => {
  let service: CommonApiCallServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommonApiCallServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
