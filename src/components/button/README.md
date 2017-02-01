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
<button vcl-button (tap)="someAction($event)" label="Action" appIcon="fa:bolt"></button>
 ```

A button can have content that is only visible in a specified state
 ```html
<button vcl-button>
  <span vclButtonStateContent*="'enabled'">Only visible in enabled state</span>
  <span vclButtonStateContent*="'disabled'">Only visible in disabled state</span>
  <span vclButtonStateContent*="'busy'">Only visible in busy state</span>
</button>
 ```

### API

#### Properties:

| Name                | Type        | Default  | Description
| ------------        | ----------- | -------- |--------------
| `label` *(1)*       | string      |          | Sets aria-label
| `busy`              | boolean     | false    | State to indicate that an operation is in progress
| `disabled`          | boolean     | false    | State to indicate that the button is disabled
| `flexLabel`         | boolean     | false    | The label gets a flex layout property if true
| `prepIcon`          | string      |          | icon to be prepended to the label
| `appIcon`           | string      |          | Same as prepIcon but appended
| `title`             | string      |          | Sets aria-label
| `autoBlur`          | boolean     | true     | if true, the focus is removed via blur() after the action.
| `disableA11yClick`  | boolean     | false    | Deactivate triggering `click` via spacebar or enter  

#### Events:

| Name                | Description
| ------------        | --------------
| `press`             | Triggered when the button is pressed
| `stateChange`       | Emits the current state of the button: `enabled`, `disabled` or `busy`

*(1) Supports l10n*
