# vcl-link

The anchor tag with VCL and Angular awareness.
Uses vcl-icogram to display a combination of text and icons if `appIcon` or `appIcon` is provided.

## Usage

```html
<a vcl-link href="http://www.example.com" label="Example Link" prepIcon="fa:chevron-right"></a>
```

### API

#### Attributes

| Name                | Type        | Default  | Description
| ------------        | ----------- | -------- |--------------
| `href`              | string      |          | `href` attribute
| `label`             | string      |          | textual label
| `title`             | string      |          | textual title
| `prepIcon`          | string      |          | icon to be prepended to the label
| `appIcon`           | string      |          | icon to be appended to the label
| `disabled`          | boolean     | false    | disabled if `true`
