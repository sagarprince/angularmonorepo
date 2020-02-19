// Core
import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Subject, Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

// Common
import { ToastrManager } from '@lms/common';

// Auth Store
import { AuthService } from '../../../../store/auth/auth.service';
import { AuthQuery } from '../../../../store/auth/auth.query';

@Component({
  selector: 'lms-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditProfileComponent implements OnInit, OnDestroy {
  private _onDestroy = new Subject<void>();
  form: FormGroup;
  isLoading$: Observable<boolean>;
  showControlStatusIcon: boolean = false;

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
    this.setupFormControls();
    const profileInfo = this.authQuery.profileInfo;
    if (profileInfo) {
      this.form.patchValue(profileInfo);
    }
  }

  /**
   * Setup Form Controls
   * @return void
   */
  private setupFormControls(): void {
    this.form = this.fb.group({
      id: -1,
      email: new FormControl({ value: '', disabled: true }, [Validators.required, Validators.email]),
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      status: false,
      role: ''
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
      this.authService.updateProfile(value).pipe(takeUntil(this._onDestroy)).subscribe(() => {
        this.toastr.successNotification('Profile updated successfully.');
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
