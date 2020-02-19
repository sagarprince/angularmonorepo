// Core
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Subject, Observable } from 'rxjs';

// Common
import { ToastrManager, MustMatch, RegExpPattern, ValidationMessages } from '@lms/common';

// Auth Store
import { ForgotPasswordService } from '../../../../store/forgot-password/forgot-password.service';
import { ForgotPasswordQuery } from '../../../../store/forgot-password/forgot-password.query';

@Component({
  selector: 'lms-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResetPasswordComponent implements OnInit {
  private _onDestroy = new Subject<void>();
  form: FormGroup;
  isLoading$: Observable<boolean>;
  isResendOTPLoading$: Observable<boolean>;
  invalidPasswordMessage: string = '';
  passwordNotMatchMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private forgotPasswordService: ForgotPasswordService,
    private forgotPasswordQuery: ForgotPasswordQuery,
    private toastr: ToastrManager
  ) { }

  /**
   * ngOnInit
   * @return void
   */
  public ngOnInit(): void {
    this.isLoading$ = this.forgotPasswordQuery.isLoading$;
    this.isResendOTPLoading$ = this.forgotPasswordQuery.isResendOTPLoading$;
    this.invalidPasswordMessage = ValidationMessages.password;
    this.passwordNotMatchMessage = ValidationMessages.passwordNotMatch;
    this.setupFormControls();
  }

  /**
   * Setup Login Form Controls
   * @return void
   */
  private setupFormControls(): void {
    this.form = this.fb.group({
      otp: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]),
      newPassword: new FormControl('', [Validators.required, Validators.pattern(RegExpPattern.validPassword)]),
      confirmPassword: new FormControl('', [Validators.required]),
    }, {
      validator: MustMatch('newPassword', 'confirmPassword')
    });
  }

  /**
   * Resend OTP
   * @return void 
   */
  public onResendOTP(): void {
    this.forgotPasswordService.resendOTP().subscribe((_) => {
      this.toastr.successNotification("New OTP has been sent to your email id.");
    });
  }

  /**
   * On Submit
   * @param value
   * @param valid
   * @return void 
   */
  public onSubmit({ value, valid }: { value: any; valid: boolean }): void {
    if (valid) {
      this.forgotPasswordService.resetPassword(value.otp, value.newPassword).subscribe((_) => {
        this.toastr.successNotification("Your password has been updated successfully, please login with new password.");
        this.router.navigate(["auth/login"]);
      });
    }
  }

  /**
   * ngOnDestroy
   * @return void
   */
  public ngOnDestroy(): void {
    this._onDestroy.next();
    this._onDestroy.complete();
  }

}
