/**
 * @fileoverview added by tsickle
 * Generated from: lib/form-fields/file-input/file-input.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Core
import { Component, Input, Output, EventEmitter, forwardRef, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS, FormControl } from '@angular/forms';
export class FileInputComponent {
    /**
     * @param {?} cd
     */
    constructor(cd) {
        this.cd = cd;
        this.label = 'Select File';
        this.accept = '*';
        this.control = new FormControl();
        this.isImagePreview = false;
        this.invalidFileSizeErrMessage = 'Please select a valid file with specified size.';
        this.onFileSelection = new EventEmitter();
        this.onFileChanged = new EventEmitter();
        this.value = null;
        this.fileName = '';
        this.imageUrl = '';
        this.isSelectedFileChanged = false;
        this.propagateChange = (/**
         * @param {?} _
         * @return {?}
         */
        (_) => { });
        this.onTouched = (/**
         * @return {?}
         */
        () => { });
        this.validateFn = (/**
         * @return {?}
         */
        () => { });
        this.disabled = false;
    }
    /**
     * ngOnInit
     * @return {?} void
     */
    ngOnInit() { }
    /**
     * Write a value to the control
     * @param {?} value
     * @return {?} void
     */
    writeValue(value) {
        if (value) {
            this.value = value;
            if (this.isImagePreview) {
                this.imageUrl = value;
            }
            else {
                this.fileName = value.substring(value.lastIndexOf('/') + 1);
            }
        }
    }
    /**
     * Register a function to tell Angular when the value of the input changes
     * @param {?} fn
     * @return {?} void
     */
    registerOnChange(fn) {
        this.propagateChange = fn;
    }
    /**
     * Register a function to tell Angular when the input has been touched
     * @param {?} fn
     * @return {?} void
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * Sanitize File Name
     * @param {?} name
     * @return {?} string
     */
    sanitizeFileName(name) {
        /** @type {?} */
        const dotIndex = name.lastIndexOf('.');
        /** @type {?} */
        const extension = name.substring(dotIndex + 1);
        name = name.substring(0, dotIndex);
        name = name.replace(/^\s+|\s+$/g, ''); // trim
        name = name.toLowerCase();
        /** @type {?} */
        let from = "àáäâèéëêìíïîòóöôùúüûñç/_,:;";
        /** @type {?} */
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
     * @param {?} event
     * @return {?} void
     */
    onChange(event) {
        /** @type {?} */
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
     * @return {?} void
     */
    onSelectFile() {
        this.fileInput.nativeElement.click();
    }
    /**
     * On Remove File
     * @return {?} void
     */
    onRemoveFile() {
        this.value = null;
        this.fileInput.nativeElement.value = null;
        this.propagateChange(this.value);
    }
    /**
     * Show Image Preview
     * @private
     * @return {?} void
     */
    showImagePreview() {
        /** @type {?} */
        const mimeType = this.value.type;
        if (mimeType.match(/image\/*/) == null) {
            return;
        }
        /** @type {?} */
        const reader = new FileReader();
        reader.readAsDataURL(this.value);
        reader.onload = (/**
         * @param {?} _
         * @return {?}
         */
        (_) => {
            this.imageUrl = reader.result;
            this.cd.detectChanges();
        });
    }
    /**
     * Validate
     * @param {?} c
     * @return {?} any
     */
    validate(c) {
        return this.validateFn(c);
    }
    /**
     * Set Disabled State
     * @param {?} isDisabled
     * @return {?} void
     */
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
}
FileInputComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-file-input',
                template: "<div class=\"file-input\">\n    <div class=\"file-input__box\" [class.file-input__box--selected]=\"value\"\n        [class.file-input__box--image-preview]=\"isImagePreview && value != null\">\n        <div class=\"file-input__box__unselected-view\" *ngIf=\"value === null\">\n            <div class=\"file-input__box__plus-icon\"><i class=\"material-icons\">add</i></div>\n            <div class=\"file-input__box__select-button\">\n                <app-button variant=\"stroked\" type=\"button\" name=\"{{label}}\" (onClick)=\"onSelectFile()\"></app-button>\n            </div>\n        </div>\n        <div class=\"file-input__box__selected-view\" *ngIf=\"!isImagePreview && value !== null\">\n            <div class=\"file-input__box__name\">{{fileName}}</div>\n        </div>\n        <div class=\"file-input__box__image-preview\" *ngIf=\"isImagePreview && value !== null\">\n            <img [src]=\"imageUrl\" />\n        </div>\n        <div class=\"file-input__box__change-button\" *ngIf=\"value !== null\">\n            <app-button variant=\"icon\" type=\"button\" color=\"primary\" icon=\"edit\" iconType=\"material\"\n                (onClick)=\"onSelectFile()\"></app-button>\n        </div>\n        <input #fileInput type=\"file\" accept=\"{{accept}}\" (change)=\"onChange($event)\" style=\"display:none;\" />\n    </div>\n    <div *ngIf=\"control.invalid && (control.dirty || control.touched)\" class=\"file-input__error\">\n        <div *ngIf=\"control.errors.required\">\n            Required Field.\n        </div>\n        <div *ngIf=\"control.errors?.InvalidFileSize\">\n            {{invalidFileSizeErrMessage}}\n        </div>\n    </div>\n</div>",
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => FileInputComponent)),
                        multi: true
                    },
                    {
                        provide: NG_VALIDATORS,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => FileInputComponent)),
                        multi: true
                    }
                ],
                styles: [".file-input__box{background-color:#fff;border:1px dashed #dadce1;height:215px;padding:0 25px;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;position:relative}.file-input__box--selected{border-style:solid;border-top:0;border-left:0;border-right:0;border-bottom:2px solid #4a3ae7}.file-input__box--image-preview{padding:0;border:1px solid #dadce1}.file-input__box__selected-view,.file-input__box__unselected-view{width:100%;text-align:center}.file-input__box__plus-icon{margin-bottom:30px}.file-input__box__plus-icon i{font-size:40px;color:#4a3ae7}.file-input__box__name{margin-bottom:0;font-size:15px;color:#1f2430}.file-input__box__image-preview,.file-input__box__image-preview img{width:100%;height:100%}.file-input__box__change-button{position:absolute;top:auto;bottom:5px;right:5px;left:auto}.file-input__box__change-button ::ng-deep button{width:42px;height:42px}.file-input__error{color:#f44336;font-size:75%;margin-top:5px}"]
            }] }
];
/** @nocollapse */
FileInputComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
FileInputComponent.propDecorators = {
    fileInput: [{ type: ViewChild, args: ['fileInput', { read: ElementRef, static: true },] }],
    label: [{ type: Input }],
    accept: [{ type: Input }],
    control: [{ type: Input }],
    isImagePreview: [{ type: Input }],
    invalidFileSizeErrMessage: [{ type: Input }],
    onFileSelection: [{ type: Output }],
    onFileChanged: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    FileInputComponent.prototype.fileInput;
    /** @type {?} */
    FileInputComponent.prototype.label;
    /** @type {?} */
    FileInputComponent.prototype.accept;
    /** @type {?} */
    FileInputComponent.prototype.control;
    /** @type {?} */
    FileInputComponent.prototype.isImagePreview;
    /** @type {?} */
    FileInputComponent.prototype.invalidFileSizeErrMessage;
    /** @type {?} */
    FileInputComponent.prototype.onFileSelection;
    /** @type {?} */
    FileInputComponent.prototype.onFileChanged;
    /** @type {?} */
    FileInputComponent.prototype.value;
    /** @type {?} */
    FileInputComponent.prototype.disabled;
    /** @type {?} */
    FileInputComponent.prototype.fileName;
    /** @type {?} */
    FileInputComponent.prototype.imageUrl;
    /** @type {?} */
    FileInputComponent.prototype.isSelectedFileChanged;
    /**
     * @type {?}
     * @private
     */
    FileInputComponent.prototype.propagateChange;
    /**
     * @type {?}
     * @private
     */
    FileInputComponent.prototype.onTouched;
    /**
     * @type {?}
     * @private
     */
    FileInputComponent.prototype.validateFn;
    /**
     * @type {?}
     * @private
     */
    FileInputComponent.prototype.cd;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS1pbnB1dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jb21tb24vIiwic291cmNlcyI6WyJsaWIvZm9ybS1maWVsZHMvZmlsZS1pbnB1dC9maWxlLWlucHV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JJLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsYUFBYSxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBbUJyRyxNQUFNLE9BQU8sa0JBQWtCOzs7O0lBbUI3QixZQUNVLEVBQXFCO1FBQXJCLE9BQUUsR0FBRixFQUFFLENBQW1CO1FBbEJ0QixVQUFLLEdBQVcsYUFBYSxDQUFDO1FBQzlCLFdBQU0sR0FBVyxHQUFHLENBQUM7UUFDckIsWUFBTyxHQUFnQixJQUFJLFdBQVcsRUFBRSxDQUFDO1FBQ3pDLG1CQUFjLEdBQVksS0FBSyxDQUFDO1FBQ2hDLDhCQUF5QixHQUFXLGlEQUFpRCxDQUFDO1FBQ3JGLG9CQUFlLEdBQTBCLElBQUksWUFBWSxFQUFXLENBQUM7UUFDckUsa0JBQWEsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUU5RCxVQUFLLEdBQVEsSUFBSSxDQUFDO1FBRWxCLGFBQVEsR0FBVyxFQUFFLENBQUM7UUFDdEIsYUFBUSxHQUFRLEVBQUUsQ0FBQztRQUNuQiwwQkFBcUIsR0FBWSxLQUFLLENBQUM7UUFRNUMsSUFBSSxDQUFDLGVBQWU7Ozs7UUFBRyxDQUFDLENBQU0sRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFBLENBQUM7UUFDdkMsSUFBSSxDQUFDLFNBQVM7OztRQUFHLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQSxDQUFDO1FBQzNCLElBQUksQ0FBQyxVQUFVOzs7UUFB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Qjs7Ozs7SUFDNUIsd0NBQTZCOzs7OztJQUczQixnQ0FBNkIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3JlXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBmb3J3YXJkUmVmLCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IsIE5HX1ZBTElEQVRPUlMsIEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtZmlsZS1pbnB1dCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9maWxlLWlucHV0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZmlsZS1pbnB1dC5jb21wb25lbnQuc2NzcyddLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEZpbGVJbnB1dENvbXBvbmVudCksXG4gICAgICBtdWx0aTogdHJ1ZVxuICAgIH0sXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEZpbGVJbnB1dENvbXBvbmVudCksXG4gICAgICBtdWx0aTogdHJ1ZVxuICAgIH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBGaWxlSW5wdXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcbiAgQFZpZXdDaGlsZCgnZmlsZUlucHV0JywgeyByZWFkOiBFbGVtZW50UmVmLCBzdGF0aWM6IHRydWUgfSkgZmlsZUlucHV0OiBFbGVtZW50UmVmO1xuICBASW5wdXQoKSBsYWJlbDogc3RyaW5nID0gJ1NlbGVjdCBGaWxlJztcbiAgQElucHV0KCkgYWNjZXB0OiBzdHJpbmcgPSAnKic7XG4gIEBJbnB1dCgpIGNvbnRyb2w6IEZvcm1Db250cm9sID0gbmV3IEZvcm1Db250cm9sKCk7XG4gIEBJbnB1dCgpIGlzSW1hZ2VQcmV2aWV3OiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGludmFsaWRGaWxlU2l6ZUVyck1lc3NhZ2U6IHN0cmluZyA9ICdQbGVhc2Ugc2VsZWN0IGEgdmFsaWQgZmlsZSB3aXRoIHNwZWNpZmllZCBzaXplLic7XG4gIEBPdXRwdXQoKSBvbkZpbGVTZWxlY3Rpb246IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcbiAgQE91dHB1dCgpIG9uRmlsZUNoYW5nZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgcHVibGljIHZhbHVlOiBhbnkgPSBudWxsO1xuICBwdWJsaWMgZGlzYWJsZWQ6IGJvb2xlYW47XG4gIHB1YmxpYyBmaWxlTmFtZTogc3RyaW5nID0gJyc7XG4gIHB1YmxpYyBpbWFnZVVybDogYW55ID0gJyc7XG4gIHB1YmxpYyBpc1NlbGVjdGVkRmlsZUNoYW5nZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBwcm9wYWdhdGVDaGFuZ2U6IEZ1bmN0aW9uO1xuICBwcml2YXRlIG9uVG91Y2hlZDogRnVuY3Rpb247XG4gIHByaXZhdGUgdmFsaWRhdGVGbjogRnVuY3Rpb247XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWZcbiAgKSB7XG4gICAgdGhpcy5wcm9wYWdhdGVDaGFuZ2UgPSAoXzogYW55KSA9PiB7IH07XG4gICAgdGhpcy5vblRvdWNoZWQgPSAoKSA9PiB7IH07XG4gICAgdGhpcy52YWxpZGF0ZUZuID0gKCkgPT4geyB9O1xuICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBuZ09uSW5pdFxuICAgKiBAcmV0dXJuIHZvaWRcbiAgICovXG4gIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHsgfVxuXG4gIC8qKlxuICAgKiBXcml0ZSBhIHZhbHVlIHRvIHRoZSBjb250cm9sXG4gICAqIEBwYXJhbSB2YWx1ZVxuICAgKiBAcmV0dXJuIHZvaWRcbiAgICovXG4gIHB1YmxpYyB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgIGlmICh0aGlzLmlzSW1hZ2VQcmV2aWV3KSB7XG4gICAgICAgIHRoaXMuaW1hZ2VVcmwgPSB2YWx1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZmlsZU5hbWUgPSB2YWx1ZS5zdWJzdHJpbmcodmFsdWUubGFzdEluZGV4T2YoJy8nKSArIDEpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlciBhIGZ1bmN0aW9uIHRvIHRlbGwgQW5ndWxhciB3aGVuIHRoZSB2YWx1ZSBvZiB0aGUgaW5wdXQgY2hhbmdlc1xuICAgKiBAcGFyYW0gZm4gXG4gICAqIEByZXR1cm4gdm9pZFxuICAgKi9cbiAgcHVibGljIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMucHJvcGFnYXRlQ2hhbmdlID0gZm47XG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXIgYSBmdW5jdGlvbiB0byB0ZWxsIEFuZ3VsYXIgd2hlbiB0aGUgaW5wdXQgaGFzIGJlZW4gdG91Y2hlZFxuICAgKiBAcGFyYW0gZm4gXG4gICAqIEByZXR1cm4gdm9pZFxuICAgKi9cbiAgcHVibGljIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNhbml0aXplIEZpbGUgTmFtZVxuICAgKiBAcGFyYW0gbmFtZSBcbiAgICogQHJldHVybiBzdHJpbmdcbiAgICovXG4gIHB1YmxpYyBzYW5pdGl6ZUZpbGVOYW1lKG5hbWUpOiBzdHJpbmcge1xuICAgIGNvbnN0IGRvdEluZGV4ID0gbmFtZS5sYXN0SW5kZXhPZignLicpO1xuICAgIGNvbnN0IGV4dGVuc2lvbiA9IG5hbWUuc3Vic3RyaW5nKGRvdEluZGV4ICsgMSk7XG4gICAgbmFtZSA9IG5hbWUuc3Vic3RyaW5nKDAsIGRvdEluZGV4KTtcbiAgICBuYW1lID0gbmFtZS5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLCAnJyk7IC8vIHRyaW1cbiAgICBuYW1lID0gbmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgIGxldCBmcm9tID0gXCLDoMOhw6TDosOow6nDq8Oqw6zDrcOvw67DssOzw7bDtMO5w7rDvMO7w7HDpy9fLDo7XCI7XG4gICAgbGV0IHRvID0gXCJhYWFhZWVlZWlpaWlvb29vdXV1dW5jLS0tLS0tXCI7XG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSBmcm9tLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbmFtZSA9IG5hbWUucmVwbGFjZShuZXcgUmVnRXhwKGZyb20uY2hhckF0KGkpLCAnZycpLCB0by5jaGFyQXQoaSkpO1xuICAgIH1cbiAgICBuYW1lID0gbmFtZS5yZXBsYWNlKC9bXmEtejAtOSAtXS9nLCAnJykgLy8gcmVtb3ZlIGludmFsaWQgY2hhcnNcbiAgICAgIC5yZXBsYWNlKC9cXHMrL2csICctJykgLy8gY29sbGFwc2Ugd2hpdGVzcGFjZSBhbmQgcmVwbGFjZSBieSAtXG4gICAgICAucmVwbGFjZSgvLSsvZywgJy0nKTsgLy8gY29sbGFwc2UgZGFzaGVzXG4gICAgcmV0dXJuIG5hbWUgKyAnLicgKyBleHRlbnNpb247XG4gIH1cblxuICAvKipcbiAgICogT24gQ2hhbmdlXG4gICAqIEBwYXJhbSBldmVudCBcbiAgICogQHJldHVybiB2b2lkXG4gICAqL1xuICBwdWJsaWMgb25DaGFuZ2UoZXZlbnQpOiB2b2lkIHtcbiAgICBsZXQgX3ZhbHVlID0gZXZlbnQudGFyZ2V0LmZpbGVzLmxlbmd0aCA+IDAgPyBldmVudC50YXJnZXQuZmlsZXNbMF0gOiBudWxsO1xuICAgIGlmICh0aGlzLnZhbHVlKSB7XG4gICAgICB0aGlzLmlzU2VsZWN0ZWRGaWxlQ2hhbmdlZCA9IHRydWU7XG4gICAgfVxuICAgIGlmIChfdmFsdWUpIHtcbiAgICAgIHRoaXMudmFsdWUgPSBfdmFsdWU7XG4gICAgICB0aGlzLmZpbGVOYW1lID0gdGhpcy5zYW5pdGl6ZUZpbGVOYW1lKHRoaXMudmFsdWUubmFtZSk7XG4gICAgICB0aGlzLnZhbHVlLmZpbGVOYW1lID0gdGhpcy5maWxlTmFtZTtcbiAgICAgIHRoaXMucHJvcGFnYXRlQ2hhbmdlKHRoaXMudmFsdWUpO1xuICAgICAgaWYgKCF0aGlzLmNvbnRyb2wucGVuZGluZykge1xuICAgICAgICB0aGlzLm9uVG91Y2hlZCgpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuaXNJbWFnZVByZXZpZXcpIHtcbiAgICAgICAgdGhpcy5zaG93SW1hZ2VQcmV2aWV3KCk7XG4gICAgICB9XG4gICAgICB0aGlzLm9uRmlsZVNlbGVjdGlvbi5lbWl0KHRoaXMuaXNTZWxlY3RlZEZpbGVDaGFuZ2VkKTtcbiAgICAgIHRoaXMub25GaWxlQ2hhbmdlZC5lbWl0KHRoaXMuY29udHJvbCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE9uIFNlbGVjdCBGaWxlXG4gICAqIEByZXR1cm4gdm9pZFxuICAgKi9cbiAgcHVibGljIG9uU2VsZWN0RmlsZSgpOiB2b2lkIHtcbiAgICB0aGlzLmZpbGVJbnB1dC5uYXRpdmVFbGVtZW50LmNsaWNrKCk7XG4gIH1cblxuICAvKipcbiAgICogT24gUmVtb3ZlIEZpbGVcbiAgICogQHJldHVybiB2b2lkXG4gICAqL1xuICBwdWJsaWMgb25SZW1vdmVGaWxlKCk6IHZvaWQge1xuICAgIHRoaXMudmFsdWUgPSBudWxsO1xuICAgIHRoaXMuZmlsZUlucHV0Lm5hdGl2ZUVsZW1lbnQudmFsdWUgPSBudWxsO1xuICAgIHRoaXMucHJvcGFnYXRlQ2hhbmdlKHRoaXMudmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNob3cgSW1hZ2UgUHJldmlld1xuICAgKiBAcmV0dXJuIHZvaWRcbiAgICovXG4gIHByaXZhdGUgc2hvd0ltYWdlUHJldmlldygpOiB2b2lkIHtcbiAgICBjb25zdCBtaW1lVHlwZSA9IHRoaXMudmFsdWUudHlwZTtcbiAgICBpZiAobWltZVR5cGUubWF0Y2goL2ltYWdlXFwvKi8pID09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICByZWFkZXIucmVhZEFzRGF0YVVSTCh0aGlzLnZhbHVlKTtcbiAgICByZWFkZXIub25sb2FkID0gKF8pID0+IHtcbiAgICAgIHRoaXMuaW1hZ2VVcmwgPSByZWFkZXIucmVzdWx0O1xuICAgICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFZhbGlkYXRlXG4gICAqIEBwYXJhbSBjXG4gICAqIEByZXR1cm4gYW55XG4gICAqL1xuICBwdWJsaWMgdmFsaWRhdGUoYzogRm9ybUNvbnRyb2wpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLnZhbGlkYXRlRm4oYyk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IERpc2FibGVkIFN0YXRlXG4gICAqIEBwYXJhbSBpc0Rpc2FibGVkIFxuICAgKiBAcmV0dXJuIHZvaWRcbiAgICovXG4gIHB1YmxpYyBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmRpc2FibGVkID0gaXNEaXNhYmxlZDtcbiAgfVxufVxuIl19