# vcl-input-control-group

Input-Control-Group to handle the error-state of any object.

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

##### Styling of the state message can be done with these selectors:
* .vclFormControlHint.vclError
* .vclFormControlHint.vclWarning
* .vclFormControlHint.vclSuccess

### API

#### Attributes

| Name                | Type                                                       | Default            | Description   |
| ------------        | -----------                                                | ------------------ |-------------- |
| `type`              | 'error' &#124; 'warning' &#124; 'success' &#124; undefined |                    |               |
| `label`             | string                                                     |                    |               |
| `inline`            | boolean                                                    | false              | &nbsp;        |
| `notInline`         | boolean                                                    | true               | readonly      |
