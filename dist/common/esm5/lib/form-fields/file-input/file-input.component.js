/**
 * @fileoverview added by tsickle
 * Generated from: lib/form-fields/file-input/file-input.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Core
import { Component, Input, Output, EventEmitter, forwardRef, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS, FormControl } from '@angular/forms';
var FileInputComponent = /** @class */ (function () {
    function FileInputComponent(cd) {
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
        function (_) { });
        this.onTouched = (/**
         * @return {?}
         */
        function () { });
        this.validateFn = (/**
         * @return {?}
         */
        function () { });
        this.disabled = false;
    }
    /**
     * ngOnInit
     * @return void
     */
    /**
     * ngOnInit
     * @return {?} void
     */
    FileInputComponent.prototype.ngOnInit = /**
     * ngOnInit
     * @return {?} void
     */
    function () { };
    /**
     * Write a value to the control
     * @param value
     * @return void
     */
    /**
     * Write a value to the control
     * @param {?} value
     * @return {?} void
     */
    FileInputComponent.prototype.writeValue = /**
     * Write a value to the control
     * @param {?} value
     * @return {?} void
     */
    function (value) {
        if (value) {
            this.value = value;
            if (this.isImagePreview) {
                this.imageUrl = value;
            }
            else {
                this.fileName = value.substring(value.lastIndexOf('/') + 1);
            }
        }
    };
    /**
     * Register a function to tell Angular when the value of the input changes
     * @param fn
     * @return void
     */
    /**
     * Register a function to tell Angular when the value of the input changes
     * @param {?} fn
     * @return {?} void
     */
    FileInputComponent.prototype.registerOnChange = /**
     * Register a function to tell Angular when the value of the input changes
     * @param {?} fn
     * @return {?} void
     */
    function (fn) {
        this.propagateChange = fn;
    };
    /**
     * Register a function to tell Angular when the input has been touched
     * @param fn
     * @return void
     */
    /**
     * Register a function to tell Angular when the input has been touched
     * @param {?} fn
     * @return {?} void
     */
    FileInputComponent.prototype.registerOnTouched = /**
     * Register a function to tell Angular when the input has been touched
     * @param {?} fn
     * @return {?} void
     */
    function (fn) {
        this.onTouched = fn;
    };
    /**
     * Sanitize File Name
     * @param name
     * @return string
     */
    /**
     * Sanitize File Name
     * @param {?} name
     * @return {?} string
     */
    FileInputComponent.prototype.sanitizeFileName = /**
     * Sanitize File Name
     * @param {?} name
     * @return {?} string
     */
    function (name) {
        /** @type {?} */
        var dotIndex = name.lastIndexOf('.');
        /** @type {?} */
        var extension = name.substring(dotIndex + 1);
        name = name.substring(0, dotIndex);
        name = name.replace(/^\s+|\s+$/g, ''); // trim
        name = name.toLowerCase();
        /** @type {?} */
        var from = "àáäâèéëêìíïîòóöôùúüûñç/_,:;";
        /** @type {?} */
        var to = "aaaaeeeeiiiioooouuuunc------";
        for (var i = 0, l = from.length; i < l; i++) {
            name = name.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
        }
        name = name.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
            .replace(/\s+/g, '-') // collapse whitespace and replace by -
            .replace(/-+/g, '-'); // collapse dashes
        return name + '.' + extension;
    };
    /**
     * On Change
     * @param event
     * @return void
     */
    /**
     * On Change
     * @param {?} event
     * @return {?} void
     */
    FileInputComponent.prototype.onChange = /**
     * On Change
     * @param {?} event
     * @return {?} void
     */
    function (event) {
        /** @type {?} */
        var _value = event.target.files.length > 0 ? event.target.files[0] : null;
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
    };
    /**
     * On Select File
     * @return void
     */
    /**
     * On Select File
     * @return {?} void
     */
    FileInputComponent.prototype.onSelectFile = /**
     * On Select File
     * @return {?} void
     */
    function () {
        this.fileInput.nativeElement.click();
    };
    /**
     * On Remove File
     * @return void
     */
    /**
     * On Remove File
     * @return {?} void
     */
    FileInputComponent.prototype.onRemoveFile = /**
     * On Remove File
     * @return {?} void
     */
    function () {
        this.value = null;
        this.fileInput.nativeElement.value = null;
        this.propagateChange(this.value);
    };
    /**
     * Show Image Preview
     * @return void
     */
    /**
     * Show Image Preview
     * @private
     * @return {?} void
     */
    FileInputComponent.prototype.showImagePreview = /**
     * Show Image Preview
     * @private
     * @return {?} void
     */
    function () {
        var _this = this;
        /** @type {?} */
        var mimeType = this.value.type;
        if (mimeType.match(/image\/*/) == null) {
            return;
        }
        /** @type {?} */
        var reader = new FileReader();
        reader.readAsDataURL(this.value);
        reader.onload = (/**
         * @param {?} _
         * @return {?}
         */
        function (_) {
            _this.imageUrl = reader.result;
            _this.cd.detectChanges();
        });
    };
    /**
     * Validate
     * @param c
     * @return any
     */
    /**
     * Validate
     * @param {?} c
     * @return {?} any
     */
    FileInputComponent.prototype.validate = /**
     * Validate
     * @param {?} c
     * @return {?} any
     */
    function (c) {
        return this.validateFn(c);
    };
    /**
     * Set Disabled State
     * @param isDisabled
     * @return void
     */
    /**
     * Set Disabled State
     * @param {?} isDisabled
     * @return {?} void
     */
    FileInputComponent.prototype.setDisabledState = /**
     * Set Disabled State
     * @param {?} isDisabled
     * @return {?} void
     */
    function (isDisabled) {
        this.disabled = isDisabled;
    };
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
                            function () { return FileInputComponent; })),
                            multi: true
                        },
                        {
                            provide: NG_VALIDATORS,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return FileInputComponent; })),
                            multi: true
                        }
                    ],
                    styles: [".file-input__box{background-color:#fff;border:1px dashed #dadce1;height:215px;padding:0 25px;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;position:relative}.file-input__box--selected{border-style:solid;border-top:0;border-left:0;border-right:0;border-bottom:2px solid #4a3ae7}.file-input__box--image-preview{padding:0;border:1px solid #dadce1}.file-input__box__selected-view,.file-input__box__unselected-view{width:100%;text-align:center}.file-input__box__plus-icon{margin-bottom:30px}.file-input__box__plus-icon i{font-size:40px;color:#4a3ae7}.file-input__box__name{margin-bottom:0;font-size:15px;color:#1f2430}.file-input__box__image-preview,.file-input__box__image-preview img{width:100%;height:100%}.file-input__box__change-button{position:absolute;top:auto;bottom:5px;right:5px;left:auto}.file-input__box__change-button ::ng-deep button{width:42px;height:42px}.file-input__error{color:#f44336;font-size:75%;margin-top:5px}"]
                }] }
    ];
    /** @nocollapse */
    FileInputComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
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
    return FileInputComponent;
}());
export { FileInputComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS1pbnB1dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jb21tb24vIiwic291cmNlcyI6WyJsaWIvZm9ybS1maWVsZHMvZmlsZS1pbnB1dC9maWxlLWlucHV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JJLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsYUFBYSxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXJHO0lBb0NFLDRCQUNVLEVBQXFCO1FBQXJCLE9BQUUsR0FBRixFQUFFLENBQW1CO1FBbEJ0QixVQUFLLEdBQVcsYUFBYSxDQUFDO1FBQzlCLFdBQU0sR0FBVyxHQUFHLENBQUM7UUFDckIsWUFBTyxHQUFnQixJQUFJLFdBQVcsRUFBRSxDQUFDO1FBQ3pDLG1CQUFjLEdBQVksS0FBSyxDQUFDO1FBQ2hDLDhCQUF5QixHQUFXLGlEQUFpRCxDQUFDO1FBQ3JGLG9CQUFlLEdBQTBCLElBQUksWUFBWSxFQUFXLENBQUM7UUFDckUsa0JBQWEsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUU5RCxVQUFLLEdBQVEsSUFBSSxDQUFDO1FBRWxCLGFBQVEsR0FBVyxFQUFFLENBQUM7UUFDdEIsYUFBUSxHQUFRLEVBQUUsQ0FBQztRQUNuQiwwQkFBcUIsR0FBWSxLQUFLLENBQUM7UUFRNUMsSUFBSSxDQUFDLGVBQWU7Ozs7UUFBRyxVQUFDLENBQU0sSUFBTyxDQUFDLENBQUEsQ0FBQztRQUN2QyxJQUFJLENBQUMsU0FBUzs7O1FBQUcsY0FBUSxDQUFDLENBQUEsQ0FBQztRQUMzQixJQUFJLENBQUMsVUFBVTs7O1FBQUcsY0FBUSxDQUFDLENBQUEsQ0FBQztRQUM1QixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUN4QixDQUFDO0lBRUQ7OztPQUdHOzs7OztJQUNJLHFDQUFROzs7O0lBQWYsY0FBMEIsQ0FBQztJQUUzQjs7OztPQUlHOzs7Ozs7SUFDSSx1Q0FBVTs7Ozs7SUFBakIsVUFBa0IsS0FBVTtRQUMxQixJQUFJLEtBQUssRUFBRTtZQUNULElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1lBQ25CLElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRTtnQkFDdkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7YUFDdkI7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDN0Q7U0FDRjtJQUNILENBQUM7SUFFRDs7OztPQUlHOzs7Ozs7SUFDSSw2Q0FBZ0I7Ozs7O0lBQXZCLFVBQXdCLEVBQU87UUFDN0IsSUFBSSxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVEOzs7O09BSUc7Ozs7OztJQUNJLDhDQUFpQjs7Ozs7SUFBeEIsVUFBeUIsRUFBTztRQUM5QixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUQ7Ozs7T0FJRzs7Ozs7O0lBQ0ksNkNBQWdCOzs7OztJQUF2QixVQUF3QixJQUFJOztZQUNwQixRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUM7O1lBQ2hDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7UUFDOUMsSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ25DLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU87UUFDOUMsSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQzs7WUFDdEIsSUFBSSxHQUFHLDZCQUE2Qjs7WUFDcEMsRUFBRSxHQUFHLDhCQUE4QjtRQUN2QyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzNDLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3BFO1FBQ0QsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLEVBQUUsQ0FBQyxDQUFDLHVCQUF1QjthQUM1RCxPQUFPLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDLHVDQUF1QzthQUM1RCxPQUFPLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsa0JBQWtCO1FBQzFDLE9BQU8sSUFBSSxHQUFHLEdBQUcsR0FBRyxTQUFTLENBQUM7SUFDaEMsQ0FBQztJQUVEOzs7O09BSUc7Ozs7OztJQUNJLHFDQUFROzs7OztJQUFmLFVBQWdCLEtBQUs7O1lBQ2YsTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJO1FBQ3pFLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNkLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUM7U0FDbkM7UUFDRCxJQUFJLE1BQU0sRUFBRTtZQUNWLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDO1lBQ3BCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdkQsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUNwQyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUU7Z0JBQ3pCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQzthQUNsQjtZQUNELElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRTtnQkFDdkIsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7YUFDekI7WUFDRCxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQztZQUN0RCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDdkM7SUFDSCxDQUFDO0lBRUQ7OztPQUdHOzs7OztJQUNJLHlDQUFZOzs7O0lBQW5CO1FBQ0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDdkMsQ0FBQztJQUVEOzs7T0FHRzs7Ozs7SUFDSSx5Q0FBWTs7OztJQUFuQjtRQUNFLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDMUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVEOzs7T0FHRzs7Ozs7O0lBQ0ssNkNBQWdCOzs7OztJQUF4QjtRQUFBLGlCQVdDOztZQVZPLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUk7UUFDaEMsSUFBSSxRQUFRLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxJQUFJLElBQUksRUFBRTtZQUN0QyxPQUFPO1NBQ1I7O1lBQ0ssTUFBTSxHQUFHLElBQUksVUFBVSxFQUFFO1FBQy9CLE1BQU0sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2pDLE1BQU0sQ0FBQyxNQUFNOzs7O1FBQUcsVUFBQyxDQUFDO1lBQ2hCLEtBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztZQUM5QixLQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQzFCLENBQUMsQ0FBQSxDQUFBO0lBQ0gsQ0FBQztJQUVEOzs7O09BSUc7Ozs7OztJQUNJLHFDQUFROzs7OztJQUFmLFVBQWdCLENBQWM7UUFDNUIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFRDs7OztPQUlHOzs7Ozs7SUFDSSw2Q0FBZ0I7Ozs7O0lBQXZCLFVBQXdCLFVBQW1CO1FBQ3pDLElBQUksQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDO0lBQzdCLENBQUM7O2dCQXhMRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsZ3BEQUEwQztvQkFFMUMsU0FBUyxFQUFFO3dCQUNUOzRCQUNFLE9BQU8sRUFBRSxpQkFBaUI7NEJBQzFCLFdBQVcsRUFBRSxVQUFVOzs7NEJBQUMsY0FBTSxPQUFBLGtCQUFrQixFQUFsQixDQUFrQixFQUFDOzRCQUNqRCxLQUFLLEVBQUUsSUFBSTt5QkFDWjt3QkFDRDs0QkFDRSxPQUFPLEVBQUUsYUFBYTs0QkFDdEIsV0FBVyxFQUFFLFVBQVU7Ozs0QkFBQyxjQUFNLE9BQUEsa0JBQWtCLEVBQWxCLENBQWtCLEVBQUM7NEJBQ2pELEtBQUssRUFBRSxJQUFJO3lCQUNaO3FCQUNGOztpQkFDRjs7OztnQkFuQjJGLGlCQUFpQjs7OzRCQXFCMUcsU0FBUyxTQUFDLFdBQVcsRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTt3QkFDekQsS0FBSzt5QkFDTCxLQUFLOzBCQUNMLEtBQUs7aUNBQ0wsS0FBSzs0Q0FDTCxLQUFLO2tDQUNMLE1BQU07Z0NBQ04sTUFBTTs7SUFnS1QseUJBQUM7Q0FBQSxBQXpMRCxJQXlMQztTQXhLWSxrQkFBa0I7OztJQUM3Qix1Q0FBa0Y7O0lBQ2xGLG1DQUF1Qzs7SUFDdkMsb0NBQThCOztJQUM5QixxQ0FBa0Q7O0lBQ2xELDRDQUF5Qzs7SUFDekMsdURBQStGOztJQUMvRiw2Q0FBK0U7O0lBQy9FLDJDQUFxRTs7SUFFckUsbUNBQXlCOztJQUN6QixzQ0FBeUI7O0lBQ3pCLHNDQUE2Qjs7SUFDN0Isc0NBQTBCOztJQUMxQixtREFBOEM7Ozs7O0lBQzlDLDZDQUFrQzs7Ozs7SUFDbEMsdUNBQTRCOzs7OztJQUM1Qix3Q0FBNkI7Ozs7O0lBRzNCLGdDQUE2QiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcmVcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIGZvcndhcmRSZWYsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiwgTkdfVkFMSURBVE9SUywgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1maWxlLWlucHV0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2ZpbGUtaW5wdXQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9maWxlLWlucHV0LmNvbXBvbmVudC5zY3NzJ10sXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRmlsZUlucHV0Q29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRmlsZUlucHV0Q29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlXG4gICAgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEZpbGVJbnB1dENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICBAVmlld0NoaWxkKCdmaWxlSW5wdXQnLCB7IHJlYWQ6IEVsZW1lbnRSZWYsIHN0YXRpYzogdHJ1ZSB9KSBmaWxlSW5wdXQ6IEVsZW1lbnRSZWY7XG4gIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmcgPSAnU2VsZWN0IEZpbGUnO1xuICBASW5wdXQoKSBhY2NlcHQ6IHN0cmluZyA9ICcqJztcbiAgQElucHV0KCkgY29udHJvbDogRm9ybUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woKTtcbiAgQElucHV0KCkgaXNJbWFnZVByZXZpZXc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgaW52YWxpZEZpbGVTaXplRXJyTWVzc2FnZTogc3RyaW5nID0gJ1BsZWFzZSBzZWxlY3QgYSB2YWxpZCBmaWxlIHdpdGggc3BlY2lmaWVkIHNpemUuJztcbiAgQE91dHB1dCgpIG9uRmlsZVNlbGVjdGlvbjogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICBAT3V0cHV0KCkgb25GaWxlQ2hhbmdlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBwdWJsaWMgdmFsdWU6IGFueSA9IG51bGw7XG4gIHB1YmxpYyBkaXNhYmxlZDogYm9vbGVhbjtcbiAgcHVibGljIGZpbGVOYW1lOiBzdHJpbmcgPSAnJztcbiAgcHVibGljIGltYWdlVXJsOiBhbnkgPSAnJztcbiAgcHVibGljIGlzU2VsZWN0ZWRGaWxlQ2hhbmdlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIHByb3BhZ2F0ZUNoYW5nZTogRnVuY3Rpb247XG4gIHByaXZhdGUgb25Ub3VjaGVkOiBGdW5jdGlvbjtcbiAgcHJpdmF0ZSB2YWxpZGF0ZUZuOiBGdW5jdGlvbjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZlxuICApIHtcbiAgICB0aGlzLnByb3BhZ2F0ZUNoYW5nZSA9IChfOiBhbnkpID0+IHsgfTtcbiAgICB0aGlzLm9uVG91Y2hlZCA9ICgpID0+IHsgfTtcbiAgICB0aGlzLnZhbGlkYXRlRm4gPSAoKSA9PiB7IH07XG4gICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIG5nT25Jbml0XG4gICAqIEByZXR1cm4gdm9pZFxuICAgKi9cbiAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQgeyB9XG5cbiAgLyoqXG4gICAqIFdyaXRlIGEgdmFsdWUgdG8gdGhlIGNvbnRyb2xcbiAgICogQHBhcmFtIHZhbHVlXG4gICAqIEByZXR1cm4gdm9pZFxuICAgKi9cbiAgcHVibGljIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgaWYgKHRoaXMuaXNJbWFnZVByZXZpZXcpIHtcbiAgICAgICAgdGhpcy5pbWFnZVVybCA9IHZhbHVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5maWxlTmFtZSA9IHZhbHVlLnN1YnN0cmluZyh2YWx1ZS5sYXN0SW5kZXhPZignLycpICsgMSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVyIGEgZnVuY3Rpb24gdG8gdGVsbCBBbmd1bGFyIHdoZW4gdGhlIHZhbHVlIG9mIHRoZSBpbnB1dCBjaGFuZ2VzXG4gICAqIEBwYXJhbSBmbiBcbiAgICogQHJldHVybiB2b2lkXG4gICAqL1xuICBwdWJsaWMgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5wcm9wYWdhdGVDaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlciBhIGZ1bmN0aW9uIHRvIHRlbGwgQW5ndWxhciB3aGVuIHRoZSBpbnB1dCBoYXMgYmVlbiB0b3VjaGVkXG4gICAqIEBwYXJhbSBmbiBcbiAgICogQHJldHVybiB2b2lkXG4gICAqL1xuICBwdWJsaWMgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gIH1cblxuICAvKipcbiAgICogU2FuaXRpemUgRmlsZSBOYW1lXG4gICAqIEBwYXJhbSBuYW1lIFxuICAgKiBAcmV0dXJuIHN0cmluZ1xuICAgKi9cbiAgcHVibGljIHNhbml0aXplRmlsZU5hbWUobmFtZSk6IHN0cmluZyB7XG4gICAgY29uc3QgZG90SW5kZXggPSBuYW1lLmxhc3RJbmRleE9mKCcuJyk7XG4gICAgY29uc3QgZXh0ZW5zaW9uID0gbmFtZS5zdWJzdHJpbmcoZG90SW5kZXggKyAxKTtcbiAgICBuYW1lID0gbmFtZS5zdWJzdHJpbmcoMCwgZG90SW5kZXgpO1xuICAgIG5hbWUgPSBuYW1lLnJlcGxhY2UoL15cXHMrfFxccyskL2csICcnKTsgLy8gdHJpbVxuICAgIG5hbWUgPSBuYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgbGV0IGZyb20gPSBcIsOgw6HDpMOiw6jDqcOrw6rDrMOtw6/DrsOyw7PDtsO0w7nDusO8w7vDscOnL18sOjtcIjtcbiAgICBsZXQgdG8gPSBcImFhYWFlZWVlaWlpaW9vb291dXV1bmMtLS0tLS1cIjtcbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IGZyb20ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBuYW1lID0gbmFtZS5yZXBsYWNlKG5ldyBSZWdFeHAoZnJvbS5jaGFyQXQoaSksICdnJyksIHRvLmNoYXJBdChpKSk7XG4gICAgfVxuICAgIG5hbWUgPSBuYW1lLnJlcGxhY2UoL1teYS16MC05IC1dL2csICcnKSAvLyByZW1vdmUgaW52YWxpZCBjaGFyc1xuICAgICAgLnJlcGxhY2UoL1xccysvZywgJy0nKSAvLyBjb2xsYXBzZSB3aGl0ZXNwYWNlIGFuZCByZXBsYWNlIGJ5IC1cbiAgICAgIC5yZXBsYWNlKC8tKy9nLCAnLScpOyAvLyBjb2xsYXBzZSBkYXNoZXNcbiAgICByZXR1cm4gbmFtZSArICcuJyArIGV4dGVuc2lvbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBPbiBDaGFuZ2VcbiAgICogQHBhcmFtIGV2ZW50IFxuICAgKiBAcmV0dXJuIHZvaWRcbiAgICovXG4gIHB1YmxpYyBvbkNoYW5nZShldmVudCk6IHZvaWQge1xuICAgIGxldCBfdmFsdWUgPSBldmVudC50YXJnZXQuZmlsZXMubGVuZ3RoID4gMCA/IGV2ZW50LnRhcmdldC5maWxlc1swXSA6IG51bGw7XG4gICAgaWYgKHRoaXMudmFsdWUpIHtcbiAgICAgIHRoaXMuaXNTZWxlY3RlZEZpbGVDaGFuZ2VkID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKF92YWx1ZSkge1xuICAgICAgdGhpcy52YWx1ZSA9IF92YWx1ZTtcbiAgICAgIHRoaXMuZmlsZU5hbWUgPSB0aGlzLnNhbml0aXplRmlsZU5hbWUodGhpcy52YWx1ZS5uYW1lKTtcbiAgICAgIHRoaXMudmFsdWUuZmlsZU5hbWUgPSB0aGlzLmZpbGVOYW1lO1xuICAgICAgdGhpcy5wcm9wYWdhdGVDaGFuZ2UodGhpcy52YWx1ZSk7XG4gICAgICBpZiAoIXRoaXMuY29udHJvbC5wZW5kaW5nKSB7XG4gICAgICAgIHRoaXMub25Ub3VjaGVkKCk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5pc0ltYWdlUHJldmlldykge1xuICAgICAgICB0aGlzLnNob3dJbWFnZVByZXZpZXcoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMub25GaWxlU2VsZWN0aW9uLmVtaXQodGhpcy5pc1NlbGVjdGVkRmlsZUNoYW5nZWQpO1xuICAgICAgdGhpcy5vbkZpbGVDaGFuZ2VkLmVtaXQodGhpcy5jb250cm9sKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogT24gU2VsZWN0IEZpbGVcbiAgICogQHJldHVybiB2b2lkXG4gICAqL1xuICBwdWJsaWMgb25TZWxlY3RGaWxlKCk6IHZvaWQge1xuICAgIHRoaXMuZmlsZUlucHV0Lm5hdGl2ZUVsZW1lbnQuY2xpY2soKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBPbiBSZW1vdmUgRmlsZVxuICAgKiBAcmV0dXJuIHZvaWRcbiAgICovXG4gIHB1YmxpYyBvblJlbW92ZUZpbGUoKTogdm9pZCB7XG4gICAgdGhpcy52YWx1ZSA9IG51bGw7XG4gICAgdGhpcy5maWxlSW5wdXQubmF0aXZlRWxlbWVudC52YWx1ZSA9IG51bGw7XG4gICAgdGhpcy5wcm9wYWdhdGVDaGFuZ2UodGhpcy52YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogU2hvdyBJbWFnZSBQcmV2aWV3XG4gICAqIEByZXR1cm4gdm9pZFxuICAgKi9cbiAgcHJpdmF0ZSBzaG93SW1hZ2VQcmV2aWV3KCk6IHZvaWQge1xuICAgIGNvbnN0IG1pbWVUeXBlID0gdGhpcy52YWx1ZS50eXBlO1xuICAgIGlmIChtaW1lVHlwZS5tYXRjaCgvaW1hZ2VcXC8qLykgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKHRoaXMudmFsdWUpO1xuICAgIHJlYWRlci5vbmxvYWQgPSAoXykgPT4ge1xuICAgICAgdGhpcy5pbWFnZVVybCA9IHJlYWRlci5yZXN1bHQ7XG4gICAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVmFsaWRhdGVcbiAgICogQHBhcmFtIGNcbiAgICogQHJldHVybiBhbnlcbiAgICovXG4gIHB1YmxpYyB2YWxpZGF0ZShjOiBGb3JtQ29udHJvbCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMudmFsaWRhdGVGbihjKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgRGlzYWJsZWQgU3RhdGVcbiAgICogQHBhcmFtIGlzRGlzYWJsZWQgXG4gICAqIEByZXR1cm4gdm9pZFxuICAgKi9cbiAgcHVibGljIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xuICB9XG59XG4iXX0=