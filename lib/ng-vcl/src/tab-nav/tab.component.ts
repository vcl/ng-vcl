import { Component, ViewChild, Input, Directive, TemplateRef, HostBinding, Inject, HostListener, ViewContainerRef, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Tab, TAB_NAV_TOKEN, TabNav } from './interfaces';
import { TemplatePortal } from '@angular/cdk/portal';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'vcl-tab-label',
  template: '<ng-content></ng-content>',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabLabelComponent {
  @HostBinding('class.vclTabLabel')
  classCclTabLabel = true;
}

@Component({
  selector: 'vcl-tab',
  templateUrl: './tab.component.html',
  exportAs: 'vclTab',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabComponent implements Tab, AfterViewInit {

  constructor(
    @Inject(TAB_NAV_TOKEN)
    private tabNav: TabNav,
    private viewContainerRef: ViewContainerRef
    ) {
      tabNav.currentTabChanged.pipe(debounceTime(0)).subscribe(() => {
        this.selected = tabNav.currentTab === this;
      });
    }

  @ViewChild('contentTemplate', { read: TemplateRef, static: false })
  contentTemplate?: TemplateRef<any>;

  portal?: TemplatePortal;

  @HostBinding('class.vclTab')
  classVclTab = true;

  @HostBinding('attr.role')
  attrRole = 'tab';

  @HostBinding('class.vclDisabled')
  @Input()
  disabled = false;

  @HostBinding('class.vclSelected')
  @HostBinding('attr.aria-selected')
  selected = false;

  @HostListener('click')
  onClick() {
    if (this.disabled) {
      return;
    }
    this.selected = true;
    this.tabNav.selectTab(this);
  }

  ngAfterViewInit() {
    this.portal = this.contentTemplate ? new TemplatePortal(this.contentTemplate, this.viewContainerRef) : undefined;
  }
}
