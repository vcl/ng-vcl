# vcl-flip-switch

## Usage

```html
<vcl-flip-switch
  [(value)]="value"
  onLabel="On"
  offLabel="Off"></vcl-flip-switch>
```

### API

#### Attributes

| Name       | Type    | Default | Description                     |
| ---------- | ------- | ------- | ------------------------------- |
| `value`    | boolean | false   | set the value                   |
| `onLabel`  | string  | 'On'    | The label for "on"              |
| `offLabel` | string  | 'Off'   | The label for "off"             |
| `rounded`  | boolean | false   | Round version of the flipswitch |

#### Events

| Name          | Type             | Description                        |
| ------------- | ---------------- | ---------------------------------- |
| `valueChange` | any &#124; any[] | emits the new value after a change |
