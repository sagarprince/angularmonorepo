import { TestBed } from '@angular/core/testing';

import { RestAPIInterceptorService } from './rest-api-interceptor.service';

describe('RestApiInterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RestAPIInterceptorService = TestBed.get(RestAPIInterceptorService);
    expect(service).toBeTruthy();
  });
});
