# vcl-embedded-input-group

Embedded-Input-Group

Adds the possibility to prepend and append icons or buttons inside of input fields.

## Usage:

```html
Button on the right
<vcl-embedded-input-group appendButtonIcon="fa:search" (appendButtonTap)="someAction($event)">
  <input vcl-input vcl-embedded-input type="text" />
</vcl-embedded-input-group>

Left icon and button on the right
<vcl-embedded-input-group prependIcon="fa:cog" appendButtonIcon="fa:times-circle"
  (appendButtonTap)="someAction($event)">
  <input vcl-input vcl-embedded-input type="text" />
</vcl-embedded-input-group>

```

### API

#### vcl-embedded-input-group attributes:

| Name                                | Type        | Default            | Description
| ----------------------------------  | ----------- | ------------------ |--------------
| `prependIcon`                       | string      |                    | left icon
| `prependButtonIcon`                 | string      |                    | left button icon
| `appendButtonIcon`                  | string      |                    | right button icon

#### vcl-embedded-input-group events:

Name                  | Type             | Description
--------------------- | ---------------  | -
`prependButtonTap`    | Event            | emits when the left button is clicked
`appendButtonTap`     | Event            | emits when the right button is clicked


To use with vcl-input add the vcl-embedded-input directive 

```html
  <input vcl-input vcl-embedded-input-group type="text" />
```
