# ng-vcl Animations

Animations for the [@ng-vcl/ng-vcl](https://ng-vcl.github.io/ng-vcl/) web components.

## Features

- Add animations to ng-vcl components by just importing modules
- Can be easily customized for different animation UX by extending or forking

## Status

As this module is functionally not invasive, it can be used with negligible risk.

Animations for the following components are defined:

- layer
- popover

## Installation

```sh
npm install @ng-vcl/animations --save
```

## Usage

```js
import { LayerAnimationsModule, PopoverAnimationsModule } from '@ng-vcl/animations';

// In your application module
@NgModule({
  ...
  imports: [
    ...
    VCLLayerModule.forRoot(),
    VCLPopoverModule,
    LayerAnimationsModule,  // enables layer animations
    PopoverAnimationsModule // enables popover animations
  ]
})
export class AppModule { }
```
