import { Component, ContentChildren, QueryList, Input, Output,
         EventEmitter, ViewChild, HostBinding, ElementRef, AfterViewInit, ChangeDetectionStrategy, OnDestroy, SimpleChanges, OnChanges, ChangeDetectorRef } from '@angular/core';
import { TabComponent } from './tab.component';
import { TAB_NAV_TOKEN, Tab, TabNav } from './interfaces';
import { hasProjectedContent } from '../core/index';
import { Subject } from 'rxjs';

@Component({
  selector: 'vcl-tab-nav',
  templateUrl: 'tab-nav.component.html',
  exportAs: 'vclTabNav',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{
    provide: TAB_NAV_TOKEN,
    useExisting: TabNavComponent
  }]
})
export class TabNavComponent implements AfterViewInit, OnDestroy, TabNav, OnChanges {

  constructor(private cdRef: ChangeDetectorRef) { }

  private _currentTabChangedEmitter = new Subject<void>();

  currentTabChanged = this._currentTabChangedEmitter.asObservable();

  @HostBinding('class.vclTabbable')
  classVclTabbable = true;

  @HostBinding('class.vclTabsLeft')
  get classVclTabsLeft() {
    return this.layout === 'left';
  }

  @HostBinding('class.vclTabsRight')
  get classVclTabsRight() {
    return this.layout === 'right';
  }

  @ContentChildren(TabComponent)
  tabs?: QueryList<Tab>;

  @Input()
  layout?: 'left' | 'right';

  @Input()
  selectedTabIndex = 0;

  currentTab?: Tab;

  // Sets vclTabStyleUni on vclTabs and removes vclNoBorder on vclTabContent when true
  @Input()
  borders = false;

  @ViewChild('panel', { read: ElementRef, static: false })
  panel?: ElementRef<HTMLElement>;

  @Output()
  selectedTabIndexChange: EventEmitter<number> = new EventEmitter<number>();

  get hasContent() {
    return !!this.panel && hasProjectedContent(this.panel);
  }

  // Sets a valid selectedTabIndex
  selectTab(tab: Tab) {
    if (!this.tabs) {
      return;
    }

    const tabs = this.tabs.toArray();
    const tabIndex = tabs.findIndex(_tab => _tab === tab);

    this.selectedTabIndex = tabIndex;
    this.currentTab = tab;

    this.selectedTabIndexChange.next(this.selectedTabIndex);
    this._currentTabChangedEmitter.next();
    this.cdRef.markForCheck();
    this.cdRef.detectChanges();
  }

  selectTabIndex(idx: number) {
    this.selectedTabIndex = idx;

    if (!this.tabs) {
      return;
    }

    const tabs = this.tabs.toArray();
    let nextTab: Tab;

    if (typeof idx === 'number' && tabs[idx]) {
      nextTab = tabs[idx];
    }

    this.currentTab = nextTab;
    this._currentTabChangedEmitter.next();
    this.cdRef.markForCheck();
    this.cdRef.detectChanges();
  }


  ngAfterViewInit() {
    this.selectTabIndex(this.selectedTabIndex);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.selectedTabIndex) {
      this.selectTabIndex(changes.selectedTabIndex.currentValue);
    }
  }

  ngOnDestroy() {
    this._currentTabChangedEmitter.complete();
  }
}
