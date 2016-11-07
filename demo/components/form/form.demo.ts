import { FormComponent } from './form.component';

export default {
  name: 'Form',
  path: 'form',
  category: 'Forms',
  tabs: {
    Demo: FormComponent,
    'README.md': require("!raw!../../../src/components/form/README.md"),
    'demo.component.html': require("!raw!./form.component.html"),
    'demo.component.ts': require("!raw!./form.component.ts")
  }
};
