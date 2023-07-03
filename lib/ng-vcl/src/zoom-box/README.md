# vcl-zoom-box

Zoom into areas of images.

## Usage

```html
<vcl-zoom-box-container #first [x]="30" [y]="60" [width]="120" [height]="190">
  <img ngSrc="https://picsum.photos/320/320?image=434" />
  <vcl-zoom-box-magnifier></vcl-zoom-box-magnifier>
</vcl-zoom-box-container>
<vcl-zoom-box [target]="first"></vcl-zoom-box>
```

### API

#### Zoom-Box Container Attributes

| Name         | Type    | Default | Description                            |
| ------------ | ------- | ------- | -------------------------------------- |
| `x`          | number  | 0       | Left offset (optional)                 |
| `y`          | number  | 0       | Top offset (optional)                  |
| `width`      | number  |         | Width of zoomed box                    |
| `height`     | number  |         | Height of zoomed box                   |
| `resetOnOut` | boolean | false   | Reset position to initial on mouse out |

### Zoom-Box Attributes

| Name           | Type   | Default | Description                                                           |
| -------------- | ------ | ------- | --------------------------------------------------------------------- |
| `image`        | string | ""      | High resolution image (optional)                                      |
| `highResScale` | number | 1       | High resolution image scale multiplier (required if image is defined) |
