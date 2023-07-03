# vcl-icon

Icon which can be based on glyphs from icon fonts, inline svg and bitmaps.

## Usage

```html
<vcl-icon icon="fas:cog" aria-label="Settings"></vcl-icon>
```

With image resource

```html
<vcl-icon aria-label="Settings">
  <img
    ngSrc="http://materialdesignicons.com/api/download/icon/png/E4A14909-3821-4DB1-A739-4DA464ABEEB7/36" />
</vcl-icon>
```

With SVG

```html
<vcl-icon [class]="'icon-size1'">
  <svg ...></svg>
</vcl-icon>
```

### API

#### Attributes

| Name   | Type   | Default | Description                                   |
| ------ | ------ | ------- | --------------------------------------------- |
| `icon` | string |         | Icon generator lookup via icon class provider |
