# vcl-tab-nav

The tab nav allows to organize content in tabs.
Only one tab is visible at a given time.

## Usage

```js
import { VCLTabNavModule } from '@vcl/ng-vcl';

@NgModule({
  imports: [ VCLTabNavModule ],
  ...
})
export class AppComponent {}
```

```html
<vcl-tab-nav>
  <vcl-tab>
    <vcl-label>Tab1</vcl-label>
    Content1
  </vcl-tab>
  <vcl-tab>
    <vcl-label>Tab2</vcl-label>
    Content2
  </vcl-tab>
  <vcl-tab [disabled]="true">
    <vcl-label>Tab3</vcl-label>
    Content3
  </vcl-tab>
</vcl-tab-nav>
```

### API

#### vcl-tab-nav attributes

| Name                     | Type        | Default  | Description
| ------------             | ----------- | -------- |--------------
| `selectedTabIndex`       | number      |        0 | The index of the currently visible tab
| `borders`                | boolean     |    false | Enables borders for the tab-nav
| `layout`                 | string      |          | The layout: `undefined` , `"left"` or `"right"`

#### Events

| Name                             | Type             | Description
| ---------------------            | ---------------  | -
| `selectedTabIndexChange`         | number           | emits the new value when the tab changes


#### vcl-tab attributes

| Name                     | Type        | Default  | Description
| ------------             | ----------- | -------- |--------------
| `disabled`               | boolean     |   false  | Disables the tab when true

