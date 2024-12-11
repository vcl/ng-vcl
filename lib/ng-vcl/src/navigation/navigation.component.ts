import {
  Component,
  forwardRef,
  HostBinding,
  ContentChildren,
  QueryList,
  SkipSelf,
  Optional,
  Input,
  ChangeDetectionStrategy,
  ViewEncapsulation,
} from '@angular/core';
import { NAVIGATION_TOKEN, Navigation } from './types';
import { NavigationItemComponent } from './navigation-item.component';

@Component({
    selector: 'vcl-navigation',
    templateUrl: 'navigation.component.html',
    styleUrls: ['navigation.component.scss'],
    encapsulation: ViewEncapsulation.None,
    providers: [
        {
            provide: NAVIGATION_TOKEN,
            useExisting: forwardRef(() => NavigationComponent),
        },
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class NavigationComponent implements Navigation {
  constructor(
    @Optional() @SkipSelf() private parentNav: NavigationComponent,
    @Optional() @SkipSelf() private parentNavItem: NavigationItemComponent
  ) {
    if (this.parentNavItem) {
      this.parentNavItem.registerNav(this);
    }
  }

  @Input()
  layout: 'horizontal' | 'vertical' = 'vertical';

  @HostBinding('class.navigation')
  classVclNavigation = true;

  @ContentChildren(NavigationItemComponent, {
    descendants: true,
  })
  items: QueryList<NavigationItemComponent>;

  deselectAll() {
    this.parentNav && this.parentNav.deselectAll();
    this.items.forEach(_item => {
      _item.selected = false;
    });
  }
}
