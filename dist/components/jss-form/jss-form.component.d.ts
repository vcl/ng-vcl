/// <reference types="core-js" />
import { ControlValueAccessor } from '@angular/forms';
export declare const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any;
export declare class JssFormComponent implements ControlValueAccessor {
    el: any;
    mode: 'tree' | 'form' | 'text' | 'view';
    value: Object;
    editor: any;
    constructor();
    ngAfterViewInit(): void;
    /**
     * get the current state of the edited json
     */
    getValue(): Object;
    /**
     * things needed for ControlValueAccessor-Interface
     */
    private onTouchedCallback;
    private onChangeCallback;
    writeValue(value: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
}
