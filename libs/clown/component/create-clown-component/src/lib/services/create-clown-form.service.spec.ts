import { TestBed } from '@angular/core/testing';

import { CreateClownFormService } from './create-clown-form.service';

describe('CreateClownFormService', () => {
  let service: CreateClownFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateClownFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
