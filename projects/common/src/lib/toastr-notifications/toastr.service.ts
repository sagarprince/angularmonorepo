// Core
import {
  Injectable,
  ApplicationRef,
  ComponentFactoryResolver,
  Injector,
  ComponentRef,
  ReflectiveInjector,
  Provider,
  Type,
  NgZone
} from "@angular/core";
import { Observable, Subject } from "rxjs";

// Config
import { ToastrOptions } from "./toastr.options";
import { Toastr } from "./toastr";

// Component
import { ToastrComponent } from "./toastr.component";

export interface IImplicitContext<T> {
  $implicit?: T;
}

declare var document;

@Injectable()
export class ToastrManager {
  toastrContainers: Array<any> = [];

  private index = 0;
  private toastClicked: Subject<Toastr> = new Subject<Toastr>();

  constructor(
    private _applicationRef: ApplicationRef,
    private _componentFactoryResolver: ComponentFactoryResolver,
    private _injector: Injector,
    private ngZone: NgZone,
    private options: ToastrOptions
  ) { }

  // Create Toastr Component
  private createToastrComponent<T>(type: Type<T>, providers: any = []): ComponentRef<T> {
    // Resolve a factory for creating components of type `type`.
    const factory = this._componentFactoryResolver.resolveComponentFactory(type as Type<T>);
    // Resolve and create an injector with the specified providers.
    const _providers = ReflectiveInjector.resolve(providers);
    const injector = ReflectiveInjector.fromResolvedProviders(_providers, this._injector);
    // Create new node for inserting into document.
    let newNode = document.createElement("div");
    newNode.id = "toastr-node-" + Math.floor(Math.random() * 200);
    document.querySelector("body").appendChild(newNode);
    // Create a component using the previously resolved factory & injector.
    const componentRef = factory.create(injector, [], newNode);
    // Insert new component node into document body.
    this.attachToApplication(componentRef);
    return componentRef;
  }

  // Inserts the component in the root application node.
  private attachToApplication<T>(componentRef: ComponentRef<T>): void {
    this._applicationRef.attachView(componentRef.hostView);
  }

  // Detaches the component from the root application node.
  private detachFromApplication<T>(componentRef: ComponentRef<T>): void {
    this._applicationRef.detachView(componentRef.hostView);
  }

  private isToastrContainerExist(position: any) {
    if (this.toastrContainers.length > 0) {
      const i = this.toastrContainers.findIndex(x => x.position === position);
      if (i > -1) {
        return true;
      }
    }

    return false;
  }

  private getToastrComponentRef(position: any) {
    if (this.toastrContainers.length > 0) {
      const container = this.toastrContainers.find(x => x.position === position);
      return container ? container.ref : null;
    }

    return null;
  }

  createTimeout(toast: Toastr): any {
    let task: any;
    this.ngZone.runOutsideAngular(() => {
      task = setTimeout(
        () => this.ngZone.run(() => this.clearToast(toast)),
        toast.config.toastTimeout
      );
    });

    return task.toString();
  }

  setupToast(toast: Toastr, options?: any): Toastr {
    toast.id = ++this.index;

    if (options && options.hasOwnProperty("toastTimeout")) {
      options.dismiss = "auto";
    }

    const customConfig: any = Object.assign({}, this.options, options || {});

    Object.keys(toast.config).forEach(k => {
      if (customConfig.hasOwnProperty(k)) {
        toast.config[k] = customConfig[k];
      }
    });

    if (toast.config.dismiss === "auto") {
      toast.timeoutId = this.createTimeout(toast);
    }

    toast.toastrManager = this; // bind ToastrManager instance to Toastr

    const position = toast.config.position;

    if (this.isToastrContainerExist(position)) {
      this.getToastrComponentRef(position).instance.addToastr(toast);
    }

    return toast;
  }

  private clearToast(toast: Toastr) {
    const position = toast.config.position;
    if (this.isToastrContainerExist(position)) {
      let instance = this.getToastrComponentRef(position).instance;
      instance.removeToastr(toast);
    }
  }

  private clearAllToasts() {
    if (this.toastrContainers.length > 0) {
      this.toastrContainers.forEach(component => {
        console.log(component);
        const ref = component.ref;
        const instance = component.ref.instance;
        instance.removeAllToasts();
        this.dispose(ref);
      });
    }
  }

  private dispose(toastrComponentRef: ComponentRef<ToastrComponent>) {
    if (toastrComponentRef) {
      const i = this.toastrContainers.findIndex(x => x.position === toastrComponentRef.instance.position);
      if (i > -1) {
        this.toastrContainers.splice(i, 1);
      }
      this.detachFromApplication(toastrComponentRef);
    }
  }

  private _onToastClicked(toast: Toastr) {
    this.toastClicked.next(toast);
    if (toast.config.dismiss !== "controlled") {
      this.clearToast(toast);
    }
  }

  public dismissToastr(toast: Toastr) {
    this.clearToast(toast);
  }

  public dismissAllToastr() {
    this.clearAllToasts();
  }

  public onClickToast(): Observable<Toastr> {
    return this.toastClicked.asObservable();
  }

  public showToastr(toastr: Toastr, options?: Object): Promise<Toastr> {
    const opt = Object.assign({}, this.options, options);

    return new Promise((resolve, reject) => {
      if (!this.isToastrContainerExist(opt.position)) {
        const providers = [{ provide: ToastrOptions, useValue: opt }];
        let toastrComponentRef = this.createToastrComponent<ToastrComponent>(
          ToastrComponent,
          providers
        );

        toastrComponentRef.instance.onToastClicked = (toast: Toastr) => {
          this._onToastClicked(toast);
        };

        toastrComponentRef.instance.onExit().subscribe(() => {
          this.dispose(toastrComponentRef);
        });

        this.toastrContainers.push({
          position: opt.position,
          ref: toastrComponentRef
        });
      }

      resolve(this.setupToast(toastr, options));
    });
  }

  public errorToastr(message: string, title?: string, options?: any): Toastr {
    const data = options && options.data ? options.data : null;
    const toast = new Toastr("error", message, title, data);
    this.showToastr(toast, options);
    return toast;
  }

  public infoToastr(message: string, title?: string, options?: any): Toastr {
    const data = options && options.data ? options.data : null;
    const toast = new Toastr("info", message, title, data);
    this.showToastr(toast, options);
    return toast;
  }

  public successToastr(message: string, title?: string, options?: any): Toastr {
    const data = options && options.data ? options.data : null;
    const toast = new Toastr("success", message, title, data);
    this.showToastr(toast, options);
    return toast;
  }

  public warningToastr(message: string, title?: string, options?: any): Toastr {
    const data = options && options.data ? options.data : null;
    const toast = new Toastr("warning", message, title, data);
    this.showToastr(toast, options);
    return toast;
  }

  public customToastr(message: string, title?: string, options?: any): Toastr {
    const data = options && options.data ? options.data : null;
    const toast = new Toastr("custom", message, title, data);
    this.showToastr(toast, options);
    return toast;
  }

  public successNotification(message: string) {
    this.successToastr(message, '', {
      animate: 'slideFromTop',
      position: 'top-full-width',
      maxShown: 1,
      showCloseButton: true
    });
  }

  public errorNotification(message: string) {
    this.errorToastr(message, '', {
      animate: 'slideFromTop',
      position: 'top-full-width',
      maxShown: 1,
      showCloseButton: true
    });
  }
}
