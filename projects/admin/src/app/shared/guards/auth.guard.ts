// Core
import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, Route } from '@angular/router';
import { Observable } from 'rxjs';
// Store
import { AuthQuery } from '../../store/auth/auth.query';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad, CanActivate {
  constructor(private authQuery: AuthQuery, private router: Router) { }

  canLoad(route: Route): boolean {
    if (route.path === 'auth' && this.authQuery.isLoggedIn()) {
      this.router.navigate(["/dashboard"]);
      return false;
    } else {
      if (route.path !== 'auth' && !this.authQuery.isLoggedIn()) {
        this.router.navigate(["/auth/login"]);
        return false;
      } else {
        return true;
      }
    }
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (state.url.indexOf('auth') > -1) {
      if (this.authQuery.isLoggedIn()) {
        this.router.navigate(["/dashboard"]);
        return false;
      } else {
        return true;
      }
    } else {
      return true;
    }
  }
}