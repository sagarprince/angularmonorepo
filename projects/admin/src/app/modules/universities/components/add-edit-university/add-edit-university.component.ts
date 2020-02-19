// Core
import { Component, Inject, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Subject, Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

// Models
import { University } from '../../../../shared/models';

// Common
import { GenericConstants, ToastrManager } from '@lms/common';

// Universities Store
import { UniversitiesService } from '../../../../store/universities/universities.service';
import { UniversitiesQuery } from '../../../../store/universities/universities.query';

@Component({
  selector: 'lms-add-edit-university',
  templateUrl: './add-edit-university.component.html',
  styleUrls: ['./add-edit-university.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddEditUniversityComponent implements OnInit, OnDestroy {
  private _onDestroy = new Subject<void>();
  form: FormGroup;
  isLoading$: Observable<boolean>;
  mode: string = 'add';
  statusOptions: Array<any> = [];

  constructor(
    private fb: FormBuilder,
    private ref: MatDialogRef<AddEditUniversityComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { mode: string, entity: University },
    private universitiesService: UniversitiesService,
    private universitiesQuery: UniversitiesQuery,
    private toastr: ToastrManager
  ) {
    this.statusOptions = GenericConstants.statusOptions;
  }

  /**
   * ngOnInit
   * @return void
   */
  public ngOnInit(): void {
    this.isLoading$ = this.universitiesQuery.isCRUDLoading$;
    this.mode = this.data.mode;
    this.setupFormControls();
    if (this.mode == 'edit' && this.data.entity) {
      this.form.patchValue(this.data.entity);
    }
  }

  /**
   * Setup Form Controls
   * @return void
   */
  private setupFormControls(): void {
    this.form = this.fb.group({
      id: -1,
      name: new FormControl('', [Validators.required]),
      status: new FormControl('', [Validators.required])
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
      if (this.mode == 'add') {
        delete value.id;
        this.universitiesService.addUniversity(value).pipe(takeUntil(this._onDestroy)).subscribe(() => {
          this.close();
          this.toastr.successNotification('University added successfully');
        });
      } else {
        this.universitiesService.updateUniversity(value).pipe(takeUntil(this._onDestroy)).subscribe(() => {
          this.toastr.successNotification('University updated successfully.');
        });
      }
    }
  }


  /**
   * On Dialog Close
   * @return void
   */
  public close(): void {
    this.ref.close();
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
