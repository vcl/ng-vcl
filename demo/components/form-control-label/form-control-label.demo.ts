import { FormControlLabelComponent } from './form-control-label.component';

export default {
  name: 'Form Control Label',
  path: 'form-control-label',
  category: 'Forms',
  tabs: {
    Demo: FormControlLabelComponent,
    'demo.component.html': require("!raw!./form-control-label.component.html"),
    'demo.component.ts': require("!raw!./form-control-label.component.ts")
  }
};
