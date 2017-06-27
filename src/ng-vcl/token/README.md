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

Name          | Type    | Default   | Description
------------  | ------- | -------   | ---------------------------------------
`label`       | string  |           | label-text inside of the token
`selected`    | boolean | false     | if true, the token is highlighted
`removable`   | boolean | false     | if true, the remove-cross is shown
`icon`        | string  | fa:remove | remove icon

#### vcl-token events:
Name                  | Type    | Description
-                     | -       | -
`remove`              |         | called when the remove-button is pressed

#### token-list attributes:

Name         | Type     | Default  | Description
------------ | -------- | -------- | ------------------------------------------------------------
`ngModel`    | string[] | string[] | The labels of the selected tokens
`selectable` | boolean  | false    | tokens are selectable if true

#### token-list events:

Name                  | Type     | Description
-                     | -        | -
`change`              | string[] | called when the selection of token changes


#### token-input attributes:

Name                 | Type     | Default              | Description
------------         | -------- | -------              | ------------------------------------------------------------
`ngModel`            | Token[]  | []                   | List of tokens
`selectable`         | boolean  | false                | tokens are selectable if true
`selectedAfterAdd`   | boolean  | false                | tokens are selected after being added if true
`tokenClass`         | string   |                      | additional css class for tokens
`placeholder`        | string   | 'Type to add tokens' | placeholder for the input element
`inputClass`         | string   |                      | additional css class for the input element
`icon`               | string   | fa:remove            | remove icon
`tabindex`           | number   | 0                    | The tabindex of the token-input

Name                    | Type    | Description
-                       | -       | -
`change`                | Token[] | called after tokens are added/removed or the selection of token changes
`add`                   | Token   | called after a token is added
`remove`                | Token   | called after a token is removed
`confirm`               | Token[] | called after `enter` is pressed when input element is empty

#### interfaces

```ts
interface Token {
  label: string;
  selected?: boolean;
  removable?: boolean;
}
```
