import { Wormhole } from './../../directives/wormhole';
import { Component, Directive, ContentChild, TemplateRef, ContentChildren, QueryList, Input, AfterViewInit } from '@angular/core';

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

@Directive({
  selector: '[vcl-tab-label]'
})
export class TabLabelDirective extends Wormhole  {

  constructor(protected templateRef: TemplateRef<any>) {
    super(templateRef);
  }

  ngOnInit() { }

}

@Directive({
  selector: '[vcl-tab-content]'
})
export class TabContentDirective extends Wormhole {

  constructor(protected templateRef: TemplateRef<any>) {
    super(templateRef);
  }

  ngOnInit() { }

}

@Directive({
    selector: 'vcl-tab'
})
export class TabComponent implements AfterViewInit {

  @ContentChild(TabLabelDirective)
  label: TabLabelDirective;

  @ContentChild(TabContentDirective)
  content: TabContentDirective;

  @Input()
  disabled = false;

  constructor() { }

  ngAfterViewInit() {
    console.log(this.label);
   }

}

@Component({
  selector: 'vcl-tab-nav',
  templateUrl: 'tab-nav.component.html'
})
export class TabNavComponent implements AfterViewInit {

  @ContentChildren(TabComponent)
  tabs: QueryList<TabComponent>;

  currentTab: TabComponent;

  constructor() {

  }

  ngAfterViewInit() {
    this.selectTab(0);
  }

  selectTab(tab: number | TabComponent) {
    const tabs = this.tabs.toArray();
    if (typeof tab === 'number' && tabs[tab]) {
      tab = tabs[tab];
    }

    if (tab instanceof TabComponent && !tab.disabled) {
      this.currentTab = tab;
    }
  }
}
