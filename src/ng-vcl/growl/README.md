# vcl-growl

Growl notifications

## Usage:

```ts
@Component({ ... })
export class MyComponent {

  constructor(private gs: GrowlService) {}

  info() {
    this.gs.info('An info message');
  }
  success() {
    this.gs.success('A success message', {
      position: GrowlPosition.BottomRight
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
    this.gs.growl('<b>A <i>custom</i> message</b>', {
      html: true,
      backgroundColor: 'black',
      textColor: 'white',
      position: GrowlPosition.TopLeft,
      showCloseButton: false,
      timeout: 10000
    });
  }
}
```

### API

#### AlertOptions:

```ts
export enum GrowlType {
  None,
  Info,
  Success,
  Warning,
  Error
}

export enum GrowlPosition {
  TopRight,
  Top,
  TopLeft,
  BottomRight,
  Bottom,
  BottomLeft,
}

export interface GrowlOptions {
  text?: string; 
  html?: boolean;
  type?: GrowlType;
  showCloseButton?: boolean;
  position?: GrowlPosition;
  timeout?: number | boolean;
  backgroundColor?: string;
  textColor?: string;
}
```
