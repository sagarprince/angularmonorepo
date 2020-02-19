// Core
import { Component, OnInit, OnDestroy, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { PageEvent, MatPaginator } from '@angular/material';

// GraphQL Type Input
import { FacultiesFiltersInput } from 'generated/lms-graphql';

// Models
import { Faculty } from '../../../../shared/models';

// Common
import { ToastrManager } from '@lms/common';

// Shared Services
import { DialogService } from '../../../../shared/services/dialog.service';

// Components
import { AddEditFacultyComponent } from '../add-edit-faculty/add-edit-faculty.component';

// Faculties Store
import { FacultiesService } from '../../../../store/faculties/faculties.service';
import { FacultiesQuery } from '../../../../store/faculties/faculties.query';

@Component({
  selector: 'lms-faculties-listing',
  templateUrl: './faculties-listing.component.html',
  styleUrls: ['./faculties-listing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FacultiesListingComponent implements OnInit, OnDestroy {
  @ViewChild('paginator', { static: false }) paginator: MatPaginator;
  private _onDestroy = new Subject<void>();
  columns: string[] = ['id', 'name', 'university', 'status', 'action'];
  params: FacultiesFiltersInput = {};
  isLoading: boolean = true;
  faculties$: Observable<any>;
  totalCount$: Observable<number>;

  constructor(
    private cd: ChangeDetectorRef,
    private facultiesService: FacultiesService,
    private facultiesQuery: FacultiesQuery,
    private toastr: ToastrManager,
    private dialogService: DialogService
  ) { }

  /**
   * ngOnInit
   * @return void
   */
  public ngOnInit(): void {
    this.facultiesQuery.isLoading$.pipe(takeUntil(this._onDestroy)).subscribe((v) => {
      this.isLoading = v;
      this.cd.detectChanges();
    });
    this.faculties$ = this.facultiesQuery.entities$;
    this.totalCount$ = this.facultiesQuery.totalCount$;
    this.onFiltersChanged();
    this.onCDEventTriggered();
    this.fetchFaculties();
  }

  /**
   * On Filters Changed
   * @return void
   */
  public onFiltersChanged(): void {
    this.facultiesQuery.filters$.pipe(takeUntil(this._onDestroy)).subscribe((value) => {
      if (value) {
        this.params = {
          offset: 0,
          limit: 10,
          ...value
        };
        this.fetchFaculties();
        if (this.paginator) {
          this.paginator.pageIndex = 0;
        }
      }
    });
  }

  /**
   * On Pagination Change
   * @param event
   * @return void
   */
  public onPaginationChange(event: PageEvent): void {
    this.params.offset = (event.pageIndex) * 10;
    this.fetchFaculties();
  }

  /**
   * On Create Delete Event Triggered
   * @return void
   */
  public onCDEventTriggered(): void {
    this.facultiesQuery.isCDEventTriggered$.pipe(takeUntil(this._onDestroy)).subscribe((value) => {
      if (value) {
        this.params = {
          offset: 0,
          limit: 10,
          ...this.facultiesQuery.filters
        };
        this.fetchFaculties();
        if (this.paginator) {
          this.paginator.pageIndex = 0;
        }
      }
    });
  }

  /**
   * Fetch Faculties
   * @return void 
   */
  public fetchFaculties(): void {
    this.facultiesService.getFacultiesList(this.params)
      .pipe(takeUntil(this._onDestroy))
      .subscribe((_) => { });
  }

  /**
   * On Edit
   * @param faculty
   * @return void
   */
  public onEdit(faculty: Faculty): void {
    this.dialogService.openAddEditFormDialog(AddEditFacultyComponent, 'edit', faculty);
  }

  /**
   * On Delete
   * @param faculty
   * @return void
   */
  public onDelete(faculty: Faculty): void {
    this.dialogService.openDeleteConfirmationDialog({
      message: 'Do you really want to delete this faculty? This process cannot be undone.',
      callback: () => {
        this.facultiesService.deleteFaculty(faculty.id).subscribe(() => {
          this.toastr.successNotification('Faculty deleted successfully');
        });
      }
    });
  }

  /**
   * ngOnDestroy
   * @return void
   */
  public ngOnDestroy(): void {
    this.facultiesService.removeFilters();
    this._onDestroy.next();
    this._onDestroy.complete();
  }
}
