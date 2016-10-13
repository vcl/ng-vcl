# vcl-icon

Icon which can be based on glyphs from icon fonts, inline svg and bitmaps.

The `label` is never displayed, it is only for accessibility with screen
readers.
The `hidden` attribute is only reflected in the `aria-hidden` property which
allows to hide the icon to screen readers, if it is only of presentational character.
See http://www.filamentgroup.com/lab/bulletproof_icon_fonts.html for details.


## Usage:

```html
<vcl-icon icon="icon-class" label="chevron right" hidden="false"></vcl-icon>
```
or
```html
<vcl-icon src="..."></vcl-icon>
```
or
```html
<vcl-icon svguse="..."></vcl-icon>
```

### Class Provider


### API 

#### Properties:

| Name                | Type        | Default  | Description
| ------------        | ----------- | -------- |--------------
| `icon`              | string      |          | Icon generator lookup via icon class provider
| `src`               | string      |          | URL of a graphics resource
| `svguse`            | string      |          | Generates an SVG `use` tag referencing the value
| `iconClass`         | string      |          | Additional class
| `label` *(1)*       | string      |          | `aria-label` 

*(1) Supports l10n*
