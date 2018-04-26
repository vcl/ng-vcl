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



### vcl-button:

 ```html
<button vcl-button (click)="someAction($event)">Action</button>
 ```
### vcl-button[label]:

 ```html
<button vcl-button label="Action" appIcon="fa:bolt"></button>
 ```
### vcl-button[selectable]:

 ```html
<button vcl-button selectable (select)="someAction($event)">Action</button>
 ```

### vcl-button[busy]:

 ```html
<button vcl-button [busy]="true" label="I am busy"></button>
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

#### vcl-button[busy] attributes

| Name                | Type        | Default    | Description
| ------------        | ----------- | --------   |--------------
| `busy`              | boolean     | false      | State to indicate that an operation is in progress
| `label`             | string      |            | Sets button label
| `title`             | string      |            | Sets button title
| `flexLabel`         | boolean     | false      | The label gets a flex layout property if true
| `busyIcon`          | string      | fa:refresh | icon shown when busy
| `busyIconPosition`  | string      | "prep"     | "app" or "prep" to append or prepend busy icon

