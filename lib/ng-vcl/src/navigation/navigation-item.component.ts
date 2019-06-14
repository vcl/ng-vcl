import { Component, HostBinding, Directive, Input, HostListener, ContentChild, SkipSelf, Inject, Optional, ChangeDetectionStrategy } from '@angular/core';
import { NAVIGATION_TOKEN, Navigation } from './types';

@Component({
  selector: 'vcl-navigation-label',
  template: '<ng-content></ng-content>',
  exportAs: 'vclNavigationLabel'
})
export class NavigationLabelComponent {
  @HostBinding('class.vclNavigationItemLabel')
  classVclNavigationItemLabel = true;
}

@Component({
  selector: 'vcl-navigation-item',
  templateUrl: 'navigation-item.component.html',
  exportAs: 'vclNavigationItem',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationItemComponent {

  constructor(
    @SkipSelf()
    @Inject(NAVIGATION_TOKEN)
    public nav: Navigation,
    @Optional()
    @SkipSelf()
    @Inject(NavigationItemComponent)
    public parentNavItem: NavigationItemComponent
    ) { }

  @HostBinding('class.vclNavigationItem')
  classVclNavigationItem = true;

  @HostBinding('attr.tabindex')
  attrTabindex = 0;

  @Input()
  opened = false;

  @HostBinding('class.vclClose')
  @Input()
  get closed() {
    return !this.opened;
  }

  @HostBinding('class.vclSelected')
  _selected = false;

  @Input()
  set selected(value: boolean) {
    this._selected = value;
    if (value) {
      this.openParent();
    }
  }

  get selected() {
    return this._selected;
  }

  @ContentChild(NAVIGATION_TOKEN as any, { static: false })
  nestedNav?: Navigation;

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent) {
    if (this.nestedNav) {
      this.opened = !this.opened;
    } else {
      this.nav && this.nav.deselectAll();
      this.selected = true;
    }
    event.stopPropagation();
  }

  openParent() {
    if (this.nestedNav) {
      Promise.resolve().then(() => {
        this.opened = true;
      });
    }
    if (this.parentNavItem) {
      this.parentNavItem.openParent();
    }
  }
}
