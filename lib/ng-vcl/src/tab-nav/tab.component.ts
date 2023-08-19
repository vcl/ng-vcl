import {
  Component,
  ViewChild,
  Input,
  Directive,
  TemplateRef,
  HostBinding,
  Inject,
  HostListener,
  ChangeDetectionStrategy,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { Subscription } from 'rxjs';

import { Tab, TAB_NAV_TOKEN, TabNav } from './interfaces';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'vcl-tab-label',
})
export class TabLabelDirective implements OnInit {
  ngOnInit() {
    console.warn('vcl-tab-label is deprecated. Use vcl-label instead');
  }
}

@Component({
  selector: 'vcl-tab',
  templateUrl: './tab.component.html',
  exportAs: 'vclTab',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabComponent implements OnInit, OnDestroy, Tab {
  @ViewChild('contentTemplate', { read: TemplateRef })
  contentTemplate?: TemplateRef<any>;

  @HostBinding('class.tab')
  classVclTab = true;

  @HostBinding('attr.role')
  attrRole = 'tab';

  @HostBinding('class.disabled')
  @Input()
  disabled = false;

  @HostBinding('class.selected')
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

  private subscriptions: Subscription[] = [];

  constructor(
    @Inject(TAB_NAV_TOKEN)
    private tabNav: TabNav
  ) {}

  ngOnInit() {
    this.subscriptions.push(
      this.tabNav.currentTab$.subscribe(tab => {
        setTimeout(() => {
          this.selected = tab === this;
        }, 0);
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s?.unsubscribe());
  }
}
