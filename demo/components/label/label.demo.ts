import { LabelComponent } from './label.component';

export default {
  name: 'Label',
  path: 'label',
  category: 'Buttons',
  tabs: {
    Demo: LabelComponent,
    'README.md': require("!raw-loader!../../../src/components/label/README.md"),
    'demo.component.html': require("!raw-loader!./label.component.html"),
    'demo.component.ts': require("!raw-loader!./label.component.ts")
  }
};
