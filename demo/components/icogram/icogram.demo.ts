import { IcogramComponent } from './icogram.component';

export default {
  name: 'Icogram',
  path: 'icogram',
  tabs: {
    Demo: IcogramComponent,
    'demo.component.html': require("!raw!./icogram.component.html"),
    'demo.component.ts': require("!raw!./icogram.component.ts")
  }
};
