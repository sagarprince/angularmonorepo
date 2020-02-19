import { ToastrManager } from "./toastr.service";

export class Toastr {
  id: number;
  toastrManager: ToastrManager;
  config: any = {
    position: '',
    animate: "slideFromLeft",
    dismiss: "auto",
    enableHTML: false,
    titleClass: "",
    messageClass: "",
    toastTimeout: 3000,
    showCloseButton: false
  };
  timeoutId: any;

  constructor(
    public type: string,
    public message: string,
    public title?: string,
    public data?: Object
  ) {}

  public dismiss() {
    this.toastrManager.dismissToastr(this);
  }
}
