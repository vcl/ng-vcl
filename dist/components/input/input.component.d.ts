import { OnInit, EventEmitter, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
export declare class InputComponent implements OnInit {
    private elRef;
    valueType: string;
    typedValue: any;
    _typedValueChange: EventEmitter<any>;
    readonly typedValueChange: Observable<any>;
    selectAllOnFocus: boolean;
    constructor(elRef: ElementRef);
    ngOnInit(): void;
    onChange(value: any): void;
    toType(value: any): any;
    onFocus(value: any): void;
}
