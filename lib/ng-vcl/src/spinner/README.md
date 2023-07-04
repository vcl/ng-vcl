# vcl-spinner

`vcl-spinner` is a simple spinner element with 2 buttons where one increments the provided value, the other decrements.

## Usage

```typescript
import { VCLSpinnerModule } from '@vcl/ng-vcl';

@NgModule({
  imports: [VCLSpinnerModule],
  ...
})
export class AppComponent {
}
```

### Basic spinner

```html
<vcl-spinner [(ngModel)]="value"></vcl-spinner>
```

### Spinner inside input

```html
<vcl-form-control-group [spinner]="true">
  <vcl-label>Sample</vcl-label>
  <vcl-input-field>
    <input vclInput [(ngModel)]="value" type="number" />
  </vcl-input-field>
  <vcl-spinner [(ngModel)]="value"></vcl-spinner>
</vcl-form-control-group>
```

### API

#### vcl-spinner square attributes

| Name          | Type                       | Default    | Description                           |
| ------------- | -------------------------- | ---------- | ------------------------------------- |
| `orientation` | 'horizontal' \| 'vertical' | 'vertical' | Orientation the buttons are placed in |
