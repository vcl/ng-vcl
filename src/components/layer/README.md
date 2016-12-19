# vcl-layer

A container which stacks up in the z-direction.

## Usage:

```js
import { VCLLayerModule } from 'ng-vcl';

@NgModule({
  imports: [ VCLLayerModule ],
  ...
})
export class AppComponent {}
```

A layer can be defined anywhere in your application

```html
<template vcl-layer #myLayer="layer" [modal]="true">
  <div class="vclPanel vclNoMargin">
    <div class="vclPanelHeader">
      <h3 class="vclPanelTitle">Title</h3>
    </div>
    <div class="vclPanelBody">
      <p class="vclPanelContent">
        Content
        <button vcl-button (tap)="myLayer.close()" label="Close Layer"></button>
      </p>
    </div>
  </div>
</template>

<button vcl-button (tap)="myLayer.open()" label="Open Layer"></button>
```

### Layer base

A vcl-layer-base component defines the position in the DOM where the layers will appear when visible.

```html
<vcl-layer-base name="sidebar"></vcl-layer-base>
```
```html
<template vcl-layer #mySidebarLayer="layer" [base]="'foo'">
  ...
</template>

```

### API

#### vcl-layer Properties:

| Name                | Type        | Default  | Description
| ------------        | ----------- | -------- |--------------
| `modal`             | boolean     | false    | Disables user interaction outside of the layer
| `closeOnOffClick`   | boolean     | true     | Wether a non-modal layer should close when clicked outside

#### vcl-layer-base Properties:

| Name                | Type        | Default  | Description
| ------------        | ----------- | -------- |--------------
| `zIndex`            | number      | 1000     | The z-index of the first layer opened.
