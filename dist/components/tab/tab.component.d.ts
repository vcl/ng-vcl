import { Wormhole } from './../../directives/wormhole';
import { TemplateRef, QueryList, AfterViewInit } from '@angular/core';
/**
vcl-tab-nav

## Usage

```html

<vcl-tab-nav>
  <vcl-tab>
    <template vcl-tab-label>
      Tab1
    </template>
    <template vcl-tab-content>
      Content1
    </template>
  </vcl-tab>
  <vcl-tab>
    <template vcl-tab-label>
      Tab2
    </template>
    <template vcl-tab-content>
      Content2
    </template>
  </vcl-tab>
  <vcl-tab [disabled]="true">
    <template vcl-tab-label>
      Tab3 disabled
    </template>
    <template vcl-tab-content>
      Content2
    </template>
  </vcl-tab>
</vcl-tab-nav>
```
*/
export declare class TabLabelDirective extends Wormhole {
    protected templateRef: TemplateRef<any>;
    constructor(templateRef: TemplateRef<any>);
    ngOnInit(): void;
}
export declare class TabContentDirective extends Wormhole {
    protected templateRef: TemplateRef<any>;
    constructor(templateRef: TemplateRef<any>);
    ngOnInit(): void;
}
export declare class TabComponent implements AfterViewInit {
    label: TabLabelDirective;
    content: TabContentDirective;
    disabled: boolean;
    constructor();
    ngAfterViewInit(): void;
}
export declare class TabNavComponent implements AfterViewInit {
    tabs: QueryList<TabComponent>;
    currentTab: TabComponent;
    constructor();
    ngAfterViewInit(): void;
    selectTab(tab: number | TabComponent): void;
}
