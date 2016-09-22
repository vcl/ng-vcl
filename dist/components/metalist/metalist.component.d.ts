import { EventEmitter, OnInit } from '@angular/core';
/**
*/
export declare class MetalistComponent implements OnInit {
    select: EventEmitter<any[]>;
    items: any[];
    meta: any;
    minSelectableItems: number;
    maxSelectableItems: number;
    maxItemsSelected: boolean;
    next(): void;
    prev(): void;
    ngOnInit(): void;
    selectItem(item: any): void;
    deSelectItem(item: any): void;
    getSelectedItems(): any[];
    setSelectedItems(): void;
    getMarkedItemIndex(): number;
    getMarkedItemMeta(): any;
    setMarkedIndex(index: number): void;
    setMarkedItem(item: any): void;
    template: any;
    getMeta(item: any): any;
}
