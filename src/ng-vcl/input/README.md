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
<input vcl-input [(ngModel)]="data">
<input vcl-input autoselect>
```

### API

#### vcl-input attributes

Name            | Type    | Default | Description
--------------- | ------- | ------- | -----------------------------------------------
`disabled`      | boolean | false   | Disables the input when true

#### Directives

`input[vcl-input][autoselect]`      | selects text on focus
