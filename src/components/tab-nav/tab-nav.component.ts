import { Observable } from 'rxjs/Observable';
import { WormholeGenerator } from './../../directives/wormhole/wormhole.module';
import { Component, Directive, ContentChild, TemplateRef, ContentChildren, QueryList, Input, AfterViewChecked, NgZone, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[vcl-tab-label]'
})
export class TabLabelDirective extends WormholeGenerator  {
  constructor(protected templateRef: TemplateRef<any>) {
    super(templateRef);
  }
}

@Directive({
  selector: '[vcl-tab-content]'
})
export class TabContentDirective extends WormholeGenerator {
  constructor(protected templateRef: TemplateRef<any>) {
    super(templateRef);
  }
}

@Directive({
  selector: 'vcl-tab'
})
export class TabComponent   {

  @ContentChild(TabLabelDirective)
  label: TabLabelDirective;

  @ContentChild(TabContentDirective)
  content: TabContentDirective;

  @Input()
  disabled = false;

  @Input()
  tabClass: string = '';

  constructor() { }
}

@Component({
  selector: 'vcl-tab-nav',
  templateUrl: 'tab-nav.component.html'
})
export class TabNavComponent {

  @ContentChildren(TabComponent)
  tabs: QueryList<TabComponent>;

  @ContentChild(TabContentDirective)
  content: TabContentDirective;

  @Input()
  layout: string = '';

  @Input()
  tabbableClass: string = '';

  @Input()
  tabsClass: string = '';

  @Input()
  tabContentClass: string = '';

  // Sets vclTabStyleUni on vclTabs and removes vclNoBorder on vclTabContent when true
  @Input()
  borders: boolean = false;

  @Input()
  selectedTabIndex: number = 0;

  selectedTabIndexChange$: EventEmitter<number> = new EventEmitter<number>();
  @Output()
  get selectedTabIndexChange(): Observable<number> {
    return this.selectedTabIndexChange$.asObservable();
  }

  // If any of the tabs has we do not render the shared content template
  // as it might be one the tabs content templates 
  get tabsHaveContent() {
    return this.tabs.some(tab => !!tab.content);
  }

  // Sets a valid selectedTabIndex
  selectTab(tab: number | TabComponent) {
    const tabs = this.tabs.toArray();
    let tabIdx;
    let tabComp;

    if (tab instanceof TabComponent) {
      tabIdx = tabs.indexOf(tab);
      tabComp = tab;
    } else if (typeof tab === 'number' && tabs[tab]) {
      tabIdx = tab;
      tabComp = tabs[tabIdx];
    } else {
      tabIdx = -1;
      tabComp = null;
    }

    if (tabIdx >= 0 && tab instanceof TabComponent && !tab.disabled) {
      this.selectedTabIndex = tabIdx;
      this.selectedTabIndexChange$.emit(tabIdx);
    }
  }
}
