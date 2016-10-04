import { Observable } from 'rxjs/Observable';
import { Wormhole } from './../../directives/wormhole';
import { Component, Directive, ContentChild, TemplateRef, ContentChildren, QueryList, Input, AfterViewChecked, NgZone, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[vcl-tab-label]'
})
export class TabLabelDirective extends Wormhole  {

  constructor(protected templateRef: TemplateRef<any>) {
    super(templateRef);
  }
}

@Directive({
  selector: '[vcl-tab-content]'
})
export class TabContentDirective extends Wormhole {

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

  constructor() { }
}

@Component({
  selector: 'vcl-tab-nav',
  templateUrl: 'tab-nav.component.html'
})
export class TabNavComponent {

  @ContentChildren(TabComponent)
  tabs: QueryList<TabComponent>;

  @Input()
  selectedTabIndex: number = 0;

  selectedTabIndexChange$: EventEmitter<number> = new EventEmitter<number>();
  @Output()
  get selectedTabIndexChange(): Observable<number> {
    return this.selectedTabIndexChange$.asObservable();
  }

  constructor(private _zone: NgZone) {}

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
