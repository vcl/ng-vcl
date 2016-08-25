import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { IconService } from '../../services/icon.service';

/**
Icon which can be based on glyphs from icon fonts, inline svg and bitmaps.
The `label` is never displayed, it is only for accessibility with screen
readers.
The `hidden` attribute is only reflected in the `aria-hidden` property which
allows to hide the icon to screen readers, if it is only of presentational character.
See http://www.filamentgroup.com/lab/bulletproof_icon_fonts.html for details.

Usage:

```html
<vcl-icon icon="fa:chevron-right" label="chevron right" hidden="false"></vcl-icon>
```
or
```html
<vcl-icon src="..."></vcl-icon>
```
or
```html
<vcl-icon svguse="..."></vcl-icon>
````

@param    src             optional      URL of a graphics resource
@param    svguse          optional      Generates an SVG `use` tag referencing the value
@param    icon            optional      Icon generator lookup via icon provider registered in the meta facility
@param    iconClass       optional      Additional class
@param    label           optional      `aria-label`
*/

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

  get fontIconClass() : string {
    if(this.icon) {
      return this._iconService.lookup(this.icon);
    }
  }
  get mergedIconClass() : string {
    return `${this.fontIconClass || ''} ${this.iconClass || ''}`;
  }

  // Do not hide when a label is provided
  get isHidden() {
    return !this.label;
  }
}
