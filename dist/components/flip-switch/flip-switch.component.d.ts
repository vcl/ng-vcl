import { EventEmitter } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
export declare const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any;
export declare class FlipSwitchComponent implements ControlValueAccessor {
    onLabel: string;
    offLabel: string;
    value: boolean;
    toggle$: EventEmitter<boolean>;
    onClick(): void;
    constructor();
    /**
     * things needed for ControlValueAccessor-Interface
     */
    private onTouchedCallback;
    private onChangeCallback;
    writeValue(value: boolean): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
}
