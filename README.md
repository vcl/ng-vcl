# ng-vcl

A comprehensive library of components for Angular 2 with [VCL](http://vcl.github.io/) based styling.

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
npm install https://github.com/ng-vcl/ng-vcl.git
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


## Modules

| Feature          | Status                                       | Docs         |
|------------------|----------------------------------------------|--------------|
| vcl-button       |                                        Ready |            - |

 [1]: https://github.com/angular/material2/blob/master/src/lib/button/README.md


## Demo

Browse the components and check the API by running the demo:

```sh
git clone https://github.com/ng-vcl/ng-vcl.git
cd ng-vcl
npm install
npm run demo
```
Open [http://localhost:3000/](http://localhost:3000/) to see a demo browser
for all components.

