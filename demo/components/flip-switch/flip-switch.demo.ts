import { FlipSwitchComponent } from './flip-switch.component';

export default {
  name: 'Flip-Switch',
  path: 'flip-switch',
  category: 'Inputs',
  tabs: {
    Demo: FlipSwitchComponent,
    'demo.component.html': require("!raw!./flip-switch.component.html"),
    'demo.component.ts': require("!raw!./flip-switch.component.ts")
  }
};
