import { Observable } from 'rxjs/Observable';
import { Wormhole } from './../../directives/wormhole';
import { TemplateRef, QueryList, EventEmitter } from '@angular/core';
export declare class TabLabelDirective extends Wormhole {
    protected templateRef: TemplateRef<any>;
    constructor(templateRef: TemplateRef<any>);
}
export declare class TabContentDirective extends Wormhole {
    protected templateRef: TemplateRef<any>;
    constructor(templateRef: TemplateRef<any>);
}
export declare class TabComponent {
    label: TabLabelDirective;
    content: TabContentDirective;
    disabled: boolean;
    tabClass: string;
    constructor();
}
export declare class TabNavComponent {
    tabs: QueryList<TabComponent>;
    layout: string;
    tabbableClass: string;
    tabsClass: string;
    tabContentClass: string;
    borders: boolean;
    selectedTabIndex: number;
    selectedTabIndexChange$: EventEmitter<number>;
    readonly selectedTabIndexChange: Observable<number>;
    constructor();
    selectTab(tab: number | TabComponent): void;
}
