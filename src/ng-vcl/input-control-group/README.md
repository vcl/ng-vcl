# vcl-input-control-group

Input-Control-Group to handle the error-state of any object.

[//]: # (.vclError, .vclWarning, .vclSuccess - classes can be used to style the state message.)

## Usage

```js
import { VCLInputControlGroupModule } from '@ng-vcl/ng-vcl';

@NgModule({
  imports: [ VCLInputControlGroupModule ],
  ...
})
export class AppComponent {}
```

```html
<vcl-input-control-group [type]="type" [label]="label">
  <input vcl-input type="text" />
</vcl-input-control-group>
```

### API

#### Attributes

| Name                | Type                                                       | Default            | Description   |
| ------------        | -----------                                                | ------------------ |-------------- |
| `type`              | 'error' &#124; 'warning' &#124; 'success' &#124; undefined |                    |               |
| `label`             | string                                                     |                    |               |
| `inline`            | boolean                                                    | false              | &nbsp;        |
| `notInline`         | boolean                                                    | true               | readonly      |
