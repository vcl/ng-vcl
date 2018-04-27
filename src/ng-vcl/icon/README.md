# vcl-icon

Icon which can be based on glyphs from icon fonts, inline svg and bitmaps.

The `label` is never displayed, it is only for accessibility with screen
readers.
The `hidden` attribute is only reflected in the `aria-hidden` property which
allows to hide the icon to screen readers, if it is only of presentational character.
See http://www.filamentgroup.com/lab/bulletproof_icon_fonts.html for details.


## Usage:

As a component
```html
<vcl-icon icon="..." label="chevron right" hidden="false"></vcl-icon>
```
or via an attribute
```html
<span vcl-icon icon="..."></span>
With image resource
```html
<vcl-icon src="..."></vcl-icon>
```
With SVG
```html
<vcl-icon svguse="..."></vcl-icon>
```

### API 

#### Properties:

| Name                | Type        | Default  | Description
| ------------        | ----------- | -------- |--------------
| `icon`              | string      |          | Icon generator lookup via icon class provider
| `src`               | string      |          | URL of a graphics resource
| `svguse`            | string      |          | Generates an SVG `use` tag referencing the value

*(1) Supports l10n*
