# vcl-navigation
The nav allows to organize navigation-items.


## Usage:

```js
import { VCLNavigationModule } from 'ng-vcl';

@NgModule({
  imports: [ VCLNavigationModule ],
  ...
})
export class AppComponent {}
```

```html
<vcl-navigation>
  <vcl-navitem [active]=true prepIcon="fa:home" label="Home1"></vcl-navitem>
  <vcl-navitem [active]=true label="Products" prepIcon="fa:bicycle"></vcl-navitem>
  <vcl-navitem [active]=true [selected]="true" label="Pre-selected Item"></vcl-navitem>
  <vcl-navitem [active]=true href="https://example.com/" label="External link"></vcl-navitem>
</vcl-navigation>
```

##Nested:
```html
<vcl-navigation type="vertical">
  <vcl-navitem [active]=true [heading]=true label="Heading" route="navigation"></vcl-navitem>
  <vcl-navitem [active]=true label="Item" route="navigation"></vcl-navitem>
  <vcl-navitem [active]=true label="Item" route="navigation"></vcl-navitem>
  <vcl-navitem [active]=true label="Nested navigation" route="navigation">
    <vcl-navitem [active]=true label="Level 2 Item" route="navigation"></vcl-navitem>
    <vcl-navitem [active]=true label="Level 2 Item" route="navigation"></vcl-navitem>
    <vcl-navitem [active]=true label="Level 2 navigation" route="navigation">
      <vcl-navitem [active]=true label="Level 3 Item" route="navigation"></vcl-navitem>
    </vcl-navitem>
  </vcl-navitem>
</vcl-navigation>
```


### API

#### vcl-navigation Properties:

| Name                     | Type          | Default            | Description
| ------------             | ------------- | ------------------ |--------------
| `selectedItem`     | Object        |                    | The currently selected navitem
| `ariaRole`               | string        |                    |
| `tabindex`               | number        |                  0 |
| `touchAction`            | string        |            'pan-y' |
| `type`                   | string        |       'horizontal' | Direction (horizontal or vertical)
| `subLevelHintIconClosed` | string        | 'fa:chevron-right' | Icon-name for nested closed
| `subLevelHintIconOpened` | string        | 'fa:chevron-down'  | Icon-name for nested opened
| `subLevelHintIconSide`   | string        |            'left'  | On which side should the icon be displayed
| `navigationItems`        | vcl-navitem[] |                 [] | vcl-navitem

#### vcl-navitem Properties:

| Name                     | Type        | Default  | Description
| ------------             | ----------- | -------- |--------------
| `label`                  | string      |          | Label of this item
| `route`                  | string      |          | Route which is used onSelect
| `active`                 | boolean     |    true  | if false, this item is hidden
| `selected`               | boolean     |  false   | if true this item is marked as selected
| `opened`                 | boolean     |  false   | if true and nested this opens the subitems
| `heading`                | boolean     |  false   | if true, this is used as hX
| `href`                   | string      |          | url which is opened onSelect
| `prepIcon`               | string      |          |
| `appIcon`                | string      |          |
