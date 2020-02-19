// Core
import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, Route } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad, CanActivate {
  constructor() { }

  canLoad(route: Route): boolean {
    return true;
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
}

@Injectable({
  providedIn: 'root'
})
export class RegistrationGuard implements CanLoad, CanActivate {
  constructor() { }

  canLoad(route: Route): boolean {
    return true;
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
}

@Injectable({
  providedIn: 'root'
})
export class VerifyOtpGuard implements CanLoad, CanActivate {
  constructor(
    private router: Router
  ) { }

  private canGuard(): boolean {
    return true;
  }

  canLoad(): boolean {
    return this.canGuard();
  }

  canActivate(): boolean {
    return this.canGuard();
  }
}
