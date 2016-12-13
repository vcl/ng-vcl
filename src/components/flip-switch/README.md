# vcl-flip-switch

## Usage:

```html
<vcl-flip-switch
  [value]="true"
  (change)="onChange($event)"
  onLabel="On" offLabel="Off"
></vcl-flip-switch>
```

### API

#### Properties:

Name       | Type    | Default | Description
---------- | ------- | ------- | -------------------------------
`value`    | boolean | false   | set the value
`change`   | event   |         | emits when the value is changed
`onLabel`  | string  | 'On'    | The label for "on"
`offLabel` | string  | 'Off'   | The label for "off"
