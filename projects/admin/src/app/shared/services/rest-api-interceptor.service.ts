// Core
import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize, map } from 'rxjs/operators';
// Environment Config
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RestAPIInterceptorService implements HttpInterceptor {
  private apiBaseUrl: string = environment.apiBaseUrl;

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url.indexOf('/graphql') === -1) {
      const apiReq = req.clone({ url: this.apiBaseUrl + req.url });
      return next.handle(apiReq).pipe(
        map(event => {
          return event;
        }),
        catchError((error: HttpErrorResponse) => {
          if (error && typeof error.error !== 'undefined') {
            return throwError(error.error);
          }
          return throwError({
            status: 'error',
            message: 'Something went wrong, please try again.'
          });
        }),
        finalize(() => { })
      );
    }
    return next.handle(req.clone());
  }
}
