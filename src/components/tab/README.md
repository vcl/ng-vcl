# vcl-tab-nav
The tab nav allows to organize content in tabs.
Only one tab is visible at a given time.

## Usage:

```js
import { VCLTabNavModule } from 'ng-vcl';

@NgModule({
  imports: [ VCLTabNavModule ],
  ...
})
export class AppComponent {}
```

```html
<vcl-tab-nav>
  <vcl-tab>
    <template vcl-tab-label>Tab1</template>
    <template vcl-tab-content>
      Content1
    </template>
  </vcl-tab>
  <vcl-tab>
    <template vcl-tab-label>Tab2</template>
    <template vcl-tab-content>
      Content2
    </template>
  </vcl-tab>
  <vcl-tab [disabled]="true"><template vcl-tab-label>Tab3 (disabled)</template>
    <template vcl-tab-content>
      Content3
    </template>
  </vcl-tab>
</vcl-tab-nav>
```

### API 

#### vcl-tab-nav Properties:

| Name                     | Type        | Default  | Description
| ------------             | ----------- | -------- |--------------
| `selectedTabIndex` *(1)* | number      |        0 | The index of the currently visible tab
| `borders`                | boolean     |    false | Enables borders for the tab-nav
| `layout`                 | string      |          | The layout: `null`, `"left"` or `"right"`
| `tabbableClass`          | string      |          | Modifier classes for vclTabbable
| `tabsClass`              | string      |          | Modifier classes for vclTabs
| `tabContentClass`        | string      |          | Modifier classes for vclTabContent

#### vcl-tab Properties:

| Name                     | Type        | Default  | Description
| ------------             | ----------- | -------- |--------------
| `disabled`               | boolean     |   false  | Disables the tab when true   
| `tabClass`               | string      |          | Modifier classes for vclTab   

1: Supports Two-way binding
