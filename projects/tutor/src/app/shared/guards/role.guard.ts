// Core
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
// Store
import { AuthQuery } from '../../store/auth/auth.query';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor(
    private authQuery: AuthQuery
  ) { }

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> | boolean {
    const roles = (route.data.roles || []) as Array<string>;
    const userRole = this.authQuery.role;
    if (roles.indexOf(userRole) === -1) {
      return false;
    }
    return true;
  }
}
