import { IcogramComponent } from './icogram.component';

export default {
  name: 'Icogram',
  path: 'icogram',
  category: 'Images',
  tabs: {
    Demo: IcogramComponent,
    'README.md': require("!raw-loader!../../../src/components/icogram/README.md"),
    'demo.component.html': require("!raw-loader!./icogram.component.html"),
    'demo.component.ts': require("!raw-loader!./icogram.component.ts")
  }
};
