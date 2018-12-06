# vcl-modal

A modal based on layer module.

## Usage

```html
<vcl-modal
  (tapButton)="onTap($event)"
  title="Modal dialog"
  [showClose]="true"
  [buttons]="[{label: 'close', class: 'vclTransparent vclOutline', onTap:'close'}, {label: 'Send Data', class: 'vclEmphasized', onTap:'send'}]">
</vcl-modal>
```

### API

#### vcl-modal attributes

| Name              | Type            | Default  | Description
| ----------------- | --------------- | -------- |--------------
| `title`           | string          |          | Title of modal
| `showClose`       | boolean         | False    | Show close button right up corner
| `class`           | string          |          | Additional panel class
| `buttons`         | ButtonOptions[] | []       | List of buttons


```js
export interface ButtonOptions {
  label?: string;
  class?: string;
  onTap?: string;
}
```