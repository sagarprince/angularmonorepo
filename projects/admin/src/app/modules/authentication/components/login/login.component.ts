// Core
import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

// Common
import { ToastrManager } from '@lms/common';

// Auth Store
import { AuthService } from '../../../../store/auth/auth.service';
import { AuthQuery } from '../../../../store/auth/auth.query';

@Component({
  selector: 'lms-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit, OnDestroy {
  private _onDestroy = new Subject<void>();
  loginForm: FormGroup;
  isLoading$: Observable<boolean>;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private authQuery: AuthQuery,
    private toastr: ToastrManager
  ) { }

  /**
   * ngOnInit
   * @return void
   */
  ngOnInit(): void {
    this.isLoading$ = this.authQuery.isLoading$;
    this.setupFormControls();
  }

  /**
   * Setup Login Form Controls
   * @return void
   */
  private setupFormControls(): void {
    this.loginForm = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }

  /**
   * On Login
   * @param value
   * @param valid
   * @return void 
   */
  public onLogin({ value, valid }: { value: any; valid: boolean }): void {
    if (valid) {
      this.authService.login(value).pipe(takeUntil(this._onDestroy)).subscribe(() => {
        this.router.navigate(["dashboard"]);
      });
    }
  }

  /**
   * ngOnDestroy
   * @return void
   */
  ngOnDestroy(): void {
    this.toastr.dismissAllToastr();
    this._onDestroy.next();
    this._onDestroy.complete();
  }
}
