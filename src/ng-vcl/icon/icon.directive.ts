import { Component, Input, ChangeDetectionStrategy, HostBinding, Self, SimpleChanges, Directive, Inject } from '@angular/core';
import { NgClass } from '@angular/common';
import { VCL_ICON_RESOLVER, IconResolver } from './icon-resolver.service';

@Directive({
  selector: 'vcl-icon, [vcl-icon]',
  host: {
    '[class.vclIcon]': 'true',
  },
  providers: [ NgClass ]
})
export class IconDirective {

  @Input('aria-label')
  ariaLabel: string | undefined;

  @Input()
  alt: string | undefined;

  @Input()
  role: string | undefined;

  @HostBinding('attr.role')
  get attrRole() {
    return this.role || 'img';
  }

  @HostBinding('attr.aria-label')
  get attrAriaLabel() {
    return this.ariaLabel || this.alt;
  }

  // Do not hide from aria when a label is provided
  @HostBinding('attr.aria-hidden')
  get isAriaHidden() {
    return !this.attrAriaLabel;
  }
}

@Directive({
  selector: 'vcl-icon[icon], [vcl-icon][icon]',
  providers: [ NgClass ]
})
export class IconFontDirective {

  constructor(
    @Self() private ngClass: NgClass,
    @Inject(VCL_ICON_RESOLVER) private _iconResolvers: IconResolver[]
  ) { }

  @Input()
  icon: string | undefined;

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
