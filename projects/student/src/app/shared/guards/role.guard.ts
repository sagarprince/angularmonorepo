// Core
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
// Store
// import { AuthQuery } from '../../store/auth/auth.query';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor() { }

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> | boolean {
    return true;
  }
}
