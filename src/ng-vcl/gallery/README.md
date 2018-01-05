# vcl-gallery

A gallery containing multiple images with mobile swipe support.

## Usage:

```html
<vcl-gallery galleryTitle="Simple gallery" [selectedImage]="1" [wrap]="true">
  <vcl-gallery-image image="https://picsum.photos/600/500?image=450" thumbnail="https://picsum.photos/200/200?image=450" alt="Image 1"></vcl-gallery-image>
  <vcl-gallery-image image="https://picsum.photos/600/500?image=451" thumbnail="https://picsum.photos/200/200?image=451" alt="Image 2"></vcl-gallery-image>
  <vcl-gallery-image image="https://picsum.photos/600/500?image=452" thumbnail="https://picsum.photos/200/200?image=452" alt="Image 3"></vcl-gallery-image>
</vcl-gallery>
```

### API

#### Gallery Attributes:

Name            | Type    | Default  | Description
--------------- | ------- | -------- | --------------------------------
`galleryTitle`  | string  |          | title of the gallery
`selectedImage` | number  | 0        | the selected image (optional)
`wrap`          | string  | false    | whether to wrap around (optional)

#### Gallery Methods:

Name             | Attributes    | Description
---------------- | ------------- | --------------------------------------------------------------------------
`selectImage`    | index: number | select an image by index
`selectNext`     |               | select next image
`selectPrevious` |               | select previous image

#### Image Attributes:

Name        | Type    | Default  | Description
----------- | ------- | -------- | --------------------------------
`image`     | string  |          | image source
`thumbnail` | string  | `""`     | thumbnail source (optional)
`alt`       | string  | `""`     | alt text (optional)
