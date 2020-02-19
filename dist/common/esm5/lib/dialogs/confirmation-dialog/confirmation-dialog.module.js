/**
 * @fileoverview added by tsickle
 * Generated from: lib/dialogs/confirmation-dialog/confirmation-dialog.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// UI Material Modules
import { MatDialogModule, MatIconModule, MatButtonModule } from '@angular/material';
// Services
import { ConfirmationDialogService } from '../confirmation-dialog/confirmation-dialog.service';
// Components
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
var ConfirmationDialogModule = /** @class */ (function () {
    function ConfirmationDialogModule() {
    }
    ConfirmationDialogModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        MatDialogModule,
                        MatIconModule,
                        MatButtonModule
                    ],
                    declarations: [
                        ConfirmationDialogComponent
                    ],
                    exports: [],
                    entryComponents: [
                        ConfirmationDialogComponent
                    ],
                    providers: [
                        ConfirmationDialogService
                    ]
                },] }
    ];
    return ConfirmationDialogModule;
}());
export { ConfirmationDialogModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlybWF0aW9uLWRpYWxvZy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jb21tb24vIiwic291cmNlcyI6WyJsaWIvZGlhbG9ncy9jb25maXJtYXRpb24tZGlhbG9nL2NvbmZpcm1hdGlvbi1kaWFsb2cubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDOztBQUcvQyxPQUFPLEVBQUUsZUFBZSxFQUFFLGFBQWEsRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7QUFHcEYsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sb0RBQW9ELENBQUM7O0FBRy9GLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBRW5HO0lBQUE7SUFrQndDLENBQUM7O2dCQWxCeEMsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLGVBQWU7d0JBQ2YsYUFBYTt3QkFDYixlQUFlO3FCQUNoQjtvQkFDRCxZQUFZLEVBQUU7d0JBQ1osMkJBQTJCO3FCQUM1QjtvQkFDRCxPQUFPLEVBQUUsRUFBRTtvQkFDWCxlQUFlLEVBQUU7d0JBQ2YsMkJBQTJCO3FCQUM1QjtvQkFDRCxTQUFTLEVBQUU7d0JBQ1QseUJBQXlCO3FCQUMxQjtpQkFDRjs7SUFDdUMsK0JBQUM7Q0FBQSxBQWxCekMsSUFrQnlDO1NBQTVCLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcmVcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG4vLyBVSSBNYXRlcmlhbCBNb2R1bGVzXG5pbXBvcnQgeyBNYXREaWFsb2dNb2R1bGUsIE1hdEljb25Nb2R1bGUsIE1hdEJ1dHRvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcblxuLy8gU2VydmljZXNcbmltcG9ydCB7IENvbmZpcm1hdGlvbkRpYWxvZ1NlcnZpY2UgfSBmcm9tICcuLi9jb25maXJtYXRpb24tZGlhbG9nL2NvbmZpcm1hdGlvbi1kaWFsb2cuc2VydmljZSc7XG5cbi8vIENvbXBvbmVudHNcbmltcG9ydCB7IENvbmZpcm1hdGlvbkRpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4uL2NvbmZpcm1hdGlvbi1kaWFsb2cvY29uZmlybWF0aW9uLWRpYWxvZy5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIE1hdERpYWxvZ01vZHVsZSxcbiAgICBNYXRJY29uTW9kdWxlLFxuICAgIE1hdEJ1dHRvbk1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBDb25maXJtYXRpb25EaWFsb2dDb21wb25lbnRcbiAgXSxcbiAgZXhwb3J0czogW10sXG4gIGVudHJ5Q29tcG9uZW50czogW1xuICAgIENvbmZpcm1hdGlvbkRpYWxvZ0NvbXBvbmVudFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBDb25maXJtYXRpb25EaWFsb2dTZXJ2aWNlXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQ29uZmlybWF0aW9uRGlhbG9nTW9kdWxlIHsgfVxuIl19