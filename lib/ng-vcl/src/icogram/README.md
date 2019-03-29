# vcl-icogram

Combination of icon and text.
Icons can be prepended or appended to a textual label and can be sourced from icon
fonts.
Also supports the anchor tag

## Usage

```html
<vcl-icogram prepIcon="fas:chevron-left" appIcon="fas:chevron-right">Label</vcl-icogram>

<a vcl-icogram href="'https://github.com/ng-vcl/ng-vcl'" prepIcon="fas:link">Link</a>
```

### API

#### Attributes

| Name                         | Type        | Default  | Description
| ---------------------------- | ----------- | -------- |--------------
| `prepIcon`                   | string      |          | Icon prepended to the label
| `appIcon`                    | string      |          | Same as `prepIcon` but appended
