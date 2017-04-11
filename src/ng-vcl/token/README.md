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
<vcl-token label="mytoken"></vcl-token>
```

## single selected token:

```html
<vcl-token label="mytoken" [selected]="true"></vcl-token>
```

## single removable token:

```html
<vcl-token label="mytoken" [removable]="true" (remove)="onRemove()"></vcl-token>
```

## token-list:

```html
<vcl-token-list [selectable]="true" (change)="changed($event);">
  <vcl-token label="mytoken 1" [selected]="true"></vcl-token>
  <vcl-token label="mytoken 2" [selected]="false"></vcl-token>
</vcl-token-list>
```

## token-insert

```html
<vcl-token-input (change)="changed($event);"></vcl-token-input>
```

### API

#### vcl-token attributes:

Name          | Type    | Default | Description
------------  | ------- | ------- | ---------------------------------------
`label`       | string  |         | label-text inside of the token
`selected`    | boolean | false   | if true, the token is highlighted
`removable`   | boolean | false   | if true, the remove-cross is shown

#### vcl-token events:
Name                  | Type    | Description
-                     | -       | -
`remove`              |         | called when the remove-button is pressed

#### token-list attributes:

Name         | Type     | Default | Description
------------ | -------- | ------- | ------------------------------------------------------------
`ngModel`    | string[] | []      | The labels of the selected tokens
`selectable` | boolean  | false   | tokens are selectable if true

#### token-list events:

Name                  | Type     | Description
-                     | -        | -
`change`              | string[] | called when the selection of token changes


#### token-inpur attributes:

Name         | Type     | Default | Description
------------ | -------- | ------- | ------------------------------------------------------------
`ngModel`    | Token[]  | []      | List of tokens
`selectable` | boolean  | false   | tokens are selectable if true

Name                    | Type    | Description
-                       | -       | -
`change`                | Token[] | called when tokens are added/removed or the selection of token changes

#### interfaces

```ts
interface Token {
  label: string;
  selected?: boolean;
  removable?: boolean;
}
```
