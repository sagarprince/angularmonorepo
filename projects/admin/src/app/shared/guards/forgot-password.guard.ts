// Core
import { Injectable } from '@angular/core';
import { CanActivate, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
// Store
import { AuthQuery } from '../../store/auth/auth.query';
import { ForgotPasswordQuery } from '../../store/forgot-password/forgot-password.query';

@Injectable({
  providedIn: 'root'
})
export class ForgotPasswordGuard implements CanActivate {
  constructor(
    private authQuery: AuthQuery,
    private forgotPasswordQuery: ForgotPasswordQuery,
    private router: Router
  ) { }

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this.forgotPasswordQuery.isUserIdExist) {
      this.router.navigate([this.authQuery.isLoggedIn() ? "dashboard" : "/auth/login"]);
      return false;
    }
    return true;
  }
}
