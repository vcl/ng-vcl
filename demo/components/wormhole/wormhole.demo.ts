import { WormholeComponent } from './wormhole.component';

export default {
  name: 'Wormhole',
  path: 'wormhole',
  category: 'Other',
  tabs: {
    Demo: WormholeComponent,
    'README.md': require("!raw!../../../src/directives/wormhole/README.md"),
    'demo.component.html': require("!raw!./wormhole.component.html"),
    'demo.component.ts': require("!raw!./wormhole.component.ts")
  }
};
