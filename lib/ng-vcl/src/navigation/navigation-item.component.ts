import { Component, HostBinding, Directive, Input, HostListener, ContentChild, QueryList, ContentChildren, SkipSelf, Inject } from '@angular/core';
import { NAVIGATION_TOKEN } from './types';

@Directive({
  selector: 'vcl-navigation-label',
  exportAs: 'vclNavigationLabel'

})
export class NavigationLabelDirective {
  @HostBinding('class.vclNavigationItemLabel')
  classVclNavigationItemLabel = true;
}

@Component({
  selector: 'vcl-navigation-item',
  templateUrl: 'navigation-item.component.html',
  exportAs: 'vclNavigationItem'
})
export class NavigationItemComponent {

  constructor(
    @SkipSelf()
    @Inject(NAVIGATION_TOKEN)
    private parentNav: any
    ) { }


  @HostBinding('class.vclNavigationItem')
  classVclNavigationItem = true;

  @HostBinding('attr.tabindex')
  attrTabindex = 0;

  @HostBinding('class.vclClose')
  @Input()
  closed = true;

  @HostBinding('class.vclSelected')
  @Input()
  selected = false;

  @Input()
  selectable?;

  @ContentChild(NAVIGATION_TOKEN as any)
  childNav: any;

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent) {
    const selectable = this.selectable === undefined ? !this.childNav : true;

    if (selectable) {
      this.selected = true;
      this.parentNav && this.parentNav.select(this);
    }

    if (this.childNav) {
      this.closed = !this.closed;
    }
    event.stopPropagation();
  }

}
