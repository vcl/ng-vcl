/// <reference types="core-js" />
import { EventEmitter, QueryList } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
export declare class SelectOptionComponent {
    value: string;
    label: string;
    sublabel: string;
    class: string;
    constructor();
    /**
     * transforms this NavigationItemComponent into an object,
     * so it can be handled the same way as an inputList
     * @return {Object}
     */
    toObject(): Object;
}
export declare const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any;
export declare class SelectComponent implements ControlValueAccessor {
    popoverTarget: string;
    value: string | string[];
    select: EventEmitter<any[]>;
    expanded: boolean;
    items: any[];
    templateItems: QueryList<SelectOptionComponent>;
    minSelectableItems: number;
    maxSelectableItems: number;
    expandedIcon: string;
    collapsedIcon: string;
    displayValue: string;
    changeEE: EventEmitter<string | string[]>;
    dropdown: any;
    selectedItems: any;
    constructor();
    ngOnInit(): void;
    ngAfterContentInit(): void;
    expand: () => boolean;
    onOutsideClick: () => false;
    onSelect(items: any[]): void;
    /**
     * things needed for ControlValueAccessor-Interface
     */
    private onTouchedCallback;
    private onChangeCallback;
    writeValue(value: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
}
