import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { IconService } from './icon.service';

@Component({
  selector: 'vcl-icon',
  templateUrl: 'icon.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconComponent {
  @Input() src: string;
  @Input() svguse: string;
  @Input() iconClass: string;
  @Input() icon: string;
  @Input() label: string;

  ariaRole: string; //TODO: not used?

  constructor(private _iconService: IconService) {
  }

  get fontIconClass(): string {
    if (this.icon) {
      return this._iconService.lookup(this.icon);
    }
  }
  get mergedIconClass(): string {
    return `${this.fontIconClass || ''} ${this.iconClass || ''}`;
  }

  // Do not hide from aria when a label is provided
  get isAriaHidden() {
    return !this.label;
  }
}
