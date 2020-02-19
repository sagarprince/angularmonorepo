/**
 * @fileoverview added by tsickle
 * Generated from: lib/form-fields/form-fields.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// UI Material Modules
import { MatFormFieldModule, MatIconModule, MatButtonModule, MatInputModule, MatSelectModule, MatDatepickerModule, MatCheckboxModule, MatProgressSpinnerModule } from '@angular/material';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
// Components
import { InputComponent } from './input/input.component';
import { FormErrorHandlingPipe } from './pipes/form-error-handling.pipe';
import { SelectComponent } from './select/select.component';
import { ButtonComponent } from './button/button.component';
import { FileInputComponent } from './file-input/file-input.component';
import { CustomChipCheckboxComponent } from './custom-chip-checkbox/custom-chip-checkbox.component';
// Date Formats
/** @type {?} */
export const CUSTOM_DATE_FORMATS = {
    parse: {
        dateInput: 'DD-MM-YYYY',
    },
    display: {
        dateInput: 'DD-MM-YYYY',
        monthYearLabel: 'MMM YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MMMM YYYY',
    },
};
const ɵ0 = { useUtc: true };
export class FormFieldsModule {
}
FormFieldsModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    ReactiveFormsModule,
                    MatFormFieldModule,
                    MatIconModule,
                    MatButtonModule,
                    MatInputModule,
                    MatSelectModule,
                    MatDatepickerModule,
                    MatMomentDateModule,
                    MatCheckboxModule,
                    MatProgressSpinnerModule
                ],
                declarations: [InputComponent, FormErrorHandlingPipe, SelectComponent, ButtonComponent, FileInputComponent, CustomChipCheckboxComponent],
                exports: [MatIconModule, MatButtonModule, MatCheckboxModule, InputComponent, SelectComponent, ButtonComponent, FileInputComponent, CustomChipCheckboxComponent],
                providers: [
                    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
                    { provide: MAT_DATE_FORMATS, useValue: CUSTOM_DATE_FORMATS },
                    { provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: ɵ0 }
                ]
            },] }
];
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1maWVsZHMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY29tbW9uLyIsInNvdXJjZXMiOlsibGliL2Zvcm0tZmllbGRzL2Zvcm0tZmllbGRzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0FBR2xFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxhQUFhLEVBQUUsZUFBZSxFQUFFLGNBQWMsRUFBRSxlQUFlLEVBQUUsbUJBQW1CLEVBQUUsaUJBQWlCLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMxTCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN2RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsK0JBQStCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN0RyxPQUFPLEVBQUUsV0FBVyxFQUFFLGdCQUFnQixFQUFFLGVBQWUsRUFBRSxNQUFNLHdCQUF3QixDQUFDOztBQUl4RixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDekQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDekUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzVELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN2RSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSx1REFBdUQsQ0FBQzs7O0FBR3BHLE1BQU0sT0FBTyxtQkFBbUIsR0FBRztJQUNqQyxLQUFLLEVBQUU7UUFDTCxTQUFTLEVBQUUsWUFBWTtLQUN4QjtJQUNELE9BQU8sRUFBRTtRQUNQLFNBQVMsRUFBRSxZQUFZO1FBQ3ZCLGNBQWMsRUFBRSxVQUFVO1FBQzFCLGFBQWEsRUFBRSxJQUFJO1FBQ25CLGtCQUFrQixFQUFFLFdBQVc7S0FDaEM7Q0FDRjtXQXNCeUQsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO0FBRzFFLE1BQU0sT0FBTyxnQkFBZ0I7OztZQXZCNUIsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLFdBQVc7b0JBQ1gsbUJBQW1CO29CQUNuQixrQkFBa0I7b0JBQ2xCLGFBQWE7b0JBQ2IsZUFBZTtvQkFDZixjQUFjO29CQUNkLGVBQWU7b0JBQ2YsbUJBQW1CO29CQUNuQixtQkFBbUI7b0JBQ25CLGlCQUFpQjtvQkFDakIsd0JBQXdCO2lCQUN6QjtnQkFDRCxZQUFZLEVBQUUsQ0FBQyxjQUFjLEVBQUUscUJBQXFCLEVBQUUsZUFBZSxFQUFFLGVBQWUsRUFBRSxrQkFBa0IsRUFBRSwyQkFBMkIsQ0FBQztnQkFDeEksT0FBTyxFQUFFLENBQUMsYUFBYSxFQUFFLGVBQWUsRUFBRSxpQkFBaUIsRUFBRSxjQUFjLEVBQUUsZUFBZSxFQUFFLGVBQWUsRUFBRSxrQkFBa0IsRUFBRSwyQkFBMkIsQ0FBQztnQkFDL0osU0FBUyxFQUFFO29CQUNULEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsaUJBQWlCLEVBQUUsSUFBSSxFQUFFLENBQUMsZUFBZSxDQUFDLEVBQUU7b0JBQzlFLEVBQUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLFFBQVEsRUFBRSxtQkFBbUIsRUFBRTtvQkFDNUQsRUFBRSxPQUFPLEVBQUUsK0JBQStCLEVBQUUsUUFBUSxJQUFrQixFQUFFO2lCQUN6RTthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29yZVxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuLy8gVUkgTWF0ZXJpYWwgTW9kdWxlc1xuaW1wb3J0IHsgTWF0Rm9ybUZpZWxkTW9kdWxlLCBNYXRJY29uTW9kdWxlLCBNYXRCdXR0b25Nb2R1bGUsIE1hdElucHV0TW9kdWxlLCBNYXRTZWxlY3RNb2R1bGUsIE1hdERhdGVwaWNrZXJNb2R1bGUsIE1hdENoZWNrYm94TW9kdWxlLCBNYXRQcm9ncmVzc1NwaW5uZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5pbXBvcnQgeyBNYXRNb21lbnREYXRlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwtbW9tZW50LWFkYXB0ZXInO1xuaW1wb3J0IHsgTW9tZW50RGF0ZUFkYXB0ZXIsIE1BVF9NT01FTlRfREFURV9BREFQVEVSX09QVElPTlMgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC1tb21lbnQtYWRhcHRlcic7XG5pbXBvcnQgeyBEYXRlQWRhcHRlciwgTUFUX0RBVEVfRk9STUFUUywgTUFUX0RBVEVfTE9DQUxFIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5cblxuLy8gQ29tcG9uZW50c1xuaW1wb3J0IHsgSW5wdXRDb21wb25lbnQgfSBmcm9tICcuL2lucHV0L2lucHV0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGb3JtRXJyb3JIYW5kbGluZ1BpcGUgfSBmcm9tICcuL3BpcGVzL2Zvcm0tZXJyb3ItaGFuZGxpbmcucGlwZSc7XG5pbXBvcnQgeyBTZWxlY3RDb21wb25lbnQgfSBmcm9tICcuL3NlbGVjdC9zZWxlY3QuY29tcG9uZW50JztcbmltcG9ydCB7IEJ1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vYnV0dG9uL2J1dHRvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgRmlsZUlucHV0Q29tcG9uZW50IH0gZnJvbSAnLi9maWxlLWlucHV0L2ZpbGUtaW5wdXQuY29tcG9uZW50JztcbmltcG9ydCB7IEN1c3RvbUNoaXBDaGVja2JveENvbXBvbmVudCB9IGZyb20gJy4vY3VzdG9tLWNoaXAtY2hlY2tib3gvY3VzdG9tLWNoaXAtY2hlY2tib3guY29tcG9uZW50JztcblxuLy8gRGF0ZSBGb3JtYXRzXG5leHBvcnQgY29uc3QgQ1VTVE9NX0RBVEVfRk9STUFUUyA9IHtcbiAgcGFyc2U6IHtcbiAgICBkYXRlSW5wdXQ6ICdERC1NTS1ZWVlZJyxcbiAgfSxcbiAgZGlzcGxheToge1xuICAgIGRhdGVJbnB1dDogJ0RELU1NLVlZWVknLFxuICAgIG1vbnRoWWVhckxhYmVsOiAnTU1NIFlZWVknLFxuICAgIGRhdGVBMTF5TGFiZWw6ICdMTCcsXG4gICAgbW9udGhZZWFyQTExeUxhYmVsOiAnTU1NTSBZWVlZJyxcbiAgfSxcbn07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBNYXRGb3JtRmllbGRNb2R1bGUsXG4gICAgTWF0SWNvbk1vZHVsZSxcbiAgICBNYXRCdXR0b25Nb2R1bGUsXG4gICAgTWF0SW5wdXRNb2R1bGUsXG4gICAgTWF0U2VsZWN0TW9kdWxlLFxuICAgIE1hdERhdGVwaWNrZXJNb2R1bGUsXG4gICAgTWF0TW9tZW50RGF0ZU1vZHVsZSxcbiAgICBNYXRDaGVja2JveE1vZHVsZSxcbiAgICBNYXRQcm9ncmVzc1NwaW5uZXJNb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbSW5wdXRDb21wb25lbnQsIEZvcm1FcnJvckhhbmRsaW5nUGlwZSwgU2VsZWN0Q29tcG9uZW50LCBCdXR0b25Db21wb25lbnQsIEZpbGVJbnB1dENvbXBvbmVudCwgQ3VzdG9tQ2hpcENoZWNrYm94Q29tcG9uZW50XSxcbiAgZXhwb3J0czogW01hdEljb25Nb2R1bGUsIE1hdEJ1dHRvbk1vZHVsZSwgTWF0Q2hlY2tib3hNb2R1bGUsIElucHV0Q29tcG9uZW50LCBTZWxlY3RDb21wb25lbnQsIEJ1dHRvbkNvbXBvbmVudCwgRmlsZUlucHV0Q29tcG9uZW50LCBDdXN0b21DaGlwQ2hlY2tib3hDb21wb25lbnRdLFxuICBwcm92aWRlcnM6IFtcbiAgICB7IHByb3ZpZGU6IERhdGVBZGFwdGVyLCB1c2VDbGFzczogTW9tZW50RGF0ZUFkYXB0ZXIsIGRlcHM6IFtNQVRfREFURV9MT0NBTEVdIH0sXG4gICAgeyBwcm92aWRlOiBNQVRfREFURV9GT1JNQVRTLCB1c2VWYWx1ZTogQ1VTVE9NX0RBVEVfRk9STUFUUyB9LFxuICAgIHsgcHJvdmlkZTogTUFUX01PTUVOVF9EQVRFX0FEQVBURVJfT1BUSU9OUywgdXNlVmFsdWU6IHsgdXNlVXRjOiB0cnVlIH0gfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1GaWVsZHNNb2R1bGUgeyB9XG4iXX0=