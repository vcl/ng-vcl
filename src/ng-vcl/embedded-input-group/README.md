# vcl-embedded-input-group

Embedded-Input-Group

Adds the possibility to prepend and append icons or buttons inside of input fields.

## Usage:

```html
Button on the right
<vcl-embedded-input-group appButtonIcon="fa:search" (appButtonTap)="someAction($event)">
  <input vcl-embedded-input type="text" />
</vcl-embedded-input-group>

Left icon and button on the right
<vcl-embedded-input-group prepIcon="fa:cog" appButtonIcon="fa:times-circle"
  (appButtonTap)="someAction($event)">
  <input vcl-embedded-input type="text" />
</vcl-embedded-input-group>

```

### API

#### vcl-embedded-input-group attributes:

| Name                                | Type        | Default            | Description
| ----------------------------------  | ----------- | ------------------ |--------------
| `disabled`                          | boolean     | false              | Disables the input group when true
| `prepIcon`                          | string      |                    | left icon
| `prepButtonIcon`                    | string      |                    | left button icon
| `appButtonIcon`                     | string      |                    | right button icon

#### vcl-embedded-input-group events:

Name                  | Type             | Description
--------------------- | ---------------  | -
`prepButtonTap`       | Event            | emits when the left button is clicked
`appButtonTap`        | Event            | emits when the right button is clicked

