# vcl-checkbox

A Checkbox utilizing `vcl-icon`

## Usage

```typescript
import { VCLCheckboxModule } from '@vcl/ng-vcl';

@NgModule({
  imports: [ VCLCheckboxModule ],
  ...
})
export class AppComponent {}
```

```html
<vcl-checkbox [(checked)]="value">Check!</vcl-checkbox>
```

### API

#### Attributes

| Name       | Type    | Default | Description                  |
| ---------- | ------- | ------- | ---------------------------- |
| `checked`  | boolean | false   | State of checkbox            |
| `tabindex` | number  | 0       | The tabindex of the checkbox |
| `disabled` | boolean | false   | Disables checkbox if true    |

### Events

| Name            | Type | Description                              |
| --------------- | ---- | ---------------------------------------- |
| `checkedChange` | any  | Fired when the checked state has changed |
