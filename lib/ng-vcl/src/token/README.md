# vcl-token

## Usage

```js
import { VCLTokenModule } from 'ng-vcl';

@NgModule({
  imports: [ VCLTokenModule ],
  ...
})
export class AppComponent {}
```

## single token

```html
<vcl-token label="mytoken"></vcl-token>
```

## single selected token

```html
<vcl-token label="mytoken" [selected]="true"></vcl-token>
```

## single removable token

```html
<vcl-token label="mytoken" [removable]="true" (remove)="onRemove()"></vcl-token>
```

## token-list

```html
<vcl-token-list [selectable]="true" (change)="changed($event);">
  <vcl-token label="mytoken 1" [selected]="true"></vcl-token>
  <vcl-token label="mytoken 2" [selected]="false"></vcl-token>
</vcl-token-list>
```

## token-insert

```html
<vcl-token-input-container (change)="changed($event);">
  <input vcl-input vcl-token-input />
</vcl-token-input-container>
```

### API

#### vcl-token attributes

Name          | Type    | Default   | Description
------------  | ------- | -------   | ---------------------------------------
`label`       | string  |           | label-text inside of the token
`selected`    | boolean | false     | if true, the token is highlighted
`removable`   | boolean | false     | if true, the remove-cross is shown
`icon`        | string  | fa:times  | remove icon

#### vcl-token events

Name        | Type    | Description
----------- | ------- | ----------------------
`remove`    |         | called when the remove-button is pressed

#### token-list attributes

Name         | Type     | Default  | Description
------------ | -------- | -------- | ------------------------------------------------------------
`ngModel`    | string[] | string[] | The labels of the selected tokens
`selectable` | boolean  | false    | tokens are selectable if true

#### token-list events

Name                  | Type     | Description
--------------------- | -------- | -----------
`tokensChange`        | string[] | called when the selection of token changes

#### vcl-token-input-container attributes

Name                 | Type     | Default              | Description
------------         | -------- | -------              | ------------------------------------------------------------
`ngModel`            | Token[]  | []                   | List of tokens
`selectable`         | boolean  | false                | tokens are selectable if true
`allowDuplicates`    | boolean  | false                | tokens with matching values are not added
`preselect`          | boolean  | false                | tokens are preselected after being added if true
`tokenClass`         | string   |                      | additional css class for tokens
`removeIcon`         | string   | fa:times             | remove icon
`tabindex`           | number   | 0                    | The tabindex of the token-input

#### vcl-token-input-container events

Name            | Type    | Description
--------------- | ------- | ---------------
`tokensChange`  | Token[] | called after tokens are added/removed or the selection of token changes
`confirm`       | Token[] | called after `enter` is pressed when input element is empty

#### interfaces

```ts
interface Token {
  label: string;
  selected?: boolean;
  removable?: boolean;
}
```
