# vcl-toolbar

## Usage

```js
import { VCLToolbarModule } from '@ng-vcl/ng-vcl';

@NgModule({
  imports: [ VCLToolbarModule ],
  ...
})
export class AppComponent {}
```

```html
<vcl-toolbar>
    <nav vcl-navigation type="horizontal">
        <vcl-navitem label="Link 1" prepIcon="fas:home" [route]="['#']"></vcl-navitem>
        <vcl-navitem label="Link 2" prepIcon="fas:envelope" [route]="['#']"></vcl-navitem>
    </nav>
</vcl-toolbar>
```

### API

#### Attributes

| Name                  | Type                       | Default                      | Description               |
| ------------          | -----------                | ------------------           |--------------             |
| `ariaLevel`           | number                     | 1                            | &nbsp;                    |
