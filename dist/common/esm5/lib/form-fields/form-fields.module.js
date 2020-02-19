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
export var CUSTOM_DATE_FORMATS = {
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
var ɵ0 = { useUtc: true };
var FormFieldsModule = /** @class */ (function () {
    function FormFieldsModule() {
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
    return FormFieldsModule;
}());
export { FormFieldsModule };
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1maWVsZHMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY29tbW9uLyIsInNvdXJjZXMiOlsibGliL2Zvcm0tZmllbGRzL2Zvcm0tZmllbGRzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0FBR2xFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxhQUFhLEVBQUUsZUFBZSxFQUFFLGNBQWMsRUFBRSxlQUFlLEVBQUUsbUJBQW1CLEVBQUUsaUJBQWlCLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMxTCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN2RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsK0JBQStCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN0RyxPQUFPLEVBQUUsV0FBVyxFQUFFLGdCQUFnQixFQUFFLGVBQWUsRUFBRSxNQUFNLHdCQUF3QixDQUFDOztBQUl4RixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDekQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDekUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzVELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN2RSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSx1REFBdUQsQ0FBQzs7O0FBR3BHLE1BQU0sS0FBTyxtQkFBbUIsR0FBRztJQUNqQyxLQUFLLEVBQUU7UUFDTCxTQUFTLEVBQUUsWUFBWTtLQUN4QjtJQUNELE9BQU8sRUFBRTtRQUNQLFNBQVMsRUFBRSxZQUFZO1FBQ3ZCLGNBQWMsRUFBRSxVQUFVO1FBQzFCLGFBQWEsRUFBRSxJQUFJO1FBQ25CLGtCQUFrQixFQUFFLFdBQVc7S0FDaEM7Q0FDRjtTQXNCeUQsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO0FBcEIxRTtJQUFBO0lBdUJnQyxDQUFDOztnQkF2QmhDLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixXQUFXO3dCQUNYLG1CQUFtQjt3QkFDbkIsa0JBQWtCO3dCQUNsQixhQUFhO3dCQUNiLGVBQWU7d0JBQ2YsY0FBYzt3QkFDZCxlQUFlO3dCQUNmLG1CQUFtQjt3QkFDbkIsbUJBQW1CO3dCQUNuQixpQkFBaUI7d0JBQ2pCLHdCQUF3QjtxQkFDekI7b0JBQ0QsWUFBWSxFQUFFLENBQUMsY0FBYyxFQUFFLHFCQUFxQixFQUFFLGVBQWUsRUFBRSxlQUFlLEVBQUUsa0JBQWtCLEVBQUUsMkJBQTJCLENBQUM7b0JBQ3hJLE9BQU8sRUFBRSxDQUFDLGFBQWEsRUFBRSxlQUFlLEVBQUUsaUJBQWlCLEVBQUUsY0FBYyxFQUFFLGVBQWUsRUFBRSxlQUFlLEVBQUUsa0JBQWtCLEVBQUUsMkJBQTJCLENBQUM7b0JBQy9KLFNBQVMsRUFBRTt3QkFDVCxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLGlCQUFpQixFQUFFLElBQUksRUFBRSxDQUFDLGVBQWUsQ0FBQyxFQUFFO3dCQUM5RSxFQUFFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxRQUFRLEVBQUUsbUJBQW1CLEVBQUU7d0JBQzVELEVBQUUsT0FBTyxFQUFFLCtCQUErQixFQUFFLFFBQVEsSUFBa0IsRUFBRTtxQkFDekU7aUJBQ0Y7O0lBQytCLHVCQUFDO0NBQUEsQUF2QmpDLElBdUJpQztTQUFwQixnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3JlXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG4vLyBVSSBNYXRlcmlhbCBNb2R1bGVzXG5pbXBvcnQgeyBNYXRGb3JtRmllbGRNb2R1bGUsIE1hdEljb25Nb2R1bGUsIE1hdEJ1dHRvbk1vZHVsZSwgTWF0SW5wdXRNb2R1bGUsIE1hdFNlbGVjdE1vZHVsZSwgTWF0RGF0ZXBpY2tlck1vZHVsZSwgTWF0Q2hlY2tib3hNb2R1bGUsIE1hdFByb2dyZXNzU3Bpbm5lck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbmltcG9ydCB7IE1hdE1vbWVudERhdGVNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC1tb21lbnQtYWRhcHRlcic7XG5pbXBvcnQgeyBNb21lbnREYXRlQWRhcHRlciwgTUFUX01PTUVOVF9EQVRFX0FEQVBURVJfT1BUSU9OUyB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsLW1vbWVudC1hZGFwdGVyJztcbmltcG9ydCB7IERhdGVBZGFwdGVyLCBNQVRfREFURV9GT1JNQVRTLCBNQVRfREFURV9MT0NBTEUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcblxuXG4vLyBDb21wb25lbnRzXG5pbXBvcnQgeyBJbnB1dENvbXBvbmVudCB9IGZyb20gJy4vaW5wdXQvaW5wdXQuY29tcG9uZW50JztcbmltcG9ydCB7IEZvcm1FcnJvckhhbmRsaW5nUGlwZSB9IGZyb20gJy4vcGlwZXMvZm9ybS1lcnJvci1oYW5kbGluZy5waXBlJztcbmltcG9ydCB7IFNlbGVjdENvbXBvbmVudCB9IGZyb20gJy4vc2VsZWN0L3NlbGVjdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi9idXR0b24vYnV0dG9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGaWxlSW5wdXRDb21wb25lbnQgfSBmcm9tICcuL2ZpbGUtaW5wdXQvZmlsZS1pbnB1dC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ3VzdG9tQ2hpcENoZWNrYm94Q29tcG9uZW50IH0gZnJvbSAnLi9jdXN0b20tY2hpcC1jaGVja2JveC9jdXN0b20tY2hpcC1jaGVja2JveC5jb21wb25lbnQnO1xuXG4vLyBEYXRlIEZvcm1hdHNcbmV4cG9ydCBjb25zdCBDVVNUT01fREFURV9GT1JNQVRTID0ge1xuICBwYXJzZToge1xuICAgIGRhdGVJbnB1dDogJ0RELU1NLVlZWVknLFxuICB9LFxuICBkaXNwbGF5OiB7XG4gICAgZGF0ZUlucHV0OiAnREQtTU0tWVlZWScsXG4gICAgbW9udGhZZWFyTGFiZWw6ICdNTU0gWVlZWScsXG4gICAgZGF0ZUExMXlMYWJlbDogJ0xMJyxcbiAgICBtb250aFllYXJBMTF5TGFiZWw6ICdNTU1NIFlZWVknLFxuICB9LFxufTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIE1hdEZvcm1GaWVsZE1vZHVsZSxcbiAgICBNYXRJY29uTW9kdWxlLFxuICAgIE1hdEJ1dHRvbk1vZHVsZSxcbiAgICBNYXRJbnB1dE1vZHVsZSxcbiAgICBNYXRTZWxlY3RNb2R1bGUsXG4gICAgTWF0RGF0ZXBpY2tlck1vZHVsZSxcbiAgICBNYXRNb21lbnREYXRlTW9kdWxlLFxuICAgIE1hdENoZWNrYm94TW9kdWxlLFxuICAgIE1hdFByb2dyZXNzU3Bpbm5lck1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtJbnB1dENvbXBvbmVudCwgRm9ybUVycm9ySGFuZGxpbmdQaXBlLCBTZWxlY3RDb21wb25lbnQsIEJ1dHRvbkNvbXBvbmVudCwgRmlsZUlucHV0Q29tcG9uZW50LCBDdXN0b21DaGlwQ2hlY2tib3hDb21wb25lbnRdLFxuICBleHBvcnRzOiBbTWF0SWNvbk1vZHVsZSwgTWF0QnV0dG9uTW9kdWxlLCBNYXRDaGVja2JveE1vZHVsZSwgSW5wdXRDb21wb25lbnQsIFNlbGVjdENvbXBvbmVudCwgQnV0dG9uQ29tcG9uZW50LCBGaWxlSW5wdXRDb21wb25lbnQsIEN1c3RvbUNoaXBDaGVja2JveENvbXBvbmVudF0sXG4gIHByb3ZpZGVyczogW1xuICAgIHsgcHJvdmlkZTogRGF0ZUFkYXB0ZXIsIHVzZUNsYXNzOiBNb21lbnREYXRlQWRhcHRlciwgZGVwczogW01BVF9EQVRFX0xPQ0FMRV0gfSxcbiAgICB7IHByb3ZpZGU6IE1BVF9EQVRFX0ZPUk1BVFMsIHVzZVZhbHVlOiBDVVNUT01fREFURV9GT1JNQVRTIH0sXG4gICAgeyBwcm92aWRlOiBNQVRfTU9NRU5UX0RBVEVfQURBUFRFUl9PUFRJT05TLCB1c2VWYWx1ZTogeyB1c2VVdGM6IHRydWUgfSB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgRm9ybUZpZWxkc01vZHVsZSB7IH1cbiJdfQ==