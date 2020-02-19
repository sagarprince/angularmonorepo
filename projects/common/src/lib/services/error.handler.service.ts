// Core
import { Injectable, ErrorHandler } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService implements ErrorHandler {
  constructor() { }

  public handleError(error: any) {
    console.info('DERSBOOK Error: ', error);
  }
}

