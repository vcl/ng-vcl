import { Component, forwardRef, HostBinding, ContentChildren, QueryList, SkipSelf, Optional, Input, ChangeDetectionStrategy } from '@angular/core';
import { NAVIGATION_TOKEN, Navigation } from './types';
import { NavigationItemComponent } from './navigation-item.component';

@Component({
  selector: 'vcl-navigation',
  templateUrl: 'navigation.component.html',
  providers: [{
    provide: NAVIGATION_TOKEN,
    useExisting: forwardRef(() => NavigationComponent)
  }],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationComponent implements Navigation {

  constructor(@Optional() @SkipSelf() private parentNav: NavigationComponent ) { }

  @Input()
  layout: 'horizontal' | 'vertical' = 'vertical';

  @HostBinding('class.navigation')
  classVclNavigation = true;

  @ContentChildren(NavigationItemComponent, {
    descendants: true
  })
  items: QueryList<NavigationItemComponent>;

  deselectAll() {
    this.parentNav && this.parentNav.deselectAll();
    this.items.forEach(_item => {
      _item.selected = false;
    });
  }
}
