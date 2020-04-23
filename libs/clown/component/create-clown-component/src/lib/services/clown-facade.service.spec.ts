import { TestBed } from '@angular/core/testing';

import { ClownFacadeService } from './clown-facade.service';

describe('ClownFacadeService', () => {
  let service: ClownFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClownFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
