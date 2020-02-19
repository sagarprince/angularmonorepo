// Core
import { Component, OnInit, OnDestroy, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { PageEvent, MatPaginator } from '@angular/material';

// GraphQL Type Input
import { UniversitiesFiltersInput } from 'generated/lms-graphql';

// Models
import { University } from '../../../../shared/models';

// Common
import { ToastrManager } from '@lms/common';

// Shared Services
import { DialogService } from '../../../../shared/services/dialog.service';

// Components
import { AddEditUniversityComponent } from '../add-edit-university/add-edit-university.component';

// Universities Store
import { UniversitiesService } from '../../../../store/universities/universities.service';
import { UniversitiesQuery } from '../../../../store/universities/universities.query';

@Component({
  selector: 'lms-universities-listing',
  templateUrl: './universities-listing.component.html',
  styleUrls: ['./universities-listing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UniversitiesListingComponent implements OnInit, OnDestroy {
  @ViewChild('paginator', { static: false }) paginator: MatPaginator;
  private _onDestroy = new Subject<void>();
  columns: string[] = ['id', 'name', 'status', 'action'];
  params: UniversitiesFiltersInput = {};
  isLoading: boolean;
  universities$: Observable<any>;
  totalCount$: Observable<number>;

  constructor(
    private cd: ChangeDetectorRef,
    private universitiesService: UniversitiesService,
    private universitiesQuery: UniversitiesQuery,
    private toastr: ToastrManager,
    private dialogService: DialogService
  ) { }

  /**
   * ngOnInit
   * @return void
   */
  public ngOnInit(): void {
    this.universitiesQuery.isLoading$.pipe(takeUntil(this._onDestroy)).subscribe((v) => {
      this.isLoading = v;
      this.cd.detectChanges();
    });
    this.universities$ = this.universitiesQuery.entities$;
    this.totalCount$ = this.universitiesQuery.totalCount$;
    this.onFiltersChanged();
    this.onCDEventTriggered();
    this.fetchUniversities();
  }

  /**
   * On Filters Changed
   * @return void
   */
  public onFiltersChanged(): void {
    this.universitiesQuery.filters$.pipe(takeUntil(this._onDestroy)).subscribe((value) => {
      if (value) {
        this.params = {
          offset: 0,
          limit: 10,
          ...value
        };
        this.fetchUniversities();
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
    this.fetchUniversities();
  }

  /**
   * On Create Delete Event Triggered
   * @return void
   */
  public onCDEventTriggered(): void {
    this.universitiesQuery.isCDEventTriggered$.pipe(takeUntil(this._onDestroy)).subscribe((value) => {
      if (value) {
        this.params = {
          offset: 0,
          limit: 10,
          ...this.universitiesQuery.filters
        };
        this.fetchUniversities();
        if (this.paginator) {
          this.paginator.pageIndex = 0;
        }
      }
    });
  }

  /**
   * Fetch Universities
   * @return void 
   */
  public fetchUniversities(): void {
    this.universitiesService.getUniversitiesList(this.params)
      .pipe(takeUntil(this._onDestroy))
      .subscribe((_) => { });
  }

  /**
   * On Edit
   * @param university
   * @return void
   */
  public onEdit(university: University): void {
    this.dialogService.openAddEditFormDialog(AddEditUniversityComponent, 'edit', university);
  }

  /**
   * On Delete
   * @param university
   * @return void
   */
  public onDelete(university: University): void {
    this.dialogService.openDeleteConfirmationDialog({
      message: 'Do you really want to delete this university? It also delete associated faculties with university and this process cannot be undone.',
      callback: () => {
        this.universitiesService.deleteFaculty(university.id).subscribe(() => {
          this.toastr.successNotification('University deleted successfully');
        });
      }
    });
  }

  /**
   * ngOnDestroy
   * @return void
   */
  public ngOnDestroy(): void {
    this.universitiesService.removeFilters();
    this._onDestroy.next();
    this._onDestroy.complete();
  }
}
