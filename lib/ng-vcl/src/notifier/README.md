# vcl-notifications

Notification messages for events with growl-style support

## Usage

```js
import { VCLNotifierModule } from '@vcl/ng-vcl';

@Component({
  imports: [ 
    VCLNotifierModule,
  ],
  ...
})
export class AppComponent {}
```

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
      icon: 'vcl:error',
      position: NotifierPosition.TopLeft,
      class: 'my-error-message'
    });
  }
}
```

```html
<ng-template [vclNotifier]="{ title: 'Title' }" #n="vclNotifier">
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
