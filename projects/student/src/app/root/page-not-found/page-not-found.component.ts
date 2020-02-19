// Core
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'lms-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent {
  constructor(private router: Router) { }

  /**
   * On Go Home
   * @return void
   */
  onGoHome(): void {
    this.router.navigate(['/auth/login']);
  }

}
