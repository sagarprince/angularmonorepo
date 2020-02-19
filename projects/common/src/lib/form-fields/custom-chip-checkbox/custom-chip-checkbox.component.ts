// Core
import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, FormControl, Validator } from '@angular/forms';

@Component({
  selector: 'app-custom-chip-checkbox',
  templateUrl: './custom-chip-checkbox.component.html',
  styleUrls: ['./custom-chip-checkbox.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomChipCheckboxComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => CustomChipCheckboxComponent),
      multi: true
    }
  ]
})
export class CustomChipCheckboxComponent implements OnInit, ControlValueAccessor, Validator {
  @Input() key: string = "id";
  @Input() text: string = "name";
  @Input() selected: string = "selected";

  public value: any;
  public disabled: boolean;
  private propagateChange: Function;
  private onTouched: Function;
  private validateFn: Function;

  constructor() {
    this.propagateChange = (_: any) => { };
    this.onTouched = () => { };
    this.validateFn = () => { };
  }

  /**
   * ngOnInit
   * @return void
   */
  public ngOnInit(): void {
  }

  /**
   * Write a value to the control
   * @param value
   * @return void
   */
  public writeValue(value: any): void {
    if (value) {
      this.value = value;
    }
  }

  /**
   * Register a function to tell Angular when the value of the input changes
   * @param fn 
   * @return void
   */
  public registerOnChange(fn: (_: any) => {}): void {
    this.propagateChange = fn;
  }

  /**
   * Register a function to tell Angular when the input has been touched
   * @param fn 
   * @return void
   */
  public registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
  }

  /**
   * On Change
   * @param event 
   * @return void
   */
  public onChange(value) {
    this.value[this.selected] = !value[this.selected];
    this.onTouched();
    this.propagateChange(this.value);
  }

  /**
   * Validate
   * @param c
   * @return any 
   */
  public validate(c: FormControl): any {
    return this.validateFn(c);
  }

  /**
   * Set Disabled State
   * @param isDisabled 
   * @return void
   */
  public setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
