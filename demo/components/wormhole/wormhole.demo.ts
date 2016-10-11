import { WormholeComponent } from './wormhole.component';

export default {
  name: 'wormhole',
  path: 'wormhole',
  tabs: {
    Demo: WormholeComponent,
    'demo.component.html': require("!raw!./wormhole.component.html"),
    'demo.component.ts': require("!raw!./wormhole.component.ts")
  }
};
