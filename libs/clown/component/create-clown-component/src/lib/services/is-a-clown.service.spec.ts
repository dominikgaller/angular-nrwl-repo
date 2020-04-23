import { TestBed } from '@angular/core/testing';

import { IsAClownService } from './is-a-clown.service';

describe('IsAClownService', () => {
  let service: IsAClownService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IsAClownService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
