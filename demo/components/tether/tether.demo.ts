import { TetherComponent } from './tether.component';

export default {
  name: 'Tether',
  path: 'tether',
  tabs: {
    Demo: TetherComponent,
    'demo.component.html': require("!raw!./tether.component.html"),
    'demo.component.ts': require("!raw!./tether.component.ts")
  }
};
