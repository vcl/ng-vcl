# vcl-panel

A panel consisting a body, header and footer. All elements are optional.
There is a dialog variant, optimized for modal dialogs.

## Usage

```js
import { VCLPanelModule } from '@vcl/ng-vcl';

@NgModule({
  imports: [
    VCLPanelModule
  ],
  ...
})
export class AppComponent {}
```

```html
<vcl-panel>
  <vcl-panel-title>Panel Title</vcl-panel-title>
  Panel Content
  <vcl-panel-footer>Panel Footer</vcl-panel-footer>
</vcl-panel>

<vcl-panel-dialog [showCloseButton]="true">
  <vcl-panel-title>Panel Title</vcl-panel-title>
  <div class="row gutterx-3 align-items-center">
    <vcl-icon icon="fas:exclamation-circle" class="scale300p"></vcl-icon>
    <div>Panel Content</div>
  </div>
  <button
    type="button"
    vcl-button
    vclPanelFooterButton
    class="transparent outline">
    Cancel
  </button>
  <button type="button" vcl-button vclPanelFooterButton class="emphasized">
    Save Changes
  </button>
</vcl-panel-dialog>
```

### API

#### Attributes

| Name              | Type                                                    | Default | Description                        |
| ----------------- | ------------------------------------------------------- | ------- | ---------------------------------- |
| `showCloseButton` | boolean                                                 | false   | Shows a close button in the header |
| `type`            | 'success' \| 'danger' \| 'warning' \| 'error' \| 'info' |         | Semantic coloring                  |

#### Events

| Name    | Description                            |
| ------- | -------------------------------------- |
| `close` | Fired when the close button is clicked |
