import { ToastrManager } from "./toastr.service";
export declare class Toastr {
    type: string;
    message: string;
    title?: string;
    data?: Object;
    id: number;
    toastrManager: ToastrManager;
    config: any;
    timeoutId: any;
    constructor(type: string, message: string, title?: string, data?: Object);
    dismiss(): void;
}
