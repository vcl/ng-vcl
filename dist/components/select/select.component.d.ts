/// <reference types="core-js" />
import { EventEmitter, QueryList } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
export declare class SelectOptionComponent {
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
    templateItems: QueryList<SelectOptionComponent>;
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
    ngAfterContentInit(): void;
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
