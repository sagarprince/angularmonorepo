// Core
import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators, AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { Subject, Observable, of } from 'rxjs';
import { takeUntil, map, catchError, first } from 'rxjs/operators';

// Common
import { ToastrManager, MustMatch, RegExpPattern, GenericConstants, ValidationMessages } from '@lms/common';

@Component({
  selector: 'lms-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterComponent implements OnInit, OnDestroy {
  private _onDestroy = new Subject<void>();
  registerForm: FormGroup;
  isLoading$: Observable<boolean>;
  isEmailExistLoading$: Observable<boolean>;
  invalidPasswordMessage: string = '';
  passwordNotMatchMessage: string = '';
  genderOptions: Array<any> = [];
  educationLevelOptions: Array<any> = [];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrManager
  ) { }

  /**
   * ngOnInit
   * @return void
   */
  ngOnInit() {
    this.invalidPasswordMessage = ValidationMessages.password;
    this.passwordNotMatchMessage = ValidationMessages.passwordNotMatch;
    this.genderOptions = GenericConstants.genderOptions;
    this.setupFormControls();
  }

  /**
   * Setup Login Form Controls
   * @return void
   */
  private setupFormControls(): void {
    this.registerForm = this.fb.group({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', {
        validators: [Validators.required, Validators.email],
        asyncValidators: []
      }),
      password: new FormControl('', [Validators.required, Validators.pattern(RegExpPattern.validPassword)]),
      confirmPassword: new FormControl('', [Validators.required]),
      phone: new FormControl(''),
      birthday: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      educationDocuments: new FormControl('', [Validators.required]),
      university: new FormControl('', [Validators.required]),
      faculty: new FormControl('', [Validators.required]),
      about: new FormControl('', [Validators.required])
    }, {
      validator: MustMatch('password', 'confirmPassword')
    });
  }

  /**
   * On Register
   * @param value
   * @param valid
   * @return void 
   */
  public onRegister({ value, valid }: { value: any; valid: boolean }): void {
    if (valid) {
      console.log(value);
      this.router.navigate(['/dashboard']);
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
