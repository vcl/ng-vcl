# vcl-file-input

Enhanced file input

## Usage

```html
<vcl-file-input [multiple]="true" [accept]="accept" [disabled]="disabled"
  >My Files</vcl-file-input
>
```

### API

#### Attributes

| Name       | Type    | Default | Description                               |
| ---------- | ------- | ------- | ----------------------------------------- |
| `accept`   | string  |         | like html5 file-input                     |
| `disabled` | boolean | false   |
| `multiple` | boolean | false   | if true, more than 1 file can be selected |

#### Events

| Name          | Type             | Description                                 |
| ------------- | ---------------- | ------------------------------------------- |
| `valueChange` | any &#124; any[] | emits the new value when files have changed |
