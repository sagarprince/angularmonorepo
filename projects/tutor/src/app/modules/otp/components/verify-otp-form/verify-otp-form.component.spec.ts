import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyOtpFormComponent } from './verify-otp-form.component';

describe('OtpFormComponent', () => {
  let component: VerifyOtpFormComponent;
  let fixture: ComponentFixture<VerifyOtpFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifyOtpFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifyOtpFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
