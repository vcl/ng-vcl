import { FormControlLabelComponent } from './form-control-label.component';

export default {
  name: 'Form Control Label',
  path: 'form-control-label',
  category: 'Forms',
  tabs: {
    Demo: FormControlLabelComponent,
    'README.md': require("!raw-loader!../../../src/components/form-control-label/README.md"),
    'demo.component.html': require("!raw-loader!./form-control-label.component.html"),
    'demo.component.ts': require("!raw-loader!./form-control-label.component.ts")
  }
};
