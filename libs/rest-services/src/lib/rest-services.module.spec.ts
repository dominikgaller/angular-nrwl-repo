import { async, TestBed } from '@angular/core/testing';
import { RestServicesModule } from './rest-services.module';

describe('RestServicesModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RestServicesModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(RestServicesModule).toBeDefined();
  });
});
