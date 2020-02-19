// Core
import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Subject, Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

// Common
import { ToastrManager, MustNotMatch, MustMatch, RegExpPattern, ValidationMessages } from '@lms/common';

// Auth Store
import { AuthService } from '../../../../store/auth/auth.service';
import { AuthQuery } from '../../../../store/auth/auth.query';

@Component({
  selector: 'lms-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChangePasswordComponent implements OnInit, OnDestroy {
  private _onDestroy = new Subject<void>();
  form: FormGroup;
  isLoading$: Observable<boolean>;
  invalidPasswordMessage: string = '';
  passwordNotMatchMessage: string = '';
  passwordMatchMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private authQuery: AuthQuery,
    private toastr: ToastrManager
  ) { }

  /**
   * ngOnInit
   * @return void
   */
  public ngOnInit(): void {
    this.isLoading$ = this.authQuery.isLoading$;
    this.invalidPasswordMessage = ValidationMessages.password;
    this.passwordNotMatchMessage = ValidationMessages.passwordNotMatch;
    this.passwordMatchMessage = ValidationMessages.passwordMatch;
    this.setupFormControls();
  }

  /**
   * Setup Form Controls
   * @return void
   */
  private setupFormControls(): void {
    this.form = this.fb.group({
      id: this.authQuery.profileInfo.id,
      oldPassword: new FormControl('', [Validators.required]),
      newPassword: new FormControl('', [Validators.required, Validators.pattern(RegExpPattern.validPassword)]),
      confirmPassword: new FormControl('', [Validators.required])
    }, {
      validator: [
        MustNotMatch('oldPassword', 'newPassword'),
        MustMatch('newPassword', 'confirmPassword')
      ]
    });
  }

  /**
   * On Save
   * @param value
   * @param valid
   * @return void 
   */
  public onSave({ value, valid }: { value: any; valid: boolean }): void {
    if (valid) {
      delete value.confirmPassword;
      this.authService.updatePassword(value).pipe(takeUntil(this._onDestroy)).subscribe(() => {
        this.toastr.successNotification('Password updated successfully.');

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
