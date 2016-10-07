import { EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
export declare class NavigationComponent {
    private router;
    constructor(router: Router);
    selectedItem: any;
    ariaRole: string;
    tabindex: number;
    touchAction: string;
    type: string;
    subLevelHintIconClosed: string;
    subLevelHintIconOpened: string;
    subLevelHintIconSide: 'left' | 'right';
    navigationItems: any[];
    select: EventEmitter<{}>;
    ngOnInit(): void;
    readonly _navigationItems: any[];
    readonly isVertical: boolean;
    getPrepIcon(item: any): string;
    getAppIcon(item: any): string;
    selectItem(item: any): void;
    onSelect(item: any): void;
    toggleMenu(item: any): void;
}
