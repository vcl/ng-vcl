import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import template from './icon.component.html';
import {IconService} from '../../services/icon.service';

/**
Icon which can be based on glyphs from icon fonts, inline svg and bitmaps.
The `label` is never displayed, it is only for accessibility with screen
readers.
The `hidden` attribute is only reflected in the `aria-hidden` property which
allows to hide the icon to screen readers, if it is only of presentational character.
See http://www.filamentgroup.com/lab/bulletproof_icon_fonts.html for details.

Usage:

```html
<vcl-icon icon="fa:fa-chevron-right" label="chevron right" hidden="false"></vcl-icon>
```

or

```html
<vcl-icon class="fa fa-chevron-right"></vcl-icon>
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
@param    label           optional      `aria-label`
@param    hidden          optional      `aria-hidden` state, defaults to `true`, is `false` if there is a `label` given
*/ 

@Component({
  selector: 'vcl-icon',
  template,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [IconService]
})
export class IconComponent {
  @Input() src: string;
  @Input() svguse: string;
  @Input() iconClass: string;
  @Input() icon: string;
  @Input() label: string;
  @Input() hidden: boolean = true;

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
  
  get isHidden() {
    return (this.hidden || !this.label);
  }
}
 
