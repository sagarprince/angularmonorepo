// Core
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
// Ui Store
import { UiService } from '../store/ui/ui.service';
import { UiQuery } from '../store/ui/ui.query';

@Component({
  selector: 'lms-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent {
  isLoading$: Observable<boolean>;

  constructor(private uiService: UiService, private uiQuery: UiQuery) {
    this.uiService.onRoutesChanged();
  }

  /**
   * ngOnInit
   * @return void
   */
  public ngOnInit(): void {
    this.isLoading$ = this.uiQuery.isLoading$;
  }

  /**
   * ngOnDestroy
   * @return void
   */
  public ngOnDestroy(): void {
    this.uiService.onDestroy.next();
    this.uiService.onDestroy.complete();
  }
}
