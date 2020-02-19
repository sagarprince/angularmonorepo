// Core
import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
// Store
import { UiService } from '../../../store/ui/ui.service';
import { AuthService } from '../../../store/auth/auth.service';
import { AuthQuery } from '../../../store/auth/auth.query';

@Component({
  selector: 'lms-student-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  private _onDestroy = new Subject<void>();
  userFullName: string = 'Sagar Pansare';

  constructor(
    private cd: ChangeDetectorRef,
    private uiService: UiService,
    private authService: AuthService,
    private authQuery: AuthQuery
  ) { }

  /**
   * ngOnInit
   * @return void
   */
  public ngOnInit() {
    this.authQuery.getUserFullName().pipe(takeUntil(this._onDestroy)).subscribe((name) => {
      this.userFullName = name;
      this.cd.detectChanges();
    });
  }

  /**
   * On Toggle Menu
   * @return void
   */
  public onToggleMenu(): void {
    this.uiService.toggleSideNav();
  }

  /**
   * On Logout
   * @return void
   */
  public onLogout(): void {
    this.authService.logout();
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
