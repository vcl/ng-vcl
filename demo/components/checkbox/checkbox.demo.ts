import { CheckboxComponent } from './checkbox.component';

export default {
  name: 'Checkbox',
  route: 'checkbox',
  category: 'Form Controls',
  tabs: {
    Demo: CheckboxComponent,
    'README.md': require("!raw-loader!../../../src/ng-vcl/checkbox/README.md"),
    'demo.component.html': require("!raw-loader!./checkbox.component.html"),
    'demo.component.ts': require("!raw-loader!./checkbox.component.ts")
  }
};
