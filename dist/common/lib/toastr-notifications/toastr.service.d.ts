import { ApplicationRef, ComponentFactoryResolver, Injector, NgZone } from "@angular/core";
import { Observable } from "rxjs";
import { ToastrOptions } from "./toastr.options";
import { Toastr } from "./toastr";
export interface IImplicitContext<T> {
    $implicit?: T;
}
export declare class ToastrManager {
    private _applicationRef;
    private _componentFactoryResolver;
    private _injector;
    private ngZone;
    private options;
    toastrContainers: Array<any>;
    private index;
    private toastClicked;
    constructor(_applicationRef: ApplicationRef, _componentFactoryResolver: ComponentFactoryResolver, _injector: Injector, ngZone: NgZone, options: ToastrOptions);
    private createToastrComponent;
    private attachToApplication;
    private detachFromApplication;
    private isToastrContainerExist;
    private getToastrComponentRef;
    createTimeout(toast: Toastr): any;
    setupToast(toast: Toastr, options?: any): Toastr;
    private clearToast;
    private clearAllToasts;
    private dispose;
    private _onToastClicked;
    dismissToastr(toast: Toastr): void;
    dismissAllToastr(): void;
    onClickToast(): Observable<Toastr>;
    showToastr(toastr: Toastr, options?: Object): Promise<Toastr>;
    errorToastr(message: string, title?: string, options?: any): Toastr;
    infoToastr(message: string, title?: string, options?: any): Toastr;
    successToastr(message: string, title?: string, options?: any): Toastr;
    warningToastr(message: string, title?: string, options?: any): Toastr;
    customToastr(message: string, title?: string, options?: any): Toastr;
    successNotification(message: string): void;
    errorNotification(message: string): void;
}
