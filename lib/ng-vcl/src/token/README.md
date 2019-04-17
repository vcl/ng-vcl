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
<vcl-token>mytoken</vcl-token>
```

## single selected token

```html
<vcl-token [selected]="true">mytoken</vcl-token>
```

## single removable token

```html
<vcl-token [removable]="true" (remove)="onRemove()">mytoken</vcl-token>
```

## token-list

```html
<vcl-token-list [selectable]="true" (change)="changed($event);">
  <vcl-token [selected]="true">mytoken 1</vcl-token>
  <vcl-token [selected]="false">mytoken 2</vcl-token>
</vcl-token-list>
```

## token-insert

```html
<vcl-token-input-container (tokensChange)="changed($event);">
  <input vclInput vclTokenInput />
</vcl-token-input-container>
```

### API

#### vcl-token attributes

Name          | Type    | Default   | Description
------------  | ------- | -------   | ---------------------------------------
`value`       | any     |           | token value
`selected`    | boolean | false     | if true, the token is highlighted
`removable`   | boolean | false     | if true, the remove-cross is shown

#### vcl-token events

Name        | Type    | Description
----------- | ------- | ----------------------
`remove`    |         | called when the remove-button is pressed

#### token-list attributes

Name         | Type     | Default  | Description
------------ | -------- | -------- | ------------------------------------------------------------
`ngModel`    | any[]    | any[]    | The values of the selected tokens
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
  value: any;
  selected?: boolean;
}
```
