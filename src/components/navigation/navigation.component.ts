import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'vcl-navigation',
  templateUrl: 'navigation.component.html',
})
export class NavigationComponent {

  constructor(private router: Router) { }

  @Input()
  selectedItem;

  @Input()
  ariaRole: string = 'presentation';

  @Input()
  tabindex: number = 0;

  @Input()
  touchAction: string = 'pan-y';

  @Input()
  type: string = 'horizontal';

  @Input()
  subLevelHintIconClosed: string = 'fa:chevron-right';

  @Input()
  subLevelHintIconOpened: string = 'fa:chevron-down';

  @Input()
  subLevelHintIconSide: 'left' | 'right' = 'right';

  @Input()
  navigationItems: any[] = [];

  @Output()
  select = new EventEmitter();

  ngOnInit() {
    const selectedItem = this._navigationItems.filter(item => item.selected)[0];
    if (selectedItem) {
      this.selectItem(selectedItem);
    }
  }

  get _navigationItems(): any[] {
    return this.navigationItems.filter(item => item.active);
  }

  get isVertical(): boolean {
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
