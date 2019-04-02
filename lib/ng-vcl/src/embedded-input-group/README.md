# vcl-embedded-input-group

Embedded-Input-Group

Adds the possibility to prepend and append icons or buttons inside of input fields.

## Usage

```html

Icon left and placeholder text
<vcl-embedded-input-group prepIcon="fas:search">
  <input vclEmbeddedInputGroup placeholder="placeholder text" />
</vcl-embedded-input-group>

Placeholder text and icon on the right
<vcl-embedded-input-group appIcon="fas:times-circle">
  <input vclEmbeddedInputGroup placeholder="Postcode, City, Name of the Workshop" />
</vcl-embedded-input-group>

Button on the right
<vcl-embedded-input-group>
  <input vclEmbeddedInputGroup />
  <button vcl-icon-button vclEmbeddedInputGroup (click)="someAction($event)" [icon]="'fas:search'"></button>
</vcl-embedded-input-group>

Left icon and button on the right
<vcl-embedded-input-group prepIcon="fas:cog" appIcon="fas:times-circle">
  <input vclEmbeddedInputGroup />
  <button vcl-icon-button vclEmbeddedInputGroup (click)="someAction($event)" [icon]="'fas:times-circle'"></button>
</vcl-embedded-input-group>
```

### API

#### vcl-embedded-input-group attributes

| Name                                | Type        | Default            | Description
| ----------------------------------  | ----------- | ------------------ |--------------
| `disabled`                          | boolean     | false              | Disables the input group when true
| `prepIcon`                          | string      |                    | Prepenced icon
| `appIcon`                           | string      |                    | Appended icon
