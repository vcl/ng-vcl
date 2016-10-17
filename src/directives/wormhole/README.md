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

Use the the generateWormhole directive to create a wormhole...
```html

<template generateWormhole #myFirstWormhole="wormhole">
  I am a wormhole
</template>
```

...and connect it via the wormhole directive.
The wormhole template is rendered within the element.
```html
<div [wormhole]="myFirstWormhole">
  <!-- The myFirstWormhole template is rendered here -->
</div>

```

Get a reference to the generated wormhole by using the @ViewChild(ren)/@ContentChild(ren) annotations
```js
import { VCLWormholeGenerator } from 'ng-vcl';

@Component(...)
class MyComp {
  ...
  @ViewChild('myFirstWormhole')
  myFirstWormhole: WormholeGenerator;
  ...
}
```
