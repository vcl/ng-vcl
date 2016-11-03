import { EventEmitter } from '@angular/core';
import { MetalistComponent } from '../metalist/metalist.component';
/**
*/
export declare class DropdownComponent {
    metalist: any;
    constructor();
    select: EventEmitter<any[]>;
    items: any[];
    tabindex: number;
    expanded: boolean;
    expandedChange: EventEmitter<boolean>;
    maxSelectableItems: number;
    minSelectableItems: number;
    ariaRole: string;
    _selectItem(item: any, meta: any, metalist: MetalistComponent): void;
    selectItem(item: any): void;
    onSelect(selectedItems: any[]): void;
    metaInformation: any;
}
