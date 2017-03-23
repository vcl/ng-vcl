import { Component, Input, ChangeDetectionStrategy, HostBinding } from '@angular/core';
import { IconService } from './icon.service';

@Component({
  selector: 'vcl-icon, [vcl-icon]',
  templateUrl: 'icon.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.vclIcon]': 'true',
  },
})
export class IconComponent {

  @Input() src: string | undefined;
  // @Input() svguse: string | undefined;
  @Input() iconClass: string | undefined;
  @Input() icon: string | undefined;

  @HostBinding('attr.aria-label')
  @Input()
  label: string | undefined;

  @HostBinding('attr.role')
  @Input()
  ariaRole: string | undefined;

  constructor(private _iconService: IconService) { }

  @HostBinding('class')
  get mergedIconClass(): string {
    const fontIconClass = this.icon ? this._iconService.lookup(this.icon) : '';
    return `vclIcon ${fontIconClass} ${this.iconClass || ''}`;
  }

  // Do not hide from aria when a label is provided
  @HostBinding('attr.aria-hidden')
  get isAriaHidden() {
    return !this.label;
  }
}
