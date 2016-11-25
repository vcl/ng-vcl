# [ng-vcl](https://ng-vcl.github.io/ng-vcl/)

A comprehensive library of components for Angular 2 with [VCL](http://vcl.github.io/) based styling.<br>
**[Browse the Demo](https://ng-vcl.github.io/ng-vcl/)**

## Features

- Theming/ styling through the [VCL](http://vcl.github.io/)
- I18n baked in
- Highly accessible HTML honoring [WAI-ARIA](https://www.w3.org/WAI/intro/aria) recommendations
- Feature complete, we want you to be able to build standard apps using 80% ng-vcl components
- Extensibility, it is possible to extend components to accomodate custom features
- Straightforward APIs

## Status

ng-vcl is in alpha and under heavy development.
Breaking API changes might occur during alpha.

## Installation

```sh
npm install ng-vcl/ng-vcl#dist --save
```

## Usage

```js
// Import the complete ng-vcl
import { VCLModule } from 'ng-vcl';
// or specific components
import { VCLIconModule, VCLLayerModule } from 'ng-vcl';

@NgModule({
  imports: [
    VCLIconModule,
    ...
  ]
})
export class AppModule { }
```

## Demo / Docs

Open [https://ng-vcl.github.io/ng-vcl/](https://ng-vcl.github.io/ng-vcl/)

OR

```sh
git clone https://github.com/ng-vcl/ng-vcl.git
cd ng-vcl
npm install
npm run demo
```
Open [http://localhost:3000/](http://localhost:3000/) to see the demo browser.

