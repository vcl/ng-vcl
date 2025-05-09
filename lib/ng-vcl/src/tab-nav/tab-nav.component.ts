import {
  Component,
  ContentChildren,
  QueryList,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  HostBinding,
  ElementRef,
  AfterViewInit,
  ChangeDetectionStrategy,
  OnDestroy,
  SimpleChanges,
  OnChanges,
  ChangeDetectorRef,
  ViewContainerRef,
  ViewEncapsulation,
} from '@angular/core';
import { TabComponent } from './tab.component';
import { TAB_NAV_TOKEN, Tab, TabNav } from './interfaces';
import { hasProjectedContent } from '../core/index';
import { BehaviorSubject } from 'rxjs';
import { TemplatePortal } from '@angular/cdk/portal';

@Component({
  selector: 'vcl-tab-nav',
  templateUrl: 'tab-nav.component.html',
  exportAs: 'vclTabNav',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['tab-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: TAB_NAV_TOKEN,
      useExisting: TabNavComponent,
    },
  ],
})
export class TabNavComponent
  implements AfterViewInit, OnDestroy, TabNav, OnChanges
{
  constructor(
    private cdRef: ChangeDetectorRef,
    private viewContainerRef: ViewContainerRef
  ) {}

  private _currentTabEmitter = new BehaviorSubject<Tab | undefined>(undefined);

  currentTab$ = this._currentTabEmitter.asObservable();

  get currentTab() {
    return this._currentTabEmitter.value;
  }

  @HostBinding('class.tabbable')
  _hostClasses = true;

  @HostBinding('class.tabs-left')
  get classVclTabsLeft() {
    return this.layout === 'left';
  }

  @HostBinding('class.tabs-right')
  get classVclTabsRight() {
    return this.layout === 'right';
  }

  @ContentChildren(TabComponent)
  tabs?: QueryList<Tab>;

  @Input()
  layout?: 'left' | 'right';

  @Input()
  selectedTabIndex = 0;

  portal: TemplatePortal;

  // Sets vclTabStyleUni on vclTabs and removes vclNoBorder on vclTabContent when true
  @Input()
  borders = false;

  @ViewChild('panel', { read: ElementRef })
  panel?: ElementRef<HTMLElement>;

  @Output()
  selectedTabIndexChange: EventEmitter<number> = new EventEmitter<number>();

  get hasContent() {
    return !!this.panel && hasProjectedContent(this.panel);
  }

  selectTab(tab: Tab) {
    if (!this.tabs) {
      return;
    }

    const tabs = this.tabs.toArray();
    const tabIndex = tabs.findIndex(_tab => _tab === tab);
    this.selectTabIndex(tabIndex);
  }

  selectTabIndex(idx: number) {
    this.selectedTabIndex = idx;

    if (!this.tabs) {
      return;
    }

    const tabs = this.tabs.toArray();
    let tab: Tab;

    if (typeof idx === 'number' && tabs[idx]) {
      tab = tabs[idx];
    }

    if (!tab) {
      this.portal = undefined;
      this._currentTabEmitter.next(undefined);
      return;
    } else {
      this._currentTabEmitter.next(tab);
      this.portal = new TemplatePortal(
        tab.contentTemplate,
        this.viewContainerRef
      );
      this.cdRef.detectChanges();
    }
  }

  ngAfterViewInit() {
    this.selectTabIndex(this.selectedTabIndex);

    if (this.currentTab) {
      this.portal = new TemplatePortal(
        this.currentTab.contentTemplate,
        this.viewContainerRef
      );
      this.cdRef.detectChanges();
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.selectedTabIndex && !changes.selectedTabIndex.firstChange) {
      this.selectTabIndex(changes.selectedTabIndex.currentValue);
    }
  }

  ngOnDestroy() {
    this._currentTabEmitter.complete();
  }
}
