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
  <template vcl-button-content state="enabled">Only visible in enabled state</template>
  <template vcl-button-content state="disabled">Only visible in disabled state</template>
  <template vcl-button-content state="busy">Only visible in busy state</template>
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
| `prepIconBusy`      | string      |          | icon to be prepended to the label - displayed in the busy state
| `appIconBusy`       | string      |          | Same as prepIconBusy but appended
| `title`             | string      |          | Sets aria-label
| `autoBlur`          | boolean     | true     | if true, the focus is removed via blur() after the action.
| `disableA11yClick`  | boolean     | false    | Deactivate triggering `click` via spacebar or enter  

#### Actions:

| Name                | Description
| ------------        | --------------
| `press`             | Triggered when the button is pressed
| `stateChange`       | Emits the current state of the button: `enabled`, `disabled` or `busy`

*(1) Supports l10n*
