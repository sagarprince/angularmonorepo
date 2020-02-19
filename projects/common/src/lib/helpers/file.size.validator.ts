import { AbstractControl, ValidatorFn } from '@angular/forms';

/**
 * Validate File Size
 * @param size in KB
 * @return ValidatorFn
 */
export function ValidateFileSize(size: number): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
        if (control.value !== null && control.value instanceof File) {
            const file = control.value as File;
            const fileSize = Math.round((file.size / 1000)); // convert bytes into KB
            if (fileSize > size) {
                return { InvalidFileSize: true };
            }
        }
        return null;
    };
}