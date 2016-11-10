/// <reference types="core-js" />
import { EventEmitter } from '@angular/core';
import { MetalistComponent } from '../metalist/metalist.component';
import { ControlValueAccessor } from '@angular/forms';
export declare const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any;
export declare class DropdownComponent implements ControlValueAccessor {
    metalist: any;
    select: EventEmitter<any[]>;
    items: any[];
    tabindex: number;
    expanded: boolean;
    expandedChange: EventEmitter<boolean>;
    maxSelectableItems: number;
    minSelectableItems: number;
    ariaRole: string;
    selected: Object[];
    _selectItem(item: any, meta: any, metalist: MetalistComponent): void;
    selectItem(item: any): void;
    onSelect(selectedItems: any[]): void;
    metaInformation: any;
    constructor();
    /**
     * things needed for ControlValueAccessor-Interface
     */
    private onTouchedCallback;
    private onChangeCallback;
    writeValue(value: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
}
