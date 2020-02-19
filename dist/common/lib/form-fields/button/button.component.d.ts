import { OnInit, EventEmitter } from '@angular/core';
export declare class ButtonComponent implements OnInit {
    variant: string;
    type: string;
    name: string;
    iconType: string;
    icon: string;
    disabled: boolean;
    isLoading: boolean;
    color: string;
    onClick: EventEmitter<any>;
    constructor();
    /**
     * ngOnInit
     * @return void
     */
    ngOnInit(): void;
    /**
     * OnClick
     * @return void
     */
    _onClick(): void;
}
