# vcl-zoom-box

Zoom into areas of images.

## Usage:

 ```html
<vcl-zoom-box image="https://picsum.photos/320/320?image=434" [x]="30" [y]="60" [width]="190" [height]="120"></vcl-zoom-box>
```

### API 

#### Properties:

| Name                | Type        | Default            | Description
| ------------        | ----------- | ------------------ |--------------
| `image`             | string      |                    | Source image
| `imageHighRes`      | string      |                    | High resolution zoomed image
| `highResScale`      | number      |                    | Zoomed image scale multiplier
| `x`                 | number      | 0                  | Left offset
| `y`                 | number      | 0                  | Top offset
| `width`             | number      |                    | Width of zoomed box
| `height`            | number      |                    | Height of zoomed box
