import { CheckboxComponent } from './checkbox.component';

export default {
  name: 'Checkbox',
  path: 'checkbox',
  tabs: {
    Demo: CheckboxComponent,
    'README.md': require("!raw!../../../src/components/checkbox/README.md"),
    'demo.component.html': require("!raw!./checkbox.component.html"),
    'demo.component.ts': require("!raw!./checkbox.component.ts")
  }
};
