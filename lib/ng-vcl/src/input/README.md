# input

Enhanced text input

## Usage

```typescript
import { VCLInputModule } from '@vcl/ng-vcl';

@NgModule({
  imports: [ VCLInputModule ],
  ...
})
export class AppComponent {}
```

```html
<vcl-form-control-group>
  <vcl-label>Basic input</vcl-label>
  <vcl-input-field>
    <input vclInput [(ngModel)]="data1" />
  </vcl-input-field>
</vcl-form-control-group>

<vcl-form-control-group>
  <vcl-label>Basic textarea</vcl-label>
  <vcl-input-field>
    <textarea
      vclInput
      [(ngModel)]="data1"
      [autogrow]="true"
      [minRows]="5"
      [maxRows]="10"></textarea>
  </vcl-input-field>
</vcl-form-control-group>
```

### API

#### input[vclInput] attributes

| Name         | Type    | Default | Description                  |
| ------------ | ------- | ------- | ---------------------------- |
| `disabled`   | boolean | false   | Disables the input when true |
| `autoselect` | boolean | false   | Selects text on focus        |

#### textarea[vclInput] Attributes

| Name         | Type    | Default | Description                                                                   |
| ------------ | ------- | ------- | ----------------------------------------------------------------------------- |
| `autogrow`   | boolean | false   | Adjusts the `rows` attribute so it matches the current values number of lines |
| `minRows`    | number  |         | The min value for `rows` when using autogrow                                  |
| `maxRows`    | number  |         | The max value for `rows` when using autogrow                                  |
| `autoselect` | boolean | false   | Selects text on focus                                                         |
