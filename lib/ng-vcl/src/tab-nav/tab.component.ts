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
  ChangeDetectorRef,
  OnDestroy,
} from '@angular/core';
import { Tab, TAB_NAV_TOKEN, TabNav } from './interfaces';
import { distinctUntilChanged, map, Subject, takeUntil } from 'rxjs';

@Directive({
  selector: 'vcl-tab-label',
})
export class VCLTabLabelDirective {
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
export class VCLTabComponent implements OnInit, OnDestroy, Tab {
  private readonly destroy$ = new Subject<void>();

  constructor(
    @Inject(TAB_NAV_TOKEN)
    private tabNav: TabNav,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.tabNav.currentTab$
      .pipe(
        map(tab => tab === this),
        distinctUntilChanged(),
        takeUntil(this.destroy$)
      )
      .subscribe(isSelected => {
        queueMicrotask(() => {
          this.selected = isSelected;
          this.cdRef.markForCheck();
        });
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
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

    this.tabNav.selectTab(this);
  }
}
