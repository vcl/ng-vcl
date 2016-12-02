import { TetherComponent } from './tether.component';

export default {
  name: 'Tether',
  route: 'tether',
  category: 'Other',
  tabs: {
    Demo: TetherComponent,
    'demo.component.html': require("!raw-loader!./tether.component.html"),
    'demo.component.ts': require("!raw-loader!./tether.component.ts")
  }
};
