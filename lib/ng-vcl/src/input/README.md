# vcl-input

Enhanced text input

## Usage

```js
import { VCLInputModule } from 'ng-vcl';

@NgModule({
  imports: [ VCLInputModule ],
  ...
})
export class AppComponent {}
```

```html
<input vclInput [(ngModel)]="data">
<input vclInput autoselect=true>
```

### API

#### vclInput attributes

Name            | Type    | Default | Description
--------------- | ------- | ------- | -----------------------------------------------
`disabled`      | boolean | false   | Disables the input when true
`autoselect`    | boolean | false   | Selects text on focus
