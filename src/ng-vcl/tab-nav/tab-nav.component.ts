import { WormholeManager, WormholeRef } from './../wormhole/index';
import { Component, Directive, ContentChild, TemplateRef, ContentChildren, QueryList, Input, AfterViewChecked, NgZone, Output, EventEmitter, ViewChild, ViewContainerRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { TabComponent } from './tab.component';

@Component({
  selector: 'vcl-tab-nav',
  templateUrl: 'tab-nav.component.html'
})
export class TabNavComponent {

  @ViewChild('tabContent', {read: ViewContainerRef})
  tabContent: ViewContainerRef ;

  wormholeManager: WormholeManager;
  wormhole: WormholeRef;

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

    if (tabIdx >= 0 && tabComp instanceof TabComponent && !tabComp.disabled) {
      this.dispose();

      this.selectedTabIndex = tabIdx;
      this.selectedTabIndexChange$.emit(tabIdx);
      this.wormhole = this.wormholeManager.connect(tabComp.content);
    }
  }

  dispose() {
    if (this.wormhole) {
      this.wormhole.disconnect();
    }
  }

  ngAfterContentInit() {
    this.wormholeManager = new WormholeManager(this.tabContent);
    this.selectTab(this.selectedTabIndex);
  }

  ngOnDestroy() {
    this.dispose();
  }
}
