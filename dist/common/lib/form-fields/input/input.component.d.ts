import { OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ControlValueAccessor, FormControl, Validator } from '@angular/forms';
export declare class InputComponent implements OnInit, OnChanges, ControlValueAccessor, Validator {
    mode: string;
    type: string;
    appearance: string;
    label: string;
    placeholder: string;
    icon: string;
    autocomplete: string;
    control: FormControl;
    readonly: boolean;
    errors: Array<any>;
    requiredErrMessage: string;
    emailErrMessage: string;
    minLengthErrMessage: string;
    maxLengthErrMessage: string;
    patternErrMessage: string;
    mustMatchErrMessage: String;
    mustNotMatchErrMessage: String;
    invalidErrMessage: String;
    isLoading: boolean;
    showControlStatusIcon: boolean;
    isPasswordVisible: boolean;
    inputType: string;
    value: string;
    disabled: boolean;
    private propagateChange;
    private onTouched;
    private validateFn;
    _icon: string;
    _errors: Array<any>;
    constructor();
    /**
     * ngOnInit
     * @return void
     */
    ngOnInit(): void;
    /**
     * ngOnChanges
     * @param changes
     * @return void
     */
    ngOnChanges(changes: SimpleChanges): void;
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
    registerOnChange(fn: any): void;
    /**
     * Register a function to tell Angular when the input has been touched
     * @param fn
     * @return void
     */
    registerOnTouched(fn: any): void;
    /**
     * On Change
     * @param event
     * @return void
     */
    onChange(event: any): void;
    /**
     * Validate
     * @param c
     * @return any
     */
    validate(c: FormControl): any;
    /**
     * Clear Date
     * @return void
     */
    clearDate(): void;
    /**
     * Set Disabled State
     * @param isDisabled
     * @return void
     */
    setDisabledState(isDisabled: boolean): void;
}
