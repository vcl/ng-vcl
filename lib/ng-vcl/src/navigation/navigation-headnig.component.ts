import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'vcl-navigation-heading',
  template: '<span><ng-content></ng-content></span>',
  exportAs: 'vclNavigationHeading',
})
export class VCLNavigationHeadingComponent {
  @HostBinding('class.navigation-heading')
  classVclNavigationItemLabel = true;

  @HostBinding('attr.role')
  attrTabindex = 'sectionhead';
}
