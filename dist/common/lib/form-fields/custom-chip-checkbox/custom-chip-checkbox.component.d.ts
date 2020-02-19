import { OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, Validator } from '@angular/forms';
export declare class CustomChipCheckboxComponent implements OnInit, ControlValueAccessor, Validator {
    key: string;
    text: string;
    selected: string;
    value: any;
    disabled: boolean;
    private propagateChange;
    private onTouched;
    private validateFn;
    constructor();
    /**
     * ngOnInit
     * @return void
     */
    ngOnInit(): void;
    /**
     * Write a value to the control
     * @param value
     * @return void
     */
    writeValue(value: any): void;
    /**
     * Register a function to tell Angular when the value of the input changes
     * @param fn
     * @return void
     */
    registerOnChange(fn: (_: any) => {}): void;
    /**
     * Register a function to tell Angular when the input has been touched
     * @param fn
     * @return void
     */
    registerOnTouched(fn: () => {}): void;
    /**
     * On Change
     * @param event
     * @return void
     */
    onChange(value: any): void;
    /**
     * Validate
     * @param c
     * @return any
     */
    validate(c: FormControl): any;
    /**
     * Set Disabled State
     * @param isDisabled
     * @return void
     */
    setDisabledState(isDisabled: boolean): void;
}
