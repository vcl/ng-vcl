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

Use the the wormhole directive to create a wormhole template...
```html

<template wormhole #myFirstWormhole="wormhole">
  I am a wormhole
</template>
```

...and connect it via the connectWormhole directive.
The wormhole template is rendered within the element.
```html
<div [connectWormhole]="myFirstWormhole">
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
