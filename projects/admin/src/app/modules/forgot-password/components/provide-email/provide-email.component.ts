// Core
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Subject, Observable } from 'rxjs';

// Common
import { ToastrManager } from '@lms/common';

// Auth Store
import { ForgotPasswordService } from '../../../../store/forgot-password/forgot-password.service';
import { ForgotPasswordQuery } from '../../../../store/forgot-password/forgot-password.query';

@Component({
  selector: 'lms-provide-email',
  templateUrl: './provide-email.component.html',
  styleUrls: ['./provide-email.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProvideEmailComponent implements OnInit {
  private _onDestroy = new Subject<void>();
  form: FormGroup;
  isLoading$: Observable<boolean>;

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
    this.setupFormControls();
  }

  /**
   * Setup Login Form Controls
   * @return void
   */
  private setupFormControls(): void {
    this.form = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
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
      this.forgotPasswordService.sendOTP(value.email).subscribe((_) => {
        this.toastr.successNotification("OTP has been sent to your email id.");
        this.router.navigate(["forgot-password/reset-password"]);
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
