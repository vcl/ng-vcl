import { FormControlLabelComponent } from './form-control-label.component';

export default {
  name: 'Form Control Label',
  path: 'form-control-label',
  category: 'Forms',
  tabs: {
    Demo: FormControlLabelComponent,
    'README.md': require("!raw!../../../src/components/form-control-label/README.md"),
    'demo.component.html': require("!raw!./form-control-label.component.html"),
    'demo.component.ts': require("!raw!./form-control-label.component.ts")
  }
};
