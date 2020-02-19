// Core
import { Component, OnInit, ChangeDetectionStrategy, OnDestroy, ChangeDetectorRef, ViewRef } from '@angular/core';
import { Observable } from 'rxjs';
// Ui Store
import { UiQuery } from '../../store/ui/ui.query';
import { distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'lms-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutComponent implements OnInit, OnDestroy {
  public isSideNavOpened: boolean = false;
  public sideNavMode$: Observable<string>;

  constructor(
    private cd: ChangeDetectorRef,
    private uiQuery: UiQuery
  ) { }

  /**
   * ngOnInit
   * @return void
   */
  public ngOnInit(): void {
    this.sideNavMode$ = this.uiQuery.sideNavMode$;
    this.uiQuery.isSideNavOpened$.pipe(
      distinctUntilChanged()
    ).subscribe((opened) => {
      this.isSideNavOpened = opened;
      if (this.cd && !(this.cd as ViewRef).destroyed) {
        this.cd.detectChanges();
      }
    });
  }

  /**
   * ngOnDestroy
   * @return void
   */
  public ngOnDestroy(): void { }
}
