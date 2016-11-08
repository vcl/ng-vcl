import { EventEmitter } from '@angular/core';
/**
*/
export declare class SelectComponent {
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
    constructor();
    ngOnInit(): void;
    expand(): void;
    selectItem(item: any): void;
    onSelect(items: any[]): void;
    onOutsideClick(event: any): void;
}
