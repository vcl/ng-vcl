import { Router } from '@angular/router';
import { Component, Directive, ContentChildren, QueryList, Input, Output, EventEmitter, HostBinding } from '@angular/core';



@Directive({
  selector: 'vcl-navitem'
})
export class NavigationItemComponent {

  @Input('label') label: string;
  @Input('route') route: any;

  @ContentChildren(NavigationItemComponent)
  items: QueryList<NavigationItemComponent>;

  @Input() active: boolean = true;
  @Input() selected: boolean = false;
  @Input() opened: boolean = false;
  @Input() heading = false;

  @Input('href') href: string;
  @Input('prepIcon') prepIcon: string;
  @Input('appIcon') appIcon: string;
  @Input('class') class: string = '';

  constructor() { }

  /**
   * transforms this NavigationItemComponent insto an object,
   * so it can be handled the same way as an inputList
   * @return {Object}
   */
  toObject(): Object {
    const ret = {
      label: this.label,
      active: this.active,
      selected: this.selected,
      opened: this.opened,
      heading: this.heading,
      href: this.href,
      prepIcon: this.prepIcon,
      appIcon: this.appIcon,
      class: this.class
    };

    if (this.route) {
      ret['route'] = this.route;
      if (!ret['route'].length) ret['route'] = [ret['route']]; // force array      
    }

    // add nested items
    const items = [];
    const ar = this.items.toArray();
    ar.shift(); // remove first because 'this' is contained
    ar.map(navItemCom => items.push(navItemCom.toObject()));
    if (items.length > 0) ret['items'] = items; // only add if length>0 to not show nested-icons
    return ret;
  }



}

@Component({
  selector: 'vcl-navigation',
  host: {
    '[class.vclNavigation]': 'true'
  },
  templateUrl: 'navigation.component.html',
})
export class NavigationComponent {

  //  isVert: boolean = true;

  constructor(private router: Router) {
  }


  @Input('ident') ident: string;

  @Input()
  selectedItem;

  @Input()
  ariaRole: string = 'presentation';

  @Input()
  tabindex: number = 0;

  @Input()
  touchAction: string = 'pan-y'; // TODO what does this?

  @Input()
  type: string = 'horizontal';

  @Input()
  subLevelHintIconClosed: string = 'fa:chevron-right';

  @Input()
  subLevelHintIconOpened: string = 'fa:chevron-down';

  @Input('subLevelHintIconSide') subLevelHintIconSide: 'left' | 'right' = 'right';

  @ContentChildren(NavigationItemComponent)
  templateItems: QueryList<NavigationItemComponent>;

  @Input()
  navigationItems: any[] = [];

  @Output()
  select = new EventEmitter();



  ngAfterContentInit() {
    let templateItemsAr = this.templateItems.toArray();
    if (templateItemsAr.length > 0) {
      const items = [];
      templateItemsAr.map(i => items.push(i.toObject()));
      this.navigationItems = items;
    }

    const selectedItem = this._navigationItems.filter(item => item.selected)[0];
    if (selectedItem) {
      this.selectItem(selectedItem);
    }
  }


  get _navigationItems(): any[] {
    return this.navigationItems.filter(item => item.active);
  }

  @HostBinding('class.vclVertical')
  get isVertical() {
    return this.type === 'vertical';
  }

  getPrepIcon(item): string {
    return item.items && this.subLevelHintIconSide === 'left'
      ? item.opened
        ? this.subLevelHintIconOpened
        : this.subLevelHintIconClosed
      : item.prepIcon;
  }

  getAppIcon(item): string {
    return item.items && this.subLevelHintIconSide === 'right'
      ? item.opened
        ? this.subLevelHintIconOpened
        : this.subLevelHintIconClosed
      : item.appIcon;
  }

  selectItem(item) {
    if (item == this.selectedItem || item.items) {
      return;
    }

    if (this.selectedItem) {
      this.selectedItem.selected = false;
    }

    item.selected = true;
    this.selectedItem = item;

    if (item.href) {
      window.location.href = item.href;
    } else if (item.route) {
      this.router.navigate(item.route);
    }

    this.select.emit(item);
  }

  onSelect(item) {
    if (this.selectedItem) {
      this.selectedItem.selected = false;
    }
    this.selectedItem = item;
    this.select.emit(item);
  }

  toggleMenu(item) {
    item.opened = !item.opened;
  }
}
