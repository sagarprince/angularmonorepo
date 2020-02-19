// Core
import { Component, OnInit, OnChanges, Input, forwardRef, SimpleChanges } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, FormControl, Validator } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ]
})
export class InputComponent implements OnInit, OnChanges, ControlValueAccessor, Validator {
  @Input() mode: string = 'input'; // input | datepicker | textarea
  @Input() type: string = 'text';
  @Input() appearance: string = 'fill'; // standard | outline | fill
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() icon: string = '';
  @Input() autocomplete: string = 'off';
  @Input() control: FormControl = new FormControl();
  @Input() readonly: boolean = false;
  @Input() errors: Array<any> = [];
  @Input() requiredErrMessage: string = 'Required Field.';
  @Input() emailErrMessage: string = 'Please enter a valid email.';
  @Input() minLengthErrMessage: string = '';
  @Input() maxLengthErrMessage: string = '';
  @Input() patternErrMessage: string = '';
  @Input() mustMatchErrMessage: String = '';
  @Input() mustNotMatchErrMessage: String = '';
  @Input() invalidErrMessage: String = '';
  @Input() isLoading: boolean = false;
  @Input() showControlStatusIcon: boolean = true;

  public isPasswordVisible: boolean = false;
  public inputType: string = '';

  public value: string = '';
  public disabled: boolean;
  private propagateChange: Function;
  private onTouched: Function;
  private validateFn: Function;
  public _icon: string = '';
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
      },
      {
        key: 'email',
        message: this.emailErrMessage
      },
      {
        key: 'pattern',
        message: this.patternErrMessage
      },
      {
        key: 'minlength',
        message: this.minLengthErrMessage
      },
      {
        key: 'maxlength',
        message: this.maxLengthErrMessage
      },
      {
        key: 'invalid',
        message: this.invalidErrMessage
      },
      {
        key: 'mustMatch',
        message: this.mustMatchErrMessage
      },
      {
        key: 'mustNotMatch',
        message: this.mustNotMatchErrMessage
      }
    ];
  }

  /**
   * ngOnInit
   * @return void
   */
  public ngOnInit(): void {
    this.inputType = this.type === 'password' ? 'text' : this.type;
  }

  /**
   * ngOnChanges
   * @param changes
   * @return void
   */
  public ngOnChanges(changes: SimpleChanges): void {
    if (changes) {
      if (typeof changes.errors !== 'undefined') {
        if (changes.errors.firstChange) {
          this._errors.push(...changes.errors.currentValue);
        }
      }
      if (typeof changes.errors !== 'undefined') {
        if (changes.errors.firstChange) {
          this._errors.push(...changes.errors.currentValue);
        }
      }
      if (typeof changes.requiredErrMessage !== 'undefined') {
        let index = this._errors.findIndex((x: any) => {
          return x.key === 'required';
        });
        this._errors[index].message = changes.requiredErrMessage.currentValue;
      }
      if (typeof changes.patternErrMessage !== 'undefined') {
        let index = this._errors.findIndex((x: any) => {
          return x.key === 'pattern';
        });
        this._errors[index].message = changes.patternErrMessage.currentValue;
      }
      if (typeof changes.emailErrMessage !== 'undefined') {
        let index = this._errors.findIndex((x: any) => {
          return x.key === 'email';
        });
        this._errors[index].message = changes.emailErrMessage.currentValue;
      }
      if (typeof changes.minLengthErrMessage !== 'undefined') {
        let index = this._errors.findIndex((x: any) => {
          return x.key === 'minlength';
        });
        this._errors[index].message = changes.minLengthErrMessage.currentValue;
      }
      if (typeof changes.maxLengthErrMessage !== 'undefined') {
        let index = this._errors.findIndex((x: any) => {
          return x.key === 'maxlength';
        });
        this._errors[index].message = changes.maxLengthErrMessage.currentValue;
      }
      if (typeof changes.invalidErrMessage !== 'undefined') {
        let index = this._errors.findIndex((x: any) => {
          return x.key === 'invalid';
        });
        this._errors[index].message = changes.invalidErrMessage.currentValue;
      }
      if (typeof changes.mustMatchErrMessage !== 'undefined') {
        let index = this._errors.findIndex((x: any) => {
          return x.key === 'mustMatch';
        });
        this._errors[index].message = changes.mustMatchErrMessage.currentValue;
      }
      if (typeof changes.mustNotMatchErrMessage !== 'undefined') {
        let index = this._errors.findIndex((x: any) => {
          return x.key === 'mustNotMatch';
        });
        this._errors[index].message = changes.mustNotMatchErrMessage.currentValue;
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
  public onChange(event): void {
    let _value = event.target.value;
    this.value = _value;
    this.propagateChange(this.value);
    if (!this.control.pending) {
      this.onTouched();
    }
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
   * Clear Date
   * @return void
   */
  public clearDate(): void {
    this.value = '';
    this.propagateChange(this.value);
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
