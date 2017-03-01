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
  <button vcl-button (click)="buttonClick($event)" label="Action 1"></button>
  <button vcl-button (click)="buttonClick($event)" label="Action 2"></button>
  <button vcl-button (click)="buttonClick($event)" label="Action 3"></button>
</vcl-button-group>
 ```

### API

#### Properties:

| Name                  | Type                   | Default  | Description
| --------------------- | ---------------------- | -------- |--------------
| `mode`                | string                 | `single` | `single` or `multiple`
| `selectedIndex` *(1)* | number, number[]       |          | 2-Way-Binding. The selected buttons.  

#### Interfaces:

```ts
interface ButtonGroupChange {
  source: ButtonComponent;
  index: number | number[];
}
```
*(1) Supports Two-way binding*