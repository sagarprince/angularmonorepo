// Core
import { Component, OnInit, Input, Output, EventEmitter, forwardRef, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, FormControl } from '@angular/forms';

@Component({
  selector: 'app-file-input',
  templateUrl: './file-input.component.html',
  styleUrls: ['./file-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FileInputComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => FileInputComponent),
      multi: true
    }
  ]
})
export class FileInputComponent implements OnInit, ControlValueAccessor {
  @ViewChild('fileInput', { read: ElementRef, static: true }) fileInput: ElementRef;
  @Input() label: string = 'Select File';
  @Input() accept: string = '*';
  @Input() control: FormControl = new FormControl();
  @Input() isImagePreview: boolean = false;
  @Input() invalidFileSizeErrMessage: string = 'Please select a valid file with specified size.';
  @Output() onFileSelection: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() onFileChanged: EventEmitter<any> = new EventEmitter<any>();

  public value: any = null;
  public disabled: boolean;
  public fileName: string = '';
  public imageUrl: any = '';
  public isSelectedFileChanged: boolean = false;
  private propagateChange: Function;
  private onTouched: Function;
  private validateFn: Function;

  constructor(
    private cd: ChangeDetectorRef
  ) {
    this.propagateChange = (_: any) => { };
    this.onTouched = () => { };
    this.validateFn = () => { };
    this.disabled = false;
  }

  /**
   * ngOnInit
   * @return void
   */
  public ngOnInit(): void { }

  /**
   * Write a value to the control
   * @param value
   * @return void
   */
  public writeValue(value: any): void {
    if (value) {
      this.value = value;
      if (this.isImagePreview) {
        this.imageUrl = value;
      } else {
        this.fileName = value.substring(value.lastIndexOf('/') + 1);
      }
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
   * Sanitize File Name
   * @param name 
   * @return string
   */
  public sanitizeFileName(name): string {
    const dotIndex = name.lastIndexOf('.');
    const extension = name.substring(dotIndex + 1);
    name = name.substring(0, dotIndex);
    name = name.replace(/^\s+|\s+$/g, ''); // trim
    name = name.toLowerCase();
    let from = "àáäâèéëêìíïîòóöôùúüûñç/_,:;";
    let to = "aaaaeeeeiiiioooouuuunc------";
    for (let i = 0, l = from.length; i < l; i++) {
      name = name.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }
    name = name.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
      .replace(/\s+/g, '-') // collapse whitespace and replace by -
      .replace(/-+/g, '-'); // collapse dashes
    return name + '.' + extension;
  }

  /**
   * On Change
   * @param event 
   * @return void
   */
  public onChange(event): void {
    let _value = event.target.files.length > 0 ? event.target.files[0] : null;
    if (this.value) {
      this.isSelectedFileChanged = true;
    }
    if (_value) {
      this.value = _value;
      this.fileName = this.sanitizeFileName(this.value.name);
      this.value.fileName = this.fileName;
      this.propagateChange(this.value);
      if (!this.control.pending) {
        this.onTouched();
      }
      if (this.isImagePreview) {
        this.showImagePreview();
      }
      this.onFileSelection.emit(this.isSelectedFileChanged);
      this.onFileChanged.emit(this.control);
    }
  }

  /**
   * On Select File
   * @return void
   */
  public onSelectFile(): void {
    this.fileInput.nativeElement.click();
  }

  /**
   * On Remove File
   * @return void
   */
  public onRemoveFile(): void {
    this.value = null;
    this.fileInput.nativeElement.value = null;
    this.propagateChange(this.value);
  }

  /**
   * Show Image Preview
   * @return void
   */
  private showImagePreview(): void {
    const mimeType = this.value.type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }
    const reader = new FileReader();
    reader.readAsDataURL(this.value);
    reader.onload = (_) => {
      this.imageUrl = reader.result;
      this.cd.detectChanges();
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
   * Set Disabled State
   * @param isDisabled 
   * @return void
   */
  public setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
