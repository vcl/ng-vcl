import { Component, Input, ChangeDetectionStrategy, HostBinding, Self, SimpleChanges, Directive, Inject, OnChanges } from '@angular/core';
import { NgClass } from '@angular/common';
import { VCL_ICON_RESOLVER, IconResolver } from './icon-resolver.service';

@Component({
  selector: 'vcl-icon',
  providers: [ NgClass ],
  template: '<ng-content></ng-content>'
})
export class IconComponent implements OnChanges {

  constructor(
    @Self() private ngClass: NgClass,
    @Inject(VCL_ICON_RESOLVER) private _iconResolvers: IconResolver[]
  ) { }

  @Input()
  role?: string;

  @HostBinding('class.vclIcon')
  vclIcon = true;

  @HostBinding('attr.role')
  get attrRole() {
    return this.role || 'img';
  }

  @Input()
  icon?: string;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.icon) {
      const icon = changes.icon.currentValue;

      let fontIconClass: string | string[];

      if (!icon) {
        fontIconClass = [];
      } else {
        const resolver = this._iconResolvers.find(ir => ir.match(icon));
        if (!resolver) {
          fontIconClass = icon;
        } else {
          fontIconClass = resolver.lookup(icon);
        }
      }

      this.ngClass.ngClass = fontIconClass;
      this.ngClass.ngDoCheck();
    }
  }
}
