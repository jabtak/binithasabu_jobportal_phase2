import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupAlumniComponent } from './signup-alumni.component';

describe('SignupAlumniComponent', () => {
  let component: SignupAlumniComponent;
  let fixture: ComponentFixture<SignupAlumniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupAlumniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupAlumniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
