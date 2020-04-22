import { async, TestBed } from '@angular/core/testing';
import { CreateClownComponentModule } from './create-clown-component.module';

describe('CreateClownComponentModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CreateClownComponentModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CreateClownComponentModule).toBeDefined();
  });
});
