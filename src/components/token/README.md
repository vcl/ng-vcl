# vcl-token

## Usage:

```javascript
import { VCLTokenModule } from 'ng-vcl';

@NgModule({
  imports: [ VCLTokenModule ],
  ...
})
export class AppComponent {}
```

## single token:

```html
<vcl-token label="mytoken" [selected]="false" [removeable]="false" class="myclass"></vcl-token>
```

## token-list:

```html
<vcl-token-list [tokens]="tokenList" (onChange)="changed($event);"></vcl-token-list>
```

## token-insert

```html
<vcl-token-input [tokens]="tokenList" (onChange)="changed($event);"></vcl-token-input>
```

### API

#### token:

Name         | Type    | Default | Description
------------ | ------- | ------- | ---------------------------------------
`label`      | string  |         | label-text inside of the token
`selected`   | boolean | false   | if true, the token is highlighted
`removeable` | boolean | false   | if true, the remove-cross is shown
`onRemove`   | event   |         | called when the remove-button is tabbed

#### token-list:

Name         | Type     | Default | Description
------------ | -------- | ------- | ------------------------------------------------------------
`tokens`     | object[] | []      | array with token-objects { label: string, selected: boolean}
`onChange`   | event  |    | called when the selection of token changes


#### token-input:

Name         | Type     | Default | Description
------------ | -------- | ------- | ------------------------------------------------------------
`tokens`     | object[] | []      | array with token-objects { label: string }
`onChange`   | event  |    | called when the selection of token changes
