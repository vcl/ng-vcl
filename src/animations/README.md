# ng-vcl Animations

Animations for the [@ng-vcl/ng-vcl](https://ng-vcl.github.io/ng-vcl/) web components.

## Features

- Add animations to ng-vcl components by just importing modules
- Can be easily customized for different animation UX by extending or forking

## Status

As this module is funcionally not invasive, it can be used with negligible risk.

Animations for the following components are defined:

- checkbox
- layer
- popover
- token


## Installation

```sh
npm install @ng-vcl/animations --save
```

## Usage

```js
// Before your app is loaded
import { vclCheckboxAnimations, vclLayerAnimations, vclPopoverAnimations, vclTokenAnimations } from '@ng-vcl/animations';

vclCheckboxAnimations(); // enables checkbox animations
vclLayerAnimations(); // enables layer animations
vclPopoverAnimations(); // enables popover animations
vclTokenAnimations(); // enables token animations
```
