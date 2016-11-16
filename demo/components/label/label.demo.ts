import { LabelComponent } from './label.component';

export default {
  name: 'Label',
  path: 'label',
  category: 'Inputs',
  tabs: {
    Demo: LabelComponent,
    'README.md': require("!raw!../../../src/components/label/README.md"),
    'demo.component.html': require("!raw!./label.component.html"),
    'demo.component.ts': require("!raw!./label.component.ts")
  }
};
