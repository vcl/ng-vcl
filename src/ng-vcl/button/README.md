# vcl-button

`vcl-button` enhances the HTML `<button>` with styling and features.
It is the main control for triggering actions.

## Usage:

```js
import { VCLButtonModule } from '@ng-vcl/ng-vcl';

@NgModule({
  imports: [ VCLButtonModule ],
  ...
})
export class AppComponent { ... }
```

### button[vcl-button]:

 ```html
<button vcl-button (click)="someAction($event)">Action</button>
 ```
### button[vcl-button][label]:

 ```html
<button vcl-button label="Action" appIcon="fa:bolt"></button>
 ```
### button[vcl-button][selectable]:

 ```html
<button vcl-button selectable (select)="someAction($event)">Action</button>
 ```

### API

#### vcl-button attributes

| Name                | Type        | Default  | Description
| ------------        | ----------- | -------- |--------------
| `disabled`          | boolean     | false    | State to indicate that the button is disabled

#### vcl-button[label] attributes

| Name                | Type        | Default  | Description
| ------------        | ----------- | -------- |--------------
| `label`             | string      |          | Sets button label
| `title`             | string      |          | Sets button title
| `flexLabel`         | boolean     | false    | The label gets a flex layout property if true
| `prepIcon`          | string      |          | icon to be prepended to the label
| `appIcon`           | string      |          | Same as prepIcon but appended

#### vcl-button[selectable] attributes

| Name                | Type        | Default  | Description
| ------------        | ----------- | -------- |--------------
| `selectable`        | boolean     | false    | Preselect button if true

#### vcl-button[selectable] events:

| Name                | Description
| ------------        | --------------
| `select`            | Triggered when the button is selected
