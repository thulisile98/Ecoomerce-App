import { TestBed } from '@angular/core/testing';

import { EcommerceApiService } from './ecommerce-api.service';

describe('EcommerceApiService', () => {
  let service: EcommerceApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EcommerceApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
