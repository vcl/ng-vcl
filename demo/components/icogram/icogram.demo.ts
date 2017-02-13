import { IcogramComponent } from './icogram.component';

export default {
  name: 'Icogram',
  route: 'icogram',
  category: 'Images',
  tabs: {
    Demo: IcogramComponent,
    'README.md': require("!raw-loader!../../../src/ng-vcl/icogram/README.md"),
    'demo.component.html': require("!raw-loader!./icogram.component.html"),
    'demo.component.ts': require("!raw-loader!./icogram.component.ts")
  }
};
