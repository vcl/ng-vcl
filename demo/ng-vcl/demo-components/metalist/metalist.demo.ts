import { MetalistComponent } from './metalist.component';

export default {
  name: 'Metalist',
  route: 'metalist',
  category: 'Other',
  tabs: {
    Demo: MetalistComponent,
    'demo.component.html': require("!raw-loader!./metalist.component.html"),
    'demo.component.ts': require("!raw-loader!./metalist.component.ts")
  }
};
