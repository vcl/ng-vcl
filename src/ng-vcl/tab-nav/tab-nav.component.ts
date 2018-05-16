import { Wormhole, WormholeHost } from './../wormhole/index';
import { Component, Directive, ContentChild, TemplateRef, ContentChildren, QueryList, Input, AfterViewChecked, NgZone, Output, EventEmitter, ViewChild, ViewContainerRef } from '@angular/core';
import { Observable } from 'rxjs';
import { TabComponent } from './tab.component';

@Component({
  selector: 'vcl-tab-nav',
  templateUrl: 'tab-nav.component.html'
})
export class TabNavComponent {

  wormholeHost?: WormholeHost;

  @ViewChild('tabContent', {read: ViewContainerRef})
  set tabContent(tabContent: ViewContainerRef | undefined) {
    if (tabContent) {
      this.wormholeHost = new WormholeHost(tabContent);
    }
  }

  @ContentChildren(TabComponent)
  tabs?: QueryList<TabComponent>;

  @Input()
  layout: string = '';

  @Input()
  tabbableClass: string = '';

  @Input()
  tabsClass: string = '';

  @Input()
  tabContentClass: string = '';

  @Input()
  hideContent = false;

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
    if (!this.tabs) {
      return;
    }

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
      if (this.wormholeHost) {
        this.wormholeHost.clearWormholes();
        this.wormholeHost.connectWormhole(tabComp.content);
      }

      this.selectedTabIndex = tabIdx;
    }
  }

  onTabClick(tab: number | TabComponent) {
    this.selectTab(tab);
    this.selectedTabIndexChange$.emit(this.selectedTabIndex);
  }

  ngAfterContentInit() {
    this.selectTab(this.selectedTabIndex);
  }

  ngOnDestroy() {
    if (this.wormholeHost) {
      this.wormholeHost.clearWormholes();
    }
  }
}
