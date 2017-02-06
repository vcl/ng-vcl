import { Observable } from 'rxjs/Observable';
import { Component, Directive, ContentChild, TemplateRef, ContentChildren, QueryList, Input, AfterViewChecked, NgZone, Output, EventEmitter, ViewChild } from '@angular/core';

@Directive({ selector: '[vcl-tab-label]' })
export class TabLabelDirective { }

@Component({
  selector: 'vcl-tab',
  template: '<template><ng-content></ng-content></template>'
})
export class TabComponent {
  @ContentChild(TabLabelDirective, { read: TemplateRef })
  label: TabLabelDirective;

  @ViewChild(TemplateRef)
  content: TemplateRef<any>;

  @Input()
  disabled = false;

  @Input()
  tabClass: string = '';
}

@Component({
  selector: 'vcl-tab-nav',
  templateUrl: 'tab-nav.component.html'
})
export class TabNavComponent {

  @ContentChildren(TabComponent)
  tabs: QueryList<TabComponent>;

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
