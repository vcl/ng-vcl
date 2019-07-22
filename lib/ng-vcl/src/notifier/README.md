# vcl-notifier

Growl-style notifiers

## Usage

```js
import { VCLNotifierModule, VCLLayerModule } from 'ng-vcl';

@NgModule({
  imports: [ 
    VCLNotifierModule,
  ],
  ...
})
export class AppComponent {}
```

```js
@Component({ ... })
export class MyComponent {

  constructor(private notifier: NotifierService) {}

  info() {
    this.notifier.info({
      text: 'An info message'
    });
  }
  success() {
    this.notifier.success({
      text: 'A success message',
      position: NotifierPosition.BottomRight
    });
  }
  warning() {
    this.notifier.warning({
      text: 'A warning',
      showCloseButton: false,
      timeout: 10000
    });
  }
  error() {
    this.notifier.error({
      text: 'An error message',
      timeout: false
    });
  }
  custom() {
    this.notifier.show({
      text: '<b>A <i>custom</i> message</b>',
      html: true,
      backgroundColor: 'black',
      textColor: 'white',
      position: NotifierPosition.TopLeft,
      showCloseButton: false,
      timeout: 10000
    });
  }
}
```

### API

```ts
export enum NotifierType {
  None,
  Info,
  Success,
  Warning,
  Error
}

export enum NotifierPosition {
  TopRight,
  Top,
  TopLeft,
  BottomRight,
  Bottom,
  BottomLeft,
}

export interface NotifierOptions {
  text?: string;
  html?: boolean;
  type?: NotifierType;
  showCloseButton?: boolean;
  position?: NotifierPosition;
  timeout?: number | boolean;
  backgroundColor?: string;
  textColor?: string;
}
```
