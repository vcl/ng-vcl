# Angular VCL

A comprehensive library of components for Angular 2
with [VCL](http://vcl.github.io/) based styling.

## Installation

```sh
npm install https://github.com/ng-vcl/ng-vcl.git
```

## Usage

```js
// Import the complete ng-vcl
import { VCL_DIRECTIVES } from 'ng-vcl';
// or specific components
import { ICON_DIRECTIVES, LAYER_DIRECTIVES } from 'ng-vcl';

@Component({
  selector: 'app',
  directives: [ICON_DIRECTIVES],
  template: `<vcl-icon [src]="'http://materialdesignicons.com/api/download/icon/png/E4A14909-3821-4DB1-A739-4DA464ABEEB7/36'"></vcl-icon>`
})
export class AppComponent {
}

```

Check the demo for the complete API documentation

## Demo

Browse the components and check the API by running the demo:

```
git clone https://github.com/ng-vcl/ng-vcl.git
cd ng-vcl
npm install
npm run demo
```
Open [http://localhost:3000/icon](http://localhost:3000/icon) in your browser
