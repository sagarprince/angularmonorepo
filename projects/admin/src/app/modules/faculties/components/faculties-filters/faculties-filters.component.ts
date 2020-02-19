// Core
import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, NgForm } from '@angular/forms';
import { Subject, Observable } from 'rxjs';
import { takeUntil, finalize } from 'rxjs/operators';

// GraphQL Type Input
import { FacultiesFiltersInput } from 'generated/lms-graphql';

// Models
import { University } from '../../../../shared/models';

// Common
import { GenericConstants } from '@lms/common';

// Faculties Store
import { FacultiesService } from '../../../../store/faculties/faculties.service';
import { FacultiesQuery } from '../../../../store/faculties/faculties.query';

@Component({
  selector: 'lms-faculties-filters',
  templateUrl: './faculties-filters.component.html',
  styleUrls: ['./faculties-filters.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FacultiesFiltersComponent implements OnInit, OnDestroy {
  @ViewChild('filterForm', { static: true }) filterForm: NgForm;
  private _onDestroy = new Subject<void>();
  form: FormGroup;
  isUniversitiesLoading$: Observable<boolean>;
  statusOptions: Array<any> = [];
  universities$: Observable<University[]>;

  constructor(
    private fb: FormBuilder,
    private facultiesService: FacultiesService,
    private facultiesQuery: FacultiesQuery
  ) {
    this.statusOptions = [
      {
        id: "",
        text: "All"
      },
      ...GenericConstants.statusOptions
    ];
  }

  /**
   * ngOnInit
   * @return void
   */
  public ngOnInit(): void {
    this.isUniversitiesLoading$ = this.facultiesQuery.isUniversitiesLoading$;
    this.universities$ = this.facultiesQuery.allUniversities$;
    this.setupFormControls();
    this.fetchAllUniversities();
  }

  /**
   * Setup Form Controls
   * @return void
   */
  private setupFormControls(): void {
    this.form = this.fb.group({
      search: new FormControl(''),
      universityId: new FormControl(''),
      status: new FormControl('')
    });
  }

  /**
   * Fetch All Universities
   * @return void 
   */
  public fetchAllUniversities(): void {
    this.form.get('universityId').disable();
    this.facultiesService.getAllUniversitiesList()
      .pipe(
        takeUntil(this._onDestroy),
        finalize(() => {
          this.form.get('universityId').enable();
        })
      )
      .subscribe((_) => { });
  }

  /**
   * On University Change
   * @return void
   */
  public onUniversityChange(_): void {
    setTimeout(() => this.filterForm.ngSubmit.emit(), 400);
  }

  /**
   * On Status Change
   * @return void
   */
  public onStatusChange(_): void {
    setTimeout(() => this.filterForm.ngSubmit.emit(), 400);
  }

  /**
   * On Submit
   * @param value
   * @param valid
   * @return void 
   */
  public onSubmit({ value, valid }: { value: any; valid: boolean }): void {
    if (valid) {
      const params: FacultiesFiltersInput = {
        search: value.search
      };
      if (value.universityId !== '') {
        params.universityId = value.universityId;
      }
      if (value.status !== '') {
        params.status = value.status;
      }
      this.facultiesService.setFilters(params);
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
