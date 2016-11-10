/// <reference types="core-js" />
import { EventEmitter } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
/**
 * see
 * @link http://almerosteyn.com/2016/04/linkup-custom-control-to-ngcontrol-ngmodel
 */
export declare const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any;
export declare class SelectComponent implements ControlValueAccessor {
    dropdown: any;
    clickInside: boolean;
    popoverTarget: string;
    select: EventEmitter<any[]>;
    expanded: boolean;
    items: any[];
    minSelectableItems: number;
    maxSelectableItems: number;
    expandedIcon: string;
    collapsedIcon: string;
    inputValue: string;
    emptyLabel: string;
    displayValue: string;
    selected: Object[];
    constructor();
    ngOnInit(): void;
    expand(): void;
    selectItem(item: any): void;
    /**
     * TODO refactor this
     */
    onSelect(items: any[]): void;
    onOutsideClick(event: any): void;
    /**
     * things needed for ControlValueAccessor-Interface
     */
    private onTouchedCallback;
    private onChangeCallback;
    writeValue(value: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
}
