# vcl-notification

Make notifications

## Usage

```html
<vcl-notification>Hello world!</vcl-notification>
```

### API

#### Notification Attributes

| Name                | Type                                             | Default            | Description
| ------------------- | ------------------------------------------------ | ------------------ |--------------
| `ntType`            | `default`, `info`, `warning`, `error`, `success` | `'default'`        | Notification Type
| `styleClass`        | string, or object                                | `undefined`        | Notification style classes
| `textColor`         | string                                           | `''`               | Text color
| `backgroundColor`   | string                                           | `''`               | Background color
| `icon`              | string                                           | depends on `nType` | Notification Icon
| `iconClass`         | string                                           | `''`               | Custom Icon Class
| `iconImage`         | string                                           | `''`               | Custom Icon Image
| `iconSide`          | `left`, `right`                                  | `'left'`           | Icon Position
| `drawIcon`          | boolean                                          | `true`             | Whether to draw icon
| `button`            | string                                           | `''`               | Button icon
| `buttonClick`       | event                                            | `null`             | Event for button click
| `showButton`        | boolean                                          | `true`             | Show button
| `header`            | string                                           | `''`               | Header text
| `footer`            | string                                           | `''`               | Footer text
| `verticalBody`      | boolean                                          | `false`            | Draw body vertically
| `headerAlign`       | `left`, `center`, `right`                        | `'left'`           | Header alignment
| `bodyAlign`         | `left`, `center`, `right`                        | `'center'`         | Body alignment
| `footerAlign`       | `left`, `center`, `right`                        | `'left'`           | Footer alignment

#### Header Attributes

| Name                | Type                                             | Default            | Description
| ------------------- | ------------------------------------------------ | ------------------ |--------------
| `align`             | `left`, `center`, `right`                        | `'left'`           | Alignment

#### Body Attributes

| Name                | Type                                             | Default            | Description
| ------------------- | ------------------------------------------------ | ------------------ |--------------
| `align`             | `left`, `center`, `right`                        | `'center'`         | Alignment

#### Footer Attributes

| Name                | Type                                             | Default            | Description
| ------------------- | ------------------------------------------------ | ------------------ |--------------
| `align`             | `left`, `center`, `right`                        | `'left'`           | Alignment
