import { TestBed } from '@angular/core/testing';

import { ApiServiceGetService } from './api-service-get.service';

describe('ApiServiceGetService', () => {
  let service: ApiServiceGetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiServiceGetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
