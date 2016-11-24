import { OnInit, OnChanges } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
export declare const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any;
export declare class RadioGroupComponent implements OnInit, OnChanges, ControlValueAccessor {
    value: string;
    options: any[];
    disabled: boolean;
    constructor();
    ngOnInit(): void;
    ngOnChanges(): void;
    isChecked(option: any): boolean;
    buttonChanged(value: any, state: any): void;
    /**
     * things needed for ControlValueAccessor-Interface
     */
    private onTouchedCallback;
    private onChangeCallback;
    writeValue(value: boolean): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
}
