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
export declare class IconComponent {
    private _iconService;
    src: string;
    svguse: string;
    iconClass: string;
    icon: string;
    label: string;
    hidden: boolean;
    constructor(_iconService: IconService);
    readonly fontIconClass: string;
    readonly mergedIconClass: string;
    readonly isHidden: boolean;
}
