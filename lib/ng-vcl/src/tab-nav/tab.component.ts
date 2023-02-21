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
} from '@angular/core';
import { Tab, TAB_NAV_TOKEN, TabNav } from './interfaces';

@Directive({
  selector: 'vcl-tab-label',
})
export class TabLabelDirective {
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
export class TabComponent implements OnInit, Tab {
  constructor(
    @Inject(TAB_NAV_TOKEN)
    private tabNav: TabNav
  ) {}

  ngOnInit() {
    this.tabNav.currentTab$.subscribe(tab => {
      setTimeout(() => {
        this.selected = tab === this;
      }, 0);
    });
  }

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
}
