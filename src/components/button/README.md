# vcl-button

`vcl-button` enhances the HTML `<button>` with styling and features.
It is the main control for triggering actions.

## Usage:

```js
import { VCLButtonModule } from 'ng-vcl';

@NgModule({
  imports: [ VCLButtonModule ],
  ...
})
export class AppComponent {}
```

 ```html
<button vcl-button (click)="someAction($event)" label="Action" appIcon="fa:bolt"></button>
 ```

### API 

#### Properties:

| Name                | Type        | Default  | Description
| ------------        | ----------- | -------- |--------------
| `label` *(1)*       | string      |          | Sets aria-label
| `busy`              | boolean     | false    | State to indicate that an operation is in progress
| `flexLabel` *(1)*   | boolean     | false    | The label gets a flex layout property if true 
| `prepIcon`          | string      |          | icon to be prepended to the label 
| `appIcon`           | string      |          | Same as prepIcon but appended 
| `prepIconBusy`      | string      |          | icon to be prepended to the label - displayed in the busy state 
| `appIconBusy`       | string      |          | Same as prepIconBusy but appended 
| `title`             | string      |          | Sets aria-label 
| `autoBlur`          | boolean     | true     | if true, the focus is removed via blur() after the action. 

#### Actions:

| Name                | Description
| ------------        | --------------
| `press`             | Triggered when the button is pressed

1: Supports l10n
