# vcl-gallery

A gallery containing multiple images with mobile swipe support.

_Note: HammerJS must be loaded for touch events_

## Usage

```html
<vcl-gallery [selectedImage]="1" [wrap]="true">
  <vcl-gallery-image image="https://picsum.photos/600/500?image=450" thumbnail="https://picsum.photos/200/200?image=450" alt="Image 1"></vcl-gallery-image>
  <vcl-gallery-image image="https://picsum.photos/600/500?image=451" thumbnail="https://picsum.photos/200/200?image=451" alt="Image 2"></vcl-gallery-image>
  <vcl-gallery-image image="https://picsum.photos/600/500?image=452" thumbnail="https://picsum.photos/200/200?image=452" alt="Image 3"></vcl-gallery-image>
  <vcl-gallery-image image="https://picsum.photos/600/500?image=453" thumbnail="https://picsum.photos/200/200?image=453" alt="Image 4"></vcl-gallery-image>

  <vcl-gallery-header galleryTitle="Simple gallery"></vcl-gallery-header>
  <vcl-gallery-body></vcl-gallery-body>
  <vcl-gallery-footer></vcl-gallery-footer>
  <vcl-gallery-thumbnails></vcl-gallery-thumbnails>
</vcl-gallery>
```

### API

#### Gallery Attributes

Name            | Type    | Default  | Description
--------------- | ------- | -------- | ----------------------------------
`selectedImage` | number  | 0        | the selected image (optional)
`wrap`          | string  | false    | whether to wrap around (optional)
`row`           | boolean | false    | align body and thumbnails in a row
`hideAndShowButtonsOnHover` | boolean | true | show navigation buttons on hover

#### Gallery Methods

Name             | Arguments     | Description
---------------- | ------------- | -------------------------
`selectImage`    | index: number | select an image by index
`selectNext`     |               | select next image
`selectPrevious` |               | select previous image

#### Image Attributes

Name        | Type    | Default  | Description
----------- | ------- | -------- | ----------------------------
`image`     | string  |          | image source
`thumbnail` | string  | `""`     | thumbnail source (optional)
`alt`       | string  | `""`     | alt text (optional)

### Gallery Header Attributes

Name            | Type              | Default  | Description
--------------- | ----------------- | -------- | ---------------------
`galleryTitle`  | string            |          | title of the gallery
`target`       | GalleryComponent  |          | gallery component (required if outside of it)

### Gallery Body Attributes

Name            | Type              | Default  | Description
--------------- | ----------------- | -------- | ---------------------
`target`       | GalleryComponent  |          | gallery component (required if outside of it)

### Gallery Body Events  

Name                    | Description
------------            | ------------------------------------------------------------------------
`galleryBodyImageClick` | Fired when the selected image on the gallery body is clicked.


### Gallery Footer Attributes

Name            | Type              | Default  | Description
--------------- | ----------------- | -------- | ---------------------
`target`       | GalleryComponent  |          | gallery component (required if outside of it)

### Gallery Thumbnails Attributes

Name            | Type              | Default  | Description
--------------- | ----------------- | -------- | ---------------------
`target`        | GalleryComponent  |          | gallery component (required if outside of it)
