# vcl-navigation

The navigation groups navigation items to form a navigation menu.

## Usage

```js
import { VCLNavigationModule } from '@vcl/ng-vcl';

@Component({
  imports: [ VCLNavigationModule ],
  ...
})
export class AppComponent {}
```

```html
<vcl-navigation>
  <vcl-navigation-item>
    <vcl-navigation-label>
      <vcl-icogram>
        <vcl-icon vclPrepend icon="vcl:home"></vcl-icon>
        Home
      </vcl-icogram>
    </vcl-navigation-label>
  </vcl-navigation-item>
  <vcl-navigation-item>
    <vcl-navigation-label>
      <vcl-icogram>
        <vcl-icon vclPrepend icon="vcl:bicycle"></vcl-icon>
        Products
      </vcl-icogram>
    </vcl-navigation-label>
    <vcl-navigation>
      <vcl-navigation-item>
        <vcl-navigation-label>Product 1</vcl-navigation-label>
      </vcl-navigation-item>
      <vcl-navigation-item>
        <vcl-navigation-label>Product 2</vcl-navigation-label>
      </vcl-navigation-item>
    </vcl-navigation>
  </vcl-navigation-item>
  <vcl-navigation-item>
    <vcl-navigation-label>
      <vcl-icogram>
        <vcl-icon vclPrepend icon="vcl:mail"></vcl-icon>
        Contact
      </vcl-icogram>
    </vcl-navigation-label>
  </vcl-navigation-item>
</vcl-navigation>
```

### API

#### vcl-navigation attributes

| Name                     | Type                           | Default        | Description                                    |
| ------------------------ | -----------                    | --------       |----------------------------------------------- |
| `layout`                 | 'horizontal' \| 'vertical'     | 'horizontal'   | 

#### vcl-navigation-item attributes

| Name                     | Type        | Default  | Description                                    |
| ------------------------ | ----------- | -------- |----------------------------------------------- |
| `opened`                 | boolean     | false    | if true and nested this opens the subitems     |
| `selected`               | boolean     | false    | Wether the item is selected                    |
