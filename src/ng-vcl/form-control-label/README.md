# vcl-form-control-label

Label to describe form controls.

## Usage:

Non-wrapping label

```html
<label vcl-form-control-label label="Label text" subLabel="Sub label text" for="..."></label>
```

Wrapping label

```html
<label vcl-form-control-label label="Label text" subLabel="Sub label text">
  ...
</label>
```

### API 

#### Properties:

| Name                         | Type        | Default  | Description
| ---------------------------- | ----------- | -------- |--------------
| `label` *(1)*                | string      |          | The label 
| `subLabel` *(1)*             | string      |          | The sublabel 
| `disabled`                   | boolean     | false    | Whether the label is disabled or not
| `required`                   | boolean     | false    | Shows the required indicator when true
| `requiredIndicatorCharacter` | string      | •        | The required indicator character
| `requiredIndLabel` *(1)*     | string      |          | Accessible label for the required indicator

*(1) Supports l10n*
