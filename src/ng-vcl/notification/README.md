# vcl-notification

Notification-style notifications

## Usage:

```ts
@Component({ ... })
export class MyComponent {

  constructor(private gs: NotificationService) {}

  info() {
    this.gs.info('An info message');
  }
  success() {
    this.gs.success('A success message', {
      position: NotificationPosition.BottomRight
    });
  }
  warning() {
    this.gs.warning('A warning', {
      showCloseButton: false,
      timeout: 10000
    });
  }
  error() {
    this.gs.error('An error message', {
      timeout: false
    });
  }
  custom() {
    this.gs.notification('<b>A <i>custom</i> message</b>', {
      html: true,
      backgroundColor: 'black',
      textColor: 'white',
      position: NotificationPosition.TopLeft,
      showCloseButton: false,
      timeout: 10000
    });
  }
}
```

### API

#### AlertOptions:

```ts
export enum NotificationType {
  None,
  Info,
  Success,
  Warning,
  Error
}

export enum NotificationPosition {
  TopRight,
  Top,
  TopLeft,
  BottomRight,
  Bottom,
  BottomLeft,
}

export interface NotificationOptions {
  text?: string; 
  html?: boolean;
  type?: NotificationType;
  showCloseButton?: boolean;
  position?: NotificationPosition;
  timeout?: number | boolean;
  backgroundColor?: string;
  textColor?: string;
}
```
