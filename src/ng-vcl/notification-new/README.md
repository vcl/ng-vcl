# vcl-notification-new

Make notifications

## Usage:

 ```html
<vcl-notification-new>Hello world!</vcl-notification-new>
```

### API 

#### Notification Properties:

| Name                | Type                                             | Default            | Description
| ------------------- | ------------------------------------------------ | ------------------ |--------------
| `ntType`            | `default`, `info`, `warning`, `error`, `success` | `"default"`        | Notification Type
| `icon`              | string                                           | depends on `nType` | Notification Icon
| `drawIcon`          | boolean                                          | `true`             | Whether to draw icon
| `button`            | string                                           | `""`               | Button icon
| `buttonClick`       | function                                         | `null`             | Function for button click
| `header`            | string                                           | `""`               | Header text
| `footer`            | string                                           | `""`               | Footer text
| `verticalBody`      | boolean                                          | `false`            | Draw body vertically
| `headerAlign`       | `left`, `middle`, `right`                        | `"left"`           | Header alignment
| `bodyAlign`         | `left`, `middle`, `right`                        | `"middle"`         | Body alignment
| `footerAlign`       | `left`, `middle`, `right`                        | `"left"`           | Footer alignment

#### Header Properties

| Name                | Type                                             | Default            | Description
| ------------------- | ------------------------------------------------ | ------------------ |--------------
| `align`             | `left`, `middle`, `right`                        | `"left"`           | Alignment

#### Body Properties

| Name                | Type                                             | Default            | Description
| ------------------- | ------------------------------------------------ | ------------------ |--------------
| `align`             | `left`, `middle`, `right`                        | `"middle"`         | Alignment

#### Footer Properties

| Name                | Type                                             | Default            | Description
| ------------------- | ------------------------------------------------ | ------------------ |--------------
| `align`             | `left`, `middle`, `right`                        | `"left"`           | Alignment
