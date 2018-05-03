# vcl-icogram

Combination of icon and text of which both are optional and can be permuted.
Icons can be prepended or appended to a textual label and can be sourced from icon
fonts or directly from file based imagery.
The component takes care of accessibility aspects such rendering appropriate aria
attributes.
It also renders accessability labels for icons if no label for the icogram is
provided.


## Usage:

```html
<vcl-icogram label="some label" prepIcon="fa:chevron-right" flexLabel=true></vcl-icogram>

<vcl-icogram>
  <vcl-icon icon="fa:close"></vcl-icon>
</vcl-icogram>
```

### API 

#### Properties:

| Name                         | Type        | Default  | Description
| ---------------------------- | ----------- | -------- |--------------
| `label`                      | string      |          | The textual label 
| `flexLabel`                  | boolean     |          | the label gets a `vclLayoutFlex` class if true
| `prepIcon`                   | string      |          | Icon as defined by the icon component
| `appIcon`                    | string      |          | Same as `prepIcon` but appended
| `prepIconSrc`                | string      |          | Image as defined by the icon component
| `appIconSrc`                 | string      |          | Same as `prepIconSrc` but appended

