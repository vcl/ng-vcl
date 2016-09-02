import { Renderer, OnInit, EventEmitter } from '@angular/core';
export declare class InputComponent implements OnInit {
    private renderer;
    valueType: string;
    typedValue: any;
    typedValueChange: EventEmitter<any>;
    constructor(renderer: Renderer);
    ngOnInit(): void;
    onChange(value: any): void;
    toType(value: any): any;
}
