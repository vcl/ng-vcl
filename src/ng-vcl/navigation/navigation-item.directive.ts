import { Directive, ContentChildren, Input, QueryList, SkipSelf, Inject, forwardRef, Optional } from "@angular/core";
import { NavigationComponent } from './navigation.component';
import { Router, UrlTree, NavigationEnd } from "@angular/router";
import { Subscription } from "rxjs/Subscription";

export interface NavigationItem {
  label: string;
  selected?: boolean;
  opened?: boolean;
  heading: boolean;
  prepIcon?: string;
  appIcon?: string;
  class?: string;
  items: NavigationItem[] | undefined;
  href?: string;
  route?: any[];
}

@Directive({
  selector: 'vcl-navitem'
})
export class NavigationItemDirective implements NavigationItem {

  private _route: any[] | undefined;
  private _urlTree: UrlTree | undefined;
  private _subscription: Subscription | undefined;

  @Input()
  label: string;

  get items() {
    return <NavigationItem[]> (this.contentItems && this.contentItems.filter(item => item !== this)) || undefined;
  }

  // @Input()
  selected: boolean = false;

  @Input()
  opened: boolean = false;

  @Input()
  heading = false;

  @Input()
  prepIcon: string | undefined;

  @Input()
  appIcon: string | undefined;

  @Input()
  class: string | undefined;

  @Input()
  href: string | undefined;

  @Input()
  set route(route: any[] | undefined) {
    this._route = Array.isArray(route) ? route : [route];
    this._urlTree = this.router.createUrlTree(this._route);
  }

  get route() {
    return this._route;
  }

  @ContentChildren(NavigationItemDirective)
  contentItems: QueryList<NavigationItemDirective>;

  constructor(
    private router: Router,
    @Inject(forwardRef(() => NavigationComponent)) private nav: NavigationComponent,
    @Optional() @SkipSelf() @Inject(NavigationItemDirective) public parent: NavigationItemDirective) {
    if (nav.useRouter) {
      this._subscription = router.events.subscribe(s => {
        if (s instanceof NavigationEnd) {
          this.updateSelectedState();
        }
      });
    }
  }

  private updateSelectedState(): void {
    this.selected = !!this._urlTree && this.router.isActive(this._urlTree, true);
    if (this.selected) {
      this.openParents();
    }
  }

  openParents() {
    const openParents = (item: NavigationItemDirective) => {
      if (item.parent) {
        item.parent.opened = true;
        openParents(item.parent);
      }
    };
    openParents(this);
  }

  ngOnDestroy() {
    this._subscription && this._subscription.unsubscribe();
  }

  get calcPrepIcon(): string | undefined {
    return this.items && this.items.length > 0  && this.nav.subLevelHintIconSide === 'left' ? (
      this.opened ? this.nav.subLevelHintIconOpened : this.nav.subLevelHintIconClosed
    ) : this.prepIcon;
  }

  get calcAppIcon(): string | undefined {
    return this.items && this.items.length > 0  && this.nav.subLevelHintIconSide === 'right' ? (
      this.opened ? this.nav.subLevelHintIconOpened : this.nav.subLevelHintIconClosed
    ) : this.appIcon;
  }
}
