import { EventEmitter } from '@angular/core';
/**
*/
export declare class SelectComponent {
    ariaRole: string;
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
    expand(): void;
    onSelect(items: any[]): void;
}
