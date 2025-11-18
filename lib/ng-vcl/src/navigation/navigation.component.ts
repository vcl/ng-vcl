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
import { VCLNavigationItemComponent } from './navigation-item.component';

@Component({
  selector: 'vcl-navigation',
  templateUrl: 'navigation.component.html',
  styleUrls: ['navigation.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: NAVIGATION_TOKEN,
      useExisting: forwardRef(() => VCLNavigationComponent),
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VCLNavigationComponent implements Navigation {
  constructor(
    @Optional() @SkipSelf() private parentNav: VCLNavigationComponent,
    @Optional() @SkipSelf() private parentNavItem: VCLNavigationItemComponent
  ) {
    if (this.parentNavItem) {
      this.parentNavItem.registerNav(this);
    }
  }

  @Input()
  layout: 'horizontal' | 'vertical' = 'vertical';

  @HostBinding('class.navigation')
  classVclNavigation = true;

  @ContentChildren(VCLNavigationItemComponent, {
    descendants: true,
  })
  items: QueryList<VCLNavigationItemComponent>;

  deselectAll() {
    this.parentNav && this.parentNav.deselectAll();
    this.items.forEach(_item => {
      _item.selected = false;
    });
  }
}
