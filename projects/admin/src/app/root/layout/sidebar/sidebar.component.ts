// Core
import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
// Models
import { MenuItem } from '../../../shared/models';
// Menu Service
import { MenusService } from '../menus.service';

@Component({
  selector: 'lms-student-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarComponent implements OnInit, OnDestroy {
  public menus: Array<MenuItem> = [];

  constructor(
    private menusService: MenusService
  ) { }

  /**
   * ngOnInit
   * @return void
   */
  public ngOnInit(): void {
    this.menus = this.menusService.menus;
  }

  /**
   * ngOnDestroy
   * @return void
   */
  public ngOnDestroy(): void { }
}
