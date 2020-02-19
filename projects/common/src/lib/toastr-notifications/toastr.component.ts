// Core
import { Component, ChangeDetectorRef, NgZone, OnDestroy } from "@angular/core";
import { AnimationEvent } from "@angular/animations";
import { DomSanitizer } from "@angular/platform-browser";
import { Observable, Subject } from "rxjs";
import { first } from "rxjs/operators";

// Config
import { Toastr } from "./toastr";
import { ToastrOptions } from "./toastr.options";
import { ToastrAnimations } from "./toastr.animations";

@Component({
  selector: "app-toastr",
  templateUrl: "./toastr.component.html",
  styleUrls: ["./toastr.component.scss"],
  animations: [ToastrAnimations]
})
export class ToastrComponent implements OnDestroy {
  messageClass: string;
  titleClass: string;
  position: string;
  maxShown: number;
  newestOnTop: boolean;
  animate: string;
  toastrs: Toastr[] = [];

  private _fresh: boolean = true;
  public onToastClicked: (toast: Toastr) => void;

  private _onEnter: Subject<any> = new Subject();
  private _onExit: Subject<any> = new Subject();

  constructor(
    public sanitizer: DomSanitizer,
    private cdr: ChangeDetectorRef,
    private _zone: NgZone,
    options: ToastrOptions
  ) {
    Object.assign(this, options);
  }

  onEnter(): Observable<void> {
    return this._onEnter.asObservable();
  }

  onExit(): Observable<void> {
    return this._onExit.asObservable();
  }

  addToastr(toast: Toastr) {
    if (this.position.indexOf("top") > 0) {
      if (this.newestOnTop) {
        this.toastrs.unshift(toast);
      } else {
        this.toastrs.push(toast);
      }

      if (this.toastrs.length > this.maxShown) {
        const diff = this.toastrs.length - this.maxShown;

        if (this.newestOnTop) {
          this.toastrs.splice(this.maxShown);
        } else {
          this.toastrs.splice(0, diff);
        }
      }
    } else {
      this.toastrs.unshift(toast);
      if (this.toastrs.length > this.maxShown) {
        this.toastrs.splice(this.maxShown);
      }
    }    

    if (this.animate === null && this._fresh) {
      this._fresh = false;
      this._onEnter.next();
      this._onEnter.complete();
    }

    this.cdr.detectChanges();
  }

  removeToastr(toast: Toastr) {
    if (toast.timeoutId) {
      clearTimeout(toast.timeoutId);
      toast.timeoutId = null;
    }

    this.toastrs = this.toastrs.filter(t => {
      return t.id !== toast.id;
    });
  }

  removeAllToasts() {
    this.toastrs.forEach((toast: Toastr) => {
      clearTimeout(toast.timeoutId);
      toast.timeoutId = null;
    });
    
    this.toastrs = [];
  }

  clicked(toast: Toastr) {
    if (this.onToastClicked) {
      this.onToastClicked(toast);
    }
  }

  anyToast(): boolean {
    return this.toastrs.length > 0;
  }

  findToast(toastId: number): Toastr | void {
    for (let toast of this.toastrs) {
      if (toast.id === toastId) {
        return toast;
      }
    }
    return null;
  }

  onAnimationEnd(event: AnimationEvent) {
    if (event.toState === "void" && !this.anyToast()) {
      this._ngExit();
    } else if (this._fresh && event.fromState === "void") {
      // notify when first animation is done
      this._fresh = false;
      this._zone.run(() => {
        this._onEnter.next();
        this._onEnter.complete();
      });
    }
  }

  private _ngExit() {
    this._zone.onMicrotaskEmpty.subscribe(() => {
      this._onExit.next();
      this._onExit.complete();
    });
  }

  ngOnDestroy() {
    this._ngExit();
  }
}
