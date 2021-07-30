import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninAlumniComponent } from './signin-alumni.component';

describe('SigninAlumniComponent', () => {
  let component: SigninAlumniComponent;
  let fixture: ComponentFixture<SigninAlumniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SigninAlumniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninAlumniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
