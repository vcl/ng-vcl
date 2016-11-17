import { EventEmitter, QueryList } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
export declare class TokenComponent {
    label: string;
    selected: boolean;
    removeable: boolean;
    onRemove: EventEmitter<{}>;
    constructor();
    remove(): void;
}
export declare const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any;
export declare class TokenListComponent implements ControlValueAccessor {
    tokens: any[];
    value: any[];
    onChange: EventEmitter<{}>;
    templateItems: QueryList<TokenComponent>;
    constructor();
    ngAfterContentInit(): void;
    ngOnInit(): void;
    change(): void;
    /**
     * things needed for ControlValueAccessor-Interface
     */
    private onTouchedCallback;
    private onChangeCallback;
    writeValue(value: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
}
export declare const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR2: any;
export declare class TokenInputComponent implements ControlValueAccessor {
    tokens: any[];
    addtext: string;
    x: string;
    keydown(ev: any): void;
    remove(token: any): void;
    /**
     * things needed for ControlValueAccessor-Interface
     */
    private onTouchedCallback;
    private onChangeCallback;
    writeValue(tokens: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
}
