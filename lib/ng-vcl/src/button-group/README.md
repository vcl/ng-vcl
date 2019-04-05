# vcl-button-group

A button group which distributes space for each button equally to occupy 100% horizontal space.

## Usage

```js
import { VCLButtonGroupModule } from 'ng-vcl';

@NgModule({
  imports: [ VCLButtonGroupModule ],
  ...
})
export class AppComponent {}
```

```html
<vcl-button-group mode="single">
  <button vcl-button [value]="1">Action 1</button>
  <button vcl-button [value]="2">Action 2</button>
  <button vcl-button [value]="3">Action 3</button>
</vcl-button-group>
```

### API

#### Attributes

| Name                  | Type                           | Default  | Description
| --------------------- | ----------------------         | -------- |--------------
| `ngModel`             | number &#124; number[]         |          | Index of the selected button(s)
| `mode`                | string                         | `single` | `single` or `multiple`

#### Events

| Name                  | Type                           | Description
| -                     | -                              | -
| `selectionChange`     | event (number &#124; number[]) | Triggers when selected buttons change
