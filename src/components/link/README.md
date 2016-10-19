# vcl-link

The anchor tag with VCL and Angular awareness.

## Usage

```html
<a vcl-link [href]="'http://www.example.com'" [label]="'Example Link'" [prepIcon]="'fa:chevron-right'"></a>
```

### API 

#### Properties:

| Name                | Type        | Default  | Description
| ------------        | ----------- | -------- |--------------
| `href`              | string      |          | `href` attribute 
| `scheme`            | string      |          | URL scheme to be used, e. g. `tel`, `mailto` etc. 
| `label` *(1)*       | string      |          | textual label with automatic l10n lookup 
| `title` *(1)*       | string      |          | textual title with automatic Ember-i18n lookup 
| `prepIcon`          | string      |          | icon to be prepended to the label 
| `appIcon`           | string      |          | icon to be appended to the label 
| `disabled`          | boolean     | false    | disabled if `true` 

*(1) Supports l10n*
