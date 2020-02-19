import { OnInit, EventEmitter, ElementRef, ChangeDetectorRef } from '@angular/core';
import { ControlValueAccessor, FormControl } from '@angular/forms';
export declare class FileInputComponent implements OnInit, ControlValueAccessor {
    private cd;
    fileInput: ElementRef;
    label: string;
    accept: string;
    control: FormControl;
    isImagePreview: boolean;
    invalidFileSizeErrMessage: string;
    onFileSelection: EventEmitter<boolean>;
    onFileChanged: EventEmitter<any>;
    value: any;
    disabled: boolean;
    fileName: string;
    imageUrl: any;
    isSelectedFileChanged: boolean;
    private propagateChange;
    private onTouched;
    private validateFn;
    constructor(cd: ChangeDetectorRef);
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
    registerOnChange(fn: any): void;
    /**
     * Register a function to tell Angular when the input has been touched
     * @param fn
     * @return void
     */
    registerOnTouched(fn: any): void;
    /**
     * Sanitize File Name
     * @param name
     * @return string
     */
    sanitizeFileName(name: any): string;
    /**
     * On Change
     * @param event
     * @return void
     */
    onChange(event: any): void;
    /**
     * On Select File
     * @return void
     */
    onSelectFile(): void;
    /**
     * On Remove File
     * @return void
     */
    onRemoveFile(): void;
    /**
     * Show Image Preview
     * @return void
     */
    private showImagePreview;
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
