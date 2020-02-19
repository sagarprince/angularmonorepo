// Core
import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";

// Services
import { ToastrManager } from "./toastr.service";
import { ToastrOptions } from "./toastr.options";

// Components
import { ToastrComponent } from "./toastr.component";

@NgModule({
  imports: [CommonModule],
  declarations: [ToastrComponent],
  entryComponents: [ToastrComponent]
})
export class ToastrModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ToastrModule,
      providers: [ToastrManager, ToastrOptions]
    };
  }
}
