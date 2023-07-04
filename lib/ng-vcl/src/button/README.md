# vcl-button

`vcl-button` enhance the HTML `<button>` with styling, features and icogram support.
It is the main control for triggering actions.

## Usage

```typescript
import { VCLButtonModule } from '@vcl/ng-vcl';

@NgModule({
  imports: [ VCLButtonModule ],
  ...
})
export class AppComponent { ... }
```

### Basic button

```html
<button vcl-button (click)="someAction($event)">Action</button>
```

```html
<button vcl-button [selectable]="true" (select)="someAction($event)">
  Select
</button>
```

### Icogram button

```html
<button vcl-button>
  <vcl-icogram appIcon="fas:bolt">Action</vcl-icogram>
</button>
```

### Square button

```html
<button vcl-button square>
  <vcl-icon icon="fas:bolt"></vcl-icon>
</button>
```

### API

#### vcl-button/vcl-button square attributes

| Name         | Type    | Default | Description                                        |
| ------------ | ------- | ------- | -------------------------------------------------- |
| `disabled`   | boolean | false   | State to indicate that the button is disabled      |
| `selectable` | boolean | false   | Button selected state toggles if clicked when true |
| `selected`   | boolean | false   | Whether the button is selected                     |
| `square`     | boolean | false   | Whether the button is square                       |

#### vcl-button/vcl-button events

| Name             | Description                                         |
| ---------------- | --------------------------------------------------- |
| `selectedChange` | Triggered when the button is selected state changes |
