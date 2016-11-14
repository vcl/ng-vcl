/// <reference types="core-js" />
import { Router } from '@angular/router';
import { QueryList, EventEmitter } from '@angular/core';
export declare class NavigationItemComponent {
    label: any;
    route: any;
    items: QueryList<NavigationItemComponent>;
    active: boolean;
    selected: boolean;
    opened: boolean;
    heading: boolean;
    href: any;
    prepIcon: any;
    appIcon: any;
    class: string;
    constructor();
    /**
     * transforms this NavigationItemComponent insto an object,
     * so it can be handled the same way as an inputList
     * @return {Object}
     */
    toObject(): Object;
}
export declare class NavigationComponent {
    private router;
    constructor(router: Router);
    ident: string;
    selectedItem: any;
    ariaRole: string;
    tabindex: number;
    touchAction: string;
    type: string;
    subLevelHintIconClosed: string;
    subLevelHintIconOpened: string;
    subLevelHintIconSide: 'left' | 'right';
    templateItems: QueryList<NavigationItemComponent>;
    navigationItems: any[];
    select: EventEmitter<{}>;
    ngAfterContentInit(): void;
    readonly _navigationItems: any[];
    readonly isVertical: boolean;
    getPrepIcon(item: any): string;
    getAppIcon(item: any): string;
    selectItem(item: any): void;
    onSelect(item: any): void;
    toggleMenu(item: any): void;
}
