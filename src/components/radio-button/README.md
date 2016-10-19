# vcl-radio-button

A radio button utilizing `vcl-icon`

## Usage:

 ```html
<vcl-radio-button [(checked)]="checked"></vcl-radio-button>```

### API 

#### Properties:

| Name                | Type        | Default            | Description
| ------------        | ----------- | ------------------ |--------------
| `checked` *(1)*     | boolean     | false              | 2-Way-Binding. State of radio button 
| `checkedIcon`       | string      | fa:check-square-o  | Icon to be displayed when checked 
| `uncheckedIcon`     | string      | fa:square-o        | Icon to be displayed when unchecked
| `tabindex`          | number      | 0                  | The tabindex of the radio button

*(1) Supports Two-way binding*
