// Core
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// Common
import { LMSCommonModule } from '@lms/common';
// Services
import { RestAPIInterceptorService } from './services/rest-api-interceptor.service';
import { LogoComponent } from './components/logo/logo.component';

@NgModule({
  imports: [
    CommonModule,
    LMSCommonModule
  ],
  declarations: [LogoComponent],
  exports: [HttpClientModule, LogoComponent],
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
