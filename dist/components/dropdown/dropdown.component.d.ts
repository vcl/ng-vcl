import { EventEmitter } from '@angular/core';
import { MetalistComponent } from '../metalist/metalist.component';
/**
*/
export declare class DropdownComponent {
    constructor();
    select: EventEmitter<any[]>;
    items: any[];
    tabindex: number;
    expanded: boolean;
    expandedChange: EventEmitter<boolean>;
    maxSelectableItems: number;
    minSelectableItems: number;
    ariaRole: string;
    selectItem(item: any, meta: any, metalist: MetalistComponent): void;
    onSelect(selectedItems: any[]): void;
    metaInformation: any;
}
