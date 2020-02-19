// Core
import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Subject, Observable } from 'rxjs';

// Common
import { ToastrManager } from '@lms/common';

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
    private toastr: ToastrManager
  ) { }

  /**
   * ngOnInit
   * @return void
   */
  ngOnInit(): void {
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
    if (valid) {}
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
