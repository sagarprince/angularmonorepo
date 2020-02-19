import { Injectable } from "@angular/core";

@Injectable()
export class ToastrOptions {
  position: string = "top-right";
  maxShown: number = 5;
  newestOnTop: boolean = false;
  animate: string = "slideFromLeft";
  toastTimeout: number = 5000;
  enableHTML: boolean = false;
  dismiss: string = "auto"; //'auto' | 'click' | 'controlled'
  messageClass: string = "toastr-message";
  titleClass: string = "toastr-title";
  showCloseButton: boolean = false;

  constructor() {}
}
