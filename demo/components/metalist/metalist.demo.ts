import { MetalistComponent } from './metalist.component';

export default {
  name: 'Metalist',
  path: 'metalist',
  category: 'Component',
  tabs: {
    Demo: MetalistComponent,
    'demo.component.html': require("!raw!./metalist.component.html"),
    'demo.component.ts': require("!raw!./metalist.component.ts")
  }
};
