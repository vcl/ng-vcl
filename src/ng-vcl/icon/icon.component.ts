import { Component, Input, ChangeDetectionStrategy, HostBinding, Self, SimpleChanges } from '@angular/core';
import { IconService } from './icon.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'vcl-icon, [vcl-icon]',
  templateUrl: 'icon.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.vclIcon]': 'true',
  },
  providers: [ NgClass ]
})
export class IconComponent {

  constructor(
    @Self() private ngClass: NgClass,
    private _iconService: IconService
  ) { }

  private hostClasses: { [name: string]: boolean };

  @Input()
  src: string | undefined;

  @Input()
  svguse: string | undefined;

  @Input()
  icon: string | undefined;

  @HostBinding('attr.aria-label')
  @Input('aria-label')
  label: string | undefined;

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
    return this.label || this.alt;
  }

  // Do not hide from aria when a label is provided
  @HostBinding('attr.aria-hidden')
  get isAriaHidden() {
    return !this.attrAriaLabel;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.icon) {
      const icon = changes.icon.currentValue;
      const fontIconClass = icon ? this._iconService.lookup(icon) : '';
      this.ngClass.ngClass = fontIconClass;
      this.ngClass.ngDoCheck();
    }
  }
}
