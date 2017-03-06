# vcl-radio-button

A radio button utilizing `vcl-icon`

## Usage:

 ```html
<vcl-radio-button [(checked)]="checked">Label</vcl-radio-button>```
```
 ```html
<vcl-radio-group [(value)]="value">
  <vcl-radio-button label="Red" value="red"></vcl-radio-button>```
  <vcl-radio-button label="Green" value="green"></vcl-radio-button>```
</vcl-radio-group>
```

### API 

#### vcl-radio-button Attributes:

| Name                | Type        | Default            | Description
| ------------        | ----------- | ------------------ |--------------
| `checked` *(1)*     | boolean     | false              | 2-Way-Binding. State of radio button 
| `label`             | string      |                    | A label
| `value`             | any         |                    | A value 
| `checkedIcon`       | string      | fa:check-square-o  | Icon to be displayed when checked 
| `uncheckedIcon`     | string      | fa:square-o        | Icon to be displayed when unchecked
| `tabindex`          | number      | 0                  | The tabindex of the radio button



#### vcl-radio-group Attributes:

| Name                  | Type                   | Default  | Description
| --------------------- | ---------------------- | -------- |--------------
| `value` *(1)*         | any                    |          | The selected buttons.

*(1) Supports Two-way binding*
