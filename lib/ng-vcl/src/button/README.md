# vcl-button

`vcl-button` enhances the HTML `<button>` with styling and features.
It is the main control for triggering actions.

## Usage

```js
import { VCLButtonModule } from '@ng-vcl/ng-vcl';

@NgModule({
  imports: [ VCLButtonModule ],
  ...
})
export class AppComponent { ... }
```

### button[vcl-button]

```html
<button vcl-button (click)="someAction($event)">Action</button>
```

```html
<button vcl-button [selectable]="true" (select)="someAction($event)">Select</button>
```

### button[vcl-icogram-button]

```html
<button vcl-icogram-button appIcon="fas:bolt">Action</button>
```

### button[vcl-icon-button]

```html
<button vcl-icon-button icon="fas:bolt"></button>
```

### API

#### vcl-button attributes

| Name                | Type        | Default  | Description
| ------------        | ----------- | -------- |--------------
| `disabled`          | boolean     | false    | State to indicate that the button is disabled
| `selectable`        | boolean     | false    | Button selected state toggles if clicked when true
| `selected`          | boolean     | false    | Whether the button is selected

#### vcl-button events

| Name                | Description
| ------------        | --------------
| `select`            | Triggered when the button is selected

#### vcl-icogram-button attributes

| Name                | Type        | Default  | Description
| ------------        | ----------- | -------- |--------------
| `prepIcon`          | string      |          | icon to be prepended to the label
| `appIcon`           | string      |          | Same as prepIcon but appended

#### vcl-icon-button attributes

| Name                | Type        | Default  | Description
| ------------        | ----------- | -------- |--------------
| `icon`              | string      |          | Sets the button icon
