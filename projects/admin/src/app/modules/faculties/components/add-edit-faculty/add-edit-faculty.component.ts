// Core
import { Component, Inject, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Subject, Observable } from 'rxjs';
import { takeUntil, finalize } from 'rxjs/operators';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

// Models
import { Faculty, University } from '../../../../shared/models';

// Common
import { GenericConstants, ToastrManager } from '@lms/common';

// Faculties Store
import { FacultiesService } from '../../../../store/faculties/faculties.service';
import { FacultiesQuery } from '../../../../store/faculties/faculties.query';

@Component({
  selector: 'lms-add-edit-faculty',
  templateUrl: './add-edit-faculty.component.html',
  styleUrls: ['./add-edit-faculty.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddEditFacultyComponent implements OnInit, OnDestroy {
  private _onDestroy = new Subject<void>();
  form: FormGroup;
  isLoading$: Observable<boolean>;
  isUniversitiesLoading$: Observable<boolean>;
  mode: string = 'add';
  statusOptions: Array<any> = [];
  universities$: Observable<University[]>;

  constructor(
    private fb: FormBuilder,
    private ref: MatDialogRef<AddEditFacultyComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { mode: string, entity: Faculty },
    private facultiesService: FacultiesService,
    private facultiesQuery: FacultiesQuery,
    private toastr: ToastrManager
  ) {
    this.statusOptions = GenericConstants.statusOptions;
  }

  /**
   * ngOnInit
   * @return void
   */
  public ngOnInit(): void {
    this.isLoading$ = this.facultiesQuery.isCRUDLoading$;
    this.isUniversitiesLoading$ = this.facultiesQuery.isUniversitiesLoading$;
    this.universities$ = this.facultiesQuery.allUniversities$;
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
      university: new FormControl('', Validators.required),
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
      const payload = {
        ...value,
        universityId: value.university.id
      };
      delete payload.university;
      if (this.mode == 'add') {
        delete payload.id;
        this.facultiesService.addFaculty(payload).pipe(takeUntil(this._onDestroy)).subscribe(() => {
          this.close();
          this.toastr.successNotification('Faculty added successfully');
        });
      } else {
        this.facultiesService.updateFaculty(payload, value.university).pipe(takeUntil(this._onDestroy)).subscribe(() => {
          this.toastr.successNotification('Faculty updated successfully.');
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
