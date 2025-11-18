# vcl-button-group

A button group which distributes space for each button equally to occupy 100% horizontal space.

## Usage

```js
import { VCLButtonGroupComponent } from '@vcl/ng-vcl';

@NgModule({
  imports: [ VCLButtonGroupComponent ],
  ...
})
export class AppComponent {}
```

```html
<vcl-button-group [(value)]="value" mode="single">
  <button vcl-button [value]="1">Action 1</button>
  <button vcl-button [value]="2">Action 2</button>
  <button vcl-button [value]="3">Action 3</button>
</vcl-button-group>
```

### API

#### Attributes

| Name                  | Type                           | Default  | Description
| --------------------- | ----------------------         | -------- |--------------
| `value`               | any &#124; any[]               |          | Index of the selected button(s)
| `selectionMode`       | `single` \| `multiple`         | `single` | Select only one or multiple buttons

#### Events

| Name                  | Type                           | Description
| -                     | -                              | -
| `valueChange`         | event (any &#124; any[])       | Triggers when selected buttons change
