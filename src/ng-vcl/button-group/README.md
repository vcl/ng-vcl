# vcl-button-group

A button group which distributes space for each button equally to occupy 100% horizontal space.

## Usage:

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
  <button vcl-button (tap)="buttonClick($event)" label="Action 1"></button>
  <button vcl-button (tap)="buttonClick($event)" label="Action 2"></button>
  <button vcl-button (tap)="buttonClick($event)" label="Action 3"></button>
</vcl-button-group>
 ```

### API

#### Attributes:

| Name                  | Type                   | Default  | Description
| --------------------- | ---------------------- | -------- |--------------
| `mode`                | string                 | `single` | `single` or `multiple`
| `selectedIndex` *(1)* | number, number[]       |          | The selected buttons.

#### Events:

| Name                | Description
| ------------        | --------------
| `change`            | ButtonGroupChange         |          | Selected buttons change

*(1) Supports Two-way binding*

#### Interfaces:

```ts
interface ButtonGroupChange {
  source: ButtonComponent;
  index: number | number[];
}
```
