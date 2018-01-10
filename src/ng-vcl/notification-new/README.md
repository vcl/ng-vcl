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
| `headerAlign`       | `left`, `center`, `right`                        | `"left"`           | Header alignment
| `bodyAlign`         | `left`, `center`, `right`                        | `"center"`         | Body alignment
| `footerAlign`       | `left`, `center`, `right`                        | `"left"`           | Footer alignment

#### Header Properties

| Name                | Type                                             | Default            | Description
| ------------------- | ------------------------------------------------ | ------------------ |--------------
| `align`             | `left`, `center`, `right`                        | `"left"`           | Alignment

#### Body Properties

| Name                | Type                                             | Default            | Description
| ------------------- | ------------------------------------------------ | ------------------ |--------------
| `align`             | `left`, `center`, `right`                        | `"center"`         | Alignment

#### Footer Properties

| Name                | Type                                             | Default            | Description
| ------------------- | ------------------------------------------------ | ------------------ |--------------
| `align`             | `left`, `center`, `right`                        | `"left"`           | Alignment
