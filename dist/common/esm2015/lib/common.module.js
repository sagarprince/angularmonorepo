/**
 * @fileoverview added by tsickle
 * Generated from: lib/common.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
export class LMSCommonModule {
}
LMSCommonModule.decorators = [
    { type: NgModule, args: [{
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
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NvbW1vbi8iLCJzb3VyY2VzIjpbImxpYi9jb21tb24ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLE9BQU8sRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZUFBZSxFQUFFLGFBQWEsRUFBRSxNQUFNLG1CQUFtQixDQUFDOztBQUduRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDdEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDOztBQUd2RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQzs7QUFHM0UsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBMkIxRSxNQUFNLE9BQU8sZUFBZTs7O1lBekIzQixRQUFRLFNBQUM7Z0JBQ04sT0FBTyxFQUFFO29CQUNMLFlBQVk7b0JBQ1osZUFBZTtvQkFDZixhQUFhO2lCQUNoQjtnQkFDRCxZQUFZLEVBQUU7b0JBQ1YsZUFBZTtvQkFDZixvQkFBb0I7aUJBQ3ZCO2dCQUNELE9BQU8sRUFBRTtvQkFDTCxvQkFBb0I7aUJBQ3ZCO2dCQUNELGVBQWUsRUFBRTtvQkFDYixlQUFlO2lCQUNsQjtnQkFDRCxTQUFTLEVBQUU7b0JBQ1A7d0JBQ0ksT0FBTyxFQUFFLFlBQVk7d0JBQ3JCLFFBQVEsRUFBRSxtQkFBbUI7cUJBQ2hDO29CQUNELGFBQWE7b0JBQ2IsYUFBYTtpQkFDaEI7YUFDSiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcmVcbmltcG9ydCB7IE5nTW9kdWxlLCBFcnJvckhhbmRsZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBNYXREaWFsb2dNb2R1bGUsIE1hdEljb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5cbi8vIFNlcnZpY2VzXG5pbXBvcnQgeyBUb2FzdHJNYW5hZ2VyIH0gZnJvbSBcIi4vdG9hc3RyLW5vdGlmaWNhdGlvbnMvdG9hc3RyLnNlcnZpY2VcIjtcbmltcG9ydCB7IFRvYXN0ck9wdGlvbnMgfSBmcm9tIFwiLi90b2FzdHItbm90aWZpY2F0aW9ucy90b2FzdHIub3B0aW9uc1wiO1xuaW1wb3J0IHsgRXJyb3JIYW5kbGVyU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvZXJyb3IuaGFuZGxlci5zZXJ2aWNlJztcblxuLy8gRGlyZWN0aXZlc1xuaW1wb3J0IHsgRGlzYWJsZUxpbmtEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvZGlzYWJsZS5saW5rLmRpcmVjdGl2ZSc7XG5cbi8vIENvbXBvbmVudHNcbmltcG9ydCB7IFRvYXN0ckNvbXBvbmVudCB9IGZyb20gXCIuL3RvYXN0ci1ub3RpZmljYXRpb25zL3RvYXN0ci5jb21wb25lbnRcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZSxcbiAgICAgICAgTWF0RGlhbG9nTW9kdWxlLCBcbiAgICAgICAgTWF0SWNvbk1vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIFRvYXN0ckNvbXBvbmVudCxcbiAgICAgICAgRGlzYWJsZUxpbmtEaXJlY3RpdmVcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgRGlzYWJsZUxpbmtEaXJlY3RpdmVcbiAgICBdLFxuICAgIGVudHJ5Q29tcG9uZW50czogW1xuICAgICAgICBUb2FzdHJDb21wb25lbnRcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7XG4gICAgICAgICAgICBwcm92aWRlOiBFcnJvckhhbmRsZXIsXG4gICAgICAgICAgICB1c2VDbGFzczogRXJyb3JIYW5kbGVyU2VydmljZSxcbiAgICAgICAgfSxcbiAgICAgICAgVG9hc3RyTWFuYWdlcixcbiAgICAgICAgVG9hc3RyT3B0aW9uc1xuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgTE1TQ29tbW9uTW9kdWxlIHsgfVxuIl19