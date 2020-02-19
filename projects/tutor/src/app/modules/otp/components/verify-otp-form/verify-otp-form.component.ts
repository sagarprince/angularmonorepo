// Core
import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Subject, Observable } from 'rxjs';

// Common
import { ToastrManager } from '@lms/common';

@Component({
  selector: 'lms-verify-otp-form',
  templateUrl: './verify-otp-form.component.html',
  styleUrls: ['./verify-otp-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VerifyOtpFormComponent implements OnInit, OnDestroy {
  private _onDestroy = new Subject<void>();
  otpForm: FormGroup;
  isLoading$: Observable<boolean>;
  isResendOTPLoading$: Observable<boolean>;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrManager
  ) { }

  /**
   * ngOnInit
   * @return void
   */
  public ngOnInit(): void {
    this.setupFormControls();
  }

  /**
   * Setup Login Form Controls
   * @return void
   */
  private setupFormControls(): void {
    this.otpForm = this.fb.group({
      otp: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]),
    });
  }

  /**
   * Resend OTP
   * @return void 
   */
  public onResendOTP(): void {
    this.toastr.dismissAllToastr();
  }

  /**
   * On Verify OTP
   * @param value
   * @param valid
   * @return void 
   */
  public onVerifyOTP({ value, valid }: { value: any; valid: boolean }): void {
    if (valid) {
    }
  }

  /**
   * ngOnDestroy
   * @return void
   */
  public ngOnDestroy(): void {
    this.toastr.dismissAllToastr();
    this._onDestroy.next();
    this._onDestroy.complete();
  }
}
