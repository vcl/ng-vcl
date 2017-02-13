# wormhole directive

The wormhole directive allows to render a template somewhere else in the DOM.

## Usage:

```js
import { VCLWormholeModule } from 'ng-vcl';

@NgModule({
  imports: [ VCLWormholeModule ],
  ...
})
export class AppComponent {}
```

Use the the `wormhole` directive to create a wormhole template...
```html

<template #myFirstWormhole>
  I will be rendered through a wormhole
</template>
```

...and connect it via the wormholeTarget directive.
The wormhole template is rendered within the element.
```html
<div [wormhole]="myFirstWormhole">
  <!-- The myFirstWormhole template is rendered here -->
</div>

```

Get a reference to the generated wormhole by using the @ViewChild(ren)/@ContentChild(ren) decorators
```js

@Component(...)
class MyComp {
  ...
  @ViewChild('myFirstWormhole')
  myFirstWormhole;
  ...
}
```
