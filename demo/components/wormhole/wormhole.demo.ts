import { WormholeComponent } from './wormhole.component';

export default {
  name: 'Wormhole',
  route: 'wormhole',
  category: 'Other',
  tabs: {
    Demo: WormholeComponent,
    'README.md': require("!raw-loader!../../../src/directives/wormhole/README.md"),
    'demo.component.html': require("!raw-loader!./wormhole.component.html"),
    'demo.component.ts': require("!raw-loader!./wormhole.component.ts")
  }
};
