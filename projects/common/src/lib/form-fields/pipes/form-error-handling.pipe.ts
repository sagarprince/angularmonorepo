import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getErrorMessages'
})
export class FormErrorHandlingPipe implements PipeTransform {
  transform(value: Array<any>, controlErrors: any): any {
    let error = '';
    let i = 0;
    while (i < value.length) {
      let x = value[i];
      if (controlErrors && controlErrors.hasOwnProperty(x.key) && controlErrors[x.key]) {
        error = x.message;
        break;
      }
      i++;
    }
    return error;
  }
}
