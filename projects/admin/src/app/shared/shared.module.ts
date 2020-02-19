// Core
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// Common
import { LMSCommonModule } from '@lms/common';
// Services
import { RestAPIInterceptorService } from './services/rest-api-interceptor.service';
import { LogoComponent } from './components/logo/logo.component';
import { NoRecordsFoundComponent } from './components/no-records-found/no-records-found.component';

@NgModule({
  imports: [
    CommonModule,
    LMSCommonModule
  ],
  declarations: [LogoComponent, NoRecordsFoundComponent],
  exports: [HttpClientModule, LogoComponent, NoRecordsFoundComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RestAPIInterceptorService,
      multi: true
    }
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: []
    };
  }
}
