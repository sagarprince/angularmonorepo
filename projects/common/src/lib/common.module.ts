// Core
import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule, MatIconModule } from '@angular/material';

// Services
import { ToastrManager } from "./toastr-notifications/toastr.service";
import { ToastrOptions } from "./toastr-notifications/toastr.options";
import { ErrorHandlerService } from './services/error.handler.service';

// Directives
import { DisableLinkDirective } from './directives/disable.link.directive';

// Components
import { ToastrComponent } from "./toastr-notifications/toastr.component";

@NgModule({
    imports: [
        CommonModule,
        MatDialogModule, 
        MatIconModule
    ],
    declarations: [
        ToastrComponent,
        DisableLinkDirective
    ],
    exports: [
        DisableLinkDirective
    ],
    entryComponents: [
        ToastrComponent
    ],
    providers: [
        {
            provide: ErrorHandler,
            useClass: ErrorHandlerService,
        },
        ToastrManager,
        ToastrOptions
    ]
})
export class LMSCommonModule { }
