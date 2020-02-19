import { OnInit, OnChanges, SimpleChanges, EventEmitter } from "@angular/core";
import { ControlValueAccessor, FormControl, Validator } from "@angular/forms";
import { MatSelectChange } from "@angular/material/select";
export declare class SelectComponent implements OnInit, OnChanges, ControlValueAccessor, Validator {
    appearance: string;
    label: string;
    placeholder: string;
    keyAs: string;
    key: string;
    text: string;
    options: Array<any>;
    multiple: boolean;
    control: FormControl;
    requiredErrMessage: string;
    isLoading: boolean;
    onChange: EventEmitter<any>;
    value: any;
    disabled: boolean;
    private propagateChange;
    private onTouched;
    private validateFn;
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
    onSelectionChange(event: MatSelectChange): void;
    /**
     * Compare Items
     * @param option
     * @param selected
     * @return boolean
     */
    compareItems(option: any, selected: any): boolean;
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
