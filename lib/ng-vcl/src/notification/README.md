# vcl-notifications

Notification messages for events with growl-style support

## Usage

```js
import { VCLNotifierModule, VCLLayerModule } from '@vcl/ng-vcl';

@NgModule({
  imports: [ 
    VCLNotifierModule,
  ],
  ...
})
export class AppComponent {}
```

Inline

```html
<vcl-notification type="success"> 
  <span vclNotificationHeader>Success</span>
  An inline success message
  <span vclNotificationFooter>Footer</span>
</vcl-notification>
```

Growl-style


```ts
@Component({ ... })
export class MyComponent {

  constructor(private notifier: NotifierService) {}

  info() {
    this.notifier.queue({
      content: 'A message'
    });
  }
  info() {
    this.notifier.info({
      content: 'An info message'
    });
  }
  success() {
    this.notifier.success({
      content: 'A success message',
      position: NotifierPosition.BottomRight
    });
  }
  warning() {
    this.notifier.warning({
      content: 'A warning',
      showCloseButton: true,
      timeout: 10000
    });
  }
  error() {
    this.notifier.error({
      content: 'An error message',
      timeout: false,
      icon: 'fas:warning',
      position: NotifierPosition.TopLeft,
      class: 'my-error-message'
    });
  }
}
```

```html
<ng-template [vclNotification[]="{}" #n="vclNotification">
  <p>Hello</p>
</ng-template>
<button (click)="n.open()">Show notification</button>

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
  Center
}

export interface NotifierOptions {
  content?: string;
  type?: NotifierType;
  icon: string | false;
  showCloseButton?: boolean;
  position?: NotifierPosition;
  timeout?: number | boolean;
  class?: string;
  context?: any;
}
```
