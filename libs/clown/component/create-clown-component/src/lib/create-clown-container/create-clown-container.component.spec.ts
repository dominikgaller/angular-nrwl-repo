import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateClownContainerComponent } from './create-clown-container.component';

describe('PatientContainerComponent', () => {
  let component: CreateClownContainerComponent;
  let fixture: ComponentFixture<CreateClownContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateClownContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateClownContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
