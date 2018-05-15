# vcl-icogram

Combination of icon and text of which both are optional and can be permuted.
Icons can be prepended or appended to a textual label and can be sourced from icon
fonts or directly from file based imagery.
The component takes care of accessibility aspects such rendering appropriate aria
attributes.


## Usage:

```html
<vcl-icogram label="some label" prepIcon="fa:chevron-right"></vcl-icogram>

<span vcl-icogram label="some label" prepIcon="fa:chevron-right"></span>
```

### API 

#### Properties:

| Name                         | Type        | Default  | Description
| ---------------------------- | ----------- | -------- |--------------
| `label`                      | string      |          | The textual label 
| `prepIcon`                   | string      |          | Icon as defined by the icon component
| `appIcon`                    | string      |          | Same as `prepIcon` but appended
| `prepIconSrc`                | string      |          | Image as defined by the icon component
| `appIconSrc`                 | string      |          | Same as `prepIconSrc` but appended

