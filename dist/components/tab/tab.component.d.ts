import { Observable } from 'rxjs/Observable';
import { Wormhole } from './../../directives/wormhole';
import { TemplateRef, QueryList, NgZone, EventEmitter } from '@angular/core';
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
    constructor();
}
export declare class TabNavComponent {
    private _zone;
    tabs: QueryList<TabComponent>;
    selectedTabIndex: number;
    selectedTabIndexChange$: EventEmitter<number>;
    readonly selectedTabIndexChange: Observable<number>;
    constructor(_zone: NgZone);
    selectTab(tab: number | TabComponent): void;
}
