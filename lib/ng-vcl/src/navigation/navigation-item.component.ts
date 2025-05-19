import {
  Component,
  HostBinding,
  Input,
  HostListener,
  SkipSelf,
  Inject,
  Optional,
  ChangeDetectionStrategy,
  ViewEncapsulation,
} from '@angular/core';
import { NAVIGATION_TOKEN, Navigation } from './types';

@Component({
  selector: 'vcl-navigation-label',
  template: '<ng-content></ng-content>',
  exportAs: 'vclNavigationLabel',
})
export class NavigationLabelComponent {
  @HostBinding('class.navigation-item-label')
  classVclNavigationItemLabel = true;
}

@Component({
  selector: 'vcl-navigation-item',
  templateUrl: 'navigation-item.component.html',
  styleUrls: ['navigation-item.component.scss'],
  encapsulation: ViewEncapsulation.None,
  exportAs: 'vclNavigationItem',
  changeDetection: ChangeDetectionStrategy.OnPush,
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
  ) {}

  @HostBinding('class.navigation-item')
  classVclNavigationItem = true;

  @HostBinding('attr.tabindex')
  attrTabindex = 0;

  @Input()
  opened = false;

  @HostBinding('class.close')
  @Input()
  get closed() {
    return !this.opened;
  }

  @HostBinding('class.selected')
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

  registerNav(nav: Navigation) {
    if (this.nestedNav) {
      throw new Error('A NavigationItem can only have one nested Navigation');
    }
    this.nestedNav = nav;
  }

  nestedNav: Navigation | undefined;

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
