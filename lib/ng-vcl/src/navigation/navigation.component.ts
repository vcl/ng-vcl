import { Component, forwardRef, HostBinding, ContentChildren, QueryList, SkipSelf, Optional } from '@angular/core';
import { NAVIGATION_TOKEN } from './types';
import { NavigationItemComponent } from './navigation-item.component';

@Component({
  selector: 'vcl-navigation',
  templateUrl: 'navigation.component.html',
  providers: [{
    provide: NAVIGATION_TOKEN,
    useExisting: forwardRef(() => NavigationComponent)
  }]
})
export class NavigationComponent {

  constructor(@Optional() @SkipSelf() private parentNav: NavigationComponent ) { }

  @HostBinding('class.vclNavigation')
  classVclNavigation = true;

  @ContentChildren(NavigationItemComponent, {
    descendants: true
  })
  items: QueryList<NavigationItemComponent>;


  select(item: NavigationItemComponent) {
    if (this.parentNav) {
      this.parentNav.select(item);
      return;
    }
    this.items.forEach(_item => {
      _item.selected = item === _item;
    });
  }
}
