import { EventEmitter, QueryList } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { TokenComponent } from './token.component';
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
