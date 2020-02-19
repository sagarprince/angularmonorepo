// Core
import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, NgForm } from '@angular/forms';
import { Subject } from 'rxjs';

// GraphQL Type Input
import { UniversitiesFiltersInput } from 'generated/lms-graphql';

// Common
import { GenericConstants } from '@lms/common';

// Universities Store
import { UniversitiesService } from '../../../../store/universities/universities.service';

@Component({
  selector: 'lms-universities-filters',
  templateUrl: './universities-filters.component.html',
  styleUrls: ['./universities-filters.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UniversitiesFiltersComponent implements OnInit, OnDestroy {
  @ViewChild('filterForm', { static: true }) filterForm: NgForm;
  private _onDestroy = new Subject<void>();
  form: FormGroup;
  statusOptions: Array<any> = [];

  constructor(
    private fb: FormBuilder,
    private universitiesService: UniversitiesService
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
    this.setupFormControls();
  }

  /**
   * Setup Form Controls
   * @return void
   */
  private setupFormControls(): void {
    this.form = this.fb.group({
      search: new FormControl(''),
      status: new FormControl('')
    });
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
      const params: UniversitiesFiltersInput = {
        search: value.search
      };
      if (value.status !== '') {
        params.status = value.status;
      }
      this.universitiesService.setFilters(params);
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
