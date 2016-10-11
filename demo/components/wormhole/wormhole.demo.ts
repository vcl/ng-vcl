import { WormholeComponent } from './wormhole.component';

export default {
  name: 'Wormhole',
  path: 'wormhole',
  tabs: {
    Demo: WormholeComponent,
    'demo.component.html': require("!raw!./wormhole.component.html"),
    'demo.component.ts': require("!raw!./wormhole.component.ts")
  }
};
