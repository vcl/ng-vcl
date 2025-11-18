# offClick directive

The offClick event fires when a click event is handled and its source is not(!) the element or any of its subelements.  

## Usage

```js
import { VCLOffClickDirective } from '@vcl/ng-vcl';

@NgModule({
  imports: [ VCLOffClickDirective ],
  ...
})
export class AppComponent {}
```

offClick() is called when the click`s source is not DIV1 or DIV2  

```html
<div (offClick)="offClick()">
  DIV1
  <div>
    DIV2
  </div>
</div>
```
