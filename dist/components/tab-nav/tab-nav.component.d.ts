import { Observable } from 'rxjs/Observable';
import { WormholeGenerator } from './../../directives/wormhole/wormhole.module';
import { TemplateRef, QueryList, EventEmitter } from '@angular/core';
export declare class TabLabelDirective extends WormholeGenerator {
    protected templateRef: TemplateRef<any>;
    constructor(templateRef: TemplateRef<any>);
}
export declare class TabContentDirective extends WormholeGenerator {
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
