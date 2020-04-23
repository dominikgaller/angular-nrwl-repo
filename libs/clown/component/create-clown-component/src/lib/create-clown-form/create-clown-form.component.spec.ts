import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateClownFormComponent } from './create-clown-form.component';

describe('CreatePatientFormComponent', () => {
  let component: CreateClownFormComponent;
  let fixture: ComponentFixture<CreateClownFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateClownFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateClownFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
