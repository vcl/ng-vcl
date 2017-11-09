import { Component, Directive, ContentChildren, QueryList, Input, Output, EventEmitter, HostBinding } from '@angular/core';
import { NavigationItem, NavigationItemDirective } from './navigation-item.directive';
import { Router, UrlTree, NavigationEnd } from "@angular/router";
// import { containsTree } from "@angular/router/url_tree";

@Component({
  selector: 'vcl-navigation',
  host: {
    '[class.vclNavigation]': 'true'
  },
  templateUrl: 'navigation.component.html',
})
export class NavigationComponent {

  @Input()
  ident: string;

  @Input()
  ariaRole: string = 'presentation';

  @Input()
  tabindex: number = 0;

  @Input()
  type: string = 'vertical';

  @Input()
  useRouter = false;

  @Input()
  subLevelHintIconClosed: string = 'fa:chevron-right';

  @Input()
  subLevelHintIconOpened: string = 'fa:chevron-down';

  @Input()
  subLevelHintIconSide: 'left' | 'right' = 'right';

  @Input()
  inputItems: QueryList<NavigationItem> | undefined;

  @Output()
  select = new EventEmitter<NavigationItem>();

  @Output()
  navigate = new EventEmitter();

  @ContentChildren(NavigationItemDirective)
  contentItems: QueryList<NavigationItem>;

  constructor(private router: Router) { }

  get navigationItems() {
    return this.inputItems || this.contentItems || [];
  }

  private runItems(cb: {(item: NavigationItemDirective): void}) {
    const runItems = (items) => {
      items.forEach(item => {
        cb(item);
        if (item.items) {
          runItems(item.items);
        }
      });
    };
    runItems(this.navigationItems);
  }

  selectRoute(route: any[], openParents = true) {
    this.runItems((item) => {
      if (item.route) {

        // TODO should use containsTree from @angular/router for comparison
        // currently not exposed as public api
        item.selected = item.route.length === route.length && item.route.every((v, i) => v === route[i]);
        if (item.selected) {
          this.selectedItem = item;
          if (openParents) {
            item.openParents();
          }
        }
      }
    });
  }

  private selectedItem: NavigationItem | undefined;

  selectItem(item: NavigationItemDirective) {
    if (item.items && item.items.length > 0) {
      item.opened = !item.opened;
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
      if (this.useRouter) {
        this.router.navigate(item.route);
      } else {
        this.navigate.emit(item.route);
      }
    }
    this.select.emit(item);
  }

  onSubItemSelect(item) {
    this.selectItem(item);
  }
}
