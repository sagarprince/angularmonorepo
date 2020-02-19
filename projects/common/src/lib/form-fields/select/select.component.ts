// Core
import { Component, OnInit, OnChanges, Input, SimpleChanges, forwardRef, Output, EventEmitter } from "@angular/core";
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  NG_VALIDATORS,
  FormControl,
  Validator
} from "@angular/forms";

// Material Select
import { MatSelectChange } from "@angular/material/select";

@Component({
  selector: "app-select",
  templateUrl: "./select.component.html",
  styleUrls: ["./select.component.scss"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => SelectComponent),
      multi: true
    }
  ]
})
export class SelectComponent implements OnInit, OnChanges, ControlValueAccessor, Validator {
  @Input() appearance: string = "fill"; // standard | outline | fill
  @Input() label: string = "";
  @Input() placeholder: string = "";
  @Input() keyAs: string = "single"; // key as single value or object, single | object
  @Input() key: string = "id";
  @Input() text: string = "text";
  @Input() options: Array<any> = [];
  @Input() multiple: boolean = false;
  @Input() control: FormControl = new FormControl();
  @Input() requiredErrMessage: string = "Required Field.";
  @Input() isLoading: boolean = false;
  @Output() onChange: EventEmitter<any> = new EventEmitter<any>();

  public value: any;
  public disabled: boolean;
  private propagateChange: Function;
  private onTouched: Function;
  private validateFn: Function;
  public _errors: Array<any> = [];

  constructor() {
    this.propagateChange = (_: any) => { };
    this.onTouched = () => { };
    this.validateFn = () => { };
    this.disabled = false;
    this._errors = [
      {
        key: 'required',
        message: this.requiredErrMessage
      }
    ];
  }

  /**
   * ngOnInit
   * @return void
   */
  public ngOnInit(): void { }

  /**
   * ngOnChanges
   * @param changes
   * @return void
   */
  public ngOnChanges(changes: SimpleChanges): void {
    if (changes) {
      if (typeof changes.requiredErrMessage !== 'undefined') {
        let index = this._errors.findIndex((x: any) => {
          return x.key === 'required';
        });
        this._errors[index].message = changes.requiredErrMessage.currentValue;
      }
    }
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
  public registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  /**
   * Register a function to tell Angular when the input has been touched
   * @param fn 
   * @return void
   */
  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  /**
   * On Change
   * @param event 
   * @return void
   */
  public onSelectionChange(event: MatSelectChange) {
    let _value = event.value;
    this.value = _value;
    this.propagateChange(this.value);
    this.onChange.emit(this.value);
  }

  /**
   * Compare Items
   * @param option
   * @param selected
   * @return boolean 
   */
  public compareItems(option: any, selected: any): boolean {
    if (typeof option !== 'undefined' && typeof selected !== 'undefined') {
      if (typeof option.id !== 'undefined' && typeof selected.id !== 'undefined') {
        return option.id === selected.id;
      } else {
        return option === selected;
      }
    }
    return false;
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
