# wormhole

The wormhole directive allows to render templates and components in the DOM.

## Usage

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
<ng-template #myFirstWormhole>
  I will be rendered through a wormhole
</ng-template>
```

...and connect it via the wormholeTarget directive.
The template is rendered below the wormhole directive.

```html
<wormhole [connect]="myFirstWormhole"></wormhole>
<!-- The myFirstWormhole template is rendered here -->
```
